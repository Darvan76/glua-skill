---
name: glua-gmod
description: GLua and Garry's Mod addon development reference. Use when working with Garry's Mod Lua APIs, realms, hooks, net messages, SENTs, SWEPs, Derma/VGUI panels, DarkRP addons, CAMI/ULX/SAM permissions, GMod debugging, or performance-sensitive addon code.
---

# GLua / Garry's Mod

Use this skill to write, review, debug, and explain Garry's Mod Lua code with API details from the bundled GMod wiki snapshot.

## Workflow

1. Identify the area of the task: library, class, hook, panel, enum, struct, or addon pattern.
2. Search `references/00_INDEX.md` for the exact API name when the target is known.
3. Open only the relevant reference file from `references/classes/`, `references/libraries/`, `references/hooks/`, `references/panels/`, or the top-level `references/*.md`.
4. For addon architecture questions, load the smallest matching file from `references/patterns/`.
5. Respect the documented realm before suggesting code. Do not call client-only APIs from server files or server-only APIs from client files.
6. Prefer existing addon style and naming when editing a project.

## Reference Map

- `references/00_INDEX.md`: searchable API index with names, realms, and target files.
- `references/globals.md`: global functions and values.
- `references/classes/`: class methods such as `Player`, `Entity`, `Vector`, `Panel`, and `Weapon`.
- `references/libraries/`: libraries such as `net`, `hook`, `timer`, `file`, `vgui`, `surface`, and `render`.
- `references/hooks/`: hook callbacks grouped by target such as `GM`, `PLAYER`, `ENTITY`, `WEAPON`, and `PANEL`.
- `references/panels/`: Derma/VGUI panel methods.
- `references/enums.md`: constants and enumerations.
- `references/structs.md`: table structures used by API calls.

## Pattern Guides

Open these only when the task needs the topic:

- `references/patterns/realms.md`: server/client/shared layout, `AddCSLuaFile`, and includes.
- `references/patterns/net-security.md`: safe `net.Receive` validation and payload discipline.
- `references/patterns/derma-vgui.md`: Derma panel structure, `Paint`, layout, and UI performance.
- `references/patterns/darkrp.md`: DarkRP integration points and addon conventions.
- `references/patterns/permissions.md`: CAMI, ULX, SAM, and fallback permission checks.
- `references/patterns/performance.md`: hooks, timers, networking, file IO, and DHTML/VGUI cost.

## GLua Defaults

- Put authoritative game-state changes on the server.
- Treat client net messages as untrusted input.
- Use shared files for constants and pure helpers; gate realm-specific code with file layout or `if SERVER` / `if CLIENT`.
- Register network strings server-side before use.
- Namespace hook identifiers, convars, net strings, and globals with the addon name.
- Avoid returning non-nil from hooks unless intentionally blocking later hooks and gamemode callbacks.
- In VGUI code, create panels once, update data incrementally, and keep expensive work out of `Paint`.
