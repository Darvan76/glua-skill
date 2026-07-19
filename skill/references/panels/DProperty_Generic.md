# DProperty_Generic

---

**Hereda de:** `Panel`

---

A base for other controls for DProperties. Acts as a generic text input on its own.

---


## Miembros (4)


---

### `DProperty_Generic:GetRow` `[client]`

Returns the internal row panel of a DProperties that this panel belongs to.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The row panel.

---

### `DProperty_Generic:SetRow` `[client]`

Called internally by DProperties.

**Argumentos:**

- `Panel row` — The new row panel.

**Retorna:**

*(sin retorno)*

---

### `DProperty_Generic:Setup` `[client]`

Sets up a generic control for use by DProperties.

**Argumentos:**

- `table data` — See Editable Entities.

**Retorna:**

*(sin retorno)*

---

### `DProperty_Generic:ValueChanged` `[client]`

Called by this control, or a derived control, to alert the row of the change.

**Argumentos:**

- `any newVal` — The new value.
- `boolean force` — Force an update.

**Retorna:**

*(sin retorno)*