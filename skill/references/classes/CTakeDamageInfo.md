# CTakeDamageInfo

---

A class used to store and modify all the data concerning a damage event.
An empty CTakeDamageInfo object can be created with Global.DamageInfo

List of hooks that this object is passed to:
* ENTITY:OnTakeDamage
* GM:DoPlayerDeath
* GM:EntityTakeDamage
* GM:PostEntityTakeDamage
* GM:OnDamagedByExplosion
* GM:ScaleNPCDamage
* GM:ScalePlayerDamage
* NEXTBOT:OnInjured
* NEXTBOT:OnKilled
* NEXTBOT:OnOtherKilled

List of functions that use this object:
* util.BlastDamageInfo
* Entity:TakeDamageInfo
* Entity:TakePhysicsDamage
* Entity:DispatchTraceAttack

---


## Miembros (33)


---

### `CTakeDamageInfo:AddDamage` `[client/server]`

Increases the damage by damageIncrease.

**Argumentos:**

- `number damageIncrease` — The damage to add.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:GetAmmoType` `[client/server]`

Returns the ammo type used by the weapon that inflicted the damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Ammo type ID

---

### `CTakeDamageInfo:GetAttacker` `[client/server]`

Returns the attacker ( character who originated the attack ), for example a player or an NPC that shot the weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The attacker

---

### `CTakeDamageInfo:GetBaseDamage` `[client/server]`

Returns the initial unmodified by skill level ( game.GetSkillLevel ) damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — baseDamage

---

### `CTakeDamageInfo:GetDamage` `[client/server]`

Returns the total damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — damage

---

### `CTakeDamageInfo:GetDamageBonus` `[client/server]`

Gets the current bonus damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Bonus damage

---

### `CTakeDamageInfo:GetDamageCustom` `[client/server]`

Gets the custom damage type. This is used by Day of Defeat: Source and Team Fortress 2 for extended damage info, but isn't used in Garry's Mod by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The custom damage type

---

### `CTakeDamageInfo:GetDamageForce` `[client/server]`

Returns a vector representing the damage force.

Can be set with CTakeDamageInfo:SetDamageForce.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The damage force

---

### `CTakeDamageInfo:GetDamagePosition` `[client/server]`

Returns the position where the damage was or is going to be applied to.

Can be set using CTakeDamageInfo:SetDamagePosition.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The damage position

---

### `CTakeDamageInfo:GetDamageType` `[client/server]`

Returns a bitflag which indicates the damage type(s) of the damage.

Consider using CTakeDamageInfo:IsDamageType instead. Value returned by this function can contain multiple damage types.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{DMG}` — Damage type(s), a combination of Enums/DMG

---

### `CTakeDamageInfo:GetInflictor` `[client/server]`

Returns the inflictor of the damage. This is not necessarily a weapon.

For hitscan weapons this is the weapon.

For projectile weapons this is the projectile.

For a more reliable method of getting the weapon that damaged an entity, use CTakeDamageInfo:GetWeapon or CTakeDamageInfo:GetAttacker with Player:GetActiveWeapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The inflictor entity.

---

### `CTakeDamageInfo:GetMaxDamage` `[client/server]`

Returns the maximum damage. See CTakeDamageInfo:SetMaxDamage.

This is only set by "multi damage" instances in the engine, and is only checked by the strider NPC when receiving explosive damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum amount of damage in the "multi damage" instance.

---

### `CTakeDamageInfo:GetReportedPosition` `[client/server]`

Returns the initial, unmodified position where the damage occured.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — position

---

### `CTakeDamageInfo:GetWeapon` `[client/server]`

Returns the inflicting weapon of the damage event, if there is any.

This is not necessarily a Weapon entity, but it is very likely to be one.

See CTakeDamageInfo:GetInflictor for the actual entity that did the damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The damage-inflicting weapon or NULL.

---

### `CTakeDamageInfo:IsBulletDamage` `[client/server]`

Returns true if the damage was caused by a bullet.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isBulletDmg

---

### `CTakeDamageInfo:IsDamageType` `[client/server]`

Returns whenever the damageinfo contains the damage type specified.

**Argumentos:**

- `number{DMG} dmgType` — Damage type to test. See Enums/DMG.

**Retorna:**

- `boolean` — Whether this damage contains specified damage type or not

---

### `CTakeDamageInfo:IsExplosionDamage` `[client/server]`

Returns whenever the damageinfo contains explosion damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isExplDamage

---

### `CTakeDamageInfo:IsFallDamage` `[client/server]`

Returns whenever the damageinfo contains fall damage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isFallDmg

---

### `CTakeDamageInfo:ScaleDamage` `[client/server]`

Scales the damage by the given value.

**Argumentos:**

- `number scale` — Value to scale the damage with.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetAmmoType` `[client/server]`

Changes the ammo type used by the weapon that inflicted the damage.

**Argumentos:**

- `number ammoType` — Ammo type ID

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetAttacker` `[client/server]`

Sets the attacker ( character who originated the attack ) of the damage, for example a player or an NPC.

**Argumentos:**

- `Entity ent` — The entity to be set as the attacker.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetBaseDamage` `[client/server]`

Sets the initial damage, unmodified by the current skill level (game.GetSkillLevel). This is usually set automatically by the game when dealing damage.

This function will not modify the real damage that will be dealt (CTakeDamageInfo:GetDamage).

Use this only if you know what you are doing. Otherwise use CTakeDamageInfo:SetDamage.

**Argumentos:**

- `number ` — The base damage.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetDamage` `[client/server]`

Sets the amount of damage.

**Argumentos:**

- `number damage` — The value to set the absolute damage to.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetDamageBonus` `[client/server]`

Sets the bonus damage. Bonus damage isn't automatically applied, so this will have no outer effect by default.

**Argumentos:**

- `number damage` — The extra damage to be added.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetDamageCustom` `[client/server]`

Sets the custom damage type. This is used by Day of Defeat: Source and Team Fortress 2 for extended damage info, but isn't used in Garry's Mod by default.

**Argumentos:**

- `number DamageType` — Any integer - can be based on your own custom enums.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetDamageForce` `[client/server]`

Sets the directional force of the damage.

This function only affects entities using the VPHYSICS movetype. This means players and most NPCs won't receive the force vector you provide as knockback.

If the entity taking damage is using the WALK or STEP movetypes, the damage force is instead automatically calculated. It will push the entity away from the inflictor's Entity:WorldSpaceCenter, scaling the push by a calculated value involving the total amount of damage and the size of the entity. [Source](https://github.com/ValveSoftware/source-sdk-2013/blob/0565403b153dfcde602f6f58d8f4d13483696a13/src/game/server/baseentity.cpp#L1525)

To disable knockback entirely, see [EFL_NO_DAMAGE_FORCES](https://wiki.facepunch.com/gmod/Enums/EFL#EFL_NO_DAMAGE_FORCES) or use the workaround example below.

**Argumentos:**

- `Vector force` — The vector to set the force to.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetDamagePosition` `[client/server]`

Sets the position of where the damage gets applied to.

**Argumentos:**

- `Vector pos` — The position where the damage will be applied.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetDamageType` `[client/server]`

Sets the damage type.

**Argumentos:**

- `number{DMG} type` — The damage type, see Enums/DMG.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetInflictor` `[client/server]`

Sets the inflictor of the damage for example a weapon.

For hitscan/bullet weapons this should the weapon.

For projectile (rocket launchers, grenades, etc) weapons this should be the projectile and CTakeDamageInfo:SetWeapon should be the weapon.

**Argumentos:**

- `Entity inflictor` — The new inflictor.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetMaxDamage` `[client/server]`

Sets the "maximum damage" for this damage event. See CTakeDamageInfo:GetMaxDamage for details.

**Argumentos:**

- `number maxDamage` — Maximum damage value.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetReportedPosition` `[client/server]`

Sets the origin of the damage.

**Argumentos:**

- `Vector pos` — The location of where the damage is originating

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SetWeapon` `[client/server]`

Sets the damage-inflicting weapon of the damage event.

This should be a Weapon entity, not a projectile. See also CTakeDamageInfo:SetInflictor.

**Argumentos:**

- `Entity ` — The damage-inflicting weapon or NULL.

**Retorna:**

*(sin retorno)*

---

### `CTakeDamageInfo:SubtractDamage` `[client/server]`

Subtracts the specified amount from the damage.

**Argumentos:**

- `number damage` — Value to subtract.

**Retorna:**

*(sin retorno)*