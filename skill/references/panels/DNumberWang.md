# DNumberWang

---

**Hereda de:** `DTextEntry`

---

DNumberWang is a VGUI element that allows you to input a numeric value using up and down arrows or direct entry.

---


## Miembros (18)


---

### `DNumberWang:GetDecimals` `[client/menu]`

Returns the amount of decimal places allowed in the number selector, set by DNumberWang:SetDecimals

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of decimal places allowed in the number selector.

---

### `DNumberWang:GetFloatValue` `[client/menu]`

Returns whatever is set by DNumberWang:SetFloatValue or 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DNumberWang:GetFraction` `[client/menu]`

Returns a fraction representing the current number selector value to number selector min/max range ratio. If argument `val` is supplied, that number will be computed instead.

**Argumentos:**

- `number val` — The fraction numerator.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:GetInterval` `[client/menu]`

Returns interval at which the up and down buttons change the current value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number min` — The current interval.

---

### `DNumberWang:GetMax` `[client/menu]`

Returns the maximum numeric value allowed by the number selector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum value.

---

### `DNumberWang:GetMin` `[client/menu]`

Returns the minimum numeric value allowed by the number selector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum number.

---

### `DNumberWang:GetTextArea` `[client/menu]`

This function returns the panel it is used on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — self

---

### `DNumberWang:GetValue` `[client/menu]`

Returns the numeric value inside the number selector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The numeric value.

---

### `DNumberWang:HideWang` `[client/menu]`

Hides the number selector arrows.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:OnValueChanged` `[client/menu]`

Called when the number selector value is changed.

**Argumentos:**

- `number val` — The new value of the number selector.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetDecimals` `[client/menu]`

Sets the amount of decimal places allowed in the number selector.

**Argumentos:**

- `number num` — The amount of decimal places.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetFloatValue` `[client/menu]`

Appears to do nothing.

**Argumentos:**

- `number val` — 

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetFraction` `[client/menu]`

Sets the value of the number selector based on the given fraction number.

**Argumentos:**

- `number val` — The fraction of the number selector's range.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetInterval` `[client/menu]`

Sets interval at which the up and down buttons change the current value.

**Argumentos:**

- `number min` — The new interval.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetMax` `[client/menu]`

Sets the maximum numeric value allowed by the number selector.

**Argumentos:**

- `number max` — The maximum value.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetMin` `[client/menu]`

Sets the minimum numeric value allowed by the number selector.

**Argumentos:**

- `number min` — The minimum value.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetMinMax` `[client/menu]`

Sets the minimum and maximum value allowed by the number selector.

**Argumentos:**

- `number min` — The minimum value.
- `number max` — The maximum value.

**Retorna:**

*(sin retorno)*

---

### `DNumberWang:SetValue` `[client/menu]`

Sets the value of the DNumberWang and triggers DNumberWang:OnValueChanged

**Argumentos:**

- `number val` — The value to set.

**Retorna:**

*(sin retorno)*