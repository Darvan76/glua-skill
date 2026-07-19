# DListBoxItem

---

**Hereda de:** `DLabel`

---

Used Internally by DListBox.

---


## Miembros (3)


---

### `DListBoxItem:GetMother` `[client]`

Returns the parent "mother" of this **DListBoxItem** set by DListBoxItem:SetMother.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The "mother" DListBox.

---

### `DListBoxItem:Select` `[client]`

Selects this item.

**Argumentos:**

- `boolean onlyMe` — Whether to deselect other items.

**Retorna:**

*(sin retorno)*

---

### `DListBoxItem:SetMother` `[client]`

Sets the "mother" (parent) panel for this item. Done internally by DListBox:AddItem

**Argumentos:**

- `Panel parent` — The "mother" panel to set.

**Retorna:**

*(sin retorno)*