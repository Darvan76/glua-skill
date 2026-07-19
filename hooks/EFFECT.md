# EFFECT

---


## Miembros (8)


---

### `EFFECT:EndTouch` `[client]`

Effect alternative to ENTITY:EndTouch.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `EFFECT:GetTracerShootPos` `[client]`

Used to get the "real" start position of a trace, for weapon tracer effects.

"real" meaning in 3rd person, the 3rd person position will be used, in first person the first person position will be used.

**Argumentos:**

- `Vector pos` — Default position if we fail
- `Weapon ent` — The weapon to use.
- `number attachment` — Attachment ID of on the weapon "muzzle", to use as the start position.

Please note that it is expected that the same attachment ID is used on both, the world and the view model.

**Retorna:**

- `Vector` — The "real" start position.

*Fuente: `gamemodes/base/entities/effects/base.lua:5`*

---

### `EFFECT:Init` `[client]`

Called when the effect is created.

**Argumentos:**

- `CEffectData effectData` — The effect data used to create the effect.

**Retorna:**

*(sin retorno)*

---

### `EFFECT:PhysicsCollide` `[client]`

Called when the effect collides with anything.

**Argumentos:**

- `table colData` — Information regarding the collision. See Structures/CollisionData
- `PhysObj collider` — The physics object of the entity that collided with the effect.

**Retorna:**

*(sin retorno)*

---

### `EFFECT:Render` `[client]`

Called when the effect should be rendered.

When not overridden, it will perform default action, which is Entity:DrawModel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `EFFECT:StartTouch` `[client]`

Effect alternative to ENTITY:StartTouch.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `EFFECT:Think` `[client]`

Called when the effect should think, return false to kill the effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return false to remove this effect.

---

### `EFFECT:Touch` `[client]`

Effect alternative to ENTITY:Touch.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*