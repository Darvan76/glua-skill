# CLuaParticle

---

List of all possible functions available for Lua particles. This is the object returned by the CLuaEmitter:Add function.

---


## Miembros (44)


---

### `CLuaParticle:GetAirResistance` `[client]`

Returns the air resistance of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The air resistance of the particle

---

### `CLuaParticle:GetAngleVelocity` `[client]`

Returns the angular velocity of the particle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angular velocity of the particle

---

### `CLuaParticle:GetAngles` `[client]`

Returns the current orientation of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the particle

---

### `CLuaParticle:GetBounce` `[client]`

Returns the 'bounciness' of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The 'bounciness' of the particle

2 means it will gain 100% of its previous velocity,

1 means it will not lose velocity,

0.5 means it will lose half of its velocity with each bounce.

---

### `CLuaParticle:GetColor` `[client]`

Returns the color of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Red part of the color
- `number` — Green part of the color
- `number` — Blue part of the color

---

### `CLuaParticle:GetDieTime` `[client]`

Returns the amount of time in seconds after which the particle will be destroyed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of time in seconds after which the particle will be destroyed

---

### `CLuaParticle:GetEndAlpha` `[client]`

Returns the alpha value that the particle will reach on its death.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The alpha value the particle will fade to

---

### `CLuaParticle:GetEndLength` `[client]`

Returns the length that the particle will reach on its death.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The length the particle will reach

---

### `CLuaParticle:GetEndSize` `[client]`

Returns the size that the particle will reach on its death.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The size the particle will reach

---

### `CLuaParticle:GetGravity` `[client]`

Returns the gravity of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The gravity of the particle.

---

### `CLuaParticle:GetLifeTime` `[client]`

Returns the 'life time' of the particle, how long the particle existed since its creation.

This value will always be between 0 and CLuaParticle:GetDieTime.

It changes automatically as time goes.

It can be manipulated using CLuaParticle:SetLifeTime.

If the life time of the particle will be more than CLuaParticle:GetDieTime, it will be removed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — How long the particle existed, in seconds.

---

### `CLuaParticle:GetMaterial` `[client]`

Returns the current material of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `IMaterial mat` — The material.

---

### `CLuaParticle:GetPos` `[client]`

Returns the absolute position of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The absolute position of the particle.

---

### `CLuaParticle:GetRoll` `[client]`

Returns the current rotation of the particle in radians, this should only be used for 2D particles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current rotation of the particle in radians

---

### `CLuaParticle:GetRollDelta` `[client]`

Returns the current rotation speed of the particle in radians, this should only be used for 2D particles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current rotation speed of the particle in radians

---

### `CLuaParticle:GetStartAlpha` `[client]`

Returns the alpha value which the particle has when it's created.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The alpha value which the particle has when it's created.

---

### `CLuaParticle:GetStartLength` `[client]`

Returns the length which the particle has when it's created.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The length which the particle has when it's created.

---

### `CLuaParticle:GetStartSize` `[client]`

Returns the size which the particle has when it's created.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The size which the particle has when it's created.

---

### `CLuaParticle:GetVelocity` `[client]`

Returns the current velocity of the particle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The current velocity of the particle.

---

### `CLuaParticle:SetAirResistance` `[client]`

Sets the air resistance of the the particle.

**Argumentos:**

- `number airResistance` — New air resistance.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetAngleVelocity` `[client]`

Sets the angular velocity of the the particle.

**Argumentos:**

- `Angle angVel` — New angular velocity.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetAngles` `[client]`

Sets the angles of the particle.

**Argumentos:**

- `Angle ang` — New angle.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetBounce` `[client]`

Sets the 'bounciness' of the the particle.

**Argumentos:**

- `number bounce` — New 'bounciness' of the particle

2 means it will gain 100% of its previous velocity,

1 means it will not lose velocity,

0.5 means it will lose half of its velocity with each bounce.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetCollide` `[client]`

Sets the whether the particle should collide with the world or not.

**Argumentos:**

- `boolean shouldCollide` — Whether the particle should collide with the world or not

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetCollideCallback` `[client]`

Sets the function that gets called whenever the particle collides with the world.

**Argumentos:**

- `function collideFunc` — The collision callback.

The particle itself
Position of the collision
Direction of the collision, perpendicular to the hit surface

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetColor` `[client]`

Sets the color of the particle.

**Argumentos:**

- `number r` — The red component.
- `number g` — The green component.
- `number b` — The blue component.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetDieTime` `[client]`

Sets the time where the particle will be removed.

**Argumentos:**

- `number dieTime` — The new die time.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetEndAlpha` `[client]`

Sets the alpha value of the particle that it will reach when it dies.

**Argumentos:**

- `number endAlpha` — The new alpha value of the particle that it will reach when it dies.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetEndLength` `[client]`

Sets the length of the particle that it will reach when it dies.

**Argumentos:**

- `number endLength` — The new length of the particle that it will reach when it dies.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetEndSize` `[client]`

Sets the size of the particle that it will reach when it dies.

**Argumentos:**

- `number endSize` — The new size of the particle that it will reach when it dies.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetGravity` `[client]`

Sets the directional gravity aka. acceleration of the particle.

**Argumentos:**

- `Vector gravity` — The directional gravity.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetLifeTime` `[client]`

Sets the 'life time' of the particle, how long the particle existed since its creation.

This value should always be between 0 and CLuaParticle:GetDieTime.

It changes automatically as time goes.

If the life time of the particle will be more than CLuaParticle:GetDieTime, it will be removed.

**Argumentos:**

- `number lifeTime` — The new life time of the particle.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetLighting` `[client]`

Sets whether the particle should be affected by lighting.

**Argumentos:**

- `boolean useLighting` — Whether the particle should be affected by lighting.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetMaterial` `[client]`

Sets the material of the particle.

**Argumentos:**

- `IMaterial mat` — The new material to set. Can also be a string.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetNextThink` `[client]`

Sets when the particles think function should be called next, this uses the synchronized server time returned by Global.CurTime.

**Argumentos:**

- `number nextThink` — Next think time.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetPos` `[client]`

Sets the absolute position of the particle.

**Argumentos:**

- `Vector pos` — The new particle position.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetRoll` `[client]`

Sets the roll of the particle in radians. This should only be used for 2D particles.

**Argumentos:**

- `number roll` — The new rotation of the particle in radians.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetRollDelta` `[client]`

Sets the rotation speed of the particle in radians. This should only be used for 2D particles.

**Argumentos:**

- `number rollDelta` — The new rotation speed of the particle in radians.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetStartAlpha` `[client]`

Sets the initial alpha value of the particle.

**Argumentos:**

- `number startAlpha` — Initial alpha.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetStartLength` `[client]`

Sets the initial length value of the particle.

**Argumentos:**

- `number startLength` — Initial length.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetStartSize` `[client]`

Sets the initial size value of the particle.

**Argumentos:**

- `number startSize` — Initial size.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetThinkFunction` `[client]`

Sets the think function of the particle.

**Argumentos:**

- `function thinkFunc` — Think function.

The particle the think hook is set on

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetVelocity` `[client]`

Sets the velocity of the particle.

**Argumentos:**

- `Vector vel` — The new velocity of the particle.

**Retorna:**

*(sin retorno)*

---

### `CLuaParticle:SetVelocityScale` `[client]`

Automatically scales the length of the particle based on the particle speed, multiplied with CLuaParticle:SetStartLength and CLuaParticle:SetEndLength. Width remains the same as CLuaParticle:SetStartSize and CLuaParticle:SetEndSize.

**Argumentos:**

- `boolean doScale` = `false` — Use velocity scaling.

**Retorna:**

*(sin retorno)*