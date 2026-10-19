import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "ledger",
      items: [
        {
          type: "doc",
          id: "api/ledger/list-accounts",
          label: "`GET /v1/accounts` — list ledger accounts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/create-account",
          label: "`POST /v1/accounts` — create a ledger account with its standard\nbalances (`available`, `pending`).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/ledger/list-transactions",
          label: "`GET /v1/balance-transactions` — list movements (optionally by balance).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/post-transaction",
          label: "`POST /v1/balance-transactions` — post one double-entry movement.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/ledger/list-balances",
          label: "`GET /v1/balances` — list balances (optionally filtered).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/get-balance",
          label: "`GET /v1/balances/{id}` — read one balance.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/list-fees",
          label: "`GET /v1/fees` — list the configured fee model.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/upsert-fee",
          label: "`POST /v1/fees` — upsert the fee model for a transaction type.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/ledger/run-payout-schedules",
          label: "`POST /v1/internal/payout-schedules/run` — the Cron proxy-back tick.\nCreates a payout for each enabled schedule whose available balance\nmeets its minimum. At most one payout per tick (the balance guard\nitself enforces it: the available row lock serializes).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/ledger/list-payout-schedules",
          label: "`GET /v1/payout-schedules` — list schedules.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/create-payout-schedule",
          label: "`POST /v1/payout-schedules` — create an automatic payout schedule.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/ledger/delete-payout-schedule",
          label: "`DELETE /v1/payout-schedules/{id}` — disable a schedule.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/ledger/list-payouts",
          label: "`GET /v1/payouts` — list payouts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/create-payout",
          label: "`POST /v1/payouts` — pay out available balance to an external account.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/ledger/get-payout",
          label: "`GET /v1/payouts/{id}` — read one payout.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/list-transfers",
          label: "`GET /v1/transfers` — list transfers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ledger/create-transfer",
          label: "`POST /v1/transfers` — move funds between connected balances.",
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
          id: "api/ledger/health",
          label: "Health probe payload.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
