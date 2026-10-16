---
sidebar_position: 4
---

# Bill8:Ledger - the money engine

Every money position and movement in the bill8 vertical: Bill8:Ledger
is the single authority that mutates balances; every other service
moves money by asking it to post - nothing shadow-writes.

## Use cases

- **Double-entry postings** - every charge, refund, invoice, and
  fee-adjustment posts as balanced entries; a posting that doesn't
  net is rejected before any write.
- **Balance truth** - merchant balances, payer balances, and fee
  accounts derive from the posting stream - the same invariants as
  the platform's core-ledger pattern, scoped to commerce.
- **Idempotent money movement** - postings are idempotent per
  `(env_id, idempotency_key)`; terminal states never regress.
- **Event-sourced** - balances rebuild from the posting stream; the
  books are replayable, never a mystery.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/ledger/) - the maintainer's README in the consolidated reference section.

