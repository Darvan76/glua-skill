# DListView_Line

---

**Hereda de:** `Panel`

---

A panel used by DListView

---


## Miembros (17)


---

### `DListView_Line:DataLayout` `[client/menu]`

Called by DListView:DataLayout

**Argumentos:**

- `DListView pnl` — The list view.

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:GetAltLine` `[client/menu]`

Returns whether this line is odd or even in the list. This is internally used (and set) to change the looks of every other line.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean alt` — Whether this line is 'alternative'.

---

### `DListView_Line:GetColumnText` `[client/menu]`

Gets the string held in the specified column of a DListView_Line panel.

This is the same thing as doing Panel:GetValue( column_number ).

**Argumentos:**

- `number column` — The number of the column to retrieve the text from, starts with 1.

**Retorna:**

- `string` — The contents of the specified column.

---

### `DListView_Line:GetID` `[client/menu]`

Returns the ID of this line, set automatically in DListView:AddLine.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ID of this line.

---

### `DListView_Line:GetListView` `[client/menu]`

Returns the parent DListView of this line.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `DListView pnl` — The parent DListView of this line.

---

### `DListView_Line:GetSortValue` `[client/menu]`

Returns the data stored on given cell of this line.

Used in the DListView:SortByColumn function in case you want to sort with something else than the text.

**Argumentos:**

- `number column` — The number of the column to write the text from, starts with 1.

**Retorna:**

- `any data` — The data that is set for given column of this line, if any.

---

### `DListView_Line:GetValue` `[client/menu]`

Alias of DListView_Line:GetColumnText. Overrides Panel:GetValue.

**Argumentos:**

- `number column` — The number of the column to retrieve the text from, starts with 1.

**Retorna:**

- `string` — The contents of the specified column.

---

### `DListView_Line:IsLineSelected` `[client/menu]`

Returns whether this line is selected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean selected` — Whether this line is selected.

---

### `DListView_Line:OnRightClick` `[client/menu]`

Called when the player right clicks this line.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:OnSelect` `[client/menu]`

Called when the player selects this line.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:SetAltLine` `[client/menu]`

Sets whether this line is odd or even in the list. This is internally used (and set automatically) to change the looks of every other line.

**Argumentos:**

- `boolean alt` — Whether this line is 'alternative'.

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:SetColumnText` `[client/menu]`

Sets the string held in the specified column of a DListView_Line panel.

**Argumentos:**

- `number column` — The number of the column to write the text from, starts with 1.
- `string value` — Column text you want to set

**Retorna:**

- `DLabel label` — The DLabel in which the text was set.

---

### `DListView_Line:SetID` `[client/menu]`

Sets the ID of this line, used internally by DListView:AddLine.

**Argumentos:**

- `number id` — The ID for this line.

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:SetListView` `[client/menu]`

Sets the parent DListView for this line. Used internally by DListView:AddLine.

**Argumentos:**

- `DListView pnl` — The new parent DListView for this line.

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:SetSelected` `[client/menu]`

Sets whether this line is selected or not.

**Argumentos:**

- `boolean selected` — Whether this line is selected.

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:SetSortValue` `[client/menu]`

Allows you to store data per column.

Used in the DListView:SortByColumn function in case you want to sort with something else than the text.

**Argumentos:**

- `number column` — The number of the column to write the text from, starts with 1.
- `any data` — Data for given column on the line you wish to set.

**Retorna:**

*(sin retorno)*

---

### `DListView_Line:SetValue` `[client/menu]`

Alias of DListView_Line:SetColumnText.

**Argumentos:**

- `number column` — The number of the column to write the text from, starts with 1.
- `string value` — Column text you want to set

**Retorna:**

- `DLabel label` — The DLabel in which the text was set.