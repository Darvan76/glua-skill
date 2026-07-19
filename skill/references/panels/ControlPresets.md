# ControlPresets

---

**Hereda de:** `Panel`

---

A preset manager, found at the top of almost every default tool's C-menu.

This control only exists in Sandbox derived gamemodes.

---


## Miembros (13)


---

### `ControlPresets:AddConVar` `[client]`

Adds a convar to be managed by this control.

**Argumentos:**

- `string convar` — The convar to add.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:110`*

---

### `ControlPresets:AddOption` `[client]`

Adds option to the DComboBox subelement with DComboBox:AddChoice then adds it to the `options` subtable

**Argumentos:**

- `string strName` — Name
- `any data` — data

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:48`*

---

### `ControlPresets:Clear` `[client]`

Runs Panel:Clear on the Internal DComboBox

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:48`*

---

### `ControlPresets:GetConVars` `[client]`

Get a list of all Console Variables being managed by this panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — numbered table of convars

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:116`*

---

### `ControlPresets:OnSelect` `[client]`

Checks if Data is valid then uses Global.pairs to iterate over the data parameter and run each entry using Global.RunConsoleCommand
Index and Value parameters appear to not be used. Further testing should be done to confirm

**Argumentos:**

- `number index` — Name
- `any value` — 
- `table data` — 

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:62`*

---

### `ControlPresets:OpenPresetEditor` `[client]`

Creates and opens PresetEditor

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:97`*

---

### `ControlPresets:QuickSaveInternal` `[client]`

**Argumentos:**

- `string text` — 

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:72`*

---

### `ControlPresets:QuickSavePreset` `[client]`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:82`*

---

### `ControlPresets:ReloadPresets` `[client]`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:129`*

---

### `ControlPresets:SetLabel` `[client]`

Set the name label text.

**Argumentos:**

- `string name` — The text to put in the label

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:42`*

---

### `ControlPresets:SetOptions` `[client]`

Uses table.Merge to combine the provided table into the `Options` subtable

**Argumentos:**

- `table Options` — Options

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:56`*

---

### `ControlPresets:SetPreset` `[client]`

**Argumentos:**

- `string strName` — Name of preset to set

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:122`*

---

### `ControlPresets:Update` `[client]`

Alias of ControlPresets:ReloadPresets

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/control_presets.lua:48`*