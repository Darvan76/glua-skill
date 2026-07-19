# DListView_Column

---

**Hereda de:** `Panel`

---

A single column, used by DListView.

---


## Miembros (17)


---

### `DListView_Column:DoClick` `[client/menu]`

Called when the column is left clicked (on key release) by the client.

See also DListView_Column:DoRightClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dlistview_column.lua:91`*

---

### `DListView_Column:DoRightClick` `[client/menu]`

Called when the column is right clicked (on key release) by the client.

See also DListView_Column:DoClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dlistview_column.lua:98`*

---

### `DListView_Column:GetColumnID` `[client/menu]`

Gets the index used for this column.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number index` — The column index of the DListView_Column.

---

### `DListView_Column:GetDescending` `[client/menu]`

Returns whether the column is sorted in descending order or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean desc` — Whether the column is sorted in descending order or not.

---

### `DListView_Column:GetFixedWidth` `[client/menu]`

Returns the fixed width of this column.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number width` — The fixed width.

---

### `DListView_Column:GetMaxWidth` `[client/menu]`

Returns the maximum width set with DListView_Column:SetMaxWidth.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number width` — The maximum width

---

### `DListView_Column:GetMinWidth` `[client/menu]`

Returns the minimum width set with DListView_Column:SetMinWidth.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number width` — The minimum width

---

### `DListView_Column:GetTextAlign` `[client/menu]`

Returns the text alignment for the column

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number alignment` — The direction of the content, based on the number pad. See DListView_Column:SetTextAlign.

---

### `DListView_Column:ResizeColumn` `[client/menu]`

Resizes the column, additionally adjusting the size of the column to the right, if any.

**Argumentos:**

- `number size` — The amount to add to the current column's width.

Positive values will make it wider, and negative values will make it thinner.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetColumnID` `[client/menu]`

Sets the index used for this column.

**Argumentos:**

- `number index` — The column index of the DListView_Column.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetDescending` `[client/menu]`

Sets whether the column is sorted in descending order or not.

**Argumentos:**

- `boolean desc` — Whether the column is sorted in descending order or not.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetFixedWidth` `[client/menu]`

Sets the fixed width of the column.

Internally this will set DListView_Column:SetMinWidth and DListView_Column:SetMaxWidth to the value provided

**Argumentos:**

- `number width` — The number value which will determine a fixed width.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetMaxWidth` `[client/menu]`

Sets the maximum width of a column.

**Argumentos:**

- `number width` — The number value which will determine a maximum width.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetMinWidth` `[client/menu]`

Sets the minimum width of a column.

**Argumentos:**

- `number width` — The number value which will determine a minimum width.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetName` `[client/menu]`

Sets the text in the column's header.

**Argumentos:**

- `string name` — The new name that the column's header will use.

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetTextAlign` `[client/menu]`

Sets the text alignment for the column

**Argumentos:**

- `number alignment` — The direction of the content, based on the number pad.

|   |   |   |
| --- | --- | --- |
| 7: **top-left** | 8: **top-center**	| 9: **top-right** |
| 4: **middle-left** | 5: **center** | 6: **middle-right** |
| 1: **bottom-left** | 2: **bottom-center** | 3: **bottom-right** |

**Retorna:**

*(sin retorno)*

---

### `DListView_Column:SetWidth` `[client/menu]`

Sets the width of the panel.

**Argumentos:**

- `number width` — The number value which will determine panel width.

**Retorna:**

*(sin retorno)*