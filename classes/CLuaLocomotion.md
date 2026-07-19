# CLuaLocomotion

---

This class is essentially what controls a NextBot NPC. You can access it in a NextBot NPC by using **self.loco** variable.

---


## Miembros (40)


---

### `CLuaLocomotion:Approach` `[server]`

Moves the NextBot incrementally closer to the provided goal location.

Each time this function is called, the NextBot moves towards the goal position passed as an argument by the amount previously set by CLuaLocomotion:SetDesiredSpeed.

To achieve smooth movement, this function must be called frequently.
This is commonly accomplished by calling it in the ENTITY:Think hook.

**Argumentos:**

- `Vector goal` — The vector we want to get to.
- `number goalWeight` — How influential the movement should be, in case of this function being called multiple times in between physical movements of the entity.

If unsure then set this to `1`.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:ClearStuck` `[server]`

Removes the stuck status from the bot

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:FaceTowards` `[server]`

Sets the direction we want to face

**Argumentos:**

- `Vector goal` — The vector we want to face

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:GetAcceleration` `[server]`

Returns the acceleration speed

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current acceleration speed

---

### `CLuaLocomotion:GetAvoidAllowed` `[server]`

Returns whether the Nextbot is allowed to avoid obstacles or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean allowed` — Whether this bot is allowed to try to avoid obstacles.

---

### `CLuaLocomotion:GetClimbAllowed` `[server]`

Returns whether the Nextbot is allowed to climb or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean allowed` — Whether this bot is allowed to climb.

---

### `CLuaLocomotion:GetCurrentAcceleration` `[server]`

Returns the current acceleration as a vector

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Current acceleration

---

### `CLuaLocomotion:GetDeathDropHeight` `[server]`

Gets the height the bot is scared to fall from

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current death drop height

---

### `CLuaLocomotion:GetDeceleration` `[server]`

Gets the deceleration speed

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current deceleration speed

---

### `CLuaLocomotion:GetDesiredSpeed` `[server]`

Returns the desired movement speed set by CLuaLocomotion:SetDesiredSpeed

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The desired movement speed.

---

### `CLuaLocomotion:GetGravity` `[server]`

Returns the locomotion's gravity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number gravity` — The gravity.

---

### `CLuaLocomotion:GetGroundMotionVector` `[server]`

Return unit vector in XY plane describing our direction of motion - even if we are currently not moving

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — A vector representing the X and Y movement

---

### `CLuaLocomotion:GetGroundNormal` `[server]`

Returns the current ground normal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The current ground normal.

---

### `CLuaLocomotion:GetJumpGapsAllowed` `[server]`

Returns whether the Nextbot is allowed to jump gaps or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean allowed` — Whether this bot is allowed to jump gaps.

---

### `CLuaLocomotion:GetJumpHeight` `[server]`

Gets the height of the bot's jump

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current jump height

---

### `CLuaLocomotion:GetMaxJumpHeight` `[server]`

Returns maximum jump height of this CLuaLocomotion.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum jump height.

---

### `CLuaLocomotion:GetMaxYawRate` `[server]`

Returns the max rate at which the NextBot can visually rotate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Maximum yaw rate

---

### `CLuaLocomotion:GetNextBot` `[server]`

Returns the NextBot this locomotion is associated with.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `NextBot` — The nextbot

---

### `CLuaLocomotion:GetStepHeight` `[server]`

Gets the max height the bot can step up

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current step height

---

### `CLuaLocomotion:GetVelocity` `[server]`

Returns the current movement velocity as a vector

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Current velocity

---

### `CLuaLocomotion:IsAreaTraversable` `[server]`

Returns whether this CLuaLocomotion can reach and/or traverse/move in given CNavArea.

**Argumentos:**

- `CNavArea area` — The area to test

**Retorna:**

- `boolean` — Whether this CLuaLocomotion can traverse given CNavArea.

---

### `CLuaLocomotion:IsAttemptingToMove` `[server]`

Returns true if we're trying to move.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether we're trying to move or not.

---

### `CLuaLocomotion:IsClimbingOrJumping` `[server]`

Returns true of the locomotion engine is jumping or climbing

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether we're climbing or jumping or not

---

### `CLuaLocomotion:IsOnGround` `[server]`

Returns whether the nextbot this locomotion is attached to is on ground or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the nextbot is on ground or not.

---

### `CLuaLocomotion:IsStuck` `[server]`

Returns true if we're stuck

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether we're stuck or not

---

### `CLuaLocomotion:IsUsingLadder` `[server]`

Returns whether or not the target in question is on a ladder or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If the target is on a ladder or not.

---

### `CLuaLocomotion:Jump` `[server]`

Makes the bot jump. It must be on ground (Entity:IsOnGround) and its model must have `ACT_JUMP` activity.

**Argumentos:**

- `number act` = `ACT_JUMP` — The activity to use as the jumping animation.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:JumpAcrossGap` `[server]`

Makes the bot jump across a gap. The bot must be on ground (Entity:IsOnGround) and its model must have `ACT_JUMP` activity.

**Argumentos:**

- `Vector landingGoal` — 
- `Vector landingForward` — 

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetAcceleration` `[server]`

Sets the acceleration speed

**Argumentos:**

- `number speed` = `400` — Speed acceleration

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetAvoidAllowed` `[server]`

Sets whether the Nextbot is allowed try to to avoid obstacles or not. This is used during path generation. Works similarly to `nb_allow_avoiding` convar. By default bots are allowed to try to avoid obstacles.

**Argumentos:**

- `boolean allowed` — Whether this bot should be allowed to try to avoid obstacles.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetClimbAllowed` `[server]`

Sets whether the Nextbot is allowed to climb or not. This is used during path generation. Works similarly to `nb_allow_climbing` convar. By default bots are allowed to climb.

**Argumentos:**

- `boolean allowed` — Whether this bot should be allowed to climb.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetDeathDropHeight` `[server]`

Sets the height the bot is scared to fall from.

**Argumentos:**

- `number height` = `200` — Height

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetDeceleration` `[server]`

Sets the deceleration speed.

**Argumentos:**

- `number deceleration` = `400` — New deceleration speed.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetDesiredSpeed` `[server]`

Sets how far the NextBot will need to move each time CLuaLocomotion:Approach is called to move at given speed.

The default amount is 0. This means the bot will not move if this value has not been set.

**Argumentos:**

- `number speed` = `0` — The new desired speed

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetGravity` `[server]`

Sets the locomotion's gravity.

With values 0 or below, or even lower positive values, the nextbot will start to drift sideways, use CLuaLocomotion:SetVelocity to counteract this.

**Argumentos:**

- `number gravity` = `1000` — New gravity to set.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetJumpGapsAllowed` `[server]`

Sets whether the Nextbot is allowed to jump gaps or not. This is used during path generation. Works similarly to `nb_allow_gap_jumping` convar. By default bots are allowed to jump gaps.

**Argumentos:**

- `boolean allowed` — Whether this bot should be allowed to jump gaps.

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetJumpHeight` `[server]`

Sets the height of the bot's jump

**Argumentos:**

- `number height` = `58` — Height

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetMaxYawRate` `[server]`

Sets the max rate at which the NextBot can visually rotate. This will not affect moving or pathing.

**Argumentos:**

- `number yawRate` = `250` — Desired new maximum yaw rate

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetStepHeight` `[server]`

Sets the max height the bot can step up

**Argumentos:**

- `number height` = `18` — Height

**Retorna:**

*(sin retorno)*

---

### `CLuaLocomotion:SetVelocity` `[server]`

Sets the current movement velocity

**Argumentos:**

- `Vector velocity` — 

**Retorna:**

*(sin retorno)*