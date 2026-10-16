---
sidebar_position: 2
---

# Bill8:Payments - the charge lifecycle

The charge lifecycle service: from a payment intent through
authorization, capture, and settlement to refund and dispute - every
charge routed through selectable payment rails (with settlement
delegated to [Bank8:Payments](https://bank8.dev/docs/products/payments/)).

## Use cases

- **Payment intents** - a checkout session creates an intent; the
  client confirms against it; retries are safe by idempotency key.
- **Authorize → capture → settle** - the two-phase flow for
  card-present and card-not-present; settlement moves money through
  the delegated rail.
- **Refunds & disputes** - full and partial refunds; dispute
  lifecycle with evidence windows; every state transition audited.
- **Screened before money moves** - every charge passes Bill8:Risk
  before the rail call (see [Risk](/docs/products/risk)).

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/payments/) - the maintainer's README in the consolidated reference section.

