# CNewParticleEffect

---

This object represents a .pcf ( Orange Box ) particle system. Created by Entity:CreateParticleEffect and Global.CreateParticleSystem.

---


## Miembros (26)


---

### `CNewParticleEffect:AddControlPoint` `[client]`

Adds a control point to the particle system.

This function will not work if the CNewParticleEffect:GetOwner entity is not valid

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Entity ent` — The entity to attach the control point to.
- `number partAttachment` — See Enums/PATTACH.
- `string entAttachment` = `nil` — The attachment name on the entity to attach the particle system to
- `Vector offset` = `Vector( 0, 0, 0 )` — The offset from the Entity:GetPos of the entity we are attaching this CP to.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:GetAutoUpdateBBox` `[client]`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `CNewParticleEffect:GetEffectName` `[client]`

Returns the name of the particle effect this system is set to emit.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the particle effect.

---

### `CNewParticleEffect:GetHighestControlPoint` `[client]`

Returns the highest control point number for given particle system.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — The highest control point number for given particle system, 0 to 63.

---

### `CNewParticleEffect:GetOwner` `[client]`

Returns the owner of the particle system, the entity the particle system is attached to.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The owner of the particle system.

---

### `CNewParticleEffect:GetRenderBounds` `[client]`

Returns the bounding box of the particle effect, including all the particles it emitted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Mins of the bounding box.
- `Vector` — Maxs of the bounding box.

---

### `CNewParticleEffect:GetShouldSimulate` `[client]`

Returns whether the particle system simulation was paused by CNewParticleEffect:SetShouldSimulate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the simulation is running (`true`) or not (`false`).

---

### `CNewParticleEffect:IsFinished` `[client]`

Returns whether the particle system has finished emitting particles or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the particle system has finished emitting particles or not.

---

### `CNewParticleEffect:IsValid` `[client]`

Returns whether the particle system is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the particle system is valid or not.

---

### `CNewParticleEffect:IsViewModelEffect` `[client]`

Returns whether the particle system is intended to be used on a view model?

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `CNewParticleEffect:Render` `[client]`

Forces the particle system to render using current rendering context.

Can be used to render the particle system in vgui panels, etc.

Used in conjunction with CNewParticleEffect:SetShouldDraw.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:Restart` `[client]`

Forces the particle system to restart emitting particles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPoint` `[client]`

Sets a value for given control point.

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Vector value` — The value to set for given control point.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPointEntity` `[client]`

Sets an entity to given control point for particle to use.

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Entity parent` — The entity to set.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPointForwardVector` `[client]`

Sets the forward direction for given control point.

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Vector forward` — The forward direction for given control point

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPointOrientation` `[client]`

Sets the orientation for given control point.

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Vector forward` — The forward direction for given control point.

This can also be an Angle, in which case the other 2 arguments are not used.
- `Vector right` — The right direction for given control point
- `Vector up` — The up direction for given control point

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPointParent` `[client]`

Essentially makes child control point follow the parent control point.

**Argumentos:**

- `number childID` — The child control point ID, 0 to 63.
- `number parentID` — The parent control point ID, 0 to 63.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPointRightVector` `[client]`

Sets the right direction for given control point.

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Vector right` — The right direction for given control point.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetControlPointUpVector` `[client]`

Sets the upward direction for given control point.

**Argumentos:**

- `number cpID` — The control point ID, 0 to 63.
- `Vector upward` — The upward direction for given control point

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetIsViewModelEffect` `[client]`

Set whether this particle effect is a view model effect or not. This will have an effect on attachment positioning and other things.

**Argumentos:**

- `boolean isViewModel` — Whether this particle effect is a view model effect or not.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetShouldDraw` `[client]`

Forces the particle system to stop automatically rendering.

Used in conjunction with CNewParticleEffect:Render.

**Argumentos:**

- `boolean should` — Whether to automatically draw the particle effect or not.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetShouldSimulate` `[client]`

Sets whether the particle system should continue simulation or not. If simulation is paused, all currently active particles will be frozen in place.

**Argumentos:**

- `boolean simulate` — Whether the simulation should run (`true`) or not (`false`).

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:SetSortOrigin` `[client]`

Sets the sort origin for given particle system. This is used as a helper to determine which particles are in front of which.

**Argumentos:**

- `Vector origin` — The new sort origin.

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:StartEmission` `[client]`

Starts the particle emission.

**Argumentos:**

- `boolean infiniteOnly` = `false` — 

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:StopEmission` `[client]`

Stops the particle emission.

**Argumentos:**

- `boolean infiniteOnly` = `false` — 
- `boolean removeAllParticles` = `false` — 
- `boolean wakeOnStop` = `false` — 

**Retorna:**

*(sin retorno)*

---

### `CNewParticleEffect:StopEmissionAndDestroyImmediately` `[client]`

Stops particle emission and destroys all particles instantly. Also detaches the particle effect from the entity it was attached to.

This function will work identically to CNewParticleEffect:StopEmission( false, true ) if  CNewParticleEffect:GetOwner entity is not valid.

Consider using CNewParticleEffect:StopEmission( false, true ) instead, which has same effect, but doesn't require owner entity, and does't detach the particle system from its entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*