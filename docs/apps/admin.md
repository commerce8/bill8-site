---
sidebar_position: 4
---

# Admin — staff administration

The staff administration surface: merchant onboarding, the risk
review queue, and webhook delivery monitoring — RFW-rendered in
Sentin8:Dash with zero compile-time coupling.

## What it demonstrates

- **RFW-native** — the admin pages ship with the vertical; Dash
  renders whatever the services' `GET /v1/admin/ui/{page}` endpoints
  describe.
- **Review queue UX** — risk adjudication and webhook replay as
  audited, terminal-state-respecting admin actions.
- **Vertical admin scopes** — runtime-registered at enrollment
  (`admin_scopes`), never hardcoded in the platform.

## Deep dive

[Admin reference](/docs/reference/admin/) — harvested from
`commerce8/bill8-admin`.