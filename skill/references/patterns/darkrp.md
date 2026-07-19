# DarkRP Patterns

DarkRP integration should stay server-authoritative and tolerate missing optional modules.

## Common Integration Points

- Jobs: use `ply:Team()` and `RPExtraTeams[teamId]` when available.
- Money: use DarkRP's player methods server-side, and check method existence before calling in mixed environments.
- Shipments/entities: register definitions in the expected DarkRP shared files, then enforce purchase rules server-side.
- Chat/commands: validate rank/job/cooldown before side effects.

## Compatibility

- Guard DarkRP-specific calls when the addon can run outside DarkRP.
- Avoid hardcoding job names when job command, team ID, or config mapping is available.
- Keep job-to-feature mappings in shared config, but enforce them on the server.

## Permissions

- Prefer CAMI when available for admin-mod compatibility.
- Fall back to `ply:IsAdmin()` or `ply:IsSuperAdmin()` only for simple local deployments.

## Common Failure Modes

- Client decides whether a player can buy/unlock/use a feature.
- Job mappings use display names that changed in server config.
- Addon assumes DarkRP globals exist before DarkRP has loaded.
