# DColumnSheet

---

**Hereda de:** `Panel`

---

Similar to DPropertySheet, but with tabs on the left.

---


## Miembros (4)


---

### `DColumnSheet:AddSheet` `[client/menu]`

Adds a new column/tab.

**Argumentos:**

- `string name` — Name of the column/tab
- `Panel pnl` — Panel to be used as contents of the tab. This normally would be a DPanel
- `string icon` = `nil` — Icon for the tab. This will ideally be a Silkicons, but any material name can be used.

**Retorna:**

- `table` — A table containing the following keys:
* DButton / DImageButton Button - The created tab button that will switch to the given panel.
* Panel Panel - The given panel to switch to when the button is pressed.

*Fuente: `lua/vgui/dcolumnsheet.lua:24`*

---

### `DColumnSheet:GetActiveButton` `[client/menu]`

An Global.AccessorFunc that returns the active button of this DColumnSheet.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The active button

*Fuente: `lua/vgui/dcolumnsheet.lua:4`*

---

### `DColumnSheet:SetActiveButton` `[client/menu]`

An Global.AccessorFunc that makes a button an active button for this DColumnSheet.

**Argumentos:**

- `Panel active` — The button to make active button

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolumnsheet.lua:64`*

---

### `DColumnSheet:UseButtonOnlyStyle` `[client/menu]`

Makes the tabs/buttons show only the image and no text.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolumnsheet.lua:20`*