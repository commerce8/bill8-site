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
          label: "`GET /v1/health`",
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
          label: "`GET /v1/reviews`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/resolve-review",
          label: "`POST /v1/reviews/{id}/resolve`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/list-rules",
          label: "`GET /v1/rules`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/create-rule",
          label: "`POST /v1/rules`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/screen",
          label: "`POST /v1/screenings`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
