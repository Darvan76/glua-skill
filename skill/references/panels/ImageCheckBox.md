# ImageCheckBox

---

**Hereda de:** `Button`

---

A checkbox panel similar to DCheckBox and DImageButton with customizable checked state image.

Uses the Material panel internally. Can't have a label.

Will error if no material was set.

---


## Miembros (4)


---

### `ImageCheckBox:GetChecked` `[client]`

Returns the checked state of the ImageCheckBox

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — true for checked, false otherwise

---

### `ImageCheckBox:Set` `[client]`

Sets the checked state of the checkbox.

Checked state can be obtained by ImageCheckBox.State.

**Argumentos:**

- `boolean OnOff` — true for checked, false otherwise

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/imagecheckbox.lua:32`*

---

### `ImageCheckBox:SetChecked` `[client]`

Sets the checked state of the checkbox.

Checked state can be obtained via ImageCheckBox:GetChecked

**Argumentos:**

- `boolean bOn` — true for checked, false otherwise

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/imagecheckbox.lua:18`*

---

### `ImageCheckBox:SetMaterial` `[client]`

Sets the material that will be visible when the ImageCheckBox is checked.

Internally calls Material:SetMaterial.

Will error if no material was set.

**Argumentos:**

- `string mat` — The file path of the material to set (relative to "garrysmod/materials/").

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/imagecheckbox.lua:4`*