# Realms and File Layout

Use realm boundaries as the first design constraint in Garry's Mod addons.

## Common Layout

- `lua/autorun/server/*.lua`: server-only bootstrap.
- `lua/autorun/client/*.lua`: client-only bootstrap.
- `lua/autorun/*.lua`: shared bootstrap; guard realm-specific code.
- `lua/<addon>/shared/*.lua`: constants, config, pure helpers.
- `lua/<addon>/server/*.lua`: persistence, permissions, authoritative state.
- `lua/<addon>/client/*.lua`: UI, HUD, effects, local presentation.

## Loading Rules

- Server includes server files directly with `include`.
- Server sends client files with `AddCSLuaFile`.
- Client includes client/shared files after they are sent.
- Shared files that include client files should guard with `if CLIENT then include(...) end`.

## Practical Rules

- Keep database writes, unlock checks, money changes, inventory edits, and cooldown authority on the server.
- Keep Derma, `surface`, `draw`, screen effects, and local input UI on the client.
- Define stable shared constants once, then consume them from both realms.
- Do not trust a client to report ownership, job, money, position, rank, cooldown, or unlock state without server validation.
