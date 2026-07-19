# DTab

---

**Hereda de:** `DButton`

---

This element is created within and only used in the DPropertySheet file. These can be elements are stored items are stored in the `Items` subtable of the DPropertySheet

---


## Miembros (7)


---

### `DTab:GetPanel` `[client/menu]`

Returns the panel that the tab represents.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — Panel added to the sheet using DPropertySheet:AddSheet.

*Fuente: `lua/vgui/dpropertysheet.lua:5`*

---

### `DTab:GetPropertySheet` `[client/menu]`

The DPropertySheet this tab belongs to.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel pnl` — The DPropertySheet this tab belongs to.

---

### `DTab:GetTabHeight` `[client/menu]`

Returns the target height of this tab. Used internally by DTab's PANEL:ApplySchemeSettings.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Either 20, or 28 if DTab:IsActive.

---

### `DTab:IsActive` `[client/menu]`

Returns whether the tab is the currently selected tab of the associated DPropertySheet.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Currently selected tab.

*Fuente: `lua/vgui/dpropertysheet.lua:34`*

---

### `DTab:SetPanel` `[client/menu]`

Used internally by DTab:Setup.

**Argumentos:**

- `Panel pnl` — The contents of this tab.

**Retorna:**

*(sin retorno)*

---

### `DTab:SetPropertySheet` `[client/menu]`

Used internally by DTab:Setup.

**Argumentos:**

- `Panel pnl` — The DPropertySheet to set for this tab.

**Retorna:**

*(sin retorno)*

---

### `DTab:Setup` `[client/menu]`

Used internally by DPropertySheet:AddSheet.

**Argumentos:**

- `string label` — Label of the tab
- `Panel sheet` — The DPropertySheet this tab belongs to.
- `Panel pnl` — Panel to be used as contents of the tab. This normally should be a DPanel.
- `string icon` = `nil` — Icon for the tab. This will typically be a Silkicons, but any material name can be used.

**Retorna:**

*(sin retorno)*