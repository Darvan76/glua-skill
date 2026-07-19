# DColorButton

---

**Hereda de:** `DLabel`

---

Colorful buttons. Used internally by DColorPalette.

---


## Miembros (8)


---

### `DColorButton:GetColor` `[client/menu]`

An Global.AccessorFunc that returns the color of the button

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The Color of the button

*Fuente: `lua/vgui/dcolorbutton.lua:9`*

---

### `DColorButton:GetDrawBorder` `[client/menu]`

An Global.AccessorFunc that returns value set by DColorButton:SetDrawBorder. See that page for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Value set by DColorButton:SetDrawBorder.

*Fuente: `lua/vgui/dcolorbutton.lua:6`*

---

### `DColorButton:GetID` `[client/menu]`

An Global.AccessorFunc that returns the unique ID set by DColorButton:SetID.

Used internally by DColorPalette

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The unique ID of the button

*Fuente: `lua/vgui/dcolorbutton.lua:10`*

---

### `DColorButton:GetSelected` `[client/menu]`

An Global.AccessorFunc that is an alias of Panel:IsSelected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

*Fuente: `lua/vgui/dcolorbutton.lua:7`*

---

### `DColorButton:IsDown` `[client/menu]`

Returns whether the DColorButton is currently being pressed (the user is holding it down).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

*Fuente: `lua/vgui/dcolorbutton.lua:24`*

---

### `DColorButton:SetColor` `[client/menu]`

Sets the color of the DColorButton.

**Argumentos:**

- `Color color` — A Color to set the color as
- `boolean noTooltip` = `false` — If true, the tooltip will not be reset to display the selected color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorbutton.lua:30`*

---

### `DColorButton:SetDrawBorder` `[client/menu]`

An Global.AccessorFunc that does absolutely nothing at all. Default value is automatically set to true.

**Argumentos:**

- `boolean draw` — Does nothing.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorbutton.lua:6`*

---

### `DColorButton:SetID` `[client/menu]`

An Global.AccessorFunc that is used internally by DColorPalette to detect which button is which.

Pairs with DColorButton:GetID

**Argumentos:**

- `number id` — A unique ID to give this button

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorbutton.lua:10`*