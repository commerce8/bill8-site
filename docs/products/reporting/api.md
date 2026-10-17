---
title: "Bill8:Reporting - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/commerce8/bill8-reporting/edit/main/docs/openapi.json
---
Sentin8 Bill8:Reporting - report types, runs, scheduled reports.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**10 endpoints**.

## reporting

### `POST /v1/internal/report-schedules/run`

`POST /v1/internal/report-schedules/run` - the Cron proxy-back tick. Creates one run per enabled schedule for the current period; the run's (env, type, period) uniqueness (RPT-2) makes two ticks in one window produce exactly one run.

Gate: `sentin8:cron:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Tick processed | - |

### `GET /v1/report-runs`

`GET /v1/report-runs` - list runs.

Gate: `bill8:reporting:runs:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of runs | `ReportRun`[] |
| 403 | Missing `bill8:reporting:runs:read` | - |

### `POST /v1/report-runs`

`POST /v1/report-runs` - run a report (idempotent per `(env_id, type, period)`; two identical runs yield one row).

Gate: `bill8:reporting:runs:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotency_key` | string,null | no | Caller-supplied idempotency key (a run is idempotent per `(env_id, report_type, period)`). |
| `period_end` | string | yes | Reporting period end. |
| `period_start` | string | yes | Reporting period start. |
| `report_type_id` | string | yes | The report type to run. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Report run created | `ReportRun` |
| 403 | Missing `bill8:reporting:runs:write` | - |
| 409 | Run already exists for this period (idempotent) | - |

### `GET /v1/report-runs/{id}`

`GET /v1/report-runs/&#123;id&#125;` - read one run.

Gate: `bill8:reporting:runs:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The run | `ReportRun` |
| 404 | Run not found | - |

### `GET /v1/report-schedules`

`GET /v1/report-schedules` - list the env's schedules.

Gate: `bill8:reporting:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of schedules | `ReportSchedule`[] |
| 403 | Missing `bill8:reporting:schedules:read` | - |

### `POST /v1/report-schedules`

`POST /v1/report-schedules` - create a schedule.

Gate: `bill8:reporting:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `interval` | string | yes | Run interval (`daily` / `weekly` / `monthly`). |
| `report_type_id` | string | yes | The report type to schedule. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule created | `ReportSchedule` |
| 403 | Missing `bill8:reporting:schedules:write` | - |

### `DELETE /v1/report-schedules/{id}`

`DELETE /v1/report-schedules/&#123;id&#125;` - remove a schedule.

Gate: `bill8:reporting:schedules:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule deleted | - |
| 404 | Schedule not found | - |

### `PATCH /v1/report-schedules/{id}`

`PATCH /v1/report-schedules/&#123;id&#125;` - enable/disable a schedule.

Gate: `bill8:reporting:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | boolean | yes | Enable/disable the schedule. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule updated | `ReportSchedule` |
| 404 | Schedule not found | - |

### `GET /v1/report-types`

`GET /v1/report-types` - list report types.

Gate: `bill8:reporting:types:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of report types | `ReportType`[] |
| 403 | Missing `bill8:reporting:types:read` | - |

### `POST /v1/report-types`

`POST /v1/report-types` - create a report type.

Gate: `bill8:reporting:types:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Report type created | `ReportType` |
| 403 | Missing `bill8:reporting:types:write` | - |

