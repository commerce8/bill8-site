---
sidebar_position: 1
---

# The bill8 apps

Four Flutter experiences — the merchant operator, the payer
checkout, the payer portal, and the staff admin — every one thin by
design: all backend access rides the Sentin8:BFF proxy.

| App | Who it serves |
|---|---|
| [Merchant](/docs/apps/merchant) | operators — payments, billing, accounts, reporting |
| [Checkout](/docs/apps/checkout) | payers — payment capture and confirmation |
| [Portal](/docs/apps/portal) | payers — invoices, subscriptions, payment methods |
| [Admin](/docs/apps/admin) | staff — onboarding, risk review, webhook monitoring (RFW) |

## Merchant — the operator dashboard

The merchant's single surface: payments and settlements, billing
and subscriptions, connected accounts, and reporting — rendered
from the vertical's RFW definitions and live data hooks.

## Checkout — the payer capture

The one-transaction checkout: the payer confirms the intent's
amount, captures a payment method, and the charge settles — no
storefront chrome, no token ever in the browser.

## Portal — the payer self-service

Invoices, subscription management, payment methods, and history —
the payer's own records behind the same live authorization as
every surface.

## Admin — staff administration

Merchant onboarding, the risk review queue, and webhook delivery
monitoring — RFW-rendered in Sentin8:Dash with zero compile-time
coupling.

Each app's reference section carries its full docs:
[Merchant](/docs/reference/merchant/), [Checkout](/docs/reference/checkout/),
[Portal](/docs/reference/portal/), [Admin](/docs/reference/admin/).