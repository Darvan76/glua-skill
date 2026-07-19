# Player

---

This is a list of all methods only available for players. It is also possible to call Entity functions on the Player.

---


## Miembros (270)


---

### `Player:AccountID` `[client/server]`

Returns the player's AccountID part of their full SteamID.

Since this does not include other vital parts of the SteamID such as "Account Type" and "Account Instance", it should be avoided, as AccountIDs are finite, and can theoretically be the same for multiple valid accounts.

See Player:SteamID for the text representation of the full SteamID.
See Player:SteamID64 for a 64bit representation of the full SteamID.

In a `-multirun` environment, this will return `-1` for all "copies" of a player because they are not authenticated with Steam.

For bots this will return values starting with `0` for the first bot, `1` for the second bot and so on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The AccountID of Player's SteamID.

---

### `Player:AddCleanup` `[server]`

This function is only available in Sandbox and its derivatives.Adds an entity to the player's clean up list. This uses cleanup.Add internally.

**Argumentos:**

- `string type` — The Cleanup type for this Entity.
- `Entity ent` — The Entity to add.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:107`*

---

### `Player:AddCount` `[client/server]`

This function is only available in Sandbox and its derivatives.Adds an entity to the player's list of entities of the same type. See Player:GetCount to get the current count of entities of an entity type added with this function.

**Argumentos:**

- `string str` — The type of this Entity.
- `Entity ent` — The Entity you want to add to the list.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:72`*

---

### `Player:AddDeaths` `[server]`

Adds the provided amount to the player's death count.

**Argumentos:**

- `number count` — The amount to add to the death count.

**Retorna:**

*(sin retorno)*

---

### `Player:AddFrags` `[server]`

Adds the provided amount to the player's frag/kill count.

**Argumentos:**

- `number count` — The amount to add.

**Retorna:**

*(sin retorno)*

---

### `Player:AddFrozenPhysicsObject` `[server]`

Adds an entity to the player's list of frozen objects.

**Argumentos:**

- `Entity ent` — The Entity to add.
- `PhysObj physobj` — The physics object of the Entity.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/obj_player_extend.lua:9`*

---

### `Player:AddPlayerOption` `[client]`

Sets up the voting system for the player.
This is a really barebone system. By calling this a vote gets started, when the player presses 0-9 the callback function gets called along with the key the player pressed. Use the draw callback to draw the vote panel.

**Argumentos:**

- `string name` — Name of the vote
- `number timeout` — Time until the vote expires
- `function vote_callback` — The function to be run when the player presses 0-9 while a vote is active.

Which option the player pressed, 1-9 and 0 being the very last option.
Return true to remove this option from the vote.
- `function draw_callback` — Used to draw the vote panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/player.lua:21`*

---

### `Player:AddVCDSequenceToGestureSlot` `[client/server]`

Plays a sequence directly from a sequence number, similar to Player:AnimRestartGesture. This function has the advantage to play sequences that haven't been bound to an existing Enums/ACT
This is not automatically networked. This function has to be called on the client to be seen by said client.

**Argumentos:**

- `number slot` — Gesture slot using Enums/GESTURE_SLOT
- `number sequenceId` — The sequence ID to play, can be retrieved with Entity:LookupSequence.
- `number cycle` — The cycle to start the animation at, ranges from 0 to 1.
- `boolean autokill` = `false` — If the animation should not loop. true = stops the animation, false = the animation keeps playing.

**Retorna:**

*(sin retorno)*

---

### `Player:Alive` `[client/server]`

Checks if the player is alive.

Player specific implementation of Entity:Alive, the value is synchronized to the client.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is alive

---

### `Player:AllowFlashlight` `[client/server]`

Sets if the player can toggle their flashlight. Function exists on both the server and client but has no effect when ran on the client.

This is a Lua method that internally uses GM:PlayerSwitchFlashlight. If current gamemode overwrites that hook and doesn't respect Player:CanUseFlashlight, this function will not have any effect.

**Argumentos:**

- `boolean canFlashlight` — True allows flashlight toggling

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:182`*

---

### `Player:AllowImmediateDecalPainting` `[server]`

Lets the player spray their decal without delay

**Argumentos:**

- `boolean allow` — Allow or disallow

**Retorna:**

*(sin retorno)*

---

### `Player:AnimResetGestureSlot` `[client/server]`

Resets player gesture in selected slot.

**Argumentos:**

- `number slot` — Slot to reset. See the Enums/GESTURE_SLOT.

**Retorna:**

*(sin retorno)*

---

### `Player:AnimRestartGesture` `[client/server]`

Restart a gesture on a player, within a gesture slot.

This is not automatically networked. This function has to be called on the client to be seen by said client.

**Argumentos:**

- `number slot` — Gesture slot using Enums/GESTURE_SLOT
- `number activity` — The activity ( see Enums/ACT ) or sequence that should be played
- `boolean autokill` = `false` — Whether the animation should be automatically stopped. true = stops the animation, false = the animation keeps playing/looping

**Retorna:**

*(sin retorno)*

---

### `Player:AnimRestartMainSequence` `[client/server]`

Restarts the main animation on the player, has the same effect as calling Entity:SetCycle( 0 ).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:AnimSetGestureSequence` `[client/server]`

Sets the sequence of the animation playing in the given gesture slot.

**Argumentos:**

- `number slot` — The gesture slot. See Enums/GESTURE_SLOT
- `number sequenceID` — Sequence ID to set.

**Retorna:**

*(sin retorno)*

---

### `Player:AnimSetGestureWeight` `[client/server]`

Sets the weight of the animation playing in the given gesture slot.

**Argumentos:**

- `number slot` — The gesture slot. See Enums/GESTURE_SLOT
- `number weight` — The weight this slot should be set to. Value must be ranging from 0 to 1.

**Retorna:**

*(sin retorno)*

---

### `Player:Armor` `[client/server]`

Returns the player's armor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The player's armor.

---

### `Player:Ban` `[server]`

Bans the player from the server for a certain amount of minutes.

**Argumentos:**

- `number minutes` — Duration of the ban in minutes (0 is permanent)
- `boolean kick` = `false` — Whether to kick the player after banning them or not

**Retorna:**

*(sin retorno)*

---

### `Player:CanUseFlashlight` `[client/server]`

Returns true if the player's flashlight hasn't been disabled by Player:AllowFlashlight.

This is not synchronized between clients and server automatically!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player can use flashlight.

*Fuente: `lua/includes/extensions/player.lua:183`*

---

### `Player:ChatPrint` `[client/server]`

Prints a string to the chatbox of the client.

Just like the usermessage, this function is affected by the 255 byte limit!

**Argumentos:**

- `string message` — String to be printed

**Retorna:**

*(sin retorno)*

---

### `Player:CheckLimit` `[client/server]`

Checks if the limit of an entity type added by Player:AddCount is hit or not. If it's hit, it will call the GM:PlayerCheckLimit hook, and call Player:LimitHit if the hook doesn't return `false`.

This will always return `true` in singleplayer, as singleplayer does not have limits.

This function is only available in Sandbox and its derivatives.

**Argumentos:**

- `string str` — The entity type to check the limit for. Default types:
* "constraints"
* "props"
* "ragdolls"
* "vehicles"
* "effects"
* "balloons"
* "cameras"
* "npcs"
* "sents"
* "dynamite"
* "lamps"
* "lights"
* "wheels"
* "thrusters"
* "hoverballs"
* "buttons"
* "emitters"

**Retorna:**

- `boolean` — Returns `true` if the limit of this type is not hit, `false` otherwise.

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:9`*

---

### `Player:ConCommand` `[client/server]`

Runs the concommand on the player. This does not work on bots. If used clientside, always runs the command on the local player.

If you wish to directly modify the movement input of bots, use GM:StartCommand instead.

Some commands/convars are blocked from being run/changed using this function, usually to prevent harm/annoyance to clients. For a list of blocked commands, see Blocked ConCommands.

**Argumentos:**

- `string command` — command to run

**Retorna:**

*(sin retorno)*

---

### `Player:CreateRagdoll` `[server]`

Creates the player's death ragdoll entity and deletes the old one.

This is normally used when a player dies, to create their death ragdoll.

The ragdoll will be created with the player's properties such as Entity:GetPos, Entity:GetAngles, Player:GetPlayerColor, Entity:GetVelocity and Entity:GetModel.

You can retrieve the entity this creates with Player:GetRagdollEntity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:CrosshairDisable` `[server]`

Disables the default player's crosshair. Can be reenabled with Player:CrosshairEnable. This will affect WEAPON:DoDrawCrosshair.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:CrosshairEnable` `[server]`

Enables the player's crosshair, if it was previously disabled via Player:CrosshairDisable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:Crouching` `[client/server]`

Returns whether the player is crouching or not (Enums/FL flag).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is crouching.

---

### `Player:Deaths` `[client/server]`

Returns the player's death count

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of deaths the player has had.

---

### `Player:DebugInfo` `[client/server]`

Prints the players' name and position to the console.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:48`*

---

### `Player:DetonateTripmines` `[server]`

Detonates all tripmines belonging to the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:DisableWorldClicking` `[server]`

Disables world clicking for given player. See Panel:SetWorldClicker and Player:IsWorldClickingDisabled.

**Argumentos:**

- `boolean disable` — Whether the world clicking should be disabled.

**Retorna:**

*(sin retorno)*

---

### `Player:DoAnimationEvent` `[client/server]`

Sends a third person animation event to the player.

Calls GM:DoAnimationEvent with Enums/PLAYERANIMEVENT as the event, data as the given data.

**Argumentos:**

- `number data` — The data to send.

**Retorna:**

*(sin retorno)*

---

### `Player:DoAttackEvent` `[client/server]`

Starts the player's attack animation. The attack animation is determined by the weapon's HoldType.

Similar to other animation event functions, calls GM:DoAnimationEvent with Enums/PLAYERANIMEVENT as the event and no extra data.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:DoCustomAnimEvent` `[client/server]`

Sends a specified third person animation event to the player.

Calls GM:DoAnimationEvent with specified arguments.

**Argumentos:**

- `number event` — The event to send. See Enums/PLAYERANIMEVENT.
- `number data` — The data to send alongside the event.

**Retorna:**

*(sin retorno)*

---

### `Player:DoReloadEvent` `[client/server]`

Sends a third person reload animation event to the player.

Similar to other animation event functions, calls GM:DoAnimationEvent with Enums/PLAYERANIMEVENT as the event and no extra data.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:DoSecondaryAttack` `[client/server]`

Sends a third person secondary fire animation event to the player.

Similar to other animation event functions, calls GM:DoAnimationEvent with Enums/PLAYERANIMEVENT as the event and no extra data.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:DrawViewModel` `[client/server]`

Show/Hide the player's weapon's viewmodel.

**Argumentos:**

- `boolean draw` — Should draw
- `number vm` = `0` — Which view model to show/hide, 0-2.

**Retorna:**

*(sin retorno)*

---

### `Player:DrawWorldModel` `[server]`

Show/Hide the player's weapon's worldmodel.

**Argumentos:**

- `boolean draw` — Should draw

**Retorna:**

*(sin retorno)*

---

### `Player:DropNamedWeapon` `[server]`

Drops the players' weapon of a specific class.

**Argumentos:**

- `string class` — The class to drop.
- `Vector target` = `nil` — If set, launches the weapon at given position. There is a limit to how far it is willing to throw the weapon. Overrides velocity argument.
- `Vector velocity` = `nil` — If set and previous argument is unset, launches the weapon with given velocity. If the velocity is higher than 400, it will be clamped to 400.

**Retorna:**

*(sin retorno)*

---

### `Player:DropObject` `[server]`

Drops any object the player is currently holding with either Gravity Gun, Physics Gun or `+use` (E key)

See also Entity:ForcePlayerDrop.

**Argumentos:**

- `Entity entity` = `nil` — Only drop if the held entity is this entity. If left blank, drop any held entity.

**Retorna:**

*(sin retorno)*

---

### `Player:DropWeapon` `[server]`

Forces the player to drop the specified weapon

**Argumentos:**

- `Weapon weapon` = `nil` — Weapon to be dropped. If unset, will default to the currently equipped weapon.
- `Vector target` = `nil` — If set, launches the weapon at given position. There is a limit to how far it is willing to throw the weapon. Overrides velocity argument.
- `Vector velocity` = `nil` — If set and previous argument is unset, launches the weapon with given velocity. If the velocity is higher than 400, it will be clamped to 400.

**Retorna:**

*(sin retorno)*

---

### `Player:EnterVehicle` `[server]`

Force puts the player into a specified vehicle.
This **does not** bypass GM:CanPlayerEnterVehicle.

**Argumentos:**

- `Vehicle vehicle` — Vehicle the player will enter

**Retorna:**

*(sin retorno)*

---

### `Player:EquipSuit` `[server]`

Equips the player with the HEV suit.

Allows the player to zoom, walk slowly, sprint, pickup armor batteries, use the health and armor stations and also shows the HUD.
The player also emits a flatline sound on death, which can be overridden with GM:PlayerDeathSound.

The player is automatically equipped with the suit on spawn, if you wish to stop that, use Player:RemoveSuit.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:ExitLadder` `[server]`

Forces the player off the current ladder if they are on one.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:ExitVehicle` `[server]`

Forces the player to exit the vehicle if they're in one.

This function will bypass GM:CanExitVehicle. See also GM:PlayerLeaveVehicle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:Flashlight` `[server]`

Enables/Disables the player's flashlight.

Player:CanUseFlashlight must be true in order for the player's flashlight to be changed.
GM:PlayerSwitchFlashlight can block this function.

Added in [2025.11.12](https://gmod.facepunch.com/changelist/4026), the `gmod_flashlight` attachment is used as a source for the player's flashlight. In thirdperson, the playermodel and weapon worldmodel are checked; in firstperson, the viewmodel is checked. If the attachment isn't found, default engine functionality is used.

The light sprite attached to the playermodel when the flashlight is on will also follow the playermodel's `gmod_flashlight` attachment if it exists.

**Argumentos:**

- `boolean isOn` — Turns the flashlight on/off

**Retorna:**

*(sin retorno)*

---

### `Player:FlashlightIsOn` `[client/server]`

Returns true if the player's flashlight is on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player's flashlight is on.

---

### `Player:Frags` `[client/server]`

Returns the amount of frags a player has.

The value will change depending on the player's kill or suicide: +1 for a kill, -1 for a suicide.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — frags

---

### `Player:Freeze` `[server]`

Freeze the player. Frozen players cannot move, look around, or attack. Key bindings are still called. Similar to Player:Lock but the player can still take damage.

Manages the Enums/FL#FL_FROZEN flag on the player.

**Argumentos:**

- `boolean frozen` = `false` — Whether the player should be frozen.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:212`*

---

### `Player:GetActiveWeapon` `[client/server]`

Returns the player's active weapon.

If used on a Global.LocalPlayer() and the player is spectating another player with `OBS_MODE_IN_EYE`, the weapon returned will be of the spectated player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Weapon` — The weapon the player currently has equipped or NULL if the player doesn't have an active weapon eg. when they're dead.

---

### `Player:GetActivity` `[server]`

Returns the player's current activity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number act` — The player's current activity. See Enums/ACT.

---

### `Player:GetAimVector` `[client/server]`

Returns the direction that the player is aiming.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The direction vector of players aim

---

### `Player:GetAllowFullRotation` `[client/server]`

Returns true if the players' model is allowed to rotate around the pitch and roll axis.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Allowed

---

### `Player:GetAllowWeaponsInVehicle` `[client/server]`

Returns whether the player is allowed to use their weapons in a vehicle or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is allowed to use their weapons in a vehicle or not.

---

### `Player:GetAmmo` `[client/server]`

Returns a table of all ammo the player has.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with the following format
* number Key - AmmoID to be used with functions like game.GetAmmoName.
* number Value - Amount of ammo the player has of this kind.

---

### `Player:GetAmmoCount` `[client/server]`

Gets the amount of ammo the player has.

**Argumentos:**

- `any ammotype` — The ammunition type. Can be either number ammo ID or string ammo name.

**Retorna:**

- `number` — The amount of ammo player has in reserve.

---

### `Player:GetAvoidPlayers` `[client/server]`

Gets if the player will be pushed out of nocollided players.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — pushed

---

### `Player:GetCanWalk` `[client/server]`

Returns true if the player is able to walk using the (default) alt key.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — AbleToWalk

---

### `Player:GetCanZoom` `[client/server]`

Determines whenever the player is allowed to use the zoom functionality.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — canZoom

---

### `Player:GetClassID` `[client/server]`

Returns the player's class id.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The player's class id.

---

### `Player:GetCount` `[client/server]`

This function is only available in Sandbox and its derivatives.Gets the total amount of entities of an entity type added by Player:AddCount.

Default types:
```
balloons
buttons
cameras
dynamite
effects
emitters
hoverballs
lamps
lights
npcs
props
ragdolls
sents
thrusters
vehicles
wheels
```

**Argumentos:**

- `string type` — Type to get entity count of.
- `number minus` = `0` — If specified, it will reduce the counter by this value. Works only serverside.

**Retorna:**

- `number count` — The returned count.

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:34`*

---

### `Player:GetCrouchedWalkSpeed` `[client/server]`

Returns the crouched walk speed multiplier.

See also Player:GetWalkSpeed and Player:SetCrouchedWalkSpeed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The crouched walk speed multiplier.

---

### `Player:GetCurrentCommand` `[client/server]`

Returns the last command which was sent by the specified player. This can only be called on the player which Global.GetPredictionPlayer() returns.

When called clientside in singleplayer during WEAPON:Think, it will return nothing as the hook is not technically predicted in that instance. See the note on the page.

This will fail in GM:StartCommand.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CUserCmd` — Last user commands

---

### `Player:GetCurrentViewOffset` `[client/server]`

Gets the current applied view offset, which transitions between the player's standing and ducked view offset depending on their duck state.

Do not confuse with Player:GetViewOffset and Player:GetViewOffsetDucked, which always return the standing or ducked offset respectively.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The actual view offset.

---

### `Player:GetDrivingEntity` `[client/server]`

Gets the entity the player is currently driving via the drive library.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The currently driven entity, or NULL entity

---

### `Player:GetDrivingMode` `[client/server]`

Returns driving mode of the player. See Entity Driving.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The drive mode ID or 0 if player doesn't use the drive system.

---

### `Player:GetDuckSpeed` `[client/server]`

Returns a player's duck speed (in seconds)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — duckspeed

---

### `Player:GetEntityInUse` `[client/server]`

Returns the entity the player is currently using, like func_tank mounted turrets or +use prop pickups.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — Entity in use, or NULL entity otherwise. For +use prop pickups, this will be NULL clientside.

---

### `Player:GetEyeTrace` `[client/server]`

Returns a table with information of what the player is looking at.

The results of this function are **cached** clientside every frame.

Uses util.GetPlayerTrace internally and is therefore bound by its limits.

See also Player:GetEyeTraceNoCursor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{TraceResult}` — Trace information, see Structures/TraceResult.

*Fuente: `gamemodes/base/gamemode/obj_player_extend.lua:172`*

---

### `Player:GetEyeTraceNoCursor` `[client/server]`

Returns the trace according to the players view direction, ignoring their mouse (holding C and moving the mouse in Sandbox).

The results of this function are **cached** clientside every frame.

Uses util.GetPlayerTrace internally and is therefore bound by its limits.

See also Player:GetEyeTrace.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{TraceResult}` — Trace result. See Structures/TraceResult.

*Fuente: `gamemodes/base/gamemode/obj_player_extend.lua:194`*

---

### `Player:GetFOV` `[client/server]`

Returns the FOV of the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Field of view as a float

---

### `Player:GetFlashlightColor` `[client]`

Returns the color of a player's flashlight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — Flashlight color

---

### `Player:GetFriendStatus` `[client]`

Returns the steam "relationship" towards the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Should return one of four different things depending on their status on your friends list: "friend", "blocked", "none", "requested" or "error_nofriendid" for bots.

---

### `Player:GetHands` `[client/server]`

Gets the hands entity of a player

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The hands entity if players has one

---

### `Player:GetHoveredWidget` `[client/server]`

Returns the widget the player is hovering with their mouse.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The hovered widget.

---

### `Player:GetHull` `[client/server]`

Retrieves the minimum and maximum Vector of the [Axis-Aligned Bounding Box (AABB)](https://en.wikipedia.org/wiki/Minimum_bounding_box) used for the Player physics and movement util.TraceHull.

See also: Player:SetHull, Player:SetHullDuck, Player:GetHullDuck

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector mins` — The hull mins, the lowest corner of the Player's bounding box.
- `Vector maxs` — The hull maxs, the highest corner of the Player's bounding box, opposite of the mins.

---

### `Player:GetHullDuck` `[client/server]`

Retrieves the minimum and maximum Vector of the [Axis-Aligned Bounding Box (AABB)](https://en.wikipedia.org/wiki/Minimum_bounding_box) used for the Player physics and movement util.TraceHull while they are crouching (or "Ducking").

See also: Player:SetHullDuck, Player:GetHull, Player:SetHull

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector mins` — The hull mins, the lowest corner of the Player's bounding box while crouching.
- `Vector maxs` — The hull maxs, the highest corner of the Player's crouching bounding box, opposite of the mins.

---

### `Player:GetInfo` `[client/server]`

Retrieves the value of a client-side ConVar. The ConVar must have a Enums/FCVAR flag for this to work.

On client this function will return value of the local player, regardless of which player the function was called on!

See Player:GetInfoNum for the same function that automatically converts the string to a number.

**Argumentos:**

- `string cVarName` — The name of the client-side ConVar.

**Retorna:**

- `string` — The value of the ConVar. Or an empty string if the convar doesn't exist.

The returned value is truncated to 259 bytes.

---

### `Player:GetInfoNum` `[client/server]`

Retrieves the numeric value of a client-side convar, returns nil if value is not convertible to a number. The ConVar must have a Enums/FCVAR flag for this to work.

**Argumentos:**

- `string cVarName` — The name of the ConVar to query the value of
- `number default` — Default value if we failed to retrieve the number.

**Retorna:**

- `number` — The value of the ConVar or the default value

---

### `Player:GetJumpPower` `[client/server]`

Returns the jump power of the player

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Jump power

---

### `Player:GetLadderClimbSpeed` `[client/server]`

Returns the player's ladder climbing speed.

See Player:GetWalkSpeed for normal walking speed, Player:GetRunSpeed for sprinting speed and Player:GetSlowWalkSpeed for slow walking speed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number speed` — The ladder climbing speed.

---

### `Player:GetLaggedMovementValue` `[client/server]`

Returns the timescale multiplier of the player movement.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The timescale multiplier, defaults to `1`.

---

### `Player:GetMaxArmor` `[client/server]`

Returns the maximum amount of armor the player should have. Default value is 100.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number maxarmor` — The new max armor value

---

### `Player:GetMaxSpeed` `[client/server]`

Returns the player's maximum movement speed.

See also Player:SetMaxSpeed, Player:GetWalkSpeed and Player:GetRunSpeed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum movement speed the player can go at.

---

### `Player:GetName` `[client/server]`

Returns the player's name, this is an alias of Player:Nick.

Use Player:Nick.

This function overrides Entity:GetName (in the Lua metatable, not in c++), keep it in mind when dealing with ents.FindByName or any engine function which requires the mapping name.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The player's name.

*Fuente: `lua/includes/extensions/player.lua:56`*

---

### `Player:GetNoCollideWithTeammates` `[client/server]`

Returns whenever the player is set not to collide with their teammates.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — noCollideWithTeammates

---

### `Player:GetObserverMode` `[client/server]`

Returns the the observer mode of the player

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Observe mode of that player, see Enums/OBS_MODE.

---

### `Player:GetObserverTarget` `[client/server]`

Returns the entity the player is currently observing.

Set using Player:SpectateEntity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity the player is currently spectating, or Global_Variables if the player has no target.

---

### `Player:GetPData` `[client/server]`

Returns a **P**ersistent **Data** key-value pair from the SQL database. (`sv.db` when called on server, `cl.db` when called on client)

Internally uses the sql library. See util.GetPData for cases when the player is not currently on the server.

This function internally uses Player:SteamID64, it previously utilized Player:UniqueID which can cause collisions (two or more players sharing the same PData entry). Player:SetPData now replaces all instances of Player:UniqueID with Player:SteamID64 when running Player:SetPData

PData is not networked from servers to clients!

**Argumentos:**

- `string key` — Name of the PData key
- `any default` = `nil` — Default value if PData key doesn't exist.

**Retorna:**

- `string` — The data in the SQL database or the default value given.

*Fuente: `lua/includes/extensions/player.lua:111`*

---

### `Player:GetPlayerColor` `[client/server]`

Returns a player's character model color.

The part of the model that is colored is determined by the model's materials, and is therefore different for each model.

See Player:GetWeaponColor for the accompanying function for the weapon color.

Override this function clientside on any Entity (including a player) with a supported model set (such as default player models) and returned color will apply to the model. This is done via the `PlayerColor` matproxy.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The format is `Vector(r,g,b)`, and each color component should be between 0 and 1.

---

### `Player:GetPlayerInfo` `[client/server]`

Returns a table containing player information.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table containing player information.

---

### `Player:GetPreferredCarryAngles` `[server]`

Returns the preferred carry angles of an object, if any are set.

Calls GM:GetPreferredCarryAngles with the target entity and returns the carry angles.

**Argumentos:**

- `Entity carryEnt` — Entity to retrieve the carry angles of.

**Retorna:**

- `Angle` — Carry angles or nil if the entity has no preferred carry angles.

---

### `Player:GetPressedWidget` `[client/server]`

Returns the widget entity the player is using.

Having a pressed widget stops the player from firing their weapon to allow input to be passed onto the widget.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The pressed widget.

---

### `Player:GetPreviousWeapon` `[client/server]`

Returns the weapon the player previously had equipped.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The previous weapon of the player.

This is not guaranteed to be a weapon entity so it should be checked with Entity:IsWeapon for safety.

---

### `Player:GetPunchAngle` `[client/server]`

You should use Player:GetViewPunchAngles instead.
Returns players screen punch effect angle. See Player:ViewPunch and Player:SetViewPunchAngles

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The punch angle

---

### `Player:GetRagdollEntity` `[client/server]`

Returns players death ragdoll. The ragdoll is created by Player:CreateRagdoll.
Calling Entity:GetPos server-side with this function then will return the position where Player:CreateRagdoll was used, as it is a hl2mp_ragdoll which is a serverside point entity that creates a clientside ragdoll for everyone (opposed to prop_ragdoll that is serverside and networks).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The ragdoll.

Unlike normal clientside ragdolls (`C_ClientRagdoll`), this will be a `C_HL2MPRagdoll` on the client, and `hl2mp_ragdoll` on the server.

---

### `Player:GetRenderAngles` `[client/server]`

Returns the render angles for the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The render angles of the player. Only **yaw** part of the angle seems to be present.

---

### `Player:GetRunSpeed` `[client/server]`

Returns the player's sprint speed.

See also Player:SetRunSpeed, Player:GetWalkSpeed and Player:GetMaxSpeed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The sprint speed

---

### `Player:GetShootPos` `[client/server]`

Returns the position of a Player's view

This is the same as calling Entity:EyePos on the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the player's view.

---

### `Player:GetSlowWalkSpeed` `[client/server]`

Returns the player's slow walking speed, which is activated via +WALK keybind.

See Player:GetWalkSpeed for normal walking speed, Player:GetRunSpeed for sprinting speed and Player:GetLadderClimbSpeed for ladder climb speed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number speed` — The new slow walking speed.

---

### `Player:GetStepSize` `[client/server]`

Returns the maximum height player can step onto.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum height player can get up onto without jumping, in hammer units.

---

### `Player:GetSuitPower` `[client/server]`

Returns the player's HEV suit power.

This will only work for the local player when used clientside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current suit power.

---

### `Player:GetTimeoutSeconds` `[server]`

Returns the number of seconds that the player has been timing out for. You can check if a player is timing out with Player:IsTimingOut.

This function is relatively useless because it is tied to the value of the `sv_timeout` ConVar, which is irrelevant to the description above. [This is not considered as a bug](https://discord.com/channels/565105920414318602/567617926991970306/748970396224585738).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Timeout seconds.

---

### `Player:GetTool` `[client/server]`

Returns Structures/TOOL table of players current tool, or of the one specified.

**Argumentos:**

- `string mode` = `nil` — Classname of the tool to retrieve. ( Filename of the tool in gmod_tool/stools/ )

**Retorna:**

- `table` — TOOL table, or nil if the table wasn't found or the player doesn't have a tool gun.

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:105`*

---

### `Player:GetUnDuckSpeed` `[client/server]`

Returns a player's unduck speed (in seconds)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — unduck speed

---

### `Player:GetUseEntity` `[client/server]`

Returns the entity the player would use if they would press their `+use` keybind.
Because entity physics objects usually do not exist on the client, the client's use entity will resolve to whatever the crosshair is placed on within a little less than 72 units of the player's eye position. This differs from the entity returned by the server, which has fully physical use checking. See util.TraceHull.

Issue tracker: [5027](https://github.com/Facepunch/garrysmod-issues/issues/5027)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity ent` — The entity that would be used or NULL.

---

### `Player:GetUserGroup` `[client/server]`

Returns the player's user group. By default, player user groups are loaded from `garrysmod/settings/users.txt`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The user group of the player. This will return `"user"` if player has no user group.

*Fuente: `lua/includes/extensions/player_auth.lua:44`*

---

### `Player:GetVehicle` `[client/server]`

Returns the vehicle the player is driving.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vehicle` — The vehicle the player is currently driving, if any.

Returns NULL entity if the player is not driving.

---

### `Player:GetViewEntity` `[client/server]`

Returns the entity the player is using to see from (such as the player itself, the camera, or another entity).

This function will return a [NULL Entity] until Player:SetViewEntity has been used.

It will also not return the currently spectated entity. See Player:GetObserverTarget.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity the player is using to see from

---

### `Player:GetViewModel` `[client/server]`

Returns the player's view model entity by the index.
Each player has 3 view models by default, but only the first one is used.

To use the other viewmodels in your SWEP, see Entity:SetWeaponModel.

In the Client States, other players' viewmodels are not available unless they are being spectated.

**Argumentos:**

- `number index` = `0` — optional index of the view model to return, can range from 0 to 2

**Retorna:**

- `Entity` — The view model entity

---

### `Player:GetViewOffset` `[client/server]`

Returns the view offset of the player, which equals the difference between the player's actual position and their view when standing.

See also Player:GetViewOffsetDucked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — New view offset, must be local vector to player's Entity:GetPos

---

### `Player:GetViewOffsetDucked` `[client/server]`

Returns the ducked view offset of the player, which equals the difference between the player's actual position and their view when ducked.

See also Player:GetViewOffset.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — New crouching view offset, must be local vector to player's Entity:GetPos

---

### `Player:GetViewPunchAngles` `[client/server]`

Returns players screen punch effect angle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The punch angle

---

### `Player:GetViewPunchVelocity` `[client/server]`

Returns client's view punch velocity. See Player:ViewPunch and Player:SetViewPunchVelocity

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle punchVel` — The current view punch angle velocity.

---

### `Player:GetVoiceVolumeScale` `[client]`

Returns the current voice volume scale for given player on client.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The voice volume scale, where 0 is 0% and 1 is 100%.

---

### `Player:GetWalkSpeed` `[client/server]`

Returns the player's normal walking speed. Not sprinting, not slow walking. (+walk)

See also Player:SetWalkSpeed, Player:GetMaxSpeed and Player:GetRunSpeed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The normal walking speed.

---

### `Player:GetWeapon` `[client/server]`

Returns the weapon for the specified class

**Argumentos:**

- `string className` — Class name of weapon

**Retorna:**

- `Weapon` — The weapon for the specified class, or NULL ENTITY if the player does not have this weapon.

---

### `Player:GetWeaponColor` `[client/server]`

Returns a player's weapon color.

The part of the model that is colored is determined by the model itself, and is different for each model.

See Player:GetPlayerColor for the accompanying function for the player character model color.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The format is `Vector(r,g,b)`, and each color should be between 0 and 1.

---

### `Player:GetWeapons` `[client/server]`

Returns a table of the player's weapons.

This function returns a sequential table. Prefer to loop it with Global.ipairs instead of the Global.pairs function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — All the weapons the player currently has.

---

### `Player:Give` `[server]`

Gives the player a weapon.

This function will call GM:PlayerCanPickupWeapon. If that hook returns false, this function will do nothing.

While this function is meant for weapons/pickupables only, it is **not** restricted to weapons. Any entity can be spawned using this function, including NPCs and SENTs.

**Argumentos:**

- `string weaponClassName` — Class name of weapon to give the player
- `boolean bNoAmmo` = `false` — Set to true to not give any ammo on weapon spawn. (Reserve ammo set by DefaultClip)

**Retorna:**

- `Weapon` — The weapon given to the player, if one was given. It will return NULL if the player already has the weapon, or the weapon entity (entity with given classname) doesn't exist.

---

### `Player:GiveAmmo` `[server]`

Gives ammo to a player

**Argumentos:**

- `number amount` — Amount of ammo
- `string type` — Type of ammo.
This is a string for named ammo types, and a number for ammo ID.

You can find a list of default ammo types Default_Ammo_Types.
- `boolean hidePopup` = `false` — Hide display popup when giving the ammo

**Retorna:**

- `number` — Ammo given.

---

### `Player:GodDisable` `[server]`

Disables god mode on the player. Removes the Enums/FL#FL_GODMODE flag from the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:232`*

---

### `Player:GodEnable` `[server]`

Enables god mode on the player. Adds the Enums/FL#FL_GODMODE flag to the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:222`*

---

### `Player:HasGodMode` `[client/server]`

Returns whether the player has god mode or not, contolled by Player:GodEnable and Player:GodDisable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player has god mode or not.

*Fuente: `lua/includes/extensions/player.lua:254`*

---

### `Player:HasWeapon` `[client/server]`

Returns if the player has the specified weapon

**Argumentos:**

- `string className` — Class name of the weapon

**Retorna:**

- `boolean` — True if the player has the weapon

---

### `Player:IPAddress` `[server]`

Returns the player's IP address and connection port in ip:port form
Returns `Error!` for bots.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string ip` — The player's IP address and connection port

---

### `Player:InVehicle` `[client/server]`

Returns if the player is in a vehicle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is in a vehicle.

---

### `Player:IsAdmin` `[client/server]`

Returns whether the player is an admin or not. It will also return `true` if the player is Player:IsSuperAdmin by default.

Internally this is determined by Player:IsUserGroup.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the player is an admin or a super admin.

*Fuente: `lua/includes/extensions/player_auth.lua:9`*

---

### `Player:IsBot` `[client/server]`

Returns if the player is an bot or not

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the player is a bot.

---

### `Player:IsConnected` `[server]`

Returns true from the point when the player is sending client info but not fully in the game until they disconnect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isConnected

---

### `Player:IsDrivingEntity` `[client/server]`

Used to find out if a player is currently 'driving' an entity (by which we mean 'right click &gt; drive' ).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — A value representing whether or not the player is 'driving' an entity.

---

### `Player:IsFrozen` `[client/server]`

Returns whether the players movement is currently frozen, controlled by Player:Freeze.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the players movement is currently frozen or not.

*Fuente: `lua/includes/extensions/player.lua:244`*

---

### `Player:IsFullyAuthenticated` `[server]`

Returns whether the player identity was confirmed by the Steam network.

See also GM:NetworkIDValidated.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player has been fully authenticated or not.

This will always be true for singleplayer and the listen server host.
This will always be false for bots.

---

### `Player:IsListenServerHost` `[client/server]`

Returns if a player is the host of the current session.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the player is the listen server host, `false` otherwise.

This will always be `true` in single player, and `false` on a dedicated server.

---

### `Player:IsMuted` `[client]`

Returns whether or not the player is voice muted locally.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — whether or not the player is muted locally.

---

### `Player:IsPlayingTaunt` `[client/server]`

Returns true if the player is playing a taunt.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is playing a taunt.

---

### `Player:IsSpeaking` `[client/server]`

Returns whenever the player is heard by the local player clientside, or if the player is speaking serverside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the player speaking or not.

---

### `Player:IsSprinting` `[client/server]`

Returns whether the player is currently sprinting or not, specifically if they are holding their sprint key and are allowed to sprint.

This will not check if the player is currently sprinting into a wall. (i.e. holding their sprint key but not moving)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the player sprinting or not

---

### `Player:IsSuitEquipped` `[client/server]`

Returns whenever the player is equipped with the suit item.

This will only work for the local player when used clientside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the suit equipped or not.

---

### `Player:IsSuperAdmin` `[client/server]`

Returns whether the player is a super admin.

Internally this is determined by Player:IsUserGroup. See also Player:IsAdmin.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the player is a super admin.

*Fuente: `lua/includes/extensions/player_auth.lua:22`*

---

### `Player:IsTimingOut` `[server]`

Returns `true` if the player is timing out (i.e. is losing connection), `false` otherwise.

A player is considered timing out when more than 4 seconds has elapsed since a network packet was received from given player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is timing out.

---

### `Player:IsTyping` `[client/server]`

Returns whether the player is typing in their chat.

This may not work properly if the server uses a custom chatbox.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the player is typing in their chat or not.

---

### `Player:IsUserGroup` `[client/server]`

Returns whether the player is in specified group or not. See Player:GetUserGroup for a way to get player's user group.

**Argumentos:**

- `string groupName` — Group to check the player for.

**Retorna:**

- `boolean` — `true` if the player has the given user group.

*Fuente: `lua/includes/extensions/player_auth.lua:32`*

---

### `Player:IsVoiceAudible` `[client]`

Returns if the player can be heard by the local player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isAudible

---

### `Player:IsWalking` `[client/server]`

Returns if the player currently walking. (`+walk` keybind)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the player is currently walking.

---

### `Player:IsWorldClicking` `[client/server]`

Returns whether the player is using the world clicking feature, see Panel:SetWorldClicker

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the player world clicking or not.

---

### `Player:IsWorldClickingDisabled` `[client/server]`

Returns whether the world clicking is disabled for given player or not. See Player:DisableWorldClicking.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the world clicking is disabled or not.

---

### `Player:KeyDown` `[client/server]`

Returns whether a key is down. This is not networked to other players, meaning only the local client can see the keys they are pressing.

**Argumentos:**

- `number key` — The key, see Enums/IN

**Retorna:**

- `boolean` — whether the key is down or not.

---

### `Player:KeyDownLast` `[client/server]`

Gets whether a key was down one tick ago.

**Argumentos:**

- `number key` — The key, see Enums/IN

**Retorna:**

- `boolean` — Is key down ?

---

### `Player:KeyPressed` `[client/server]`

Gets whether a key was just pressed this tick.

**Argumentos:**

- `number key` — Corresponds to an Enums/IN. You can use bit.bor here (see example 2)

**Retorna:**

- `boolean` — Was pressed or not

---

### `Player:KeyReleased` `[client/server]`

Gets whether a key was just released this tick.

**Argumentos:**

- `number key` — The key, see Enums/IN

**Retorna:**

- `boolean` — Was released or not

---

### `Player:Kick` `[server]`

Kicks the player from the server.
This can not be run before the player has fully joined in. Use game.KickID for that.

**Argumentos:**

- `string reason` = `No reason given` — Reason to show for disconnection.

This will be shortened to ~512 chars, though this includes the command itself and the player index so will realistically be more around ~498. It is recommended to avoid going near the limit to avoid truncation.

**Retorna:**

*(sin retorno)*

---

### `Player:Kill` `[server]`

Kills a player and calls GM:PlayerDeath.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:KillSilent` `[server]`

Kills a player without notifying the rest of the server.

This will call GM:PlayerSilentDeath instead of GM:PlayerDeath.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:LagCompensation` `[client/server]`

This allows the server to mitigate the lag of the player by moving back all the entities that can be lag compensated to the time the player attacked with his weapon.

This technique is most commonly used on things that hit other entities instantaneously, such as traces.

Entity:FireBullets calls this function internally.

Lag compensation only works for players and entities that have been enabled with Entity:SetLagCompensated

Despite being defined shared, it can only be used server-side in a ~search?q=%3Cpredicted%3EYes.

This function NEEDS to be disabled after you're done with it or it will break the movement of the entities affected!

Lag compensation does not support pose parameters.

**Argumentos:**

- `boolean lagCompensation` — The state of the lag compensation, true to enable and false to disable.

**Retorna:**

*(sin retorno)*

---

### `Player:LastHitGroup` `[server]`

Returns the hitgroup where the player was last hit.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Hitgroup, see Enums/HITGROUP

---

### `Player:LimitHit` `[server]`

Shows "limit hit" notification in sandbox.
This function is only available in Sandbox and its derivatives.

**Argumentos:**

- `string type` — Type of hit limit.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:120`*

---

### `Player:LocalEyeAngles` `[client/server]`

Returns the direction a player is looking as a entity/local-oriented angle.

Unlike Entity:EyeAngles, this function does not include angles of the Player's Entity:GetParent.

Does not work correctly clientside for non local players when in a vehicle. (validate: when parented in general?)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The local eye angles.

---

### `Player:Lock` `[server]`

Stops a player from using any inputs, such as moving, turning, or attacking. Key binds are still called. Similar to Player:Freeze but the player takes no damage.

Adds the Enums/FL and Enums/FL flags to the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:MotionSensorPos` `[client/server]`

Returns the position of a Kinect bone.

**Argumentos:**

- `number bone` — Bone to get the position of. Must be from 0 to 19.

**Retorna:**

- `Vector` — Position of the bone.

---

### `Player:Name` `[client/server]`

Use Player:Nick.

Returns the player's nick name. Identical to Player:Nick and Player:GetName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Player's name.

*Fuente: `lua/includes/extensions/player.lua:57`*

---

### `Player:Nick` `[client/server]`

Returns the player's nick name also known as display name, as it appears in Steam.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Player's nick name

---

### `Player:OwnerSteamID64` `[server]`

Returns the 64-bit SteamID aka CommunityID of the Steam Account that owns the Garry's Mod license this player is using. This is useful for detecting players using Steam Family Sharing.

If player is not using Steam Family Sharing, this will return the player's actual SteamID64().

This data will only be available after the player has fully authenticated with Steam. See Player:IsFullyAuthenticated.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The 64bit SteamID

---

### `Player:PacketLoss` `[client/server]`

Returns the percentage of packets lost by the client. It is not networked so it only returns 0 when run clientside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Percentage of packets lost (0-100)

---

### `Player:PhysgunUnfreeze` `[client/server]`

Unfreezes the props player is looking at. This is essentially the same as pressing reload with the physics gun, including double press for unfreeze all.

For freezing props, use PhysObj:EnableMotion.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of props unfrozen.

*Fuente: `gamemodes/base/gamemode/obj_player_extend.lua:53`*

---

### `Player:PickupObject` `[server]`

This makes the player hold (same as pressing E on a small prop) given entity.

Not to be confused with picking up items like ammo or health kits.

This picks up the passed entity regardless of its mass or distance from the player.

**Argumentos:**

- `Entity entity` — Entity to pick up.

**Retorna:**

*(sin retorno)*

---

### `Player:PickupWeapon` `[server]`

Forces the player to pickup an existing weapon entity. The player will not pick up the weapon if they already own a weapon of given type, or if the player could not normally have this weapon in their inventory.

This function **will** bypass GM:PlayerCanPickupWeapon.

**Argumentos:**

- `Weapon wep` — The weapon to try to pick up.
- `boolean ammoOnly` = `false` — If set to true, the player will only attempt to pick up the ammo from the weapon. The weapon will not be picked up even if the player doesn't have a weapon of this type, and the weapon will be removed if the player picks up any ammo from it.

**Retorna:**

- `boolean result` — Whether the player succeeded in picking up the weapon or not.

---

### `Player:Ping` `[client/server]`

Returns the player's ping to server.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The player's ping.

---

### `Player:PlayStepSound` `[server]`

Plays the correct step sound according to what the player is staying on.

**Argumentos:**

- `number volume` = `1` — Volume for the sound, in range from 0 to 1

**Retorna:**

*(sin retorno)*

---

### `Player:PrintMessage` `[client/server]`

Displays a message either in their chat, console, or center of the screen. See also Global.PrintMessage.

When called serverside, this uses the archaic user message system (the umsg) and hence is limited to ≈250 characters.

`HUD_PRINTCENTER` will not work when this is called clientside.

**Argumentos:**

- `number type` — Which type of message should be sent to the player (Enums/HUD).
- `string message` — Message to be sent to the player.

**Retorna:**

*(sin retorno)*

---

### `Player:RemoveAllAmmo` `[server]`

Removes all ammo from a certain player

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:RemoveAllItems` `[server]`

Removes all weapons and ammo from the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:RemoveAmmo` `[client/server]`

Removes the amount of the specified ammo from the player.

**Argumentos:**

- `number ammoCount` — The amount of ammunition to remove.
- `string ammoName` — The name of the ammunition to remove from. This can also be a number ammoID.

**Retorna:**

*(sin retorno)*

---

### `Player:RemovePData` `[client/server]`

Removes a **P**ersistent **Data** key-value pair from the SQL database. (`sv.db` when called on server, `cl.db` when called on client)

Internally uses the sql library. See util.RemovePData for cases when the player is not currently on the server.

This function internally uses Player:SteamID64, it previously utilized Player:UniqueID which can cause collisions (two or more players sharing the same PData entry). Player:SetPData now replaces all instances of Player:UniqueID with Player:SteamID64 when running Player:SetPData
PData is not networked from servers to clients!

**Argumentos:**

- `string key` — Key to remove

**Retorna:**

- `boolean` — true is succeeded, false otherwise

*Fuente: `lua/includes/extensions/player.lua:148`*

---

### `Player:RemoveSuit` `[server]`

Strips the player's suit item.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:ResetHull` `[client/server]`

Resets both normal and duck hulls to their default values.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:Say` `[server]`

Forces the player to say whatever the first argument is. Works on bots too.

This function ignores the default chat message cooldown
The argument can only contain 126 characters. [Source SDK 2013](https://github.com/ValveSoftware/source-sdk-2013/blob/0d8dceea4310fde5706b3ce1c70609d72a38efdf/sp/src/game/server/client.cpp#L84-L86)

**Argumentos:**

- `string text` — The text to force the player to say.
- `boolean teamOnly` = `false` — Whether to send this message to our own team only.

**Retorna:**

*(sin retorno)*

---

### `Player:ScreenFade` `[client/server]`

Fades the screen

**Argumentos:**

- `number flags` — Fade flags defined with Enums/SCREENFADE.
- `Color color` = `color_white` — The color of the screenfade
- `number fadeTime` — Fade(in/out) effect transition time ( From no fade to full fade and vice versa ).

This is limited to 7 bits integer part and 9 bits fractional part.
- `number fadeHold` — Fade effect hold time.

This is limited to 7 bits integer part and 9 bits fractional part.

**Retorna:**

*(sin retorno)*

---

### `Player:SelectWeapon` `[server]`

Sets the active weapon of the player by its class name.

This will switch the weapon out of prediction, causing delay on the client and WEAPON:Deploy and WEAPON:Holster to be called out of prediction. Try using CUserCmd:SelectWeapon or input.SelectWeapon, instead.

This will trigger the weapon switch event and associated animations. To switch weapons silently, use Player:SetActiveWeapon.

**Argumentos:**

- `string className` — The class name of the weapon to switch to.

If the player doesn't have the specified weapon, nothing will happen. You can use Player:Give to give the weapon first.

**Retorna:**

*(sin retorno)*

---

### `Player:SendHint` `[server]`

Sends a hint to a player.

This function is only available in Sandbox and its derivatives. Since this adds `#Hint_` to the beginning of each message, you should only use it with default hint messages, or those cached with language.Add. For hints with custom text, look at notification.AddLegacy.

**Argumentos:**

- `string name` — Name/class/index of the hint. You can find a list of hint names for this function List_of_Hint_Classes.
- `number delay` — Delay in seconds before showing the hint

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:119`*

---

### `Player:SendLua` `[server]`

Executes a simple Lua string on the player.
If you need to use this function more than once consider using net library. Send net message and make the entire code you want to execute in net.Receive on client.

**Argumentos:**

- `string script` — The script to execute, limited to 6000 bytes.

**Retorna:**

*(sin retorno)*

---

### `Player:SetActiveWeapon` `[server]`

Sets the player's active weapon. You should use CUserCmd:SelectWeapon or Player:SelectWeapon, instead in most cases.

This function will not trigger the weapon switch events or associated equip animations. It will bypass
GM:PlayerSwitchWeapon and the currently active weapon's WEAPON:Holster return value.

**Argumentos:**

- `Weapon weapon` — The weapon to equip.

**Retorna:**

*(sin retorno)*

---

### `Player:SetActivity` `[server]`

Sets the player's activity.

**Argumentos:**

- `number act` — The new activity to set. See Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `Player:SetAllowFullRotation` `[client/server]`

Set if the players' model is allowed to rotate around the pitch and roll axis.

**Argumentos:**

- `boolean Allowed` — Allowed to rotate

**Retorna:**

*(sin retorno)*

---

### `Player:SetAllowWeaponsInVehicle` `[server]`

Allows player to use their weapons in a vehicle. You need to call this before entering a vehicle.

Shooting in a vehicle fires two bullets.

**Argumentos:**

- `boolean allow` — Show we allow player to use their weapons in a vehicle or not.

**Retorna:**

*(sin retorno)*

---

### `Player:SetAmmo` `[client/server]`

Sets the amount of the specified ammo for the player.

**Argumentos:**

- `number ammoCount` — The amount of ammunition to set.
- `any ammoType` — The ammunition type. Can be either number ammo ID or string ammo name. See Default Ammo Types for default values.

**Retorna:**

*(sin retorno)*

---

### `Player:SetArmor` `[server]`

Sets the player armor value.

See GM:HandlePlayerArmorReduction for a hook that allows manipulating what armor does.

**Argumentos:**

- `number amount` — The amount to set the armor value of the player to.

**Retorna:**

*(sin retorno)*

---

### `Player:SetAvoidPlayers` `[client/server]`

Pushes the player away from other players whenever the player inside another players' bounding box.

This avoidance is performed clientside by altering movement sent to server.

This applies to players within a single team. (Player:Team)

**Argumentos:**

- `boolean avoidPlayers` — Whether to avoid teammates, or not.

**Retorna:**

*(sin retorno)*

---

### `Player:SetCanWalk` `[client/server]`

Set if the player should be allowed to walk using the (default) alt key. (`+walk` keybind)

**Argumentos:**

- `boolean canWalk` — `true` allows the player to walk.

**Retorna:**

*(sin retorno)*

---

### `Player:SetCanZoom` `[client/server]`

Sets whether the player can use the HL2 suit zoom (`+zoom` bind) or not.

**Argumentos:**

- `boolean canZoom` — Whether to make the player able or unable to zoom.

**Retorna:**

*(sin retorno)*

---

### `Player:SetClassID` `[client/server]`

Use player_manager.SetPlayerClass instead.

Sets the player's class id.

**Argumentos:**

- `number classID` — The class id the player is being set with.

**Retorna:**

*(sin retorno)*

---

### `Player:SetCrouchedWalkSpeed` `[client/server]`

Sets the crouched walk speed multiplier.

Has no effect for values above 1.

See also Player:SetWalkSpeed and Player:GetCrouchedWalkSpeed.

**Argumentos:**

- `number speed` — The walk speed multiplier that crouch speed should be.

**Retorna:**

*(sin retorno)*

---

### `Player:SetCurrentViewOffset` `[client/server]`

Sets the **actual** view offset which equals the difference between the players actual position and their view when standing.

Do not confuse with Player:SetViewOffset and Player:SetViewOffsetDucked

**Argumentos:**

- `Vector viewOffset` — The new view offset.

**Retorna:**

*(sin retorno)*

---

### `Player:SetDSP` `[client/server]`

Activates a given DSP (Digital Signal Processor) effect on all sounds that the player hears. This is equivalent to setting `dsp_player` convar on the player.

To apply a DSP effect to individual sounds, see CSoundPatch:SetDSP

**Argumentos:**

- `number dspEffectId` — The index of the DSP sound filter to apply.

For a list of the available IDs and their meaning, see DSP_Presets.
- `boolean fastReset` — If set to true the sound filter will be removed faster.

**This only works clientside**
If used serverside, a message will be displayed (`SetPlayerDSP: fastReset only valid from client`) in the server console.

**Retorna:**

*(sin retorno)*

---

### `Player:SetDeaths` `[server]`

Sets a player's death count

**Argumentos:**

- `number deathCount` — Number of deaths (positive or negative)

**Retorna:**

*(sin retorno)*

---

### `Player:SetDrivingEntity` `[client/server]`

Sets the driving entity and driving mode.

Use drive.PlayerStartDriving instead, see Entity Driving.

**Argumentos:**

- `Entity drivingEntity` = `NULL` — The entity the player should drive.
- `number drivingMode` — The driving mode index.

**Retorna:**

*(sin retorno)*

---

### `Player:SetDuckSpeed` `[client/server]`

Sets how quickly a player ducks.

This will not work for values &gt;= 1.

**Argumentos:**

- `number duckSpeed` — How quickly the player will duck.

**Retorna:**

*(sin retorno)*

---

### `Player:SetEyeAngles` `[client/server]`

Sets the local angle of the player's view (may rotate body too if angular difference is large)

This function works differently when the player is in a vehicle. In that case passing `Angle(0, 90, 0)` will have the player look forward (out the windshield) and `Angle(0, 0, 0)` will have them look to the right.

**Argumentos:**

- `Angle angle` — Angle to set the view to

**Retorna:**

*(sin retorno)*

---

### `Player:SetFOV` `[client/server]`

Set a player's FOV (Field Of View) over a certain amount of time.

This is meant to be called on the server or shared (for prediction), it will have no effect if called clientside only. You may want to use GM:CalcView for that instead.

**Argumentos:**

- `number fov` — the angle of perception (FOV). Set to 0 to return to default user FOV. ( Which is ranging from 75 to 100, depending on user settings )
- `number time` = `0` — the time it takes to transition to the FOV expressed in a floating point.
- `Entity requester` = `self` — The requester or "owner" of the zoom event. Only this entity will be able to change the player's FOV until it is set back to 0.

**Retorna:**

*(sin retorno)*

---

### `Player:SetFlashlightColor` `[client]`

Sets the color of a player's flashlight.
Can be used on other players.

**Argumentos:**

- `Color color` = `Color(255,255,255)` — Flashlight color

**Retorna:**

*(sin retorno)*

---

### `Player:SetFrags` `[server]`

Sets a player's frags (kills)

**Argumentos:**

- `number fragCount` — Number of frags (positive or negative)

**Retorna:**

*(sin retorno)*

---

### `Player:SetHands` `[client/server]`

Sets the hands entity of a player.

The hands entity is an entity introduced in Garry's Mod 13 and it's used to show the player's hands attached to the viewmodel.
This is similar to the approach used in L4D and CS:GO, for more information on how to implement this system in your gamemode visit Using Viewmodel Hands.

**Argumentos:**

- `Entity hands` — The hands entity to set

**Retorna:**

*(sin retorno)*

---

### `Player:SetHoveredWidget` `[client/server]`

Sets the widget that is currently hovered by the player's mouse.

**Argumentos:**

- `Entity widget` = `NULL` — The widget entity that the player is hovering.

**Retorna:**

*(sin retorno)*

---

### `Player:SetHull` `[client/server]`

Sets the size of the Player [Axis-Aligned Bounding Box (AABB)](https://en.wikipedia.org/wiki/Minimum_bounding_box) used for physics and movement util.TraceHull.

See also: Player:GetHull, Player:SetHullDuck, Player:GetHullDuck

This value is **not** replicated automatically to clients and must be manually called in both the Server and Client States.

**Argumentos:**

- `Vector mins` — The hull mins, the lowest corner of the Player's bounding box.
- `Vector maxs` — The hull maxs, the highest corner of the Player's bounding box, opposite of the mins.

**Retorna:**

*(sin retorno)*

---

### `Player:SetHullDuck` `[client/server]`

Sets the size of the Player [Axis-Aligned Bounding Box (AABB)](https://en.wikipedia.org/wiki/Minimum_bounding_box) used for physics and movement util.TraceHull while they are crouching (or "Ducking").

See also: Player:GetHullDuck, Player:GetHull, Player:SetHull

This value is **not** replicated automatically to clients and must be manually called in both the Server and Client States.

**Argumentos:**

- `Vector mins` — The hull mins, the lowest corner of the Player's bounding box while crouching.
- `Vector maxs` — The hull maxs, the highest corner of the Player's crouching bounding box, opposite of the mins.

**Retorna:**

*(sin retorno)*

---

### `Player:SetJumpPower` `[client/server]`

Sets the jump power, eg. the velocity that will be applied to the player when they jump.

**Argumentos:**

- `number jumpPower` — The new jump velocity.

**Retorna:**

*(sin retorno)*

---

### `Player:SetLadderClimbSpeed` `[client/server]`

Sets the player's ladder climbing speed.

See Player:SetWalkSpeed for normal walking speed, Player:SetRunSpeed for sprinting speed and Player:SetSlowWalkSpeed for slow walking speed.

**Argumentos:**

- `number speed` — The ladder climbing speed.

**Retorna:**

*(sin retorno)*

---

### `Player:SetLaggedMovementValue` `[server]`

Slows down the player movement simulation by the timescale, this is used internally in the HL2 weapon stripping sequence.

It achieves such behavior by multiplying the Global.FrameTime by the specified timescale at the start of the movement simulation and then restoring it afterwards.

This is reset to 1 on spawn.

There is no weapon counterpart to this, you'll have to hardcode the multiplier in the weapon or call Weapon:SetNextPrimaryFire / Weapon:SetNextSecondaryFire manually.

**Argumentos:**

- `number timescale` — The timescale multiplier.

**Retorna:**

*(sin retorno)*

---

### `Player:SetLastHitGroup` `[server]`

Sets the hitgroup where the player was last hit.

**Argumentos:**

- `number hitgroup` — The hitgroup to set as the "last hit", see Enums/HITGROUP.

**Retorna:**

*(sin retorno)*

---

### `Player:SetMaxArmor` `[server]`

Sets the maximum amount of armor the player should have. This affects default built-in armor pickups, but not Player:SetArmor.

**Argumentos:**

- `number maxarmor` — The new max armor value.

**Retorna:**

*(sin retorno)*

---

### `Player:SetMaxSpeed` `[client/server]`

Sets the maximum speed which the player can move at.

This is called automatically by the engine. If you wish to limit player speed without setting their run/sprint speeds, see CMoveData:SetMaxClientSpeed.

**Argumentos:**

- `number walkSpeed` — The maximum speed.

**Retorna:**

*(sin retorno)*

---

### `Player:SetMuted` `[client]`

Sets if the player should be voicechat muted locally.

**Argumentos:**

- `boolean mute` — Mute or unmute.

**Retorna:**

*(sin retorno)*

---

### `Player:SetNoCollideWithTeammates` `[client/server]`

Sets whenever the player should not collide with their teammates, based on their Player:Team.

This will only work for teams with ID 1 to 4 due to internal Engine limitations.
This causes traces with Enums/COLLISION_GROUP to pass through players.

**Argumentos:**

- `boolean shouldNotCollide` — `true` to disable, `false` to enable collision.

**Retorna:**

*(sin retorno)*

---

### `Player:SetNoTarget` `[server]`

Sets the players visibility towards NPCs.

Internally this toggles the Enums/FL flag, which you can manually test for using Entity:IsFlagSet

**Argumentos:**

- `boolean visibility` — The visibility.

**Retorna:**

*(sin retorno)*

---

### `Player:SetObserverMode` `[client/server]`

Sets the players observer mode. You must start the spectating first with Player:Spectate.

**Argumentos:**

- `number mode` — Spectator mode using Enums/OBS_MODE.

**Retorna:**

*(sin retorno)*

---

### `Player:SetPData` `[client/server]`

Writes a **P**ersistent **Data** key-value pair to the SQL database. (`sv.db` when called on server, `cl.db` when called on client)

Internally uses the sql library. See util.SetPData for cases when the player is not currently on the server.

This function internally uses Player:SteamID64, it previously utilized Player:UniqueID which could have caused collisions (two or more players sharing the same PData entry). Player:SetPData now replaces all instances of Player:UniqueID with Player:SteamID64 when running Player:SetPData

PData is not networked from servers to clients!

**Argumentos:**

- `string key` — Name of the PData key
- `any value` — Value to write to the key (**must** be an SQL valid data type, such as a string or integer)

**Retorna:**

- `boolean` — Whether the operation was successful or not

*Fuente: `lua/includes/extensions/player.lua:133`*

---

### `Player:SetPlayerColor` `[client/server]`

Sets the player model's color. The part of the model that is colored is determined by the model itself, and is different for each model.

**Argumentos:**

- `Vector Color` — This is the color to be set. The format is Vector(r, g, b), and each color should be between 0 and 1.

**Retorna:**

*(sin retorno)*

---

### `Player:SetPressedWidget` `[client/server]`

Sets the widget that is currently in use by the player's mouse.

Having a pressed widget stops the player from firing their weapon to allow input to be passed onto the widget.

**Argumentos:**

- `Entity pressedWidget` = `NULL` — The widget the player is currently using.

**Retorna:**

*(sin retorno)*

---

### `Player:SetRenderAngles` `[client/server]`

Sets the render angles of a player. Value set by this function is reset to player's angles (Entity:GetAngles) right after GM:UpdateAnimation.

**Argumentos:**

- `Angle ang` — The new render angles to set

**Retorna:**

*(sin retorno)*

---

### `Player:SetRunSpeed` `[client/server]`

Sets the player's sprint speed.

See also Player:GetRunSpeed, Player:SetWalkSpeed and Player:SetMaxSpeed.
player_default class run speed is: `400`

**Argumentos:**

- `number runSpeed` — The new sprint speed when `sv_friction` is below `10`. Higher `sv_friction` values will result in slower speed.

Has to be `7` or above or the player **won't** be able to move.

**Retorna:**

*(sin retorno)*

---

### `Player:SetSlowWalkSpeed` `[client/server]`

Sets the player's slow walking speed, which is activated via +WALK keybind.

See Player:SetWalkSpeed for normal walking speed, Player:SetRunSpeed for sprinting speed and Player:SetLadderClimbSpeed for ladder climb speed.

**Argumentos:**

- `number speed` — The new slow walking speed.

**Retorna:**

*(sin retorno)*

---

### `Player:SetStepSize` `[client/server]`

Sets the maximum height a player can step onto without jumping.

**Argumentos:**

- `number stepHeight` — The new maximum height the player can step onto without jumping

**Retorna:**

*(sin retorno)*

---

### `Player:SetSuitPower` `[client/server]`

Sets the player's HEV suit power.

This will only work for the local player when used clientside.

**Argumentos:**

- `number power` — The new suit power.

**Retorna:**

*(sin retorno)*

---

### `Player:SetSuppressPickupNotices` `[client/server]`

Sets whenever to suppress the pickup notification for the player.

**Argumentos:**

- `boolean doSuppress` — Whenever to suppress the notice or not.

**Retorna:**

*(sin retorno)*

---

### `Player:SetTeam` `[server]`

Sets the player to the chosen team. The value is networked to clients at reduced bit count (16 bits) as as a signed value, so the real range is [-32768, 32767].

Can be retrieved via Player:Team

**Argumentos:**

- `number team` — The team that the player is being set to.

**Retorna:**

*(sin retorno)*

---

### `Player:SetUnDuckSpeed` `[client/server]`

Sets how quickly a player un-ducks

**Argumentos:**

- `number UnDuckSpeed` — How quickly the player will un-duck

**Retorna:**

*(sin retorno)*

---

### `Player:SetUserGroup` `[server]`

Sets the usergroup of the player.

**Argumentos:**

- `string groupName` — The user group of the player.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player_auth.lua:61`*

---

### `Player:SetViewEntity` `[server]`

Attaches the players view to the position and angles of the specified entity.

**Argumentos:**

- `Entity viewEntity` — The entity to attach the player view to.

**Retorna:**

*(sin retorno)*

---

### `Player:SetViewOffset` `[client/server]`

Sets the **desired** view offset which equals the difference between the players actual position and their view when standing.

If you want to set **actual** view offset, use Player:SetCurrentViewOffset

See also Player:SetViewOffsetDucked for **desired** view offset when crouching.

**Argumentos:**

- `Vector viewOffset` — The new desired view offset when standing.

**Retorna:**

*(sin retorno)*

---

### `Player:SetViewOffsetDucked` `[client/server]`

Sets the **desired** view offset which equals the difference between the players actual position and their view when crouching.

If you want to set **actual** view offset, use Player:SetCurrentViewOffset

See also Player:SetViewOffset for **desired** view offset when standing.

**Argumentos:**

- `Vector viewOffset` — The new desired view offset when crouching.

**Retorna:**

*(sin retorno)*

---

### `Player:SetViewPunchAngles` `[client/server]`

Sets client's view punch angle, but not the velocity. See Player:ViewPunch

**Argumentos:**

- `Angle punchAngle` — The angle to set.

**Retorna:**

*(sin retorno)*

---

### `Player:SetViewPunchVelocity` `[client/server]`

Sets client's view punch velocity. See Player:ViewPunch and Player:SetViewPunchAngles

**Argumentos:**

- `Angle punchVel` — The angle velocity to set.

**Retorna:**

*(sin retorno)*

---

### `Player:SetVoiceVolumeScale` `[client]`

Sets the voice volume scale for given player on client. This value will persist from server to server, but will be reset when the game is shut down.

This doesn't work on bots, their scale will always be `1`. Does not work with multiruns.

**Argumentos:**

- `number ` — The voice volume scale, where `0` is 0% and `1` is 100%.

**Retorna:**

*(sin retorno)*

---

### `Player:SetWalkSpeed` `[client/server]`

Sets the player's normal walking speed. Not sprinting, not slow walking +walk.

See also Player:SetSlowWalkSpeed, Player:GetWalkSpeed, Player:SetCrouchedWalkSpeed, Player:SetMaxSpeed and Player:SetRunSpeed.

Using a speed of `0` can lead to prediction errors, and can cause players to move at sv_maxvelocity

`player_default` class walk speed is: `200`.

**Argumentos:**

- `number walkSpeed` — The new walk speed when `sv_friction` is below `10`. Higher `sv_friction` values will result in slower speed.

Has to be `7` or above or the player **won't** be able to move.

**Retorna:**

*(sin retorno)*

---

### `Player:SetWeaponColor` `[client/server]`

Sets the player weapon's color. The part of the model that is colored is determined by the model itself, and is different for each model.

**Argumentos:**

- `Vector Color` — This is the color to be set. The format is Vector(r,g,b), and each color should be between 0 and 1.

**Retorna:**

*(sin retorno)*

---

### `Player:SetupHands` `[server]`

Sets up the player's hands for the viewmodel. Calls GM:PlayerSetHandsModel to determine the model. If no entity is provided, uses the player's own hands model. If spectating another entity, pass that entity to use its hands model instead.

**Argumentos:**

- `Entity ent` = `nil` — If the player is spectating an entity, this should be the entity the player is spectating, so we can use its hands model instead.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:185`*

---

### `Player:ShouldDrawLocalPlayer` `[client]`

Returns whether the **local player's** player model will be drawn at the time the function is called.

Despite this being a method on a player object, this will always represent the state of the Global.LocalPlayer, not of the player entity this method is used on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the player's playermodel is visible

---

### `Player:ShouldDropWeapon` `[server]`

Sets whether the player's current weapon should drop on death.

This is reset on spawn to the Player_Classes's **DropWeaponOnDie** field by player_manager.OnPlayerSpawn.

**Argumentos:**

- `boolean drop` — Whether to drop the player's current weapon or not

**Retorna:**

*(sin retorno)*

---

### `Player:ShowProfile` `[client]`

Opens the player steam profile page in the steam overlay browser.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:SimulateGravGunDrop` `[server]`

Signals the entity that it was dropped by the gravity gun.

**Argumentos:**

- `Entity ent` — Entity that was dropped.

**Retorna:**

*(sin retorno)*

---

### `Player:SimulateGravGunPickup` `[server]`

Signals the entity that it was picked up by the gravity gun. This call is only required if you want to simulate the situation of picking up objects.

**Argumentos:**

- `Entity ent` — The entity picked up
- `boolean lightning` = `false` — Whether or not to show lightning effects around the entity

**Retorna:**

*(sin retorno)*

---

### `Player:Spectate` `[server]`

Starts spectate mode for given player. This will also affect the players movetype in some cases.

Player:UnSpectate should be used to remove the player from spectate mode, or call this with `OBS_MODE_NONE`.

The player must be respawned, otherwise they will be able to walk through doors and become invincible. This will be fixed in a future update.

**Argumentos:**

- `number{OBS_MODE} mode` — Spectate mode, see Enums/OBS_MODE.

**Retorna:**

*(sin retorno)*

---

### `Player:SpectateEntity` `[server]`

Makes the player spectate the entity.

To get the applied spectated entity, use Player:GetObserverTarget.

**Argumentos:**

- `Entity entity` — Entity to spectate.

**Retorna:**

*(sin retorno)*

---

### `Player:SprayDecal` `[server]`

Makes a player spray their decal.

**Argumentos:**

- `Vector sprayOrigin` — The location to spray from
- `Vector sprayEndPos` — The location to spray to

**Retorna:**

*(sin retorno)*

---

### `Player:SprintDisable` `[server]`

Disables the sprint on the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:SprintEnable` `[server]`

Enables the sprint on the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:StartSprinting` `[client/server]`

This appears to be a direct binding to internal functionality that is overridden by the engine every frame so calling these functions may not have any or expected effect.

Doesn't appear to do anything.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:StartWalking` `[client/server]`

This appears to be a direct binding to internal functionality that is overridden by the engine every frame so calling these functions may not have any or expected effect.

When used in a GM:SetupMove hook, this function will force the player to walk, as well as preventing the player from sprinting.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:SteamID` `[client/server]`

Returns the player's SteamID.

See Player:AccountID for a shorter version of the SteamID and Player:SteamID64 for the full SteamID.

It is recommended to use Player:SteamID64 over the other SteamID formats whenever possible.

In a `-multirun` environment, this will return `STEAM_ID_LAN` for all "copies" of a player because they are not authenticated with Steam.

For Bots this will return `BOT`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — "Text" representation of the player's SteamID.

---

### `Player:SteamID64` `[client/server]`

Returns the player's full **64-bit SteamID**, also known as **CommunityID**. Information on how data is packed into this value can be found [here](https://developer.valvesoftware.com/wiki/SteamID).

See Player:AccountID for a function that returns only the Account ID part of the SteamID and Player:SteamID for the text version of the SteamID.

In a `-multirun` environment, this will return `"0"` for all "copies" of a player because they are not authenticated with Steam.

For bots, this will return `90071996842377216` (equivalent to `STEAM_0:0:0`) for the first bot to join.

For each additional bot, the number increases by 1. So the next bot will be `90071996842377217` (`STEAM_0:1:0`) then `90071996842377218` (`STEAM_0:0:1`) and so on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Player's 64-bit SteamID aka CommunityID.

The return value is a string, not a number, since Lua's numbers are unable to store the entire 64bit numbers without data loss.

---

### `Player:StopSprinting` `[client/server]`

This appears to be a direct binding to internal functionality that is overridden by the engine every frame so calling these functions may not have any or expected effect.

When used in a GM:SetupMove hook, this function will prevent the player from sprinting.

When +walk is engaged, the player will still be able to sprint to half speed (normal run speed) as opposed to full sprint speed without this function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:StopWalking` `[client/server]`

This appears to be a direct binding to internal functionality that is overridden by the engine every frame so calling these functions may not have any or expected effect.

When used in a GM:SetupMove hook, this function behaves unexpectedly by preventing the player from sprinting similar to Player:StopSprinting.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:StopZooming` `[server]`

Turns off the zoom mode of the player. (+zoom console command)

Basically equivalent of entering "-zoom" into player's console.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:StripAmmo` `[server]`

Alias of Player:RemoveAllAmmo

Removes all ammo from the player.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:StripWeapon` `[server]`

Removes the specified weapon class from a certain player
this function will call the Entity:OnRemove but if you try use Entity:GetOwner it will return nil

**Argumentos:**

- `string weapon` — The weapon class to remove

**Retorna:**

*(sin retorno)*

---

### `Player:StripWeapons` `[server]`

Removes all weapons from a certain player

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:SuppressHint` `[server]`

Prevents a hint from showing up.

This function is only available in Sandbox and its derivatives

**Argumentos:**

- `string name` — Hint name/class/index to prevent from showing up. You can find a list of hint names for this function List_of_Hint_Classes.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/player_extension.lua:129`*

---

### `Player:SwitchToDefaultWeapon` `[server]`

Attempts to switch the player weapon to the one specified in the "cl_defaultweapon" convar, if the player does not own the specified weapon nothing will happen.

If you want to switch to a specific weapon, use: Player:SetActiveWeapon

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/player.lua:166`*

---

### `Player:Team` `[client/server]`

Returns the player's team ID, set by Player:SetTeam

Returns 0 clientside when the game is not fully loaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The player's team's index number, as in the Enums/TEAM or a custom team defined in team.SetUp.

---

### `Player:TimeConnected` `[server]`

Returns the time in seconds since the player connected.

Bots will always return value 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number connectedTime` — How long this player was connected to the server for, in seconds.

---

### `Player:TraceHullAttack` `[server]`

Performs a trace hull and applies damage to the entities hit, returns the first entity hit.

Hitting the victim entity with this function in ENTITY:OnTakeDamage can cause infinite loops.

**Argumentos:**

- `Vector startPos` — The start position of the hull trace.
- `Vector endPos` — The end position of the hull trace.
- `Vector mins` — The minimum coordinates of the hull.
- `Vector maxs` — The maximum coordinates of the hull.
- `number damage` — The damage to be applied.
- `number damageFlags` — Bitflag specifying the damage type, see Enums/DMG.
- `number damageForce` — The force to be applied to the hit object.
- `boolean damageAllNPCs` — Whether to apply damage to all hit NPCs or not.

**Retorna:**

- `Entity` — The hit entity

---

### `Player:TranslateWeaponActivity` `[client/server]`

Translates Enums/ACT according to the holdtype of players currently held weapon.

**Argumentos:**

- `number act` — The initial Enums/ACT

**Retorna:**

- `number` — Translated Enums/ACT

---

### `Player:UnLock` `[server]`

Unlocks the player movement if locked previously.

Will disable godmode for the player if locked previously.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:UnSpectate` `[server]`

Removes the player from the spectate mode entirely.

The player must be respawned, otherwise they will be able to walk through doors and become invincible. This will be fixed in a future update.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Player:UnfreezePhysicsObjects` `[client/server]`

Unfreezes all objects the player has frozen with their Physics Gun. Same as double pressing R while holding Physics Gun.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/obj_player_extend.lua:98`*

---

### `Player:UniqueID` `[client/server]`

**This function has collisions,** where more than one player can have the same UniqueID. It is **highly** recommended to use Player:SteamID64, Player:SteamID or Player:AccountID instead, which are guaranteed to be unique to each player.

Returns a 32 bit integer that remains constant for a player across joins/leaves and across different servers. This can be used when a string is inappropriate - e.g. in a database primary key.

In Singleplayer, this function will always return 1.
In a `-multirun` environment, the value returned is different on the serverside and clientside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The player's Unique ID

---

### `Player:UniqueIDTable` `[client/server]`

Returns a table that will stay allocated for the specific player serverside between connects until the server shuts down or change map. On client it has no such special behavior.

This table is not synchronized (networked) between client and server.

**Argumentos:**

- `any key` — Unique table key.

**Retorna:**

- `table` — The table that contains any info you have put in it.

*Fuente: `gamemodes/base/gamemode/obj_player_extend.lua:157`*

---

### `Player:UserID` `[client/server]`

Returns the player's user ID. This number will always be unique, but will reset if the player reconnects. (Always increments for each connecting player)

You can use Global.Player global function to get a player by their user ID.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The player's user ID

---

### `Player:ViewPunch` `[client/server]`

Simulates a push on the client's screen. This **adds** view punch velocity, and does not reset the current view punch angle, for which you can use Player:SetViewPunchAngles.

Despite being defined shared, it only functions when called server-side.

**Argumentos:**

- `Angle punchAngle` — The angle in which to push the player's screen.

**Retorna:**

*(sin retorno)*

---

### `Player:ViewPunchReset` `[client/server]`

Resets the player's view punch (and the view punch velocity, read more at Player:ViewPunch) effect back to normal.

**Argumentos:**

- `number tolerance` = `0` — Reset all ViewPunch below this threshold.

**Retorna:**

*(sin retorno)*

---

### `Player:VoiceVolume` `[client]`

Returns the players voice volume, how loud the player's voice communication currently is, as a number in range of [0,1].

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The voice volume.