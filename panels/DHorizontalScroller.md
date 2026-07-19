# DHorizontalScroller

---

**Hereda de:** `Panel`

---

A very basic horizontal scrollable panel, similar to DScrollPanel.

Used internally in DPropertySheet.

---


## Miembros (11)


---

### `DHorizontalScroller:AddPanel` `[client/menu]`

Adds a panel to the DHorizontalScroller.

**Argumentos:**

- `Panel pnl` — The panel to add. It will be automatically parented.

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:GetCanvas` `[client/menu]`

Returns the internal canvas panel where the content of DHorizontalScroller are placed on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The DDragBase panel.

---

### `DHorizontalScroller:GetOverlap` `[client/menu]`

Returns the overlap set by DHorizontalScroller:SetOverlap.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The overlap.

---

### `DHorizontalScroller:GetShowDropTargets` `[client/menu]`

Returns whether this panel should show drop targets.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DHorizontalScroller:MakeDroppable` `[client/menu]`

Same as DDragBase:MakeDroppable.
TODO: Transclude or whatever to here?

**Argumentos:**

- `string name` — 

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:OnDragModified` `[client/menu]`

Called when the panel is scrolled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:ScrollToChild` `[client/menu]`

Scrolls the DHorizontalScroller to given child panel.

**Argumentos:**

- `Panel target` — The target child panel. Must be a child of DHorizontalScroller:GetCanvas

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:SetOverlap` `[client/menu]`

Controls the spacing between elements of the horizontal scroller.

**Argumentos:**

- `number overlap` — Overlap in pixels. Positive numbers will make elements `overlap` each other, negative will add spacing.

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:SetScroll` `[client/menu]`

Sets the scroll amount, automatically clamping the value.

**Argumentos:**

- `number scroll` — The new scroll amount

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:SetShowDropTargets` `[client/menu]`

Sets whether this panel should show drop targets.

**Argumentos:**

- `boolean newState` — 

**Retorna:**

*(sin retorno)*

---

### `DHorizontalScroller:SetUseLiveDrag` `[client/menu]`

Same as DDragBase:SetUseLiveDrag

**Argumentos:**

- `boolean newState` — 

**Retorna:**

*(sin retorno)*