# CUserCmd

---

A class used to store the player inputs, such as mouse movement, view angles, Enums/IN buttons pressed and analog movement, the data from this class is then transfered to a CMoveData during actual movement simulation.

Can be modified during GM:CreateMove, GM:StartCommand and used in read only with GM:SetupMove and Player:GetCurrentCommand.

---


## Miembros (27)


---

### `CUserCmd:AddKey` `[client/server]`

Adds a single key to the active buttons bitflag. See also CUserCmd:SetButtons.

**Argumentos:**

- `number key` — Key to add, see Enums/IN.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:ClearButtons` `[client/server]`

Removes all keys from the command.

If you are looking to affect player movement, you may need to use CUserCmd:ClearMovement instead of clearing the buttons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:ClearMovement` `[client/server]`

Clears the movement from the command.

See also CUserCmd:SetForwardMove, CUserCmd:SetSideMove and  CUserCmd:SetUpMove.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:CommandNumber` `[client/server]`

Returns an increasing number representing the index of the user cmd.

The value returned is occasionally 0 inside GM:CreateMove and GM:StartCommand. It is advised to check for a non-zero value if you wish to get the correct number.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The command number

---

### `CUserCmd:GetButtons` `[client/server]`

Returns a bitflag indicating which buttons are pressed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Pressed buttons, see Enums/IN

---

### `CUserCmd:GetForwardMove` `[client/server]`

The speed the client wishes to move forward with, negative if the clients wants to move backwards.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The desired speed

---

### `CUserCmd:GetImpulse` `[client/server]`

Gets the current impulse from the client, usually 0. [See impulses list](https://developer.valvesoftware.com/wiki/Impulse) and some CUserCmd:SetImpulse.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The impulse

---

### `CUserCmd:GetMouseWheel` `[client/server]`

Returns the scroll delta as whole number.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Scroll delta

---

### `CUserCmd:GetMouseX` `[client/server]`

Returns the delta of the angular horizontal mouse movement of the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — xDelta

---

### `CUserCmd:GetMouseY` `[client/server]`

Returns the delta of the angular vertical mouse movement of the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — yDelta

---

### `CUserCmd:GetSideMove` `[client/server]`

The speed the client wishes to move sideways with, positive if it wants to move right, negative if it wants to move left.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — requestSpeed

---

### `CUserCmd:GetUpMove` `[client/server]`

The speed the client wishes to move up with, negative if the clients wants to move down.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — requestSpeed

---

### `CUserCmd:GetViewAngles` `[client/server]`

Gets the direction the player is looking in.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The direction the player is looking in.

---

### `CUserCmd:IsForced` `[client/server]`

When players are not sending usercommands to the server (often due to lag), their last usercommand will be executed multiple times as a backup. This function returns true if that is happening.

This will never return true clientside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isForced

---

### `CUserCmd:KeyDown` `[client/server]`

Returns true if the specified button(s) is pressed.

**Argumentos:**

- `number key` — Bitflag representing which button to check, see Enums/IN.

**Retorna:**

- `boolean` — Is key down or not

---

### `CUserCmd:RemoveKey` `[client/server]`

Removes a key bit from the current key bitflag.

For movement you will want to use CUserCmd:SetForwardMove, CUserCmd:SetUpMove and CUserCmd:SetSideMove.

**Argumentos:**

- `number button` — Bitflag to be removed from the key bitflag, see Enums/IN.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SelectWeapon` `[client/server]`

Forces the associated player to select a weapon. This is used internally in the default HL2 weapon selection HUD.

This may not work immediately if the current command is in prediction. Use input.SelectWeapon to switch the weapon from the client when the next available command can do so.

This is the ideal function to use to create a custom weapon selection HUD, as it allows prediction to run properly for WEAPON:Deploy and GM:PlayerSwitchWeapon

**Argumentos:**

- `Weapon weapon` — The weapon entity to select.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetButtons` `[client/server]`

Sets the buttons as a bitflag. See also CUserCmd:GetButtons.

If you are looking to affect player movement, you may need to use CUserCmd:SetForwardMove instead of setting the keys.

**Argumentos:**

- `number buttons` — Bitflag representing which buttons are "down", see Enums/IN.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetForwardMove` `[client/server]`

Sets speed the client wishes to move forward with, negative if the clients wants to move backwards.

See also CUserCmd:ClearMovement, CUserCmd:SetSideMove and CUserCmd:SetUpMove.

**Argumentos:**

- `number speed` — The new speed to request. The client will not be able to move faster than their set walk/sprint speed.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetImpulse` `[client/server]`

Sets the impulse command to be sent to the server.

Here are a few examples of impulse numbers:
- `100` toggles their flashlight
- `101` gives the player all Half-Life 2 weapons with `sv_cheats` set to `1`
- `200` toggles holstering / restoring the current weapon
When holstered, the `EF_NODRAW` flag is set on the active weapon.
- `154` toggles noclip

[See full list](https://developer.valvesoftware.com/wiki/Impulse)

**Argumentos:**

- `number impulse` — The impulse to send.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetMouseWheel` `[client/server]`

Sets the scroll delta.

**Argumentos:**

- `number speed` — The scroll delta.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetMouseX` `[client/server]`

Sets the delta of the angular horizontal mouse movement of the player.

See also CUserCmd:SetMouseY.

**Argumentos:**

- `number speed` — Angular horizontal move delta.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetMouseY` `[client/server]`

Sets the delta of the angular vertical mouse movement of the player.

See also CUserCmd:SetMouseX.

**Argumentos:**

- `number speed` — Angular vertical move delta.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetSideMove` `[client/server]`

Sets speed the client wishes to move sidewards with, positive to move right, negative to move left.

See also CUserCmd:SetForwardMove and  CUserCmd:SetUpMove.

**Argumentos:**

- `number speed` — The new speed to request.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetUpMove` `[client/server]`

Sets speed the client wishes to move upwards with, negative to move down.

See also CUserCmd:SetSideMove and  CUserCmd:SetForwardMove.
This function does **not** move the client up/down ladders. To force ladder movement, consider CUserCMD:SetButtons and use IN_FORWARD from Enums/IN.

**Argumentos:**

- `number speed` — The new speed to request.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:SetViewAngles` `[client/server]`

Sets the direction the client wants to move in.

For human players, the pitch (vertical) angle should be clamped to +/- 89° to prevent the player's view from glitching.
For fake clients (those created with player.CreateNextBot), this functionally dictates the 'move angles' of the bot. This typically functions separately from the colloquial view angles. This can be utilized by CUserCmd:SetForwardMove and its related functions.

**Argumentos:**

- `Angle viewAngle` — New view angles.

**Retorna:**

*(sin retorno)*

---

### `CUserCmd:TickCount` `[client/server]`

Returns tick count since joining the server.

This will always return 0 for bots.

Returns 0 clientside during prediction calls. If you are trying to use CUserCmd:Set*() on the client in a movement or command hook, keep doing so till TickCount returns a non-zero number to maintain prediction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of ticks passed since joining the server.