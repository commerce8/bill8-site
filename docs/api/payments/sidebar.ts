import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "payments",
      items: [
        {
          type: "doc",
          id: "api/payments/get-channel-config",
          label: "`GET /v1/channel-config`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/set-channel-config",
          label: "`PUT /v1/channel-config`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/list-channels",
          label: "`GET /v1/channels`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/list-charges",
          label: "`GET /v1/charges`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-charge",
          label: "`POST /v1/charges`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-charge",
          label: "`GET /v1/charges/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/list-customers",
          label: "`GET /v1/customers`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-customer",
          label: "`POST /v1/customers`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-disputes",
          label: "`GET /v1/disputes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-dispute",
          label: "`POST /v1/disputes`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/submit-evidence",
          label: "`POST /v1/disputes/{id}/evidence`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/resolve-dispute",
          label: "`POST /v1/disputes/{id}/resolve`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/sca-handback",
          label: "`POST /v1/intents/{id}/handback`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/method-catalog",
          label: "`GET /v1/methods`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/list-payment-intents",
          label: "`GET /v1/payment-intents`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-payment-intent",
          label: "`POST /v1/payment-intents`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/confirm-payment-intent",
          label: "`POST /v1/payment-intents/{id}/confirm`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-refunds",
          label: "`GET /v1/refunds`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-refund",
          label: "`POST /v1/refunds`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/create-routing-rule",
          label: "`POST /v1/routing-rules`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-setup-intents",
          label: "`GET /v1/setup-intents`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-setup-intent",
          label: "`POST /v1/setup-intents`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/confirm-setup-intent",
          label: "`POST /v1/setup-intents/{id}/confirm`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/create-token",
          label: "`POST /v1/tokens`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/consume-token",
          label: "`POST /v1/tokens/{token_value}/consume`",
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
          id: "api/payments/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
