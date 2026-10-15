---
sidebar_position: 1
---

# Security

Bill8 inherits the [Sentin8 security model](https://sentin8.dev/docs/security)
by construction — every service runs the platform's 8-step
authorization pipeline, connects to PostgreSQL through
certificate-only identity, and stores every table behind FORCE RLS
on `env_id`.

## The vertical's own invariants

1. **One money authority** — Bill8:Ledger is the single authority
   that mutates balances; Payments, Billing, and Reporting move
   money by asking it to post, never shadow-writing.
2. **Screened before money moves** — Risk gates every charge before
   the rail; a blocked charge moves nothing.
3. **Signed, retried webhooks** — every outbound delivery is signed
   (secret references, never inline secrets) and retried to
   completion or dead-letter.
4. **No PAN/CVV in application tables** — card data passes to the
   delegated rail (Bank8:Payments); bill8 stores references only.
5. **Deterministic proration** — subscription changes compute
   mid-cycle adjustments exactly once; the same change never bills
   twice.

Read the platform's five pillars at
[sentin8.dev/docs/security](https://sentin8.dev/docs/security).