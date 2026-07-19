# killicon

---

The killicon library is used to add to and control the icons that appear in the top right of your screen when a player is killed.

---


## Miembros (8)


---

### `killicon:Add` `[client]`

Creates new kill icon using a texture.

**Argumentos:**

- `string class` — Weapon or entity class.
- `string texture` — Path to the texture.
- `Color color` — Color of the kill icon.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/killicon.lua:30`*

---

### `killicon:AddAlias` `[client]`

Creates kill icon from existing one.

**Argumentos:**

- `string new_class` — New class of the kill icon.
- `string existing_class` — Already existing kill icon class.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/killicon.lua:39`*

---

### `killicon:AddFont` `[client]`

Adds kill icon for given weapon/entity class using special font.

**Argumentos:**

- `string class` — Weapon or entity class.
- `string font` — Font to be used.
- `string symbol` — The symbol to be used.
- `Color color` — Color of the killicon.
- `number heightScale ` = `1` — Used internally to correct certain killicons to more closely match their visual size.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/killicon.lua:20`*

---

### `killicon:AddTexCoord` `[client]`

Creates new kill icon using a sub-rectangle of a texture.

**Argumentos:**

- `string class` — Weapon or entity class this killicon is for.
- `string texture` — Path to the texture.
- `Color color` — Color of the kill icon.
- `number x` — The start position (X axis) of the rectangle on the given texture. This is in texture coordinates.
- `number y` — The start position (Y axis) of the rectangle on the given texture. This is in texture coordinates.
- `number w` — The width of the rectangle on the given texture. This is in texture coordinates.
- `number h` — The height of the rectangle on the given texture. This is in texture coordinates.

**Retorna:**

*(sin retorno)*

---

### `killicon:Draw` `[client]`

Draws a kill icon.

This function applies unpredictable vertical offsets, you should use killicon.Render instead, which does not suffer from this issue.

**Argumentos:**

- `number x` — X coordinate of the icon.
- `number y` — Y coordinate of the icon.
- `string name` — Classname of the kill icon.
- `number alpha` = `255` — Alpha/transparency value ( 0 - 255 ) of the icon.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/killicon.lua:97`*

---

### `killicon:Exists` `[client]`

Checks if kill icon exists for given class.

**Argumentos:**

- `string class` — The class to test.

**Retorna:**

- `boolean` — Returns true if kill icon exists.

*Fuente: `lua/includes/modules/killicon.lua:45`*

---

### `killicon:GetSize` `[client]`

Returns the size of a kill icon.

**Argumentos:**

- `string name` — Classname of the kill icon.
- `boolean dontEqualizeHeight` = `false` — If set to `true`, returns the real size of the kill icon, without trying to equalize the height to match the default kill icon font.

**Retorna:**

- `number` — Width of the kill icon.
- `number` — Height of the kill icon.

*Fuente: `lua/includes/modules/killicon.lua:51`*

---

### `killicon:Render` `[client]`

Renders a kill icon.

**Argumentos:**

- `number x` — X coordinate of the icon.
- `number y` — Y coordinate of the icon.
- `string name` — Classname of the kill icon.
- `number alpha` = `255` — Alpha/transparency value ( 0 - 255 ) of the icon.
- `number dontEqualizeHeight` = `false` — Do not rescale the icon to match the default kill icon font.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/killicon.lua:196`*