# DProperty_Combo

---

**Hereda de:** `DProperty_Generic`

---

DComboBox control for a DProperties panel.

---


## Miembros (4)


---

### `DProperty_Combo:AddChoice` `[client]`

Add a choice to your combo control.

**Argumentos:**

- `string Text` — Shown text.
- `any data` — Stored Data.
- `boolean select` = `false` — Select this element?

**Retorna:**

*(sin retorno)*

---

### `DProperty_Combo:DataChanged` `[client]`

Called after the user selects a new value.

**Argumentos:**

- `any data` — The new data that was selected.

**Retorna:**

*(sin retorno)*

---

### `DProperty_Combo:SetSelected` `[client]`

Set the selected option.

**Argumentos:**

- `number Id` — Id of the choice to be selected.

**Retorna:**

*(sin retorno)*

---

### `DProperty_Combo:Setup` `[client]`

Sets up a combo control.

**Argumentos:**

- `table data` = `{ text = 'Select...' }` — Data to use to set up the combo box control. See Editable Entities.

Structure:
* string text - The default label for this combo box
* table values - The values to add to the combo box. Keys are the "nice" text, values are the data value to send.
* table icons - The icons for each value. They will be matched by key name.
* boolean select - The "nice" name/key of the value that should be initially selected.

**Retorna:**

*(sin retorno)*