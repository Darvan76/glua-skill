# DNumSlider

---

**Hereda de:** `Panel`

---

The **DNumSlider** allows you to create a slider, allowing the user to slide it to set a value, or changing the value in the box.

---


## Miembros (21)


---

### `DNumSlider:GetDecimals` `[client/menu]`

Returns the amount of numbers after the decimal point.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 0 for whole numbers only, 1 for one number after the decimal point, etc.

---

### `DNumSlider:GetDefaultValue` `[client/menu]`

Returns the default value of the slider, if one was set by DNumSlider:SetDefaultValue

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The default value of the slider

---

### `DNumSlider:GetMax` `[client/menu]`

Returns the maximum value of the slider

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum value of the slider

---

### `DNumSlider:GetMin` `[client/menu]`

Returns the minimum value of the slider

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum value of the slider

---

### `DNumSlider:GetRange` `[client/menu]`

Returns the range of the slider, basically maximum value - minimum value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The range of the slider

---

### `DNumSlider:GetTextArea` `[client/menu]`

Returns the DTextEntry component of the slider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The DTextEntry.

---

### `DNumSlider:GetValue` `[client/menu]`

Returns the value of the DNumSlider

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The value of the slider.

---

### `DNumSlider:IsEditing` `[client/menu]`

Returns true if either the DTextEntry, the DSlider or the DNumberScratch are being edited.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the DNumSlider is being edited by the player.

---

### `DNumSlider:OnValueChanged` `[client/menu]`

Called when the value of the slider is changed, through code or changing the slider.

**Argumentos:**

- `number value` — The new value of the DNumSlider.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dnumslider.lua:193`*

---

### `DNumSlider:ResetToDefaultValue` `[client/menu]`

Resets the slider to the default value, if one was set by DNumSlider:SetDefaultValue.

This function is called by the DNumSlider when user middle mouse clicks on the draggable knob of the slider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetConVar` `[client/menu]`

Sets the console variable to be updated when the value of the slider is changed.

**Argumentos:**

- `string cvar` — The name of the ConVar to be updated.

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetDark` `[client/menu]`

Calls DLabel:SetDark on the DLabel part of the DNumSlider.

**Argumentos:**

- `boolean dark` — 

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetDecimals` `[client/menu]`

Sets the desired amount of numbers after the decimal point.

This doesn't affect values passed to DNumSlider:OnValueChanged.

To get right values passed to DNumSlider:OnValueChanged use math.Round.

**Argumentos:**

- `number decimals` — 0 for whole numbers only, 1 for one number after the decimal point, etc.

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetDefaultValue` `[client/menu]`

Sets the default value of the slider, to be used by DNumSlider:ResetToDefaultValue or by middle mouse clicking the draggable knob of the slider.

**Argumentos:**

- `number default` — The new default value of the slider to set

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetMax` `[client/menu]`

Sets the maximum value for the slider.

**Argumentos:**

- `number max` — The value to set as maximum for the slider.

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetMin` `[client/menu]`

Sets the minimum value for the slider

**Argumentos:**

- `number min` — The value to set as minimum for the slider.

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetMinMax` `[client/menu]`

Sets the minimum and the maximum value of the slider.

**Argumentos:**

- `number min` — The minimum value of the slider.
- `number max` — The maximum value of the slider.

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:SetValue` `[client/menu]`

Sets the value of the DNumSlider.

**Argumentos:**

- `number val` — The value to set.

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:TranslateSliderValues` `[client/menu]`

**Argumentos:**

- `number x` — 
- `number y` — 

**Retorna:**

- `number` — 
- `number` — The second passed argument.

---

### `DNumSlider:UpdateNotches` `[client/menu]`

Updates visual notches on the slider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DNumSlider:ValueChanged` `[client/menu]`

Called when the value has been changed. This will also be called when the user manually changes the value through the text panel.

This is an internal function. Override DNumSlider:OnValueChanged instead.

**Argumentos:**

- `number value` — The value the slider has been changed to.

**Retorna:**

*(sin retorno)*