import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/reporting/health",
          label: "Health probe payload.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "reporting",
      items: [
        {
          type: "doc",
          id: "api/reporting/run-report-schedules",
          label: "`POST /v1/internal/report-schedules/run` — the Cron proxy-back\ntick. Creates one run per enabled schedule for the current period;\nthe run's (env, type, period) uniqueness (RPT-2) makes two ticks in\none window produce exactly one run.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/list-report-runs",
          label: "`GET /v1/report-runs` — list runs.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/create-report-run",
          label: "`POST /v1/report-runs` — run a report (idempotent per\n`(env_id, type, period)`; two identical runs yield one row).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/get-report-run",
          label: "`GET /v1/report-runs/{id}` — read one run.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/list-report-schedules",
          label: "`GET /v1/report-schedules` — list the env's schedules.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/create-report-schedule",
          label: "`POST /v1/report-schedules` — create a schedule.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/delete-report-schedule",
          label: "`DELETE /v1/report-schedules/{id}` — remove a schedule.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/patch-report-schedule",
          label: "`PATCH /v1/report-schedules/{id}` — enable/disable a schedule.",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/reporting/list-report-types",
          label: "`GET /v1/report-types` — list report types.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/create-report-type",
          label: "`POST /v1/report-types` — create a report type.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
