# DPanelList

---

**Hereda de:** `DPanel`

---

Displays elements in a horizontal or vertical list. A scrollbar is automatically shown if necessary.
You can get its vertical bar via `DPanelList.VBar`.
DPanelList was succeeded in version 13 by more specialised layout elements.

 Use a combination of DIconLayout, DListLayout and DScrollPanel instead.

---


## Miembros (12)


---

### `DPanelList:AddItem` `[client/menu]`

Adds a existing panel to the end of DPanelList.

**Argumentos:**

- `Panel pnl` — Panel to be used as element of list
- `string state` = `nil` — If set to "ownline", the item will take its own entire line.

**Retorna:**

*(sin retorno)*

---

### `DPanelList:CleanList` `[client/menu]`

Removes all items.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DPanelList:Clear` `[client]`

Hides all child panels, and optionally deletes them.

**Argumentos:**

- `boolean remove` — Whether to actually delete the panels, not just hide them.

**Retorna:**

*(sin retorno)*

---

### `DPanelList:EnableVerticalScrollbar` `[client/menu]`

Enables/creates the vertical scroll bar so that the panel list can be scrolled through.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DPanelList:GetItems` `[client/menu]`

Returns all panels has added by DPanelList:AddItem

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of panels used as items of DPanelList.

---

### `DPanelList:GetPadding` `[client/menu]`

Returns offset of list items from the panel borders set by DPanelList:SetPadding

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Offset from panel borders

---

### `DPanelList:GetSpacing` `[client/menu]`

Returns distance between list items set by DPanelList:SetSpacing

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Distance between panels

---

### `DPanelList:InsertAtTop` `[client/menu]`

Insert given panel at the top of the list.

**Argumentos:**

- `Panel insert` — The panel to insert
- `string strLineState` — If set to "ownline", no other panels will be placed to the left or right of the panel we are inserting

**Retorna:**

*(sin retorno)*

---

### `DPanelList:Rebuild` `[client/menu]`

Used internally to rebuild the child panel positions.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DPanelList:SetAutoSize` `[client/menu]`

Sets the DPanelList to size its height to its contents. This is set to false by default.

**Argumentos:**

- `boolean shouldSizeToContents` — Whether to size to the height of the DPanelList contents.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpanellist.lua:4`*

---

### `DPanelList:SetPadding` `[client/menu]`

Sets the offset of the lists items from the panel borders

**Argumentos:**

- `number Offset` — Offset from panel borders

**Retorna:**

*(sin retorno)*

---

### `DPanelList:SetSpacing` `[client/menu]`

Sets distance between list items

**Argumentos:**

- `number Distance` — Distance between panels

**Retorna:**

*(sin retorno)*