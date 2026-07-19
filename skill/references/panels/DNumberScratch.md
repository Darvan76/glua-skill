# DNumberScratch

---

**Hereda de:** `DImageButton`

---

Choose a number from a number line, with zooming for precision.
Zoom in by moving your mouse forward and moving back does the opposite. Looks like a blue circle until you click and hold on it

---


## Miembros (27)


---

### `DNumberScratch:DrawNotches` `[client/menu]`

Used by DNumberScratch:DrawScreen.

**Argumentos:**

- `number level` — 
- `number x` — 
- `number y` — 
- `number w` — 
- `number h` — 
- `number range` — 
- `number value` — 
- `number min` — 
- `number max` — 

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:DrawScreen` `[client/menu]`

Used by DNumberScratch:PaintScratchWindow.

**Argumentos:**

- `number x` — 
- `number y` — 
- `number w` — 
- `number h` — 

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:GetActive` `[client/menu]`

Returns whether this panel is active or not, i.e. if the player is currently changing its value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DNumberScratch:GetDecimals` `[client/menu]`

Returns the desired amount of numbers after the decimal point.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 0 for whole numbers only, 1 for one number after the decimal point, etc.

---

### `DNumberScratch:GetFloatValue` `[client/menu]`

Returns the real value of the DNumberScratch as a number.

See also DNumberScratch:GetTextValue and DNumberScratch:GetFraction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The real value of the DNumberScratch

---

### `DNumberScratch:GetFraction` `[client/menu]`

Returns the value of the DNumberScratch as a fraction, a value between 0 and 1 where 0 is the minimum and 1 is the maximum value of the DNumberScratch.

See also:
* DNumberScratch:GetTextValue
* DNumberScratch:GetFloatValue
* DNumberScratch:SetFraction

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — A value between 0 and 1

---

### `DNumberScratch:GetMax` `[client/menu]`

Returns the maximum value that can be selected on the number scratch

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum value that can be selected on the number scratch

---

### `DNumberScratch:GetMin` `[client/menu]`

Returns the minimum value that can be selected on the number scratch

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum value that can be selected on the number scratch

---

### `DNumberScratch:GetRange` `[client/menu]`

Returns the range of the DNumberScratch. Basically max value - min value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The range of the DNumberScratch

---

### `DNumberScratch:GetShouldDrawScreen` `[client/menu]`

Returns whether the scratch window should be visible or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DNumberScratch:GetTextValue` `[client/menu]`

Returns the real value of the DNumberScratch as a string.

See also DNumberScratch:GetFloatValue and DNumberScratch:GetFraction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The real value of the DNumberScratch

---

### `DNumberScratch:GetZoom` `[client/menu]`

Returns the zoom level of the scratch window

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DNumberScratch:IdealZoom` `[client/menu]`

Returns the ideal zoom level for the panel based on the DNumberScratch:GetRange.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ideal zoom level for the panel based on the panels range.

---

### `DNumberScratch:IsEditing` `[client/menu]`

Returns whether the player is currently editing the value of the DNumberScratch.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DNumberScratch:LockCursor` `[client/menu]`

Used to lock the cursor in place.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:OnValueChanged` `[client/menu]`

Called when the value of the DNumberScratch is changed.

**Argumentos:**

- `number newValue` — The new value

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:PaintScratchWindow` `[client/menu]`

Used to paint the 'scratch' window.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetActive` `[client/menu]`

Sets whether or not the panel is 'active'.

Forcing this panel to be active may not work.

**Argumentos:**

- `boolean active` — true to activate, false to deactivate.

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetDecimals` `[client/menu]`

Sets the desired amount of numbers after the decimal point.

**Argumentos:**

- `number decimals` — 0 for whole numbers only, 1 for one number after the decimal point, etc.

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetFloatValue` `[client/menu]`

Does not trigger DNumberScratch:OnValueChanged

Use DNumberScratch:SetValue instead.

**Argumentos:**

- `number val` — The value to set

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetFraction` `[client/menu]`

Sets the value of the DNumberScratch as a fraction, a value between 0 and 1 where 0 is the minimum and 1 is the maximum value of the DNumberScratch

**Argumentos:**

- `number frac` — A value between 0 and 1

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetMax` `[client/menu]`

Sets the max value that can be selected on the number scratch

**Argumentos:**

- `number max` — The maximum number

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetMin` `[client/menu]`

Sets the minimum value that can be selected on the number scratch.

**Argumentos:**

- `number min` — The minimum number

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetShouldDrawScreen` `[client/menu]`

Sets if the scratch window should be drawn or not. Cannot be used to force it to draw, only to hide it, which will not stop the panel from working with invisible window.

**Argumentos:**

- `boolean shouldDraw` — 

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetValue` `[client/menu]`

Sets the value of the DNumberScratch and triggers DNumberScratch:OnValueChanged

**Argumentos:**

- `number val` — The value to set.

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:SetZoom` `[client/menu]`

Sets the zoom level of the scratch panel.

**Argumentos:**

- `number zoom` — 

**Retorna:**

*(sin retorno)*

---

### `DNumberScratch:UpdateConVar` `[client/menu]`

Forces the assigned ConVar to be updated to the value of this DNumberScratch

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*