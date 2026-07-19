# Net Security

Treat every `net.Receive` payload as hostile.

## Server Receivers

- Check `IsValid(ply)` and that `ply:IsPlayer()` when a player is expected.
- Verify the player can perform the requested action using server-side state.
- Clamp numbers and reject NaN, infinity, negative values where invalid, and oversized counts.
- Validate strings against an allowlist or length limit.
- Validate entity references with `IsValid`, class checks, ownership, distance, and realm-specific rules.
- Rate-limit expensive or privileged requests per player.

## Payload Discipline

- Prefer small identifiers over sending full tables.
- Never accept prices, rewards, ranks, permissions, item definitions, cooldowns, or skill costs from the client.
- Read values in the exact order they are written.
- Version complex messages or include an action enum for dispatch.

## Naming

- Namespace net strings, for example `myaddon.skill.unlock`.
- Register net strings on the server with `util.AddNetworkString` before sending.

## Common Failure Modes

- Calling client-only UI code inside server receive handlers.
- Trusting a client-sent entity without ownership or distance checks.
- Sending large tables every frame or on high-frequency hooks.
- Using one generic admin receiver that dispatches arbitrary actions without a server allowlist.
