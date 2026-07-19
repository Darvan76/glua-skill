# glua-gmod-skill

Skill for coding agents with a bundled GLua / Garry's Mod API reference and practical addon-development patterns.

The reference is generated from the public GMod wiki snapshot and organized for agent use: exact API names, realms, argument types, return values, source hints, hooks, classes, libraries, panels, enums, and structs.

## Install

From npm, once published:

```bash
npx glua-gmod-skill
```

From this checkout:

```bash
node bin/install.js
```

By default, the installer copies `skill/` into the supported global agent skill folders.

### Options

```bash
# Install into the current project instead of the user home
node bin/install.js --project

# Install for a specific agent, or a comma-separated list
node bin/install.js --agent=codex
node bin/install.js --agent=codex,claude

# Replace an existing install
node bin/install.js --force
node bin/install.js --force --agent=codex

# List supported agents
node bin/install.js --list
```

## Supported Agents

| Agent | Install path |
|---|---|
| Claude Code | `~/.claude/skills/glua-gmod/` or `.claude/skills/glua-gmod/` |
| Cursor | uses the Claude Code target |
| Windsurf | uses the Claude Code target |
| OpenAI Codex CLI | `~/.codex/skills/glua-gmod/` or `.codex/skills/glua-gmod/` |
| OpenClaw | `~/.openclaw/skills/glua-gmod/` or `.openclaw/skills/glua-gmod/` |
| Generic agents convention | `~/.agents/skills/glua-gmod/` or `.agents/skills/glua-gmod/` |

Restart the agent session after installing so the skill metadata is discovered.

## Repository Layout

| Path | Contents |
|---|---|
| `skill/SKILL.md` | Trigger metadata and concise operating instructions for agents |
| `skill/agents/openai.yaml` | UI metadata for OpenAI Codex skill lists |
| `skill/references/00_INDEX.md` | Master lookup table: name to category, file, and realms |
| `skill/references/globals.md` | Global functions and values |
| `skill/references/classes/` | Methods per class, such as `Entity`, `Player`, `Vector`, `Panel`, and `Weapon` |
| `skill/references/libraries/` | Functions per library, such as `net`, `hook`, `timer`, `file`, `vgui`, `surface`, and `render` |
| `skill/references/hooks/` | Hooks grouped by gamemode/system target |
| `skill/references/panels/` | VGUI/Derma panels, such as `DFrame`, `DButton`, and `DPanel` |
| `skill/references/enums.md` | Constants and enumerations |
| `skill/references/structs.md` | API table structures |
| `skill/references/patterns/` | Practical GLua, DarkRP, permissions, networking, Derma, and performance guidance |
| `bin/install.js` | Dependency-free installer |
| `scripts/check_skill.js` | Structural validation for the skill package |

Every API entry includes realm (`client`, `server`, `menu`), typed arguments, return values, and a description where available.

## Validate

```bash
npm run check
```

This verifies the expected skill files exist and that `00_INDEX.md` links to files present under `skill/references/`.

## Updating The Snapshot

The GMod wiki changes over time. Regenerate the API markdown from a fresh wiki export, then place the generated files under `skill/references/`:

```text
skill/references/00_INDEX.md
skill/references/globals.md
skill/references/classes/
skill/references/libraries/
skill/references/hooks/
skill/references/panels/
skill/references/enums.md
skill/references/structs.md
```

After regenerating, run:

```bash
npm run check
```

## Attribution

GMod wiki content belongs to Facepunch Studios and its community of editors. This package reorganizes a wiki snapshot for personal and educational addon-development reference. It is not an official Facepunch or Valve product.

## License

Installer and package glue are MIT licensed. Respect the original terms and attribution requirements for any upstream wiki content.
