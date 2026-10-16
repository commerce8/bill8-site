---
title: "Bill8:Risk - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/commerce8/bill8-risk/edit/main/docs/openapi.json
---
Sentin8 Bill8:Risk - rules, screening, review queue.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**5 endpoints**.

## risk

### `GET /v1/reviews`

`GET /v1/reviews` - list the review queue.

Gate: `bill8:risk:reviews:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Review queue | `Review`[] |
| 403 | Missing bill8:risk:reviews:read | - |

### `POST /v1/reviews/{id}/resolve`

`POST /v1/reviews/{id}/resolve` - resolve a review (idempotent).

Gate: `bill8:risk:reviews:write`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Review resolved | - |
| 404 | Review not found | - |
| 409 | Already resolved | - |

### `GET /v1/rules`

`GET /v1/rules` - list rules.

Gate: `bill8:risk:rules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of rules | `Rule`[] |
| 403 | Missing bill8:risk:rules:read | - |

### `POST /v1/rules`

`POST /v1/rules` - create a rule.

Gate: `bill8:risk:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | string | yes | Action on match. |
| `params` | - | yes | Predicate parameters. |
| `predicate` | string | yes | Rule predicate kind. |
| `priority` | integer | no | Evaluation priority. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule created | `Rule` |
| 403 | Missing bill8:risk:rules:write | - |

### `POST /v1/screenings`

`POST /v1/screenings` - screen a charge context (M2M from payments).
The evaluator is pure; the outcome persists as an auditable screening.

Gate: `bill8:risk:screenings:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `charge_context` | - | yes | The charge context to screen (amount, currency, method, region). |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Screening outcome | `Screening` |
| 403 | Missing bill8:risk:screenings:write | - |

