# glua-gmod-skill

A skill for **Claude Code** and other coding agents with a complete reference of the **GLua** (Garry's Mod Lua) API — generated from the [official GMod wiki](https://wiki.facepunch.com/gmod/) — plus battle-tested patterns for DarkRP addon development.

Install it with one command and your agent will know exact function signatures, hook realms, argument types and return values without ever leaving the wiki open in a browser tab.

## Install

```bash
npx glua-gmod-skill
```

By default this installs the skill **globally** for every supported agent detected on your machine.

### Options

```bash
# Install into the current project only, instead of globally
npx glua-gmod-skill --project

# Install for a specific agent (or a comma-separated list)
npx glua-gmod-skill --agent=claude
npx glua-gmod-skill --agent=codex,claude

# Overwrite an existing install
npx glua-gmod-skill --force

# List supported agents
npx glua-gmod-skill --list
```

## Supported agents

| Agent | Install path |
|---|---|
| **Claude Code** | `~/.claude/skills/glua-gmod/` (global) or `.claude/skills/glua-gmod/` (project) |
| **Cursor** | reads the same `~/.claude/skills/` folder automatically — no separate copy needed |
| **Windsurf** | same as Cursor |
| **OpenAI Codex CLI** | `~/.codex/skills/glua-gmod/` |
| **OpenClaw** | `~/.openclaw/skills/glua-gmod/` |
| **Any other agent following the `~/.agents/skills/` convention** | `~/.agents/skills/glua-gmod/` |

If your agent isn't listed, the skill is just a folder with a `SKILL.md` file — copy `node_modules/glua-gmod-skill/skill/` into wherever your agent looks for skills/instructions and it should work.

After installing, restart your agent session so it picks up the new skill.

## What's inside

| File / folder | Contents |
|---|---|
| `00_INDEX.md` | Master lookup table: name → category → file → realms |
| `globals.md` | Global functions (`Entity()`, `IsValid()`, `hook.Add`...) |
| `classes/` | Methods per class (`Entity`, `Player`, `Vector`...) |
| `libraries/` | Functions per library (`net`, `string`, `gui`...) |
| `hooks/` | Hooks grouped by gamemode/system |
| `panels/` | VGUI/Derma panels (`DFrame`, `DButton`, `DPanel`...) |
| `enums.md` / `structs.md` | Constants and data structures |
| `notes/` | Original patterns: DarkRP, CAMI/ULX/SAM integration, VFX, optimization |

Every function entry includes realm (`client`/`server`/`menu`), typed arguments, return values, and a description.

## How it was built

1. **Scraping**: [`gmod-wiki-scraper`](https://www.npmjs.com/package/gmod-wiki-scraper) (MIT, by NullEnt1ty) against the wiki's own JSON endpoint (`wiki.facepunch.com/gmod/*?format=json`).
2. **Conversion**: a custom script turns the scraped JSON into category-organized Markdown with a searchable index.
3. **Manual enrichment**: DarkRP, admin-mod integration, and optimization patterns added by hand in `notes/`.

## Updating

The GMod wiki changes over time. To regenerate the content from scratch:

```bash
npm install -g gmod-wiki-scraper
gmod-wiki-scraper
python3 build_glua_skill.py --input ./output --output ./skill
```

## License and attribution

GMod wiki content belongs to Facepunch Studios and its community of editors. This package reorganizes it for personal/educational reference purposes for addon development; it is not an official Facepunch or Valve product. The installer code (`bin/install.js`, `package.json`) is released under the MIT license.

## Disclaimer

This skill is not affiliated with Anthropic, Facepunch Studios, or Valve. "Garry's Mod" is a trademark of Facepunch Studios.

## Contributing

Pull requests welcome — especially for `notes/` (addon patterns, performance gotchas, real-world examples). Run the regeneration script before submitting a PR so the index stays in sync.
