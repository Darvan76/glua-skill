# DSprite

---

**Hereda de:** `DPanel`

---

A panel that draws a sprite on the player's HUD with the given IMaterial, Global.Color and rotation.

A shortcut for this is Global.CreateSprite().

---


## Miembros (8)


---

### `DSprite:GetColor` `[client]`

Gets the color the sprite is using as a modifier.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The Color being used.

---

### `DSprite:GetHandle` `[client]`

Returns the value set by DSprite:SetHandle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — 

---

### `DSprite:GetMaterial` `[client]`

Gets the material the sprite is using.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `IMaterial` — The material in use.

---

### `DSprite:GetRotation` `[client]`

Gets the 2D rotation angle of the sprite, in the plane of the screen.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The anti-clockwise rotation in degrees.

---

### `DSprite:SetColor` `[client]`

Sets the color modifier for the sprite.

**Argumentos:**

- `Color color` — The Color to use.

**Retorna:**

*(sin retorno)*

---

### `DSprite:SetHandle` `[client]`

Seems to be an unused feature. Does nothing.

**Argumentos:**

- `Vector vec` — 

**Retorna:**

*(sin retorno)*

---

### `DSprite:SetMaterial` `[client]`

Sets the source material for the sprite.

**Argumentos:**

- `IMaterial material` — The material to use. This will ideally be an [UnlitGeneric](https://developer.valvesoftware.com/wiki/UnlitGeneric).

**Retorna:**

*(sin retorno)*

---

### `DSprite:SetRotation` `[client]`

Sets the 2D rotation angle of the sprite, in the plane of the screen.

**Argumentos:**

- `number ang` — The anti-clockwise rotation in degrees.

**Retorna:**

*(sin retorno)*