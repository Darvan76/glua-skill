# DRGBPicker

---

**Hereda de:** `DPanel`

---

DRGBPicker is an interactive panel which can be used to select a color hue.

See DColorCube for a color picker which controls brightness and saturation.

See DColorMixer for a color picker that allows control over hue, saturation, and brightness at once.

---


## Miembros (4)


---

### `DRGBPicker:GetPosColor` `[client/menu]`

Returns the color at given position on the internal texture.

**Argumentos:**

- `number x` — The X coordinate on the texture to get the color from
- `number y` — The Y coordinate on the texture to get the color from

**Retorna:**

- `Color` — The Color
- `number` — The X-coordinate clamped to the texture's width.
- `number` — The Y-coordinate clamped to the texture's height.

---

### `DRGBPicker:GetRGB` `[client/menu]`

Returns the color currently set on the color picker.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color set on the color picker, see Color.

---

### `DRGBPicker:OnChange` `[client/menu]`

Function which is called when the cursor is clicked and/or moved on the color picker. Meant to be overridden.

**Argumentos:**

- `Color col` — The color that is selected on the color picker (Color form).

**Retorna:**

*(sin retorno)*

---

### `DRGBPicker:SetRGB` `[client/menu]`

Sets the color stored in the color picker.

This function is meant to be called internally and will not update the position of the color picker line or call DRGBPicker:OnChange

**Argumentos:**

- `Color color` — The color to set, see Color.

**Retorna:**

*(sin retorno)*