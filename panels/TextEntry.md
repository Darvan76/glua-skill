# TextEntry

---

**Hereda de:** `Panel`

---

Basic text input field.

See DTextEntry for a more advanced version.

---


## Miembros (2)


---

### `TextEntry:OnKeyCodeTyped` `[client/menu]`

Called from engine whenever a valid character is typed while the text entry is focused.

Used internally for functionality of DTextEntry

**Argumentos:**

- `number keyCode` — They key code of the key pressed, see Enums/KEY.

**Retorna:**

- `boolean` — Whether you've handled the key press. Returning true prevents the default text entry behavior from occurring.

---

### `TextEntry:OnTextChanged` `[client/menu]`

Called when the text inside the TextEntry changes.

You may be looking for DTextEntry:OnValueChange instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*