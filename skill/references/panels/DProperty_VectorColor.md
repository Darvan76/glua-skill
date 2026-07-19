# DProperty_VectorColor

---

**Hereda de:** `DProperty_Generic`

---

Color picker control for a DProperties panel. Opens a DColorCombo if the color preview is clicked.

See Editable Entities for how this is used ingame.

---


## Miembros (2)


---

### `DProperty_VectorColor:SetValue` `[client]`

Sets the color value of the property.

**Argumentos:**

- `Vector color` — Sets the color to use in a DProperty_VectorColor.

**Retorna:**

*(sin retorno)*

---

### `DProperty_VectorColor:Setup` `[client]`

Called by a property row to setup a color selection control.

**Argumentos:**

- `table settings` — A table of settings. None of the values are used for this property. See Editable Entities.

**Retorna:**

*(sin retorno)*