# surface

---

The surface library allows you to draw text and shapes on the screen. Primarily used for making HUDs &amp; custom GUI panels.

---


## Miembros (32)


---

### `surface:CreateFont` `[client/menu]`

Creates a new font.

To prevent the font from displaying incorrectly when using the `outline` setting, set `antialias` to false. This will ensure the text properly fills out the entire outline.

Be sure to check the Default_Fonts first! Those fonts can be used without using this function.

See Also: Finding the Font Name.

Due to the static nature of fonts, do **NOT** create the font more than once. You should only be creating them once, it is recommended to create them at the top of your script. Do not use this function within GM:HUDPaint or any other hook!

Define fonts that you will actually use, as fonts are very taxing on performance and will cause crashes! Do not create fonts for every size.

**Argumentos:**

- `string fontName` — The new font name.
- `table{FontData} fontData` — The font properties. See the Structures/FontData.

**Retorna:**

*(sin retorno)*

---

### `surface:DisableClipping` `[client/menu]`

Alias of Global.DisableClipping so use that instead.

Enables or disables the clipping used by the VGUI that limits the drawing operations to a panels bounds.

Identical to Global.DisableClipping. See also Panel:NoClipping.

**Argumentos:**

- `boolean disable` — True to disable, false to enable the clipping

**Retorna:**

- `boolean oldState` — Whether the clipping was enabled or not before this function call

---

### `surface:DrawCircle` `[client/menu]`

Draws a hollow circle, made of lines. For a filled circle, see examples for surface.DrawPoly.

**Argumentos:**

- `number originX` — The center x integer coordinate.
- `number originY` — The center y integer coordinate.
- `number radius` — The radius of the circle.
- `number r` — The red value of the color to draw the circle with.
- `number g` — The green value of the color to draw the circle with.
- `number b` — The blue value of the color to draw the circle with.
- `number a` = `255` — The alpha value of the color to draw the circle with.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `number originX` — The center x integer coordinate.
- `number originY` — The center y integer coordinate.
- `number radius` — The radius of the circle.
- `Color color` — A Color object/table to read the color from.

---

### `surface:DrawLine` `[client/menu]`

Draws a line from one point to another.

**Argumentos:**

- `number startX` — The start x float coordinate.
- `number startY` — The start y float coordinate.
- `number endX` — The end x float coordinate.
- `number endY` — The end y float coordinate.

**Retorna:**

*(sin retorno)*

---

### `surface:DrawOutlinedRect` `[client/menu]`

Draws a hollow box with a given border width.

**Argumentos:**

- `number x` — The start x integer coordinate.
- `number y` — The start y integer coordinate.
- `number w` — The integer width.
- `number h` — The integer height.
- `number thickness` = `1` — The thickness of the outlined box border.

**Retorna:**

*(sin retorno)*

---

### `surface:DrawPoly` `[client/menu]`

Draws a textured polygon (secretly a triangle fan) with a maximum of 4096 vertices.
Only works properly with convex polygons. You may try to render concave polygons, but there is no guarantee that things wont get messed up.

Unlike most surface library functions, non-integer coordinates are not rounded.

You must reset the drawing color and texture before calling the function to ensure consistent results. See examples below.

**Argumentos:**

- `table vertices` — A table containing integer vertices. See the Structures/PolygonVertex.

**The vertices must be in clockwise order.**

**Retorna:**

*(sin retorno)*

---

### `surface:DrawRect` `[client/menu]`

Draws a solid rectangle on the screen.

**Argumentos:**

- `number x` — The X integer co-ordinate.
- `number y` — The Y integer co-ordinate.
- `number width` — The integer width of the rectangle.
- `number height` — The integer height of the rectangle.

**Retorna:**

*(sin retorno)*

---

### `surface:DrawText` `[client/menu]`

Draw the specified text on the screen, using the previously set [position](surface.SetTextPos), [font](surface.SetFont) and [color](surface.SetTextColor). This function does **not** handle newlines.

This function moves the [text position](surface.SetTextPos) by the length of the drawn text - this can be used to change text properties (such as font or color) without having to manually recalculate the text position. See example #2 for example use of this behavior.

**Argumentos:**

- `string text` — The text to be rendered.
- `boolean forceAdditive` = `nil` — `true` to force text to render additive, `false` to force not additive, `nil` to use font's value.

When additive rendering is enabled, the rendered text pixels will be added to the existing screen pixels, rather than replacing them outright. This means black text will be invisible, and drawing on a pure white background will be impossible.

**Retorna:**

*(sin retorno)*

---

### `surface:DrawTexturedRect` `[client/menu]`

Draw a textured rectangle with the given position and dimensions on the screen, using the current active texture set with surface.SetMaterial. It is also affected by surface.SetDrawColor.

See also render.SetMaterial and render.DrawScreenQuadEx.
See also surface.DrawTexturedRectUV and surface.DrawTexturedRectRotated.

**Argumentos:**

- `number x` — The X integer co-ordinate.
- `number y` — The Y integer co-ordinate.
- `number width` — The integer width of the rectangle.
- `number height` — The integer height of the rectangle.

**Retorna:**

*(sin retorno)*

---

### `surface:DrawTexturedRectRotated` `[client/menu]`

Draw a textured rotated rectangle with the given position and dimensions and angle on the screen, using the current active texture.

See also surface.DrawTexturedRectUV and surface.DrawTexturedRect.

**Argumentos:**

- `number x` — The X integer co-ordinate, representing the center of the rectangle.
- `number y` — The Y integer co-ordinate, representing the center of the rectangle.
- `number width` — The integer width of the rectangle.
- `number height` — The integer height of the rectangle.
- `number rotation` — The rotation of the rectangle, in degrees.

**Retorna:**

*(sin retorno)*

---

### `surface:DrawTexturedRectUV` `[client/menu]`

Draws a textured rectangle with a repeated or partial texture.

`u` and `v` refer to texture coordinates.
* (u, v) = (0, 0) is the top left
* (u, v) = (1, 0) is the top right
* (u, v) = (1, 1) is the bottom right
* (u, v) = (0, 1) is the bottom left

Using a start point of (1, 0) and an end point to (0, 1), you can draw an image flipped horizontally, same goes with other directions. Going above 1 will tile the texture. Negative values are allowed as well.

Here's a helper image:

See also surface.DrawTexturedRect and surface.DrawTexturedRectRotated.

If you are using a .png image, you need supply the "noclamp" flag as second parameter for Global.Material if you intend to use tiling.

If you find that `surface.DrawTexturedRectUV` is getting your texture coordinates (u0, v0), (u1, v1) wrong and you're rendering with a material created with Global.CreateMaterial, try adjusting them with the following code:

```
local du = 0.5 / 32 -- half pixel anticorrection
local dv = 0.5 / 32 -- half pixel anticorrection
local u0, v0 = (u0 - du) / (1 - 2 * du), (v0 - dv) / (1 - 2 * dv)
local u1, v1 = (u1 - du) / (1 - 2 * du), (v1 - dv) / (1 - 2 * dv)
```

**Explanation:**
`surface.DrawTexturedRectUV` tries to correct the texture coordinates by half a pixel (something to do with sampling) and computes the correction using `IMaterial::GetMappingWidth()`/`GetMappingHeight()`. If the material was created without a `$basetexture`, then `GetMappingWidth()`/`GetMappingHeight()` uses the width and height of the error material (which is 32x32).

The UV offsets might require (sub-)pixel correction for accurate tiling results.

**Argumentos:**

- `number x` — The X integer coordinate.
- `number y` — The Y integer coordinate.
- `number width` — The integer width of the rectangle.
- `number height` — The integer height of the rectangle.
- `number startU` — The U texture mapping of the rectangle origin.
- `number startV` — The V texture mapping of the rectangle origin.
- `number endU` — The U texture mapping of the rectangle end.
- `number endV` — The V texture mapping of the rectangle end.

**Retorna:**

*(sin retorno)*

---

### `surface:GetAlphaMultiplier` `[client/menu]`

Returns the current alpha multiplier affecting drawing operations. This is set by surface.SetAlphaMultiplier or by the game engine in certain other cases.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The multiplier ranging from 0 to 1.

---

### `surface:GetDrawColor` `[client/menu]`

Returns the current color affecting draw operations.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color that drawing operations will use.

---

### `surface:GetHUDTexture` `[client]`

Returns the [HUD icon](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/scripts/hud_textures.txt) TextureID of a texture with the specified name.

You probably want to use Global.Material and surface.SetMaterial.

**Argumentos:**

- `string name` — The name of the texture.

**Retorna:**

- `number texID` — The texture ID, for use with surface.SetTexture.

---

### `surface:GetPanelPaintState` `[client]`

Retrieves the position and render.SetScissorRect information for the Panel that is currently being drawn.

When using the surface library (and, by extension, the draw library) inside of the PANEL:Paint function, the origin (The on-screen position of `(0,0)`) is automatically shifted to the top-left corner of the panel to make it easier to draw the panel's contents.  Additionally, render.SetScissorRect is used to clip (or "mask") all drawn content to within the boundaries of the panel.  This function returns the information used by the surface library about the current panel's origin and render.SetScissorRect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{PanelPaintState}` — A table containing the position and render.SetScissorRect boundaries for the Panel currently being drawn.

For the table's format and available options see the Structures/PanelPaintState page.

---

### `surface:GetScissorRect` `[client]`

Retrieves the currently active scissor rect for the surface library. A faster, narrower version of surface.GetPanelPaintState.

Useful for panel retrieving current panel's culling from PANEL:Paint.

This does **NOT** return values set by render.SetScissorRect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the scissor rect is active or not. If `false`, the following values should be ignored.
- `number` — Left edge of the scissor rect.
- `number` — Top edge of the scissor rect.
- `number` — Right edge of the scissor rect.
- `number` — Bottom edge of the scissor rect.

---

### `surface:GetTextColor` `[client/menu]`

Returns the current color affecting text draw operations.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color that text drawing operations will use.

---

### `surface:GetTextPos` `[client/menu]`

Returns the X and Y co-ordinate that has been set with surface.SetTextPos or changed by surface.DrawText.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number x` — The X integer co-ordinate.
- `number y` — The Y integer co-ordinate.

---

### `surface:GetTextSize` `[client/menu]`

Returns the width and height (in pixels) of the given text with the font that has been set with surface.SetFont.

Takes into account new lines, the returned height is for the entire text, but surface.DrawText does not!

**Argumentos:**

- `string text` — The string to check the size of.

**Retorna:**

- `number` — Width of the provided text.
- `number` — Height of the provided text.

---

### `surface:GetTextureID` `[client/menu]`

Returns the texture id of the material with the given name/path, for use with surface.SetTexture.

Opposite version of this function is surface.GetTextureNameByID.

This function will not work with .png or .jpg images. For that, see Global.Material. You will probably want to use it regardless.

**Argumentos:**

- `string name/path` — Name or path of the texture. The path must be to a `.vmt` file (a material), not to `.vtf` (a texture)!

**Retorna:**

- `number` — The texture ID

---

### `surface:GetTextureNameByID` `[client/menu]`

Returns name/path of texture by ID. Opposite version of this function is surface.GetTextureID.

**Argumentos:**

- `number id` — ID of texture.

**Retorna:**

- `string` — Returns name/path of texture.

---

### `surface:GetTextureSize` `[client/menu]`

Returns the size of the texture with the associated texture ID.

For `.png/.jpg` textures loaded with Global.Material you can use the `$realheight` and `$realwidth` material parameters (IMaterial:GetInt) to get the size of the image.

**Argumentos:**

- `number textureID` — The texture ID, returned by surface.GetTextureID.

**Retorna:**

- `number` — The texture width.
- `number` — The texture height.

---

### `surface:PlaySound` `[client/menu]`

Play a sound file directly on the client (such as UI sounds, etc).

Valid sample rates: **11025 Hz, 22050 Hz and 44100 Hz**, otherwise you may see this kind of message:

`Unsupported 32-bit wave file your_sound.wav` and
`Invalid sample rate (48000) for sound 'your_sound.wav'`

**Argumentos:**

- `string soundfile` — The path to the sound file.

This should either be a sound script name (sound.Add) or a file path relative to the `sound/` folder. (Make note that it's not sound**s**)

**Retorna:**

*(sin retorno)*

---

### `surface:ScreenHeight` `[client/menu]`

You should use Global.ScrH instead.
Returns the height of the current client's screen.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — screenHeight

---

### `surface:ScreenWidth` `[client/menu]`

You should use Global.ScrW instead.
Returns the width of the current client's screen.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — screenWidth

---

### `surface:SetAlphaMultiplier` `[client/menu]`

Sets the alpha multiplier that will influence all upcoming drawing operations.
See also render.SetBlend.

**Argumentos:**

- `number multiplier` — The multiplier ranging from 0 to 1.

**Retorna:**

*(sin retorno)*

---

### `surface:SetDrawColor` `[client/menu]`

Set the color of any future shapes to be drawn, can be set by either using R, G, B, A as separate values or by a Color.

The alpha value may not work properly if you're using a material without `$vertexalpha`.
Due to post processing and gamma correction the color you set with this function may appear differently when rendered. This problem does not occur on materials drawn with surface.DrawTexturedRect.

**Argumentos:**

- `number r` — The red value of color.
- `number g` — The green value of color.
- `number b` — The blue value of color.
- `number a` = `255` — The alpha value of color.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `Color color` — A Color object/table to read the color from. This is slower than providing four numbers. You could use Color:Unpack to address this. You should also cache your color objects if you wish to use them, for performance reasons.

---

### `surface:SetFont` `[client/menu]`

Set the current font to be used for text operations later.

The fonts must first be created with surface.CreateFont or be one of the Default Fonts.

**Argumentos:**

- `string fontName` — The name of the font to use.

**Retorna:**

*(sin retorno)*

---

### `surface:SetMaterial` `[client/menu]`

Sets the material to be used in all upcoming draw operations using the surface library.

Not to be confused with render.SetMaterial.

If you need to unset the texture, use the draw.NoTexture convenience function.

Global.Material function calls are expensive to be done inside this function or inside rendering context, you should be caching the results of Global.Material calls

**Argumentos:**

- `IMaterial material` — The material to be used.

When using render.PushRenderTarget or render.SetRenderTarget, the material should have the `$ignorez` flag set to make it visible. If the material is not used in 3D rendering, it is probably safe to add it with this code:
```lua
material:SetInt( "$flags", bit.bor( material:GetInt( "$flags" ), 32768 ) )
```

If using Global.Material, simply use the `ignorez` parameter.

**Retorna:**

*(sin retorno)*

---

### `surface:SetTextColor` `[client/menu]`

Set the color of any future text to be drawn, can be set by either using R, G, B, A as separate numbers or by providing a Color.

**Argumentos:**

- `number r` — The red value of color.
- `number g` — The green value of color
- `number b` — The blue value of color
- `number a` = `255` — The alpha value of color

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `Color color` — A Color object/table to read the color from. This is slower than providing four numbers. You could use Color:Unpack to address this. You should also cache your color objects if you wish to use them, for performance reasons.

---

### `surface:SetTextPos` `[client/menu]`

Set the top-left position to draw any future text at.

**Argumentos:**

- `number x` — The X integer co-ordinate.
- `number y` — The Y integer co-ordinate.

**Retorna:**

*(sin retorno)*

---

### `surface:SetTexture` `[client/menu]`

Sets the texture to be used in all upcoming draw operations using the surface library.

This is a legacy method, and should probably not be used, see surface.SetMaterial and IMaterial for a better alternative.

**Argumentos:**

- `number textureID` — The ID of the texture to draw with returned by surface.GetTextureID.

**Retorna:**

*(sin retorno)*