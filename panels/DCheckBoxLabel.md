# DCheckBoxLabel

---

**Hereda de:** `DPanel`

---

The **DCheckBoxLabel** is a DCheckBox with a DLabel next to it.
It allows you to get a boolean value from the user (true/false - yes/no)

---


## Miembros (13)


---

### `DCheckBoxLabel:GetChecked` `[client/menu]`

Gets the checked state of the checkbox. This calls the checkbox's DCheckBox:GetChecked function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the box is checked or not.

*Fuente: `lua/vgui/dcheckbox.lua:114`*

---

### `DCheckBoxLabel:GetIndent` `[client/menu]`

An Global.AccessorFunc that gets the indentation of the element on the X axis. See also DCheckBoxLabel:SetIndent

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — How much the content is moved to the right in pixels

*Fuente: `lua/vgui/dcheckbox.lua:81`*

---

### `DCheckBoxLabel:OnChange` `[client/menu]`

Called when the "checked" state is changed. This is meant to be Overriden

**Argumentos:**

- `boolean bVal` — Whether the checkbox is checked or unchecked.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:179`*

---

### `DCheckBoxLabel:SetBright` `[client/menu]`

Sets the color of the DCheckBoxLabel's text to the bright text color defined in the skin.

**Argumentos:**

- `boolean bright` — true makes the text bright.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:98`*

---

### `DCheckBoxLabel:SetChecked` `[client/menu]`

Sets the checked state of the checkbox. Does not call DCheckBoxLabel:OnChange or Panel:ConVarChanged, unlike DCheckBoxLabel:SetValue.

**Argumentos:**

- `boolean checked` — Whether the box should be checked or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:110`*

---

### `DCheckBoxLabel:SetConVar` `[client/menu]`

Sets the console variable to be set when the checked state of the DCheckBoxLabel changes.

**Argumentos:**

- `string convar` — The name of the convar to set

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:102`*

---

### `DCheckBoxLabel:SetDark` `[client/menu]`

Sets the text of the DCheckBoxLabel to be dark colored in accordance with the currently active Derma skin.

**Argumentos:**

- `boolean darkify` — True to be dark, false to be default

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:94`*

---

### `DCheckBoxLabel:SetFont` `[client/menu]`

Sets the font of the text part of the DCheckBoxLabel.

**Argumentos:**

- `string font` — Font name

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:156`*

---

### `DCheckBoxLabel:SetIndent` `[client/menu]`

An Global.AccessorFunc that sets the indentation of the element on the X axis.

**Argumentos:**

- `number ident` — How much in pixels to move the content to the right

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:81`*

---

### `DCheckBoxLabel:SetTextColor` `[client/menu]`

Sets the text color for the DCheckBoxLabel.

**Argumentos:**

- `Color color` — The text color. Uses the Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:134`*

---

### `DCheckBoxLabel:SetValue` `[client/menu]`

Sets the checked state of the checkbox, and calls DCheckBoxLabel:OnChange and the checkbox's Panel:ConVarChanged methods.

**Argumentos:**

- `boolean checked` — Whether the box should be checked or not (1 or 0 can also be used).

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:106`*

---

### `DCheckBoxLabel:SizeToContents` `[client/menu]`

Sizes the panel to the size of the internal DLabel and DButton

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:140`*

---

### `DCheckBoxLabel:Toggle` `[client/menu]`

Toggles the checked state of the DCheckBoxLabel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:118`*