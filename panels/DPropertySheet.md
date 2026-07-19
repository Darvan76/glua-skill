# DPropertySheet

---

**Hereda de:** `Panel`

---

A tab oriented control where you can create multiple tabs with items within. Used mainly for organization.

---


## Miembros (16)


---

### `DPropertySheet:AddSheet` `[client/menu]`

Adds a new tab.

**Argumentos:**

- `string name` — Name of the tab
- `Panel pnl` — Panel to be used as contents of the tab. This normally should be a DPanel
- `string icon` = `nil` — Icon for the tab. This will ideally be a Silkicons, but any material name can be used.
- `boolean noStretchX` = `false` — Should DPropertySheet try to fill itself with given panel horizontally.
- `boolean noStretchY` = `false` — Should DPropertySheet try to fill itself with given panel vertically.
- `string tooltip` = `nil` — Tooltip for the tab when user hovers over it with his cursor

**Retorna:**

- `table` — A table containing the following keys:
* Panel Tab - The created DTab.
* string Name - Name of the created tab
* Panel Panel - The contents panel of the tab

*Fuente: `lua/vgui/dpropertysheet.lua:175`*

---

### `DPropertySheet:CloseTab` `[client/menu]`

Removes tab and/or panel from the parent DPropertySheet.

**Argumentos:**

- `Panel tab` — The DTab of the sheet from DPropertySheet.

See DPropertySheet:GetItems.
- `boolean removePanel` — Set to true to remove the associated panel object as well.

**Retorna:**

- `Panel` — The panel of the tab.

*Fuente: `lua/vgui/dpropertysheet.lua:405`*

---

### `DPropertySheet:CrossFade` `[client/menu]`

Internal function that handles the cross fade animation when the player switches tabs.

**Argumentos:**

- `table anim` — 
- `number delta` — 
- `table data` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:254`*

---

### `DPropertySheet:GetActiveTab` `[client/menu]`

Returns the active DTab of this DPropertySheet.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The DTab

*Fuente: `lua/vgui/dpropertysheet.lua:151`*

---

### `DPropertySheet:GetFadeTime` `[client/menu]`

Returns the amount of time (in seconds) it takes to fade between tabs.

Set by DPropertySheet:SetFadeTime

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of time (in seconds) it takes to fade between tabs.

*Fuente: `lua/vgui/dpropertysheet.lua:153`*

---

### `DPropertySheet:GetItems` `[client/menu]`

Returns a list of all tabs of this DPropertySheet.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of tables.
Each table contains 3 key-value pairs:

* string Name - The name of the tab.
* Panel Tab - The DTab associated with the tab.
* Panel Panel - The Panel associated with the tab.

*Fuente: `lua/vgui/dpropertysheet.lua:248`*

---

### `DPropertySheet:GetPadding` `[client/menu]`

Gets the padding from the parent panel to child panels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Padding

*Fuente: `lua/vgui/dpropertysheet.lua:152`*

---

### `DPropertySheet:GetShowIcons` `[client/menu]`

Returns whatever value was set by DPropertySheet:SetShowIcons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

*Fuente: `lua/vgui/dpropertysheet.lua:155`*

---

### `DPropertySheet:OnActiveTabChanged` `[client/menu]`

Called when a player switches the tabs.

Source code states that this is meant to be overridden.

**Argumentos:**

- `Panel old` — The previously active DTab
- `Panel new` — The newly active DTab

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:238`*

---

### `DPropertySheet:SetActiveTab` `[client/menu]`

Sets the active tab of the DPropertySheet.

**Argumentos:**

- `Panel tab` — The DTab to set active.

See DPropertySheet:GetItems

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:151`*

---

### `DPropertySheet:SetFadeTime` `[client/menu]`

Sets the amount of time (in seconds) it takes to fade between tabs.

**Argumentos:**

- `number time` = `0.1` — The amount of time it takes (in seconds) to fade between tabs.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:153`*

---

### `DPropertySheet:SetPadding` `[client/menu]`

Sets the padding from parent panel to children panel.

**Argumentos:**

- `number padding` = `8` — Amount of padding

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:152`*

---

### `DPropertySheet:SetShowIcons` `[client/menu]`

Does nothing.

**Argumentos:**

- `boolean show` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:155`*

---

### `DPropertySheet:SetupCloseButton` `[client/menu]`

Creates a close button on the right side of the DPropertySheet that will run the given callback function when pressed.

**Argumentos:**

- `function func` — Callback function to be called when the close button is pressed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:391`*

---

### `DPropertySheet:SizeToContentWidth` `[client/menu]`

Sets the width of the DPropertySheet to fit the contents of all of the tabs.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:359`*

---

### `DPropertySheet:SwitchToName` `[client/menu]`

Switches the active tab to a tab with given name.

**Argumentos:**

- `string name` — Case sensitive name of the tab.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpropertysheet.lua:376`*