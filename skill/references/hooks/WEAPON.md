# WEAPON

---


## Miembros (59)


---

### `WEAPON:AcceptInput` `[server]`

Called when another entity fires an event to this entity.

**Argumentos:**

- `string inputName` — The name of the input that was triggered.
- `Entity activator` — The initial cause for the input getting triggered.
- `Entity called` — The entity that directly trigger the input.
- `string data` — The data passed.

**Retorna:**

- `boolean` — Should we suppress the default action for this input?

---

### `WEAPON:AdjustMouseSensitivity` `[client]`

Allows you to adjust the weapon's mouse sensitivity. This hook only works if you haven't overridden GM:AdjustMouseSensitivity.

**Argumentos:**

- `number defaultSensitivity` — The old sensitivity

In general this will be 0, which is equivalent to a sensitivity of 1.
- `number localFOV` — The player's current FOV.
- `number defaultFOV` — The player's default FOV.

**Retorna:**

- `number` — A multiplier of the player's normal sensitivity (0.5 would be half as sensitive, 2 would be twice as sensitive).

---

### `WEAPON:Ammo1` `[client/server]`

Returns how much of primary ammo the player has.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of primary ammo player has

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:251`*

---

### `WEAPON:Ammo2` `[client/server]`

Returns how much of secondary ammo the player has.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of secondary ammo player has

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:262`*

---

### `WEAPON:CalcView` `[client]`

Allows you to adjust player view while this weapon in use.

This hook is called from the default implementation of GM:CalcView which is [here](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/gamemodes/base/gamemode/cl_init.lua#L387-L395). Therefore, it will not be called if any other hook added to `CalcView` returns any value, or if the current gamemode overrides the default hook and does not call the SWEP function.

**Argumentos:**

- `Player ply` — The owner of weapon
- `Vector pos` — Current position of players view
- `Angle ang` — Current angles of players view
- `number fov` — Current FOV of players view

**Retorna:**

- `Vector` — New position of players view
- `Angle` — New angle of players view
- `number` — New FOV of players view

---

### `WEAPON:CalcViewModelView` `[client]`

Allows overriding the position and angle of the viewmodel. This hook only works if you haven't overridden GM:CalcViewModelView.

**Argumentos:**

- `Entity ViewModel` — The viewmodel entity
- `Vector OldEyePos` — Original position (before viewmodel bobbing and swaying)
- `Angle OldEyeAng` — Original angle (before viewmodel bobbing and swaying)
- `Vector EyePos` — Current position
- `Angle EyeAng` — Current angle

**Retorna:**

- `Vector` — New position
- `Angle` — New angle

---

### `WEAPON:CanBePickedUpByNPCs` `[server]`

Called when a Citizen NPC is looking around to a (better) weapon to pickup.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to allow this weapon to be picked up by NPCs.

---

### `WEAPON:CanPrimaryAttack` `[client/server]`

Helper function for checking for no ammo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Can use primary attack

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:200`*

---

### `WEAPON:CanSecondaryAttack` `[client/server]`

Helper function for checking for no ammo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Can use secondary attack

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:219`*

---

### `WEAPON:CustomAmmoDisplay` `[client]`

Allows you to use any numbers you want for the ammo display on the HUD.

Can be useful for weapons that don't use standard ammo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The new ammo display settings. A table with 4 possible keys: (All default to -1)
* boolean Draw - Whether to draw the ammo display or not
* number PrimaryClip - Amount of primary ammo in the clip
* number PrimaryAmmo - Amount of primary ammo in the reserves
* number SecondaryAmmo - Amount of secondary ammo. It is shown like alt-fire for SMG1 and AR2 are shown.
* number SecondaryClip - Amount of secondary ammo in the clip. If set, the secondary ammo display will have clips and reserve ammo dispalyed.

---

### `WEAPON:Deploy` `[client/server]`

Called when player has just switched to this weapon.

Due to this hook being predicted, it is not called clientside in singleplayer at all, and in multiplayer it will not be called clientside if the weapon is switched with Player:SelectWeapon or the "use" console command, however it will be called clientside with the default weapon selection menu and when using CUserCmd:SelectWeapon

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to allow switching away from this weapon using `lastinv` command

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:114`*

---

### `WEAPON:DoDrawCrosshair` `[client]`

Called when the crosshair is about to get drawn, and allows you to override it.

This function will **not** be called if `SWEP.DrawCrosshair` is set to false or if player is affected by Player:CrosshairDisable.

**Argumentos:**

- `number x` — X coordinate of the crosshair.
- `number y` — Y coordinate of the crosshair.

**Retorna:**

- `boolean` — Return true to override the default crosshair.

---

### `WEAPON:DoImpactEffect` `[client/server]`

Called so the weapon can override the impact effects it makes.
If the bullet was fired in a predicted environment, the hook will not be called on the `CLIENT` realm. 
This hook will also be called when `WEAPON:GetOwner():FireBullets` is called. While in `MULTIPLAYER`, this hook will be called on the respective state, but in `SINGLEPLAYER`, this hook will always be called on the `CLIENT` realm even if `FireBullets` was called on the `SERVER`.

**Argumentos:**

- `table tr` — A Structures/TraceResult from player's eyes to the impact point
- `number damageType` — The damage type of bullet. See Enums/DMG

**Retorna:**

- `boolean` — Return true to not do the default thing - which is to call `UTIL_ImpactTrace` in C++

---

### `WEAPON:DrawHUD` `[client]`

This hook allows you to draw on screen while this weapon is in use.

If you want to draw a custom crosshair, consider using WEAPON:DoDrawCrosshair instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:DrawHUDBackground` `[client]`

This hook allows you to draw on screen while this weapon is in use. This hook is called **before** WEAPON:DrawHUD and is equivalent of GM:HUDPaintBackground.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:DrawWeaponSelection` `[client]`

This hook draws the selection icon in the weapon selection menu.

**Argumentos:**

- `number x` — X coordinate of the selection panel
- `number y` — Y coordinate of the selection panel
- `number width` — Width of the selection panel
- `number height` — Height of the selection panel
- `number alpha` — Alpha value of the selection panel

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/cl_init.lua:34`*

---

### `WEAPON:DrawWorldModel` `[client]`

Called when we are about to draw the opaque parts of the weapon's world model.

See WEAPON:DrawWorldModelTranslucent for translucent pass callback.
See WEAPON:ViewModelDrawn for view model rendering.

**Argumentos:**

- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `WEAPON:DrawWorldModelTranslucent` `[client]`

Called when we are about to draw the translucent parts of the weapon's world model.

See WEAPON:DrawWorldModel for opaque pass callback.
See WEAPON:ViewModelDrawn for view model rendering.

**Argumentos:**

- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `WEAPON:Equip` `[server]`

Called when a player or NPC has picked the weapon up.

**Argumentos:**

- `Entity NewOwner` — The one who picked the weapon up. Can be Player or NPC.

**Retorna:**

*(sin retorno)*

---

### `WEAPON:EquipAmmo` `[server]`

The player has picked up the weapon and has taken the ammo from it.
The weapon will be removed immediately after this call.

**Argumentos:**

- `Player ply` — The player who picked up the weapon

**Retorna:**

*(sin retorno)*

---

### `WEAPON:FireAnimationEvent` `[client/server]`

Called before executing an animation event, such as a muzzle flash appearing or a shell ejecting.

This will only be called serverside for 3000-range events, and clientside for 5000-range and other events.

**Argumentos:**

- `Vector pos` — Position of the effect.
- `Angle ang` — Angle of the effect.
- `number event` — The event ID of the happened event. See [this page](http://developer.valvesoftware.com/wiki/Animation_Events).
- `string options` — Name or options of the event.
- `Entity source` — The source entity. This will be a viewmodel on the client and the weapon itself on the server

**Retorna:**

- `boolean` — Return true to disable the effect.

---

### `WEAPON:FreezeMovement` `[client]`

This hook allows you to freeze players screen.
Player will still be able to move or shoot

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to freeze moving the view

---

### `WEAPON:GetCapabilities` `[server]`

This hook is for NPCs, you return what they should try to do with it.
Calling NPC:CapabilitiesGet in this hook on the same entity can cause infinite loops since that function adds the result of WEAPON:GetCapabilities on top of the return value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{CAP}` — A number defining what NPC should do with the weapon. Use the Enums/CAP.

*Fuente: `gamemodes/base/entities/weapons/weapon_base/init.lua:73`*

---

### `WEAPON:GetNPCBulletSpread` `[server]`

Called when the weapon is used by NPCs to determine how accurate the bullets fired should be.

The inaccuracy is simulated by changing the NPC:GetAimVector based on the value returned from this hook.

**Argumentos:**

- `number proficiency` — How proficient the NPC is with this gun. See Enums/WEAPON_PROFICIENCY

**Retorna:**

- `number` — An amount of degrees the bullets should deviate from the NPC's NPC:GetAimVector. Default is 15.

---

### `WEAPON:GetNPCBurstSettings` `[server]`

Called when the weapon is used by NPCs to tell the NPC how to use this weapon. Controls how long the NPC can or should shoot continuously.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Minimum amount of bullets per burst. Default is 1.
- `number` — Maximum amount of bullets per burst. Default is 1.
- `number` — Delay between each shot, aka firerate. Default is 1.

---

### `WEAPON:GetNPCRestTimes` `[server]`

Called when the weapon is used by NPCs to tell the NPC how to use this weapon. Controls amount of time the NPC can rest (not shoot) between bursts.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Minimum amount of time the NPC can rest (not shoot) between bursts in seconds. Default is `0.3` seconds.
- `number` — Maximum amount of time the NPC can rest (not shoot) between bursts in seconds. Default is `0.6` seconds.

---

### `WEAPON:GetTracerOrigin` `[client]`

Allows you to override where the tracer effect comes from. ( Visual bullets )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The new position to start tracer effect from

---

### `WEAPON:GetViewModelPosition` `[client]`

This hook allows you to adjust view model position and angles.

**Argumentos:**

- `Vector EyePos` — Current position
- `Angle EyeAng` — Current angle

**Retorna:**

- `Vector` — New position
- `Angle` — New angle

---

### `WEAPON:HUDShouldDraw` `[client]`

This hook determines which parts of the HUD to draw.

**Argumentos:**

- `string element` — The HUD element in question

**Retorna:**

- `boolean` — Return false to hide this HUD element

---

### `WEAPON:Holster` `[client/server]`

Called when weapon tries to holster.

This will only be called serverside when using Player:SelectWeapon as that function immediately switches the weapon out of prediction.

This is called twice for every holster clientside, one in Prediction and one not.

Before WEAPON:OnRemove is called, this function is only called serverside.

**Argumentos:**

- `Entity weapon` — The weapon we are trying switch to.

**Retorna:**

- `boolean` — Return true to allow weapon to holster.

This will not have an effect if weapon was switched away from using Player:SetActiveWeapon

---

### `WEAPON:Initialize` `[client/server]`

Called when the weapon entity is created.

Entity:GetOwner will return NULL at this point because the weapon is not equpped by a player or NPC yet. Use WEAPON:Equip or WEAPON:Deploy if you need the owner to be valid.

This is not called serverside after a quicksave.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:KeyValue` `[server]`

Called when the engine sets a value for this scripted weapon.

See GM:EntityKeyValue for a hook that works for all entities.

See ENTITY:KeyValue for an  hook that works for scripted entities.

**Argumentos:**

- `string key` — The key that was affected.
- `string value` — The new value.

**Retorna:**

- `boolean` — Return true to suppress this KeyValue or return false or nothing to apply this key value.

---

### `WEAPON:NPCShoot_Primary` `[server]`

Called internally during `TASK_RANGE_ATTACK1 --&gt; OnRangeAttack1`. This allows you to separate your SWEPs primary firing function from players and NPCs.

To get the delay the NPC will fire again, you can call `self:GetOwner():GetInternalVariable("m_flNextAttack")`

This hook is called internally only for NPCs that has `CAP_USE_SHOT_REGULATOR` set.

**Argumentos:**

- `Vector shootPos` = `GetShootPos()` — The world position the NPC will use as attack starting position. You can create your projectiles here.
- `Vector shootDir` = `GetAimVector()` — The direction the NPC wants to shoot at.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/init.lua:93`*

---

### `WEAPON:NPCShoot_Secondary` `[server]`

A utility function to seperate your SWEPs secondary firing from players.

Unlike WEAPON:NPCShoot_Primary, this won't be called by the engine for `TASK_RANGE_ATTACK2`.

**Argumentos:**

- `Vector shootPos` = `GetShootPos()` — The world position the NPC will use as attack starting position. You can create your projectiles here.
- `Vector shootDir` = `GetAimVector()` — The direction the NPC wants to shoot at.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/init.lua:83`*

---

### `WEAPON:OnDrop` `[server]`

Called when weapon is dropped by Player:DropWeapon.

See also WEAPON:OwnerChanged.

**Argumentos:**

- `Entity owner` — The entity that dropped the weapon.

**Retorna:**

*(sin retorno)*

---

### `WEAPON:OnReloaded` `[client/server]`

Called whenever the weapons Lua script is reloaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:OnRemove` `[client/server]`

Called when the Scripted Entities is about to be removed.

Entity:GetOwner may be unset at this point, see WEAPON:OnDrop and WEAPON:OwnerChanged.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:OnRestore` `[client/server]`

Called when the weapon entity is reloaded from a Source Engine save (not the Sandbox saves or dupes) or on a changelevel (for example Half-Life 2 campaign level transitions).

For the duplicator callbacks, see ENTITY:OnDuplicated.

See also saverestore for relevant functions.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:OwnerChanged` `[client/server]`

Called when weapon is dropped or picked up by a new player. This can be called clientside for all players on the server if the weapon has no owner and is picked up.

See also WEAPON:OnDrop.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:PostDrawViewModel` `[client]`

Called after the view model has been drawn while the weapon in use.

This hook relies on default implementation of GM:PostDrawViewModel. If it appears to not work, it may have been overwritten/broken by the currently active gamemode or other addons.

WEAPON:ViewModelDrawn is an alternative hook which is always called before GM:PostDrawViewModel.

See also WEAPON:PreDrawViewModel.

**Argumentos:**

- `Entity vm` — This is the view model entity after it is drawn
- `Weapon weapon` — This is the weapon that is from the view model (same as self)
- `Player ply` — The owner of the view model
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `WEAPON:PreDrawViewModel` `[client]`

Allows you to modify viewmodel while the weapon in use before it is drawn.

This hook relies on default implementation of GM:PreDrawViewModel. If it appears to not work, it may have been overwritten/broken by the currently active gamemode or other addons.

See also WEAPON:ViewModelDrawn and WEAPON:PostDrawViewModel.

**Argumentos:**

- `Entity vm` — This is the view model entity before it is drawn.
- `Weapon weapon` — This is the weapon that is from the view model.
- `Player ply` — The the owner of the view model.
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

- `boolean` — Return `true` to prevent the default action of rendering the view model. `PostDrawViewModel` will NOT be called in this scenario.

---

### `WEAPON:PrimaryAttack` `[client/server]`

Called when primary attack button ( +attack ) is pressed.

When in singleplayer, this function is only called in the server realm. When in multiplayer, the hook will be called on both the server and the client in order to allow for Prediction.

You can force the hook to always be called on client like this:

```
if ( game.SinglePlayer() ) then self:CallOnClient( "PrimaryAttack" ) end
```

Note that due to prediction, in multiplayer SWEP:PrimaryAttack is called multiple times per one "shot" with the gun. To work around that, use Global.IsFirstTimePredicted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:42`*

---

### `WEAPON:PrintWeaponInfo` `[client]`

A convenience function that draws the weapon info box, used in WEAPON:DrawWeaponSelection.

**Argumentos:**

- `number x` — The x co-ordinate of box position
- `number y` — The y co-ordinate of box position
- `number alpha` — Alpha value for the box

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/cl_init.lua:63`*

---

### `WEAPON:Reload` `[client/server]`

Called when the reload key ( +reload ) is pressed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:RenderScreen` `[client]`

Called every frame just before GM:RenderScene.

Used by the Tool Gun to render view model screens (TOOL:DrawToolScreen).

Materials rendered in this hook require $ignorez parameter to draw properly.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:SecondaryAttack` `[client/server]`

Called when secondary attack button ( +attack2 ) is pressed.

For issues with this hook being called rapidly on the client side, see the global function Global.IsFirstTimePredicted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:66`*

---

### `WEAPON:SetWeaponHoldType` `[client/server]`

Sets the hold type of the weapon. This must be called on **both** the server and the client to work properly.

You should avoid calling this function and call Weapon:SetHoldType now.

**Argumentos:**

- `string name` — Name of the hold type. You can find all default hold types Hold_Types

**Retorna:**

*(sin retorno)*

---

### `WEAPON:SetupDataTables` `[client/server]`

Called when the SWEP should set up its Networking_Entities.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:ShootBullet` `[client/server]`

A convenient function to shoot bullets.

**Argumentos:**

- `number damage` — The damage of the bullet
- `number num_bullets` — Amount of bullets to shoot
- `number aimcone` — Spread of bullets
- `string ammo_type` = `self.Primary.Ammo` — Ammo type of the bullets
- `number force` = `1` — Force of the bullets
- `number tracer` = `5` — Show a tracer on every x bullets

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:132`*

---

### `WEAPON:ShootEffects` `[client/server]`

A convenience function to create shoot effects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:122`*

---

### `WEAPON:ShouldDrawViewModel` `[client]`

Called to determine if the view model should be drawn or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to draw the view model, false otherwise.

---

### `WEAPON:ShouldDropOnDie` `[server]`

Should this weapon be dropped when its owner dies?

This only works if the player has Player:ShouldDropWeapon set to true.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to drop the weapon, false otherwise. Default ( if you don't return anything ) is false.

---

### `WEAPON:TakePrimaryAmmo` `[client/server]`

A convenience function to remove primary ammo from clip.

**Argumentos:**

- `number amount` — Amount of primary ammo to remove

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:162`*

---

### `WEAPON:TakeSecondaryAmmo` `[client/server]`

A convenience function to remove secondary ammo from clip.

**Argumentos:**

- `number amount` — How much of secondary ammo to remove

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/weapons/weapon_base/shared.lua:181`*

---

### `WEAPON:Think` `[client/server]`

Called when the weapon thinks.

This hook won't be called during the deploy animation and when using Weapon:DefaultReload.

If you wish for this hook to be called during the deploy animation, add the following to the model's **ACT_VM_DRAW** sequence: `node "Ready"`

Despite being a predicted hook, this hook is called clientside in single player (for your convenience), however it will not be recognized as a predicted hook via Player:GetCurrentCommand, and will run more often in this case.

This hook will be called before Player movement is processed on the client, and after on the server.

This hook only runs while the weapon is in players hands. It does not run while it is carried by an NPC.
This will not be run during deploy animations after a serverside-only deploy. This usually happens after picking up and dropping an object with +use.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:Tick` `[client/server]`

Use Weapon:Think instead.

Alias of Weapon:Think.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `WEAPON:TranslateActivity` `[client/server]`

Translate a generic activity into a more specific activity, such as holdtype-specific activities.

The translated activity is then used to request animations from the owner's model via Entity:SelectWeightedSequence and similar functions.

For example, `ACT_MP_RUN` becomes `ACT_HL2MP_RUN_PISTOL`.

**Argumentos:**

- `number{ACT} act` — The activity to translate

**Retorna:**

- `number{ACT} act` — The translated activity

---

### `WEAPON:TranslateFOV` `[client/server]`

Allows to change players field of view while player holds the weapon.

This hook must be defined shared and return same value on both to properly affect Area Portals.

**Argumentos:**

- `number fov` — The current/default FOV.

**Retorna:**

- `number` — The target FOV.

---

### `WEAPON:ViewModelDrawn` `[client]`

Called straight after the view model has been drawn. This is called before GM:PostDrawViewModel and WEAPON:PostDrawViewModel.

See WEAPON:DrawWorldModel for world model rendering.

See also WEAPON:PreDrawViewModel and WEAPON:PostDrawViewModel.

**Argumentos:**

- `Entity ViewModel` — Players view model
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*