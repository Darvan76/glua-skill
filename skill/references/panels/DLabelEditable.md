# DLabelEditable

---

**Hereda de:** `DLabel`

---

An editable DLabel, double click on it to edit.

This is used in the spawnmenu spawnlist headers.

---


## Miembros (4)


---

### `DLabelEditable:GetAutoStretch` `[client]`

Returns whether the editable label will stretch to the text entered or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the editable label will stretch to the text entered or not.

---

### `DLabelEditable:IsEditing` `[client/menu]`

Returns whether this DLabelEditable is being edited or not. (i.e. has focus)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this DLabelEditable is being edited or not

---

### `DLabelEditable:OnLabelTextChanged` `[client]`

A hook called when the player presses Enter (i.e. the finished editing the label) and the text has changed.

Allows you to override/modify the text that will be set to display.

**Argumentos:**

- `string txt` — The original user input text

**Retorna:**

- `string` — If provided, will override the text that will be applied to the label itself.

---

### `DLabelEditable:SetAutoStretch` `[client]`

Sets whether the editable label should stretch to the text entered or not.

**Argumentos:**

- `boolean stretch` — Whether the editable label should stretch to the text entered or not.

**Retorna:**

*(sin retorno)*