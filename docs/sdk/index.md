---
sidebar_position: 1
---

# bill8 Rust SDK

The unified namespace facade: every bill8 crate imports through
`bill8::{service}::{…}` — the typed integration surface for every
bill8 API, consumed as a pinned git tag.

```rust
use bill8::payments::contracts::Charge;
use bill8::billing::client::BillingClient;
```

## What's in the facade

| Import path | Role |
|---|---|
| `bill8::payments::{contracts,client}` | intents, charges, refunds, disputes |
| `bill8::billing::{contracts,client}` | subscriptions, invoices, metering |
| `bill8::ledger::{contracts,client}` | postings, balances |
| `bill8::webhooks::{contracts,client}` | endpoints, deliveries, signing |
| `bill8::risk::{contracts,client}` | rules, reviews, sanctions |
| `bill8::reporting::{contracts,client}` | report types, runs, schedules |

## Conventions

- The platform arrives via `sentin8::*` only (the pinned platform SDK
  tag); the vertical never links platform service crates directly.
- Scopes: `bill8:{service}:{resource}:{action}`, runtime-registered
  at enrollment.
- Events: `bill8:{service}:{resource}:{operation}` over the
  platform's local-outbox → Bus producer path.

## Deep dive

[bill8-sdk reference](/docs/reference/sdk/) — harvested from
`commerce8/bill8-sdk`.