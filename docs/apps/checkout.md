---
sidebar_position: 2
---

# Checkout — the payer capture flow

The payer-facing checkout: payment method capture and charge
confirmation for a single merchant transaction — the one screen a
payer needs, nothing else.

## What it demonstrates

- **Intent-driven** — the checkout renders a payment intent's amount
  and merchant; confirmation settles against it (idempotent).
- **No token in the browser** — the session cookie is the payer's
  only credential; the BFF holds everything else.
- **Fail-closed bootstrap** — unknown host or missing runtime
  context renders the error scaffold.

## Deep dive

[Checkout reference](/docs/reference/checkout/) — harvested from
`commerce8/bill8-checkout`.