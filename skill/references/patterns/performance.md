# Performance

Most GMod addon performance issues come from high-frequency hooks, repeated UI rebuilds, heavy networking, and synchronous file work.

## Hooks

- Avoid expensive work in `Think`, `Tick`, `HUDPaint`, `PreDraw*`, and panel `Paint`.
- Cache lookup results when possible.
- Use timers or event-driven updates for state that does not need per-frame checks.
- Remove hooks when panels/entities/features are destroyed.

## Networking

- Send deltas instead of full state when data changes frequently.
- Batch low-priority updates.
- Avoid broadcasting player-specific data.
- Rate-limit client requests that trigger database, file, or expensive entity searches.

## UI

- Build Derma panels once and refresh changed values.
- Avoid full DHTML/tree rebuilds during drag, hover, typing, or slider movement.
- Precompute search indexes for large lists.

## File and Database IO

- Do not perform synchronous file reads/writes in high-frequency hooks.
- Cache parsed config and invalidate it intentionally.
- Use queued writes for frequent small state changes.

## Debugging

- Start by identifying frequency: once per action, once per network message, once per frame, or once per entity.
- Log counts and timing around suspected hot paths before rewriting architecture.
