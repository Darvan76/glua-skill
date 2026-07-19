# DMenu

---

**Hereda de:** `DScrollPanel`

---

A simple menu with sub menu, icon and convar support.

---


## Miembros (27)


---

### `DMenu:AddCVar` `[client/menu]`

Creates a DMenuOptionCVar and adds it as an option into the menu. Checking and unchecking the option will alter the given console variable's value.

**Argumentos:**

- `string strText` — The text of the button
- `string convar` — The console variable to change
- `string on` — The value of the console variable to set when the option is checked
- `string off` — The value of the console variable to set when the option is unchecked
- `function funcFunction` = `nil` — If set, the function will be called every time the option is pressed/clicked/selected.

The DMenuOptionCVar that was clicked.

**Retorna:**

- `Panel` — The created DMenuOptionCVar

*Fuente: `lua/vgui/dmenu.lua:49`*

---

### `DMenu:AddOption` `[client/menu]`

Add an option to the DMenu

**Argumentos:**

- `string name` — Name of the option.
- `function func` = `nil` — Function to execute when this option is clicked.

The DMenuOption that was clicked.

**Retorna:**

- `Panel` — Returns the created DMenuOption panel.

*Fuente: `lua/vgui/dmenu.lua:36`*

---

### `DMenu:AddPanel` `[client/menu]`

Adds a panel to the DMenu as if it were an option.

This invokes DScrollPanel:AddItem and will not create a new panel if a class name is passed, unlike Panel:Add.

**Argumentos:**

- `Panel pnl` — The panel that you want to add.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dmenu.lua:29`*

---

### `DMenu:AddSpacer` `[client/menu]`

Adds a horizontal line spacer.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DMenu:AddSubMenu` `[client/menu]`

Add a sub menu to the DMenu

**Argumentos:**

- `string Name` — Name of the sub menu.
- `function func` = `nil` — Function to execute when this sub menu is clicked.

The DMenuOption that was clicked.

**Retorna:**

- `Panel` — The created sub DMenu
- `Panel` — The created DMenuOption

---

### `DMenu:ChildCount` `[client/menu]`

Returns the number of child elements of DMenu's DScrollPanel:GetCanvas.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of child elements

---

### `DMenu:ClearHighlights` `[client/menu]`

Clears all highlights made by DMenu:HighlightItem.

Doesn't appear to be used or do anything.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DMenu:CloseSubMenu` `[client/menu]`

Used internally by DMenu:OpenSubMenu.

**Argumentos:**

- `Panel menu` — The menu to close

**Retorna:**

*(sin retorno)*

---

### `DMenu:GetChild` `[client/menu]`

Gets a child by its index.

**Argumentos:**

- `number childIndex` — The index of the child to get.

Unlike Panel:GetChild, this index starts at 1.

**Retorna:**

*(sin retorno)*

---

### `DMenu:GetDeleteSelf` `[client/menu]`

Set by DMenu:SetDeleteSelf

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DMenu:GetDrawBorder` `[client/menu]`

Returns the value set by DMenu:SetDrawBorder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DMenu:GetDrawColumn` `[client/menu]`

Returns whether the DMenu should draw the icon column with a different color or not.

See DMenu:SetDrawColumn

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether to draw the column or not

---

### `DMenu:GetMaxHeight` `[client/menu]`

Returns the maximum height of the DMenu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum height in pixels

---

### `DMenu:GetMinimumWidth` `[client/menu]`

Returns the minimum width of the DMenu in pixels

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — the minimum width of the DMenu

---

### `DMenu:GetOpenSubMenu` `[client/menu]`

Returns the currently opened submenu.

Used internally to store the open submenu by DMenu:Hide, DMenu:OpenSubMenu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The currently opened submenu, if any.

---

### `DMenu:Hide` `[client/menu]`

Used to safely hide (not remove) the menu. This will also hide any opened submenues recursively.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DMenu:HighlightItem` `[client/menu]`

Highlights selected item in the DMenu by setting the item's key "Highlight" to true.

Doesn't appear to be working or used.

**Argumentos:**

- `Panel item` — The item to highlight.

**Retorna:**

*(sin retorno)*

---

### `DMenu:Open` `[client/menu]`

Opens the DMenu at given position.

**Argumentos:**

- `number x` = `gui.MouseX()` — Position (X coordinate) to open the menu at.
- `number y` = `gui.MouseY()` — Position (Y coordinate) to open the menu at.
- `any skipanimation` = `nil` — This argument does nothing.
- `Panel ownerpanel` = `nil` — If `x` and `y` are not set manually, setting this argument will offset the `y` position of the opened menu by the height of given panel.

**Retorna:**

*(sin retorno)*

---

### `DMenu:OpenSubMenu` `[client/menu]`

Closes any active sub menus, and opens a new one.

**Argumentos:**

- `Panel item` — The DMenuOption to open the submenu at
- `Panel menu` = `nil` — The submenu to open. If set to nil, the function just closes existing submenus.

**Retorna:**

*(sin retorno)*

---

### `DMenu:OptionSelected` `[client/menu]`

Called when a option has been selected

**Argumentos:**

- `Panel option` — The DMenuOption that was selected
- `string optionText` — The options text

**Retorna:**

*(sin retorno)*

---

### `DMenu:OptionSelectedInternal` `[client/menu]`

Called by DMenuOption. Calls DMenu:OptionSelected.

**Argumentos:**

- `Panel option` — The DMenuOption that called this function

**Retorna:**

*(sin retorno)*

---

### `DMenu:SetDeleteSelf` `[client/menu]`

Set to true by default. IF set to true, the menu will be deleted when it is closed, not simply hidden.

This is used by DMenuBar

**Argumentos:**

- `boolean newState` — true to delete menu on close, false to simply hide.

**Retorna:**

*(sin retorno)*

---

### `DMenu:SetDrawBorder` `[client/menu]`

Does nothing.

**Argumentos:**

- `boolean bool` — 

**Retorna:**

*(sin retorno)*

---

### `DMenu:SetDrawColumn` `[client/menu]`

Sets whether the DMenu should draw the icon column with a different color.

**Argumentos:**

- `boolean draw` — Whether to draw the column or not

**Retorna:**

*(sin retorno)*

---

### `DMenu:SetMaxHeight` `[client/menu]`

Sets the maximum height the DMenu can have. If the height of all menu items exceed this value, a scroll bar will be automatically added.

**Argumentos:**

- `number maxHeight` — The maximum height of the DMenu to set, in pixels

**Retorna:**

*(sin retorno)*

---

### `DMenu:SetMinimumWidth` `[client/menu]`

Sets the minimum width of the DMenu. The menu will be stretched to match the given value.

**Argumentos:**

- `number minWidth` — The minimum width of the DMenu in pixels

**Retorna:**

*(sin retorno)*

---

### `DMenu:SetOpenSubMenu` `[client/menu]`

Used internally to store the open submenu by DMenu:Hide, DMenu:OpenSubMenu, DMenu:CloseSubMenu

**Argumentos:**

- `Panel item` — The menu to store

**Retorna:**

*(sin retorno)*