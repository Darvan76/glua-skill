# DScrollPanel

---

**Hereda de:** `DPanel`

---

DScrollPanel is a VGUI Element similar to DPanel however it has a vertical scrollbar docked to the right which can be used to put more content in a smaller area. DScrollPanels are essentially DPanels with the Scroll Bar.

This can be used to replace the DPanelList with DPanelList:EnableVerticalScrollbar and get similar functionality as well as using a non-deprecated element.

If you would like to paint or edit the elements of the scrollbar use DScrollPanel:GetVBar. If you want to see if the scrollbar is visible then use the VBar.Enabled variable on the scrollbar's VBar.

Panel:DockPadding will not have an effect on children of this panel. Use the function on DScrollPanel:GetCanvas instead.

---


## Miembros (10)


---

### `DScrollPanel:AddItem` `[client/menu]`

Parents the passed panel to the DScrollPanel's canvas.

**Argumentos:**

- `Panel pnl` — The panel to add.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dscrollpanel.lua:33`*

---

### `DScrollPanel:GetCanvas` `[client/menu]`

Returns the canvas ( The panel all child panels are parented to ) of the DScrollPanel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The canvas

*Fuente: `lua/vgui/dscrollpanel.lua:57`*

---

### `DScrollPanel:GetPadding` `[client/menu]`

Gets the DScrollPanels padding, set by DScrollPanel:SetPadding.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — DScrollPanels padding

---

### `DScrollPanel:GetVBar` `[client/menu]`

Returns the vertical scroll bar of the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel{DVScrollBar}` — The DVScrollBar.

*Fuente: `lua/vgui/dscrollpanel.lua:51`*

---

### `DScrollPanel:InnerWidth` `[client/menu]`

Return the width of the DScrollPanel's canvas.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The width of the DScrollPanel's canvas

*Fuente: `lua/vgui/dscrollpanel.lua:63`*

---

### `DScrollPanel:PerformLayoutInternal` `[client/menu]`

Used internally to rebuild the panel's children positioning. You should use Panel:InvalidateLayout instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DScrollPanel:Rebuild` `[client/menu]`

Used internally to rebuild the panel's children positioning. You should use Panel:InvalidateLayout instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dscrollpanel.lua:69`*

---

### `DScrollPanel:ScrollToChild` `[client/menu]`

Scrolls to the given child

**Argumentos:**

- `Panel panel` — The panel to scroll to, must be a child of the DScrollPanel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dscrollpanel.lua:94`*

---

### `DScrollPanel:SetCanvas` `[client/menu]`

Sets the canvas of the DScrollPanel.

**Argumentos:**

- `Panel canvas` — The new canvas

**Retorna:**

*(sin retorno)*

---

### `DScrollPanel:SetPadding` `[client/menu]`

Sets the DScrollPanel's padding. This function appears to be unused.

**Argumentos:**

- `number padding` — The padding of the DScrollPanel.

**Retorna:**

*(sin retorno)*