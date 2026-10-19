import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "webhooks",
      items: [
        {
          type: "doc",
          id: "api/webhooks/list-events",
          label: "`GET /v1/events` — list materialized events.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/webhooks/list-deliveries",
          label: "`GET /v1/events/{id}/deliveries` — the delivery log for an event.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/webhooks/replay-event",
          label: "`POST /v1/events/{id}/replay` — re-queue a DLQ/failed delivery for\nmanual replay (never silently dropped).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/webhooks/list-endpoints",
          label: "`GET /v1/webhook-endpoints` — list endpoints.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/webhooks/create-endpoint",
          label: "`POST /v1/webhook-endpoints` — register an endpoint.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/webhooks/health",
          label: "Health probe payload.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
