# Color

---

List of all possible functions to manipulate colors.

Colors are implemented in Lua thus Global.type(color) == "table" and Global.TypeID(color) == Enums/TYPE#table.

For type checking use Global.IsColor.

Created by Global.Color, Global.HSVToColor, and Global.HSLToColor.

| Type                | Name  | Description                       |
| ------------------- | ----- | --------------------------------- |
| number | **r** | The red component of the color.   |
| number | **g** | The green component of the color. |
| number | **b** | The blue component of the color.  |
| number | **a** | The alpha component of the color. |

---


## Miembros (28)


---

### `Color:AddBlackness` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model), adds given value to the "blackness" and converts it back into an RGB color.

A slightly more efficient combination of COLOR:GetBlackness &amp; COLOR:SetBlackness

**Argumentos:**

- `number blackness` — The "blackness" value to add in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:AddBrightness` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV), adds given value to the [brightness also known as "value"](https://en.wikipedia.org/wiki/Brightness) and converts it back into an RGB color.

A slightly more efficient combination of COLOR:GetBrightness &amp; COLOR:SetBrightness

This is useful to quickly change the saturation of the color without changing hue or luminance, allowing for things like easy theming.

**Argumentos:**

- `number saturation` — The brightness value to add in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:AddHue` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV), adds given value to the [hue](https://en.wikipedia.org/wiki/Hue) and converts it back into an RGB color.

A slightly more efficient combination of COLOR:GetHue &amp; COLOR:SetHue

This is useful to quickly change the hue of the color without changing saturation or luminance, allowing for things like easy theming.

**Argumentos:**

- `number hue` — The hue value to add in degrees [0, 360).

**Retorna:**

*(sin retorno)*

---

### `Color:AddLightness` `[client/menu/server]`

Converts a Color into [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV), adds given value to the ["lightness"](https://en.wikipedia.org/wiki/Lightness) and converts it back into an RGB color.

A slightly more efficient combination of COLOR:GetLightness &amp; COLOR:SetLightness

This is useful to quickly change the lightness of the color without changing hue or saturation, allowing for things like easy theming.

**Argumentos:**

- `number lightness` — The lightness value to add in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:AddSaturation` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV), adds given value to the [saturation](https://en.wikipedia.org/wiki/Colorfulness) and converts it back into an RGB color.

A slightly more efficient combination of COLOR:GetSaturation &amp; COLOR:SetSaturation

This is useful to quickly change the saturation of the color without changing hue or luminance, allowing for things like easy theming.

**Argumentos:**

- `number saturation` — The saturation value to add in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:AddWhiteness` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model), adds given value to the "whiteness" and converts it back into an RGB color.

A slightly more efficient combination of COLOR:GetWhiteness &amp; COLOR:SetWhiteness

**Argumentos:**

- `number whiteness` — The "whiteness" value to add in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:Copy` `[client/menu/server]`

Returns a copy of this color, usually so it can be safely modified later without affecting the original color.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The copy of the given color, safe to modify.

*Fuente: `lua/includes/util/color.lua:183`*

---

### `Color:GetBlackness` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model) and returns the "blackness" of the color.

See COLOR:ToHWB if you want to get all 3 components.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number blackness` — Blackness of the color in range [0, 1]

*Fuente: `lua/includes/util/color.lua:349`*

---

### `Color:GetBrightness` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and returns the [brightness also known as "value"](https://en.wikipedia.org/wiki/Brightness).

See COLOR:ToHSV if you want to get all 3 components.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number brightness` — Brightness in range [0, 1]

*Fuente: `lua/includes/util/color.lua:277`*

---

### `Color:GetHue` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and returns the [hue](https://en.wikipedia.org/wiki/Hue).

See COLOR:ToHSV if you want to get all 3 components.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number hue` — The hue in degrees [0, 360).

---

### `Color:GetLightness` `[client/menu/server]`

Converts a Color into [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and returns the ["lightness"](https://en.wikipedia.org/wiki/Lightness) of the color.

See COLOR:ToHSL if you want to get all 3 components.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number lightness` — Lightness in range [0, 1]

---

### `Color:GetSaturation` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and returns the [saturation](https://en.wikipedia.org/wiki/Colorfulness).

See COLOR:ToHSV if you want to get all 3 components.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number saturation` — Saturation in range [0, 1]

---

### `Color:GetWhiteness` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model) and returns the "whiteness" of the color.

See COLOR:ToHWB if you want to get all 3 components.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number whiteness` — Whiteness of the color in range [0, 1]

---

### `Color:Lerp` `[client/menu/server]`

Performs linear interpolation between this and given colors.

**Argumentos:**

- `Color target` — The target color to interpolate towards.
- `number fraction` — The interpolation fraction. `0` means fully original color, `0.5` means in the middle between the 2 colors, `1` means fully target color, etc.

**Retorna:**

- `Color` — The result of linear interpolation.

*Fuente: `lua/includes/util/color.lua:183`*

---

### `Color:SetBlackness` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model), sets the "blackness" and converts it back into an RGB color.

**Argumentos:**

- `number blackness` — The new "blackness" value in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:SetBrightness` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV), sets the [brightness also known as "value"](https://en.wikipedia.org/wiki/Brightness) and converts it back into an RGB color.

This is useful to quickly change the brightness of the color without changing hue or saturation, allowing for things like easy theming.

**Argumentos:**

- `number saturation` — The new brightness value in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:SetHue` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV), sets the [hue](https://en.wikipedia.org/wiki/Hue) and converts it back into an RGB color.

This is useful to quickly change the hue of the color without changing saturation or luminance, allowing for things like easy theming.

**Argumentos:**

- `number hue` — The new hue value in degrees [0, 360).

**Retorna:**

*(sin retorno)*

---

### `Color:SetLightness` `[client/menu/server]`

Converts a Color into [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV), sets the ["lightness"](https://en.wikipedia.org/wiki/Lightness) and converts it back into an RGB color.

This is useful to quickly change the lightness of the color without changing hue or saturation, allowing for things like easy theming.

**Argumentos:**

- `number lightness` — The new lightness value in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:SetSaturation` `[client/menu/server]`

Converts a Color into [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV), sets the [saturation](https://en.wikipedia.org/wiki/Colorfulness) and converts it back into an RGB color.

This is useful to quickly change the saturation of the color without changing hue or luminance, allowing for things like easy theming.

**Argumentos:**

- `number saturation` — The new saturation value in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:SetUnpacked` `[client/server]`

Sets the red, green, blue, and alpha of the color.

**Argumentos:**

- `number r` — The red component
- `number g` — The green component
- `number b` — The blue component
- `number a` — The alpha component

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/color.lua:94`*

---

### `Color:SetWhiteness` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model), sets the "whiteness" and converts it back into an RGB color.

**Argumentos:**

- `number whiteness` — The new "whiteness" value in range [0, 1]

**Retorna:**

*(sin retorno)*

---

### `Color:ToHSL` `[client/menu/server]`

Converts a Color into [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV) .

This calls Global.ColorToHSL internally.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The hue in degrees [0, 360).
- `number` — The saturation in the range [0, 1].
- `number` — The lightness in the range [0, 1].

*Fuente: `lua/includes/util/color.lua:140`*

---

### `Color:ToHSV` `[client/menu/server]`

Encodes a RGB Color into the [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV).

This function uses Global.ColorToHSV internally.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number hue` — Hue in degrees in range [0, 360)
- `number saturation` — Saturation in range [0, 1]
- `number brightness` — Brightness in range [0, 1]

*Fuente: `lua/includes/util/color.lua:149`*

---

### `Color:ToHWB` `[client/menu/server]`

Converts a Color into [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model). See Global.HWBToColor for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number hue` — The hue in degrees [0, 360).
- `number whiteness` — The whiteness in the range [0, 1].
- `number blackness` — The blacknessin the range [0, 1].

*Fuente: `lua/includes/util/color.lua:158`*

---

### `Color:ToHex` `[client/menu/server]`

Converts a Color to its hexadecimal representation.

**Argumentos:**

- `boolean ` = `false` — Whether to forcibly omit the alpha channel from the output.

**Retorna:**

- `string` — The hexadecimal representation of the color. (`#RRGGBBAA`)

If the alpha channel is `255`, it will be omitted from the output (`#RRGGBB`)

---

### `Color:ToTable` `[client/server]`

Returns the color as a table (an array or a list) with four elements.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<number>` — The table with elements 1 = r, 2 = g, 3 = b, 4 = a,( `{ r, g, b, a }` )

*Fuente: `lua/includes/util/color.lua:103`*

---

### `Color:ToVector` `[client/server]`

Translates the Color into a Vector, losing the alpha channel.
This will also range the values from 0 - 255 to 0 - 1

r / 255 -&gt; x
g / 255 -&gt; y
b / 255 -&gt; z

This is the opposite of Vector:ToColor

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The created Vector

*Fuente: `lua/includes/util/color.lua:168`*

---

### `Color:Unpack` `[client/server]`

Returns the red, green, blue, and alpha of the color.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Red
- `number` — Green
- `number` — Blue
- `number` — Alpha

*Fuente: `lua/includes/util/color.lua:177`*