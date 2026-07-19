# GM

---


## Miembros (267)


---

### `GM:AcceptInput` `[server]`

Called when a map I/O event occurs.

See also Entity:Fire and Entity:Input for functions to fire Inputs on entities.

**Argumentos:**

- `Entity ent` — Entity that receives the input
- `string input` — The input name. Is not guaranteed to be a valid input on the entity.
- `Entity activator` — Activator of the input
- `Entity caller` — Caller of the input
- `any value` — Data provided with the input. Will be either a string, a number, a boolean or a nil.

**Retorna:**

- `boolean` — Return true to prevent this input from being processed. Do not return otherwise.

---

### `GM:AddDeathNotice` `[client]`

Adds a death notice entry.

**Argumentos:**

- `string attacker` — The name of the attacker
- `number attackerTeam` — The team of the attacker
- `string inflictor` — Class name of the entity inflicting the damage
- `string victim` — Name of the victim
- `number victimTeam` — Team of the victim

**Retorna:**

- `any` — `true/false` to prevent the notice from being shown. Do not return otherwise.

*Fuente: `gamemodes/base/gamemode/cl_deathnotice.lua:202`*

---

### `GM:AdjustMouseSensitivity` `[client]`

Allows you to adjust the mouse sensitivity.

**Argumentos:**

- `number defaultSensitivity` — The old sensitivity

In general it will be 0, which is equivalent to a sensitivity of 1.
- `number localFOV` — Player's current FOV.
- `number defaultFOV` — Default FOV.

**Retorna:**

- `number` — A fraction of the normal sensitivity (0.5 would be half as sensitive).

Return -1 to not override and prevent subsequent hooks and WEAPON:AdjustMouseSensitivity from running.
Return nil to not override and allow subsequent hooks and WEAPON:AdjustMouseSensitivity to run.

*Fuente: `gamemodes/base/gamemode/cl_init.lua:418`*

---

### `GM:AllowPlayerPickup` `[server]`

Called when a player tries to pick up something using the "use" key, return to override.

This hook will not be called if `sv_playerpickupallowed` is set to 0.

See GM:GravGunPickupAllowed for the Gravity Gun pickup variant.
See GM:PhysgunPickup for the Physics Gun pickup variant.

**Argumentos:**

- `Player ply` — The player trying to pick up something.
- `Entity ent` — The Entity the player attempted to pick up.

**Retorna:**

- `boolean` — Allow the player to pick up the entity or not.

*Fuente: `gamemodes/base/gamemode/player.lua:818`*

---

### `GM:CalcMainActivity` `[client/server]`

This hook is used to calculate animations for a player.

This hook must return the same values at the same time on both, client **and** server. On client for players to see the animations, on server for hit detection to work properly.

**Argumentos:**

- `Player ply` — The player to apply the animation.
- `Vector vel` — The velocity of the player.

**Retorna:**

- `number` — Enums/ACT for the activity the player should use. A nil return will be treated as ACT_INVALID.
- `number` — Sequence for the player to use. This takes precedence over the activity (the activity is still used for layering). Return -1 or nil to let the activity determine the sequence.

*Fuente: `gamemodes/base/gamemode/animations.lua:296`*

---

### `GM:CalcVehicleView` `[client]`

Called from GM:CalcView when player is in driving a vehicle.

This hook may not be called in gamemodes that override GM:CalcView.

**Argumentos:**

- `Vehicle veh` — The vehicle the player is driving
- `Player ply` — The vehicle driver
- `table view` — The view data containing players FOV, view position and angles, see Structures/CamData

**Retorna:**

- `table` — The modified view table containing new values, see Structures/CamData

*Fuente: `gamemodes/base/gamemode/cl_init.lua:305`*

---

### `GM:CalcView` `[client]`

Allows override of the default view.

**Argumentos:**

- `Player ply` — The local player.
- `Vector origin` — The player's view position.
- `Angle angles` — The player's view angles.
- `number fov` — Field of view.
- `number znear` — Distance to near clipping plane.
- `number zfar` — Distance to far clipping plane.

**Retorna:**

- `table{CamData}` — View data table. See Structures/CamData

*Fuente: `gamemodes/base/gamemode/cl_init.lua:357`*

---

### `GM:CalcViewModelView` `[client]`

Allows overriding the position and angle of the viewmodel.

**Argumentos:**

- `Weapon wep` — The weapon entity
- `Entity vm` — The viewmodel entity
- `Vector oldPos` — Original position (before viewmodel bobbing and swaying)
- `Angle oldAng` — Original angle (before viewmodel bobbing and swaying)
- `Vector pos` — Current position
- `Angle ang` — Current angle

**Retorna:**

- `Vector` — New position
- `Angle` — New angle

*Fuente: `gamemodes/base/gamemode/cl_init.lua:555`*

---

### `GM:CanCreateUndo` `[server]`

Called whenever a players tries to create an undo.

**Argumentos:**

- `Player ply` — The player who tried to create something.
- `table undo` — The undo table as a Structures/Undo.

**Retorna:**

- `boolean` — Return false to disallow creation of the undo.

*Fuente: `lua/includes/modules/undo.lua:328`*

---

### `GM:CanEditVariable` `[server]`

Called when a variable is about to be edited on an Entity (called by `Edit Properties...` menu), to determine if the edit should be permitted.

See Editable_Entities for more details about the system.

By default, Sandbox will also call ENTITY:CanEditVariables if no hook returns a value.

**Argumentos:**

- `Entity ent` — The entity being edited.
- `Player ply` — The player doing the editing.
- `string key` — The name of the variable.
- `string value` — The new value, as a string which will later be converted to its appropriate type.
- `table editor` — The edit table defined in Entity:NetworkVar.

**Retorna:**

- `boolean` — Return `false` to disallow editing.

*Fuente: `gamemodes/base/gamemode/variable_edit.lua:28`*

---

### `GM:CanExitVehicle` `[server]`

Determines if the player can exit the vehicle on their own. Player:ExitVehicle will bypass this hook.

See GM:CanPlayerEnterVehicle for the opposite hook.
See also GM:PlayerLeaveVehicle for a hook that will be called whenever a player exits any vehicle for any reason.

**Argumentos:**

- `Vehicle veh` — The vehicle entity
- `Player ply` — The player

**Retorna:**

- `boolean` — True if the player can exit the vehicle.

*Fuente: `gamemodes/base/gamemode/player.lua:567`*

---

### `GM:CanPlayerEnterVehicle` `[server]`

Determines whether or not a given player player can enter the given vehicle. Player:EnterVehicle will still call this hook.

Called just before GM:PlayerEnteredVehicle. See also GM:CanExitVehicle.

**Argumentos:**

- `Player player` — The player that wants to enter a vehicle.
- `Vehicle vehicle` — The vehicle in question.
- `number role` — The seat number.

**Retorna:**

- `boolean` — `false` if the player is not allowed to enter the vehicle.

*Fuente: `gamemodes/base/gamemode/player.lua:584`*

---

### `GM:CanPlayerSuicide` `[server]`

Determines if the player can kill themselves using the `kill` or `explode` console commands.

**Argumentos:**

- `Player player` — The player

**Retorna:**

- `boolean` — `true` if the player should be allowed to suicide, `false` if not.

*Fuente: `gamemodes/base/gamemode/player.lua:554`*

---

### `GM:CanPlayerUnfreeze` `[server]`

Determines if the player can unfreeze the entity.

**Argumentos:**

- `Player player` — The player
- `Entity entity` — The entity
- `PhysObj phys` — The physics object of the entity

**Retorna:**

- `boolean` — True if they can unfreeze.

*Fuente: `gamemodes/base/gamemode/player.lua:65`*

---

### `GM:CanProperty` `[client/server]`

Controls if a properties can be used or not.

**Argumentos:**

- `Player ply` — Player, that tried to use the property
- `string property` — Class of the property that is tried to use, for example - bonemanipulate

This is not guaranteed to be the internal property name used in properties.Add!
- `Entity ent` — The entity, on which property is tried to be used on

**Retorna:**

- `boolean` — Return false to disallow using that property

*Fuente: `gamemodes/base/gamemode/shared.lua:263`*

---

### `GM:CanUndo` `[server]`

Called whenever a players tries to undo.

**Argumentos:**

- `Player ply` — The player who tried to undo something.
- `table{Undo} undo` — The undo table as a Structures/Undo.

**Retorna:**

- `boolean` — Return false to disallow the undo.

*Fuente: `lua/includes/modules/undo.lua:429`*

---

### `GM:CaptureVideo` `[menu]`

Called each frame to record demos to video using IVideoWriter.

This hook is called every frame regardless of whether or not a demo is being recorded

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/demo_to_video.lua:286`*

---

### `GM:ChatText` `[client]`

Called when a message is printed to the chat box. Note, that this isn't working with player messages even though there are arguments for it.

For player messages see GM:PlayerSay and GM:OnPlayerChat

**Argumentos:**

- `number index` — The index of the player.
- `string name` — The name of the player.
- `string text` — The text that is being sent.
- `string type` — Chat filter type. Possible values are:
* `joinleave` - Player join and leave messages
* `namechange` - Player name change messages
* `servermsg` - Server messages such as convar changes
* `teamchange` - Team changes?
* `chat` - (Obsolete?) Player chat? Seems to trigger when server console uses the `say` command
* `none` - A fallback value

**Retorna:**

- `boolean` — Return true to suppress the chat message.

*Fuente: `gamemodes/base/gamemode/cl_init.lua:250`*

---

### `GM:ChatTextChanged` `[client]`

Called whenever the content of the user's chat input box is changed.

**Argumentos:**

- `string text` — The new contents of the input box

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:243`*

---

### `GM:CheckPassword` `[server]`

Called when a **non local player** connects to allow the Lua system to check the password.

The default behaviour in the base gamemodes emulates what would normally happen. If `sv_password` is set and its value matches the password passed in by the client (via `password` concommand) - then they are allowed to join. If `sv_password` isn't set it lets them in too.

**Argumentos:**

- `string steamID64` — The 64bit Steam ID of the joining player, use util.SteamIDFrom64 to convert it to a `STEAM_0:` one.
- `string ipAddress` — The IP of the connecting client
- `string svPassword` — The current value of sv_password (the password set by the server)
- `string clPassword` — The password provided by the client
- `string name` — The name of the joining player

**Retorna:**

- `boolean` — If the hook returns `false` then the player is disconnected
- `string` — If returning false in the first argument, then this should be the disconnect message. This will default to `#GameUI_ServerRejectBadPassword`, which is `Bad Password.` translated to the client's language.

*Fuente: `gamemodes/base/gamemode/init.lua:124`*

---

### `GM:ClientSignOnStateChanged` `[client/server]`

Called when a player's sign on state changes.
You cannot get a valid player object from the userID at any point during this hook.

**Argumentos:**

- `number userID` — The userID of the player whose sign on state has changed.
- `number oldState` — The previous sign on state. See Enums/SIGNONSTATE enums.
- `number newState` — The new/current sign on state. See Enums/SIGNONSTATE enums.

**Retorna:**

*(sin retorno)*

---

### `GM:CloseDermaMenus` `[client/menu]`

Called when derma menus are closed with Global.CloseDermaMenus.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:729`*

---

### `GM:CreateClientsideRagdoll` `[client]`

Called whenever an entity becomes a clientside ragdoll.

See GM:CreateEntityRagdoll for serverside ragdolls.

**Argumentos:**

- `Entity entity` — The Entity that created the ragdoll
- `Entity ragdoll` — The ragdoll being created.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:732`*

---

### `GM:CreateEntityRagdoll` `[server]`

Called when a serverside ragdoll of an entity has been created.

See GM:CreateClientsideRagdoll for clientside ragdolls.

**Argumentos:**

- `Entity owner` — Entity that owns the ragdoll
- `Entity ragdoll` — The ragdoll entity

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/init.lua:85`*

---

### `GM:CreateMove` `[client]`

Allows you to change the players movements before they're sent to the server.

See Game Movement for an explanation on the move system.

Due to this hook being clientside only, it could be overridden by the user allowing them to completely skip your logic, it is recommended to use GM:StartCommand in a shared file instead.

**Argumentos:**

- `CUserCmd cmd` — The User Command data

**Retorna:**

- `boolean` — Return true to:
* Disable Sandbox C menu "screen clicking"
* Disable Teammate nocollide (verification required)
* Prevent calling of C_BaseHLPlayer::CreateMove &amp; subsequently C_BasePlayer::CreateMove

*Fuente: `gamemodes/base/gamemode/cl_init.lua:653`*

---

### `GM:CreateTeams` `[client/server]`

Teams are created within this hook using team.SetUp.

This hook is called before GM:PreGamemodeLoaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/shared.lua:127`*

---

### `GM:DoAnimationEvent` `[client/server]`

Called upon an animation event, this is the ideal place to call player animation functions such as Player:AddVCDSequenceToGestureSlot, Player:AnimRestartGesture and so on.

**Argumentos:**

- `Player ply` — Player who is being animated
- `number event` — Animation event. See Enums/PLAYERANIMEVENT
- `number data` = `0` — The data for the event. This is interpreted as an Enums/ACT by `PLAYERANIMEVENT_CUSTOM` and `PLAYERANIMEVENT_CUSTOM_GESTURE`, or a sequence by `PLAYERANIMEVENT_CUSTOM_SEQUENCE`.

**Retorna:**

- `number` — The translated activity to send to the weapon. See Enums/ACT. Return `ACT_INVALID` if you don't want to send an activity.

*Fuente: `gamemodes/base/gamemode/animations.lua:352`*

---

### `GM:DoPlayerDeath` `[server]`

Handles the player's death.

This hook is **not** called if the player is killed by Player:KillSilent. See GM:PlayerSilentDeath for that.

* GM:PlayerDeath is called after this hook
* GM:PostPlayerDeath is called after that

Player:Alive will return false in this hook.

**Argumentos:**

- `Player ply` — The player
- `Entity attacker` — The entity that killed the player
- `CTakeDamageInfo dmg` — Damage info

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/init.lua:39`*

---

### `GM:DrawDeathNotice` `[client]`

This hook is called every frame to draw all of the current death notices.

**Argumentos:**

- `number x` — X position to draw death notices as a ratio
- `number y` — Y position to draw death notices as a ratio

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_deathnotice.lua:254`*

---

### `GM:DrawMonitors` `[client]`

Called every frame before drawing the in-game monitors ( Breencast, in-game TVs, etc ), but doesn't seem to be doing anything, trying to render 2D or 3D elements fail.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:717`*

---

### `GM:DrawOverlay` `[client/menu]`

Called after all other 2D draw hooks are called. Draws over all VGUI Panels and HUDs.

Unlike GM:HUDPaint, this hook is called with the game paused and while the Camera SWEP is equipped.

Does not get called when `r_drawvgui` is disabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:714`*

---

### `GM:DrawPhysgunBeam` `[client]`

Allows you to override physgun effects rendering.

This is still called when `physgun_drawbeams` is set to `0`, because this hook is also capable of overriding physgun sprite effects, while the convar does not.

**Argumentos:**

- `Player ply` — Physgun owner
- `Weapon physgun` — The physgun
- `boolean enabled` — Is the beam enabled
- `Entity target` — Entity we are grabbing. This will be NULL if nothing is being held
- `number physBone` — ID of the physics bone (PhysObj) we are grabbing at. Use Entity:TranslatePhysBoneToBone to translate to an actual bone.
- `Vector hitPos` — Beam hit position relative to the physics bone (PhysObj) we are grabbing.

**Retorna:**

- `boolean` — Return false to hide default effects

*Fuente: `gamemodes/base/gamemode/cl_init.lua:634`*

---

### `GM:EndEntityDriving` `[client/server]`

Called right before an entity stops driving. Overriding this hook will cause it to not call drive.End and the player will not stop driving.

**Argumentos:**

- `Entity ent` — The entity being driven
- `Player ply` — The player driving the entity

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/shared.lua:215`*

---

### `GM:EntityEmitSound` `[client/server]`

Called whenever a sound has been played. This will not be called clientside if the server played the sound without the client also calling Entity:EmitSound.

**Argumentos:**

- `table data` — Information about the played sound. Changes done to this table can be applied by returning `true` from this hook.

See Structures/EmitSoundInfo.

**Retorna:**

- `boolean` — * Return `true` to apply all changes done to the data table.
* Return `false` to prevent the sound from playing.
* Return `nil` or nothing to play the sound without altering it.

---

### `GM:EntityFireBullets` `[client/server]`

Called every time a bullet is about to be fired from an entity, which allows to completely modify the bullet structure before the bullet is actually fired.

See GM:PostEntityFireBullets if you wish to hook the final bullet values, such as the aim direction post spread calculations.

This hook is called directly from Entity:FireBullets. Due to this, you cannot call Entity:FireBullets inside this hook or an infinite loop will occur crashing the game.

**Argumentos:**

- `Entity entity` — The entity that fired the bullet
- `table{Bullet} data` — The bullet data. See Structures/Bullet.

**Retorna:**

- `boolean` — * Return `true` to apply all changes done to the bullet table.
* Return `false` to suppress the bullet.

*Fuente: `gamemodes/base/gamemode/shared.lua:270`*

---

### `GM:EntityKeyValue` `[client/server]`

Called when a key-value pair is set on an entity on map spawn. Is **not** called by Entity:SetKeyValue.

See ENTITY:KeyValue for a scripted entities hook, and its scripted weapon alternative: WEAPON:KeyValue.

**Argumentos:**

- `Entity ent` — Entity that the keyvalue is being set on
- `string key` — Key of the key/value pair
- `string value` — Value of the key/value pair

**Retorna:**

- `string` — If set, the value of the key-value pair will be overridden by this string.

*Fuente: `gamemodes/base/gamemode/shared.lua:120`*

---

### `GM:EntityNetworkedVarChanged` `[client/server]`

Called when an NW2Var is changed.
If a NW2Var is set on an entity that is based on a Lua Entity could result in the NW2Var being mixed up with other ones and being updated multiple times.

This hook is fired before the client value is actually changed. Calling the GetNW2 function for the specified variable name within this hook will return the old value, not the current/updated one.

This hook gets called for all NW2Vars on all Entities in a full update. The old value will be nil in this case.
If this hook seems to be called for no apparent reason, check if it's caused by a full update.

**Argumentos:**

- `Entity ent` — The owner entity of the changed NW2Var
- `string name` — The name of the changed NW2Var
- `any oldval` — The old value of the NW2Var
- `any newval` — The new value of the NW2Var

**Retorna:**

*(sin retorno)*

---

### `GM:EntityRemoved` `[client/server]`

Called right before removal of an entity.
This hook is called clientside during full updates due to how networking works in the Source Engine.

This can happen when the client briefly loses connection to the server, and can be simulated via `cl_fullupdate` for testing purposes.

**Argumentos:**

- `Entity ent` — Entity being removed
- `boolean fullUpdate` — Whether the removal is happening due to a full update clientside.

The entity may or **may not** be recreated immediately after, depending on whether it is in the local player's [PVS](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community"). (See Entity:IsDormant)

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/shared.lua:98`*

---

### `GM:EntityTakeDamage` `[server]`

Called when an entity is about to take damage. You can modify all parts of the damage info in this hook or completely block the damage event.

See GM:PostEntityTakeDamage if you wish to hook the final damage event.

Applying damage from this hook to the entity taking damage will lead to infinite loop/crash.

**Argumentos:**

- `Entity target` — The entity taking damage
- `CTakeDamageInfo dmg` — Detailed information about the damage event.

**Retorna:**

- `boolean` — Return true to completely block the damage event

*Fuente: `gamemodes/base/gamemode/init.lua:71`*

---

### `GM:FindUseEntity` `[client/server]`

This hook polls the entity the player use action should be applied to.

The default behavior of this hook is in [CBasePlayer::FindUseEntity](https://github.com/ValveSoftware/source-sdk-2013/blob/0d8dceea4310fde5706b3ce1c70609d72a38efdf/mp/src/game/shared/baseplayer_shared.cpp#L1068-L1270). Despite CBasePlayer::FindUseEntity being defined shared, it is only called serverside in practice, so this hook will be only called serverside, as well. It is possible for modules to call it clientside, so the Lua code should still be treated as shared.

**Argumentos:**

- `Player ply` — The player who initiated the use action.
- `Entity defaultEnt` — The entity that was chosen by the engine.

**Retorna:**

- `Entity` — The entity to use instead of default entity

*Fuente: `gamemodes/base/gamemode/player_shd.lua:103`*

---

### `GM:FinishChat` `[client]`

Runs when user cancels/finishes typing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:237`*

---

### `GM:FinishMove` `[client/server]`

Called after GM:Move, applies all the changes from the CMoveData to the player.

See Game Movement for an explanation on the move system.

**Argumentos:**

- `Player ply` — Player
- `CMoveData mv` — Movement data

**Retorna:**

- `boolean` — Return true to suppress default engine behavior, i.e. declare that you have already moved the player according to the move data in a custom way.

*Fuente: `gamemodes/base/gamemode/shared.lua:189`*

---

### `GM:ForceDermaSkin` `[client]`

Called to allow override of the default Derma skin for all panels.

This hook is only called on Lua start up, changing its value (or adding new hooks) after it has been already called will not have any effect.
You can Panel:SetSkin "Default" (or other skins) on the frame/base panel and they will still take priority

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — A **case sensitive** Derma skin name to be used as default, registered previously via derma.DefineSkin.

Returning nothing, nil or invalid name will make it fallback to the "Default" skin.

*Fuente: `gamemodes/base/gamemode/cl_init.lua:437`*

---

### `GM:GUIMouseDoublePressed` `[client]`

Called when the mouse has been double clicked on any panel derived from CGModBase, such as the panel used by gui.EnableScreenClicker and the panel used by Panel:ParentToHUD.

By default this hook calls GM:GUIMousePressed.

**Argumentos:**

- `number mouseCode` — The code of the mouse button pressed, see Enums/MOUSE
- `Vector aimVector` — A normalized vector pointing in the direction the client has clicked

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:99`*

---

### `GM:GUIMousePressed` `[client]`

Called whenever a players presses a mouse key on the context menu in Sandbox or on any panel derived from CGModBase, such as the panel used by gui.EnableScreenClicker and the panel used by Panel:ParentToHUD.

See GM:VGUIMousePressed for a hook that is called on all VGUI elements.

**Argumentos:**

- `number mouseCode` — The key that the player pressed using Enums/MOUSE.
- `Vector aimVector` — A normalized direction vector local to the camera. Internally, this is  gui.ScreenToVector( gui.MousePos() ).

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:681`*

---

### `GM:GUIMouseReleased` `[client]`

Called whenever a players releases a mouse key on the context menu in Sandbox or on any panel derived from CGModBase, such as the panel used by gui.EnableScreenClicker and the panel used by Panel:ParentToHUD.

**Argumentos:**

- `number mouseCode` — The key the player released, see Enums/MOUSE
- `Vector aimVector` — A normalized direction vector local to the camera. Internally this is  gui.ScreenToVector( gui.MousePos() ).

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:688`*

---

### `GM:GameContentChanged` `[client/menu/server]`

Called when game content has been changed, for example an addon or a mountable game was (un)mounted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:GetDeathNoticeEntityName` `[server]`

An internal function used to get an untranslated string to show in the kill feed as the entity's name. See GM:SendDeathNotice

**Argumentos:**

- `string|Entity name` — The name of the entity.

**Retorna:**

- `string` — The untranslated name for given NPC. The translation/localization would happen on the client.

*Fuente: `gamemodes/base/gamemode/npc.lua:49`*

---

### `GM:GetFallDamage` `[server]`

Called when a player takes damage from falling, allows to override the damage.

**Argumentos:**

- `Player ply` — The player
- `number speed` — The fall speed

**Retorna:**

- `number` — New fall damage

*Fuente: `gamemodes/base/gamemode/player.lua:727`*

---

### `GM:GetGameDescription` `[client/server]`

Called when the game(server) needs to update the text shown in the server browser as the gamemode. Runs at a ~2s interval, runs even when the server is hibernating.

This hook (and the `sv_gamename_override` command) may not work on some popular gamemodes like DarkRP or Trouble Terrorist Town. This is not a bug, it's just how it works. See [here](https://github.com/Facepunch/garrysmod-issues/issues/4637#issuecomment-677884989) for more information.

Also, it **only** works on dedicated servers and is called at regular intervals (about one second) **even** if the server has no players and the hibernation function is enabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The text to be shown in the server browser as the gamemode.

*Fuente: `gamemodes/base/gamemode/shared.lua:76`*

---

### `GM:GetMotionBlurValues` `[client]`

Allows you to modify the Source Engine's motion blur shaders.

**Argumentos:**

- `number horizontal` — The amount of horizontal blur.
- `number vertical` — The amount of vertical  blur.
- `number forward` — The amount of forward/radial blur.
- `number rotational` — The amount of rotational blur.

**Retorna:**

- `number` — New amount of horizontal blur.
- `number` — New amount of vertical blur.
- `number` — New amount of forward/radial blur.
- `number` — New amount of rotational blur.

*Fuente: `gamemodes/base/gamemode/cl_init.lua:462`*

---

### `GM:GetPreferredCarryAngles` `[server]`

Called to determine preferred carry angles for the entity. It works for both, +use pickup and gravity gun pickup.

Due to nature of the gravity gun coding in multiplayer, this hook **MAY** seem to not work ( but rest assured it does ), due to clientside prediction not knowing the carry angles. The +use pickup doesn't present this issue as it doesn't predict the player carrying the object clientside ( as you may notice by the prop lagging behind in multiplayer )

This hook can **not** override preferred carry angles of props such as the sawblade and the harpoon.

**Argumentos:**

- `Entity ent` — The entity to generate carry angles for
- `Player ply` — The player who is holding the object

**Retorna:**

- `Angle` — The preferred carry angles for the entity.

---

### `GM:GetTeamColor` `[client]`

Returns the color for the given entity's team. This is used in chat and deathnotice text.

**Argumentos:**

- `Entity ent` — Entity

**Retorna:**

- `Color` — Team Color

*Fuente: `gamemodes/base/gamemode/cl_init.lua:124`*

---

### `GM:GetTeamNumColor` `[client]`

Returns the team color for the given team index.

**Argumentos:**

- `number team` — Team index

**Retorna:**

- `Color` — Team Color

*Fuente: `gamemodes/base/gamemode/cl_init.lua:136`*

---

### `GM:GrabEarAnimation` `[client/server]`

Override this hook to disable/change ear-grabbing in your gamemode. By default, it is not called anywhere on the server.

**Argumentos:**

- `Player ply` — Player

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/animations.lua:249`*

---

### `GM:GravGunOnDropped` `[server]`

Called when an entity is released by a gravity gun.

See GM:PhysgunDrop for the Physics Gun drop variant.

**Argumentos:**

- `Player ply` — Player who is wielding the gravity gun
- `Entity ent` — The entity that has been dropped

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/gravitygun.lua:33`*

---

### `GM:GravGunOnPickedUp` `[server]`

Called when an entity is picked up by a gravity gun.

See GM:OnPlayerPhysicsPickup for the player `+use` pickup variant.
See GM:OnPhysgunPickup for the Physics Gun pickup variant.

**Argumentos:**

- `Player ply` — The player wielding the gravity gun
- `Entity ent` — The entity that has been picked up by the gravity gun

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/gravitygun.lua:25`*

---

### `GM:GravGunPickupAllowed` `[server]`

Called every tick to poll whether a player is allowed to pick up an entity with the gravity gun or not.

See GM:AllowPlayerPickup for the +USE pickup variant.
See GM:PhysgunPickup for the Physics Gun pickup variant.

Calls ENTITY:GravGunPickupAllowed on the entity being hovered every frame in Sandbox-derived gamemodes.

**Argumentos:**

- `Player ply` — The player wielding the gravity gun
- `Entity ent` — The entity the player is attempting to pick up

**Retorna:**

- `boolean` — Return true to allow entity pick up

*Fuente: `gamemodes/base/gamemode/gravitygun.lua:15`*

---

### `GM:GravGunPunt` `[client/server]`

Called when an entity is about to be punted with the gravity gun (primary fire).

By default this function makes ENTITY:GravGunPunt work in Sandbox derived gamemodes.

**Argumentos:**

- `Player ply` — The player wielding the gravity gun
- `Entity ent` — The entity the player is attempting to punt

**Retorna:**

- `boolean` — Return true to allow and false to disallow.

*Fuente: `gamemodes/base/gamemode/gravitygun.lua:7`*

---

### `GM:HUDAmmoPickedUp` `[client]`

Called when the client has picked up ammo. Override to disable default HUD notification.

**Argumentos:**

- `string itemName` — Name of the item (ammo) picked up
- `number amount` — Amount of the item (ammo) picked up

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_hudpickup.lua:64`*

---

### `GM:HUDDrawPickupHistory` `[client]`

Renders the HUD pick-up history. Override to hide default or draw your own HUD.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_hudpickup.lua:94`*

---

### `GM:HUDDrawScoreBoard` `[client]`

Called every frame to render the scoreboard.

It is recommended to use Derma and VGUI for this job instead of this hook. Called right after GM:HUDPaint.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_scoreboard.lua:294`*

---

### `GM:HUDDrawTargetID` `[client]`

Called from GM:HUDPaint to draw player info when you hover over a player with your crosshair or mouse.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Should the player info be drawn.

*Fuente: `gamemodes/base/gamemode/cl_targetid.lua:6`*

---

### `GM:HUDItemPickedUp` `[client]`

Called when an item has been picked up. Override to disable the default HUD notification.

**Argumentos:**

- `string itemName` — Name of the picked up item

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_hudpickup.lua:36`*

---

### `GM:HUDPaint` `[client]`

Called whenever the HUD should be drawn.

This is the ideal place to draw custom HUD elements.

To prevent the default game HUD from drawing, use GM:HUDShouldDraw.

This hook does **not** get called when the Camera SWEP is held, or when the esc menu is open.
If you need to draw in those situations, use GM:DrawOverlay instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:80`*

---

### `GM:HUDPaintBackground` `[client]`

Called before GM:HUDPaint when the HUD background is being drawn.

Just like GM:HUDPaint, this hook will not be called when the main menu is visible. GM:PostDrawHUD does not have this behavior.

Things rendered in this hook will **always** appear behind things rendered in GM:HUDPaint.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:92`*

---

### `GM:HUDShouldDraw` `[client]`

Called when the Gamemode is about to draw a given element on the client's HUD (heads-up display).

This hook is called HUNDREDS of times per second (more than 5 times per frame on average). You shouldn't be performing any computationally intensive operations. For Weapons you SHOULD use WEAPON:HUDShouldDraw instead.

**Argumentos:**

- `string name` — The name of the HUD element. You can find a full list of HUD elements for this hook HUD_Element_List.

**Retorna:**

- `boolean` — Return false to prevent the given element from being drawn on the client's screen.

*Fuente: `gamemodes/base/gamemode/cl_init.lua:49`*

---

### `GM:HUDWeaponPickedUp` `[client]`

Called when a weapon has been picked up. Override to disable the default HUD notification.

**Argumentos:**

- `Weapon weapon` — The picked up weapon

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_hudpickup.lua:36`*

---

### `GM:HandlePlayerArmorReduction` `[server]`

Called to handle player armor reduction, when player receives damage.

Clarify hook order with other damage hooks.

**Argumentos:**

- `Player ply` — The player that took damage.
- `CTakeDamageInfo dmginfo` — The taken damage.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player.lua:829`*

---

### `GM:HandlePlayerDriving` `[client/server]`

Allows to override player driving animations.

**Argumentos:**

- `Player ply` — Player to process

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:139`*

---

### `GM:HandlePlayerDucking` `[client/server]`

Allows to override player crouch animations.

**Argumentos:**

- `Player ply` — The player
- `Vector velocity` — Players velocity

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:55`*

---

### `GM:HandlePlayerJumping` `[client/server]`

Called every frame by the player model animation system. Allows to override player jumping animations.

**Argumentos:**

- `Player ply` — The player
- `Vector velocity` — Players velocity

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:2`*

---

### `GM:HandlePlayerLanding` `[client/server]`

Called every frame by the player model animation system. Allows to override player landing animations.

**Argumentos:**

- `Player ply` — The player
- `Vector velocity` — Players velocity
- `boolean onGround` — Was the player on ground?

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:129`*

---

### `GM:HandlePlayerNoClipping` `[client/server]`

Allows to override player noclip animations.

**Argumentos:**

- `Player ply` — The player
- `Vector velocity` — Players velocity

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:71`*

---

### `GM:HandlePlayerSwimming` `[client/server]`

Allows to override player swimming animations.

**Argumentos:**

- `Player ply` — The player
- `Vector velocity` — Players velocity

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:113`*

---

### `GM:HandlePlayerVaulting` `[client/server]`

Allows to override player flying ( in mid-air, not noclipping ) animations.

**Argumentos:**

- `Player ply` — The player
- `Vector velocity` — Players velocity

**Retorna:**

- `boolean` — Return true if we've changed/set the animation, false otherwise

*Fuente: `gamemodes/base/gamemode/animations.lua:100`*

---

### `GM:HideTeam` `[client]`

Hides the team selection panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_pickteam.lua:58`*

---

### `GM:InitPostEntity` `[client/server]`

Called after all the entities are initialized. Starting from this hook Global.LocalPlayer will return valid object.

At this point the client only knows about the entities that are within the spawnpoints' [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community"). For instance, if the server sends an entity that is not within this PVS, the client will receive it as NULL entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:Initialize` `[client/server]`

Called after the gamemode loads and starts.

No entities would be present at the time this hook is called, please see GM:InitPostEntity for a one time fire hook after all map entities have been initialized.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:InputMouseApply` `[client]`

Allows you to modify the supplied User Command with mouse input. This could be used to make moving the mouse do funky things to view angles.

**Argumentos:**

- `CUserCmd cmd` — User command.
- `number x` — The amount of mouse movement across the X axis this frame.
- `number y` — The amount of mouse movement across the Y axis this frame.
- `Angle ang` — The current view angle.

**Retorna:**

- `boolean` — Return true if we modified something.

---

### `GM:IsSpawnpointSuitable` `[server]`

Check if a player can spawn at a certain spawnpoint.

**Argumentos:**

- `Player ply` — The player who is spawned
- `Entity spawnpoint` — The spawnpoint entity (on the map).
- `boolean makeSuitable` — If this is true, it'll kill any players blocking the spawnpoint.

**Retorna:**

- `boolean` — Return true to indicate that the spawnpoint is suitable (Allow for the player to spawn here), false to prevent spawning.

*Fuente: `gamemodes/base/gamemode/player.lua:330`*

---

### `GM:KeyPress` `[client/server]`

Called whenever a player pressed a key included within the IN keys.

For a more general purpose function that handles all kinds of input, see GM:PlayerButtonDown.
See GM:KeyRelease for the key release event.

Despite being a predicted hook, it will still be called in singleplayer for your convenience.

Due to this being a predicted hook, Global.ParticleEffects created only serverside from this hook will not be networked to the client, so make sure to do that on both realms.

**Argumentos:**

- `Player ply` — The player pressing the key. If running client-side, this will always be Global.LocalPlayer.
- `number key` — The key that the player pressed using Enums/IN.

**Retorna:**

*(sin retorno)*

---

### `GM:KeyRelease` `[client/server]`

Runs when a IN key was released by a player.

For a more general purpose function that handles all kinds of input, see GM:PlayerButtonUp.
See GM:KeyPress for the key press event.

Despite being a predicted hook, it will still be called in singleplayer for your convenience.

**Argumentos:**

- `Player ply` — The player releasing the key. If running client-side, this will always be Global.LocalPlayer.
- `number key` — The key that the player released using Enums/IN.

**Retorna:**

*(sin retorno)*

---

### `GM:LoadGModSave` `[server]`

Called from `gm_load` when the game should load a map.

**Argumentos:**

- `string data` — Compressed save data
- `string map` — The name of the map the save was created on
- `number timestamp` — The time the save was created on. Will always be 0.

**Retorna:**

*(sin retorno)*

---

### `GM:LoadGModSaveFailed` `[menu]`

Called while an addon from the Steam workshop is downloading. Used by default to update details on the fancy workshop download panel.

**Argumentos:**

- `string reason` — Failure Reason.
- `string workshopid` — the workshop ID of the missing map (if found). Can be an empty string

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:40`*

---

### `GM:MenuStart` `[menu]`

Called when `menu.lua` has finished loading.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:MouthMoveAnimation` `[client/server]`

Override this gamemode function to disable mouth movement when talking on voice chat. By default, it is not called anywhere on the server.

**Argumentos:**

- `Player ply` — Player in question

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/animations.lua:276`*

---

### `GM:Move` `[client/server]`

The Move hook is called for you to manipulate the player's MoveData.

You shouldn't adjust the player's position in any way in the move hook. This is because due to prediction errors, the netcode might run the move hook multiple times as packets arrive late. Therefore you should only adjust the movedata construct in this hook.

Generally you shouldn't have to use this hook - if you want to make a custom move type you should look at the drive system.

This hook is called after GM:PlayerTick.

See Game Movement for an explanation on the move system.

**Argumentos:**

- `Player ply` — Player
- `CMoveData mv` — Movement information

**Retorna:**

- `boolean` — Return true to suppress default engine action.

---

### `GM:NeedsDepthPass` `[client]`

Returning true in this hook will cause it to render depth buffers defined with render.GetResolvedFullFrameDepth.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Render depth buffer

---

### `GM:NetworkEntityCreated` `[client]`

Called when an entity has been created over the network.

**Argumentos:**

- `Entity ent` — Created entity

**Retorna:**

*(sin retorno)*

---

### `GM:NetworkIDValidated` `[server]`

Called when a player's SteamID has been validated by Steam.

See also GM:PlayerAuthed and Player:IsFullyAuthenticated.

This hook doesn't work intentionally in singleplayer [because the SteamID is not validated](https://github.com/Facepunch/garrysmod-issues/issues/4906#issuecomment-819337130) in that case. This also applies to `sv_lan 1` servers for every duplicate `-multirun` client.

**Argumentos:**

- `string name` — Player name
- `string steamID` — Player SteamID
- `string ownerID` — SteamID64 of the game license owner, in case Family Sharing is used. See also Player:OwnerSteamID64

**Retorna:**

*(sin retorno)*

---

### `GM:NotifyShouldTransmit` `[client]`

Called whenever this entity changes its transmission state for this Global.LocalPlayer, such as exiting or re entering the [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community").

This is the best place to handle the reset of Entity:SetPredictable, as this would be usually called when the player lags and requests a full packet update.

When the entity stops transmitting, Entity:IsDormant will only return true **after** this hook.

**Argumentos:**

- `Entity entity` — The entity that changed its transmission state.
- `boolean shouldtransmit` — `True` if we started transmitting to this client and `false` if we stopped.

**Retorna:**

*(sin retorno)*

---

### `GM:OnAchievementAchieved` `[client]`

Called when a player has achieved an achievement. You can get the name and other information from an achievement ID with the achievements library.

**Argumentos:**

- `Player ply` — The player that earned the achievement
- `number achievement` — The index of the achievement

**Retorna:**

*(sin retorno)*

---

### `GM:OnChatTab` `[client]`

Called when the local player presses TAB while having their chatbox opened.

This function now uses player.Iterator. This means it can't run all the time, as an error in the GM:OnEntityCreated or GM:EntityRemoved hooks is likely to interrupt it. Make sure that no addon causes an error in these hooks.

**Argumentos:**

- `string text` — The currently typed into chatbox text

**Retorna:**

- `string` — What should be placed into the chatbox instead of what currently is when player presses tab

*Fuente: `gamemodes/base/gamemode/cl_init.lua:184`*

---

### `GM:OnCleanup` `[client]`

Called when the player cleans up something.

**Argumentos:**

- `string name` — The name of the cleanup type

**Retorna:**

- `boolean suppress` — Return false to suppress the cleanup notification.

*Fuente: `gamemodes/sandbox/gamemode/cl_init.lua:76`*

---

### `GM:OnClientLuaError` `[server]`

Called on the server when a Lua error occurs on a client and is sent to the server.

This hook allows server-side code to detect and log client-side errors.

See GM:OnLuaError for a hook that captures Lua errors directly within its [realm](States).

Note that the stack argument can contain a table with 0 values. 
Warning: the hook "protects" against lua error spam. If it has 5 errors in less than 1 second, the hook will not receive any of these 4 errors.

**Argumentos:**

- `string error` — The error that occurred. As well as the path and line of the error. Example:
`addons/test/lua/autorun/client/test_error.lua:4: 'then' expected near ''`
- `Player ply` — The player whose client caused the error.
- `table stack` — The Lua error stack trace
- `string name` — Title of the addon that is creating the Lua errors, or "ERROR" if addon is not found.

**Retorna:**

*(sin retorno)*

---

### `GM:OnCloseCaptionEmit` `[client]`

Called when a caption/subtitle has been emitted to the closed caption box.

**Argumentos:**

- `string soundScript` — The name of the soundscript, or `customLuaToken` if it's from gui.AddCaption
- `number duration` — How long the caption should stay for
- `boolean fromPlayer` — Is this caption coming from the player?
- `string fullText` — The caption. Can be nil if its token is not registered

**Retorna:**

- `boolean` — Return `true` to prevent the caption from appearing

---

### `GM:OnContextMenuClose` `[client]`

Called when the context menu keybind (+menu_context) is released, which by default is C.

This hook will not run if input.IsKeyTrapping returns true.

See also GM:OnContextMenuOpen.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnContextMenuOpen` `[client]`

Called when the context menu keybind (`+menu_context`) is pressed, which by default is C.

See also GM:OnContextMenuClose.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnCrazyPhysics` `[client/server]`

Called when the crazy physics detection detects an entity with crazy physics, i.e. position being far outside of the map, velocities being near or at infinity, etc. The primary reason for this system is to prevent program crashes in physics engine.

**Argumentos:**

- `Entity ent` — The entity that was detected as crazy
- `PhysObj physobj` — The physics object that is going crazy

**Retorna:**

*(sin retorno)*

---

### `GM:OnDamagedByExplosion` `[server]`

Called when a player has been hurt by an explosion. Override to disable default sound effect.

**Argumentos:**

- `Player ply` — Player who has been hurt
- `CTakeDamageInfo dmginfo` — Damage info from explosion

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player.lua:554`*

---

### `GM:OnEntityCreated` `[client/server]`

Called as soon as the entity is created. Very little of the entity's properties will be initialized at this stage. (keyvalues, classname, flags, anything), especially on the serverside.

Removing the created entity during this event can lead to unexpected problems. Use Global.SafeRemoveEntityDelayed( entity, 0 ) to safely remove the entity.

**Argumentos:**

- `Entity entity` — The entity

**Retorna:**

*(sin retorno)*

---

### `GM:OnEntityWaterLevelChanged` `[server]`

Called when the Entity:WaterLevel of an entity is changed.

0 - The entity isn't in water.

1 - Slightly submerged (at least to the feet).

2 - The majority of the entity is submerged (at least to the waist).

3 - Completely submerged.

This hook can be considered a physics callback, so changing collision rules (Entity:SetSolidFlags) in it may lead to a crash!

**Argumentos:**

- `Entity entity` — The entity.
- `number old` — Previous water level.
- `number new` — The new water level.

**Retorna:**

*(sin retorno)*

---

### `GM:OnGamemodeLoaded` `[client/server]`

Called when the gamemode is loaded. gmod.GetGamemode will be functional at this point.

Global.LocalPlayer() returns NULL at the time this is run.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnLuaError` `[client/menu/server]`

Called when a Lua error occurs.
If you want to retrieve client errors on the server side, you can use this hook: GM:OnClientLuaError
On the States, this hook will only account for server-side errors, not client-side ones.

**Argumentos:**

- `string error` — The error that occurred.
- `string realm` — Where the Lua error took place, "client", or "server"
- `table stack` — The Lua error stack trace
- `string name` — Title of the addon that is creating the Lua errors, or nil if addon is not found.
- `string id` — Steam Workshop ID of the addon creating Lua errors, if it is an addon.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/errors.lua`*

---

### `GM:OnNPCDropItem` `[server]`

Called whenever an NPC drops an item upon its death, such as health kits, armor batteries, etc.

It will NOT be called for dropped weapons, with exception of Half-Life: Source NPCs, since they don't use actual weapon entities and create a weapon entity on death.
GM:PlayerDroppedWeapon works for NPC weapon drops already. (Yes, it's not a typo)

It will also not be called for live grenades spawned by Zombine.

**Argumentos:**

- `NPC npc` — The killed NPC
- `Entity item` — The item that got dropped by the NPC.

**Retorna:**

*(sin retorno)*

---

### `GM:OnNPCKilled` `[server]`

Called whenever an NPC is killed.

**Argumentos:**

- `NPC npc` — The killed NPC
- `Entity attacker` — The NPCs attacker, the entity that gets the kill credit, for example a player or an NPC.
- `Entity inflictor` — Death inflictor. The entity that did the killing. Not necessarily a weapon.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/npc.lua:74`*

---

### `GM:OnNotifyAddonConflict` `[menu]`

Called when a Addon Conflict occurs, only works in the Menu realm.

**Argumentos:**

- `string addon1` — The first Addon
- `string addon2` — The second Addon
- `string fileName` — The File the Conflict occurred in.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:260`*

---

### `GM:OnPauseMenuBlockedTooManyTimes` `[menu]`

Called when the main menu has been blocked by GM:OnPauseMenuShow four times in a small interval. This is used internally to explain to the user that they can hold SHIFT to force open the main menu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnPauseMenuShow` `[client]`

Called when the pause menu is attempting to be opened. Allows you to prevent the main menu from being opened that time.

The user can hold SHIFT to not call this hook. If the main menu is blocked multiple times in short succession, a warning will be displayed to the end user on how to bypass the hook.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean ShouldOpen` — Should the menu be allowed to open?

---

### `GM:OnPermissionsChanged` `[menu]`

Called when a permission gets Granted or Revoked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/permissions.lua:221`*

---

### `GM:OnPhysgunFreeze` `[server]`

Called when a player freezes an entity with the physgun.

**Argumentos:**

- `Entity weapon` — The weapon that was used to freeze the entity.
- `PhysObj physobj` — Physics object of the entity.
- `Entity ent` — The target entity.
- `Player ply` — The player who tried to freeze the entity.

**Retorna:**

- `boolean` — Return `false` to block the unfreeze.

The unfreezing is handled by the base gamemode hook. This hook has no return value, returning any value will prevent the gamemode hook from running, which is true for every hook.

---

### `GM:OnPhysgunPickup` `[server]`

Called to when a player has successfully picked up an entity with their Physics Gun.

Not to be confused with GM:PhysgunPickup which is called to ask if the player should be able to pick up an entity.

See GM:GravGunOnPickedUp for the Gravity Gun pickup variant.
See GM:OnPlayerPhysicsPickup for the player `+use` pickup variant.

**Argumentos:**

- `Player ply` — The player that has picked up something using the physics gun.
- `Entity ent` — The entity that was picked up.

**Retorna:**

*(sin retorno)*

---

### `GM:OnPhysgunReload` `[server]`

Called when a player reloads with the physgun. Override this to disable default unfreezing behavior.

**Argumentos:**

- `Weapon physgun` — The physgun in question
- `Player ply` — The player wielding the physgun

**Retorna:**

- `boolean` — Whether the player can reload with the physgun or not

---

### `GM:OnPlayerChangedTeam` `[server]`

Use GM:PlayerChangedTeam instead, which works for every Player:SetTeam call.
Called when a player has changed team using GM:PlayerJoinTeam.

This hook will not work with hook.Add and it is only called manually from GM:PlayerJoinTeam by the base gamemode

**Argumentos:**

- `Player ply` — Player who has changed team
- `number oldTeam` — Index of the team the player was originally in
- `number newTeam` — Index of the team the player has changed to

**Retorna:**

*(sin retorno)*

---

### `GM:OnPlayerChat` `[client]`

Called whenever a player sends a chat message. For the serverside equivalent, see GM:PlayerSay.
The input (or suppression) of this hook is based on the output from GM:PlayerSay. Chat events suppressed serverside do not call this hook.

**Argumentos:**

- `Player ply` — The player
- `string text` — The message's text
- `boolean teamChat` — Is the player typing in team chat?
- `boolean isDead` — Is the player dead?

**Retorna:**

- `boolean` — Should the message be suppressed?

*Fuente: `gamemodes/base/gamemode/cl_init.lua:142`*

---

### `GM:OnPlayerHitGround` `[client/server]`

Called when a player makes contact with the ground after a jump or a fall.

**Argumentos:**

- `Entity player` — Player
- `boolean inWater` — Did the player land in water?
- `boolean onFloater` — Did the player land on an object floating in the water?
- `number speed` — The speed at which the player hit the ground

**Retorna:**

- `boolean` — Return true to suppress default action

---

### `GM:OnPlayerJump` `[client/server]`

Called when a player jumps.

**Argumentos:**

- `Entity player` — Player
- `number speed` — The velocity/impulse of the jump

**Retorna:**

*(sin retorno)*

---

### `GM:OnPlayerPhysicsDrop` `[server]`

Called when a player +use drops an entity.

**Argumentos:**

- `Player ply` — The player that dropped the object
- `Entity ent` — The object that was dropped.
- `boolean thrown` — Whether the object was throw or simply let go of.

**Retorna:**

*(sin retorno)*

---

### `GM:OnPlayerPhysicsPickup` `[server]`

Called when a player +use pickups up an entity. This will be called after the entity passes though GM:AllowPlayerPickup.

See GM:GravGunOnPickedUp for the Gravity Gun pickup variant.
See GM:OnPhysgunPickup for the Physics Gun pickup variant.

**Argumentos:**

- `Player ply` — The player that picked up the object
- `Entity ent` — The object that was picked up.

**Retorna:**

*(sin retorno)*

---

### `GM:OnReloaded` `[client/server]`

Called when gamemode has been reloaded by auto refresh.

It seems that this event can be triggered more than once for a single refresh event.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnScreenSizeChanged` `[client]`

Called when the player's screen resolution of the game changes. This also called when changing MSAA settings.

Global.ScrW and Global.ScrH will return the new values when this hook is called.

**Argumentos:**

- `number oldWidth` — The previous width of the game's window.
- `number oldHeight` — The previous height of the game's window.
- `number newWidth` — The new/current width of the game's window.
- `number newHeight` — The new/current height of the game's window.

**Retorna:**

*(sin retorno)*

---

### `GM:OnSpawnMenuClose` `[client]`

Called when a player releases the `+menu` bind on their keyboard, which is bound to Q by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnSpawnMenuOpen` `[client]`

Called when a player presses the `+menu` bind on their keyboard, which is bound to Q by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:OnTextEntryGetFocus` `[client]`

Called when a DTextEntry gets focus.

This hook is run from DTextEntry:OnGetFocus and PANEL:OnMousePressed of DTextEntry.

**Argumentos:**

- `Panel panel` — The panel that got focus

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:354`*

---

### `GM:OnTextEntryLoseFocus` `[client]`

Called when a DTextEntry loses focus.

**Argumentos:**

- `Panel panel` — The panel that lost focus

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:362`*

---

### `GM:OnUndo` `[client]`

Called when the player undoes something.

**Argumentos:**

- `string name` — The name of the undo action
- `string customText` — The custom text for the undo, set by undo.SetCustomUndoText

**Retorna:**

- `boolean suppress` — Return false to suppress the undo notification.

*Fuente: `gamemodes/sandbox/gamemode/cl_init.lua:46`*

---

### `GM:OnViewModelChanged` `[client/server]`

Called when the player changes their weapon to another one - and their viewmodel model changes.

This is not always called clientside.

**Argumentos:**

- `Entity viewmodel` — The viewmodel that is changing
- `string oldModel` — The old model
- `string newModel` — The new model

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/shared.lua:251`*

---

### `GM:PhysgunDrop` `[client/server]`

Called when a player drops an entity with the Physgun.

See GM:GravGunOnDropped for the Gravity Gun drop variant.

**Argumentos:**

- `Player player` — The player who dropped an entity
- `Entity entity` — The dropped entity

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/shared.lua:70`*

---

### `GM:PhysgunPickup` `[client/server]`

Called to determine if a player should be able to pick up an entity with the Physics Gun.

See GM:OnPhysgunPickup for a hook which is called when a player has successfully picked up an entity.

See GM:GravGunPickupAllowed for the Gravity Gun pickup variant.
See GM:AllowPlayerPickup for the `+USE` pickup variant.

**Argumentos:**

- `Player player` — The player that is picking up using the Physics Gun.
- `Entity entity` — The entity that is being picked up.

**Retorna:**

- `boolean` — Returns whether the player can pick up the entity or not.

*Fuente: `gamemodes/base/gamemode/shared.lua:58`*

---

### `GM:PlayerAmmoChanged` `[client/server]`

Called after player's reserve ammo count changes.

**Argumentos:**

- `Player ply` — The player whose ammo is being affected.
- `number ammoID` — The ammo type ID.
- `number oldCount` — The old ammo count.
- `number newCount` — The new ammo count.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerAuthed` `[server]`

Called after the player gets their Player:UniqueID set for the first time. This hook will also be called in singleplayer.

See GM:NetworkIDValidated for a hook that is called with the player's SteamID is validated by Steam.

**Argumentos:**

- `Player ply` — The player
- `string steamid` — The player's SteamID.
This will always be an empty string `""` in singleplayer.
- `string uniqueid` — The player's UniqueID.
This will always be `"1"` in singleplayer.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerBindPress` `[client]`

Runs when a bind has been pressed. Allows to block commands.

By using the "alias" console command, this hook can be effectively circumvented. To prevent this use input.TranslateAlias.

To stop the user from using `+attack`, `+left` and any other movement commands of the sort, please look into using GM:StartCommand instead.

The third argument will always be true.

This does not run for function keys binds (F1-F12).

**Argumentos:**

- `Player ply` — The player who used the command; this will always be equal to Global.LocalPlayer.
- `string bind` — The bind command.
- `boolean pressed` — If the bind was activated or deactivated.
- `number code` — The button code. See Enums/BUTTON_CODE Enums.

**Retorna:**

- `boolean` — Return `true` to prevent the bind.

---

### `GM:PlayerButtonDown` `[client/server]`

Called when a player presses a button.

This will not be called if player has a panel opened with keyboard input enabled, use PANEL:OnKeyCodePressed instead.

See GM:KeyPress for an alternative that uses Enums/IN.
See GM:PlayerButtonUp for the "key release" event.

**Argumentos:**

- `Player ply` — Player who pressed the button
- `number{BUTTON_CODE} button` — The button, see Enums/BUTTON_CODE

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerButtonUp` `[client/server]`

Called when a player releases a button.

This will not be called if player has a panel opened with keyboard input enabled, use PANEL:OnKeyCodeReleased instead.

See GM:KeyRelease for an alternative that uses Enums/IN.
See GM:PlayerButtonDown for the "key press" event.

**Argumentos:**

- `Player ply` — Player who released the button
- `number{BUTTON_CODE} button` — The button, see Enums/BUTTON_CODE

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerCanHearPlayersVoice` `[server]`

Decides whether a player can hear another player using voice chat.

This hook is called **players count * speaking players count** times every 0.3 seconds if at least 1 player is talking or every 5 seconds if no one is talking.
You should ensure that your code is efficient, or this will definitely influence performance.

**Argumentos:**

- `Player listener` — The listening player.
- `Player talker` — The talking player.

**Retorna:**

- `boolean` — Return `true` if the listener should hear the talker, `false` if they shouldn't.
- `boolean` — 3D sound. If set to `true`, will fade out the sound the further away listener is from the  talker, the voice will also be in stereo, and not mono.

*Fuente: `gamemodes/base/gamemode/player.lua:754`*

---

### `GM:PlayerCanJoinTeam` `[server]`

Returns whether or not a player is allowed to join a team
This hook will not work with hook.Add and it is only called manually from GM:PlayerJoinTeam by the base gamemode

**Argumentos:**

- `Player ply` — Player attempting to switch teams
- `number team` — Index of the team

**Retorna:**

- `boolean` — Allowed to switch

---

### `GM:PlayerCanPickupItem` `[server]`

Returns whether or not a player is allowed to pick an item up. (ammo, health, armor)

This will typically only work for base game entities, unless mod authors that implement similar entities also manually call this hook.

See GM:PlayerCanPickupWeapon for a hook that controls weapon pickups.

**Argumentos:**

- `Player ply` — Player attempting to pick up
- `Entity item` — The item the player is attempting to pick up

**Retorna:**

- `boolean` — Allow pick up

---

### `GM:PlayerCanPickupWeapon` `[server]`

Returns whether or not a player is allowed to pick up a weapon.

If this returns `false`, Player:Give won't work.

See GM:PlayerCanPickupItem for a hook that affects things like health kits, armor batteries and ammo entities.

See GM:WeaponEquip for a hook that is called when a player successfully picks up a weapon after passing this hook.

**Argumentos:**

- `Player ply` — The player attempting to pick up the weapon.
- `Weapon weapon` — The weapon entity in question.

**Retorna:**

- `boolean` — `false` to disallow pickup.

---

### `GM:PlayerCanSeePlayersChat` `[server]`

Returns whether or not the player can see the other player's chat.
The **speaker** parameter does not have to be a valid Player object which happens when console messages are displayed for example.

**Argumentos:**

- `string text` — The chat text
- `boolean teamOnly` — If the message is team-only
- `Player listener` — The player receiving the message
- `Player speaker` — The player sending the message.

**Retorna:**

- `boolean` — Can see other player's chat

*Fuente: `gamemodes/base/gamemode/player.lua:763`*

---

### `GM:PlayerChangedTeam` `[server]`

Called when a player has changed team using Player:SetTeam.
Avoid calling Player:SetTeam in this hook as it may cause an infinite loop!
Player:Team inside this hook will return `oldTeam`.

**Argumentos:**

- `Player ply` — Player whose team has changed.
- `number oldTeam` — Index of the team the player was originally in. See team.GetName and the team library.
- `number newTeam` — Index of the team the player has changed to.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerCheckLimit` `[client/server]`

Called whenever a player is about to spawn something to see if they hit a limit for whatever they are spawning.
This hook will not be called in singleplayer, as singleplayer does not have limits.

**Argumentos:**

- `Player ply` — The player who is trying to spawn something.
- `string limitName` — The limit's name.
- `number current` — The amount of whatever player is trying to spawn that the player already has spawned.
- `number defaultMax` — The default maximum count, as dictated by the `sbox_max` convar on the server. This is the amount that will be used if nothing is returned from this hook.

**Retorna:**

- `boolean` — Return `false` to indicate the limit was hit, or nothing otherwise

---

### `GM:PlayerClassChanged` `[client]`

Called whenever a player's class is changed on the server-side with player_manager.SetPlayerClass.

**Argumentos:**

- `Player ply` — The player whose class has been changed.
- `number newID` — The network ID of the player class's name string, or `0` if we are clearing a player class from the player.

Pass this into util.NetworkIDToString to retrieve the proper name of the player class.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/cl_init.lua:680`*

---

### `GM:PlayerConnect` `[client/server]`

Executes when a player connects to the server. Called before the player has been assigned a Player:UserID and entity. See the gameevent/player_connect gameevent for a version of this hook called after the player entity has been created.

This is only called clientside for listen server hosts.
This is not called clientside for the local player.

**Argumentos:**

- `string name` — The player's name.
- `string ip` — The player's IP address. Will be "none" for bots.

This argument will only be passed serverside.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerDeath` `[server]`

Called when a player is killed by Player:Kill or any other normal means.

This hook is **not** called if the player is killed by Player:KillSilent. See GM:PlayerSilentDeath for that.

* GM:DoPlayerDeath is called **before** this hook.
* GM:PostPlayerDeath is called **after** this hook.

See Player:LastHitGroup if you need to get the last hit hitgroup of the player.

Player:Alive will return false in this hook.

**Argumentos:**

- `Player victim` — The player who died
- `Entity inflictor` — Item used to kill the victim
- `Entity attacker` — Player or entity that killed the victim

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerDeathSound` `[server]`

Returns whether or not the default death sound should be muted.

**Argumentos:**

- `Player ply` — The player

**Retorna:**

- `boolean` — Mute death sound

---

### `GM:PlayerDeathThink` `[server]`

Called every think while the player is dead. The return value will determine if the player respawns.

Overwriting this function will prevent players from respawning by pressing space or clicking.

This hook is not called for players with the Enums/FL flag applied.

**Argumentos:**

- `Player ply` — The player affected in the hook.

**Retorna:**

- `boolean` — This hook does not define a return value. The description below just describes how the hook library works in general.

Return a non-nil value to prevent the current gamemode from handling this event. In the `base` gamemode, the gamemode handles player respawning in this hook. So blocking the gamemode hook will prevent player from respawning, in this specific case.

---

### `GM:PlayerDisconnected` `[server]`

Called when a player leaves the server. See the gameevent/player_disconnect for a shared version of this hook.

This is not called in single-player or listen servers for the host.

**Argumentos:**

- `Player ply` — the player

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerDriveAnimate` `[client/server]`

Called to update the player's animation during a drive.

**Argumentos:**

- `Player ply` — The driving player

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerDroppedWeapon` `[server]`

Called when a weapon is dropped by a player via Player:DropWeapon. Despite its name, this hook is also called for NPC weapon drops.

Also called when a weapon is removed from a player via Player:StripWeapon.

See also GM:WeaponEquip for a hook when a player picks up a weapon.

The weapon's Entity:GetOwner will be NULL at the time this hook is called.

WEAPON:OnDrop will be called before this hook is.

**Argumentos:**

- `Player|NPC owner` — The player or NPC who owned this weapon before it was dropped.
- `Weapon wep` — The weapon that was dropped.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerEndVoice` `[client]`

Called when player stops using voice chat.

**Argumentos:**

- `Player ply` — Player who stopped talking

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerEnteredVehicle` `[server]`

Called when a player enters a vehicle.

Called just after GM:CanPlayerEnterVehicle.

See also GM:PlayerLeaveVehicle.

**Argumentos:**

- `Player ply` — Player who entered vehicle.
- `Vehicle veh` — Vehicle the player entered.
- `number role` — The seat number.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerFireAnimationEvent` `[client]`

Called before firing clientside animation events on a player model.

See GM:PlayerHandleAnimEvent for the serverside version.

**Argumentos:**

- `Player ply` — The player who has triggered the event.
- `Vector pos` — Position of the effect
- `Angle ang` — Angle of the effect
- `number event` — The event ID of happened even. See [this page](http://developer.valvesoftware.com/wiki/Animation_Events).
- `string name` — Name of the event

**Retorna:**

- `boolean` — Return true to disable the effect

---

### `GM:PlayerFootstep` `[client/server]`

Called whenever a player steps. Return true to mute the normal sound.

See GM:PlayerStepSoundTime for a related hook about footstep frequency.
This hook is called on all clients.

**Argumentos:**

- `Player ply` — The stepping player
- `Vector pos` — The position of the step
- `number foot` — Foot that is stepped. 0 for left, 1 for right
- `string sound` — Sound that is going to play
- `number volume` — Volume of the footstep
- `CRecipientFilter filter` — The Recipient filter of players who can hear the footstep

**Retorna:**

- `boolean` — Prevent default step sound

---

### `GM:PlayerFrozeObject` `[server]`

Called when a player freezes an object.

**Argumentos:**

- `Player ply` — Player who has frozen an object
- `Entity ent` — The frozen object
- `PhysObj physobj` — The frozen physics object of the frozen entity ( For ragdolls )

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerHandleAnimEvent` `[server]`

Called before firing serverside animation events on the player models.

See GM:PlayerFireAnimationEvent for the clientside version.

**Argumentos:**

- `Player ply` — The player who has triggered the event.
- `number event` — The event ID of happened even. See [this page](http://developer.valvesoftware.com/wiki/Animation_Events).
- `number eventTime` — The absolute time this event occurred using Global.CurTime.
- `number cycle` — The frame this event occurred as a number between 0 and 1.
- `number type` — Event type. See [the Source SDK](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/shared/eventlist.h#L14-L23).
- `string options` — Name or options of this event.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerHurt` `[server]`

Called when a player gets hurt.

**Argumentos:**

- `Player victim` — Victim
- `Entity attacker` — Attacker Entity
- `number healthRemaining` — Remaining Health
- `number damageTaken` — Damage Taken

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerInitialSpawn` `[server]`

Called when the player spawns for the first time.

See GM:PlayerSpawn for a hook called every player spawn.

This hook is called before the player has fully loaded, when the player is still in seeing the `Starting Lua` screen. For example, trying to use the Entity:GetModel function will return the default model (`models/player.mdl`).

 Sending net messages to the spawned player in this hook may cause them to be received before the player finishes loading, for example Global.LocalPlayer might return NULL since GM:InitPostEntity may have not been called yet clientside though the net message **won't** be lost and the client still should receive it (more information here: https://github.com/Facepunch/garrysmod-requests/issues/718).

Workaround without networking:
```
local load_queue = {}

hook.Add( "PlayerInitialSpawn", "myAddonName/Load", function( ply )
load_queue[ ply ] = true
end )

hook.Add( "StartCommand", "myAddonName/Load", function( ply, cmd )
if load_queue[ ply ] and not cmd:IsForced() then
load_queue[ ply ] = nil

-- Send what you need here if it requires the client to be fully loaded!
end
end )
```

With networking:
```
-- CLIENT
hook.Add( "InitPostEntity", "Ready", function()
net.Start( "cool_addon_client_ready" )
net.SendToServer()
end )
```
```
-- SERVER
util.AddNetworkString( "cool_addon_client_ready" )

net.Receive( "cool_addon_client_ready", function( len, ply )
-- Send what you need here!
end )
```

**Argumentos:**

- `Player player` — The player who spawned.
- `boolean transition` — If `true`, the player just spawned from a map transition.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerJoinTeam` `[server]`

Makes the player join a specified team. This is a convenience function that calls Player:SetTeam and runs the GM:OnPlayerChangedTeam hook.

**Argumentos:**

- `Player ply` — Player to force
- `number team` — The team to put player into

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerLeaveVehicle` `[server]`

Called when a player leaves a vehicle for any reason, including Player:ExitVehicle.

See GM:PlayerEnteredVehicle for the opposite hook.

For vehicles with exit animations, this will be called **at the end** of the animation, **not at the start**!

**Argumentos:**

- `Player ply` — Player who left a vehicle.
- `Vehicle veh` — Vehicle the player left.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerLoadout` `[server]`

Called to give players the default set of weapons.

This function may not work in your custom gamemode if you have overridden your GM:PlayerSpawn and you do not use self.BaseClass.PlayerSpawn or hook.Call.

**Argumentos:**

- `Player ply` — Player to give weapons to.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerNoClip` `[client/server]`

Called when a player tries to switch noclip mode.

Enums/MOVETYPE#MOVETYPE_NOCLIP can be used to determine if a player is currently in noclip mode.

**Argumentos:**

- `Player ply` — The person who entered/exited noclip
- `boolean desiredState` — Represents the noclip state (on/off) the user will enter if this hook allows them to.

**Retorna:**

- `boolean` — Return false to disallow the switch.

---

### `GM:PlayerPostThink` `[client/server]`

Called after the player's think, just after GM:FinishMove.

On the client side, it is only called for the local player.

**Argumentos:**

- `Player ply` — The player

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerRequestTeam` `[server]`

Request a player to join the team. This function will check if the team is available to join or not.

This hook is called when the player runs "changeteam" in the console.

To prevent the player from changing teams, see GM:PlayerCanJoinTeam

**Argumentos:**

- `Player ply` — The player to try to put into a team
- `number team` — Team to put the player into if the checks succeeded

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerSay` `[server]`

Called when a player dispatched a chat message. For the clientside equivalent, see GM:OnPlayerChat.

It may be more reliable to use gameevent/player_say to read messages serverside because addons commonly return values in this hook to change chat messages.

**Argumentos:**

- `Player sender` — The player which sent the message.
- `string text` — The message's content.
- `boolean teamChat` — Return false when the message is for everyone, true when the message is for the sender's team.

**Retorna:**

- `string` — What to show instead of original text. Set to `""` to stop the message from displaying.

---

### `GM:PlayerSelectSpawn` `[server]`

Called to determine a spawn point for a player to spawn at.
The spawn point entity will also impact the player's eye angle. For example, if the entity is upside down, the player's view will be as well.

**Argumentos:**

- `Player ply` — The player who needs a spawn point
- `boolean transition` — If true, the player just spawned from a map transition (`trigger_changelevel`). You probably want to not return an entity for that case to not override player's position.

**Retorna:**

- `Entity` — The spawn point entity to spawn the player at

*Fuente: `gamemodes/base/gamemode/player.lua:360`*

---

### `GM:PlayerSelectTeamSpawn` `[server]`

Find a team spawn point entity for this player.

**Argumentos:**

- `number team` — Players team
- `Player ply` — The player

**Retorna:**

- `Entity` — The entity to use as a spawn point.

*Fuente: `gamemodes/base/gamemode/player.lua:301`*

---

### `GM:PlayerSetHandsModel` `[server]`

Called whenever view model hands needs setting a model. By default this calls PLAYER:GetHandsModel and if that fails, sets the hands model according to his player model.

**Argumentos:**

- `Player ply` — The player whose hands needs a model set
- `Entity ent` — The hands to set model of

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerSetModel` `[server]`

Called whenever a player spawns and must choose a model. A good place to assign a model to a player.
This function may not work in your custom gamemode if you have overridden your GM:PlayerSpawn and you do not use Global.DEFINE_BASECLASS in it, or hook.Call this hook from GM:PlayerSpawn.

**Argumentos:**

- `Player ply` — The player being chosen

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerShouldTakeDamage` `[server]`

Returns true if the player should take damage from the given attacker.

Applying damage from this hook to the player taking damage will lead to infinite loop/crash.

**Argumentos:**

- `Player ply` — The player
- `Entity attacker` — The attacker

**Retorna:**

- `boolean` — Allow damage

---

### `GM:PlayerShouldTaunt` `[server]`

Allows to suppress player taunts.

**Argumentos:**

- `Player ply` — Player who tried to taunt
- `number act` — Act ID of the taunt player tries to do, see Enums/ACT

**Retorna:**

- `boolean` — Return false to disallow player taunting

---

### `GM:PlayerSilentDeath` `[server]`

Called when the player is killed by Player:KillSilent.

The player is already considered dead when this hook is called.

* See GM:PlayerDeath for a hook which handles all other death causes.
* GM:PostPlayerDeath is called **after** this hook.

Player:Alive will return true in this hook.

**Argumentos:**

- `Player ply` — The player who was killed

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerSpawn` `[server]`

Called whenever a player spawns, including respawns.

See GM:PlayerInitialSpawn for a hook called only the first time a player spawns.

See the gameevent/player_spawn for a shared version of this hook.

By default, in "base" derived gamemodes, this hook will also call GM:PlayerLoadout and GM:PlayerSetModel, which may override your Entity:SetModel and Player:Give calls. Consider using the other hooks or a 0-second timer.

**Argumentos:**

- `Player player` — The player who spawned.
- `boolean transition` — If true, the player just spawned from a map transition. You probably want to not touch player's weapons or position if this is set to `true`.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerSpawnAsSpectator` `[server]`

Called to spawn the player as a spectator.

**Argumentos:**

- `Player ply` — The player to spawn as a spectator

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player.lua:219`*

---

### `GM:PlayerSpray` `[server]`

Determines if the player can spray using the `impulse 201` console command.

**Argumentos:**

- `Player sprayer` — The player.

**Retorna:**

- `boolean` — Return `false` to allow spraying, return `true` to prevent spraying.

---

### `GM:PlayerStartTaunt` `[server]`

Called when player starts taunting.

**Argumentos:**

- `Player ply` — The player who is taunting
- `number act` — The sequence ID of the taunt
- `number length` — Length of the taunt

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerStartVoice` `[client]`

Called when a player starts using voice chat.
Set mp_show_voice_icons to 0, if you want disable icons above player.

**Argumentos:**

- `Player ply` — Player who started using voice chat.
- `number plyIndex` = `nil` — The player index. Only appears when non-local player speaks for the first time.

**Retorna:**

- `boolean` — Set true to hide player's `CHudVoiceStatus`.

---

### `GM:PlayerStepSoundTime` `[client/server]`

Allows you to override the time between footsteps.

See GM:PlayerFootstep for a related hook about footstep sounds themselves.
This hook is called on all clients.

**Argumentos:**

- `Player ply` — Player who is walking
- `number type` — The type of footsteps, see Enums/STEPSOUNDTIME
- `boolean walking` — Is the player walking or not ( +walk? )

**Retorna:**

- `number` — Time between footsteps, in ms

---

### `GM:PlayerSwitchFlashlight` `[server]`

Called whenever a player attempts to either turn on or off their flashlight, returning false will deny the change.
Also gets called when using Player:Flashlight.

**Argumentos:**

- `Player ply` — The player who attempts to change their flashlight state.
- `boolean enabled` — The new state the player requested, true for on, false for off.

**Retorna:**

- `boolean` — Can toggle the flashlight or not

---

### `GM:PlayerSwitchWeapon` `[client/server]`

Called when a player attempts to switch their weapon.

Primary usage of this hook is to prevent/allow weapon switching, **not** to detect weapon switching. It will not be called for Player:SetActiveWeapon.

**Argumentos:**

- `Player player` — The player switching weapons.
- `Weapon oldWeapon` — The previous weapon. Will be `NULL` if the previous weapon was removed or the player is switching from nothing.
- `Weapon newWeapon` — The weapon the player switched to. Will be `NULL` if the player is switching to nothing.

This can be `NULL` on the client if the weapon hasn't been created over the network yet.

**Retorna:**

- `boolean` — Return `true` to prevent weapon switch.

---

### `GM:PlayerTick` `[client/server]`

The Move hook is called for you to manipulate the player's CMoveData. This hook is called moments before GM:Move and GM:PlayerNoClip.

This hook will not run when inside a vehicle. GM:VehicleMove will be called instead.

**Argumentos:**

- `Player player` — The player
- `CMoveData mv` — The current movedata for the player.

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerTraceAttack` `[client/server]`

Called when a player has been hit by a trace and damaged (such as from a bullet). Returning true overrides the damage handling and prevents GM:ScalePlayerDamage from being called.

**Argumentos:**

- `Player ply` — The player that has been hit
- `CTakeDamageInfo dmginfo` — The damage info of the bullet
- `Vector dir` — Normalized vector direction of the bullet's path
- `table{TraceResult} trace` — The trace of the bullet's path, see Structures/TraceResult

**Retorna:**

- `boolean` — Override engine handling

---

### `GM:PlayerUnfrozeObject` `[server]`

Called when a player unfreezes an object.

**Argumentos:**

- `Player ply` — Player who has unfrozen an object
- `Entity ent` — The unfrozen object
- `PhysObj physobj` — The frozen physics object of the unfrozen entity ( For ragdolls )

**Retorna:**

*(sin retorno)*

---

### `GM:PlayerUse` `[server]`

Triggered when the player presses use on an object. Continuously runs until USE is released but will not activate other Entities until the USE key is released; dependent on activation type of the Entity.

**Argumentos:**

- `Player ply` — The player pressing the "use" key.
- `Entity ent` — The entity which the player is looking at / activating USE on.

**Retorna:**

- `boolean` — Return `false` if the player is not allowed to USE the entity.

Do not return `true` if using a hook, otherwise other mods may not get a chance to block a player's use.

---

### `GM:PopulateMenuBar` `[client]`

Called when it's time to populate the context menu menu bar at the top.

**Argumentos:**

- `Panel menubar` — The DMenuBar itself.

**Retorna:**

*(sin retorno)*

---

### `GM:PostCleanupMap` `[client/server]`

Called right after the map has cleaned up (usually because game.CleanUpMap was called)

See also GM:PreCleanupMap.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostDraw2DSkyBox` `[client]`

Called right after the 2D skybox has been drawn - allowing you to draw over it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawEffects` `[client]`

Called after rendering effects. This is where halos are drawn. Called just before GM:PreDrawHUD (The two hooks are basically identical).

See GM:PreDrawEffects for the associated hook.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawHUD` `[client]`

Called after GM:PreDrawHUD,  GM:HUDPaintBackground and GM:HUDPaint but before  GM:DrawOverlay.

Unlike GM:HUDPaint(GM:HUDPaintBackground) hooks, this will still be called when the main menu is visible. And so will be GM:PreDrawHUD

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawOpaqueRenderables` `[client]`

Called after drawing opaque entities.

See also GM:PostDrawTranslucentRenderables and GM:PreDrawOpaqueRenderables.

**Argumentos:**

- `boolean bDrawingDepth` — Whether the current draw is writing depth.
- `boolean bDrawingSkybox` — Whether the current draw is drawing the 3D or 2D skybox.

In case of 2D skyboxes it is possible for this hook to always be called with this parameter set to `true`.
- `boolean isDraw3DSkybox` — Whether the current draw is drawing the 3D.

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawPlayerHands` `[client]`

Called after the player hands are drawn.

See GM:PostDrawViewModel for the view model alternative.
See GM:PreDrawPlayerHands for a hook that is called just before view model hands are drawn.

**Argumentos:**

- `Entity hands` — This is the gmod_hands entity.
- `Entity vm` — This is the view model entity.
- `Player ply` — The the owner of the view model.
- `Weapon weapon` — This is the weapon that is from the view model.
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawSkyBox` `[client]`

Called after drawing the 3D skybox. This will not be called if skybox rendering was prevented via the GM:PreDrawSkyBox hook.

See also GM:PostDraw2DSkyBox.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawTranslucentRenderables` `[client]`

Called after all translucent entities are drawn.

See also GM:PostDrawOpaqueRenderables and  GM:PreDrawTranslucentRenderables.

This is still called when r_drawentities or r_drawopaquerenderables is disabled.
This is not called when r_drawtranslucentworld is disabled.

**Argumentos:**

- `boolean bDrawingDepth` — Whether the current call is writing depth.
- `boolean bDrawingSkybox` — Whether the current call is drawing the 3D or 2D skybox.

In case of 2D skyboxes it is possible for this hook to always be called with this parameter set to `true`.
- `boolean isDraw3DSkybox` — Whether the current call is drawing the 3D skybox.

**Retorna:**

*(sin retorno)*

---

### `GM:PostDrawViewModel` `[client]`

Called after view model is drawn.

The render FOV in this hook is different from the main view, as view models are usually rendered with a different FOV. Every render operation will only be accurate with the view model entity.

See GM:PreDrawViewModel for a hook that is called just before a view model is drawn.

For view model hands alternative, see GM:PostDrawPlayerHands.

**Argumentos:**

- `Entity viewmodel` — Players view model
- `Player player` — The owner of the weapon/view model
- `Weapon weapon` — The weapon the player is currently holding
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `GM:PostEntityFireBullets` `[client/server]`

Called every time a bullet pellet (i.e. this hook is called multiple times for a shotgun shot) is fired from an entity. Notably this hook will have the final damage and aim direction for the bullet pellet.

See GM:EntityFireBullets if you wish to modify the bullets before they are fired.

This hook is called directly from Entity:FireBullets. Due to this, you cannot call Entity:FireBullets inside this hook or an infinite loop will occur crashing the game.

**Argumentos:**

- `Entity entity` — The entity that fired the bullet
- `table{FiredBullet} data` — A table of data about the bullet that was fired.

See Structures/FiredBullet.

**Retorna:**

- `boolean` — Return `false` to suppress the bullet.

---

### `GM:PostEntityTakeDamage` `[server]`

Called when an entity receives a damage event, after passing damage filters, etc.

See GM:EntityTakeDamage if you wish to prevent damage events, or otherwise alter them.

Applying damage from this hook to the entity taking damage will lead to infinite loop/crash.

**Argumentos:**

- `Entity ent` — The entity that took the damage.
- `CTakeDamageInfo dmginfo` — Detailed information about the damage event.
- `boolean wasDamageTaken` — Whether the entity actually took the damage. (For example, shooting a Strider will generate this event, but it won't take bullet damage).

**Retorna:**

*(sin retorno)*

---

### `GM:PostGamemodeLoaded` `[client/server]`

Called after the gamemode has loaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostPlayerDeath` `[server]`

Called right after GM:DoPlayerDeath, GM:PlayerDeath and GM:PlayerSilentDeath.

This hook will be called for all deaths, including Player:KillSilent

Player:Alive will return false in this hook.

**Argumentos:**

- `Player ply` — The player

**Retorna:**

*(sin retorno)*

---

### `GM:PostPlayerDraw` `[client]`

Called after a given player in your [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community") was drawn.

This hook will not be called if player was prevented from being drawn via GM:PrePlayerDraw.

**Argumentos:**

- `Player ply` — The player that was drawn.
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `GM:PostProcessPermitted` `[client]`

Allows you to suppress post processing effect drawing.

**Argumentos:**

- `string effect_name` — The classname of Post Processing effect

**Retorna:**

- `boolean` — Return true/false depending on whether this post process should be allowed

---

### `GM:PostRender` `[client]`

Called after the frame has been rendered.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostRenderVGUI` `[client]`

Called after the VGUI has been drawn.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PostUndo` `[server]`

Called just after performing an undo.

**Argumentos:**

- `table undo` — The undo table. See Structures/Undo struct.
- `number count` — The amount of props/actions undone. This will be `0` for undos that are skipped in cases where for example the entity that is meant to be undone is already deleted.

**Retorna:**

*(sin retorno)*

---

### `GM:PreCleanupMap` `[client/server]`

Called right before the map cleans up (usually because game.CleanUpMap was called)

See also GM:PostCleanupMap.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PreDrawEffects` `[client]`

Called just after GM:PreDrawViewModel and can technically be considered as a "PostDrawAllViewModels".

See GM:PostDrawEffects for the associated hook.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PreDrawHUD` `[client]`

Called just after GM:PostDrawEffects (duplicate of it). Drawing anything in it seems to work incorrectly.

See GM:PostDrawHUD for the associated hook.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PreDrawHalos` `[client]`

Called before rendering the halos. This is the place to call halo.Add. This hook is actually running inside of GM:PostDrawEffects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/halo.lua:148`*

---

### `GM:PreDrawOpaqueRenderables` `[client]`

Called before all opaque entities are drawn.

See also GM:PreDrawTranslucentRenderables and  GM:PostDrawOpaqueRenderables.

**Argumentos:**

- `boolean isDrawingDepth` — Whether the current draw is writing depth.
- `boolean isDrawSkybox` — Whether the current draw is drawing the 3D or 2D skybox.

In case of 2D skyboxes it is possible for this hook to always be called with this parameter set to `true`.
- `boolean isDraw3DSkybox` — Whether the current draw is drawing the 3D.

**Retorna:**

- `boolean` — Return true to prevent opaque renderables from drawing.

---

### `GM:PreDrawPlayerHands` `[client]`

Called before the player hands are drawn.

See GM:PreDrawViewModel for the view model alternative.
See GM:PostDrawPlayerHands for a hook that is called just before view model hands are drawn.

**Argumentos:**

- `Entity hands` — This is the gmod_hands entity before it is drawn.
- `Entity vm` — This is the view model entity before it is drawn.
- `Player ply` — The the owner of the view model.
- `Weapon weapon` — This is the weapon that is from the view model.
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

- `boolean` — Return true to prevent the viewmodel hands from rendering

---

### `GM:PreDrawSkyBox` `[client]`

Called before the 3D sky box is drawn. This will not be called for maps with no 3D skybox, or when the 3d skybox is disabled. (`r_3dsky 0`)

See also GM:PostDrawSkyBox

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to disable skybox drawing (both 2D and 3D skybox)

---

### `GM:PreDrawTranslucentRenderables` `[client]`

Called before all the translucent entities are drawn.

See also GM:PreDrawOpaqueRenderables and  GM:PostDrawTranslucentRenderables.

This is still called when r_drawentities or r_drawopaquerenderables is disabled.
This is not called when r_drawtranslucentworld is disabled.

**Argumentos:**

- `boolean isDrawingDepth` — Whether the current draw is writing depth.
- `boolean isDrawSkybox` — Whether the current draw is drawing the 3D or 2D skybox.

In case of 2D skyboxes it is possible for this hook to always be called with this parameter set to `true`.
- `boolean isDraw3DSkybox` — Whether the current draw is drawing the 3D.

**Retorna:**

- `boolean` — Return true to prevent translucent renderables from drawing.

---

### `GM:PreDrawViewModel` `[client]`

Called before the view model has been drawn.

By default this hook also calls WEAPON:PreDrawViewModel, so you can use that if developing a scripted weapon.

See GM:PostDrawViewModel for a hook that runs immediately after rendering a view model.
See GM:PreDrawViewModels for a hook that runs before **all** view models are drawn within a frame.

For view model hands, see GM:PreDrawPlayerHands.

**Argumentos:**

- `Entity vm` — This is the view model entity before it is drawn. On server-side, this entity is the predicted view model.
- `Player ply` — The owner of the view model.
- `Weapon weapon` — This is the weapon that is from the view model.
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

- `boolean` — Return true to prevent the default view model rendering. This also affects GM:PostDrawViewModel.

---

### `GM:PreDrawViewModels` `[client]`

Called just before all view models (there are 3 per player, see Player:GetViewModel) and entities with `RENDERGROUP_VIEWMODEL` are drawn.

See GM:PreDrawViewModel and GM:PostDrawViewModel for hooks that run for specific view models.

You can use GM:PreDrawEffects as a "`PostDrawViewModels`" hook as it is called just after the all the view model(s) are drawn.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PreGamemodeLoaded` `[client/server]`

Called before the gamemode is loaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:PrePlayerDraw` `[client]`

Called before the player is drawn.

See also GM:PostPlayerDraw.

**Argumentos:**

- `Player player` — The player that is about to be drawn.
- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

- `boolean` — Return `true` to prevent default player rendering, which hides the player.

---

### `GM:PreRegisterSENT` `[client/server]`

Called by scripted_ents.Register.

**Argumentos:**

- `table ent` — The entity table to be registered.
- `string class` — The class name to be assigned.

**Retorna:**

- `boolean` — Return `false` to prevent the entity from being registered. Returning any other value has no effect.

*Fuente: `lua/includes/modules/scripted_ents.lua:55`*

---

### `GM:PreRegisterSWEP` `[client/server]`

Called when a Scripted Weapon (SWEP) is about to be registered, allowing addons to alter the weapon's SWEP table with custom data for later usage. Called internally from weapons.Register.

**Argumentos:**

- `table swep` — The SWEP table to be registered.
- `string class` — The class name to be assigned.

**Retorna:**

- `boolean` — Return `false` to prevent the weapon from being registered. Returning any other value has no effect.

*Fuente: `lua/includes/modules/weapons.lua:48`*

---

### `GM:PreRender` `[client]`

Called before the renderer is about to start rendering the next frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to prevent all rendering. This can make the whole game stop rendering anything.

---

### `GM:PreUndo` `[server]`

Called just before performing an undo.

**Argumentos:**

- `table undo` — The undo table. See Structures/Undo struct.

**Retorna:**

- `boolean` — Return `false` to disallow the undo.

---

### `GM:PreventScreenClicks` `[client]`

This will prevent IN_ATTACK from sending to server when player tries to shoot from C menu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to prevent screen clicks.

---

### `GM:PropBreak` `[client/server]`

Called when a prop has been destroyed.

**Argumentos:**

- `Player attacker` — The person who broke the prop. This can be a NULL entity for cases where the prop was not broken by a player.
- `Entity prop` — The entity that has been broken by the attacker.

**Retorna:**

*(sin retorno)*

---

### `GM:RenderScene` `[client]`

Render the scene. Used by the `Stereoscopy` post-processing effect.

Materials rendered in this hook require `$ignorez` parameter to draw properly.

**Argumentos:**

- `Vector origin` — View origin
- `Angle angles` — View angles
- `number fov` — View FOV

**Retorna:**

- `boolean` — Return `true` to override drawing the scene.

---

### `GM:RenderScreenspaceEffects` `[client]`

Used to render post processing effects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:Restored` `[client/server]`

Called when the game is reloaded from a Source Engine save system ( not the Sandbox saves or dupes ).

See GM:Saved for a hook that is called when such a save file is created.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:Saved` `[client/server]`

Called when the game is saved using the Source Engine save system (not the Sandbox saves or dupes).

See GM:Restored for a hook that is called when such a save file is loaded.

See also the saverestore for relevant functions.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:ScaleNPCDamage` `[server]`

Called when an NPC takes damage.

This hook is called only when a specific hit group of the NPC is hit. In cases where the hitgroup doesn't matter, you should use GM:EntityTakeDamage instead!

**Argumentos:**

- `NPC npc` — The NPC that takes damage
- `number hitgroup` — The hitgroup (hitbox) enum where the NPC took damage. See Enums/HITGROUP
- `CTakeDamageInfo dmginfo` — Damage info

**Retorna:**

*(sin retorno)*

---

### `GM:ScalePlayerDamage` `[client/server]`

This hook allows you to change how much damage a player receives when one takes damage to a specific body part.

This is called only for bullet damage a player receives, you should use GM:EntityTakeDamage instead if you need to detect **ALL** damage.

**Argumentos:**

- `Player ply` — The player taking damage.
- `number hitgroup` — The hitgroup where the player took damage. See Enums/HITGROUP
- `CTakeDamageInfo dmginfo` — The damage info.

**Retorna:**

- `boolean` — Return true to prevent damage that this hook is called for, stop blood particle effects and blood decals.

It is possible to return true only on client ( This will work **only in multiplayer** ) to stop the effects but still take damage.

---

### `GM:ScoreboardHide` `[client]`

Called when player released the scoreboard button (TAB by default).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:ScoreboardShow` `[client]`

Called when player presses the scoreboard button (TAB by default).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to prevent default scoreboard from showing.

---

### `GM:SendDeathNotice` `[server]`

An internal function used to send a death notice event to all clients.

**Argumentos:**

- `Entity|string|nil attacker` — The entity that caused the death.
- `string inflictor` — The attacker's weapon class name or the attacker itself if no weapon was equipped.
- `Entity|string victim` — The entity that died.
- `number flags` — Death notice flags. 1 = Friendly victim (to the player), 2 = friendly attacker (to the player)

**Retorna:**

*(sin retorno)*

---

### `GM:SetPlayerSpeed` `[client/server]`

Sets player run and sprint speeds.
Using a speed of `0` can lead to prediction errors, and can cause players to move at `sv_maxvelocity`
This is not a hook. Treat this as a utility function to set the player's speed.

**Argumentos:**

- `Player ply` — The player to set the speed of.
- `number walkSpeed` — The walk speed.
- `number runSpeed` — The run speed.

**Retorna:**

*(sin retorno)*

---

### `GM:SetupMove` `[client/server]`

SetupMove is called before the engine process movements. This allows us to override the players movement.

See Game Movement for an explanation on the move system.

**Argumentos:**

- `Player ply` — The player whose movement we are about to process
- `CMoveData mv` — The move data to override/use
- `CUserCmd cmd` — The command data

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/shared.lua:179`*

---

### `GM:SetupPlayerVisibility` `[server]`

Allows you to add extra positions to the player's [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community"). This is the place to call Global.AddOriginToPVS.

**Argumentos:**

- `Player ply` — The player
- `Entity viewEntity` — Players Player:GetViewEntity

**Retorna:**

*(sin retorno)*

---

### `GM:SetupSkyboxFog` `[client]`

Allows you to use render.Fog* functions to manipulate skybox fog.
This will not be called for maps with no 3D skybox, or when the 3d skybox is disabled. (`r_3dsky 0`)

**Argumentos:**

- `number scale` — The scale of 3D skybox

**Retorna:**

- `boolean` — Return true to tell the engine that fog is set up

---

### `GM:SetupWorldFog` `[client]`

Allows you to use render.Fog* functions to manipulate world fog.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to tell the engine that fog is set up

---

### `GM:ShouldCollide` `[client/server]`

Called to decide whether a pair of entities should collide with each other. This is only called if Entity:SetCustomCollisionCheck was used on one or both entities.

Where applicable, consider using constraint.NoCollide or a [logic_collision_pair](https://developer.valvesoftware.com/wiki/Logic_collision_pair) entity instead - they are considerably easier to use and may be more appropriate in some situations.

This hook **must** return the same value consistently for the same pair of entities.
If an entity changed in such a way that its collision rules change, you **must** call Entity:CollisionRulesChanged on that entity immediately - **not in this hook and not in physics callbacks.**
As long as you religiously follow the rules set by the examples this hook will work reliably without breaking, even a small mistake might break physics.

This hook can cause all physics to break under certain conditions.

**Argumentos:**

- `Entity ent1` — The first entity in the collision poll.
- `Entity ent2` — The second entity in the collision poll.

**Retorna:**

- `boolean` — Whether the entities should collide.

---

### `GM:ShouldDrawLocalPlayer` `[client]`

Called to determine if the Global.LocalPlayer should be drawn.

If you're using this hook to draw a player for a GM:CalcView hook, then you may want to consider using the `drawviewer` variable you can use in your Structures/CamData table instead.

This hook has an internal cache that is reset at the start of every frame. This will prevent this hook from running in certain cases. This cache is reset in cam.Start and in a future update in render.RenderView when rendering extra views.

**Argumentos:**

- `Player ply` — The player.

**Retorna:**

- `boolean` — `true` to draw the player, `false` to hide.

*Fuente: `gamemodes/base/gamemode/cl_init.lua:406`*

---

### `GM:ShowHelp` `[client/server]`

Called when a player executes `gm_showhelp` console command. (Default bind is F1)

**Argumentos:**

- `Player ply` — Player who executed the command

**Retorna:**

*(sin retorno)*

---

### `GM:ShowSpare1` `[client/server]`

Called when a player executes `gm_showspare1` console command ( Default bind is F3 ).

**Argumentos:**

- `Player ply` — Player who executed the command.

**Retorna:**

*(sin retorno)*

---

### `GM:ShowSpare2` `[client/server]`

Called when a player executes `gm_showspare2` console command ( Default bind is F4 ).

**Argumentos:**

- `Player ply` — Player who executed the command.

**Retorna:**

*(sin retorno)*

---

### `GM:ShowTeam` `[client/server]`

Called when a player executes `gm_showteam` console command. ( Default bind is F2 )

**Argumentos:**

- `Player ply` — Player who executed the command

**Retorna:**

*(sin retorno)*

---

### `GM:ShutDown` `[client/server]`

Called whenever the Lua environment is about to be shut down, for example on map change, or when the server is going to shut down.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:SpawnMenuCreated` `[client]`

Called when the Spawnmenu is Created.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/spawnmenu.lua:247`*

---

### `GM:SpawniconGenerated` `[client]`

Called when spawn icon is generated.

**Argumentos:**

- `string lastmodel` — File path of previously generated model.
- `string imagename` — File path of the generated icon.
- `number modelsleft` — Amount of models left to generate.

**Retorna:**

*(sin retorno)*

---

### `GM:StartChat` `[client]`

Runs when the user tries to open the chat box.

Returning `true` won't stop the chatbox from taking VGUI focus. chat.Close may be of use to mitigate that, or usage of GM:PlayerBindPress.

**Argumentos:**

- `boolean isTeamChat` — Whether the message was sent through team chat.

**Retorna:**

- `boolean` — Return true to hide the default chat box.

---

### `GM:StartCommand` `[client/server]`

Allows you to change the players inputs before they are processed by the server. This function is also called for bots, making it the best solution to control them.

This is basically a shared version of GM:CreateMove.

This hook is predicted, but not by usual means, it is called when a CUserCmd is generated on the client, and on the server when it is received, so it is necessary for this hook to be called clientside even on singleplayer

**Argumentos:**

- `Player ply` — The player
- `CUserCmd ucmd` — The usercommand

**Retorna:**

*(sin retorno)*

---

### `GM:StartEntityDriving` `[client/server]`

Called right before an entity starts driving. Overriding this hook will cause it to not call drive.Start and the player will not begin driving the entity.

**Argumentos:**

- `Entity ent` — The entity that is going to be driven
- `Player ply` — The player that is going to drive the entity

**Retorna:**

*(sin retorno)*

---

### `GM:StartGame` `[menu]`

Called when you start a new game via the menu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `html/js/menu/control.NewGame.js:174`*

---

### `GM:Think` `[client/menu/server]`

Called every rendered frame on client, except when the game is paused.

Called every game tick on the server. This will be the same as GM:Tick on the server when there is no lag, but will only be called once every processed server frame during lag.
Global.CurTime is guaranteed to be different with each call to this hook on the server.

See GM:Tick for a hook that runs every tick on both the client and server.

On server, this hook **WILL NOT** run if the server is empty, unless you set the ConVar `sv_hibernate_think` to `1`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:Tick` `[client/server]`

Called every game tick. engine.TickCount is guaranteed to be different between each call.

Server side, this is similar to GM:Think (See that page for details).

The default tickrate is `66.6666` (15 millisecond intervals). It can be changed via the `-tickrate` [command line option](Command_Line_Parameters).
See engine.TickInterval for a function to retrieve this data at runtime.

This hook **WILL NOT** run if the server is empty, unless you set the ConVar `sv_hibernate_think` to 1

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:TranslateActivity` `[client/server]`

Isn't called when CalcMainActivity returns a valid override sequence id
Allows you to translate player activities.

**Argumentos:**

- `Player ply` — The player
- `number act` — The activity. See Enums/ACT

**Retorna:**

- `number` — The new, translated activity

---

### `GM:UpdateAnimation` `[client/server]`

Animation updates (pose params etc) should be done here.

**Argumentos:**

- `Player ply` — The player to update the animation info for.
- `Vector velocity` — The player's velocity.
- `number maxSeqGroundSpeed` — Speed of the animation - used for playback rate scaling.

**Retorna:**

*(sin retorno)*

---

### `GM:VGUIMousePressAllowed` `[client]`

Called when user clicks on a VGUI panel.

**Argumentos:**

- `number button` — The button that was pressed, see Enums/MOUSE

**Retorna:**

- `boolean` — Return true if the mouse click should be ignored or not.

---

### `GM:VGUIMousePressed` `[client/menu]`

Called when a mouse button is pressed on a VGUI element or menu.

**Argumentos:**

- `Panel pnl` — Panel that currently has focus.
- `number mouseCode` — The key that the player pressed using Enums/MOUSE.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_menus.lua:71`*

---

### `GM:VariableEdited` `[server]`

Called when a variable is edited on an Entity (called by Edit Properties... menu). See Editable Entities for more information.

This hook is called to change a variable and not after a variable was changed

**Argumentos:**

- `Entity ent` — The entity being edited
- `Player ply` — The player doing the editing
- `string key` — The name of the variable
- `string val` — The new value, as a string which will later be converted to its appropriate type
- `table editor` — The edit table defined in Entity:NetworkVar

**Retorna:**

*(sin retorno)*

---

### `GM:VehicleMove` `[client/server]`

Called when you are driving a vehicle. This hook works just like GM:Move.

This hook is called before GM:Move and will be called when GM:PlayerTick is not.

**Argumentos:**

- `Player ply` — Player who is driving the vehicle
- `Vehicle veh` — The vehicle being driven
- `CMoveData mv` — Move data

**Retorna:**

*(sin retorno)*

---

### `GM:WeaponEquip` `[server]`

Called as a weapon entity is picked up by a player. (Including Player:Give)

Contrary to the name of the hook, it is **not called** when the player switches their active weapon to another.

See also GM:PlayerDroppedWeapon and GM:PlayerCanPickupWeapon.

At the time when this hook is called Entity:GetOwner will return `NULL`. The owner is set on the next frame.
This will not be called when picking up a weapon you already have as the weapon will be removed and WEAPON:EquipAmmo will be called instead.

**Argumentos:**

- `Weapon weapon` — The equipped weapon.
- `Player owner` — The player that is picking up the weapon.

**Retorna:**

*(sin retorno)*

---

### `GM:WorkshopDownloadFile` `[menu]`

Called when an addon from the Steam workshop begins downloading. Used by default to place details on the workshop downloading panel.

**Argumentos:**

- `number id` — Workshop ID of addon.
- `number imageID` — ID of addon's preview image.

For example, for **Extended Spawnmenu** addon, the image URL is

```
http://cloud-4.steamusercontent.com/ugc/702859018846106764/9E7E1946296240314751192DA0AD15B6567FF92D/
```

So, the value of this argument would be **702859018846106764**.
- `string title` — Name of addon.
- `number size` — File size of addon in bytes.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:21`*

---

### `GM:WorkshopDownloadProgress` `[menu]`

Called while an addon from the Steam workshop is downloading. Used by default to update details on the fancy workshop download panel.

**Argumentos:**

- `number id` — Workshop ID of addon.
- `number imageID` — ID of addon's preview image.

For example, for **Extended Spawnmenu** addon, the image URL is

```
http://cloud-4.steamusercontent.com/ugc/702859018846106764/9E7E1946296240314751192DA0AD15B6567FF92D/
```

So, the value of this argument would be **702859018846106764**.
- `string title` — Name of addon.
- `number downloaded` — Current bytes of addon downloaded.
- `number expected` — Expected file size of addon in bytes.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:40`*

---

### `GM:WorkshopDownloadTotals` `[menu]`

Called after GM:WorkshopStart.

**Argumentos:**

- `number remain` — Remaining addons to download
- `number total` — Total addons needing to be downloaded

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:52`*

---

### `GM:WorkshopDownloadedFile` `[menu]`

Called when an addon from the Steam workshop finishes downloading. Used by default to update details on the workshop downloading panel.

**Argumentos:**

- `number id` — Workshop ID of addon.
- `string title` — Name of addon.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:32`*

---

### `GM:WorkshopEnd` `[menu]`

Called when downloading content from Steam workshop ends. Used by default to hide fancy workshop downloading panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:13`*

---

### `GM:WorkshopExtractProgress` `[menu]`

Called while an addon from the Steam workshop is extracting. Used by default to update details on the fancy workshop download panel.

**Argumentos:**

- `number id` — Workshop ID of addon.
- `number ImageID` — ID of addon's preview image.

For example, for **Extended Spawnmenu** addon, the image URL is

```
http://cloud-4.steamusercontent.com/ugc/702859018846106764/9E7E1946296240314751192DA0AD15B6567FF92D/
```

So, the value of this argument would be **702859018846106764**.
- `string title` — Name of addon.
- `number percent` — Current bytes of addon extracted.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:52`*

---

### `GM:WorkshopStart` `[menu]`

Called when downloading content from Steam workshop begins. Used by default to show fancy workshop downloading panel.

The order of Workshop hooks is this:
* WorkshopStart
* WorkshopDownloadTotals
* * These are called for each new item:
* WorkshopDownloadFile
* WorkshopDownloadProgress - This is called until the file is finished
* WorkshopDownloadedFile
* WorkshopEnd (this ones called once)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:5`*

---

### `GM:WorkshopSubscriptionsChanged` `[menu]`

Called when UGC subscription status changes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `GM:WorkshopSubscriptionsMessage` `[menu]`

Called when a Workshop Message is received?. Currently, it seems like the message will be **#ugc.mounting** every time.
When does this exactly get called?. If an addon is subscribed, unsubscribed, error occurs or on any event?

**Argumentos:**

- `string message` — The Message from the Workshop. Will be a phrase that needs to be translated.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mount/mount.lua:95`*

---

### `GM:WorkshopSubscriptionsProgress` `[menu]`

Called by the engine when the game initially fetches subscriptions to be displayed on the bottom of the main menu screen.

**Argumentos:**

- `number num` — Amount of subscribed addons that have info retrieved.
- `number max` — Total amount of subscribed addons that need their info retrieved.

**Retorna:**

*(sin retorno)*