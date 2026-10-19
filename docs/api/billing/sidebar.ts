import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "billing",
      items: [
        {
          type: "doc",
          id: "api/billing/create-coupon",
          label: "`POST /v1/coupons`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/redeem-coupon",
          label: "`POST /v1/coupons/{code}/redeem`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-credit-note",
          label: "`POST /v1/credit-notes`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/void-credit-note",
          label: "`POST /v1/credit-notes/{id}/void`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-credit",
          label: "`POST /v1/credits`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/dunning-retry",
          label: "`POST /v1/internal/dunning/retry`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/run-invoice-cycle",
          label: "`POST /v1/internal/invoices/run`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/list-invoices",
          label: "`GET /v1/invoices`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/upcoming-invoice",
          label: "`GET /v1/invoices/upcoming`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/list-prices",
          label: "`GET /v1/prices`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/create-price",
          label: "`POST /v1/prices`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-product",
          label: "`POST /v1/products`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/list-subscriptions",
          label: "`GET /v1/subscriptions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/create-subscription",
          label: "`POST /v1/subscriptions`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/proration-quote",
          label: "`GET /v1/subscriptions/proration-quote`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/get-subscription",
          label: "`GET /v1/subscriptions/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/pause-subscription",
          label: "`POST /v1/subscriptions/{id}/pause`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/resume-subscription",
          label: "`POST /v1/subscriptions/{id}/resume`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-tax-rate",
          label: "`POST /v1/tax-rates`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-usage-record",
          label: "`POST /v1/usage-records`",
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
          id: "api/billing/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
