---
title: "Bill8:Payments - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/commerce8/bill8-payments/edit/main/docs/openapi.json
---
Sentin8 Bill8:Payments - charges, refunds, disputes, settlement channels.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**26 endpoints** across 2 groups.

## payments

### `GET /v1/channel-config`

`GET /v1/channel-config` - read the env's default channel.

Gate: `bill8:payments:channels:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The default channel config | - |
| 404 | No channel configured (routing fails closed) | - |

### `PUT /v1/channel-config`

`PUT /v1/channel-config` - set the env's default channel.

Gate: `bill8:payments:routing:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_channel` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Default channel saved | - |
| 403 | Missing `bill8:payments:routing:write` | - |

### `GET /v1/channels`

`GET /v1/channels` - list the runtime channel registry.

Gate: `bill8:payments:channels:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of channels | `Channel`[] |
| 403 | Missing `bill8:payments:channels:read` | - |

### `GET /v1/charges`

`GET /v1/charges` - list charges.

Gate: `bill8:payments:charges:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `customer_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of charges | `Charge`[] |
| 403 | Missing `bill8:payments:charges:read` | - |

### `POST /v1/charges`

`POST /v1/charges` - create a charge through a settlement channel.

Gate: `bill8:payments:charges:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string | yes | Amount as a decimal string. |
| `application_fee_amount` | string,null | no | Platform fee taken on the charge. |
| `currency` | string | yes | ISO 4217 currency code. |
| `customer_id` | string,null | no | Paying customer. |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |
| `on_behalf_of` | string,null | no | Connected account the charge is on behalf of (split-at-charge). |
| `payment_intent_id` | string,null | no | Originating intent (optional - direct charges carry none). |
| `payment_method_id` | string,null | no | Payment method to charge. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Charge succeeded | `Charge` |
| 402 | Screening blocked / channel declined - nothing written | - |
| 403 | Missing `bill8:payments:charges:write` | - |
| 422 | Domain rejection - nothing written | - |

### `GET /v1/charges/{id}`

`GET /v1/charges/&#123;id&#125;` - read one charge.

Gate: `bill8:payments:charges:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The charge | `Charge` |
| 404 | Charge not found | - |

### `GET /v1/customers`

`GET /v1/customers` - list customers.

Gate: `bill8:payments:customers:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of customers | `Customer`[] |
| 403 | Missing `bill8:payments:customers:read` | - |

### `POST /v1/customers`

`POST /v1/customers` - create a customer.

Gate: `bill8:payments:customers:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | string | yes | Display name. |
| `email` | string,null | no | Email address. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Customer created | `Customer` |
| 403 | Missing `bill8:payments:customers:write` | - |

### `GET /v1/disputes`

`GET /v1/disputes` - list disputes.

Gate: `bill8:payments:disputes:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of disputes | `Dispute`[] |
| 403 | Missing `bill8:payments:disputes:read` | - |

### `POST /v1/disputes`

`POST /v1/disputes` - open a dispute on a charge.

Gate: `bill8:payments:disputes:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string | yes | Amount as a JSON string on the wire. |
| `charge_id` | string | yes | The challenged charge. |
| `created_at` | string | yes | Creation timestamp. |
| `id` | string | yes | Dispute id. |
| `reason` | string | yes | Dispute reason code. |
| `status` | string | yes | Lifecycle state (`needs_response` / `under_review` / `won` / `lost`). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dispute opened | `Dispute` |
| 403 | Missing `bill8:payments:disputes:write` | - |

### `POST /v1/disputes/{id}/evidence`

`POST /v1/disputes/&#123;id&#125;/evidence` - submit evidence (Storage refs).

Gate: `bill8:payments:disputes:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evidence_refs` | string[] | yes | Storage references to evidence documents. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Evidence attached | - |
| 404 | Dispute not found | - |

### `POST /v1/disputes/{id}/resolve`

`POST /v1/disputes/&#123;id&#125;/resolve` - close a dispute with an outcome (PAY-6). A `lost` dispute claws the funds back via a ledger reversal transaction (the ONLY money movement) and returns the charge to `succeeded` minus the disputed amount; a `won` dispute keeps the charge as-is. The `under_review → won\|lost` transition is guarded - resolving twice is a 409, never a second clawback.

Gate: `bill8:payments:disputes:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `outcome` | string | yes | The outcome: `won` (funds stay) or `lost` (funds clawed back). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dispute closed | - |
| 404 | Dispute not found | - |
| 409 | Dispute already closed | - |

### `POST /v1/intents/{id}/handback`

`POST /v1/intents/&#123;id&#125;/handback` - the SCA challenge handback (PAY-12). Completes a held charge from the CHANNEL-VERIFIED result - never a client-asserted outcome. The handback token is single-use.

Gate: `bill8:payments:intents:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `handback_token` | string | yes | The single-use handback token issued at challenge creation. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Held charge completed | - |
| 404 | No held charge for the intent | - |
| 409 | Handback token already used or expired | - |

### `GET /v1/methods`

The static capability matrix of the built-in method types. New methods register as channel data; the catalog reads from the channels' capability matrices at runtime (methods ∪ across channels).

Gate: `bill8:payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Capability matrix of the built-in method types | `MethodCatalogEntry`[] |
| 403 | Missing payments read scope | - |

### `GET /v1/payment-intents`

`GET /v1/payment-intents` - list intents for the env.

Gate: `bill8:payments:intents:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of intents | `PaymentIntent`[] |
| 403 | Missing `bill8:payments:intents:read` | - |

### `POST /v1/payment-intents`

`POST /v1/payment-intents` - create an intent in `requires_confirmation` (no money moves).

Gate: `bill8:payments:intents:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string | yes | Amount as a decimal string. |
| `currency` | string | yes | ISO 4217 currency code. |
| `customer_id` | string,null | no | Paying customer. |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |
| `payment_method_id` | string,null | no | Payment method bound up-front (optional; can be attached later). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Intent created | `PaymentIntent` |
| 400 | Amount must be a positive decimal string | - |
| 403 | Missing `bill8:payments:intents:write` | - |

### `POST /v1/payment-intents/{id}/confirm`

`POST /v1/payment-intents/&#123;id&#125;/confirm` - the guarded `requires_confirmation → processing` transition. Terminal states never regress; confirming a terminal intent is a 409.

Gate: `bill8:payments:intents:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Intent confirmed → processing | `PaymentIntent` |
| 404 | Intent not found | - |
| 409 | Intent already terminal | - |

### `GET /v1/refunds`

`GET /v1/refunds` - list refunds.

Gate: `bill8:payments:refunds:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of refunds | `Refund`[] |
| 403 | Missing `bill8:payments:refunds:read` | - |

### `POST /v1/refunds`

`POST /v1/refunds` - refund a charge (bounded).

Gate: `bill8:payments:refunds:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string,null | no | Amount as a decimal string (defaults to the remaining refundable). |
| `charge_id` | string | yes | The charge to refund. |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Refund succeeded | `Refund` |
| 403 | Missing `bill8:payments:refunds:write` | - |
| 422 | Over-refund / non-succeeded charge - nothing written | - |

### `POST /v1/routing-rules`

`POST /v1/routing-rules` - create a routing rule.

Gate: `bill8:payments:routing:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel_id` | string | yes | Target channel. |
| `method_type` | string,null | no | Method-type matcher (optional). |
| `priority` | integer | yes | Priority (lower evaluated first). |
| `region` | string,null | no | Region matcher (optional). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule created | - |
| 403 | Missing `bill8:payments:routing:write` | - |

### `GET /v1/setup-intents`

`GET /v1/setup-intents` - list setup intents for the env.

Gate: `bill8:payments:setup-intents:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of setup intents | `SetupIntent`[] |
| 403 | Missing `bill8:payments:setup-intents:read` | - |

### `POST /v1/setup-intents`

`POST /v1/setup-intents` - save a method for later use (no charge).

Gate: `bill8:payments:setup-intents:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | string,null | no | Customer whose method is being saved. |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |
| `payment_method_id` | string,null | no | Payment method bound up-front (optional; can be attached later). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Setup intent created | `SetupIntent` |
| 403 | Missing `bill8:payments:setup-intents:write` | - |

### `POST /v1/setup-intents/{id}/confirm`

`POST /v1/setup-intents/&#123;id&#125;/confirm` - the guarded `requires_confirmation → processing` transition for setup intents.

Gate: `bill8:payments:setup-intents:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Setup intent confirmed → processing | `SetupIntent` |
| 404 | Setup intent not found | - |
| 409 | Setup intent already terminal | - |

### `POST /v1/tokens`

`POST /v1/tokens` - mint a single-use token for a payment method.

Gate: `bill8:payments:tokens:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `payment_method_id` | string | yes | The payment method to tokenize (must already exist; the token is a single-use reference to it - card data itself never transits). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Token minted | `TokenResponse` |
| 403 | Missing tokenization scope | - |
| 404 | Payment method not found | - |

### `POST /v1/tokens/{token_value}/consume`

`POST /v1/tokens/&#123;token_value&#125;/consume` - consume a token (single-use guard: the first consume wins; every later consume of the same token is rejected).

Gate: `bill8:payments:tokens:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Token consumed - the payment method id | - |
| 404 | Token not found | - |
| 409 | Token already used or expired | - |


## meta

### `GET /v1/health`

Health probe payload.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |

