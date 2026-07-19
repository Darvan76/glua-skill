# DColorCombo

---

**Hereda de:** `DPropertySheet`

---

The **DColorCombo** allows the user to choose color, without alpha,
using DColorMixer or DColorPalette in a tabbed view.

---


## Miembros (5)


---

### `DColorCombo:BuildControls` `[client]`

Called internally to create panels necessary for this panel to work.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcombo.lua:14`*

---

### `DColorCombo:GetColor` `[client]`

An Global.AccessorFunc that returns the color of the DColorCombo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — A Color

*Fuente: `lua/vgui/dcolorcombo.lua:4`*

---

### `DColorCombo:IsEditing` `[client]`

Returns true if the panel is currently being edited

More of a internal method, it technically should only ever work (i.e. return true) inside DColorCombo:OnValueChanged.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

*Fuente: `lua/vgui/dcolorcombo.lua:57`*

---

### `DColorCombo:OnValueChanged` `[client]`

Called when the value (color) of this panel was changed. For override

**Argumentos:**

- `Color newcol` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcombo.lua:63`*

---

### `DColorCombo:SetColor` `[client]`

An Global.AccessorFunc that returns the color of this panel. See also DColorCombo:GetColor

**Argumentos:**

- `Color clr` — A Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcombo.lua:69`*