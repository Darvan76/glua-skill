# Permissions

Use a compatibility layer so addon code does not depend directly on one admin mod.

## Recommended Order

1. CAMI permission checks when CAMI is installed.
2. Admin-mod specific registration for ULX/SAM when the integration file is present.
3. Minimal fallback to `IsSuperAdmin` or `IsAdmin` for local servers.

## Registration

- Register permissions once during initialization.
- Namespace permission names, for example `myaddon.manage`.
- Guard optional APIs before calling them.
- Keep permission definitions in shared/server config instead of scattering string literals.

## Checks

- Always deny invalid players unless the action explicitly supports console.
- Treat console as a separate actor with explicit allow/deny behavior.
- Do not accept a client-sent permission result.

## Common Failure Modes

- Calling `ULib.ucl.registerAccess` before ULib exists.
- Assuming SAM or ULX is installed on every DarkRP server.
- Repeating raw permission strings across menus, receivers, and commands.
