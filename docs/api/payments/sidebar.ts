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
          label: "`GET /v1/channel-config` — read the env's default channel.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/set-channel-config",
          label: "`PUT /v1/channel-config` — set the env's default channel.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/payments/list-channels",
          label: "`GET /v1/channels` — list the runtime channel registry.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/list-charges",
          label: "`GET /v1/charges` — list charges.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-charge",
          label: "`POST /v1/charges` — create a charge through a settlement channel.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/get-charge",
          label: "`GET /v1/charges/{id}` — read one charge.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/list-customers",
          label: "`GET /v1/customers` — list customers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-customer",
          label: "`POST /v1/customers` — create a customer.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-disputes",
          label: "`GET /v1/disputes` — list disputes.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-dispute",
          label: "`POST /v1/disputes` — open a dispute on a charge.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/submit-evidence",
          label: "`POST /v1/disputes/{id}/evidence` — submit evidence (Storage refs).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/resolve-dispute",
          label: "`POST /v1/disputes/{id}/resolve` — close a dispute with an outcome\n(PAY-6). A `lost` dispute claws the funds back via a ledger\nreversal transaction (the ONLY money movement) and returns the\ncharge to `succeeded` minus the disputed amount; a `won` dispute\nkeeps the charge as-is. The `under_review → won|lost` transition is\nguarded — resolving twice is a 409, never a second clawback.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/sca-handback",
          label: "`POST /v1/intents/{id}/handback` — the SCA challenge handback\n(PAY-12). Completes a held charge from the CHANNEL-VERIFIED result —\nnever a client-asserted outcome. The handback token is single-use.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/method-catalog",
          label: "The static capability matrix of the built-in method types. New\nmethods register as channel data; the catalog reads from the\nchannels' capability matrices at runtime (methods ∪ across\nchannels).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/list-payment-intents",
          label: "`GET /v1/payment-intents` — list intents for the env.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-payment-intent",
          label: "`POST /v1/payment-intents` — create an intent in\n`requires_confirmation` (no money moves).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/confirm-payment-intent",
          label: "`POST /v1/payment-intents/{id}/confirm` — the guarded\n`requires_confirmation → processing` transition. Terminal states\nnever regress; confirming a terminal intent is a 409.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-refunds",
          label: "`GET /v1/refunds` — list refunds.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-refund",
          label: "`POST /v1/refunds` — refund a charge (bounded).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/create-routing-rule",
          label: "`POST /v1/routing-rules` — create a routing rule.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/list-setup-intents",
          label: "`GET /v1/setup-intents` — list setup intents for the env.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payments/create-setup-intent",
          label: "`POST /v1/setup-intents` — save a method for later use (no charge).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/confirm-setup-intent",
          label: "`POST /v1/setup-intents/{id}/confirm` — the guarded\n`requires_confirmation → processing` transition for setup intents.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/create-token",
          label: "`POST /v1/tokens` — mint a single-use token for a payment method.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/payments/consume-token",
          label: "`POST /v1/tokens/{token_value}/consume` — consume a token\n(single-use guard: the first consume wins; every later consume of the\nsame token is rejected).",
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
          label: "Health probe payload.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
