# draw

---

The draw library's purpose is to simplify the usage of the surface library.

---


## Miembros (11)


---

### `draw:DrawText` `[client/menu]`

Simple draw text at position, but this will expand newlines and tabs.

See also MarkupObject for limited width and markup support.

**Argumentos:**

- `string text` — Text to be drawn.
- `string font` = `DermaDefault` — Name of font to draw the text in. See surface.CreateFont to create your own, or Default Fonts for a list of default fonts.
- `number x` = `0` — The X Coordinate.
- `number y` = `0` — The Y Coordinate.
- `Color color` = `Color( 255, 255, 255, 255 )` — Color to draw the text in. Uses Color.
- `number xAlign` = `TEXT_ALIGN_LEFT` — Where to align the text horizontally. Uses the Enums/TEXT_ALIGN.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/draw.lua:119`*

---

### `draw:GetFontHeight` `[client/menu]`

Returns the height of the specified font in pixels. This is equivalent to the height of the character `W`. See surface.GetTextSize.

**Argumentos:**

- `string font` — Name of the font to get the height of.

**Retorna:**

- `number` — The font height.

*Fuente: `lua/includes/modules/draw.lua:33`*

---

### `draw:NoTexture` `[client/menu]`

Sets drawing texture to a default white texture (vgui/white) via surface.SetMaterial. Useful for resetting the drawing texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/draw.lua:312`*

---

### `draw:RoundedBox` `[client/menu]`

Draws a rounded rectangle.

This function actually draws rectangles with 'gui/cornerX' textures applied to it's rounded corners. It means that this function will fail (or will be drawn not as expected) with any vertex operations, such as model matrices like cam.Start3D2D (corners would be pixelated) or stencil operations. Consider using surface.DrawPoly or mesh library

**Argumentos:**

- `number cornerRadius` — Radius of the rounded corners, works best with a multiple of 2.

For values 0 or below, surface.DrawRect will be used instead for performance.
- `number x` — The x coordinate of the top left of the rectangle.
- `number y` — The y coordinate of the top left of the rectangle.
- `number width` — The width of the rectangle.
- `number height` — The height of the rectangle.
- `Color color` — The color to fill the rectangle with. Uses the Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/draw.lua:162`*

---

### `draw:RoundedBoxEx` `[client/menu]`

Draws a rounded rectangle. This function also lets you specify which corners are drawn rounded.

This function actually draws rectangles with 'gui/cornerX' textures applied to it's rounded corners. It means that this function will fail (or will be drawn not as expected) with any vertex operations, such as model matrices like cam.Start3D2D (corners would be pixelated) or stencil operations. Consider using surface.DrawPoly or mesh library

**Argumentos:**

- `number cornerRadius` — Radius of the rounded corners, works best with a power of 2 number.
- `number x` — The x coordinate of the top left of the rectangle.
- `number y` — The y coordinate of the top left of the rectangle.
- `number width` — The width of the rectangle.
- `number height` — The height of the rectangle.
- `Color color` — The color to fill the rectangle with. Uses the Color.
- `boolean roundTopLeft` = `false` — Whether the top left corner should be rounded.
- `boolean roundTopRight` = `false` — Whether the top right corner should be rounded.
- `boolean roundBottomLeft` = `false` — Whether the bottom left corner should be rounded.
- `boolean roundBottomRight` = `false` — Whether the bottom right corner should be rounded.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/draw.lua:173`*

---

### `draw:SimpleText` `[client/menu]`

Draws text on the screen.
This function does not handle newlines properly. See draw.DrawText for a function that does.

**Argumentos:**

- `string text` — The text to be drawn.
- `string font` = `DermaDefault` — The font. See surface.CreateFont to create your own, or see Default Fonts for a list of default fonts.
- `number x` = `0` — The X Coordinate.
- `number y` = `0` — The Y Coordinate.
- `Color color` = `Color( 255, 255, 255, 255 )` — The color of the text.
- `number xAlign` = `TEXT_ALIGN_LEFT` — The alignment of the X coordinate using Enums/TEXT_ALIGN.
- `number yAlign` = `TEXT_ALIGN_TOP` — The alignment of the Y coordinate using Enums/TEXT_ALIGN.

**Retorna:**

- `number` — The width of the text. Same value as if you were calling surface.GetTextSize.
- `number` — The height of the text. Same value as if you were calling surface.GetTextSize.

*Fuente: `lua/includes/modules/draw.lua:51`*

---

### `draw:SimpleTextOutlined` `[client/menu]`

Creates a simple line of text that is outlined.

**Argumentos:**

- `string Text` — The text to draw.
- `string font` = `DermaDefault` — The font name to draw with. See surface.CreateFont to create your own, or Default_Fonts for a list of default fonts.
- `number x` = `0` — The X Coordinate.
- `number y` = `0` — The Y Coordinate.
- `Color color` = `Color( 255, 255, 255, 255 )` — The color of the text.
- `number xAlign` = `TEXT_ALIGN_LEFT` — The alignment of the X Coordinate using Enums/TEXT_ALIGN.
- `number yAlign` = `TEXT_ALIGN_TOP` — The alignment of the Y Coordinate using Enums/TEXT_ALIGN.
- `number outlinewidth` — Width of the outline.
- `Color outlinecolor` = `Color( 255, 255, 255, 255 )` — Color of the outline. Uses the Color.

**Retorna:**

- `number` — The width of the text. Same value as if you were calling surface.GetTextSize.
- `number` — The height of the text. Same value as if you were calling surface.GetTextSize.

*Fuente: `lua/includes/modules/draw.lua:96`*

---

### `draw:Text` `[client/menu]`

Works like draw.SimpleText but uses a table structure instead.

**Argumentos:**

- `table textdata` — The text properties. See the Structures/TextData

**Retorna:**

- `number` — Width of drawn text.
- `number` — Height of drawn text.

*Fuente: `lua/includes/modules/draw.lua:269`*

---

### `draw:TextShadow` `[client/menu]`

Works like draw.Text, but draws the text with a shadow.

**Argumentos:**

- `table textdata` — The text properties. See Structures/TextData.
- `number distance` — How far away the shadow appears.
- `number alpha` = `200` — How visible the shadow is (0-255).

**Retorna:**

- `number textWidth` — The width of drawn text.
- `number textHeight` — The height of drawn text.

*Fuente: `lua/includes/modules/draw.lua:279`*

---

### `draw:TexturedQuad` `[client/menu]`

Draws a texture with a table structure.

**Argumentos:**

- `table texturedata` — The texture properties. See Structures/TextureData.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/draw.lua:302`*

---

### `draw:WordBox` `[client/menu]`

Draws a rounded box with text in it.

**Argumentos:**

- `number bordersize` — Size of border, should be multiple of 2. Ideally this will be 8 or 16.
- `number x` — The X Coordinate.
- `number y` — The Y Coordinate.
- `string text` — Text to draw.
- `string font` — Font to draw in. See surface.CreateFont to create your own, or Default_Fonts for a list of default fonts.
- `Color boxcolor` — The box color. Uses Color.
- `Color textcolor` — The text color. Uses Color.
- `number xalign` = `TEXT_ALIGN_LEFT` — The alignment of the X coordinate using Enums/TEXT_ALIGN.
- `number yalign` = `TEXT_ALIGN_TOP` — The alignment of the Y coordinate using Enums/TEXT_ALIGN.

**Retorna:**

- `number` — The width of the word box.
- `number` — The height of the word box.

*Fuente: `lua/includes/modules/draw.lua:238`*