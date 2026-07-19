# CMoveData

---

A class used to store the inputs from CUserCmd and other information related to the current movement simulation, such as velocity, position and so on.

This can only be accessed during GM:SetupMove , GM:Move , GM:PlayerTick and GM:FinishMove.

---


## Miembros (47)


---

### `CMoveData:AddKey` `[client/server]`

Adds keys to the move data, as if player pressed them.

**Argumentos:**

- `number keys` — Keys to add, see Enums/IN

**Retorna:**

*(sin retorno)*

---

### `CMoveData:GetAbsMoveAngles` `[client/server]`

Gets the aim angle. Seems to be same as CMoveData:GetAngles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — Aiming angle

---

### `CMoveData:GetAngles` `[client/server]`

Gets the aim angle. On client is the same as Entity:GetAngles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — Aiming angle

---

### `CMoveData:GetButtons` `[client/server]`

Gets which buttons are down

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — An integer representing which buttons are down, see Enums/IN

---

### `CMoveData:GetConstraintCenter` `[client/server]`

Returns the center of the player movement constraint. See CMoveData:SetConstraintCenter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector pos` — The constraint origin.

---

### `CMoveData:GetConstraintRadius` `[client/server]`

Returns the radius that constrains the players movement. See CMoveData:SetConstraintRadius.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The constraint radius

---

### `CMoveData:GetConstraintSpeedScale` `[client/server]`

Returns the player movement constraint speed scale. See CMoveData:SetConstraintSpeedScale.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The constraint speed scale

---

### `CMoveData:GetConstraintWidth` `[client/server]`

Returns the width (distance from the edge of the radius, inward) where the actual movement constraint functions.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The constraint width

---

### `CMoveData:GetFinalIdealVelocity` `[client/server]`

Returns an internal player movement variable `m_outWishVel`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector idealVel` — 

---

### `CMoveData:GetFinalJumpVelocity` `[client/server]`

Returns an internal player movement variable `m_outJumpVel`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector jumpVel` — 

---

### `CMoveData:GetFinalStepHeight` `[client/server]`

Returns an internal player movement variable `m_outStepHeight`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number stepHeight` — 

---

### `CMoveData:GetForwardSpeed` `[client/server]`

Returns the players forward speed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — speed

---

### `CMoveData:GetImpulseCommand` `[client/server]`

Gets the number passed to "impulse" console command

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The impulse

---

### `CMoveData:GetMaxClientSpeed` `[client/server]`

Returns the maximum client speed of the player

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum client speed

---

### `CMoveData:GetMaxSpeed` `[client/server]`

Returns the maximum speed of the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum speed

---

### `CMoveData:GetMoveAngles` `[client/server]`

Returns the angle the player is moving at. For more info, see CMoveData:SetMoveAngles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The move direction

---

### `CMoveData:GetOldAngles` `[client/server]`

Gets the aim angle. Only works clientside, server returns same as CMoveData:GetAngles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The aim angle

---

### `CMoveData:GetOldButtons` `[client/server]`

Get which buttons were down last frame

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — An integer representing which buttons were down, see Enums/IN

---

### `CMoveData:GetOrigin` `[client/server]`

Gets the player's position.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The player's position.

---

### `CMoveData:GetSideSpeed` `[client/server]`

Returns the strafe speed of the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — speed

---

### `CMoveData:GetUpSpeed` `[client/server]`

Returns the vertical speed of the player. ( Z axis of CMoveData:GetVelocity )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Vertical speed

---

### `CMoveData:GetVelocity` `[client/server]`

Gets the players velocity.

This will return Vector(0,0,0) sometimes when walking on props.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The players velocity

---

### `CMoveData:KeyDown` `[client/server]`

Returns whether the key is down or not

**Argumentos:**

- `number key` — The key to test, see Enums/IN

**Retorna:**

- `boolean` — Is the key down or not

---

### `CMoveData:KeyPressed` `[client/server]`

Returns whether the key was pressed. If you want to check if the key is held down, try CMoveData:KeyDown

**Argumentos:**

- `number key` — The key to test, see Enums/IN

**Retorna:**

- `boolean` — Was the key pressed or not.

---

### `CMoveData:KeyReleased` `[client/server]`

Returns whether the key was released

**Argumentos:**

- `number key` — A key to test, see Enums/IN

**Retorna:**

- `boolean` — Was the key released or not.

---

### `CMoveData:KeyWasDown` `[client/server]`

Returns whether the key was down or not.

Unlike CMoveData:KeyDown, it will return false if CMoveData:KeyPressed is true and it will return true if CMoveData:KeyReleased is true.

**Argumentos:**

- `number key` — The key to test, see Enums/IN

**Retorna:**

- `boolean` — Was the key down or not

---

### `CMoveData:SetAbsMoveAngles` `[client/server]`

Sets absolute move angles.( ? ) Doesn't seem to do anything.

**Argumentos:**

- `Angle ang` — New absolute move angles

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetAngles` `[client/server]`

Sets angles.

This function does nothing.

**Argumentos:**

- `Angle ang` — The angles.

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetButtons` `[client/server]`

Sets the pressed buttons on the move data

**Argumentos:**

- `number buttons` — A number representing which buttons are down, see Enums/IN

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetConstraintCenter` `[client/server]`

Sets the center of the player movement constraint. See CMoveData:SetConstraintRadius.

**Argumentos:**

- `Vector pos` — The constraint origin.

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetConstraintRadius` `[client/server]`

Sets the radius that constrains the players movement.

Works with conjunction of:
* CMoveData:SetConstraintWidth
* CMoveData:SetConstraintSpeedScale
* CMoveData:SetConstraintCenter

**Argumentos:**

- `number radius` — The new constraint radius

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetConstraintSpeedScale` `[client/server]`

Sets the player movement constraint speed scale. This will be applied to the player within the CMoveData:SetConstraintRadius when approaching its edge.

**Argumentos:**

- `number ` — The constraint speed scale

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetConstraintWidth` `[client/server]`

Sets  the width (distance from the edge of the CMoveData:SetConstraintRadius, inward) where the actual movement constraint functions.

**Argumentos:**

- `number ` — The constraint width

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetFinalIdealVelocity` `[client/server]`

Sets an internal player movement variable `m_outWishVel`.

**Argumentos:**

- `Vector idealVel` — 

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetFinalJumpVelocity` `[client/server]`

Sets an internal player movement variable `m_outJumpVel`.

**Argumentos:**

- `Vector jumpVel` — 

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetFinalStepHeight` `[client/server]`

Sets an internal player movement variable `m_outStepHeight`.

**Argumentos:**

- `number stepHeight` — 

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetForwardSpeed` `[client/server]`

Sets players forward speed.

**Argumentos:**

- `number speed` — New forward speed

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetImpulseCommand` `[client/server]`

Sets the impulse command. This isn't actually utilised in the engine anywhere.

**Argumentos:**

- `number impulse` — The impulse to set

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetMaxClientSpeed` `[client/server]`

Sets the maximum player speed. Player won't be able to run or sprint faster then this value.

This also automatically sets CMoveData:SetMaxSpeed when used in the GM:SetupMove hook. You must set it manually in the GM:Move hook.

This must be called on both client and server to avoid prediction errors.

This will **not** reduce speed in air.
Setting this to 0 will not make the player stationary. It won't do anything.

**Argumentos:**

- `number maxSpeed` — The new maximum speed

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetMaxSpeed` `[client/server]`

Sets the maximum speed of the player. This must match with CMoveData:SetMaxClientSpeed both, on server and client.

Doesn't seem to be doing anything on it's own, use CMoveData:SetMaxClientSpeed instead.

**Argumentos:**

- `number maxSpeed` — The new maximum speed

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetMoveAngles` `[client/server]`

Sets the serverside move angles, making the movement keys act as if player was facing that direction.

This function is predicted, and should be called shared with matching data on client and server.

**Argumentos:**

- `Angle dir` — The aim direction.

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetOldAngles` `[client/server]`

Sets old aim angles. ( ? ) Doesn't seem to be doing anything.

**Argumentos:**

- `Angle aimAng` — The old angles

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetOldButtons` `[client/server]`

Sets the 'old' pressed buttons on the move data. These buttons are used to work out which buttons have been released, which have just been pressed and which are being held down.

**Argumentos:**

- `number buttons` — A number representing which buttons were down, see Enums/IN

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetOrigin` `[client/server]`

Sets the players position.

**Argumentos:**

- `Vector pos` — The position

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetSideSpeed` `[client/server]`

Sets players strafe speed.

**Argumentos:**

- `number speed` — Strafe speed

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetUpSpeed` `[client/server]`

Sets vertical speed of the player. ( Z axis of CMoveData:SetVelocity )

**Argumentos:**

- `number speed` — Vertical speed to set

**Retorna:**

*(sin retorno)*

---

### `CMoveData:SetVelocity` `[client/server]`

Sets the player's velocity

**Argumentos:**

- `Vector velocity` — The velocity to set

**Retorna:**

*(sin retorno)*