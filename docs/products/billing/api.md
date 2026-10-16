---
title: "Bill8:Billing - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/commerce8/bill8-billing/edit/main/docs/openapi.json
---
Sentin8 Bill8:Billing - subscriptions, invoices, proration, metering.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**20 endpoints**.

## billing

### `POST /v1/coupons`

`POST /v1/coupons` - create a coupon (redemption-limit bounded).

Gate: `bill8:billing:coupons:write`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Coupon created | - |
| 403 | Missing bill8:billing:coupons:write | - |

### `POST /v1/coupons/{code}/redeem`

`POST /v1/coupons/{code}/redeem` - redeem a coupon (row-lock bounded:
concurrent redemptions never exceed the limit; expired coupons and
exhausted limits are rejected).

Gate: `bill8:billing:coupons:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Coupon redeemed | - |
| 404 | Coupon not found | - |
| 409 | Limit exhausted or expired | - |

### `POST /v1/credit-notes`

`POST /v1/credit-notes` - issue an invoice-level adjustment, bounded
by the invoice's paid amount (row-lock serialized - credit notes
adjust invoices; refunds adjust charges).

Gate: `bill8:billing:credit-notes:write`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Credit note issued | - |
| 404 | Invoice not found | - |
| 422 | Over-credit - nothing written | - |

### `POST /v1/credit-notes/{id}/void`

`POST /v1/credit-notes/{id}/void` - void a credit note (terminal).

Gate: `bill8:billing:credit-notes:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Credit note voided | - |
| 404 | Credit note not found | - |
| 409 | Already void | - |

### `POST /v1/credits`

`POST /v1/credits` - grant prepaid value to a customer.

Gate: `bill8:billing:credits:write`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Credit granted | - |
| 403 | Missing bill8:billing:credits:write | - |

### `POST /v1/internal/dunning/retry`

`POST /v1/internal/dunning/retry` - the dunning-ladder tick (BIL-12):
re-charge past-due invoices on the configured schedule. The ladder
is DATA (`dunning_configs` rows): count + backoff per env; after the
final failure the subscription cancels (guarded terminal).

Gate: `sentin8:cron:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dunning tick processed | - |

### `POST /v1/internal/invoices/run`

`POST /v1/internal/invoices/run` - the Cron proxy-back tick: find
subscriptions due this cycle, aggregate usage, finalize invoices,
charge via the payments public API. Idempotent per
(subscription, cycle): a subscription with an open/paid/retrying
invoice covering its current period is skipped.

Gate: `sentin8:cron:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Invoice run processed | - |

### `GET /v1/invoices`

`GET /v1/invoices` - list invoices.

Gate: `bill8:billing:invoices:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of invoices | `Invoice`[] |
| 403 | Missing bill8:billing:invoices:read | - |

### `GET /v1/invoices/upcoming`

`GET /v1/invoices/upcoming` - the read-only upcoming-invoice preview
(BIL-14): projects the next cycle's invoice for a subscription with
ZERO writes.

Gate: `bill8:billing:invoices:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subscription_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The projected upcoming invoice | - |
| 404 | Subscription not found | - |

### `GET /v1/prices`

`GET /v1/prices` - list prices.

Gate: `bill8:billing:prices:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of prices | `Price`[] |
| 403 | Missing bill8:billing:prices:read | - |

### `POST /v1/prices`

`POST /v1/prices` - create a price (immutable once referenced).

Gate: `bill8:billing:prices:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | string | yes | Creation timestamp. |
| `currency` | string | yes | ISO 4217 currency code. |
| `id` | string | yes | Price id. |
| `interval` | string,null | no | Recurring interval (`day` / `week` / `month` / `year`, or `null` for one-off). |
| `pricing_model` | string | yes | Pricing model for metered prices (`flat` / `tiered` / `volume` / `packaged`). |
| `product_id` | string | yes | Owning product. |
| `unit_amount` | string | yes | Unit amount as a JSON string on the wire. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Price created | `Price` |
| 403 | Missing bill8:billing:prices:write | - |

### `POST /v1/products`

`POST /v1/products` - create a product.

Gate: `bill8:billing:products:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Product created | `Product` |
| 403 | Missing bill8:billing:products:write | - |

### `GET /v1/subscriptions`

`GET /v1/subscriptions` - list subscriptions.

Gate: `bill8:billing:subscriptions:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of subscriptions | `Subscription`[] |
| 403 | Missing bill8:billing:subscriptions:read | - |

### `POST /v1/subscriptions`

`POST /v1/subscriptions` - subscribe a customer to a price (with
trial support and proration-consistent cycle math).

Gate: `bill8:billing:subscriptions:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing_cycle_anchor` | string,null | no | Billing-cycle anchor. |
| `customer_id` | string | yes | Subscribing customer. |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |
| `price_id` | string | yes | Price to subscribe to. |
| `quantity` | integer | no | Quantity. |
| `trial_end` | string,null | no | Trial end (when starting with a trial). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Subscription created | `Subscription` |
| 403 | Missing bill8:billing:subscriptions:write | - |

### `GET /v1/subscriptions/proration-quote`

`GET /v1/subscriptions/proration-quote` - quote a hypothetical plan
change (read-only, ZERO writes; the same proration math the real
change applies).

Gate: `bill8:billing:subscriptions:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subscription_id` | query | yes | string |
| `new_unit_amount` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The proration quote | - |
| 404 | Subscription not found | - |

### `GET /v1/subscriptions/{id}`

`GET /v1/subscriptions/{id}` - read one subscription.

Gate: `bill8:billing:subscriptions:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The subscription | `Subscription` |
| 404 | Subscription not found | - |

### `POST /v1/subscriptions/{id}/pause`

`POST /v1/subscriptions/{id}/pause` - pause billing (no invoices
generated while paused; terminal-state guard applies).

Gate: `bill8:billing:subscriptions:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Subscription paused | - |
| 409 | Subscription not pausable | - |

### `POST /v1/subscriptions/{id}/resume`

`POST /v1/subscriptions/{id}/resume` - resume with proration against
the remaining cycle (cent-exact, BIL-4 math).

Gate: `bill8:billing:subscriptions:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Subscription resumed (prorated) | - |
| 409 | Subscription not paused | - |

### `POST /v1/tax-rates`

`POST /v1/tax-rates` - configure a jurisdiction rate.

Gate: `bill8:billing:tax-rates:write`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Tax rate saved | - |
| 403 | Missing bill8:billing:tax-rates:write | - |

### `POST /v1/usage-records`

`POST /v1/usage-records` - meter a usage event (deterministic
aggregation at invoice time; duplicate keys counted once).

Gate: `bill8:billing:usage-records:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |
| `quantity` | integer | yes | Quantity consumed. |
| `subscription_item_id` | string | yes | Owning subscription item. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Usage recorded | `UsageRecord` |
| 403 | Missing bill8:billing:usage-records:write | - |

