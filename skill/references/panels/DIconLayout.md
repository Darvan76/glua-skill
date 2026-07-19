# DIconLayout

---

**Hereda de:** `DDragBase`

---

DIconLayout is what replaced DPanelList in Garry's Mod 13.
DPanelList still exists in GMod but is deprecated and does not support the new GWEN skin.

DIconLayout is used to make a list of panels.
Unlike DPanelList, DIconLayout does not automatically add a scroll bar - the example below shows you how you can do this.

---


## Miembros (18)


---

### `DIconLayout:Copy` `[client/menu]`

Creates a replica of the DIconLayout it is called on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The replica.

---

### `DIconLayout:CopyContents` `[client/menu]`

Copies the contents (Child elements) of another DIconLayout to itself.

**Argumentos:**

- `Panel from` — DIconLayout to copy from.

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:GetBorder` `[client/menu]`

Returns the size of the border.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DIconLayout:GetLayoutDir` `[client/menu]`

Returns the direction that it will be layed out, using the DOCK enumerations.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Layout direction.

---

### `DIconLayout:GetSpaceX` `[client/menu]`

Returns the distance between two 'icons' on the X axis.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Distance between two 'icons' on the X axis.

---

### `DIconLayout:GetSpaceY` `[client/menu]`

Returns distance between two "Icons" on the Y axis.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — distance between two "Icons" on the Y axis.

---

### `DIconLayout:GetStretchHeight` `[client/menu]`

Returns whether the icon layout will stretch its height to fit all the children.

See also DIconLayout:GetStretchWidth

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DIconLayout:GetStretchWidth` `[client/menu]`

Returns whether the icon layout will stretch its width to fit all the children.

See also DIconLayout:GetStretchHeight

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DIconLayout:Layout` `[client/menu]`

Resets layout vars before calling Panel:InvalidateLayout. This is called when children are added or removed, and must be called when the spacing, border or layout direction is changed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:LayoutIcons_LEFT` `[client/menu]`

Used internally to layout the child elements if the DIconLayout:SetLayoutDir is set to LEFT (See Enums/DOCK).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:LayoutIcons_TOP` `[client/menu]`

Used internally to layout the child elements if the DIconLayout:SetLayoutDir is set to TOP (See Enums/DOCK).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:OnModified` `[client/menu]`

Called when the panel is modified.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:SetBorder` `[client/menu]`

Sets the internal border (padding) within the DIconLayout. This will not change its size, only the positioning of children. You must call DIconLayout:Layout in order for the changes to take effect.

**Argumentos:**

- `number width` — The border (padding) inside the DIconLayout.

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:SetLayoutDir` `[client/menu]`

Sets the direction that it will be layed out, using the Enums/DOCK.

Currently only TOP and LEFT are supported.

**Argumentos:**

- `number direction` — Enums/DOCK

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:SetSpaceX` `[client/menu]`

Sets the horizontal (x) spacing between children within the DIconLayout. You must call DIconLayout:Layout in order for the changes to take effect.

**Argumentos:**

- `number xSpacing` — The width of the gap between child objects.

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:SetSpaceY` `[client/menu]`

Sets the vertical (y) spacing between children within the DIconLayout. You must call DIconLayout:Layout in order for the changes to take effect.

**Argumentos:**

- `number ySpacing` — The vertical gap between rows in the DIconLayout.

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:SetStretchHeight` `[client/menu]`

If set to true, the icon layout will stretch its height to fit all the children.

See also DIconLayout:SetStretchWidth

**Argumentos:**

- `boolean do_stretch` — 

**Retorna:**

*(sin retorno)*

---

### `DIconLayout:SetStretchWidth` `[client/menu]`

If set to true, the icon layout will stretch its width to fit all the children.

See also DIconLayout:SetStretchHeight

**Argumentos:**

- `boolean stretchW` — 

**Retorna:**

*(sin retorno)*