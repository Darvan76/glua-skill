# Weapon

---

This is a list of all methods only available for weapons. It is also possible to call Entity functions on weapons.

A list of available methods has been expanded in your navigation bar.

---


## Miembros (35)


---

### `Weapon:AllowsAutoSwitchFrom` `[client/server]`

Returns whether the weapon allows to being switched from when a better ( Weapon:GetWeight ) weapon is being picked up.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the weapon allows to being switched from.

---

### `Weapon:AllowsAutoSwitchTo` `[client/server]`

Returns whether the weapon allows to being switched to when a better (Weapon:GetWeight) weapon is being picked up.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the weapon allows to being switched to.

---

### `Weapon:CallOnClient` `[client/server]`

Calls a SWEP function on client. Does nothing on client.

This uses the usermessage internally, because of that, the combined length of the arguments of this function may not exceed 254 bytes/characters or the function will cease to function!

**Argumentos:**

- `string functionName` — Name of function to call. If you want to call `SWEP:MyFunc()` on client, you type in `"MyFunc"`
- `string data` — Custom data to be passed to the target SWEP function as the first argument.

**Retorna:**

*(sin retorno)*

---

### `Weapon:Clip1` `[client/server]`

Returns how much primary ammo is in the magazine.
This is not shared between clients and will instead return the maximum primary clip size.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of primary ammo in the magazine.

---

### `Weapon:Clip2` `[client/server]`

Returns how much secondary ammo is in the magazine.
This is not shared between clients and will instead return the maximum secondary clip size.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of secondary ammo in the magazine.

---

### `Weapon:DefaultReload` `[client/server]`

Forces the weapon to reload while playing given animation.

This will stop the Weapon:Think function from getting called while the weapon is reloading!

**Argumentos:**

- `number act` — Sequence to use as reload animation. Uses the Enums/ACT.

**Retorna:**

- `boolean` — Did reloading actually take place

---

### `Weapon:GetActivity` `[client/server]`

Returns the sequence enumeration number that the weapon is playing.

This can return inconsistent results between the server and client.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current activity, see Enums/ACT. Returns 0 if the weapon doesn't have active sequence.

---

### `Weapon:GetDeploySpeed` `[client/server]`

Returns the weapon deploy speed, as set by Weapon:SetDeploySpeed. If not previously set, the value will be polled from the `sv_defaultdeployspeed` ConVar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number speed` — The value to set deploy speed to.

---

### `Weapon:GetHoldType` `[client/server]`

Returns the hold type of the weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The hold type of the weapon. You can find a list of default hold types Hold_Types.

---

### `Weapon:GetMaxClip1` `[client/server]`

Returns maximum primary clip size

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Maximum primary clip size

---

### `Weapon:GetMaxClip2` `[client/server]`

Returns maximum secondary clip size

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Maximum secondary clip size

---

### `Weapon:GetNextPrimaryFire` `[client/server]`

Gets the next time the weapon can primary fire. ( Can call WEAPON:PrimaryAttack )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The time, relative to Global.CurTime

---

### `Weapon:GetNextSecondaryFire` `[client/server]`

Gets the next time the weapon can secondary fire. ( Can call WEAPON:SecondaryAttack )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The time, relative to Global.CurTime

---

### `Weapon:GetPrimaryAmmoType` `[client/server]`

Gets the primary ammo type of the given weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ammo type ID, or -1 if not found.

---

### `Weapon:GetPrintName` `[client/server]`

Returns the non-internal name of the weapon, that should be for displaying.

If that returns an untranslated message (#HL2_XX), use language.GetPhrase to see the "nice" name.
If SWEP.PrintName is not set in the Weapon or the Weapon Base then "&lt;MISSING SWEP PRINT NAME&gt;" will be returned.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The "nice" name of the weapon.

---

### `Weapon:GetSecondaryAmmoType` `[client/server]`

Gets the ammo type of the given weapons secondary fire.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The secondary ammo type ID, or -1 if not found.

---

### `Weapon:GetSlot` `[client/server]`

Returns the slot of the weapon.
The slot numbers start from 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The slot of the weapon.

---

### `Weapon:GetSlotPos` `[client/server]`

Returns slot position of the weapon

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The slot position of the weapon

---

### `Weapon:GetWeaponViewModel` `[client/server]`

Returns the view model of the weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The view model of the weapon.

---

### `Weapon:GetWeaponWorldModel` `[client/server]`

Returns the world model of the weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The world model of the weapon.

---

### `Weapon:GetWeight` `[client/server]`

Returns the "weight" of the weapon, which is used when deciding which Weapon is better by the engine.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The weapon "weight".

---

### `Weapon:HasAmmo` `[client/server]`

Returns whether the weapon has ammo left or not. It will return false when there's no ammo left in the magazine **and** when there's no reserve ammo left.

This will return true for weapons like crowbar, gravity gun, etc.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the weapon has ammo or not.

---

### `Weapon:IsCarriedByLocalPlayer` `[client]`

Returns whenever the weapon is carried by the local player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the weapon is carried by the local player or not

---

### `Weapon:IsScripted` `[client/server]`

Checks if the weapon is a SWEP or a built-in weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns true if weapon is scripted ( SWEP ), false if not ( A built-in HL2/HL:S weapon )

---

### `Weapon:IsWeaponVisible` `[client/server]`

Returns whether the weapon is visible. The term visibility is not exactly what gets checked here, first it checks if the owner is a player, then checks if the active view model has EF_NODRAW flag NOT set.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is visible or not

---

### `Weapon:LastShootTime` `[client/server]`

Returns the time since this weapon last fired a bullet with Entity:FireBullets in seconds. It is not networked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The time in seconds when the last bullet was fired.

---

### `Weapon:SendWeaponAnim` `[client/server]`

Forces weapon to play activity/animation.

**Argumentos:**

- `number act` — Activity to play. See the Enums/ACT (specifically `ACT_VM_`).

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetActivity` `[client/server]`

Sets the activity the weapon is playing.

See also Weapon:GetActivity.

**Argumentos:**

- `number act` — The new activity to set, see Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetClip1` `[client/server]`

Lets you change the number of bullets in the given weapons primary clip.

**Argumentos:**

- `number ammo` — The amount of bullets the clip should contain

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetClip2` `[client/server]`

Lets you change the number of bullets in the given weapons secondary clip.

**Argumentos:**

- `number ammo` — The amount of bullets the clip should contain

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetDeploySpeed` `[client/server]`

Sets the weapon deploy speed. This value needs to match on client and server.

**Argumentos:**

- `number speed` — The value to set deploy speed to. Values less than `1` will slow down the animations. Minimum value is `0.1`.

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetHoldType` `[client/server]`

Sets the hold type of the weapon. This function also calls WEAPON:SetWeaponHoldType and properly networks it to all clients.

This only works on scripted weapons.

Using this function on weapons held by bots will not network holdtype changes to clients if the world model is set to an empty string (SWEP.WorldModel = "").

**Argumentos:**

- `string name` — Name of the hold type. You can find all default hold types Hold_Types

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetLastShootTime` `[client/server]`

Sets the time since this weapon last fired in seconds. Used in conjunction with Weapon:LastShootTime.

This value is **not** networked to the client if set from server.

**Argumentos:**

- `number time` = `CurTime()` — The time in seconds when the last time the weapon was fired.

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetNextPrimaryFire` `[client/server]`

Sets when the weapon can fire again. Time should be based on Global.CurTime.

The standard HL2 Pistol (`weapon_pistol`) bypasses this function due to an [internal implementation](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/hl2/weapon_pistol.cpp#L313-L317).
This will fire extra bullets if the time is set to less than Global.CurTime.

**Argumentos:**

- `number time` — Time when player should be able to use primary fire again

**Retorna:**

*(sin retorno)*

---

### `Weapon:SetNextSecondaryFire` `[client/server]`

Sets when the weapon can alt-fire again. Time should be based on Global.CurTime.

**Argumentos:**

- `number time` — Time when player should be able to use secondary fire again

**Retorna:**

*(sin retorno)*