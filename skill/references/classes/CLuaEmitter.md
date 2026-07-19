# CLuaEmitter

---

List of all possible functions available for LuaEmitters. This is the object returned by the Global.ParticleEmitter function.

---


## Miembros (12)


---

### `CLuaEmitter:Add` `[client]`

Creates a new CLuaParticle with the given material and position.

**Argumentos:**

- `string material` — The particles material. Can also be an IMaterial.
- `Vector position` — The position to spawn the particle on.

**Retorna:**

- `CLuaParticle` — The created particle, if any.

---

### `CLuaEmitter:Draw` `[client]`

Manually renders all particles the emitter has created.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CLuaEmitter:Finish` `[client]`

Removes the emitter, making it no longer usable from Lua. If particles remain, the emitter will be removed when all particles die.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CLuaEmitter:GetNumActiveParticles` `[client]`

Returns the amount of active particles of this emitter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of active particles of this emitter

---

### `CLuaEmitter:GetPos` `[client]`

Returns the position of this emitter. This is set when creating the emitter with Global.ParticleEmitter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Position of this particle emitter.

---

### `CLuaEmitter:Is3D` `[client]`

Returns whether this emitter is 3D or not. This is set when creating the emitter with Global.ParticleEmitter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this emitter is 3D or not.

---

### `CLuaEmitter:IsValid` `[client]`

Returns whether this CLuaEmitter is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this CLuaEmitter is valid or not.

---

### `CLuaEmitter:SetBBox` `[client]`

Sets the bounding box for this emitter.

Usually the bounding box is automatically determined by the particles, but this function overrides it.

**Argumentos:**

- `Vector mins` — The minimum position of the box
- `Vector maxs` — The maximum position of the box

**Retorna:**

*(sin retorno)*

---

### `CLuaEmitter:SetNearClip` `[client]`

This function sets the the distance between the render camera and the emitter at which the particles should start fading and at which distance fade ends ( alpha becomes 0 ).

**Argumentos:**

- `number distanceMin` — Min distance where the alpha becomes 0.
- `number distanceMax` — Max distance where the alpha starts fading.

**Retorna:**

*(sin retorno)*

---

### `CLuaEmitter:SetNoDraw` `[client]`

Prevents all particles of the emitter from automatically drawing.

**Argumentos:**

- `boolean noDraw` — Whether we should draw the particles ( false ) or not ( true )

**Retorna:**

*(sin retorno)*

---

### `CLuaEmitter:SetParticleCullRadius` `[client]`

The function name has not much in common with its actual function, it applies a radius to every particles that affects the building of the bounding box, as it, usually is constructed by the particle that has the lowest x, y and z and the highest x, y and z, this function just adds/subtracts the radius and inflates the bounding box.

**Argumentos:**

- `number radius` — Particle radius.

**Retorna:**

*(sin retorno)*

---

### `CLuaEmitter:SetPos` `[client]`

Sets the position of the particle emitter.

**Argumentos:**

- `Vector position` — New position.

**Retorna:**

*(sin retorno)*