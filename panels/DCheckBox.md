# DCheckBox

---

**Hereda de:** `DButton`

---

The DCheckBox is a checkbox. It allows you to get a boolean value from the user (true/false - yes/no)

---


## Miembros (7)


---

### `DCheckBox:DoClick` `[client/menu]`

Calls DCheckBox:Toggle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:39`*

---

### `DCheckBox:GetChecked` `[client/menu]`

An Global.AccessorFunc that gets the checked state of the checkbox.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the box is checked or not.

*Fuente: `lua/vgui/dcheckbox.lua:4`*

---

### `DCheckBox:IsEditing` `[client/menu]`

Returns whether the state of the checkbox is being edited. This means whether the user is currently clicking (mouse-down) on the checkbox, and applies to both the left and right mouse buttons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the checkbox is being clicked.

*Fuente: `lua/vgui/dcheckbox.lua:19`*

---

### `DCheckBox:OnChange` `[client/menu]`

Called when the "checked" state is changed. This is for Overriding

**Argumentos:**

- `boolean bVal` — Whether the CheckBox is checked or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:51`*

---

### `DCheckBox:SetChecked` `[client/menu]`

An Global.AccessorFunc that sets the checked state of the checkbox. Does not call the checkbox's DCheckBox:OnChange and Panel:ConVarChanged methods, unlike DCheckBox:SetValue.

**Argumentos:**

- `boolean checked` — Whether the box should be checked or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:4`*

---

### `DCheckBox:SetValue` `[client/menu]`

Sets the checked state of the checkbox, and calls the checkbox's DCheckBox:OnChange and Panel:ConVarChanged methods.

**Argumentos:**

- `boolean checked` — Whether the box should be checked or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:23`*

---

### `DCheckBox:Toggle` `[client/menu]`

Toggles the checked state of the checkbox, and calls the checkbox's DCheckBox:OnChange and Panel:ConVarChanged methods. DCheckBox:DoClick is an alias of this function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcheckbox.lua:45`*