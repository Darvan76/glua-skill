# DCollapsibleCategory

---

**Hereda de:** `Panel`

---

The collapsible category allows you to create numerous sections of controls, and have the ability to contract/expand them.

Consider using DCategoryList if you plan on using more than 1 of these.

---


## Miembros (24)


---

### `DCollapsibleCategory:Add` `[client/menu]`

Adds a new text button to the collapsible category, like the tool menu in Spawnmenu.

**Argumentos:**

- `string name` — The name of the button

**Retorna:**

- `Panel` — The DButton

*Fuente: `lua/vgui/dcategorycollapse.lua:75`*

---

### `DCollapsibleCategory:AnimSlide` `[client/menu]`

Internal function that handles the open/close animations.

**Argumentos:**

- `table anim` — 
- `number delta` — 
- `table data` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:281`*

---

### `DCollapsibleCategory:DoExpansion` `[client/menu]`

Forces the category to open or collapse

**Argumentos:**

- `boolean expand` — True to open, false to collapse

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:233`*

---

### `DCollapsibleCategory:GetAnimTime` `[client/menu]`

An Global.AccessorFunc that returns the expand/collapse animation time set by DCollapsibleCategory:SetAnimTime.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The animation time in seconds

*Fuente: `lua/vgui/dcategorycollapse.lua:50`*

---

### `DCollapsibleCategory:GetDrawBackground` `[client/menu]`

You should use DCollapsibleCategory:GetPaintBackground instead.

Returns whether or not the panel background is being drawn. Alias of DCollapsibleCategory:GetPaintBackground.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the panel background is drawn, false otherwise.

*Fuente: `lua/vgui/dcategorycollapse.lua:52`*

---

### `DCollapsibleCategory:GetExpanded` `[client/menu]`

Returns whether the DCollapsibleCategory is expanded or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If expanded it will return true.

*Fuente: `lua/vgui/dcategorycollapse.lua:48`*

---

### `DCollapsibleCategory:GetHeaderHeight` `[client/menu]`

Returns the header height of the DCollapsibleCategory.

See also DCollapsibleCategory:SetHeaderHeight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number height` — The current height of the header.

*Fuente: `lua/vgui/dcategorycollapse.lua:162`*

---

### `DCollapsibleCategory:GetList` `[client/menu]`

If set, the DCategoryList that created this panel.

See also DCollapsibleCategory:SetList.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The DCategoryList that created us.

*Fuente: `lua/vgui/dcategorycollapse.lua:54`*

---

### `DCollapsibleCategory:GetPadding` `[client/menu]`

Doesn't actually do anything.

Returns the number set by DCollapsibleCategory:SetPadding.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

*Fuente: `lua/vgui/dcategorycollapse.lua:53`*

---

### `DCollapsibleCategory:GetPaintBackground` `[client/menu]`

An Global.AccessorFunc that returns whether or not the background should be painted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If the background is painted or not

*Fuente: `lua/vgui/dcategorycollapse.lua:41`*

---

### `DCollapsibleCategory:GetStartHeight` `[client/menu]`

Returns whatever was set by DCollapsibleCategory:SetStartHeight

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

*Fuente: `lua/vgui/dcategorycollapse.lua:49`*

---

### `DCollapsibleCategory:OnToggle` `[client/menu]`

Called by DCollapsibleCategory:Toggle. This function does nothing by itself, as you're supposed to overwrite it.

**Argumentos:**

- `boolean expanded` — If it was expanded or not

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:227`*

---

### `DCollapsibleCategory:SetAnimTime` `[client/menu]`

Sets the time in seconds it takes to expand the DCollapsibleCategory

**Argumentos:**

- `number time` — The time in seconds it takes to expand

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:50`*

---

### `DCollapsibleCategory:SetContents` `[client/menu]`

Sets the contents of the DCollapsibleCategory.

**Argumentos:**

- `Panel pnl` — The panel, containing the contents for the DCollapsibleCategory, mostly an DScrollPanel

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:176`*

---

### `DCollapsibleCategory:SetDrawBackground` `[client/menu]`

You should use DCollapsibleCategory:SetPaintBackground instead.Sets whether or not to draw the panel background. Alias of DCollapsibleCategory:SetPaintBackground.

**Argumentos:**

- `boolean draw` — True to show the panel's background, false to hide it.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:52`*

---

### `DCollapsibleCategory:SetExpanded` `[client/menu]`

Sets whether the DCollapsibleCategory is expanded or not upon opening the container.

You should use DCollapsibleCategory:Toggle or DCollapsibleCategory:DoExpansion instead.

**Argumentos:**

- `boolean expanded` = `true` — Whether it shall be expanded or not by default

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:48`*

---

### `DCollapsibleCategory:SetHeaderHeight` `[client/menu]`

Sets the header height of the DCollapsibleCategory.

See also DCollapsibleCategory:GetHeaderHeight.

**Argumentos:**

- `number height` — The new height to set. Default height is 20.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:156`*

---

### `DCollapsibleCategory:SetLabel` `[client/menu]`

Sets the name of the DCollapsibleCategory.

**Argumentos:**

- `string label` — The label/name of the DCollapsibleCategory.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:150`*

---

### `DCollapsibleCategory:SetList` `[client/menu]`

Used internally by DCategoryList when it creates a DCollapsibleCategory during DCategoryList:Add.

If set, Panel:UnselectAll will be called on the list, instead of calling it on the category panel itself when a category is clicked.

**Argumentos:**

- `Panel pnl` — The Panel:UnselectAll that is the "parent" of this panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:54`*

---

### `DCollapsibleCategory:SetPadding` `[client/menu]`

Doesn't actually do anything.

**Argumentos:**

- `number padding` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:53`*

---

### `DCollapsibleCategory:SetPaintBackground` `[client/menu]`

Sets whether or not the background should be painted.

**Argumentos:**

- `boolean paint` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:51`*

---

### `DCollapsibleCategory:SetStartHeight` `[client/menu]`

Does nothing.

**Argumentos:**

- `number height` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:49`*

---

### `DCollapsibleCategory:Toggle` `[client/menu]`

Toggles the expanded state of the DCollapsibleCategory.

See DCollapsibleCategory:GetExpanded for a function to retrieve the expanded state.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:209`*

---

### `DCollapsibleCategory:UpdateAltLines` `[client/menu]`

Used internally to update the "AltLine" property on all "child" panels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorycollapse.lua:136`*