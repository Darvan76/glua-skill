# ITexture

---

An object representing game texture, such as those loaded from a `.vtf` file.

Do not confuse with IMaterial. Materials use textures. Game uses materials.

Returned by IMaterial:GetTexture

---


## Miembros (10)


---

### `ITexture:Download` `[client/menu/server]`

Invokes the generator of the texture. Reloads file based textures from disk and clears render target textures.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ITexture:GetColor` `[client/menu/server]`

Returns the color of the specified pixel, only works for textures created from PNG files.

**Argumentos:**

- `number x` — The X coordinate.
- `number y` — The Y coordinate.

**Retorna:**

- `Color` — The color of the pixel as a Color.

---

### `ITexture:GetMappingHeight` `[client/menu/server]`

Returns the true unmodified height of the texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — height

---

### `ITexture:GetMappingWidth` `[client/menu/server]`

Returns the true unmodified width of the texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — width

---

### `ITexture:GetName` `[client/menu/server]`

Returns the name of the texture, in most cases the path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — name

---

### `ITexture:GetNumAnimationFrames` `[client/menu/server]`

Returns the number of animation frames in this texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of animation frames in this texture.

---

### `ITexture:Height` `[client/menu/server]`

Returns the modified height of the texture, this value may be affected by mipmapping and other factors.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — height

---

### `ITexture:IsError` `[client/menu/server]`

Returns whenever the texture is valid. (i.e. was loaded successfully or not)

The "error" texture is a valid texture, and therefore this function will return false when used on it. Use ITexture:IsErrorTexture, instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the texture was loaded successfully or not.

---

### `ITexture:IsErrorTexture` `[client/menu/server]`

Returns whenever the texture is the error texture (pink and black checkerboard pattern).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the texture is the error texture or not.

---

### `ITexture:Width` `[client/menu/server]`

Returns the modified width of the texture, this value may be affected by mipmapping and other factors.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — width