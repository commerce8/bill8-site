---
sidebar_position: 1
---

# Samples

First calls against a running bill8 deployment - through the BFF
proxy, from cURL and Dart.

## 1. Create a payment intent (checkout flow)

```bash
curl -c jar.txt https://bff.{env}.{org}.example.com/v1/sign-in \
  -H 'content-type: application/json' \
  -d '{"email": "you@example.com", "password": "…"}'

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/payments/v1/intents \
  -H 'content-type: application/json' \
  -d '{
    "merchant_id": "<merchant>",
    "amount": "49.00",
    "denomination": "USD",
    "idempotency_key": "intent-001"
  }'
```

The intent passes Risk screening before the rail; the confirmation
returns a checkout session the payer app renders.

## 2. Subscribe a customer (recurring)

```bash
curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/billing/v1/subscriptions \
  -H 'content-type: application/json' \
  -d '{
    "customer_id": "<customer>",
    "price_id": "<price>",
    "idempotency_key": "sub-001"
  }'
```

Proration computes any mid-cycle adjustment exactly once; invoices
generate per cycle on the declared schedule.

## 3. Verify a webhook delivery (merchant side)

```bash
payload='{"type":"charge.settled","amount":"49.00"}'
sig=$(openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" <<< "$payload" | awk '{print $2}')
# compare against the delivery's X-Bill8-Signature header
```

Every delivery retries with backoff until acknowledged - missed
events dead-letter for replay from the merchant dashboard.

## 4. From Dart (the Checkout pattern)

```dart
final ctx = await fetchRuntimeContext();
final bff = Bff8ApiClient(origin: ctx.origin);

final intent = await bff.post('payments', '/v1/intents', body: {
  'merchant_id': merchantId,
  'amount': '49.00',
  'denomination': 'USD',
  'idempotency_key': 'intent-001',
});
```

## 5. From Rust (vertical consumer)

```rust
use bill8::payments::client::PaymentsClient;

let charge = payments_client
    .capture(&intent_id)
    .await?;
```

The client rides the platform's certificate-presenting transport -
no static secret to leak.