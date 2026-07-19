# DSlider

---

**Hereda de:** `Panel`

---

Creates a slider that can be moved along the X and/or Y axis

---


## Miembros (30)


---

### `DSlider:ConVarXNumberThink` `[client/menu]`

Used internally to set the X axis convar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DSlider:ConVarYNumberThink` `[client/menu]`

Used internally to set the Y axis convar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DSlider:GetDragging` `[client/menu]`

Identical to DSlider:IsEditing

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DSlider:GetLockX` `[client/menu]`

Returns the draggable panel's lock on the X axis.

See DSlider:SetLockX for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DSlider:GetLockY` `[client/menu]`

Returns the draggable panel's lock on the Y axis.

See DSlider:SetLockY for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DSlider:GetNotchColor` `[client/menu]`

Does not affect anything by default.
Returns the current notch color, set by DSlider:SetNotchColor

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color clr` — The current color

---

### `DSlider:GetNotches` `[client/menu]`

Appears to be non functioning, however is still used by panels such as DNumSlider.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DSlider:GetNumSlider` `[client/menu]`

Does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `any` — 

---

### `DSlider:GetSlideX` `[client/menu]`

Returns the target position of the draggable "knob" panel of the slider on the X axis.

Set by DSlider:SetSlideX.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The value range seems to be from 0 to 1

---

### `DSlider:GetSlideY` `[client/menu]`

Returns the target position of the draggable "knob" panel of the slider on the Y axis.

Set by DSlider:SetSlideY.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The value range seems to be from 0 to 1

---

### `DSlider:GetTrapInside` `[client/menu]`

Returns the value set by DSlider:SetTrapInside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DSlider:IsEditing` `[client/menu]`

Returns true if this element is being edited by the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DSlider:OnValueChanged` `[client/menu]`

Called when the values of this slider panel were changed.

**Argumentos:**

- `number x` — The X axis position of the slider in range 0-1
- `number y` — The Y axis position of the slider in range 0-1

**Retorna:**

*(sin retorno)*

---

### `DSlider:OnValuesChangedInternal` `[client/menu]`

Used internally to fire DSlider:OnValueChanged

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DSlider:ResetToDefaultValue` `[client/menu]`

This function is called by the DSlider when user middle mouse clicks on the draggable knob of the slider.

You are meant to override this function to do reset the slider to desired defaults on both axes.

By default, will reset the slider to `0.5` on both axes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetBackground` `[client/menu]`

Sets the background for the slider.

**Argumentos:**

- `string path` — Path to the image.

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetConVarX` `[client/menu]`

Sets the ConVar to be set when the slider changes on the X axis.

**Argumentos:**

- `string convar` — Name of the convar to set.

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetConVarY` `[client/menu]`

Sets the ConVar to be set when the slider changes on the Y axis.

**Argumentos:**

- `string convar` — Name of the convar to set.

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetDragging` `[client/menu]`

Sets whether or not the slider is being dragged.

**Argumentos:**

- `boolean dragging` — 

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetImage` `[client/menu]`

Does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetImageColor` `[client/menu]`

Does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetLockX` `[client/menu]`

Sets the lock on the X axis.

For example the value 0.5 will lock the draggable panel to half the width of the slider's panel.

**Argumentos:**

- `number lockX` = `nil` — Set to nil to reset lock.

The value range is from 0 to 1.

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetLockY` `[client/menu]`

Sets the lock on the Y axis.

For example the value 0.5 will lock the draggable panel to half the height of the slider's panel.

**Argumentos:**

- `number lockY` = `nil` — Set to nil to reset lock.

The value range is from 0 to 1.

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetNotchColor` `[client/menu]`

Does not affect anything by default.
Sets the current notch color, overriding the color set by the derma skin.

**Argumentos:**

- `Color clr` — The new color to set

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetNotches` `[client/menu]`

Appears to be non functioning, however is still used by panels such as DNumSlider.

**Argumentos:**

- `number notches` — 

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetNumSlider` `[client/menu]`

Does nothing.

**Argumentos:**

- `any slider` — 

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetSlideX` `[client/menu]`

Used to position the draggable panel of the slider on the X axis.

**Argumentos:**

- `number x` — The value range seems to be from 0 to 1

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetSlideY` `[client/menu]`

Used to position the draggable panel of the slider on the Y axis.

**Argumentos:**

- `number y` — The value range seems to be from 0 to 1

**Retorna:**

*(sin retorno)*

---

### `DSlider:SetTrapInside` `[client/menu]`

Makes the slider itself, the "knob", trapped within the bounds of the slider panel. Example:

**Argumentos:**

- `boolean trap` — 

**Retorna:**

*(sin retorno)*

---

### `DSlider:TranslateValues` `[client/menu]`

For override by child panels, such as DNumSlider. Allows changing the output values of the slider.

**Argumentos:**

- `number x` — The input X coordinate, in range of 0-1.
- `number y` — The input Y coordinate, in range of 0-1.

**Retorna:**

- `number` — The output X coordinate, in range of 0-1.
- `number` — The output X coordinate, in range of 0-1.