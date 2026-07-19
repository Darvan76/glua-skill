# DListView

---

**Hereda de:** `DPanel`

---

A data view with rows and columns.

---


## Miembros (36)


---

### `DListView:AddColumn` `[client/menu]`

Adds a column to the listview.

**Argumentos:**

- `string column` — The name of the column to add.
- `number position` = `nil` — At which position to insert the new column compared to the other columns. Set to 1 to add the new column before all other columns.

By default the column will be placed after all columns.

**Retorna:**

- `Panel` — The newly created DListView_Column.

---

### `DListView:AddLine` `[client/menu]`

Adds a line to the list view.

**Argumentos:**

- `vararg text` — Values for a new row in the DListView, If several arguments are supplied, each argument will correspond to a respective column in the DListView.

**Retorna:**

- `Panel` — The newly created DListView_Line.

---

### `DListView:ClearSelection` `[client/menu]`

Clears the current selection in the DListView.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DListView:ColumnWidth` `[client/menu]`

Gets the width of a column.

**Argumentos:**

- `number column` — The column to get the width of.

**Retorna:**

- `number` — Width of the column.

---

### `DListView:DataLayout` `[client/menu]`

Creates the lines and gets the height of the contents, in a DListView.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of the contents

---

### `DListView:DisableScrollbar` `[client/menu]`

Removes the scrollbar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DListView:DoDoubleClick` `[client/menu]`

Called when a line in the DListView is double clicked.

**Argumentos:**

- `number lineID` — The line number of the double clicked line.
- `Panel line` — The double clicked DListView_Line.

**Retorna:**

*(sin retorno)*

---

### `DListView:FixColumnsLayout` `[client/menu]`

Internal helper function called from the PANEL:PerformLayout of DListView.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DListView:GetCanvas` `[client/menu]`

Gets the canvas.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The canvas.

---

### `DListView:GetDataHeight` `[client/menu]`

Returns the height of the data of the DListView.

See also DListView:SetDataHeight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of the data of the DListView.

---

### `DListView:GetDirty` `[client/menu]`

See DListView:SetDirty.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DListView:GetHeaderHeight` `[client/menu]`

Returns the height of the header of the DListView.

See also DListView:SetHeaderHeight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of the header of the DListView.

---

### `DListView:GetHideHeaders` `[client/menu]`

Returns whether the header line should be visible on not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the header line should be visible on not.

---

### `DListView:GetInnerTall` `[client/menu]`

Returns the height of DListView:GetCanvas.

Intended to represent the height of all data lines.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of DListView:GetCanvas.

---

### `DListView:GetLine` `[client/menu]`

Gets the DListView_Line at the given index.

**Argumentos:**

- `number id` — The index of the line to get.

**Retorna:**

- `Panel` — The DListView_Line at the given index.

---

### `DListView:GetLines` `[client/menu]`

Gets all of the lines added to the DListView.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The lines added to the DListView.

---

### `DListView:GetMultiSelect` `[client/menu]`

Returns whether multiple lines can be selected or not.

See DListView:SetMultiSelect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether multiple lines can be selected or not.

---

### `DListView:GetSelected` `[client/menu]`

Gets all of the lines that are currently selected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of DListView_Lines.

---

### `DListView:GetSelectedLine` `[client/menu]`

Gets the currently selected DListView_Line index.

If DListView:SetMultiSelect is set to true, only the first line of all selected lines will be returned. Use DListView:GetSelected instead to get all of the selected lines.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The index of the currently selected line.
- `Panel` — The currently selected DListView_Line.

---

### `DListView:GetSortable` `[client/menu]`

Returns whether sorting of columns by clicking their headers is allowed or not.

See also DListView:SetSortable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether sorting of columns by clicking their headers is allowed or not

---

### `DListView:GetSortedID` `[client/menu]`

Converts LineID to SortedID

**Argumentos:**

- `number lineId` — The DListView_Line:GetID of a line to look up

**Retorna:**

- `number` — 

---

### `DListView:OnClickLine` `[client/menu]`

Use DListView:OnRowSelected instead!

Called whenever a line is clicked.

**Argumentos:**

- `Panel line` — The selected line.
- `boolean isSelected` — Boolean indicating whether the line is selected.

**Retorna:**

*(sin retorno)*

---

### `DListView:OnRequestResize` `[client/menu]`

Called from DListView_Column.

**Argumentos:**

- `Panel column` — The column which initialized the resize
- `number size` — 

**Retorna:**

*(sin retorno)*

---

### `DListView:OnRowRightClick` `[client/menu]`

Called when a row is right-clicked

**Argumentos:**

- `number lineID` — The line ID of the right clicked line
- `Panel line` — The line panel itself, a DListView_Line.

**Retorna:**

*(sin retorno)*

---

### `DListView:OnRowSelected` `[client/menu]`

Called internally by DListView:OnClickLine when a line is selected. This is the function you should override to define the behavior when a line is selected.

**Argumentos:**

- `number rowIndex` — The index of the row/line that the user clicked on.
- `Panel row` — The DListView_Line that the user clicked on.

**Retorna:**

*(sin retorno)*

---

### `DListView:RemoveLine` `[client/menu]`

Removes a line from the list view.

**Argumentos:**

- `number line` — Removes the given row, by row id (same number as DListView:GetLine).

**Retorna:**

*(sin retorno)*

---

### `DListView:SelectFirstItem` `[client/menu]`

Selects the line at the first index of the DListView if one has been added.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DListView:SelectItem` `[client/menu]`

Selects a line in the listview.

**Argumentos:**

- `Panel Line` — The line to select.

**Retorna:**

*(sin retorno)*

---

### `DListView:SetDataHeight` `[client/menu]`

Sets the height of all lines of the DListView except for the header line.

See also DListView:SetHeaderHeight.

**Argumentos:**

- `number height` — The new height to set. Default value is 17.

**Retorna:**

*(sin retorno)*

---

### `DListView:SetDirty` `[client/menu]`

Used internally to signify if the DListView needs a rebuild.

**Argumentos:**

- `boolean isDirty` — 

**Retorna:**

*(sin retorno)*

---

### `DListView:SetHeaderHeight` `[client/menu]`

Sets the height of the header line of the DListView.

See also DListView:SetDataHeight.

**Argumentos:**

- `number height` — The new height to set. Default value is 16.

**Retorna:**

*(sin retorno)*

---

### `DListView:SetHideHeaders` `[client/menu]`

Sets whether the header line should be visible on not.

**Argumentos:**

- `boolean hide` — Whether the header line should be visible on not.

**Retorna:**

*(sin retorno)*

---

### `DListView:SetMultiSelect` `[client/menu]`

Sets whether multiple lines can be selected by the user by using the Ctrl or Shift keys. When set to false, only one line can be selected.

**Argumentos:**

- `boolean allowMultiSelect` — Whether multiple lines can be selected or not

**Retorna:**

*(sin retorno)*

---

### `DListView:SetSortable` `[client/menu]`

Enables/disables the sorting of columns by clicking.

This will only affect columns that are created after this function is called. Existing columns will be unaffected.

**Argumentos:**

- `boolean isSortable` — Whether sorting columns with clicking is allowed or not.

**Retorna:**

*(sin retorno)*

---

### `DListView:SortByColumn` `[client/menu]`

Sorts the items in the specified column.

**Argumentos:**

- `number columnIndex` — The index of the column that should be sorted.
- `boolean descending` = `false` — Whether the items should be sorted in descending order or not.

**Retorna:**

*(sin retorno)*

---

### `DListView:SortByColumns` `[client/menu]`

Sorts the list based on given columns.

All arguments are optional

**Argumentos:**

- `number column1` = `nil` — 
- `boolean descrending1` = `false` — 
- `number column2` = `nil` — 
- `boolean descrending2` = `false` — 
- `number column3` = `nil` — 
- `boolean descrending3` = `false` — 
- `number column4` = `nil` — 
- `boolean descrending4` = `false` — 

**Retorna:**

*(sin retorno)*