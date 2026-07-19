# ControlPanel

---

**Hereda de:** `DForm`

---

Used by the context menu in sandbox.

---


## Miembros (10)


---

### `ControlPanel:AddControl` `[client]`

It is recommended to use DForm's members instead.

Adds a control to the control panel.

**Argumentos:**

- `string type` — The control type to add. The complete list is:
* header
* textbox
* label
* checkbox/toggle
* slider
* propselect
* matselect
* ropematerial
* button
* numpad
* color
* combobox
* listbox
* materialgallery
- `table controlinfo` — Each control takes their own table structure. You may search "AddControl" on GitHub for examples.

Here is a full list of each type and the table members it requires:

* header
* description

* textbox:
* label (def: "Untitled")
* command

* label:
* text

* checkbox, toggle (same thing):
* label (def: "Untitled")
* command
* help (boolean, if true assumes label is a language string (`#tool.toolname.stuff`) and adds `.help` at the end)

* slider: (DForm:NumSlider)
* type (optional string, if equals `float` then 2 digits after the decimal will be used, otherwise 0)
* label (def: `Untitled`)
* command
* min (def: `0`)
* max (def: `100`)
* help (boolean, see above)

* propselect:
* (data goes directly to PropSelect's :ControlValues(data))

* matselect:
* (data goes directly to MatSelect's :ControlValues(data))

* ropematerial:
* convar (notice: NOT called command this time!)

* button:
* label / text (if label is missing will use text. Def: `No Label`)
* command

* numpad:
* command
* command2
* label
* label2

* color:
* label
* red (convar)
* green (convar)
* blue (convar)
* alpha (convar)

* combobox:
* menubutton (if doesn't equal "1", becomes a listbox)
* folder
* options (optional, ha)
* cvars (optional)

* listbox:
* height (if set, becomes DListView, otherwise is CtrlListBox)
* label (def: `unknown`)
* options (optional)

* materialgallery:
* width (def: `32`)
* height (def: `32`)
* rows (def: `4`)
* convar
* options

**Retorna:**

- `Panel` — Returns created control

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:148`*

---

### `ControlPanel:AddPanel` `[client]`

Adds an item by calling DForm:AddItem.

**Argumentos:**

- `Panel panel` — Panel to add as an item to the control panel.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:29`*

---

### `ControlPanel:ClearControls` `[client]`

Alias of Panel:Clear.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:19`*

---

### `ControlPanel:ColorPicker` `[client]`

Creates a CtrlColor (a color picker) panel and adds it as an ControlPanel:AddPanel.

**Argumentos:**

- `string label` — The label for this color picker.
- `string convarR` — Name of the convar that will store the R component of the selected color.
- `string convarG` — Name of the convar that will store the G component of the selected color.
- `string convarB` — Name of the convar that will store the B component of the selected color.
- `string convarA` = `nil` — Name of the convar that will store the A component of the selected color.

**Retorna:**

- `Panel` — The created CtrlColor panel.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:94`*

---

### `ControlPanel:ControlValues` `[client]`

Sets control values of the control panel.

**Argumentos:**

- `table data` — A two-membered table:
* boolean closed - Sets if the control panel should be unexpanded.
* string label - The text to display inside the control's label.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:138`*

---

### `ControlPanel:FillViaFunction` `[client]`

Calls the given function with this panel as the only argument. Used by the spawnmenu to populate the control panel.

This is dumb. Just call the builder function directly.

**Argumentos:**

- `function func` — The builder function.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:132`*

---

### `ControlPanel:GetEmbeddedPanel` `[client]`

Returns this control panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ControlPanel` — The same control panel the function is being called on.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:23`*

---

### `ControlPanel:KeyBinder` `[client]`

Creates a CtrlNumPad (a Sandbox key binder) panel and adds it as an ControlPanel:AddPanel.

**Argumentos:**

- `string label1` — The label for the left key binder.
- `string convar1` — The name of the convar that will store the key code for player selected key of the left key binder.
- `string label2` = `nil` — If set and `convar2` is set, the label for the right key binder.
- `string convar2` = `nil` — If set and `label2` is set, the name of the convar that will store the key code for player selected key of the right key binder.

**Retorna:**

- `Panel` — The created CtrlNumPad panel.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:117`*

---

### `ControlPanel:MatSelect` `[client]`

Creates a MatSelect panel and adds it as an ControlPanel:AddPanel.

**Argumentos:**

- `string convar` — Calls MatSelect:ContextBase:SetConVar with this value.
- `table options` = `nil` — If specified, calls MatSelect:AddMaterial(key, value) for each table entry. If the table key is a number, the function will instead be called with the value as both arguments.
- `boolean autostretch` = `nil` — If specified, calls MatSelect:SetAutoHeight with this value.
- `number width` = `nil` — If specified, calls MatSelect:SetItemWidth with this value.
- `number height` = `nil` — If specified, calls MatSelect:SetItemHeight with this value.

**Retorna:**

- `MatSelect` — The created MatSelect panel.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:36`*

---

### `ControlPanel:ToolPresets` `[client]`

Creates a ControlPresets panel and adds it as an ControlPanel:AddPanel.

**Argumentos:**

- `string group` — The presets group. Must be unique.
- `table cvarList` — A table of convar names as keys and their defaults as the values. Typically the output of Tool:BuildConVarList.

**Retorna:**

- `Panel` — The created ControlPresets panel.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controlpanel.lua:59`*