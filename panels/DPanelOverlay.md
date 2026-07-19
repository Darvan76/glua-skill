# DPanelOverlay

---

**Hereda de:** `DPanel`

---

Adds curved corners.

---


## Miembros (6)


---

### `DPanelOverlay:GetColor` `[client/menu]`

Returns the border color of the DPanelOverlay set by DPanelOverlay:SetColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The set color. Uses Color.

---

### `DPanelOverlay:GetType` `[client/menu]`

Returns the type of the DPanelOverlay set by DPanelOverlay:SetType.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The set type.

---

### `DPanelOverlay:PaintDifferentColours` `[client/menu]`

Used internally by the panel for type 3.

**Argumentos:**

- `table cola` — 
- `table colb` — 
- `table colc` — 
- `table cold` — 
- `number size` — 

**Retorna:**

*(sin retorno)*

---

### `DPanelOverlay:PaintInnerCorners` `[client/menu]`

Used internally by the panel for types 1 and 2.

**Argumentos:**

- `number size` — 

**Retorna:**

*(sin retorno)*

---

### `DPanelOverlay:SetColor` `[client/menu]`

Sets the border color of the DPanelOverlay.

**Argumentos:**

- `Color color` — The color to set. Uses Color.

**Retorna:**

*(sin retorno)*

---

### `DPanelOverlay:SetType` `[client/menu]`

Sets the type of the DPanelOverlay.

**Argumentos:**

- `number type` — The type to set.

Possible value are:
* 1 - 8px corners of given color
* 2 - 4px corners of given type
* 3 - 2 top? corners of hardcoded color, 2 other corners of given color

**Retorna:**

*(sin retorno)*