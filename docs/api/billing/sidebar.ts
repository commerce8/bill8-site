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
          label: "`POST /v1/coupons` — create a coupon (redemption-limit bounded).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/redeem-coupon",
          label: "`POST /v1/coupons/{code}/redeem` — redeem a coupon (row-lock bounded:\nconcurrent redemptions never exceed the limit; expired coupons and\nexhausted limits are rejected).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-credit-note",
          label: "`POST /v1/credit-notes` — issue an invoice-level adjustment, bounded\nby the invoice's paid amount (row-lock serialized — credit notes\nadjust invoices; refunds adjust charges).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/void-credit-note",
          label: "`POST /v1/credit-notes/{id}/void` — void a credit note (terminal).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-credit",
          label: "`POST /v1/credits` — grant prepaid value to a customer.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/dunning-retry",
          label: "`POST /v1/internal/dunning/retry` — the dunning-ladder tick (BIL-12):\nre-charge past-due invoices on the configured schedule. The ladder\nis DATA (`dunning_configs` rows): count + backoff per env; after the\nfinal failure the subscription cancels (guarded terminal).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/run-invoice-cycle",
          label: "`POST /v1/internal/invoices/run` — the Cron proxy-back tick: find\nsubscriptions due this cycle, aggregate usage, finalize invoices,\ncharge via the payments public API. Idempotent per\n(subscription, cycle): a subscription with an open/paid/retrying\ninvoice covering its current period is skipped.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/list-invoices",
          label: "`GET /v1/invoices` — list invoices.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/upcoming-invoice",
          label: "`GET /v1/invoices/upcoming` — the read-only upcoming-invoice preview\n(BIL-14): projects the next cycle's invoice for a subscription with\nZERO writes.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/list-prices",
          label: "`GET /v1/prices` — list prices.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/create-price",
          label: "`POST /v1/prices` — create a price (immutable once referenced).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-product",
          label: "`POST /v1/products` — create a product.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/list-subscriptions",
          label: "`GET /v1/subscriptions` — list subscriptions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/create-subscription",
          label: "`POST /v1/subscriptions` — subscribe a customer to a price (with\ntrial support and proration-consistent cycle math).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/proration-quote",
          label: "`GET /v1/subscriptions/proration-quote` — quote a hypothetical plan\nchange (read-only, ZERO writes; the same proration math the real\nchange applies).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/get-subscription",
          label: "`GET /v1/subscriptions/{id}` — read one subscription.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/billing/pause-subscription",
          label: "`POST /v1/subscriptions/{id}/pause` — pause billing (no invoices\ngenerated while paused; terminal-state guard applies).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/resume-subscription",
          label: "`POST /v1/subscriptions/{id}/resume` — resume with proration against\nthe remaining cycle (cent-exact, BIL-4 math).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-tax-rate",
          label: "`POST /v1/tax-rates` — configure a jurisdiction rate.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/billing/create-usage-record",
          label: "`POST /v1/usage-records` — meter a usage event (deterministic\naggregation at invoice time; duplicate keys counted once).",
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
          label: "Health probe payload.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
