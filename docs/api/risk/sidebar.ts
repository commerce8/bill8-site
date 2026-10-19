import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/risk/health",
          label: "Health probe payload.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "risk",
      items: [
        {
          type: "doc",
          id: "api/risk/list-reviews",
          label: "`GET /v1/reviews` — list the review queue.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/resolve-review",
          label: "`POST /v1/reviews/{id}/resolve` — resolve a review (idempotent).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/list-rules",
          label: "`GET /v1/rules` — list rules.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/create-rule",
          label: "`POST /v1/rules` — create a rule.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/screen",
          label: "`POST /v1/screenings` — screen a charge context (M2M from payments).\nThe evaluator is pure; the outcome persists as an auditable screening.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
