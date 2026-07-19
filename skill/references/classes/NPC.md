# NPC

---

This is a list of all methods only available for NPCs. It is also possible to call Entity functions on NPCs.

---


## Miembros (182)


---

### `NPC:AddEntityRelationship` `[server]`

Makes the NPC like, hate, feel neutral towards, or fear the entity in question. If you want to setup relationship towards a certain entity `class`, use NPC:AddRelationship.

NPCs do not see NextBots by default. This can be fixed by adding the Enums/FL flag to the NextBot.

**Argumentos:**

- `Entity target` — The entity for the relationship to be applied to.
- `number disposition` — A Enums/D representing the relationship type.
- `number priority` = `0` — How strong the relationship is. Higher values mean higher priority over relationships with lower priority.

**Retorna:**

*(sin retorno)*

---

### `NPC:AddRelationship` `[server]`

Changes how an NPC feels towards another NPC.  If you want to setup relationship towards a certain `entity`, use NPC:AddEntityRelationship.

Avoid using this in GM:OnEntityCreated to prevent crashing due to infinite loops. This function may create an entity with given class and delete it immediately after.

**Argumentos:**

- `string relationstring` — A string representing how the relationship should be set up.
Should be formatted as `"npc_class `Enums/D` numberPriority"`.

**Retorna:**

*(sin retorno)*

---

### `NPC:AdvancePath` `[server]`

Advances the NPC on its path to the next waypoint.
Calling this on an NPC without any route will result in an instant crash.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:AlertSound` `[server]`

Force an NPC to play their Alert sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:AutoMovement` `[server]`

Executes any movement the current sequence may have.

**Argumentos:**

- `number interval` — This is a good place to use Entity:GetAnimTimeInterval.
- `Entity target` = `NULL` — 

**Retorna:**

- `boolean` — `true` if any movement was performed.

---

### `NPC:BecomeRagdoll` `[server]`

Become a ragdoll and remove the entity. Internally handles serverside/clientside ragdoll creation, momentum calculation, triggering ragdoll creation hooks / events and cloning entity's bone transforms to the created ragdoll.

**Argumentos:**

- `CTakeDamageInfo info` — Damage info passed from an onkilled event

**Retorna:**

- `Entity` — The created serverside ragdoll, nil if failed or a clientside ragdoll created.

---

### `NPC:CapabilitiesAdd` `[server]`

Adds a capability to the NPC.

**Argumentos:**

- `number{CAP} capabilities` — Capabilities to add, see Enums/CAP.

**Retorna:**

*(sin retorno)*

---

### `NPC:CapabilitiesClear` `[server]`

Removes all of Capabilities the NPC has.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:CapabilitiesGet` `[server]`

Returns the NPC's capabilities along the ones defined on its weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{CAP}` — The capabilities as a bitflag.
See Enums/CAP

---

### `NPC:CapabilitiesHas` `[server]`

Checks whether the NPC has the specified capabilities.

**Argumentos:**

- `number{CAP} capabilities` — Capabilities to check, see Enums/CAP.

**Retorna:**

*(sin retorno)*

---

### `NPC:CapabilitiesRemove` `[server]`

Remove a certain capability.

**Argumentos:**

- `number capabilities` — Capabilities to remove, see Enums/CAP

**Retorna:**

*(sin retorno)*

---

### `NPC:Classify` `[server]`

Returns the NPC relationship class. This is mostly used to tell NPCs who should be attacking who.

Do not confuse with Entity:GetClass!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{CLASS}` — See Enums/CLASS

---

### `NPC:ClearBlockingEntity` `[server]`

Resets the NPC:GetBlockingEntity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:ClearCondition` `[server]`

Clears out the specified Enums/COND on this NPC.

**Argumentos:**

- `number condition` — The Enums/COND to clear out.

**Retorna:**

*(sin retorno)*

---

### `NPC:ClearEnemyMemory` `[server]`

Clears the Enemy from the NPC's memory, effectively forgetting it until met again with either the NPC vision or with NPC:UpdateEnemyMemory.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to mark

**Retorna:**

*(sin retorno)*

---

### `NPC:ClearExpression` `[server]`

Clears the NPC's current expression which can be set with NPC:SetExpression.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:ClearGoal` `[server]`

Clears the current NPC goal or target.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:ClearSchedule` `[server]`

Stops the current schedule that the NPC is doing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:ConditionID` `[server]`

Returns the ID of a given condition by name. Opposite of NPC:ConditionName.

This is useful for custom conditions defined by engine NPCs, such as `COND_ZOMBIE_RELEASECRAB` for zombies, and `COND_COMBINE_ON_FIRE` for Combine Soldiers.

**Argumentos:**

- `string conditionName` — The condition name.

**Retorna:**

- `number` — The condition ID, see Enums/COND. Custom conditions will have a "randomly" assigned IDs, which will change with each game session.

---

### `NPC:ConditionName` `[server]`

Translates condition ID to a string. For the opposite process, see NPC:ConditionID.

**Argumentos:**

- `number cond` — The NPCs condition ID, see Enums/COND

**Retorna:**

- `string` — A human understandable string equivalent of that condition.

---

### `NPC:Disposition` `[server]`

Returns the way the NPC "feels" about a given entity. See NPC:AddEntityRelationship.

For `ai` type entities, this will return ENTITY:GetRelationship. If it returns `nil` or for engine NPCs, this will return whatever was last set by NPC:AddEntityRelationship. As a last resort, engine will decide on the disposition based on this NPC's NPC:Classify.

**Argumentos:**

- `Entity ent` — The entity to test our disposition towards.

**Retorna:**

- `number{D}` — The NPCs disposition, see Enums/D.
- `number` — The NPCs disposition priority.

---

### `NPC:DropWeapon` `[server]`

Forces the NPC to drop the specified weapon.

**Argumentos:**

- `Weapon weapon` = `nil` — Weapon to be dropped. If unset, will default to the currently equipped weapon.
- `Vector target` = `nil` — If set, launches the weapon at given position. There is a limit to how far it is willing to throw the weapon. Overrides velocity argument.
- `Vector velocity` = `nil` — If set and previous argument is unset, launches the weapon with given velocity. If the velocity is higher than 400, it will be clamped to 400.

**Retorna:**

*(sin retorno)*

---

### `NPC:ExitScriptedSequence` `[server]`

Makes an NPC exit a scripted sequence, if one is playing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:FearSound` `[server]`

Force an NPC to play its Fear sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:FoundEnemySound` `[server]`

Force an NPC to play its FoundEnemy sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:GetActiveWeapon` `[client/server]`

Returns the weapon the NPC is currently carrying, or Global_Variables.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The NPCs current weapon

---

### `NPC:GetActivity` `[server]`

Returns the NPC's current activity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current activity, see Enums/ACT.

---

### `NPC:GetAimVector` `[server]`

Returns the aim vector of the NPC. NPC alternative of Player:GetAimVector.

 If the NPC has both NPC:GetEnemy and NPC:GetActiveWeapon, engine will automatically call ENTITY:GetAttackSpread to add random spread degrees to the return value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The aim direction of the NPC, usually a noisy direction to it's NPC:GetEnemy. This will default to Entity:GetForward when there's no enemy. Thus, NPC:GetCurrentWeaponProficiency will be used.

---

### `NPC:GetArrivalActivity` `[server]`

Returns the activity to be played when the NPC arrives at its goal

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The arrival activity. See Enums/ACT.

---

### `NPC:GetArrivalDirection` `[server]`

Returns the direction from the NPC origin to its current navigational destination.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The arrival direction.

---

### `NPC:GetArrivalDistance` `[server]`

Returns NPC arrival distance, set by NPC:SetArrivalDistance.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number dist` — The current arrival distance.

---

### `NPC:GetArrivalSequence` `[server]`

Returns the sequence to be played when the NPC arrives at its goal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Sequence ID to be played, or -1 if there's no sequence.

---

### `NPC:GetArrivalSpeed` `[server]`

Returns NPC arrival speed, set by NPC:SetArrivalSpeed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number speed` — The current arrival peed.

---

### `NPC:GetBestSoundHint` `[server]`

Returns the most dangerous/closest sound hint based on the NPCs location and the types of sounds it can sense.

**Argumentos:**

- `number types` — The types of sounds to choose from. See Enums/SOUND

**Retorna:**

- `table` — A table with Structures/SoundHintData structure or `nil` if no sound hints are nearby.

---

### `NPC:GetBlockingEntity` `[server]`

Returns the entity blocking the NPC along its path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — Blocking entity

---

### `NPC:GetCurGoalType` `[server]`

Returns the goal type for current navigation path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The goal type. See Enums/GOALTYPE.

---

### `NPC:GetCurWaypointPos` `[server]`

Gets the NPC's current waypoint position (where NPC is currently moving towards), if any is available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the current NPC waypoint.

---

### `NPC:GetCurrentSchedule` `[server]`

Returns the NPC's current schedule.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The NPCs schedule, see Enums/SCHED or -1 if we failed for some reason

---

### `NPC:GetCurrentWeaponProficiency` `[server]`

Returns how proficient (skilled) an NPC is with its current weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — NPC's proficiency for current weapon. See Enums/WEAPON_PROFICIENCY.

---

### `NPC:GetEnemy` `[server]`

Returns the entity that this NPC is trying to fight.

This returns nil if the NPC has no enemy. You should use Global.IsValid (which accounts for nil and NULL) on the return to verify validity of the enemy.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `NPC` — Enemy NPC.

---

### `NPC:GetEnemyFirstTimeSeen` `[server]`

Returns the first time an NPC's enemy was seen by the NPC.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to check.

**Retorna:**

- `number time` — First time the given enemy was seen.

---

### `NPC:GetEnemyLastKnownPos` `[server]`

Returns the last known position of an NPC's enemy.

Similar to NPC:GetEnemyLastSeenPos, but the known position will be a few seconds ahead of the last seen position.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to check.

**Retorna:**

- `Vector pos` — The last known position.

---

### `NPC:GetEnemyLastSeenPos` `[server]`

Returns the last seen position of an NPC's enemy.

Similar to NPC:GetEnemyLastKnownPos, but the known position will be a few seconds ahead of the last seen position.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to check.

**Retorna:**

- `Vector pos` — The last seen position.

---

### `NPC:GetEnemyLastTimeSeen` `[server]`

Returns the last time an NPC's enemy was seen by the NPC.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to check.

**Retorna:**

- `number time` — Last time the given enemy was seen.

---

### `NPC:GetExpression` `[server]`

Returns the expression file the NPC is currently playing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string m_iszExpressionScene` — The file path of the expression.

---

### `NPC:GetEyeDirection` `[server]`

Returns the eye direction of the NPC.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The eye direction.

---

### `NPC:GetFOV` `[server]`

Returns the Field Of View of the NPC. See NPC:SetFOV.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number fov` — The FOV for the NPC in degrees.

---

### `NPC:GetGoalPos` `[server]`

Returns the position we are trying to reach, if any.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position we are trying to reach.

---

### `NPC:GetGoalTarget` `[server]`

Returns the entity we are trying to reach, if any.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity we are trying to reach, or `NULL`.

---

### `NPC:GetHeadDirection` `[server]`

Returns the 2D head direction of the NPC.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The head direction.

---

### `NPC:GetHullType` `[server]`

Returns NPCs hull type set by NPC:SetHullType.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Hull type, see Enums/HULL

---

### `NPC:GetIdealActivity` `[server]`

Returns the ideal activity the NPC currently wants to achieve.
By default, base NPCs will automatically attempt to play a sequence bound to the ideal activity. To prevent ideal activity from overriding NPC's active sequence, set this to `ACT_DO_NOT_DISTURB`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ideal activity. Enums/ACT.

---

### `NPC:GetIdealMoveAcceleration` `[server]`

Returns the ideal move acceleration of the NPC.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ideal move acceleration.

---

### `NPC:GetIdealMoveSpeed` `[server]`

Returns the ideal move speed of the NPC.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ideal move speed.

---

### `NPC:GetIdealSequence` `[server]`

Returns the ideal sequence the NPC currently wants to achieve.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ideal sequence, specific to the NPCs model.

---

### `NPC:GetIdealYaw` `[server]`

Returns the ideal yaw (left right rotation) for this NPC at this moment.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ideal yaw.

---

### `NPC:GetKnownEnemies` `[server]`

Returns all known enemies this NPC has. The enemy table is updated with NPC:UpdateEnemyMemory and NPC:ClearEnemyMemory, meaning other entities may be in enemies list even though your NPC doesn't hate it.

See also NPC:GetKnownEnemyCount

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Table of entities that this NPC knows as enemies.

---

### `NPC:GetKnownEnemyCount` `[server]`

Returns known enemy count of this NPC.

See also NPC:GetKnownEnemies

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Amount of entities that this NPC knows as enemies.

---

### `NPC:GetLastPosition` `[server]`

Returns the last registered or memorized position of the NPC. When using scheduling, the NPC will focus on navigating to the last position via nodes.

See NPC:SetLastPosition.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector position` — Where the NPC's last position was set to.

---

### `NPC:GetLastTimeTookDamageFromEnemy` `[server]`

Returns Global.CurTime based time since this NPC last received damage from given enemy. The last damage time is set when NPC:MarkTookDamageFromEnemy is called.

**Argumentos:**

- `Entity enemy` = `nil` — The enemy to test. Defaults to currently active enemy (NPC:GetEnemy)

**Retorna:**

- `number` — Time since this NPC last received damage from given enemy.

---

### `NPC:GetMaxLookDistance` `[server]`

Returns NPCs max view distance. An NPC will not be able to see enemies outside of this distance.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number dist` — The maximum distance the NPC can see at.

---

### `NPC:GetMinMoveCheckDist` `[server]`

Returns how far should the NPC look ahead in its route.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — How far the NPC checks ahead of its route.

---

### `NPC:GetMinMoveStopDist` `[server]`

Returns how far before the NPC can come to a complete stop.

**Argumentos:**

- `number minResult ` = `10` — The minimum value that will be returned by this function.

**Retorna:**

- `number` — The minimum stop distance.

---

### `NPC:GetMoveDelay` `[server]`

Returns the movement delay for given NPC.

See NPC:SetMoveDelay.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The movement delay.

---

### `NPC:GetMoveInterval` `[server]`

Returns the current timestep the internal NPC motor is working on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current timestep.

---

### `NPC:GetMoveVelocity` `[server]`

Returns the current move velocity of the NPC.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The current move velocity of the NPC.

---

### `NPC:GetMovementActivity` `[server]`

Returns the NPC's current movement activity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current NPC movement activity, see Enums/ACT.

---

### `NPC:GetMovementSequence` `[server]`

Returns the index of the sequence the NPC uses to move.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The movement sequence index

---

### `NPC:GetNPCState` `[server]`

Returns the NPC's state.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The NPC's current state, see Enums/NPC_STATE.

---

### `NPC:GetNavType` `[server]`

Returns the NPC's navigation type.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The nav type. See Enums/NAV.

---

### `NPC:GetNearestSquadMember` `[server]`

Returns the nearest member of the squad the NPC is in.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `NPC nearest_member` — The nearest member of the squad the NPC is in.

---

### `NPC:GetNextWaypointPos` `[server]`

Gets the NPC's next waypoint position, where NPC will be moving after reaching current waypoint, if any is available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the next NPC waypoint.

---

### `NPC:GetPathDistanceToGoal` `[server]`

Returns the distance the NPC is from Target Goal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of hammer units the NPC is away from the Goal.

---

### `NPC:GetPathTimeToGoal` `[server]`

Returns the amount of time it will take for the NPC to get to its Target Goal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of time to get to the target goal.

---

### `NPC:GetShootPos` `[server]`

Returns the shooting position of the NPC, i.e. where their bullets would come from, etc.

If the NPC does not overwrite this, it will return Entity:GetPos.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The NPC's shooting position.

---

### `NPC:GetSquad` `[server]`

Returns the current squad name of the NPC, as set via NPC:SetSquad.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string name` — The new squad name to set.

---

### `NPC:GetStepHeight` `[server]`

Returns NPC step height.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number height` — The current step height.

---

### `NPC:GetTarget` `[server]`

Returns the NPC's current target set by NPC:SetTarget.

This returns nil if the NPC has no target. You should use Global.IsValid (which accounts for nil and NULL) on the return to verify validity of the target.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — Target entity

---

### `NPC:GetTaskStatus` `[server]`

Returns the status of the current task.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The status. See Enums/TASKSTATUS.

---

### `NPC:GetTimeEnemyLastReacquired` `[server]`

Returns Global.CurTime based time since the enemy was reacquired, meaning it is currently in Line of Sight of the NPC.

**Argumentos:**

- `Entity enemy` = `nil` — The enemy to test. Defaults to currently active enemy (NPC:GetEnemy)

**Retorna:**

- `number` — Time enemy was last reacquired.

---

### `NPC:GetViewOffset` `[server]`

Returns the view offset of the NPC. Set by NPC:SetViewOffset.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The view offset of the NPC.

---

### `NPC:GetWeapon` `[server]`

Returns a specific weapon the NPC owns.

**Argumentos:**

- `string class` — A classname of the weapon to try to get.

**Retorna:**

- `Weapon wep` — The weapon for the specified class, or NULL of the NPC doesn't have given weapon.

---

### `NPC:GetWeapons` `[server]`

Returns a table of the NPC's weapons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Weapon>` — A list of the weapons the NPC currently has.

---

### `NPC:Give` `[server]`

Used to give a weapon to an already spawned NPC.

**Argumentos:**

- `string weapon` — Class name of the weapon to equip to the NPC.

**Retorna:**

- `Weapon` — The weapon entity given to the NPC.

---

### `NPC:HasCondition` `[server]`

Returns whether or not the NPC has the given condition.

**Argumentos:**

- `number condition` — The condition index, see Enums/COND.

**Retorna:**

- `boolean` — True if the NPC has the given condition, false otherwise.

---

### `NPC:HasEnemyEluded` `[server]`

Polls the enemy memory to check if the given entity has eluded us or not.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to test.

**Retorna:**

- `boolean eluded` — If the enemy has eluded us.

---

### `NPC:HasEnemyMemory` `[server]`

Polls the enemy memory to check if the NPC has any memory of given enemy.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The entity to test.

**Retorna:**

- `boolean eluded` — If we have any memory on given enemy.

---

### `NPC:HasObstacles` `[server]`

Returns true if the current navigation has an obstacle, this is different from NPC:GetBlockingEntity, this is for virtual navigation obstacles put by AI's local navigation system to prevent movement to the marked area, forcing NPC to steer around, [for example](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/server/hl2/npc_playercompanion.cpp#L2897).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the current navigation has an obstacle.

---

### `NPC:IdleSound` `[server]`

Force an NPC to play their Idle sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:IgnoreEnemyUntil` `[server]`

Makes the NPC ignore given entity/enemy until given time.

**Argumentos:**

- `Entity enemy` — The enemy to ignore.
- `number until` — How long to ignore the enemy for. This will be compared to Global.CurTime, so your value should be based on it.

**Retorna:**

*(sin retorno)*

---

### `NPC:IsCrouching` `[server]`

Returns whether the NPC is currently crouching or not. Citizens and Combine Soldiers are capable of this behavior by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the NPC is currently crouching.

---

### `NPC:IsCurWaypointGoal` `[server]`

Returns whether the current navigational waypoint is the final one.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the current navigational waypoint is the final one.

---

### `NPC:IsCurrentSchedule` `[server]`

Returns whether or not the NPC is performing the given schedule.

**Argumentos:**

- `number schedule` — The schedule number, see Enums/SCHED.

**Retorna:**

- `boolean` — True if the NPC is performing the given schedule, false otherwise.

---

### `NPC:IsFacingIdealYaw` `[server]`

Returns whether the NPC is facing their ideal yaw. See NPC:SetIdealYaw, NPC:GetIdealYaw and NPC:SetIdealYawAndUpdate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the NPC is facing their ideal yaw.

---

### `NPC:IsGoalActive` `[server]`

Returns whether the NPC has an active goal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean act` — Whether the NPC has an active goal or not.

---

### `NPC:IsInViewCone` `[server]`

Tests whether a position or an NPC is in the view cone of the NPC.

**Argumentos:**

- `Vector position` — The position to test.

**Retorna:**

- `boolean` — If the given position is in the view cone.

**Sobrecargas:**

- Variante 1: - `Entity ent` — The entity to test. Will use the entity's position.

---

### `NPC:IsMoveYawLocked` `[server]`

Returns if the current movement is locked on the Yaw axis.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the movement is yaw locked or not.

---

### `NPC:IsMoving` `[server]`

Returns whether the NPC is moving or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the NPC is moving or not.

---

### `NPC:IsRunningBehavior` `[server]`

Checks if the NPC is running an **ai_goal**. ( e.g. An npc_citizen NPC following the Player. )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns true if running an ai_goal, otherwise returns false.

---

### `NPC:IsSquadLeader` `[server]`

Returns whether the current NPC is the leader of the squad it is in.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean is_leader` — Whether the NPC is the leader of the squad or not.

---

### `NPC:IsUnforgettable` `[server]`

Returns the "forgettable" status for a given enemy, as set by NPC:SetUnforgettable, or by internal logic of engine NPCs.

**Argumentos:**

- `Entity enemy` — Enemy entity to check.

**Retorna:**

- `boolean` — Whether the given enemy is unforgettable (`true`) or not.

---

### `NPC:IsUnreachable` `[server]`

Returns true if the entity was remembered as unreachable. The memory is updated automatically from following engine tasks if they failed:
* TASK_GET_CHASE_PATH_TO_ENEMY
* TASK_GET_PATH_TO_ENEMY_LKP
* TASK_GET_PATH_TO_INTERACTION_PARTNER
* TASK_ANTLIONGUARD_GET_CHASE_PATH_ENEMY_TOLERANCE
* SCHED_FAIL_ESTABLISH_LINE_OF_FIRE - Combine NPCs, also when failing to change their enemy

**Argumentos:**

- `Entity testEntity` — The entity to test.

**Retorna:**

- `boolean` — If the entity is reachable or not.

---

### `NPC:LostEnemySound` `[server]`

Force an NPC to play their LostEnemy sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:MaintainActivity` `[server]`

Tries to achieve our ideal animation state, playing any transition sequences that we need to play to get there.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:MarkEnemyAsEluded` `[server]`

Causes the NPC to temporarily forget the current enemy and switch on to a better one.

**Argumentos:**

- `Entity enemy` = `GetEnemy()` — The enemy to mark

**Retorna:**

*(sin retorno)*

---

### `NPC:MarkTookDamageFromEnemy` `[server]`

Marks the NPC as took damage from given entity.

See also NPC:GetLastTimeTookDamageFromEnemy.

**Argumentos:**

- `Entity enemy` = `nil` — The enemy to mark. Defaults to currently active enemy (NPC:GetEnemy)

**Retorna:**

*(sin retorno)*

---

### `NPC:MoveClimbExec` `[server]`

Executes a climb move.

Related functions are NPC:MoveClimbStart and NPC:MoveClimbStop.

**Argumentos:**

- `Vector destination` — The destination of the climb.
- `Vector dir` — The direction of the climb.
- `number distance` — The distance.
- `number yaw` — The yaw angle.
- `number left` — Amount of climb nodes left?

**Retorna:**

- `number{AIMR}` — The result. See Enums/AIMR.

---

### `NPC:MoveClimbStart` `[server]`

Starts a climb move.

Related functions are NPC:MoveClimbExec and NPC:MoveClimbStop.

**Argumentos:**

- `Vector destination` — The destination of the climb.
- `Vector dir` — The direction of the climb.
- `number distance` — The distance.
- `number yaw` — The yaw angle.

**Retorna:**

*(sin retorno)*

---

### `NPC:MoveClimbStop` `[server]`

Stops a climb move.

Related functions are NPC:MoveClimbExec and NPC:MoveClimbStart.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:MoveGroundStep` `[server]`

Similar to other `NPC:Move*` functions, invokes internal code to move the NPC to a given location.

Meant to be used within ENTITY:OverrideMove.

**Argumentos:**

- `Vector pos` — The position we want to reach.
- `Entity targetEntity` = `nil` — Used to test whether we hit the move target when deciding success.
- `number yaw` = `-1` — Target Yaw angle at the end of the move. -1 to keep original yaw.
- `boolean asFarAsCan` = `true` — Whether to move as far as possible.
- `boolean testZ` = `true` — Also test the Z axis of the target position and NPC position to decide success.

**Retorna:**

- `number` — Whether the movement succeeded or not.

`AIMotorMoveResult_t` enum:
* AIM_FAILED = 0
* AIM_SUCCESS = 1
* AIM_PARTIAL_HIT_NPC = 2
* AIM_PARTIAL_HIT_WORLD = 3
* AIM_PARTIAL_HIT_TARGET = 4

---

### `NPC:MoveJumpExec` `[server]`

Executes a jump move.

Related functions are NPC:MoveJumpStart and NPC:MoveJumpStop.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{AIMR}` — The result. See Enums/AIMR.

---

### `NPC:MoveJumpStart` `[server]`

Starts a jump move.

Related functions are NPC:MoveJumpExec and NPC:MoveJumpStop.

**Argumentos:**

- `Vector vel` — The jump velocity.

**Retorna:**

*(sin retorno)*

---

### `NPC:MoveJumpStop` `[server]`

Stops a jump move.

Related functions are NPC:MoveJumpExec and NPC:MoveJumpStart.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{AIMR}` — The result. See Enums/AIMR.

---

### `NPC:MoveOrder` `[server]`

Makes the NPC walk toward the given position. The NPC will return to the player after amount of time set by **player_squad_autosummon_time** ConVar.

Only works on Citizens (npc_citizen) and is a part of the Half-Life 2 squad system.

The NPC **must** be in the player's squad for this to work.

**Argumentos:**

- `Vector position` — The target position for the NPC to walk to.

**Retorna:**

*(sin retorno)*

---

### `NPC:MovePause` `[server]`

Pauses the NPC movement?

Related functions are NPC:MoveStart, NPC:MoveStop and NPC:ResetMoveCalc.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:MoveStart` `[server]`

Starts NPC movement?

Related functions are NPC:MoveStop, NPC:MovePause and NPC:ResetMoveCalc.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:MoveStop` `[server]`

Stops the NPC movement?

Related functions are NPC:MoveStart, NPC:MovePause and NPC:ResetMoveCalc.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:NavSetGoal` `[server]`

Picks random node around given vector, around specified length, using dir as search direction start. Works similarly to NPC:NavSetRandomGoal, but you can decide any position you want as a search starting point rather than your NPC.

**Argumentos:**

- `Vector pos` — The origin to calculate a path from.
- `number length` — The target length of the path to calculate.
- `Vector dir` — The direction in which to look for a new path end goal.

**Retorna:**

- `boolean` — Whether path generation was successful or not.

---

### `NPC:NavSetGoalPos` `[server]`

Creates a path to closest node at given position. This won't actually force the NPC to move.

This will call either NPC:TaskComplete or NPC:TaskFail for the current schedule and task, forcing the current task to progress to next task or fail. 

See also NPC:NavSetRandomGoal.

**Argumentos:**

- `Vector pos` — The position to calculate a path to.

**Retorna:**

- `boolean` — Whether path generation was successful or not.

---

### `NPC:NavSetGoalTarget` `[server]`

Set the goal target for an NPC.

This will call either NPC:TaskComplete or NPC:TaskFail for the current schedule and task, forcing the current task to progress to next task or fail.

**Argumentos:**

- `Entity target` — The targeted entity to set the goal to.
- `Vector offset` = `Vector( 0, 0, 0 )` — The offset to apply to the targeted entity's position.

**Retorna:**

- `boolean` — Whether path generation was successful or not

---

### `NPC:NavSetRandomGoal` `[server]`

Creates a random path of specified minimum length between a closest start node and random node in the specified direction. This won't actually force the NPC to move.

**Argumentos:**

- `number minPathLength` — Minimum length of path in units
- `Vector dir` — Unit vector pointing in the direction of the target random node

**Retorna:**

- `boolean` — Whether path generation was successful or not

---

### `NPC:NavSetWanderGoal` `[server]`

Sets a goal in x, y offsets for the NPC to wander to

**Argumentos:**

- `number xOffset` — X offset
- `number yOffset` — Y offset

**Retorna:**

- `boolean` — Whether path generation was successful or not

---

### `NPC:PickupWeapon` `[server]`

Forces the NPC to pickup an existing weapon entity. The NPC will not pick up the weapon if they already own a weapon of given type, or if the NPC could not normally have this weapon in their inventory.

**Argumentos:**

- `Weapon wep` — The weapon to try to pick up.

**Retorna:**

- `boolean result` — Whether the NPC succeeded in picking up the weapon or not.

---

### `NPC:PlaySentence` `[server]`

Forces the NPC to play a sentence from scripts/sentences.txt

**Argumentos:**

- `string sentence` — The sentence string to speak.
- `number delay` — Delay in seconds until the sentence starts playing.
- `number volume` — The volume of the sentence, from 0 to 1.

**Retorna:**

- `number` — Returns the sentence index, -1 if the sentence couldn't be played.

---

### `NPC:RememberUnreachable` `[server]`

Makes the NPC remember an entity or an enemy as unreachable, for a specified amount of time. Use NPC:IsUnreachable to check if an entity is still unreachable.

**Argumentos:**

- `Entity ent` — The entity to mark as unreachable.
- `number time` = `3` — For how long to remember the entity as unreachable. Negative values will act as `3` seconds.

**Retorna:**

*(sin retorno)*

---

### `NPC:RemoveIgnoreConditions` `[server]`

Removes conditions to ignore for the this NPC.

**Argumentos:**

- `table conditions` = `nil` — Ignore conditions to remove, see Enums/COND. If omitted, removes all ignore conditions.

**Retorna:**

*(sin retorno)*

---

### `NPC:ResetIdealActivity` `[server]`

Resets the ideal activity of the NPC. See also NPC:SetIdealActivity.

**Argumentos:**

- `number act` — The new activity. See Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `NPC:ResetMoveCalc` `[server]`

Resets all the movement calculations.

Related functions are NPC:MoveStart, NPC:MovePause and NPC:MoveStop.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:RunEngineTask` `[server]`

Starts an engine task.

Used internally by the ai_task.

**Argumentos:**

- `number taskID` — The task ID, see [ai_task.h](https://github.com/ValveSoftware/source-sdk-2013/blob/55ed12f8d1eb6887d348be03aee5573d44177ffb/mp/src/game/server/ai_task.h#L89-L502)
- `number taskData` — The task data.

**Retorna:**

*(sin retorno)*

---

### `NPC:SelectWeapon` `[server]`

Forces the NPC to switch to a specific weapon the NPC owns. See NPC:GetWeapons.

**Argumentos:**

- `string|Weapon weapon` — A classname of the weapon or a Weapon entity to switch to.

**Retorna:**

*(sin retorno)*

---

### `NPC:SentenceStop` `[server]`

Stops any sounds (speech) the NPC is currently playing.

Equivalent to `Entity:EmitSound( "AI_BaseNPC.SentenceStop" )`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:SetActivity` `[server]`

Sets the NPC's current activity.

**Argumentos:**

- `number act` — The new activity to set, see Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetArrivalActivity` `[server]`

**Argumentos:**

- `number act` — See Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetArrivalDirection` `[server]`

Sets the direction from the NPC origin to its current navigational destination.

**Argumentos:**

- `Vector dir` — The new arrival direction.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetArrivalDistance` `[server]`

Sets the distance to goal at which the NPC should stop moving and continue to other business such as doing the rest of their tasks in a schedule.

**Argumentos:**

- `number dist` — The distance to goal that is close enough for the NPC

**Retorna:**

*(sin retorno)*

---

### `NPC:SetArrivalSequence` `[server]`

Sets the sequence to be played when the NPC arrives at its goal.

**Argumentos:**

- `number seq` — See Entity:LookupSequence.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetArrivalSpeed` `[server]`

Sets the arrival speed? of the NPC

**Argumentos:**

- `number speed` — The new arrival speed

**Retorna:**

*(sin retorno)*

---

### `NPC:SetCondition` `[server]`

Sets an NPC condition.

**Argumentos:**

- `number{COND} condition` — The condition index, see Enums/COND.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetCurrentWeaponProficiency` `[server]`

Sets the weapon proficiency of an NPC (how skilled an NPC is with its current weapon).

**Argumentos:**

- `number proficiency` — The proficiency for the NPC's current weapon. See Enums/WEAPON_PROFICIENCY.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetEnemy` `[server]`

Sets the target for an NPC.

**Argumentos:**

- `Entity enemy` — The enemy that the NPC should target
- `boolean newenemy` = `true` — Calls NPC:SetCondition(COND.NEW_ENEMY) if the new enemy is valid and not equal to the last enemy.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetExpression` `[server]`

Sets the NPC's .vcd expression. Similar to Entity:PlayScene except the scene is looped until it's interrupted by default NPC behavior or NPC:ClearExpression.

**Argumentos:**

- `string m_iszExpressionScene` — The expression filepath.

**Retorna:**

- `number flDuration` — Default duration of assigned expression, in seconds.

---

### `NPC:SetFOV` `[server]`

Sets the Field Of View of the NPC, for use with such functions as NPC:IsInViewCone. it is also used internally by the NPC for enemy detection, etc.

**Argumentos:**

- `number fov` — The new FOV for the NPC in degrees.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetForceCrouch` `[server]`

Forces given NPC to crouch, if it is able to do so. Only Citizens and Combine Soldiers can by default.

**Argumentos:**

- `boolean force` — Whether to force the NPC to crouch or not. `false` clears the "force crouch" flag, but does not guarantee to force the NPC to stand back up.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetHullSizeNormal` `[server]`

Updates the NPC's hull and physics hull in order to match its model scale. Entity:SetModelScale seems to take care of this regardless.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:SetHullType` `[server]`

Sets the hull type for the NPC.

**Argumentos:**

- `number hullType` — Hull type. See Enums/HULL

**Retorna:**

*(sin retorno)*

---

### `NPC:SetIdealActivity` `[server]`

Sets the ideal activity the NPC currently wants to achieve. This is most useful for custom SNPCs.

**Argumentos:**

- `number ` — The ideal activity to set. Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetIdealSequence` `[server]`

Sets the ideal sequence the NPC currently wants to achieve. This is most useful for custom SNPCs.

**Argumentos:**

- `number sequenceId` — The ideal sequence to set. Entity:LookupSequence.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetIdealYaw` `[server]`

Sets the ideal yaw angle (left-right rotation) for the NPC. Does not actually force the NPC to start turning in that direction. See NPC:UpdateYaw, NPC:GetIdealYaw and NPC:SetIdealYawAndUpdate.

**Argumentos:**

- `number angle` — The aim direction to set, the `yaw` component.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetIdealYawAndUpdate` `[server]`

Sets the ideal yaw angle (left-right rotation) for the NPC and forces them to turn to that angle.

**Argumentos:**

- `number angle` — The aim direction to set, the `yaw` component.
- `number speed` = `-1` — The turn speed. Special values are:
* `-1` - Calculate automatically
* `-2` - Keep the previous yaw speed

**Retorna:**

*(sin retorno)*

---

### `NPC:SetIgnoreConditions` `[server]`

Sets conditions to ignore, which would normally interrupt an Engine-based schedule. Specified conditions will still be set, will call ENTITY:OnCondition and can be returned by NPC:HasCondition, but they will no longer interrupt the Engine schedule.

**Argumentos:**

- `table conditions` — Conditions to ignore, see Enums/COND. The table must be sequential, numerical and values must correspond to condition enums.
- `number size` — Number of conditions to include in the ignored conditions table. Set this to the size of ignored conditions table to ignore all specified conditions.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetLastPosition` `[server]`

Sets the last registered or memorized position for this NPC. When using scheduling, the NPC will focus on navigating to the last position via nodes.

The navigation requires ground nodes to function properly, otherwise the NPC could only navigate in a small area. (https://developer.valvesoftware.com/wiki/Info_node)

**Argumentos:**

- `Vector position` — Where the NPC's last position will be set.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMaxLookDistance` `[server]`

Sets NPC's max view distance. An NPC will not be able to see enemies outside of this distance.

**Argumentos:**

- `number dist` — New maximum distance the NPC can see at. Default is 2048 and 6000 for long range NPCs such as the sniper.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMaxRouteRebuildTime` `[server]`

Sets how long to try rebuilding path before failing task.

**Argumentos:**

- `number time` — How long to try rebuilding path before failing task

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMoveDelay` `[server]`

Sets the movement delay for given NPC.

See NPC:GetMoveDelay.

**Argumentos:**

- `number delay` — The amount of time in seconds to delay movement by.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMoveInterval` `[server]`

Sets the timestep the internal NPC motor is working on.

**Argumentos:**

- `number time` — The new timestep.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMoveVelocity` `[server]`

Sets the move velocity of the NPC

**Argumentos:**

- `Vector vel` — The new movement velocity.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMoveYawLocked` `[server]`

Sets whether the current movement should locked on the Yaw axis or not.

**Argumentos:**

- `boolean lock` — Whether the movement should yaw locked or not.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMovementActivity` `[server]`

Sets the activity the NPC uses when it moves.

**Argumentos:**

- `number activity` — The movement activity, see Enums/ACT.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetMovementSequence` `[server]`

Sets the sequence the NPC navigation path uses for speed calculation. Doesn't seem to have any visible effect on NPC movement or actively playing sequence.

To be able to use this, first set NPC:SetIdealActivity to `ACT_DO_NOT_DISTURB`, set this to any sequence with root motion data and call Entity:SetSequence on your desired sequence. As long as your NPC's NPC:GetMovementSequence has root motion data, your NPC will move to navigation point even though your NPC's Entity:GetSequence doesn't have any motion.

**Argumentos:**

- `number sequenceId` — The movement sequence index

**Retorna:**

*(sin retorno)*

---

### `NPC:SetNPCState` `[server]`

Sets the state the NPC is in to help it decide on a ideal schedule.

**Argumentos:**

- `number state` — New NPC state, see Enums/NPC_STATE

**Retorna:**

*(sin retorno)*

---

### `NPC:SetNavType` `[server]`

Sets the navigation type of the NPC.

**Argumentos:**

- `number navtype` — The new nav type. See Enums/NAV.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetSchedule` `[server]`

Sets the NPC's current schedule.

**Argumentos:**

- `number schedule` — The NPC schedule, see Enums/SCHED.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetSquad` `[server]`

Assigns the NPC to a new squad. A squad can have up to 16 NPCs. NPCs in a single squad should be friendly to each other.

See also ai.GetSquadMembers and NPC:GetSquad.

NPCs within the same squad are meant to function more effectively, tactics wise.

**Argumentos:**

- `string name` = `nil` — The new squad name to set. Do not provide this argument to reset the squad.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetStepHeight` `[server]`

Sets the SNPC step height.

This only works for Scripted_Entities.

**Argumentos:**

- `number height` — The new step height. Default is 18 Hammer Units.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetTarget` `[server]`

Sets the NPC's target. This is used in some engine schedules.

**Argumentos:**

- `Entity entity` — The target of the NPC.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetTaskStatus` `[server]`

Sets the status of the current task.

**Argumentos:**

- `number status` — The status. See Enums/TASKSTATUS.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetUnforgettable` `[server]`

Sets given entity as an unforgettable enemy. The state can be retrieved via NPC:IsUnforgettable.

**Argumentos:**

- `Entity enemy` — The enemy entity to set.
- `boolean set` = `true` — The entity to set.

**Retorna:**

*(sin retorno)*

---

### `NPC:SetViewOffset` `[server]`

Sets the view offset of the NPC. Player alternative of Player:SetViewOffset.

This affects NPC's NPC:GetShootPos.

**Argumentos:**

- `Vector ` — The view offset to set.

**Retorna:**

*(sin retorno)*

---

### `NPC:StartEngineTask` `[server]`

Forces the NPC to start an engine task, this has different results for every NPC.

**Argumentos:**

- `number task` — The id of the task to start, see [ai_task.h](https://github.com/ValveSoftware/source-sdk-2013/blob/55ed12f8d1eb6887d348be03aee5573d44177ffb/mp/src/game/server/ai_task.h#L89-L502)
- `number taskData` — The task data as a float, not all tasks make use of it.

**Retorna:**

*(sin retorno)*

---

### `NPC:StopMoving` `[server]`

Resets the NPC's movement animation and velocity. Does not actually stop the NPC from moving.

**Argumentos:**

- `boolean immediate` = `true` — Whether to stop moving even when currently active goal doesn't want us to.

**Retorna:**

*(sin retorno)*

---

### `NPC:TargetOrder` `[server]`

Cancels NPC:MoveOrder basically.

Only works on Citizens (npc_citizen) and is a part of the Half-Life 2 squad system.

The NPC **must** be in the player's squad for this to work.

**Argumentos:**

- `Entity target` — Must be a player, does nothing otherwise.

**Retorna:**

*(sin retorno)*

---

### `NPC:TaskComplete` `[server]`

Marks the current NPC task as completed.

This is meant to be used alongside NPC:TaskFail to complete or fail custom Lua defined tasks. (Schedule:AddTask)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:TaskFail` `[server]`

Marks the current NPC task as failed.

This is meant to be used alongside NPC:TaskComplete to complete or fail custom Lua defined tasks. (Schedule:AddTask)

**Argumentos:**

- `string failReason` — Fail reason to be passed onto ENTITY:OnTaskFailed. The fail reason can also be seen when the NPC's `ent_text` is active.

**Retorna:**

*(sin retorno)*

---

### `NPC:UpdateEnemyMemory` `[server]`

Force the NPC to update information on the supplied enemy, as if it had line of sight to it.

**Argumentos:**

- `Entity enemy` — The enemy to update.
- `Vector pos` — The last known position of the enemy.

**Retorna:**

*(sin retorno)*

---

### `NPC:UpdateTurnActivity` `[server]`

Updates the turn activity. Basically applies the turn animations depending on the current turn yaw.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NPC:UpdateYaw` `[server]`

Forces the NPC to turn to their ideal yaw angle. See NPC:SetIdealYaw and NPC:SetIdealYawAndUpdate.

**Argumentos:**

- `number speed` = `-1` — The turn speed. Special values are:
* `-1` - Calculate automatically
* `-2` - Keep the previous yaw speed

**Retorna:**

*(sin retorno)*

---

### `NPC:UseActBusyBehavior` `[server]`

This function only works on `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If we succeeded setting the behavior.

---

### `NPC:UseAssaultBehavior` `[server]`

Enables the AI's [Assault Behavior](https://developer.valvesoftware.com/wiki/Assault "Assault Behavior") when an `ai_goal_assault` is set for this SENT.
This function only works on `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the action succeeded.

---

### `NPC:UseFollowBehavior` `[server]`

This function only works on `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If we succeeded setting the behavior.

---

### `NPC:UseFuncTankBehavior` `[server]`

Orders the SNPC to control any nearby `func_tank`s looking for an NPC to operate itself, if available.
This function only works on `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the action succeeded.

---

### `NPC:UseLeadBehavior` `[server]`

Enables the AI's [Lead Behavior](https://developer.valvesoftware.com/wiki/ai_goal_lead "Lead Behavior") when an `ai_goal_lead` is set for this SENT.
This function only works on `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the action succeeded.

---

### `NPC:UseNoBehavior` `[server]`

Undoes the other `Use*Behavior` functions.

This function only works on `ai` type [SENTs](Scripted_Entities).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*