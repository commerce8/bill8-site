---
title: "Bill8:Webhooks - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/commerce8/bill8-webhooks/edit/main/docs/openapi.json
---
Sentin8 Bill8:Webhooks - event materialization, signed delivery.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**5 endpoints**.

## webhooks

### `GET /v1/events`

`GET /v1/events` - list materialized events.

Gate: `bill8:webhooks:events:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of events | `Event`[] |
| 403 | Missing `bill8:webhooks:events:read` | - |

### `GET /v1/events/{id}/deliveries`

`GET /v1/events/&#123;id&#125;/deliveries` - the delivery log for an event.

Gate: `bill8:webhooks:events:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Delivery attempts | `Delivery`[] |
| 403 | Missing `bill8:webhooks:events:read` | - |

### `POST /v1/events/{id}/replay`

`POST /v1/events/&#123;id&#125;/replay` - re-queue a DLQ/failed delivery for manual replay (never silently dropped).

Gate: `bill8:webhooks:events:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Requeued for delivery | - |
| 403 | Missing `bill8:webhooks:events:write` | - |

### `GET /v1/webhook-endpoints`

`GET /v1/webhook-endpoints` - list endpoints.

Gate: `bill8:webhooks:endpoints:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of endpoints | `WebhookEndpoint`[] |
| 403 | Missing `bill8:webhooks:endpoints:read` | - |

### `POST /v1/webhook-endpoints`

`POST /v1/webhook-endpoints` - register an endpoint.

Gate: `bill8:webhooks:endpoints:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled_events` | string[] | yes | Enabled event types. |
| `url` | string | yes | Destination URL. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Endpoint created | `WebhookEndpoint` |
| 403 | Missing `bill8:webhooks:endpoints:write` | - |

