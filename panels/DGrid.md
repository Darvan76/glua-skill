# DGrid

---

**Hereda de:** `Panel`

---

A really simple grid layout panel.

This panel will set its size automatically based on set column count.
This makes it play badly with Panel:Dock and cause a PANEL:PerformLayout call every frame.

---


## Miembros (10)


---

### `DGrid:AddItem` `[client/menu]`

Adds a new item to the grid.

**Argumentos:**

- `Panel item` — The item to add. It will be forced visible and parented to the DGrid.

**Retorna:**

*(sin retorno)*

---

### `DGrid:GetColWide` `[client/menu]`

Returns the width of each column of the DGrid, which is set by DGrid:SetColWide.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The width of each column

---

### `DGrid:GetCols` `[client/menu]`

Returns the number of columns of this DGrid. Set by DGrid:SetCols.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of columns of this DGrid

---

### `DGrid:GetItems` `[client/menu]`

Returns a list of panels in the grid.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A list of Panels.

---

### `DGrid:GetRowHeight` `[client/menu]`

Returns the height of each row of the DGrid, which is set by DGrid:SetRowHeight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of each row

---

### `DGrid:RemoveItem` `[client/menu]`

Removes given panel from the DGrid:GetItems.

**Argumentos:**

- `Panel item` — Item to remove from the grid
- `boolean bDontDelete` = `false` — If set to true, the actual panel will not be removed via Panel:Remove.

**Retorna:**

*(sin retorno)*

---

### `DGrid:SetColWide` `[client/menu]`

Sets the width of each column.

The cell panels (grid items) will not be resized or centered.

**Argumentos:**

- `number colWidth` — The width of each column.

**Retorna:**

*(sin retorno)*

---

### `DGrid:SetCols` `[client/menu]`

Sets the number of columns this panel should have.

The DGrid will resize its width to match this value.

**Argumentos:**

- `number cols` — The desired number of columns

**Retorna:**

*(sin retorno)*

---

### `DGrid:SetRowHeight` `[client/menu]`

Sets the height of each row.

The cell panels (grid items) will not be resized or centered.

**Argumentos:**

- `number rowHeight` — The height of each row

**Retorna:**

*(sin retorno)*

---

### `DGrid:SortByMember` `[client/menu]`

Sorts the items in the grid. Does not visually update the grid, use Panel:InvalidateLayout for that.

**Argumentos:**

- `string key` — A key in the panel from DGrid:GetItems. The key's value must be numeric.
- `boolean desc` = `true` — True for descending order, false for ascending.

**Retorna:**

*(sin retorno)*