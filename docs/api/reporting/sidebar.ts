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
          label: "`GET /v1/health`",
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
          label: "`POST /v1/internal/report-schedules/run`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/list-report-runs",
          label: "`GET /v1/report-runs`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/create-report-run",
          label: "`POST /v1/report-runs`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/get-report-run",
          label: "`GET /v1/report-runs/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/list-report-schedules",
          label: "`GET /v1/report-schedules`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/create-report-schedule",
          label: "`POST /v1/report-schedules`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/delete-report-schedule",
          label: "`DELETE /v1/report-schedules/{id}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/patch-report-schedule",
          label: "`PATCH /v1/report-schedules/{id}`",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/reporting/list-report-types",
          label: "`GET /v1/report-types`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/create-report-type",
          label: "`POST /v1/report-types`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
