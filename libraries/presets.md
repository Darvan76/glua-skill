# presets

---

The presets library lets you add and modify the pre-set options for scripted tools (selected via the white bar at the top of each tools control panel).

---


## Miembros (7)


---

### `presets:Add` `[client]`

Adds preset to a preset group.

**Argumentos:**

- `string groupname` — The preset group name, usually it's tool class name.
- `string name` — Preset name, must be unique.
- `table values` — A table of preset console commands.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/presets.lua:33`*

---

### `presets:BadNameAlert` `[client]`

Used internally to tell the player that the name they tried to use in their preset is not acceptable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/presets.lua:81`*

---

### `presets:Exists` `[client]`

Returns whether a preset with given name exists or not

**Argumentos:**

- `string type` — The preset group name, usually it's tool class name.
- `string name` — Name of the preset to test

**Retorna:**

- `boolean` — true if the preset does exist

*Fuente: `lua/includes/modules/presets.lua:20`*

---

### `presets:GetTable` `[client]`

Returns a table with preset names and values from a single preset group.

**Argumentos:**

- `string groupname` — Preset group name.

**Retorna:**

- `table` — All presets in specified group.

*Fuente: `lua/includes/modules/presets.lua:8`*

---

### `presets:OverwritePresetPrompt` `[client]`

Used internally to ask the player if they want to override an already existing preset.

**Argumentos:**

- `function callback` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/presets.lua:87`*

---

### `presets:Remove` `[client]`

Removes a preset entry from a preset group.

**Argumentos:**

- `string groupname` — Preset group to remove from
- `string name` — Name of preset to remove

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/presets.lua:65`*

---

### `presets:Rename` `[client]`

Renames preset.

**Argumentos:**

- `string groupname` — Preset group name
- `string oldname` — Old preset name
- `string newname` — New preset name

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/presets.lua:48`*