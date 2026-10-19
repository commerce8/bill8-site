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
          label: "`GET /v1/events`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/webhooks/list-deliveries",
          label: "`GET /v1/events/{id}/deliveries`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/webhooks/replay-event",
          label: "`POST /v1/events/{id}/replay`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/webhooks/list-endpoints",
          label: "`GET /v1/webhook-endpoints`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/webhooks/create-endpoint",
          label: "`POST /v1/webhook-endpoints`",
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
          label: "`GET /v1/health`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
