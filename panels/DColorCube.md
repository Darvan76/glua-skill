# DColorCube

---

**Hereda de:** `DSlider`

---

The DColorCube allows a user to select saturation and value but not hue. Uses HSV colors

---


## Miembros (13)


---

### `DColorCube:GetBaseRGB` `[client/menu]`

An Global.AccessorFunc that returns the base Color set by DColorCube:SetBaseRGB.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — A Color

*Fuente: `lua/vgui/dcolorcube.lua:5`*

---

### `DColorCube:GetDefaultColor` `[client/menu]`

An Global.AccessorFunc that returns the color cube's default color. By default, it is set to white. (255 255 255 RGB)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The default Color.

*Fuente: `lua/vgui/dcolorcube.lua:7`*

---

### `DColorCube:GetHue` `[client/menu]`

An Global.AccessorFunc that returns the value set by DColorCube:SetHue.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

*Fuente: `lua/vgui/dcolorcube.lua:4`*

---

### `DColorCube:GetRGB` `[client/menu]`

An Global.AccessorFunc that returns the color cube's current set color.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The set color, uses Color.

*Fuente: `lua/vgui/dcolorcube.lua:6`*

---

### `DColorCube:OnUserChanged` `[client/menu]`

Function which is called when the color cube slider is moved (through user input). Meant to be overridden.

**Argumentos:**

- `Color color` — The new color, uses Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:89`*

---

### `DColorCube:ResetToDefaultValue` `[client/menu]`

Sets the color to whatever DColorCube:GetDefaultColor returns

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:43`*

---

### `DColorCube:SetBaseRGB` `[client/menu]`

An Global.AccessorFunc that sets the base color and the color used to draw the color cube panel itself.

Calling this when using a color that isn't 100% saturated and valued (Global.HSVToColor with saturation and value set to 1) causes the color cube to look inaccurate compared to the color that's returned by methods like DColorCube:GetRGB and DColorCube:OnUserChanged. You should use DColorCube:SetColor instead

**Argumentos:**

- `Color color` — The base color to set, uses Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:107`*

---

### `DColorCube:SetColor` `[client/menu]`

Sets the base color of the color cube and updates the slider position.

**Argumentos:**

- `Color color` — The color to set, uses Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:95`*

---

### `DColorCube:SetDefaultColor` `[client/menu]`

An Global.AccessorFunc that sets the color cube's default color. This value will be used to reset to on middle mouse click of the color cube's draggable slider.

**Argumentos:**

- `Color ` — The new default Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:7`*

---

### `DColorCube:SetHue` `[client/menu]`

An Global.AccessorFunc that appears to do nothing and unused.

**Argumentos:**

- `number hue` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:4`*

---

### `DColorCube:SetRGB` `[client/menu]`

An Global.AccessorFunc that used internally to set the real "output" color of the panel.

**Argumentos:**

- `Color clr` — A Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:6`*

---

### `DColorCube:TranslateValues` `[client/menu]`

Updates the color cube RGB based on the given x and y position and returns its arguments. Similar to DColorCube:UpdateColor.

**Argumentos:**

- `number x` = `nil` — The x position to sample color from/the percentage of saturation to remove from the color (ranges from 0.0 to 1.0).
- `number y` = `nil` — The y position to sample color from/the percentage of brightness or value to remove from the color (ranges from 0.0 to 1.0).

**Retorna:**

- `number` — The given x position.
- `number` — The given y position.

*Fuente: `lua/vgui/dcolorcube.lua:65`*

---

### `DColorCube:UpdateColor` `[client/menu]`

Updates the color cube RGB based on the given x and y position. Similar to DColorCube:TranslateValues.

**Argumentos:**

- `number x` = `nil` — The x position to set color to/the percentage of saturation to remove from the color (ranges from 0.0 to 1.0).
- `number y` = `nil` — The y position to set color to/the percentage of brightness or value to remove from the color (ranges from 0.0 to 1.0).

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorcube.lua:74`*