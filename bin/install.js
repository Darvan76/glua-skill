#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "glua-gmod";
const ROOT = path.resolve(__dirname, "..");
const SOURCE = path.join(ROOT, "skill");

const TARGETS = {
  claude: {
    label: "Claude Code",
    global: () => path.join(os.homedir(), ".claude", "skills", SKILL_NAME),
    project: () => path.join(process.cwd(), ".claude", "skills", SKILL_NAME),
  },
  codex: {
    label: "OpenAI Codex CLI",
    global: () => path.join(os.homedir(), ".codex", "skills", SKILL_NAME),
    project: () => path.join(process.cwd(), ".codex", "skills", SKILL_NAME),
  },
  openclaw: {
    label: "OpenClaw",
    global: () => path.join(os.homedir(), ".openclaw", "skills", SKILL_NAME),
    project: () => path.join(process.cwd(), ".openclaw", "skills", SKILL_NAME),
  },
  agents: {
    label: "Generic ~/.agents",
    global: () => path.join(os.homedir(), ".agents", "skills", SKILL_NAME),
    project: () => path.join(process.cwd(), ".agents", "skills", SKILL_NAME),
  },
};

const ALIASES = {
  cursor: "claude",
  windsurf: "claude",
};

function usage() {
  console.log(`Usage: npx glua-gmod-skill [options]

Options:
  --project              Install into the current project instead of the user home
  --agent=<names>        Comma-separated agents: claude,codex,openclaw,agents
  --force                Replace an existing install
  --list                 List supported agent targets
  -h, --help             Show help`);
}

function listTargets() {
  for (const [name, target] of Object.entries(TARGETS)) {
    console.log(`${name}\t${target.label}`);
  }
  console.log("cursor\tAlias for claude");
  console.log("windsurf\tAlias for claude");
}

function parseArgs(argv) {
  const options = {
    project: false,
    force: false,
    list: false,
    help: false,
    agents: null,
  };

  for (const arg of argv) {
    if (arg === "--project") options.project = true;
    else if (arg === "--force") options.force = true;
    else if (arg === "--list") options.list = true;
    else if (arg === "-h" || arg === "--help") options.help = true;
    else if (arg.startsWith("--agent=")) options.agents = arg.slice("--agent=".length);
    else throw new Error(`Unknown option: ${arg}`);
  }

  return options;
}

function resolveAgents(value) {
  const names = value ? value.split(",").map((name) => name.trim()).filter(Boolean) : Object.keys(TARGETS);
  const resolved = new Set();

  for (const name of names) {
    const canonical = ALIASES[name] || name;
    if (!TARGETS[canonical]) {
      throw new Error(`Unsupported agent: ${name}. Use --list to see valid values.`);
    }
    resolved.add(canonical);
  }

  return [...resolved];
}

function copySkill(destination, force) {
  if (!fs.existsSync(SOURCE)) {
    throw new Error(`Missing source skill folder: ${SOURCE}`);
  }

  if (fs.existsSync(destination)) {
    if (!force) {
      throw new Error(`Target already exists: ${destination}. Re-run with --force to replace it.`);
    }
    fs.rmSync(destination, { recursive: true, force: true });
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(SOURCE, destination, { recursive: true });
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    usage();
    return;
  }

  if (options.list) {
    listTargets();
    return;
  }

  const scope = options.project ? "project" : "global";
  const agents = resolveAgents(options.agents);

  for (const agent of agents) {
    const destination = TARGETS[agent][scope]();
    copySkill(destination, options.force);
    console.log(`Installed ${SKILL_NAME} for ${TARGETS[agent].label}: ${destination}`);
  }
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
