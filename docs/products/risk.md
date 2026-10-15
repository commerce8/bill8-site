---
sidebar_position: 6
---

# Bill8:Risk — fraud prevention

Fraud prevention as a gate, not a report: declarative rules and
velocity checks screen charges before money moves, sanctions
screening runs on the merchant and payer surfaces, and a review
queue adjudicates the gray zone.

## Use cases

- **Pre-charge screening** — every charge passes the rule set
  (velocity, geo, amount thresholds, custom rules) before the rail
  call; a blocked charge never moves money.
- **Sanctions screening** — merchant onboarding and payer identity
  screen against sanctions lists with full audit.
- **Review queue** — flagged transactions queue for manual
  adjudication; dispositions are auditable and terminal states never
  regress.
- **Rule authoring** — rules are data; a merchant's fraud team
  tunes the rule set without a release.

## Deep dive

[Risk reference](/docs/reference/risk/) — harvested from
`commerce8/bill8-risk`.