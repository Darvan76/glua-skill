# DListBox

---

**Hereda de:** `DPanelList`

---

Derived from the deprecated DPanelList.

A simple list box with optional multi-select.
As this is deprecated, it is recommended that you use DListView, which contains the same functionality with multi-column options.

---


## Miembros (7)


---

### `DListBox:GetMultiple` `[client/menu]`

Returns whether the list box can select multiple items.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean multiple` — Whether the list box can select multiple items.

---

### `DListBox:GetSelectedItems` `[client/menu]`

Returns selected items.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The selected items. A list of DListBoxItem.

---

### `DListBox:GetSelectedValues` `[client/menu]`

Returns selected item values.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The selected item values. A list of Panel:GetValue of each selected DListBoxItem.

---

### `DListBox:SelectByName` `[client/menu]`

Select a DListBoxItem based on its value.

**Argumentos:**

- `string val` — Panel:GetValue of a DListBoxItem to select.

**Retorna:**

*(sin retorno)*

---

### `DListBox:SelectItem` `[client/menu]`

Used internally to select a specific panel.

**Argumentos:**

- `Panel item` — DListBox to select.
- `boolean onlyme` — Whether to deselect other selected items.

**Retorna:**

*(sin retorno)*

---

### `DListBox:SetMultiple` `[client/menu]`

Sets whether the list box can select multiple items.

**Argumentos:**

- `boolean multiple` — Whether the list box can select multiple items.

**Retorna:**

*(sin retorno)*

---

### `DListBox:SetSelectedItems` `[client/menu]`

Sets selected items.

**Argumentos:**

- `table items` — The items to select. A list of DListBoxItem.

**Retorna:**

*(sin retorno)*