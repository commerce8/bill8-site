---
title: "Bill8:Ledger - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/commerce8/bill8-ledger/edit/main/docs/openapi.json
---
Sentin8 Bill8:Ledger - double-entry money engine, balances, payouts, transfers.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**18 endpoints** across 2 groups.

## ledger

### `GET /v1/accounts`

`GET /v1/accounts` - list ledger accounts.

Gate: `bill8:ledger:accounts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of accounts | `AccountResponse`[] |
| 403 | Missing `bill8:ledger:accounts:read` | - |

### `POST /v1/accounts`

`POST /v1/accounts` - create a ledger account with its standard balances (`available`, `pending`).

Gate: `bill8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | string | yes | Account family (`customer` / `platform` / `connected`). |
| `display_name` | string | yes | Display name. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account created | `AccountResponse` |
| 403 | Missing `bill8:ledger:accounts:write` | - |

### `GET /v1/balance-transactions`

`GET /v1/balance-transactions` - list movements (optionally by balance).

Gate: `bill8:ledger:balance-transactions:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `balance_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of transactions | `BalanceTransaction`[] |
| 403 | Missing `bill8:ledger:balance-transactions:read` | - |

### `POST /v1/balance-transactions`

`POST /v1/balance-transactions` - post one double-entry movement.

Gate: `bill8:ledger:balance-transactions:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string | yes | Amount as a decimal string. |
| `credit_balance_id` | string | yes | Credit leg (destination balance). |
| `currency` | string | yes | ISO 4217 currency code. |
| `debit_balance_id` | string | yes | Debit leg (source balance). |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |
| `source_id` | string,null | no | Originating resource id. |
| `source_type` | string,null | no | Originating resource (`charge` / `payout` / …). |
| `transaction_type` | string | yes | Movement type. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Transaction posted | `BalanceTransaction` |
| 403 | Missing `bill8:ledger:balance-transactions:write` | - |
| 422 | Imbalanced/currency-mismatch - nothing written | - |

### `GET /v1/balances`

`GET /v1/balances` - list balances (optionally filtered).

Gate: `bill8:ledger:balances:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | query | no | string |
| `name` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of balances | `Balance`[] |
| 403 | Missing `bill8:ledger:balances:read` | - |

### `GET /v1/balances/{id}`

`GET /v1/balances/&#123;id&#125;` - read one balance.

Gate: `bill8:ledger:balances:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The balance | `Balance` |
| 404 | Balance not found | - |

### `GET /v1/fees`

`GET /v1/fees` - list the configured fee model.

Gate: `bill8:ledger:fees:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of fee entries | `FeeResponse`[] |
| 403 | Missing `bill8:ledger:fees:read` | - |

### `POST /v1/fees`

`POST /v1/fees` - upsert the fee model for a transaction type.

Gate: `bill8:ledger:fees:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bps` | integer | yes |  |
| `currency` | string | yes |  |
| `fixed_amount` | string | yes |  |
| `transaction_type` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Fee model saved | - |
| 403 | Missing `bill8:ledger:fees:write` | - |

### `POST /v1/internal/payout-schedules/run`

`POST /v1/internal/payout-schedules/run` - the Cron proxy-back tick. Creates a payout for each enabled schedule whose available balance meets its minimum. At most one payout per tick (the balance guard itself enforces it: the available row lock serializes).

Gate: `sentin8:cron:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Tick processed | - |

### `GET /v1/payout-schedules`

`GET /v1/payout-schedules` - list schedules.

Gate: `bill8:ledger:payout-schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of schedules | `PayoutScheduleResponse`[] |
| 403 | Missing `bill8:ledger:payout-schedules:read` | - |

### `POST /v1/payout-schedules`

`POST /v1/payout-schedules` - create an automatic payout schedule.

Gate: `bill8:ledger:payout-schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string | yes | The ledger account to pay out. |
| `currency` | string | yes | ISO 4217 currency code. |
| `external_account_ref` | string | yes | The external-account destination (secret-by-reference). |
| `interval` | string | yes | The payout interval (`daily` / `weekly` / `monthly`). |
| `minimum_amount` | string | yes | Payouts fire only when available ≥ minimum. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule created | `PayoutScheduleResponse` |
| 403 | Missing `bill8:ledger:payout-schedules:write` | - |

### `DELETE /v1/payout-schedules/{id}`

`DELETE /v1/payout-schedules/&#123;id&#125;` - disable a schedule.

Gate: `bill8:ledger:payout-schedules:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule disabled | - |
| 404 | Schedule not found | - |

### `GET /v1/payouts`

`GET /v1/payouts` - list payouts.

Gate: `bill8:ledger:payouts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of payouts | `Payout`[] |
| 403 | Missing `bill8:ledger:payouts:read` | - |

### `POST /v1/payouts`

`POST /v1/payouts` - pay out available balance to an external account.

Gate: `bill8:ledger:payouts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string | yes | Ledger account being paid out. |
| `amount` | string | yes | Amount as a decimal string. |
| `currency` | string | yes | ISO 4217 currency code of the payout. |
| `external_account_ref` | string | yes | External account destination (secret-by-reference). |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payout created (pending) | `Payout` |
| 403 | Missing `bill8:ledger:payouts:write` | - |
| 422 | Insufficient available balance - nothing written | - |

### `GET /v1/payouts/{id}`

`GET /v1/payouts/&#123;id&#125;` - read one payout.

Gate: `bill8:ledger:payouts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The payout | `Payout` |
| 404 | Payout not found | - |

### `GET /v1/transfers`

`GET /v1/transfers` - list transfers.

Gate: `bill8:ledger:transfers:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of transfers | `Transfer`[] |
| 403 | Missing `bill8:ledger:transfers:read` | - |

### `POST /v1/transfers`

`POST /v1/transfers` - move funds between connected balances.

Gate: `bill8:ledger:transfers:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string | yes |  |
| `currency` | string | yes |  |
| `from_balance_id` | string | yes |  |
| `idempotency_key` | string,null | no |  |
| `to_balance_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Transfer created | `Transfer` |
| 403 | Missing `bill8:ledger:transfers:write` | - |
| 422 | Insufficient funds - nothing written | - |


## meta

### `GET /v1/health`

Health probe payload.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |

