# CEffectData

---

List of all possible functions available for effect data. This is the object returned by the Global.EffectData function and is required for util.Effect function.

---


## Miembros (32)


---

### `CEffectData:GetAngles` `[client/server]`

Returns the angles of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the effect

---

### `CEffectData:GetAttachment` `[client/server]`

Returns the attachment ID for the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The attachment ID of the effect.

---

### `CEffectData:GetColor` `[client/server]`

Returns byte which represents the color of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The color of the effect

---

### `CEffectData:GetDamageType` `[client/server]`

Returns the damage type of the effect

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Damage type of the effect, see Enums/DMG

---

### `CEffectData:GetEntIndex` `[server]`

Returns the entity index of the entity set for the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The entity index of the entity set for the effect.

---

### `CEffectData:GetEntity` `[client/server]`

Returns the entity assigned to the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity assigned to the effect

---

### `CEffectData:GetFlags` `[client/server]`

Returns the flags of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The flags of the effect.

---

### `CEffectData:GetHitBox` `[client/server]`

Returns the hit box ID of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The hit box ID of the effect.

---

### `CEffectData:GetMagnitude` `[client/server]`

Returns the magnitude of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The magnitude of the effect.

---

### `CEffectData:GetMaterialIndex` `[client/server]`

Returns the material ID of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The material ID of the effect.

---

### `CEffectData:GetNormal` `[client/server]`

Returns the normalized direction vector of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The normalized direction vector of the effect.

---

### `CEffectData:GetOrigin` `[client/server]`

Returns the origin position of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The origin position of the effect.

---

### `CEffectData:GetRadius` `[client/server]`

Returns the radius of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The radius of the effect.

---

### `CEffectData:GetScale` `[client/server]`

Returns the scale of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The scale of the effect

---

### `CEffectData:GetStart` `[client/server]`

Returns the start position of the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The start position of the effect

---

### `CEffectData:GetSurfaceProp` `[client/server]`

Returns the surface property index of the effect. See util.GetSurfaceData for more details about what they are.

See CEffectData:SetSurfaceProp for details about limitations of this function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The surface property index of the effect.

---

### `CEffectData:SetAngles` `[client/server]`

Sets the angles of the effect.

**Argumentos:**

- `Angle ang` — The new angles to be set.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetAttachment` `[client/server]`

Sets the attachment id of the effect to be created with this effect data.

This is internally stored as an integer, but only the first 5 bits will be networked, effectively limiting this function to 0-31 range.

**Argumentos:**

- `number attachment` — New attachment ID of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetColor` `[client/server]`

Sets the "color" of the effect.

All this does is provide an addition 8 bits of data for the effect to use. What this will actually do will vary from effect to effect, depending on how a specific effect uses this given data, if at all.

Internally stored as an integer, but only first 8 bits are networked, effectively limiting this function to 0-255 range.

**Argumentos:**

- `number color` — Color represented by a byte.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetDamageType` `[client/server]`

Sets the damage type of the effect to be created with this effect data.

**Argumentos:**

- `number damageType` — Damage type, see Enums/DMG.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetEntIndex` `[server]`

Sets the entity of the effect via its index.

**Argumentos:**

- `number entIndex` — The entity index to be set.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetEntity` `[client/server]`

Sets the entity of the effect to be created with this effect data.

**Argumentos:**

- `Entity entity` — Entity of the effect, mostly used for parenting.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetFlags` `[client/server]`

Sets the flags for the effect. What flags do depends entirely on the effect. See Default Effects.

Internally stored as an integer, but only first 8 bits are networked, effectively limiting this function to `0-255` range.

**Argumentos:**

- `number flags` — The flags of the effect. Each effect has their own flags.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetHitBox` `[client/server]`

Sets the hit box index of the effect. Used by various effects for various purposes.

Internally stored as an integer, but only first 11 bits are networked, effectively limiting this function to 0-2047 range.

**Argumentos:**

- `number hitBoxIndex` — The hit box index of the effect, for example from Structures/TraceResult#HitBox

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetMagnitude` `[client/server]`

Sets the magnitude of the effect.
Internally stored as a float with 12 bit precision for networking purposes, limited to range of 0-1023.

**Argumentos:**

- `number magnitude` — The magnitude of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetMaterialIndex` `[client/server]`

Sets the material index of the effect.

Internally stored as an integer, but only first 12 bits are networked, effectively limiting this function to 0-4095 range.

**Argumentos:**

- `number materialIndex` — The material index of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetNormal` `[client/server]`

Sets the normalized (length=1) direction vector of the effect to be created with this effect data. This **must** be a normalized vector for networking purposes.

**Argumentos:**

- `Vector normal` — The normalized direction vector of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetOrigin` `[client/server]`

Sets the origin of the effect to be created with this effect data.
Limited to world bounds (+-16386 on every axis) and has horrible networking precision. (17 bit float per component)

**Argumentos:**

- `Vector origin` — Origin of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetRadius` `[client/server]`

Sets the radius of the effect to be created with this effect data.

Internally stored as a float, but networked as a 10bit float, and is clamped to 0-1023 range.

**Argumentos:**

- `number radius` — Radius of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetScale` `[client/server]`

Sets the scale of the effect to be created with this effect data.

**Argumentos:**

- `number scale` — Scale of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetStart` `[client/server]`

Sets the start of the effect to be created with this effect data.
Limited to world bounds (+-16386 on every axis) and has horrible networking precision. (17 bit float per component)

**Argumentos:**

- `Vector start` — Start of the effect.

**Retorna:**

*(sin retorno)*

---

### `CEffectData:SetSurfaceProp` `[client/server]`

Sets the surface property index of the effect. See util.GetSurfaceData for more details about what they are.

Internally stored as an integer, but only first 8 bits are networked, effectively limiting this function to `-1`-`254` range. (Yes, that's not a mistake, `-1` signifying an invalid value.)

**Argumentos:**

- `number surfaceProperties` — The surface property index of the effect.

**Retorna:**

*(sin retorno)*