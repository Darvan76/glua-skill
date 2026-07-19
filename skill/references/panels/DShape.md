# DShape

---

**Hereda de:** `DPanel`

---

Draw a shape on a derma panel. Only one kind of shape, a rectangle, is available for use.

---


## Miembros (6)


---

### `DShape:GetBorderColor` `[client]`

Returns the current type of shape this panel is set to display.

See DShape:SetBorderColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The border Color

---

### `DShape:GetColor` `[client]`

Returns the color set to display the shape with.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The shape Color

---

### `DShape:GetType` `[client]`

Returns the current type of shape this panel is set to display.

See DShape:SetType.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Current shape type.

---

### `DShape:SetBorderColor` `[client]`

Sets the border color of the shape.

Currently does nothing.

**Argumentos:**

- `Color clr` — The desired border color. See Color

**Retorna:**

*(sin retorno)*

---

### `DShape:SetColor` `[client]`

Sets the color to display the shape with.

**Argumentos:**

- `Color clr` — The Color

**Retorna:**

*(sin retorno)*

---

### `DShape:SetType` `[client]`

Sets the shape to be drawn.

**Argumentos:**

- `string type` — The render type of the DShape. Only rectangles (`Rect`) work currently. If you don't define a type immediately, the PANEL:Paint method will generate errors until you do.

**Retorna:**

*(sin retorno)*