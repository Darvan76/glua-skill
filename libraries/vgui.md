# vgui

---

The **vgui** library allows you to script and create your own panels using **V**alve's **G**raphical **U**ser **I**nterface (VGUI) system.

For an alphabetically ordered list of VGUI panels, see VGUI Element List.

---


## Miembros (15)


---

### `vgui:Create` `[client/menu]`

Creates a panel by the specified classname.
Custom VGUI elements are not loaded instantly. Use GM:OnGamemodeLoaded to create them on startup.

**Argumentos:**

- `string classname` — Classname of the panel to create.

Default panel classnames can be found on the VGUI Element List.

New panels can be registered via vgui.Register
- `Panel parent` = `nil` — Panel to parent to.
- `string name` = `nil` — Custom name of the created panel for scripting/debugging purposes. Can be retrieved with Panel:GetName.

**Retorna:**

- `Panel` — The created panel, or `nil` if creation failed for whatever reason.

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:23`*

---

### `vgui:CreateFromTable` `[client/menu]`

Creates a panel from a table, used alongside vgui.RegisterFile and vgui.RegisterTable to efficiently define, register, and instantiate custom panels.

**Argumentos:**

- `table metatable` — Your PANEL table.
- `Panel parent` = `nil` — Which panel to parent the newly created panel to.
- `string name` = `nil` — Custom name of the created panel for scripting/debugging purposes. Can be retrieved with Panel:GetName.

**Retorna:**

- `Panel` — The created panel, or `nil` if creation failed for whatever reason.

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:54`*

---

### `vgui:CreateX` `[client/menu]`

Creates an engine panel.

**Argumentos:**

- `string class` — Class of the panel to create
- `Panel parent` = `nil` — If specified, parents created panel to given one
- `string name` = `nil` — Name of the created panel

**Retorna:**

- `Panel` — Created panel

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:13`*

---

### `vgui:CursorVisible` `[client/menu]`

Returns whenever the cursor is currently active and visible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the cursor is visible or not.

---

### `vgui:Exists` `[client/menu]`

Returns true if Lua-defined panel exists by name. Uses vgui.GetControlTable internally.

**Argumentos:**

- `string Panelname` — The name of the panel to get test.

**Retorna:**

- `boolean` — Whether a panel with given name was registered yet or not.

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:19`*

---

### `vgui:FocusedHasParent` `[client/menu]`

Returns whether the currently focused panel is a child of the given one.

**Argumentos:**

- `Panel parent` — The parent panel to check the currently focused one against. This doesn't need to be a direct parent (focused panel can be a child of a child and so on).

**Retorna:**

- `boolean` — Whether or not the focused panel is a child of the passed one.

---

### `vgui:GetAll` `[client/menu]`

Returns all Lua-created panels.

Used internally for PANEL:PreAutoRefresh and PANEL:PostAutoRefresh.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Panel>` — List of all Lua created panels.

---

### `vgui:GetControlTable` `[client/menu]`

Returns the table of a Lua-defined panel by name. Does not return parent members of the table!

**Argumentos:**

- `string Panelname` — The name of the panel to get the table of.

**Retorna:**

- `table` — The `PANEL` table of the a Lua-defined panel with given name.

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:15`*

---

### `vgui:GetHoveredPanel` `[client/menu]`

Returns the panel the cursor is hovering above.

This returns a cached value that is only updated after rendering and `before` the next VGUI Think/Layout pass.

ie. it lags one frame behind panel layout and is completely unhelpful for PANEL:Paint if your panels are moving around under the mouse a lot every frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The panel that the user is currently hovering over with their cursor.

---

### `vgui:GetKeyboardFocus` `[client/menu]`

Returns the panel which is currently receiving keyboard input.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The panel with keyboard focus

---

### `vgui:GetWorldPanel` `[client/menu]`

Returns the global world panel which is the parent to all others, except for the HUD panel.

See also Global.GetHUDPanel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The world panel

---

### `vgui:IsHoveringWorld` `[client/menu]`

Returns whenever the cursor is hovering the world panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isHoveringWorld

---

### `vgui:Register` `[client/menu]`

Registers a panel for later creation via vgui.Create.

**Argumentos:**

- `string classname` — Classname of the panel to register. This is what you will need to pass to vgui.Create's first argument.

This must be unique, including classnames of entities due to internal usage of baseclass.Set.
- `table panelTable` — The table containing the panel information.
- `string baseName` = `Panel` — Classname of a panel to inherit functionality from. Functions with same names will be overwritten preferring the panel that is being registered.

**Retorna:**

- `table` — The given panel table from second argument

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:74`*

---

### `vgui:RegisterFile` `[client/menu]`

Registers a new VGUI panel from a file, to be used with vgui.CreateFromTable.

File file must use the `PANEL` global that is provided just before the file is Global.included, for example:

```
PANEL.Base = "Panel"

function PANEL:Init()
-- Your code...
end

function PANEL:Think()
-- Your code...
end
```

**Argumentos:**

- `string file` — The file to register

**Retorna:**

- `table` — A table containing info about the panel.

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:112`*

---

### `vgui:RegisterTable` `[client/menu]`

Registers a table to use as a panel, to be used with vgui.CreateFromTable.

All this function does is assigns Base key to your table and returns the table.

**Argumentos:**

- `table panel` — The PANEL table.
- `string base` = `Panel` — A base for the panel.

**Retorna:**

- `table` — The PANEL table

*Fuente: `lua/includes/extensions/client/panel/scriptedpanels.lua:100`*