# ENTITY

---


## Miembros (82)


---

### `ENTITY:AcceptInput` `[server]`

Called when another entity fires an event to this entity.

**Argumentos:**

- `string inputName` — The name of the input that was triggered.
- `Entity activator` — The initial cause for the input getting triggered. (e.g. the player who pushed a button)
- `Entity caller` — The entity that directly triggered the input. (e.g. the button that was pushed)
- `string param` — The input parameter.

**Retorna:**

- `boolean` — Should we suppress the default action for this input?

Returning `true` for unknown inputs will also prevent the game complaining about the unknown input in console with `developer 2`.

---

### `ENTITY:AddOutputFromAcceptInput` `[server]`

A helper function for creating Scripted Entities.

Similar to ENTITY:AddOutputFromKeyValue, call it from ENTITY:AcceptInput and it'll return true if it successfully added an output from the passed input data.

**Argumentos:**

- `string name` — The input name from ENTITY:AcceptInput.
- `string data` — The input data from ENTITY:AcceptInput.

**Retorna:**

- `boolean` — Whether any outputs were added or not.

---

### `ENTITY:AddOutputFromKeyValue` `[server]`

A helper function for creating Scripted Entities.

Call it from ENTITY:KeyValue and it'll return true if it successfully added an output from the passed KV pair.

**Argumentos:**

- `string key` — The key-value key.
- `string value` — The key-value value.

**Retorna:**

- `boolean` — Whether any outputs were added or not.

---

### `ENTITY:CalcAbsolutePosition` `[client/server]`

Called whenever the entity's position changes. A callback for when an entity's angle changes is available via Entity:AddCallback.

Like ENTITY:RenderOverride, this hook works on any entity (scripted or not) it is applied on.

If EFL_DIRTY_ABSTRANSFORM is set on the entity, this will be called serverside only; otherwise, this will be called clientside only. This means serverside calls of Entity:SetPos without the EFL_DIRTY_ABSTRANSFORM flag enabled (most cases) will be called clientside only.

The give concommand will call this hook serverside only upon entity spawn.

**Argumentos:**

- `Vector pos` — The entity's actual position. May differ from Entity:GetPos
- `Angle ang` — The entity's actual angles. May differ from Entity:GetAngles

**Retorna:**

- `Vector` — New position
- `Angle` — New angles

---

### `ENTITY:CanEditVariables` `[server]`

Called by the Sandbox gamemode from the default implementation of GM:CanEditVariable.

**Argumentos:**

- `Player ply` — The player is trying to edit a variable on this entity.

**Retorna:**

- `boolean` — `true` to allow the edit, `false` to disallow.

---

### `ENTITY:CanProperty` `[client/server]`

Controls if a property can be used on this entity or not.

This hook will only work in Sandbox derived gamemodes that do not have GM:CanProperty overridden.

This hook will work on ALL entities, not just the scripted ones (SENTs)

**Argumentos:**

- `Player ply` — Player, that tried to use the property
- `string property` — Class of the property that is tried to use, for example - bonemanipulate

**Retorna:**

- `boolean` — Return false to disallow using that property, return true to allow.

You must return a value. Not returning anything can cause unexpected results.

*Fuente: `gamemodes/sandbox/gamemode/shared.lua:239`*

---

### `ENTITY:CanTool` `[client/server]`

Controls if a tool can be used on this entity or not.

This hook will only work in Sandbox derived gamemodes that do not have SANDBOX:CanTool overridden.

This hook will work on ALL entities, not just the scripted ones (SENTs)

**Argumentos:**

- `Player ply` — Player, that tried to use the tool
- `table{TraceResult} tr` — The trace of the tool.
Returns only Structures/TraceResult#Entity when the 5th argument returns `4`
- `string toolname` — Class of the tool that is tried to use, for example - `weld`
- `table tool` — The tool mode table the player currently has selected.
- `number button` — The tool button pressed.
* 1 - left click
* 2 - right click
* 3 - reload
* 4 - Menu (No interaction with the toolgun)
The number `4` is a test that Rubat is conducting to implement the CanTool in the SpawnMenu. It may disappear.

**Retorna:**

- `boolean` — Return `false` to disallow using that tool on this entity, return `true` to allow.

*Fuente: `gamemodes/sandbox/gamemode/shared.lua:73`*

---

### `ENTITY:CreateSchedulesInternal` `[server]`

Called just before ENTITY:Initialize for "ai" type entities only.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:DoImpactEffect` `[client/server]`

Called so the entity can override the bullet impact effects it makes. This is called when the entity itself fires bullets via Entity:FireBullets, not when it gets hit.

This hook only works for the `anim` type entities.

**Argumentos:**

- `table tr` — A Structures/TraceResult from the bullet's start point to the impact point
- `number damageType` — The damage type of bullet. See Enums/DMG

**Retorna:**

- `boolean` — Return true to not do the default thing - which is to call `UTIL_ImpactTrace` in C++

---

### `ENTITY:DoSchedule` `[server]`

Runs a Lua schedule. Runs tasks inside the schedule.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `table sched` — The schedule to run.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:63`*

---

### `ENTITY:DoingEngineSchedule` `[server]`

Called by the default `base_ai` SNPC, checking whether `ENT.bDoingEngineSchedule` is set by ENTITY:StartEngineSchedule..
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean ENT.bDoingEngineSchedule` — 

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:193`*

---

### `ENTITY:Draw` `[client]`

Called if and when the entity should be drawn opaquely, based on the Entity:GetRenderGroup of the entity.

See Structures/ENT and Enums/RENDERGROUP for more information.

See also ENTITY:DrawTranslucent.

This function will not called if the entity's render bounds are not in player's view. See Entity:SetRenderBounds.

**Argumentos:**

- `number flags` — The bit flags from Enums/STUDIO

**Retorna:**

*(sin retorno)*

---

### `ENTITY:DrawTranslucent` `[client]`

Called when the entity should be drawn translucently. If your scripted entity has a translucent model, it will be invisible unless it is drawn here.

See ENTITY:Draw for the opaque rendering alternative to this hook.

**Argumentos:**

- `number flags` — The bit flags from Enums/STUDIO

**Retorna:**

*(sin retorno)*

---

### `ENTITY:EndTouch` `[server]`

Called when the entity stops touching another entity.

See ENTITY:StartTouch and ENTITY:Touch for related hooks.

This only works for **brush** entities and for entities that have Entity:SetTrigger set to true.

**Argumentos:**

- `Entity entity` — The entity that we no longer touch.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:EngineScheduleFinish` `[server]`

Called whenever an engine schedule is finished; either the last task within the engine schedule has been finished or the schedule has been interrupted by an interrupt condition.
This hook only exists for `ai` type [SENTs](Scripted_Entities).
This hook isn't called when the engine schedule is failed, the schedule is cleared with NPC:ClearSchedule or NPC:SetSchedule has been called.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:ExpressionFinished` `[server]`

Called when an NPC's expression has finished.
This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

- `string strExp` — The path of the expression.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/init.lua:94`*

---

### `ENTITY:FireAnimationEvent` `[client]`

Called before firing clientside animation events, such as muzzle flashes or shell ejections.

See ENTITY:HandleAnimEvent for the serverside version.

This hook only works on "anim", "nextbot" and "ai" type entities.

**Argumentos:**

- `Vector pos` — Position of the effect
- `Angle ang` — Angle of the effect
- `number event` — The event ID of happened even. See [this page](http://developer.valvesoftware.com/wiki/Animation_Events). Only event IDs above 5000 will appear in this hook. (Are considered the "new" system in-engine)
- `string name` — Name of the event

**Retorna:**

- `boolean` — Return true to disable the effect

---

### `ENTITY:GetAttackSpread` `[server]`

Called to determine how good an NPC is at using a particular weapon.

"ai" base only

**Argumentos:**

- `Weapon wep` — The weapon being used by the NPC.
- `NPC target` — The target the NPC is attacking

**Retorna:**

- `number` — The number of degrees of inaccuracy in the NPC's attack.

*Fuente: `gamemodes/base/entities/entities/base_ai/init.lua:135`*

---

### `ENTITY:GetRelationship` `[server]`

Called when scripted NPC needs to check how he "feels" against another entity, such as when NPC:Disposition is called.
Scripted NPCs will not select other entities using same Entity:GetModel as this Scripted NPC's Entity:GetModel as enemy, unless NPC:AddEntityRelationship is cast.

**Argumentos:**

- `Entity ent` — The entity in question

**Retorna:**

- `number{D}` — How our scripter NPC "feels" towards the entity in question. See Enums/D. Not returning any value will make NPC:Disposition return the default disposition for this SNPC's given `m_iClass` by the engine.

*Fuente: `gamemodes/base/entities/entities/base_ai/init.lua:84`*

---

### `ENTITY:GetRenderMesh` `[client]`

Specify a mesh that should be rendered instead of this SENT's model.
You should not be creating or modifying an IMesh in this hook. [Reference](https://github.com/Facepunch/garrysmod-issues/issues/6411#issuecomment-3070608549)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table containing the following keys:
* IMesh Mesh - (Required) The mesh to render instead of the default model
* IMaterial Material - (Required) The material to render the mesh with.
* VMatrix Matrix - (Optional) - Render matrix override (mesh position, angles, etc)

---

### `ENTITY:GetShadowCastDirection` `[client]`

Called when the shadow needs to be recomputed. Allows shadow angles to be customized. This only works for `anim` type entities.

**Argumentos:**

- `number type` — Type of the shadow this entity uses. Possible values:
* 0 - No shadow
* 1 - Simple 'blob' shadow
* 2 - Render To Texture shadow (updates only when necessary)
* 3 - Dynamic RTT - updates always
* 4 - Render to Depth Texture

**Retorna:**

- `Vector dir` — The new shadow direction to use.

---

### `ENTITY:GetSoundInterests` `[server]`

Called every second to poll the sound hint interests of this SNPC. This is used in conjunction with other sound hint functions, such as sound.EmitHint and NPC:GetBestSoundHint.
This hook only exists for `ai` type SENTs

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number types` — A bitflag representing which sound types this NPC wants to react to.  See Enums/SOUND.

---

### `ENTITY:GravGunPickupAllowed` `[server]`

Called by GM:GravGunPickupAllowed on ALL entites in Sandbox-derived  gamemodes and acts as an override.

**Argumentos:**

- `Player ply` — The player aiming at us

**Retorna:**

- `boolean` — Return true to allow the entity to be picked up

---

### `ENTITY:GravGunPunt` `[client/server]`

Called when this entity is about to be punted with the gravity gun (primary fire).

Only works in Sandbox derived gamemodes and only if GM:GravGunPunt is not overridden.

**Argumentos:**

- `Player ply` — The player pressing left-click with the gravity gun at an entity

**Retorna:**

- `boolean` — Return true or false to enable or disable punting respectively.

---

### `ENTITY:HandleAnimEvent` `[server]`

Called before firing serverside animation events, such as weapon reload, drawing and holstering for NPCs, scripted sequences, etc.

See ENTITY:FireAnimationEvent for the clientside version.

This hook only works on "anim", "ai" and "nextbot" type entities.

**Argumentos:**

- `number event` — The ID of the event. See [this page](http://developer.valvesoftware.com/wiki/Animation_Events) for a list of default events, and see util.GetAnimEventNameByID for a helper function in handing custom events.
- `number eventTime` — The absolute time this event occurred using Global.CurTime.
- `number cycle` — The frame this event occurred as a number between 0 and 1.
- `number type` — Event type. See [the Source SDK](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/shared/eventlist.h#L14-L23).
- `string options` — Name or options of this event.

**Retorna:**

- `boolean` — Return true to mark the event as handled.

---

### `ENTITY:ImpactTrace` `[client]`

Called when a bullet trace hits this entity and allows you to override the default behavior by returning true.

**Argumentos:**

- `table traceResult` — The trace that hit this entity as a Structures/TraceResult.
- `number damageType` — The damage bits associated with the trace, see Enums/DMG
- `string customImpactName` = `nil` — The effect name to override the impact effect with.
Possible arguments are ImpactJeep, AirboatGunImpact, HelicopterImpact, ImpactGunship.

**Retorna:**

- `boolean` — Return true to override the default impact effects.

---

### `ENTITY:Initialize` `[client/server]`

Called when the entity is created. This is called when you Entity:Spawn the custom entity.

This is called **after** ENTITY:SetupDataTables and GM:OnEntityCreated.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:IsJumpLegal` `[server]`

Called when deciding if the Scripted NPC should be able to perform a certain jump or not.
This is only called for "ai" type entities

**Argumentos:**

- `Vector startPos` — Start of the jump
- `Vector apex` — Apex point of the jump
- `Vector endPos` — The landing position

**Retorna:**

- `boolean` — Return true if this jump should be allowed to be performed, false otherwise.

Not returning anything, or returning a non boolean will perform the [default action](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_basenpc_movement.cpp#L319).

---

### `ENTITY:KeyValue` `[server]`

Called when the engine sets a value for this scripted entity.

This hook is called **before** ENTITY:Initialize when the key-values are set by the map.
Otherwise this hook will be called whenever Entity:SetKeyValue is called on the entity.

See GM:EntityKeyValue for a hook that works for all entities.

See WEAPON:KeyValue for a hook that works for scripted weapons.

**Argumentos:**

- `string key` — The key that was affected.
- `string value` — The new value.

**Retorna:**

- `boolean` — Return true to suppress this KeyValue or return false or nothing to apply this key value.

---

### `ENTITY:NextTask` `[server]`

Start the next task in specific Lua schedule.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `table sched` — The schedule to start next task in.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:108`*

---

### `ENTITY:OnChangeActiveWeapon` `[server]`

Called when the currently active weapon of the SNPC changes.
This hook only works on `ai` type entities.

**Argumentos:**

- `Weapon old` — The previous active weapon.
- `Weapon new` — The new active weapon.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnChangeActivity` `[server]`

Called when the NPC has changed its activity.

This hook only works for `ai` type entities.

**Argumentos:**

- `number act` — The new activity. See Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnCondition` `[server]`

Called each time the NPC updates its condition.
This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

- `number conditionID` — The ID of condition. See NPC:ConditionName.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnDuplicated` `[server]`

Called on any entity after it has been created by the duplicator and before any bone/entity modifiers have been applied.

This hook is called after ENTITY:Initialize and before ENTITY:PostEntityPaste.

**Argumentos:**

- `table entTable` — The stored data about the original entity that was duplicated. This would typically contain the Entity:GetTable fields that are serializalble. See Structures/EntityCopyData.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnEntityCopyTableFinish` `[server]`

Called after duplicator finishes saving the entity, allowing you to modify the save data.

This is called after ENTITY:PostEntityCopy.

**Argumentos:**

- `table data` — The save Structures/EntityCopyData that you can modify.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnMovementComplete` `[server]`

Called when the SNPC completes its movement to its destination.
This hook only works on `ai` type entities.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnMovementFailed` `[server]`

Called when the SNPC failed to move to its destination.
This hook only works on `ai` type entities.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnReloaded` `[client/server]`

Called when the entity is reloaded by the lua auto-refresh system, i.e. when the developer edits the lua file for the entity while the game is running.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnRemove` `[client/server]`

Called when the entity is about to be removed.

See also Entity:CallOnRemove, which can even be used on engine (non-Lua) entities.

Create an explosion when the entity will be removed. To create an entity, you can read ents.Create.

function ENT:OnRemove()
local explosion = ents.Create( "env_explosion" ) -- The explosion entity
explosion:SetPos( self:GetPos() ) -- Put the position of the explosion at the position of the entity
explosion:Spawn() -- Spawn the explosion
explosion:SetKeyValue( "iMagnitude", "50" ) -- the magnitude of the explosion
explosion:Fire( "Explode", 0, 0 ) -- explode
end

**Argumentos:**

- `boolean fullUpdate` — Whether the removal is happening due to a full update clientside.

The entity may or **may not** be recreated immediately after, depending on whether it is in the local player's [PVS](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community"). (See Entity:IsDormant)

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnRestore` `[client/server]`

Called when the entity is reloaded from a Source Engine save (not the Sandbox saves or dupes) or on a changelevel (for example Half-Life 2 campaign level transitions).

For the duplicator callbacks, see ENTITY:OnDuplicated.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnStateChange` `[server]`

Called by the engine when NPC's state changes.

This hook only exists for `ai` type SENTs.

**Argumentos:**

- `number oldState` — The old state. See Enums/NPC_STATE.
- `number newState` — The new state. See Enums/NPC_STATE.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnTakeDamage` `[server]`

Called when the entity is taking damage.

Calling Entity:TakeDamage, Entity:TakeDamageInfo, Entity:DispatchTraceAttack, or Player:TraceHullAttack (if the entity is hit) in this hook on the victim entity can cause infinite loops since the hook will be called again. Make sure to setup recursion safeguards like the example below.

This hook is only called for `ai`, `nextbot` and `anim` type entities.

**Argumentos:**

- `CTakeDamageInfo damage` — The damage to be applied to the entity.

**Retorna:**

- `number` — How much damage the entity took. Basically `&gt; 0` means took damage, `0` means did not take damage.

---

### `ENTITY:OnTaskComplete` `[server]`

Called from the engine when TaskComplete is called.
This allows us to move onto the next task - even when TaskComplete was called from an engine side task.

This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnTaskFailed` `[server]`

Called when a task this NPC was running has failed for whatever reason.
This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

- `number failCode` — The fail code for the task. It will be a [FAIL_ enum](https://github.com/ValveSoftware/source-sdk-2013/blob/0d8dceea4310fde5706b3ce1c70609d72a38efdf/sp/src/game/server/ai_task.h#L26) or a generated code for a custom string. (second argument)
- `string failReason` — If set, a custom reason for the failure.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OnTraceAttack` `[server]`

Called when a trace attack is done against the entity, allowing override of the damage being dealt by altering the CTakeDamageInfo.

This is called before ENTITY:OnTakeDamage.
This hook is only called for `ai`, `nextbot` and `anim` type entities.

**Argumentos:**

- `CTakeDamageInfo info` — The damage info
- `Vector dir` — The direction the damage goes in
- `table trace` — The Structures/TraceResult of the attack, containing the hitgroup.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:OverrideMove` `[server]`

Called to completely override NPC movement. This can be used for example for flying NPCs.

This hook only exists for `ai` type SENTs.

**Argumentos:**

- `number interval` — Time interval for the movement, in seconds. Usually time since last movement.

**Retorna:**

- `boolean` — Return `true` to disable the default movement code.

---

### `ENTITY:OverrideMoveFacing` `[server]`

Called to completely override the direction NPC will be facing during navigation.

This hook only exists for `ai` type SENTs.
This hook is called by the default movement hook. Returning `true` inside ENTITY:OverrideMove will prevent engine from calling this hook.

**Argumentos:**

- `number interval` — Time interval for the movement, in seconds. Usually time since last movement.
- `table AILMG` — Extra data for the movement. A table containing the following data:
* boolean hasTraced - The result if a forward probing trace has been done
* number expectedDist = `speed*interval` - The distance expected to move this think
* number flags - [AILMG flags](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_movetypes.h#L113)
* number maxDist = NPC:GetPathDistanceToGoal - The distance maximum distance intended to travel in path length
* number navType - Enums/NAV
* number speed - Entity:GetSequenceGroundSpeed Note these need not always agree with `target`
* Entity moveTarget = `m_hGoalEnt` - Target entity as goal.
* Vector dir - The step direction, towards `target`
* Vector facing - The direction NPC's body will turn during movement.
* Vector target = NPC:GetCurWaypointPos - Current waypoint in world coordinates.

**Retorna:**

- `boolean` — Return `true` to disable the default movement facing code.

---

### `ENTITY:PassesTriggerFilters` `[server]`

Polls whenever the entity should trigger the brush.

This hook is broken and will not work without code below

**Argumentos:**

- `Entity ent` — The entity that is about to trigger.

**Retorna:**

- `boolean` — Should trigger or not.

---

### `ENTITY:PhysicsCollide` `[server]`

Called when the entity collides with anything via [physics objects](PhysObj). The [move type](Enums/MOVETYPE) and [solid mode](Enums/SOLID) must be `VPHYSICS` for the hook to be called.
This hook only works for `anim` type entities.

This is different from ENTITY:Touch.

If you want to use this hook on default/engine/non-Lua entities (like `prop_physics`), use Entity:AddCallback instead! This page describes a hook for Lua scripted entities

**Argumentos:**

- `table colData` — Information regarding the collision. See Structures/CollisionData.
- `PhysObj collider` — The physics object that collided.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:PhysicsSimulate` `[client/server]`

Called from the Entity's motion controller to simulate physics.

This will only be called after using Entity:StartMotionController on a Scripted_Entities of `anim` type.

This hook can work on the CLIENT if you call Entity:StartMotionController and use Entity:AddToMotionController on the physics objects you want to control

Do not use functions such as PhysObj:EnableCollisions or PhysObj:EnableGravity in this hook as they're very likely to crash your game. You may want to use ENTITY:PhysicsUpdate instead.

**Argumentos:**

- `PhysObj phys` — The physics object of the entity.
- `number deltaTime` — Time since the last call.

**Retorna:**

- `Vector` — Angular force. The 3rd argument must be above SIM_NOTHING.
- `Vector` — Linear force. The 3rd argument must be above SIM_NOTHING.
- `number` — One of the Enums/SIM.

---

### `ENTITY:PhysicsUpdate` `[client/server]`

Called whenever a physics object of this entity is updated.

This hook won't be called if the Entity's PhysObj goes asleep, or doesn't exist.

**Argumentos:**

- `PhysObj phys` — The physics object of the entity.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:PostEntityCopy` `[server]`

Called after the duplicator finished copying the entity.

See also ENTITY:PreEntityCopy, ENTITY:PostEntityPaste and ENTITY:OnEntityCopyTableFinish.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:PostEntityPaste` `[server]`

Called after the duplicator pastes the entity, after the bone/entity modifiers have been applied to the entity.

This hook is called after ENTITY:OnDuplicated. See also ENTITY:PreEntityCopy.

**Argumentos:**

- `Player ply` — The player who pasted the entity.

This may not be a valid player in some circumstances. For example, when a save is loaded from the main menu, this hook will be called before the player is spawned. This argument will be a NULL entity in that case.
- `Entity ent` — The entity itself. Same as `self` within the function context.
- `table createdEntities` — All entities that are within the placed dupe.
The keys of each value in this table are the original entity indexes when the duplication was created. This can be utilized to restore entity references that don't get saved in duplications.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:PreEntityCopy` `[server]`

Called before the duplicator copies the entity.

If you are looking for a way to make the duplicator spawn another entity when duplicated. (For example, you duplicate a `prop_physics`, but you want the duplicator to spawn `prop_physics_my`), you should add `prop_physics.ClassOverride = "prop_physics_my"`. The duplication table should be also stored on that `prop_physics`, not on `prop_physics_my`.

See also ENTITY:PostEntityCopy.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:RenderOverride` `[client]`

Called instead of the engine drawing function of the entity. This hook works on any entity (scripted or not) it is applied on.

This does not work on "physgun_beam", use GM:DrawPhysgunBeam instead.

Drawing a viewmodel in this function will cause GM:PreDrawViewModel, WEAPON:PreDrawViewModel, WEAPON:ViewModelDrawn, GM:PostDrawViewModel, and WEAPON:PostDrawViewModel to be called twice.

This is called before PrePlayerDraw for players. If this function exists at all on a player, their worldmodel will always be rendered regardless of PrePlayerDraw's return.

**Argumentos:**

- `number flags` — The Enums/STUDIO flags for this render operation.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:ResolveCustomFlyCollision` `[server]`

Called during a non-VPhysics collision event for flying entities.

This is best used to make projectiles bounce off from surfaces in their own way. For this to be triggered, this entity must be the one that's colliding, have some velocity, Entity:GetMoveType must be either Enums/MOVETYPE#MOVETYPE_FLY or Enums/MOVETYPE#MOVETYPE_FLYGRAVITY, and Entity:GetMoveCollide must be Enums/MOVECOLLIDE#MOVECOLLIDE_FLY_CUSTOM.
This works only on `anim` type entities.

**Argumentos:**

- `table{TraceResult} traceResult` — The Structures/TraceResult where the collision occured.
- `vector vel` — The calculated velocity after calculations such as bounciness, elasticity, ground sliding etc...

**Retorna:**

- `boolean` — Return `true` to prevent default action.

---

### `ENTITY:RunAI` `[server]`

Called from the engine every [m_flNextDecisionTime](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_basenpc.cpp#L3943C10-L3943C30) in seconds. This interval changes depending on NPC's [Efficiency](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_basenpc.cpp#L3093). Returning `true` inside this hook will allow [CAI_BaseNPC::MaintainSchedule](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_basenpc_schedule.cpp#L562) to also be called.

This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` to run engine schedules

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:5`*

---

### `ENTITY:RunEngineTask` `[server]`

Called when an engine task is ran on the entity.

This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

- `number taskID` — The task ID, see [ai_task.h](https://github.com/ValveSoftware/source-sdk-2013/blob/55ed12f8d1eb6887d348be03aee5573d44177ffb/mp/src/game/server/ai_task.h#L89-L502)
- `number taskData` — The task data.

**Retorna:**

- `boolean` — true to prevent default action

---

### `ENTITY:RunTask` `[server]`

Called every think on running task.
The actual task function should tell us when the task is finished.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `table task` — The task to run

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:138`*

---

### `ENTITY:ScheduleFinished` `[server]`

Called whenever a Lua schedule is finished or ENTITY:StartEngineSchedule is called. Clears out schedule and task data stored within NPC's table.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:80`*

---

### `ENTITY:SelectSchedule` `[server]`

Set the schedule we should be playing right now. Allows the NPC to start either a Lua schedule or an engine schedule. Despite sharing the same name as `CAI_BaseNPC::SelectSchedule()`, this isn't hooked to that function; this is called by Lua's ENTITY:RunAI, doesn't return an engine function, returning an engine function doesn't help and doesn't make the NPC start an engine schedule. To alter initial engine schedule, it is recommended to use ENTITY:TranslateSchedule.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:39`*

---

### `ENTITY:SetAutomaticFrameAdvance` `[client/server]`

Toggles automatic frame advancing for animated sequences on an entity.

This has the same effect as setting the ``ENT.AutomaticFrameAdvance`` property. (See Structures/ENT)

**Argumentos:**

- `boolean enable` — Whether or not to set automatic frame advancing.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:SetTask` `[server]`

Sets the current task, to be used in a Lua schedule.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `table task` — The task to set.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:93`*

---

### `ENTITY:SetupDataTables` `[client/server]`

Called when the entity should set up its Networking_Entities.

This is a much better option than using Set/Get Networked Values.

This hook is called after GM:OnEntityCreated and GM:NetworkEntityCreated.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ENTITY:SpawnFunction` `[server]`

This is the spawn function. It's called when a player spawns the entity from the spawnmenu.

If you want to make your SENT spawnable you need this function to properly create the entity.

Unlike other ENTITY functions, the "self" parameter of this function is not an entity but rather the table used to generate the SENT. This table is equivalent to scripted_ents.GetStored("ent_name").

**Argumentos:**

- `Player ply` — The player that is spawning this SENT
- `table tr` — A Structures/TraceResult from player eyes to their aim position
- `string ClassName` — The classname of your entity

**Retorna:**

*(sin retorno)*

---

### `ENTITY:StartEngineSchedule` `[server]`

Called by the engine only whenever NPC:SetSchedule is called.
This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

- `number scheduleID` — Schedule ID to start. See Enums/SCHED

**Retorna:**

*(sin retorno)*

---

### `ENTITY:StartEngineTask` `[server]`

Called when an engine task has been started on the entity.

This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

- `number taskID` — Task ID to start, see [ai_task.h](https://github.com/ValveSoftware/source-sdk-2013/blob/55ed12f8d1eb6887d348be03aee5573d44177ffb/mp/src/game/server/ai_task.h#L89-L502)
- `number TaskData` — Task data

**Retorna:**

- `boolean` — true to stop default action

---

### `ENTITY:StartSchedule` `[server]`

Starts a schedule previously created by ai_schedule.New.

Not to be confused with ENTITY:StartEngineSchedule or NPC:SetSchedule which start an Engine-based schedule.

This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `Schedule sched` — Schedule to start.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:50`*

---

### `ENTITY:StartTask` `[server]`

Called once when a LUA schedule has started a task.
This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `Task task` — The task to start, created by ai_task.New.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/schedules.lua:129`*

---

### `ENTITY:StartTouch` `[server]`

Called when the entity starts touching another entity.

See ENTITY:Touch and ENTITY:EndTouch for related hooks.

This only works for **brush** entities and for entities that have Entity:SetTrigger set to true.

**Argumentos:**

- `Entity entity` — The entity that we started touching for the first time.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:StoreOutput` `[server]`

Used to store an output so it can be triggered with ENTITY:TriggerOutput.
Outputs compiled into a map are passed to entities as key/value pairs through ENTITY:KeyValue.

TriggerOutput will do nothing if this function has not been called first.

**Argumentos:**

- `string name` — Name of output to store
- `string info` — Output info

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_entity/outputs.lua:10`*

---

### `ENTITY:TaskFinished` `[server]`

Returns true if the current running Task is finished.
Tasks finish whenever NPC:TaskComplete is called, which sets `TASKSTATUS_COMPLETE` for all NPCs, also sets `self.bTaskComplete` for `ai` type [SENTs](Scripted_Entities).
This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the current running Task is finished or not.

---

### `ENTITY:TaskTime` `[server]`

Returns how many seconds we've been doing this current task
This hook only exists for `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — How many seconds we've been doing this current task

---

### `ENTITY:TestCollision` `[client/server]`

Allows you to override trace result when a trace hits the entity.

Your entity **must** have Entity:EnableCustomCollisions enabled for this hook to work.

Your entity must also be otherwise "hit-able" with a trace, so it should have Enums/SOLID#SOLID_OBB or Enums/SOLID#SOLID_VPHYSICS be set (as an example), and it must have its Entity:SetCollisionBounds be set accordingly.

This hook is called for `anim` type only.

**Argumentos:**

- `Vector startpos` — Start position of the trace.
- `Vector delta` — Offset from startpos to the endpos of the trace.
- `boolean isbox` — Is the trace a hull trace?
- `Vector extents` — Size of the hull trace, with the center of the Bounding Box being `0, 0, 0`, so mins are `-extents`, and maxs are `extents`.
- `number mask` — The Enums/CONTENTS mask.

**Retorna:**

- `table` — Returning a `table` will allow you to override trace results. Table should contain the following keys: (All keys fallback to the original trace value)
* Vector `HitPos` - The new hit position of the trace.
* number `Fraction` - A number from `0` to `1`, describing how far the trace went from its origin point, `1` = did not hit.
* Could be calculated like so : `Fraction = ( startpos + delta ):Length() / myCustomHitPos:Length()`
* Vector `Normal` - A unit vector (length=1) describing the direction perpendicular to the hit surface.

Returning `true` will allow "normal" collisions to happen for `SOLID_VPHYSICS` and `SOLID_OBB` entities.
Returning `nothing` or `false` allows the trace to ignore the entity completely.

---

### `ENTITY:Think` `[client/server]`

Called every frame on the client.
Called about 5-6 times per second on the server.

You may need to call Entity:Spawn to get this hook to run server side.

You can force it to run at servers tickrate using the example below.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return `true` if you used Entity:NextThink to override the next execution time. Otherwise it will be reset to `CurTime() + 0.2`.

---

### `ENTITY:Touch` `[server]`

Called every tick for every entity being "touched". Touching is usually detected via AABB intersection checks using entity's Entity:GetCollisionBounds.

Entities like triggers would be using the touch hooks for their function.

See Entity:PhysicsCollide for physics based collision events.

See also ENTITY:StartTouch and ENTITY:EndTouch.

For physics enabled entities, this hook will **not** be ran while the entity's physics is asleep. See PhysObj:Wake.

**Argumentos:**

- `Entity entity` — The entity that touched it.

**Retorna:**

*(sin retorno)*

---

### `ENTITY:TranslateActivity` `[server]`

Called by the engine to alter NPC activities, if desired by the NPC.

This hook only exists for `ai` type SENTs.

**Argumentos:**

- `number{ACT} oldAct` — The activity to translate.

**Retorna:**

- `number{ACT} newAct` — The activity that should override the incoming activity.

Not returning anything, or returning a non value will perform the [default action](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_basenpc.cpp#L5976).

---

### `ENTITY:TranslateNavGoal` `[server]`

Called by the engine to alter NPC's final position to reach its enemy or target. This is called twice for `GOALTYPE_PATHCORNER`; first is for the first path_corner and second for the next connected path_corner.

This hook only exists for `ai` type SENTs.

**Argumentos:**

- `NPC|Entity target` = `GetEnemy() or m_hGoalEnt` — The enemy being chased or the path_corner in query.
- `Vector currentGoal` = `GetEnemyLastKnownPos() or m_hGoalEnt:GetPos()` — The target's origin.

**Retorna:**

- `Vector` — The actual point that NPC will move to reach its enemy or target. For the path to get updated, the new move path must be away from the current NPC:GetGoalPos by 120 units.

Not returning anything, or returning a non vector will perform the [default action](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_basenpc_schedule.cpp#L4251).

---

### `ENTITY:TranslateSchedule` `[server]`

Called by the engine to alter NPC schedules, if desired by the NPC.

This hook only exists for `ai` type SENTs.

**Argumentos:**

- `number{SCHED} schedule` — The schedule to translate. See Enums/SCHED.

**Retorna:**

- `number{SCHED}` — The schedule that should override the incoming schedule.

Not returning anything, or returning a non value will perform the [default action](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/ai_default.cpp#L253).

---

### `ENTITY:TriggerOutput` `[server]`

Triggers all outputs stored using ENTITY:StoreOutput.

**Argumentos:**

- `string output` — Name of output to fire
- `Entity activator` — Activator entity
- `string data` = `nil` — The data to give to the output.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_entity/outputs.lua:105`*

---

### `ENTITY:UpdateTransmitState` `[server]`

Called whenever the transmit state should be updated.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Transmit state to set, see Enums/TRANSMIT.

---

### `ENTITY:Use` `[server]`

Called when an entity "uses" this entity, for example a player pressing their `+use` key (default E) on this entity.

To change how often the hook is called, see Entity:SetUseType.

This hook only works for `nextbot`, `ai` and `anim` scripted entity types.

**Argumentos:**

- `Entity activator` — The entity that caused this input. This will usually be the player who pressed their use key.
- `Entity caller` — The entity responsible for the input. This will typically be the same as `activator` unless some other entity is acting as a proxy.
- `number{USE} useType` — Use type, see Enums/USE.
- `number value` — Any passed value.

**Retorna:**

*(sin retorno)*