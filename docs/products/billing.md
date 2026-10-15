---
sidebar_position: 3
---

# Bill8:Billing — recurring revenue

Recurring revenue as a first-class domain: a product/price catalog,
subscriptions with proration, invoices generated per billing cycle,
metered usage records, and coupons/credits that apply
deterministically.

## Use cases

- **Subscriptions** — sign-up, upgrade, downgrade, pause, cancel —
  proration computes the mid-cycle adjustments exactly once.
- **Invoicing** — per-cycle invoice generation; failed charges retry
  on schedule (dunning); every invoice is an audited document.
- **Usage metering** — metered usage records aggregate into line
  items at billing time — usage never bills twice.
- **Coupons & credits** — promotional pricing and account credits
  apply through the same deterministic rules as list prices.

## Deep dive

[Billing reference](/docs/reference/billing/) — harvested from
`commerce8/bill8-billing`.