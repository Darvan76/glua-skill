# GWEN

---

GWEN is a system that allows you to load a spritesheet and generate a skin out of it.

---


## Miembros (4)


---

### `GWEN:CreateTextureBorder` `[client/menu]`

This is a utility function that generates a specialized drawing function to render scalable textured borders. This is done with [9-slice scaling](https://en.wikipedia.org/wiki/9-slice_scaling). This is used in derma skins to create a bordered rectangle drawing function from an image.

The texture is taken from `SKIN.GwenTexture` when the `material` argument is not supplied.

**Argumentos:**

- `number x` — The X coordinate on the texture.
- `number y` — The Y coordinate on the texture.
- `number w` — Width of the area on texture.
- `number h` — Height of the area on texture.
- `number left` — Left width of border.
- `number top` — Top width of border.
- `number right` — Right width of border.
- `number bottom` — Bottom width of border.
- `IMaterial material` = `nil` — If set, given material will be used over the SKIN's default material, which is `SKIN.GwenTexture`.

**Retorna:**

- `function drawFunc` — The drawing function.

X coordinate for the box.
Y coordinate for the box.
Width of the box.
Height of the box.
Optional color, default is color_white.

*Fuente: `lua/derma/derma_gwen.lua:6`*

---

### `GWEN:CreateTextureCentered` `[client/menu]`

Used in derma skins to create a fixed scale rectangle drawing function from an image. it will be drawn in the center of the box.

The texture is taken from `SKIN.GwenTexture` when the `material` is not supplied.

**Argumentos:**

- `number x` — The X coordinate on the texture.
- `number y` — The Y coordinate on the texture.
- `number w` — Width of the area on texture.
- `number h` — Height of the area on texture.
- `IMaterial material` = `nil` — If set, given material will be used over the SKIN's default material, which is `SKIN.GwenTexture`.

**Retorna:**

- `function` — The drawing function.

X coordinate for the box.
Y coordinate for the box.
Width of the box.
Height of the box.
Optional color, default is white.

*Fuente: `lua/derma/derma_gwen.lua:87`*

---

### `GWEN:CreateTextureNormal` `[client/menu]`

Helper function that returns a specialized drawing function for rendering a texture that scales freely to fit the given area.

The texture is taken from `SKIN.GwenTexture` when the `material` is not supplied.

**Argumentos:**

- `number x` — The X coordinate on the texture.
- `number y` — The Y coordinate on the texture.
- `number w` — Width of the area on texture.
- `number h` — Height of the area on texture.
- `IMaterial material` = `nil` — If set, given material will be used over the SKIN's default material, which is `SKIN.GwenTexture`.

**Retorna:**

- `function` — The drawing function.

X coordinate for the box.
Y coordinate for the box.
Width of the box.
Height of the box.
Optional color, default is white.

*Fuente: `lua/derma/derma_gwen.lua:58`*

---

### `GWEN:TextureColor` `[client/menu]`

Retrieves the color from a materials texture at the provided UV coordinates

**Argumentos:**

- `number x` — X position of the pixel to get the color from.
- `number y` — Y position of the pixel to get the color from.

**Retorna:**

- `Color` — The color of the point on the skin.

*Fuente: `lua/derma/derma_gwen.lua:121`*