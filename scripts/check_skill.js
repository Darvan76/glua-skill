#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const skill = path.join(root, "skill");
const references = path.join(skill, "references");
const index = path.join(references, "00_INDEX.md");

const required = [
  path.join(skill, "SKILL.md"),
  path.join(skill, "agents", "openai.yaml"),
  index,
  path.join(references, "globals.md"),
  path.join(references, "enums.md"),
  path.join(references, "structs.md"),
  path.join(references, "classes"),
  path.join(references, "libraries"),
  path.join(references, "hooks"),
  path.join(references, "panels"),
  path.join(references, "patterns", "realms.md"),
  path.join(references, "patterns", "net-security.md"),
  path.join(references, "patterns", "derma-vgui.md"),
  path.join(references, "patterns", "darkrp.md"),
  path.join(references, "patterns", "permissions.md"),
  path.join(references, "patterns", "performance.md"),
];

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL ${message}`);
}

for (const entry of required) {
  if (!fs.existsSync(entry)) {
    fail(`Missing required path: ${path.relative(root, entry)}`);
  }
}

if (fs.existsSync(path.join(root, "INDEX.md"))) {
  fail("Root INDEX.md should be moved to skill/references/00_INDEX.md");
}

if (fs.existsSync(index)) {
  const content = fs.readFileSync(index, "utf8");
  const matches = [...content.matchAll(/`([^`]+\.md)`/g)].map((match) => match[1]);
  const missing = new Set();

  for (const relative of matches) {
    const target = path.join(references, relative.replaceAll("/", path.sep));
    if (!fs.existsSync(target)) missing.add(relative);
  }

  for (const relative of [...missing].sort()) {
    fail(`Index points to missing file: ${relative}`);
  }

  const entryCount = (content.match(/^\| `[^`]+` \|/gm) || []).length;
  if (entryCount < 5000) {
    fail(`Index entry count looks too low: ${entryCount}`);
  }
}

if (failures > 0) {
  process.exit(1);
}

console.log("Skill structure looks valid.");
