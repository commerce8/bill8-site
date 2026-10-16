---
sidebar_position: 5
---

# Bill8:Webhooks — signed event delivery

The outbound integration surface: it consumes domain events from
Bus, materializes typed webhook events, and delivers signed
payloads to merchant-configured endpoints with retries — merchants
never miss an event silently.

## Use cases

- **Event subscriptions** — merchants configure endpoints and
  subscribe to event types; credentials live as secret references.
- **Signed payloads** — every delivery carries the signing header the
  merchant verifies (secrets resolve from Sentin8:Secrets at call
  time).
- **Retry with backoff** — failed deliveries retry on schedule, then
  land in the dead-letter state for replay from the merchant
  dashboard.
- **Delivery history** — every attempt is visible with response
  codes; debugging an integration is a query, not a support ticket.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/webhooks/) — the maintainer's README in the consolidated reference section.

