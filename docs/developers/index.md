---
sidebar_position: 1
---

# Developers — building on bill8

## The single-repo story

Clone any bill8 service and build — the platform SDK and the bill8
facade arrive as pinned git dependencies; committed `.sqlx` caches
mean no live database is needed to compile:

```bash
git clone https://github.com/commerce8/bill8-payments.git
cd bill8-payments
cargo build
cargo test     # offline
```

## The vertical lifecycle

```bash
make infra-up        # platform TLS-only PG 18 + Valkey
sentin8-cli db bootstrap
vertical init        # creates the bill8 database + per-service schemas
vertical enroll      # registers services, scopes, admin UIs, triggers
make start           # captain spawns the fleet
```

No migration code exists — greenfield: schema changes rewrite the
init SQL and re-run `vertical init`.

## Integration surface

- **Rust**: the `bill8` facade (`bill8::payments::…`,
  `bill8::billing::…`) — see the [SDK page](/docs/sdk/)
- **Flutter**: `Bff8ApiClient` through the platform's Flutter package
  (see [samples](/docs/samples))
- **Webhooks**: configure an endpoint and verify the signing header
- **Events**: `bill8:{service}:{resource}:{operation}` over
  Sentin8:Bus

## Deep dive

Every service's full docs live in its [reference section](/docs/reference/) —
harvested from the public repositories at build time.