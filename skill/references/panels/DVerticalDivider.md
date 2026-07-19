# DVerticalDivider

---

**Hereda de:** `DPanel`

---

Vertical version of DHorizontalDivider.

---


## Miembros (22)


---

### `DVerticalDivider:DoConstraints` `[client]`

Used internally to clamp the vertical divider to DVerticalDivider:GetTopMin and DVerticalDivider:GetBottomMin.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:GetBottom` `[client]`

Returns the bottom content panel of the DVerticalDivider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The bottom content panel.

---

### `DVerticalDivider:GetBottomMin` `[client]`

Returns the minimum height of the bottom content panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum height of the bottom content panel.

---

### `DVerticalDivider:GetDividerHeight` `[client]`

Returns the height of the divider bar between the top and bottom content panels of the DVerticalDivider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of the divider bar.

---

### `DVerticalDivider:GetDragging` `[client]`

Returns whether the divider is being dragged or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If true, mouse movement will alter the size of the divider.

---

### `DVerticalDivider:GetHoldPos` `[client]`

Returns the local Y position of where the user starts dragging the divider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The local Y position where divider dragging has started.

---

### `DVerticalDivider:GetMiddle` `[client]`

Returns the middle content panel of the DVerticalDivider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The middle content panel.

---

### `DVerticalDivider:GetTop` `[client]`

Returns the top content panel of the DVerticalDivider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The top content panel.

---

### `DVerticalDivider:GetTopHeight` `[client]`

Returns the current height of the top content panel set by DVerticalDivider:SetTopHeight or by the user.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current height of the DVerticalDivider.

---

### `DVerticalDivider:GetTopMax` `[client]`

Returns the maximum height of the top content panel. See DVerticalDivider:SetTopMax for more information.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum height of the top content panel.

---

### `DVerticalDivider:GetTopMin` `[client]`

Returns the minimum height of the top content panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum height of the top content panel.

---

### `DVerticalDivider:SetBottom` `[client]`

Sets the passed panel as the bottom content of the DVerticalDivider.

**Argumentos:**

- `Panel pnl` — The panel to set as the bottom content.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetBottomMin` `[client]`

Sets the minimum height of the bottom content panel.

**Argumentos:**

- `number height` — The minimum height of the bottom content panel. Default is 50.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetDividerHeight` `[client]`

Sets the height of the divider bar between the top and bottom content panels of the DVerticalDivider.

**Argumentos:**

- `number height` — The height of the divider bar.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetDragging` `[client]`

Sets whether the divider is being dragged or not.

**Argumentos:**

- `boolean isDragging` — Setting this to true causes cursor movement to alter the position of the divider.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetHoldPos` `[client]`

Sets the local Y position of where the user starts dragging the divider.

**Argumentos:**

- `number y` — The local Y position where divider dragging has started.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetMiddle` `[client]`

Places the passed panel in between the top and bottom content panels of the DVerticalDivider.

**Argumentos:**

- `Panel pnl` — The panel to set as the middle content.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetTop` `[client]`

Sets the passed panel as the top content of the DVerticalDivider.

**Argumentos:**

- `Panel pnl` — The panel to set as the top content.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetTopHeight` `[client]`

Sets the height of the top content panel.

The height of the bottom content panel is automatically calculated by taking the total height of the DVerticalDivider and subtracting it with the height of the top content panel and the divider bar.

**Argumentos:**

- `number height` — The height of the top content panel.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetTopMax` `[client]`

Sets the maximum height of the top content panel. This is ignored if the panel would exceed the minimum bottom content panel height set from DVerticalDivider:SetBottomMin.

**Argumentos:**

- `number height` — The maximum height of the top content panel. Default is 4096.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:SetTopMin` `[client]`

Sets the minimum height of the top content panel.

**Argumentos:**

- `number height` — The minimum height of the top content panel. Default is 50.

**Retorna:**

*(sin retorno)*

---

### `DVerticalDivider:StartGrab` `[client]`

Causes the user to start dragging the divider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*