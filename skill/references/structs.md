# Structs


---

## `AmmoData` `[client/server]`

---

Table structure that describes a Source Engine ammo type.

See game.AddAmmoType and game.GetAmmoData.

---

- `number{DMG} dmgtype` (default `DMG_BULLET`) — Damage type using Enums/DMG.

Related function is game.GetAmmoDamageType.

---

- `number force` (default `1000`) — The force of the ammo.

Related function is game.GetAmmoForce.

---

- `number maxsplash` (default `0`) — The maximum water splash size.

---

- `number minsplash` (default `0`) — The minimum water splash size.

---

- `string name` — Name of the ammo.

Related functions are game.GetAmmoName and game.GetAmmoID.

---

- `number npcdmg` (default `10`) — The damage dealt to NPCs.

Related function is game.GetAmmoNPCDamage.

Can also be a string with the name of a convar. The value will automatically update with the convar's.

---

- `number plydmg` (default `10`) — The damage dealt to players.

Related function is game.GetAmmoPlayerDamage.

Can also be a string with the name of a convar. The value will automatically update with the convar's.

---

- `number{TRACER} tracer` (default `TRACER_NONE`) — Tracer type using Enums/TRACER.

---

- `number maxcarry` (default `9999`) — Maximum amount of ammo of this type the player should be able to carry in reserve. `-2` makes this ammo type infinite.

Related function is game.GetAmmoMax.

Can also be a string with the name of a convar. The value will automatically update with the convar's.
`gmod_maxammo` convar will override this value if set to above 0, **which it is by default**.

---

- `number{AMMO} flags` (default `0`) — Flags for the ammo type using Enums/AMMO.

---

## `AngPos` `[client/server]`

---

Table used by various functions, such as Entity:GetAttachment.

---

- `Angle Ang` — An Angle object.

---

- `Vector Pos` — An Vector object.

---

- `number Bone` — The bone ID the attachment point is parented to.

---

## `AnimationData` `[client]`

---

Table used by panel animation methods, primarily Panel:AnimationThinkInternal, and returned by Panel:NewAnimation.

---

- `number StartTime` — The system time value returned by Global.SysTime when the animation starts/will start.

---

- `number EndTime` — The system time value returned by Global.SysTime when the animation ends/will end.

---

- `number Ease` (default `-1`) — The ease in/out level of the animation.

---

- `function OnEnd` — The callback function that will be called upon completion of the animation.

This structure.
The panel the animation was run on.

---

- `function Think` — The `think` function called every frame that will animate the panel object. This varies based on the animation. You can create a custom function for this if you aren't using the stock panel methods.

This structure.
The panel the animation is being run on.

The progress fraction of the animation, between 0 and 1. The change rate of this number will not be linear if you are easing.

---

- `Vector Pos` — The target position, or target translation of the panel object. Used by Panel:MoveTo and Panel:MoveBy respectively.

---

- `Vector StartPos` — The position of the panel object when the animation started. Used by Panel:MoveTo and Panel:MoveBy.

---

- `boolean SizeX` — Whether to resize the panel horizontally or not. Only used by Panel:SizeTo.

---

- `boolean SizeY` — Whether to resize the panel vertically or not. Only used by Panel:SizeTo.

---

- `Vector Size` (default `(0, 0, 0)`) — The target size of the panel object. Only used by Panel:SizeTo.

---

- `Vector StartSize` — The size of the panel object when the animation started. Only used by Panel:SizeTo.

---

- `Color Color` — The target colour of the panel object. Only used by Panel:ColorTo.

---

- `Color StartColor` — The colour of the panel object when the animation started. Only used by Panel:ColorTo.

---

- `number Alpha` — The target alpha (0-255) of the panel object. Only used by Panel:AlphaTo.

---

- `number StartAlpha` — The alpha (0-255) of the panel object when the animation started. Only used by Panel:AlphaTo.

---

- `number Speed` — The speed to use for transitions when using linear interpolation (Lerp) animations. Only used by Panel:LerpPositions.

---

- `boolean UseGravity` — Whether or not to use easing to make the panel 'jump' at its target, slowing as it approaches. Only used by Panel:LerpPositions.

---

## `AttachmentData` `[client/server]`

---

Table returned by Entity:GetAttachments.

---

- `number id` — Index of the attachment.

---

- `string name` — Name of the attachment.

---

## `BalloonData` `[server]`

---

Table structure used as balloon spawn data. Default values are applied when the trace hits nothing. This data is required for correctly spawning the balloon.

See MakeBalloon.

---

- `Vector Pos` (default `Vector(0, 0, 0)`) — Where the balloon will spawn.

---

- `string Model` (default `models/error.mdl`) — The balloon’s model.

---

- `number Skin` (default `0`) — The balloon’s skin.

---

## `BodyGroupData` `[client/server]`

---

The tables that make up the values of the table returned by Entity:GetBodyGroups.

---

- `number id` — The Body Group's ID.
Body Group IDs start at `0`.

---

- `string name` — The name of the Body Group.

---

- `number num` — The number of Sub Models in this Body Group, and the length of the `submodels` table.

---

- `table<string> submodels` — A table of the names of the Sub Models within this Body Group.
Sub Model IDs start at `0`.

---

## `BoneBindPose` `[client/server]`

---

A table structure representing a single bone's orientation when its mesh is in its baseline (or "bind") pose before any animation is played.

This structure does not contain the bone ID for the bone it represents and instead relies on the structure's index within the table returned by util.GetModelMeshes to identify the bone it corresponds to.

---

- `number parent` — The bone ID of this bone's parent bone.

---

- `VMatrix matrix` — A VMatrix containing this bone's position and rotation in local space relative to the model's origin.

---

## `BoneManipulationData` `[client/server]`

---

Structure used for storing/restoring bone manipulations.
Data is stored from Entity:GetManipulateBoneScale, Entity:GetManipulateBoneAngles, and Entity:GetManipulateBonePosition.
Data is restored using Entity:ManipulateBoneScale, Entity:ManipulateBoneAngles, and Entity:ManipulateBonePosition.

The function duplicator.DoBoneManipulator and Structures/EntityCopyData use a table
containing a BoneManipulationData structure for each bone (that has manipulations applied) with the bone ID as the struct index in the table.

Fields **s**, **a**, and **p** are set if they don't equal **Vector( 1, 1, 1 )**, **Angle( 0, 0, 0 )**, and **Vector( 0, 0, 0 )** respectively.

---

- `Vector s` (default `nil`) — The entity's scale manipulation of the bone.

---

- `Angle a` (default `nil`) — The entity's angle manipulation of the bone.

---

- `Vector p` (default `nil`) — The entity's position manipulation of the given bone.

---

## `BoneWeight` `[client/server]`

---

A table structure representing the amount that a bone's transformation VMatrix should affect its vertex.

A single vertex may have multiple BoneWeight structures affecting it, but each BoneWeight structure belongs to only one vertex.

Added to the Structures/MeshVertex by util.GetModelMeshes.

To find a bone's transformation VMatrix, see Entity:GetBoneMatrix.

---

- `number bone` — The ID of the bone affecting the vertex.

---

- `number weight` — A percentage between `0` and `1` indicating how much influence this bone's VMatrix should have on the the vertex.

---

## `Bullet` `[client/server]`

---

Tables used for bullets see Entity:FireBullets and GM:EntityFireBullets.

---

- `Entity Attacker` (default `self`) — The entity that should be reported as attacker. (eg. a player)

By default this would be set to the entity Entity:FireBullets is called on.

---

- `Entity Inflictor` (default `NULL`) — The entity that should be reported as inflictor eg. a weapon or something similar.

Also defines CTakeDamageInfo:GetWeapon for Weapon.

---

- `function Callback` (default `nil`) — Function to be called **after** the bullet was fired but **before** the damage is applied (the callback is called even if no damage is applied).

See Structures/TraceResult

The return value can be a table with following keys:
* boolean effects - `false` to not do any of the effects.
* boolean damage - `false` to not do any damage.

---

- `number Damage` (default `1`) — The damage dealt by the bullet.

If set to `0`, it means the damage should be calculated from the ammo type's ConVars if  the ammo type has `AMMO_INTERPRET_PLRDAMAGE_AS_DAMAGE_TO_PLAYER` flag set.
See Structures/AmmoData.

---

- `number Force` (default `1`) — The force of the bullets.

---

- `number Distance` (default `56756`) — Maximum distance the bullet can travel.

---

- `number HullSize` (default `0`) — The hull size of the bullet

---

- `number Num` (default `1`) — The amount of bullets to fire.

---

- `number Tracer` (default `1`) — Show tracer for every x bullets.

---

- `string AmmoType` (default `<empty string>`) — The ammunition name.

---

- `string TracerName` (default `nil`) — The tracer name. You can find a list of default effects Default_Effects.

---

- `Vector Dir` (default `Vector( 0, 0, 0 )`) — The fire direction.

---

- `Vector Spread` (default `Vector( 0, 0, 0 )`) — The spread, only x and y are needed.

---

- `Vector Src` (default `Vector( 0, 0, 0 )`) — The position to fire the bullets from.

---

- `Entity IgnoreEntity` (default `NULL`) — The entity that the bullet will ignore when it will be shot.

---

## `CamData` `[client]`

---

Table structure used GM:CalcView and GM:CalcVehicleView hook.

---

- `Vector origin` — The camera's position.

---

- `Angle angles` — The camera's angles.

---

- `number fov` — The camera's FOV.

---

- `number znear` — Distance to near clipping plane.

---

- `number zfar` — Distance to far clipping plane.

---

- `boolean drawviewer` (default `false`) — Set true to draw local players player model.

---

- `table ortho` (default `nil`) — If set, enables orthographic mode. The table has following arguments:
* number left.
* number right.
* number top.
* number bottom.

Each describes where their border starts, (`left`+`right`) and (`top`+`bottom`) should equal `0` to center on the view position.

---

## `CollisionData` `[client/server]`

---

Passed as argument of ENTITY:PhysicsCollide, EFFECT:PhysicsCollide and used with Entity:AddCallback.

Sometimes, the value of `Speed` can be different from getting the length calculated from `OurOldVelocity`, even though they should be the same, or close to same. It's recommended to do `OurOldVelocity:Length()` instead.

```
function ENT:PhysicsCollide( colData, collider )
-- you may get two completely different values, and the second one should be more accurate.
print(colData.Speed)
print(colData.OurOldVelocity:Length())
end
```

---

- `Vector HitPos` — The collision position.

---

- `Entity HitEntity` — The other collision entity.

---

- `Vector OurOldVelocity` — The entity's velocity before the collision.

---

- `PhysObj HitObject` — Other entity's physics object.

---

- `number DeltaTime` — Time since the last collision with the `HitEntity`.

---

- `Vector TheirOldVelocity` — Speed of the other entity before the collision.

---

- `number Speed` — The speed of the entity before the collision.

---

- `Vector HitNormal` — Normal of the surface that hit the other entity.

---

- `PhysObj PhysObject` — Entity's physics object.

---

- `number OurSurfaceProps` — Surface Property ID of `this` entity.

---

- `number TheirSurfaceProps` — Surface Property ID of the entity we collided with.

---

- `Vector HitSpeed` — The speed at which the impact happened.

---

- `Vector OurNewVelocity` — Our new velocity after the impact.

---

- `Vector TheirNewVelocity` — The new velocity after the impact of the entity we collided with.

---

- `Vector OurOldAngularVelocity` — Old angular velocity of this entity.

---

- `Vector TheirOldAngularVelocity` — Old angular velocity of the entity we collided with.

---

## `Color` `[client/server]`

---

Table created by the Global.Color function and used in various situations.

---

- `number r` — The red channel.

---

- `number g` — The green channel.

---

- `number b` — The blue channel.

---

- `number a` — The alpha channel.

---

## `CreationMenus` `[client]`

---

Table that maintains information on the creation menu tabs. Each key of the table represents the name of the tab. See spawnmenu.AddCreationTab and spawnmenu.GetCreationTabs.

---

- `function Function` — The function used to generate the content of the tab.

A container panel that holds all of the content for the new tab.

---

- `string Icon` — The icon material that will accompany the title of the tab.

---

- `number Order` — The order in which a tab will be displayed relative to the other tabs.

---

- `string Tooltip` — The tooltip to be shown with the tab.

---

## `DateData` `[client/menu/server]`

---

Table returned by os.date and used by os.time.

---

- `number day` — Day of the month

---

- `number hour` — Hour

---

- `boolean isdst` — Daylight saving enabled

---

- `number min` — Minute

---

- `number month` — Month
January: 1, December: 12

---

- `number sec` — Second

---

- `number wday` — Day of the week
Sunday: 1, Saturday: 7

---

- `number yday` — Day of the year

---

- `number year` — Year

---

## `DebugInfo` `[client/menu/server]`

---

Table returned by debug.getinfo.

If a filter is applied to debug.getinfo, some members may not exist!

For functions defined in C/C++, the following members will always have the given values:
* what = "C"
* source = "[C]"
* nparams = 0
* isvararg = true
* namewhat = ""
* short_src = "[C]"
* linedefined = -1
* currentline = -1
* lastlinedefined = -1

---

- `function func` — Reference to the function that was passed in. If a stack level was specified, this will be the function at that stack level. 0 = debug.getinfo, 1 = function that called debug.getinfo, etc.

**Option: f**

---

- `number linedefined` — The line where the function definiton starts (where "function" is located).

**Option: S**

---

- `number lastlinedefined` — The line the function definition ended (where "end" is located).

**Option: S**

---

- `string source` — The path to the file where the passed function is defined prepended by an @ (ex. "@lua/autorun/mytestfile.lua"). This will be the Global.CompileString or Global.RunString identifier if the function wasn't defined in a file, also prepended by an @.

**Option: S**

---

- `string short_src` — The shortened name of the source (without the @). May be truncated if the source path is long.

**Option: S**

---

- `string what` — The language used. Either "Lua" or "C".

**Option: S**

---

- `number currentline` — The current line. This will be -1 if the code is not executed from a file.

**Option: l** (lowercase L)

---

- `string name` — The function name. This will be nil if the name cannot be found. Only works if stack level is passed rather than function pointer.

**Option: n**

---

- `string namewhat` — The function "type". This will be "global", "local", "method", "field". Can also be an empty string if the function name could not be found. Only works if stack level is passed rather than function pointer.

**Option: n**

---

- `boolean isvararg` — Whether the function is variadic (has a `...` argument).

**Option: u**

---

- `number nparams` — The number of arguments the function uses excluding varargs.

**Option: u**

---

- `number nups` — Upvalue count. Max index that can be used with debug.getupvalue. C functions can have upvalues but they cannot be accessed from Lua.

**Option: u**

---

- `table activelines` — A table of all the active lines in the function - that is, lines with code that actually does something (not blank lines or lines with comments only).

The table keys will be line numbers, and their values will all be true. Lines that are inactive are simply not included in the table - they have the value nil.

It doesn't check for activeline in subfunctions.

**Option: L**

---

## `DynamicLight` `[client]`

---

Structure for Global.DynamicLight.
All members are case insensitive.

This is an actual class named **dlight_t**, not a table.

---

- `number brightness` — The brightness of the light.

---

- `number decay` — Fade out speed.
Here's a formula for calculating Decay for your light: 1000 / fadeOutTimeInSeconds. For example setting decay to 1000 would fade out the light in 1 second, 2000 - 0.5 seconds.

---

- `number dietime` — Time after which light will be removed.

This is relative to Global.CurTime. If you put in a value that is less than or equal to Global.CurTime, the light will not behave properly.

Note, that it does not affect fading out. Light will be removed regardless of it being fully faded out or not.

---

- `Vector dir` (default `Vector( 0, 0, 0 )`) — The light direction. Used with **InnerAngle** and **OuterAngle**.

---

- `number innerangle` (default `0`) — The closer this is to zero, the smoother the light will be. Requires **Dir** and **OuterAngle** to be set.

---

- `number outerangle` (default `0`) — The angle of the Dynamic Light. Requires **Dir** to be set.

---

- `number key` — The entity index the light belongs to. Set automatically by Global.DynamicLight. Probably don't touch it.

---

- `number minlight` (default `0`) — Minimum light

---

- `boolean noworld` (default `false`) — Don't light the world. Has no effect for elights since they never light the world.

---

- `boolean nomodel` (default `false`) — Don't light models

---

- `Vector pos` — Position of the light

---

- `number size` — Radius of the light

---

- `number style` — Flicker style, see [this page](https://developer.valvesoftware.com/wiki/Light_dynamic#Appearances) for examples.

---

- `number b` — The blue part of the color

---

- `number g` — The green part of the color

---

- `number r` — The red part of the color

---

## `EmitSoundInfo` `[client/server]`

---

Passed as argument of GM:EntityEmitSound.

---

- `string SoundName` — The file path of the played sound.

Sounds prefixed with ) tell the sound engine that it is a spatial sound; this allows the sound to emit from a specific location within the world.

Sounds prefixed with ^ tell the sound engine that it is a distance based sound. The left channel of the .wav is the 'near' sound that will play when the sound originates close to you, and the right channel is the 'far' sound that will play when the sound originates far from you.

---

- `string OriginalSoundName` — The original file path or soundscript name.

Even if the SoundName value is changed, the OriginalSoundName value will remain the same.

Sounds may be returned as soundscripts (for example, "Weapon_357.Single") instead of the sound's file path. You can use sound.GetProperties to retrieve the actual file path.

---

- `number SoundTime` (default `0`) — The time at which the sound should be played.

If equal to 0 or CurTime(), the sound is played immediately. If greater than CurTime(), the sound is played with a delay. If less than CurTime(), part of the sound is skipped.

---

- `number DSP` (default `0`) — The DSP (digital signal processing) preset applied to the sound.

There are approximately 134 different presets defined by the Source engine between 0 and 133. These presets represent different types of 'rooms' or environments.

DSP_Presets

---

- `number{SNDLVL} SoundLevel` (default `75`) — The sound's attenuation, a number between 0 (low) and 511 (high)

This determines how fast the sound drops away. A higher value means the sound can be heard farther away.

See Enums/SNDLVL.

---

- `number Pitch` (default `100`) — The pitch of the played sound, a number between 0 (low) and 255 (high), where 100 is the sound's original pitch.

---

- `number{SND} Flags` (default `0`) — The bit flags of the played sound. See Enums/SND for available options.

---

- `number{CHAN} Channel` — The sound's channel. See Enums/CHAN for available options.

---

- `number Volume` — The volume of the played sound, return as a decimal number between 0 (low) and 1 (high).

---

- `Entity Entity` — The entity that played the sound.

---

- `Vector Pos` — The origin of the played sound.

---

## `ENT` `[client/server]`

---

Information about the ENT structure, which represents a Scripted Entity class definition.

To learn more about scripted entities, Scripted_Entities.

See also ENTITY Hooks for a list of events scripted entities can have. See Custom Entity Fields for a list of events and fields all entities can have.

While some of the fields may be serverside or clientside only, it is recommended to provide them on both so addons could use their values.

Values defined in ENT table can't be changed per instance. Initialize default values in ENTITY:Initialize or other hook.

---

- `string Base` — The base entity to derive from. This **must** be a valid Lua entity

---

- `string Type` — Type of the entity. This **must** be one of these:
* **anim**
* **brush**
* **point**
* **ai**
* **nextbot**
* **filter**

See Scripted Entities for a more detailed explanation of what each one is.

---

- `string ClassName` — The class name of the entity (File or folder name of your entity).
**This is set automatically _after_ the entity file is loaded.**

---

- `string ClassNameOverride` — If set, overrides the classname of the SWEP.

---

- `string Folder` — The folder from where the entity was loaded. This should always be "entity/ent_myentity", regardless whether your entity is stored as a file, or multiple files in a folder. **This is set automatically _before_ the entity file is loaded.**

---

- `boolean AutomaticFrameAdvance` (default `false`) — Set this to true if your entity has animations. You should also apply changes to the ENTITY:Think function from the example on that page.

---

- `string Category` (default `Other`) — Spawnmenu category to put the entity into

---

- `boolean Spawnable` (default `false`) — Whether this entity should be displayed and is spawnable in the spawn menu

---

- `boolean Editable` (default `false`) — Whether the entity supports Editing. See Editable Entities for more info.

---

- `boolean AdminOnly` (default `false`) — Whether or not only admins can spawn the entity from their spawn menu

---

- `string PrintName` — Nice name of the entity to appear in the spawn menu

---

- `string Author` — The author of the entity

---

- `string Contact` — The contacts of the entity creator

---

- `string Purpose` — The purpose of the entity creation

---

- `string Instructions` — How to use your entity

---

- `number RenderGroup` — The entity's render group, see Enums/RENDERGROUP. If unset, the engine will decide the render group based on the entity's model.

---

- `boolean WantsTranslucency` (default `false`) — If set and `RenderGroup` is not, will switch the render group to Enums/RENDERGROUP#RENDERGROUP_BOTH when appropriate.

Basically, when the default render group of the entity's model is opaque, ENTITY:DrawTranslucent will still be called, for example to render effects and such. This is preferable to forcing translucent models to render in the opaque pass by setting `RenderGroup` to `RENDERGROUP_BOTH` at all times, causing graphical issues.

---

- `boolean DisableDuplicator` (default `false`) — Disable the ability for players to duplicate this entity.

---

- `string ScriptedEntityType` — Sets the spawnmenu content icon type for the entity, used by spawnmenu in the Sandbox-derived gamemodes.
See spawnmenu.AddContentType for more information.

---

- `string IconOverride` (default `entities/<ClassName>.png`) — If set, overrides the icon path to be displayed in the Spawnmenu for this entity.

Like many functions, this expects a path relative to the `materials/` folder, do not include `materials/` in the provided string.

---

- `number PhysicsSolidMask` (default `nil`) — If set, a bitflag for the physics solidity of the entity. See Enums/CONTENTS.

Can be used to make the entity pass though certain otherwise solid meshes, such as grates, or special clip brushes.

This only works for `nextbot`, `anim` and `ai` type SENTs.

---

- `boolean PhysicsSounds` (default `false`) — For `anim` type entities, if set, enables physics collision sounds.

---

## `EntityCopyData` `[server]`

---

Data structure used by the duplicator to store and load entity data.

It is created by duplicator.CopyEntTable and can be loaded by duplicator.CreateEntityFromTable.

It also shows up in several other contexts:
* duplicator.RegisterEntityClass
* ENTITY:OnEntityCopyTableFinish
* ENTITY:OnDuplicated

In addition to all fields listed here, any field saved on the entity will be saved as-is to this table. For example, if you set `ent.FavoriteFood = "Steak"` before duplicating it, this structure will also contain the field `FavoriteFood` with the value `"Steak"`.

---

- `string Name` — The entity's name, see Entity:GetName.

---

- `string Class` — The entity's class name, see Entity:GetClass.

---

- `Vector Pos` — The entity's position, relative to the duplication origin point.

---

- `Angle Angle` — The entity's angle, relative to the duplication angle.

---

- `table DT` — The entity's Network Vars, see ENTITY:SetupDataTables and Networking Entities.

---

- `string Model` — The entity's model, see Entity:GetModel.

---

- `number ModelScale` — The entity's model scale, see Entity:GetModelScale. This will only be present if the model scale isn't 1.

---

- `number Skin` — The entity's active skin, see Entity:GetSkin.

---

- `number ColGroup` — The entity's collision group, see Entity:GetCollisionGroup. Uses the Enums/COLLISION_GROUP.

---

- `Vector Mins` — The entity's collision bound minimums, see Entity:GetCollisionBounds.

---

- `Vector Maxs` — The entity's collision bound maximums, see Entity:GetCollisionBounds.

---

- `table PhysicsObjects` — Data about the entity's PhysObjs, see Entity:GetPhysicsObjectNum. The key is the physics object index (starts from 0), and the value is a Structures/PhysicsObjectSave. Unlike other tables in this structure, if there are no physics objects for this entity this will be an empty table.

---

- `number FlexScale` — The entity's Flex Scale, see Entity:GetFlexScale.

---

- `table Flex` — Each flex bone's flex weight, see Entity:GetFlexWeight. The key is the flex's index and the value is the weight. Only flexes with a non-default (nonzero) weight are listed, and if none exist, this field will be nil.

---

- `table BodyG` — The entity's body groups, see Entity:GetBodygroup. The key is the bodygroup ID and the value is the assigned bodygroup number. Only body groups with a non-default (&gt; 0) value are listed, and if none exist, this field will be nil.

---

- `table BoneManip` — Bone manipulation data, see Entity:HasBoneManipulations. The key is the bone index and the value is a Structures/BoneManipulationData. Only bones that have been manipulated with non-default values are listed, and if none exist, this field will be nil.

---

- `number MapCreationID` — The entity's MapCreationID, only exists for entities that were created by the map. See Entity:MapCreationID.

---

- `number WorkshopID` — Deprecated, always 0. See Entity:GetWorkshopID.

---

## `FiredBullet` `[client/server]`

---

The table structure used for bullets that have already been fired.

See GM:PostEntityFireBullets for more information.

---

- `string AmmoType` (default `<Empty String>`) — The type of ammo that was fired.

Should be one of the values from the game.GetAmmoTypes table.

---

- `Entity Attacker` — The Entity that fired the bullet.

This is usually the Player that is holding the Weapon.

---

- `number Damage` — The amount of damage dealt by the bullet.

When set to `0`, damage should be determined based on the values set in the Structures/AmmoData of the bullet's Ammo Type.

---

- `number Force` — The physics impact force of the bullet.

---

- `number Tracer` — A whole integer number that controls the frequency of visible bullet tracers.

A tracer will be fired once after this many non-tracer bullets have been fired.

Set to `1` to always fire a tracer.

---

- `table{TraceResult} Trace` — The Structures/TraceResult from the util.TraceLine that determined where and what the bullet hit.

---

## `FontData` `[client/menu]`

---

Used for surface.CreateFont.

---

- `string font` (default `Arial`) — The font source. Custom font files are stored in `resource/fonts/`.

The length is limited to 31 characters maximum.

This must be the actual 'nice' font, not a file name. Unless the client is running Linux or macOS. (Finding the Font Name)

This also cannot be an already registered font, i.e. you cannot base your font from any of the Default_Fonts

---

- `boolean extended` (default `false`) — Allow the font to display glyphs that are outside of the Latin-1 range. Unicode code points above 0xFFFF are not supported.
This currently has no effect on Linux, the value is capped at just 0xFF on the Linux client

---

- `number size` (default `13`) — The font height in pixels

`Range:` 4 - 255

---

- `number weight` (default `500`) — The font boldness

---

- `number blursize` (default `0`) — The strength of the font blurring

`Range:` 0 - 80

---

- `number scanlines` (default `0`) — The "scanline" interval
Must be &gt; 1 to work. This setting is per blursize per font - so if you create a font using "Arial" without scanlines, you cannot create an Arial font using scanlines with the same blursize

---

- `boolean antialias` (default `true`) — Smooth the font

---

- `boolean underline` (default `false`) — Add an underline to the font

---

- `boolean italic` (default `false`) — Make the font italic

---

- `boolean strikeout` (default `false`) — Add a strike through

---

- `boolean symbol` (default `false`) — Enables the use of symbolic fonts such as Webdings

---

- `boolean rotary` (default `false`) — Seems to add a line in the middle of each letter

---

- `boolean shadow` (default `false`) — Add shadow casting to the font

---

- `boolean additive` (default `false`) — Additive rendering

---

- `boolean outline` (default `false`) — Add a black outline to the font.

This does not work well with antialias, and only allows black 1-pixel outlines. It may be preferable to not use this parameter, and instead use draw.SimpleTextOutlined when drawing text that you want outlined.

---

## `FormattedTime` `[client/menu/server]`

---

Table created by the string.FormattedTime function if no format is given to it.

---

- `number ms` — milliseconds

---

- `number s` — seconds

---

- `number m` — minutes

---

- `number h` — hours

---

## `GM` `[client/server]`

---

Information about a gamemode.

While some of the fields may be serverside or clientside only, it is recommended to provide them on both so addons could use their values.

---

- `string Name` — The fancy name of your gamemode.

---

- `string Author` — The name/contact info of the gamemode author.

---

- `string Email` — The contact email associated with the gamemode.

---

- `string Website` — The website associated with the gamemode.

---

- `string FolderName` — The name of the gamemode folder, automatically set.

---

- `string Folder` — The name of the gamemode folder prepended with "gamemodes/" (such as "gamemodes/sandbox"), automatically set.

---

- `boolean TeamBased` — Set this to true if your gamemode is team-based. Used to enable/disable the base gamemode team system.

---

- `string ThisClass` — The name of the gamemode folder prepended with "gamemode_" (such as "gamemode_sandbox"), automatically set.

---

- `table BaseClass` — The table of the base gamemode to derive from, set automatically by Global.DeriveGamemode.

It is recommended to use Global.DEFINE_BASECLASS when referencing the gamemode's BaseClass to prevent unintended behavior

Global.DeriveGamemode modifies the main gamemode's BaseClass, which is shared with parent gamemodes. Because of this, in parent gamemodes the BaseClass can be incorrect, so for instance you need to use `self.BaseClass.BaseClass` in the 1st parent instead

---

- `boolean IsSandboxDerived` — Whether the gamemode is Sandbox, or derived from Sandbox. This is not really part of the `GM` structure, and listed here only for convenience.

---

## `HTTPRequest` `[client/menu/server]`

---

Table used by Global.HTTP function.

---

- `function failed` — Function to be called on failure.

Reason for the failure.

---

- `function success` — Function to be called on success.

The HTTP result code
The document data, usually HTML or JSON contents.
List of headers the server provided.

---

- `string method` (default `GET`) — Request method, case insensitive. Possible values are:
* GET
* POST
* HEAD
* PUT
* DELETE
* PATCH
* OPTIONS

---

- `string url` — The target url

---

- `table parameters` — KeyValue table for [URL parameters](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). This is only applicable to the following request methods:
* GET
* POST (sent in body, so if `body` is set, parameters are ignored)
* HEAD

---

- `table headers` — KeyValue table for headers

---

- `string body` — Body string for POST data. If set, will override parameters

---

- `string type` (default `text/plain; charset=utf-8`) — Content type for body.

---

- `number timeout` (default `60`) — The timeout for the connection.

---

## `HullTrace` `[client/server]`

---

Table used by util.TraceHull.

---

- `Vector start` — The start position of the trace

---

- `Vector endpos` — The end position of the trace

---

- `Vector maxs` — The 3D vector local to the start/endpos with the highest values. This will represent the corner with the upper bounds of the box.

---

- `Vector mins` — The 3D vector local to the start/endpos with the lowest (often negative) values. This will represent the corner with the lower bounds of the box.

---

- `Entity|table<Entity>|table<string>|function filter` (default `nil`) — Things the trace should not hit. Can be an entity, a table of entities, a table of entity classes or a function:

The entity that the trace hit
Return `true` to hit the entity, `false` to skip it.

Using a function here is super slow. Try to avoid it.

---

- `number{MASK} mask` (default `MASK_SOLID`) — The trace mask Enums/MASK. This determines what the trace should hit and what it shouldn't hit.

---

- `number{COLLISION_GROUP} collisiongroup` (default `COLLISION_GROUP_NONE`) — The collision group Enums/COLLISION_GROUP. This determines what the trace should hit in regards to the entity's collision group.

---

- `boolean ignoreworld` (default `false`) — Should the trace ignore world or not.

---

- `table{TraceResult} output` (default `nil`) — If set, the trace result will be written to the supplied table instead of returning a new table

---

- `boolean whitelist` (default `false`) — Turns the `filter` field into a whitelist, if it is a table.

---

- `boolean hitclientonly` (default `false`) — Enables traces to hit clientside only entities. Keep in mind that most naturally spawned entities are classified as debris, so extra `mask` values might be required.

---

## `LocalLight` `[client]`

---

Table structure used for render.SetLocalModelLights.

---

- `number{MATERIAL_LIGHT} type` (default `MATERIAL_LIGHT_POINT`) — The type of the light source, see Enums/MATERIAL_LIGHT.

---

- `Vector color` (default `vector_origin`) — The color of the light source (x is red, y is green, z is blue). Values are not restricted to a specific range, higher values will result in a brighter light.

---

- `Vector pos` (default `vector_origin`) — The origin of the light in world coordinates.

---

- `Vector dir` (default `vector_origin`) — The direction of the light. Only required for directional and spot lights.

---

- `number range` (default `0`) — The maximum range of the light source. Does not actually control light attenuation. Usually left at 0 for infinite range.

---

- `number angularFalloff` (default `5`) — Angular falloff exponent for spot lights. Higher values result in a sharper transition between the inner cone and the outer cone.

---

- `number innerAngle` (default `45`) — The inner cone angle for spot lights, in degrees. No angular falloff will occur inside that cone.

---

- `number outerAngle` (default `45`) — The outer cone angle for spot lights, in degrees.

---

- `number fiftyPercentDistance` — The distance at which the light will fade to 50% of its brightness.

---

- `number zeroPercentDistance` — The distance at which the light will completely fade out.

---

- `number quadraticFalloff` (default `0`) — The quadratic term of the light falloff. This will only be used if fiftyPercentDistance and zeroPercentDistance are not supplied, and allows finer control over light attenuation.

---

- `number linearFalloff` (default `0`) — The linear term of the light falloff. This will only be used if fiftyPercentDistance and zeroPercentDistance are not supplied, and allows finer control over light attenuation.

---

- `number constantFalloff` (default `1`) — The constant term of the light falloff. This will only be used if fiftyPercentDistance and zeroPercentDistance are not supplied, and allows finer control over light attenuation.

---

## `MatProxyData` `[client]`

---

Table structure used by matproxy.Add.

---

- `string name` — The name of the material proxy

---

- `function init` — The function used to get variables from the ".vmt". Called once per each ".vmt".

The table structure itself
The material name
The material key values

---

- `function bind` — The function used to apply the proxy. This is called every frame while any materials with this proxy are used in world.

The table structure itself.
The material name.
The entity the material instance is applied to, if any.

---

## `MeshVertex` `[client/server]`

---

A table structure representing the data stored by a single vertex of a mesh.

MeshVertex structures are usually grouped together in sets of 3 to define the corners of a triangle.

Not all MeshVertex will contain all fields and not all fields are used by all shaders

Information on the fields used by most Source Engine shaders (Like `VertexLitGeneric`, `UnlitGeneric`, etc.) can be found [on the Valve Developer Wiki here.](https://developer.valvesoftware.com/wiki/Category:Shaders)

Returned by:
* util.GetModelMeshes
* PhysObj:GetMesh

Used by:
* IMesh:BuildFromTriangles
* Entity:PhysicsFromMesh (only uses `pos` field)

---

- `Color color` — The Color that the area around this corner of a triangle should be tinted.

---

- `Vector normal` — A normalized Vector representing a direction facing away from (perpendicular to) the surface of the triangle that this vertex is a part of.

Many shaders use this to calculate lighting.

---

- `Vector tangent` — A normalized Vector representing a direction facing along (parallel with) the surface of the triangle that this vertex is a part of.

---

- `Vector binormal` — A normalized Vector representing a direction facing away from (perpendicular to) both the vertex's normal and tangent directions.

This is the result of a Vector:Cross between the vertex's normal and tangent directions.

---

- `Vector pos` — The position of the vertex in local space.

---

- `number u` — The horizontal coordinate of a position on the texture of the triangle that this vertex is a part of.
This controls which part of the texture is drawn at this vertex.

In the range `0` (the texture's left edge) to `1` (the texture's right edge)

---

- `number v` — The vertical coordinate of a position on the texture of the triangle that this vertex is a part of.
This controls which part of the texture is drawn at this vertex.

In the range `0` (the texture's top edge) to `1` (the texture's bottom edge)

---

- `number u1` — A secondary U texture coordinate used by some shaders like `LightmappedGeneric`.

Currently used exclusively by IMesh:BuildFromTriangles.

---

- `number v1` — A secondary V texture coordinate used by some shaders like `LightmappedGeneric`.

Currently used exclusively by IMesh:BuildFromTriangles.

---

- `table<number> userdata` — A sequential table of four numbers whose purpose and expected values are determined by the shader.

Many Source Engine shaders to hold tangent information of the vertex in the order `tangentX`, `tangentY`, `tangentZ`, `tangentHandedness`.

---

- `table<table> weights` — A sequential table of all the Structures/BoneWeight that affect this vertex.

The total sum of their `weight` values should be `1`

Currently added exclusively by util.GetModelMeshes

---

## `ModelInfo` `[client/server]`

---

Table returned by util.GetModelInfo.

---

- `number SkinCount` — Identical to Entity:SkinCount.

---

- `string KeyValues` — Valve key-value formatted info about the model's physics (Constraint Info, etc). This is limited to 4096 characters.

This data can be parsed into a Lua table via util.KeyValuesToTablePreserveOrder

---

- `string ModelKeyValues` — Valve key-value formatted info about the model (`$keyvalues` command in the `.qc` of the model), if present.

Can describe things like health of a prop, flammability, etc.

---

- `number MeshCount` — Number of meshes the model has. This could be 0 for animation only models.

---

- `number BoneCount` — Number of bones the model has.

---

- `number Flags` — Model flags. See [this page on Valve Developer Wiki](https://developer.valvesoftware.com/wiki/MDL#Model_flags) for explanation of each one.

---

- `boolean StaticProp` — Whether the model is meant to be a static prop (checks a specific model flag)

---

- `number MaterialCount` — Number of materials used by this model.

---

- `number SequenceCount` — Number of sequences the model has.

---

- `number AttachmentCount` — Number of attachments the model has.

---

- `string ModelName` — Name of the model, as embedded in the model file itself. This may be different from the model path of the model on disk.

---

- `number Version` — Model version. This should be 48 most of the time, but can be different from mountable games.

---

- `number Checksum` — Checksum (CRC32) of the model. This value should be identical across all files for the same model. (.vtx, .mdl, .vvd, etc.)

---

- `string SurfacePropName` — Name of the surface property for this model. See util.GetSurfaceData for more details about what they are.

---

- `Vector EyePosition` — If present, position of the eyes of the model, for NPCs.

---

- `Vector IllumPosition` — Illumination position for the model, for cases where the model root would be potentially outside of the world.

---

- `Vector HullMin` — Mins of the model's bounding box.

---

- `Vector HullMax` — Maxs of the model's bounding box.

---

- `table<table> Attachments` — A list of attachments the model has.

Each attachment is a table with the following info:
* Name
* Bone
* Offset

---

- `table<table> Bones` — A list of bones the model has. Please node that the keys of this table are **not** bone IDs, it's just a list, but it might be safe to assume the keys are (BoneID-1) due to Lua table indexes starting at 1..

Each bone in the list has the following fields:
* Name
* Parent
* Flags
* PhysObj
* SurfacePropName
* Position
* Angle

---

- `table<table> Sequences` — A list of sequences the model has, including the ones from `$includemodel`s.

Each sequence is a table with the following info:
* string Name
* string Activity
* number ActivityID
* number ActivityWeight
* table Events

`Events` table is a list of tables with following members:
* number Cycle
* number Event
* string Name
* number Type
* string Options

---

- `table<string> Materials` — A list of materials the model uses, across all its meshes.

---

- `table<string> MaterialDirectories` — A list of folders the game will look in for the **Materials**.

---

- `number IncludeModelCount` — Number of other models this model includes for their animations.

---

- `table<string> IncludeModels` — The list of models this model includes for their animations.

---

- `table<table> HitBoxSets` — A list of hitbox sets this model has. Each hitbox set has the following structure:
* Name
* Count
* HitBoxes - a table of hitboxes within this set

Each hitbox has the following format:
* Mins
* Maxs
* Bone

---

## `ModelMeshData` `[client/server]`

---

A table structure containing the information required to create a mesh.

Returned by util.GetModelMeshes

---

- `string material` — The name or path of this mesh's material.

---

- `table<table> triangles` — A sequential table of Structures/MeshVertex that represents the triangles of this mesh.

These triangles are created from the contents of the `verticies` field.

This can be used as an input to IMesh:BuildFromTriangles

---

- `table<table> verticies` — A sequential table of Structures/MeshVertex that represents each vertex of the mesh.

This field has a typo in its name and should be named "vertices"

---

## `NPCData` `[client/server]`

---

Information about the NPC data structure, used to define spawnable NPCs for the Sandbox gamemode.

Example usage:
```
list.Set( "NPC", "npc_tf2_ghost", {
Name = "Example NPC",
Class = "npc_tf2_ghost",
Category = "Nextbot"
} )
```

---

- `string Name` — The nice name of the NPC for UI display.

---

- `string Class` — Class name of the entity to spawn.

---

- `string Category` (default `Other`) — Spawnmenu category to put the NPCinto.

---

- `table Weapons` (default `{}`) — A list of weapons this NPC is typically meant to use. One will be picked on spawn at random, unless overwritten by the player.

---

- `table KeyValues` (default `{}`) — Key-value pairs to apply to the NPC on spawn. See Entity:SetKeyValue.

---

- `string Model` (default `nil`) — Model override for this NPC.

---

- `number SpawnFlags` (default `0`) — Additional spawnflags for this NPC. See Entity:GetSpawnFlags.

Ignored if `TotalSpawnFlags` key is present.

---

- `number TotalSpawnFlags` (default `nil`) — Total spawnflags override for this NPC.

---

- `boolean OnCeiling` (default `false`) — If set to `true`, this NPC can only be spawned on the ceiling. Stacks with `OnFloor`.

---

- `boolean OnFloor` (default `false`) — If set to `true`, this NPC can only be spawned on the floor. Stacks with `OnCeiling`.

---

- `number Offset` (default `0`) — Offset, in Hammer units, away from the surface where the player is looking at for the NPC spawn position.

---

- `string Material` — Material override for this NPC. See Entity:SetMaterial.

---

- `number Skin` (default `nil`) — Skin override for the NPC. See Entity:SetSkin.

---

- `boolean NoDrop` (default `false`) — If set to `true`, do not try to teleport the NPC to the ground.

---

- `Angle Rotate` (default `Angle( 0, 0, 0 )`) — Used to add additional rotation the NPC post spawn. Usually all NPCs would be facing the player on spawn. Value of `Angle( 0, 180, 0 )` would make the NPC face away from the player.

---

- `number Health` (default `nil`) — Health override for this NPC. Also sets Entity:SetMaxHealth.

---

- `function OnDuplicated` (default `nil`) — If set, a function to be called when the NPC is pasted using the duplicator library.

---

## `OperatingParams` `[server]`

---

The structure used by Vehicle:GetOperatingParams.

---

- `number RPM` — The current RPM of the vehicle

---

- `number gear` — The current gear of the vehicle, starting from 0

---

- `boolean isTorqueBoosting` — Is the vehicle boosting?

---

- `number speed` — The current speed, in inches per second

---

- `number steeringAngle` — Steering angle

---

- `number wheelsInContact` — Wheels on ground

---

## `PanelPaintState` `[client]`

---

This table is returned by surface.GetPanelPaintState.

---

- `number translate_x` — The X coordinate for the top-left corner of the Panel currently being drawn.

---

- `number translate_y` — The Y coordinate for the top-left corner of the Panel currently being drawn.

---

- `number scissor_left` — The X coordinate for the left edge of the render.SetScissorRect that surrounds the Panel that is currently being drawn.

---

- `number scissor_top` — The Y coordinate for the top edge of the render.SetScissorRect that surrounds the Panel that is currently being drawn.

---

- `number scissor_right` — The X coordinate for the right edge of the render.SetScissorRect that surrounds the Panel that is currently being drawn.

---

- `number scissor_bottom` — The Y coordinate for the bottom edge of the render.SetScissorRect that surrounds the Panel that is currently being drawn.

---

- `boolean scissor_enabled` — Whether or not the Panel currently being drawn has render.SetScissorRect active.

---

## `PathSegment` `[server]`

---

Structure represents a path segment, returned by PathFollower:GetCurrentGoal, PathFollower:FirstSegment and PathFollower:LastSegment.

---

- `CNavArea area` — The navmesh area this segment occupies.

---

- `number curvature` — How much of a curve should the bot execute when navigating this segment. 0 = none, 1 = 180°

---

- `number distanceFromStart` — Distance of this segment from the start of the path.

---

- `Vector forward` — The direction of travel to reach the end of this segment from the start, represented as a normalised vector.

---

- `number how` — The direction of travel to reach the end of this segment from the start, represented as a cardinal direction integer 0 to 3, or 9 for vertical movement.

---

- `CNavLadder ladder` — The navmesh ladder this segment occupies, if any.

---

- `number length` — Length of this segment.

---

- `Vector m_portalCenter` — 

---

- `number m_portalHalfWidth` — 

---

- `Vector pos` — The position of the end of this segment.

---

- `number type` — The movement type of this segment, indicating how bots are expected to move along this segment.
* 0 is ground movement
* 1 is falling down
* 2 is climbing up or jumping
* 3 is jumping over a gap
* 4 is climbing a ladder up (unused)
* 5 is climbing a ladder down (unused)

---

## `PhysEnvPerformanceSettings` `[client/server]`

---

Table used by physenv.SetPerformanceSettings and physenv.GetPerformanceSettings.

When setting the settings, omitting any key will fallback to its current value. (can be retrieved via the get function)

---

- `number LookAheadTimeObjectsVsObject` (default `nil`) — Maximum amount of seconds to precalculate collisions with objects.

Default value for this setting is `0.5`.

---

- `number LookAheadTimeObjectsVsWorld` (default `nil`) — Maximum amount of seconds to precalculate collisions with world.

Default value for this setting is `1`.

---

- `number MaxCollisionChecksPerTimestep` (default `nil`) — Maximum collision checks per tick.

Objects may penetrate after this many collision checks

Default value for this setting is `50000`.

---

- `number MaxCollisionsPerObjectPerTimestep` (default `nil`) — Maximum collision per object per tick.

Object will be frozen after this many collisions (visual hitching vs. CPU cost)

Default value for this setting is `10`.

---

- `number MaxVelocity` (default `nil`) — Maximum world-space speed of an object in inches per second.

Default value for this setting is `4000`.

---

- `number MaxAngularVelocity` (default `nil`) — Maximum world-space rotational velocity in degrees per second.

Default value for this setting is `7272.7280273438`.

---

- `number MinFrictionMass` (default `nil`) — Minimum mass of an object to be affected by friction.

Default value for this setting is `10`.

---

- `number MaxFrictionMass` (default `nil`) — Maximum mass of an object to be affected by friction.

Default value for this setting is `2500`.

---

## `PhysicsObjectSave` `[server]`

---

Structure used in storing/restoring physics object attributes.
duplicator.GenericDuplicatorFunction and duplicator.DoGenericPhysics use a table of **PhysicsObjectSave**s with the struct's index in the table being the physics object ID.

Pos and Angle are set by the following:

```
Pos, Angle = WorldToLocal(phys:GetPos(), phys:GetAngle(), Vector( 0, 0, 0 ), Angle( 0, 0, 0 ))
```

---

- `Vector Pos` — The entity's world position made local with Global.WorldToLocal

---

- `Angle Angle` — The entity's world angles made local with Global.WorldToLocal

---

- `boolean Frozen` — Whether the entity is moveable. Equal to (`not` PhysObj:IsMoveable)

---

- `boolean NoGrav` — Whether the entity's gravity is affected by gravity or not. PhysObj:IsGravityEnabled

---

- `boolean Sleep` — Whether the entity is dormant or not. PhysObj:IsAsleep

---

## `PhysProperties` `[server]`

---

Structure used by construct.SetPhysProp.

---

- `boolean GravityToggle` (default `nil`) — Enables or disables gravity for the entity

---

- `string Material` (default `nil`) — Sets the physics material for the entity

---

## `PLAYER` `[client/server]`

---

This page describes all **default** fields for a Player_Classes.

---

- `string DisplayName` — The 'nice' name of the player class for display in User Interface and such.

---

- `number WalkSpeed` (default `400`) — How fast to move when not running

---

- `number RunSpeed` (default `600`) — How fast to move when running/sprinting

---

- `number SlowWalkSpeed` (default `200`) — How fast to move when slow walking, which is activated via the +WALK keybind.

---

- `number CrouchedWalkSpeed` (default `0.3`) — Multiply walk speed by this when crouching

---

- `number DuckSpeed` (default `0.3`) — How fast to go from not ducking, to ducking

---

- `number UnDuckSpeed` (default `0.3`) — How fast to go from ducking, to not ducking

---

- `number JumpPower` (default `200`) — How powerful a jump should be

---

- `boolean CanUseFlashlight` (default `true`) — Can the player use the flashlight

---

- `number MaxHealth` (default `100`) — Max health we can have

---

- `number MaxArmor` (default `0`) — Max armor the player can have

---

- `number StartHealth` (default `100`) — How much health we start with

---

- `number StartArmor` (default `0`) — How much armour we start with

---

- `boolean DropWeaponOnDie` (default `false`) — Do we drop our weapon when we die

---

- `boolean TeammateNoCollide` (default `true`) — Do we collide with teammates or run straight through them

---

- `boolean AvoidPlayers` (default `true`) — Automatically swerves around other players

---

- `boolean UseVMHands` (default `true`) — Uses viewmodel hands

---

## `PolygonVertex` `[client/menu]`

---

A structure containing vertex information for use with surface.DrawPoly.

UV coordinates describe which part of a given texture should be drawn at a vertex - your graphics card's interpolator will fill in space between vertices. UV coords range from `0-1`, with `0` being top/left and `1` being bottom/right. If you're using a texture these are mandatory.

You must pass a table of tables with this structure to the function. **You need to pass at least 3 points.**

Your points must be defined in a **clockwise order.** Otherwise, your shape will not render properly.

---

- `number x` — The x coordinate of the vertex.

---

- `number y` — The y coordinate of the vertex.

---

- `number u` — The u texture coordinate of the vertex. `Can be left blank.`

---

- `number v` — The v texture coordinate of the vertex. `Can be left blank.`

---

## `Preset` `[menu]`

---

The structure used by Global.CreateNewAddonPreset.

---

- `table enabled` — A Table containing all enabled addons.

---

- `table disabled` — A Table containing all disabled addons.

---

- `string name` — The name of the Preset.

---

- `string newAction` — What to do with addons not in the preset. Can be `enable`, `disable` or nothing.

---

## `Problem` `[menu]`

---

Table used by Global.FireProblem function.

---

- `string id` — The Problem ID.

---

- `string text` — The Text to Display.

---

- `number severity` — The Problem severity.

---

- `string type` — The Problem Type. Possible values are:
* config
* hardware
* addons

---

- `function fix` — a Function that fixes the Problem.

---

## `PropertyAdd` `[client/server]`

---

Structure used for properties.Add.

---

- `string Type` (default `simple`) — Can be set to "toggle" to make this property a toggle property.

---

- `string MenuLabel` — Label to show on opened menu

---

- `string MenuIcon` — Icon to show on opened menu for this item. Optional for simple properties and unused for toggle properties.

---

- `number Order` — Where in the list should the property be positioned, relative to other properties.

For reference, here are the default properties and their Order values:

Property |  Order |
---------|-------|
| Bone Manipulate | 500 |
| Bodygroups | 600 |
| Skin | 601 |
| Keep Upright | 900 |
| Ignite/Extinguish | 999 |
| Remove | 1000 |
| Gravity | 1001 |
| Drive | 1100 |
| Collision | 1500 |
| Statue | 1501 |
| NPC Biggify/Smallify | 1799, 1800 |
| Motion Control (Kinect) | 2500 |
| Editable_Entities | 90001 |

---

- `boolean PrependSpacer` (default `false`) — Whether to add a spacer before this property. This should generally be true for the first property in a group of properties.

---

- `function Filter` — Used **clientside** to decide whether this property should be shown for an entity.

It's good practice to call GM:CanProperty in this hook via gamemode.Call or hook.Run.

the property table
the entity the player clicked
the Global.LocalPlayer
Return true if the property should be shown for this entity.

---

- `function Checked` — Required for toggle properties (clientside).

the property table
the entity the player clicked
the player's eye trace
Return true if the property should appear checked in the UI.

---

- `function Action` — Called **clientside** when the property is clicked

the property table
the entity the player clicked
the player's eye trace

When appropriate, within this function you can call `self:MsgStart()`, write data with the net.`Write*` functions, and finish with `self:MsgEnd()`. This will activate the `Receive` function on the server. In most cases, you will want to send the entity to the server, as it's not done by default.

---

- `function Receive` — Called **serverside** if the client sends a message in the `Action` function (see above).

the property table
the net message length, although this includes the property identifier used internally (the name of the property)
the player who clicked the property

You can read data received from the client with the net.`Read*` functions. It's good practice to check GM:CanProperty here via gamemode.Call or hook.Run.

---

- `function MenuOpen` — Called **clientside** when the property option has been created in the right-click menu. This is not called for toggle properties!

the property table
the menu option
the entity the player right-clicked
the player's eye trace

---

- `function OnCreate` — Same as `MenuOpen`, but also called for toggle properties and has different arguments. This is called immediately after `MenuOpen`, but nothing happens in between so you should only ever use one or the other.

the property table
the property menu
the menu option

---

## `RenderCamData` `[client]`

---

Used for cam.Start.

Unless stated otherwise, the default values for all these keys would be inherited from the engine's current `CViewSetup` and do not have static representations.

---

- `number x` (default `nil`) — The x position of the view port

---

- `number y` (default `nil`) — The y position of the view port

---

- `number w` (default `nil`) — The width of the view port

---

- `number h` (default `nil`) — The height of the view port

---

- `string type` (default `3D`) — The type of cam. Valid types are:
* "2D" - No additional arguments are required
* "3D" - Only origin and angles are needed, all other parameters are optional.

---

- `Vector origin` (default `nil`) — The position to render from

---

- `Angle angles` (default `nil`) — The angles to render from

---

- `number fov` (default `nil`) — The field of view

---

- `number aspect` (default `nil`) — The aspect ratio of the view port (Note that this is NOT set to w/h by default)

---

- `number zfar` (default `nil`) — The distance to the far clipping plane

---

- `number znear` (default `nil`) — The distance to the near clipping plane

---

- `boolean subrect` (default `nil`) — Set to true if this is to draw into a subrect of the larger screen.

---

- `boolean bloomtone` (default `false`) — m_bDoBloomAndToneMapping

---

- `table offcenter` (default `nil`) — A table having these keys: ( all floats )
* left
* right
* bottom
* top

---

- `table ortho` (default `nil`) — If set, makes the view/camera orthogonal. A table having these keys: ( all floats )
* left
* right
* bottom
* top

---

## `RenderCaptureData` `[client]`

---

Used for render.Capture.

---

- `string format` — Format of the capture. Valid formats are:
* `jpeg` or `jpg`
* `png`

As of version 2026.06.19:
* `rgba`, `rgb` and `bgra` - Raw image data in given byte order.
Expected data size is `ImgWidth * ImgHeight * 4` (`ImgWidth * ImgHeight * 3` for `rgb`)
Each 4 (or 3 for `rgb`) bytes  is one pixel, top to bottom left to right.

---

- `number x` — X coordinate of the capture origin

---

- `number y` — Y coordinate of the capture origin

---

- `number w` — Width of the capture

---

- `number h` — Height of the capture

---

- `number quality` — The quality of the capture. Affects jpeg only.

---

- `boolean alpha` (default `true`) — Set to false to capture an image with alpha channel set to fully opaque. Affects any format with alpha channel support, so not `jpg`.

---

## `SequenceInfo` `[client/server]`

---

Used by Entity:GetSequenceInfo.

---

- `string label` — Name of the sequence.

---

- `string activityname` — Name of the activity this sequence is attached to.

---

- `number{ACT} activity` — The activity ID associated with this sequence. See Enums/ACT.

---

- `number actweight` — How likely this sequence is to be picked when playing an activity its attached to. -1 means this is the only sequence for that activity. (needs validation)

---

- `number flags` — The looping and other flags of this sequence, see [flags here](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/public/studio.h#L3078).

---

- `number numevents` — Number of animation events this sequence has.

---

- `number numblends` — 

---

- `vector bbmin` — Mins part of the bounding box for this sequence

---

- `vector bbmax` — Maxs part of the bounding box for this sequence

---

- `number fadeintime` — ideal cross fade in time (0.2 default)

---

- `number fadeouttime` — ideal cross fade out time (0.2 default)

---

- `number localentrynode` — transition node at entry

---

- `number localexitnode` — transition node at exit

---

- `number nodeflags` — Transition rules

---

- `number lastframe` — Frame that should generate EndOFSequence

---

- `number nextseq` — If non 0, the next sequence for auto advancing sequences

---

- `number pose` — 

---

- `number cycleposeindex` — If non 0, index of pose parameter to be used as cycle index. This means that the sequence playback will be controlled by a pose parameter.

---

- `table<number> anims` — A 1-based array of all animationIDs associated with this sequence. For use with Entity:GetAnimInfo.

---

## `ServerQueryData` `[menu]`

---

Used for serverlist.Query.

---

- `string GameDir` (default `garrysmod`) — The game directory to get the servers for

---

- `string Type` — Type of servers to retrieve. Valid values are `internet`, `favorite`, `history` and `lan`

---

- `number AppID` (default `4000`) — Steam application ID to get the servers for

---

- `function Callback` — Called when a new server is found and queried.

Latency to the server.
Name of the server
"Nice" gamemode name
Current map
Total player number ( bot + human )
Maximum reported amount of players
Amount of bots on the server
Whether this server has password or not
Time when you last played on this server, as UNIX timestamp or 0
IP Address of the server
Gamemode folder name
Gamemode Steam Workshop ID
Is the server signed into an anonymous account?
Version number, same format as jit.version_num
Two digit country code, `us` if nil
Category of the gamemode, ex. `pvp`, `pve`, `rp` or `roleplay`

Return `false` to stop the query.

---

- `function CallbackFailed` — Called if the query has failed, called with the servers IP Address

---

- `function Finished` — Called when the query is finished. No arguments

---

## `ShadowControlParams` `[client/server]`

---

Table used by PhysObj:ComputeShadowControl. Default values are given if the table element is omitted.

---

- `number secondstoarrive` (default `TICK_INTERVAL * 2`) — How long it takes to move to the set pos and angle. Limited by max speed/damping.
Cannot be 0! Will give errors if you do.

---

- `number delta` (default `0.1`) — The time it should use - just use the one from ENTITY:PhysicsSimulate.

---

- `Vector pos` (default `vector_origin`) — Where you want to move to.

---

- `Angle angle` (default `angle_zero`) — Angle you want to move to.

---

- `number maxangular` (default `1`) — What should be the maximal angular force applied.

---

- `number maxangulardamp` (default `1`) — At which force/speed should it start damping the rotation.

---

- `number maxspeed` (default `1`) — Maximum linear force applied

---

- `number maxspeeddamp` (default `1`) — Maximum linear force/speed before damping.

---

- `number dampfactor` (default `1`) — The percentage it should damp the linear/angular force if it reaches it's max amount

---

- `number teleportdistance` (default `0`) — If it's further away than this it'll teleport (Set to 0 to not teleport)

---

## `Sky3DParams` `[client/server]`

---

A table structure containing the information of 3D skybox.

Returned by game.Get3DSkyboxInfo.

---

- `Vector origin` — Position of the [sky_camera](https://developer.valvesoftware.com/wiki/Sky_camera) entity.

---

- `number scale` — Scale of the 3D skybox.

---

## `SoundData` `[client/server]`

---

Table used in sound.Add and sound.GetProperties.

---

- `string|table<string> sound` — Path to the sound file to be used in this sound effect, relative to `sound/` directory (so exclude the `sound/` part).

Can be a table of sound files, in which case the sound will be chosen randomly every time from the provided list.

Each sound path can be prepended with a special character for special effects. You can learn more about this [here](https://developer.valvesoftware.com/wiki/Soundscripts#Sound_Characters).

---

- `string name` — The name of the soundscript, to be referenced by in functions such as Entity:EmitSound.

---

- `number{CHAN} channel` (default `CHAN_AUTO`) — The sound channel to play in. See Enums/CHAN

---

- `number{SNDLVL} level` (default `SNDLVL_NORM`) — The soundlevel of the sound in dB. See Enums/SNDLVL. This will affect how far the sound can be heard.

---

- `number|table<number> volume` (default `1.0`) — The volume of the sound as a decimal between `0` and `1`. Can be a table of two numbers, a minimum and a maximum value.

**Warning:** Volume of `0` will act as volume of `1`

---

- `number|table<number> pitch` (default `100`) — The pitch of the sound. Can be a table of two numbers, a minimum and a maximum value.

---

- `number pitchstart` (default `100`) — The initial pitch.
Use pitch instead.

---

- `number pitchend` (default `100`) — The pitch end.
Use pitch instead.

---

## `SoundHintData` `[server]`

---

Table describing a sound hint, used by NPC:GetBestSoundHint and sound.GetLoudestSoundHint.

---

- `Vector origin` — Origin of the sound hint

---

- `Entity owner` — Owner of the sound hint, if any (emitting entity, like a thumper)

---

- `Entity target` — Target of the sound hint, if any

---

- `number volume` — Volume of the sound hint

---

- `number{SOUND} type` — Enums/SOUND

---

- `number expiration` — Global.CurTime based expiration date

---

- `boolean expires` — Does this sound hint expire?

---

- `number{CHAN} channel` — Enums/CHAN

---

## `SunInfo` `[client]`

---

Returned by util.GetSunInfo.

---

- `Vector direction` — The sun's direction relative to 0,0,0.

---

- `number obstruction` — Indicates how obstructed the sun is, 1 not visible, 0 fully visible.

---

- `table{Color} overlayColor` — Color of sun's overlay in `0`-`255` range as Color structure.

---

- `string overlayMaterial` — The sun's overlay name of material. For example: `sprites/light_glow02_add_noz.vmt`.

---

- `number overlaySize` — Size of sun's overlay.

---

- `table{Color} sunColor` — Color of sun in `0`-`255` range as Color structure.

---

- `string sunMaterial` — The sun's name of material.

---

- `number sunSize` — Size of sun.

---

- `boolean enabled` — State of sun.

---

## `SurfacePropertyData` `[client/server]`

---

Table returned by util.GetSurfaceData.

---

- `string name` — The name of the surface property, identical to util.GetSurfacePropName.

---

- `number hardnessFactor` — How hard a surface is. If this is greater than or equal to another surfaces's hardThreshold, a hard impact sound will be used.

---

- `number hardThreshold` — Hardness threshold for impact sounds. HitSurface.hardnessFactor &gt;= InflictorSurface.hardThreshold - hard impact sound (depends on hardVelocityThreshold's value), HitSurface.hardnessFactor &lt; InflictorSurface.hardThreshold - soft impact sound (always).

---

- `number hardVelocityThreshold` — Velocity threshold for impact sounds. impactSpeed &gt;= HitSurface.hardVelocityThreshold - hard impact sound (depends on hardThreshold's value), impactSpeed &lt; HitSurface.hardVelocityThreshold - soft impact sound (always).

---

- `number reflectivity` — Amount of sound reflected from the surface represented as a number 0.0 - 1.0. 0 - no reflection, 1 - fully reflected.

---

- `number roughnessFactor` — How rough a surface is. If this is greater than or equal to another surfaces's roughThreshold, a rough scrape sound will be used.

---

- `number roughThreshold` — Roughness threshold for friction sounds. HitSurface.roughnessFactor &gt;= InflictorSurface.roughThreshold - rough friction sound, HitSurface.roughnessFactor &lt; InflictorSurface.roughThreshold - soft friction sound.

---

- `number climbable` — Indicates whether or not the surface is a ladder. Used to detect whether a player is on a ladder. 0 - false, &gt; 0 - true.

---

- `number jumpFactor` — Scalar multiplier for player jump height - or more accurately, applied z-axis velocity on a surface. For example, 1 - normal jump, 2 - twice as high, and 0.5 - half as high.

---

- `number{MAT} material` — The surface material. See Enums/MAT.

---

- `number maxSpeedFactor` — Scalar multiplier for player speed. Achieves this by multiplying CMoveData:SetMaxSpeed in GM:Move.

---

- `number dampening` — This is the physical drag on an object when in contact with this surface (0 - x, 0 none to x a lot).

---

- `number density` — Material density in kg / m^3 (water is 1000). If a surface's density is &lt; 1000, it will float in water. This is used to calculate the total mass of an object.

---

- `number elasticity` — Collision elasticity - used to compute coefficient of restitution represented as a number 0.0 - 1.0. 0.01 is soft, 1.0 is hard.

---

- `number friction` — Physical friction used to slow entities touching the surface represented as a number 0.0 - 1.0. 0.01 is slick, 1.0 is completely rough.

---

- `number thickness` — Material thickness. If this is 0, the material is not volumetrically solid, and thus the object mass will be calculated as "volume * 0.0254^3 * density" where 0.0254 is meters per inch. If non-zero, the mass will be "surfacearea * thickness * 0.0254^3 * density".

---

- `string breakSound` — Sound to play when a prop or func_breakable is broken.

---

- `string bulletImpactSound` — Bullet impact sound with this surface.

---

- `string impactHardSound` — Physical impact sound when hitting surfaces hard.

---

- `string impactSoftSound` — Physical impact sound when hitting surfaces softly.

---

- `string rollingSound` — Unused sound.

---

- `string scrapeRoughSound` — Friction sound when roughly scraping against an entity.

---

- `string scrapeSmoothSound` — Friction sound when smoothly scraping against an entity.

---

- `string stepLeftSound` — Footstep sound for left foot.

---

- `string stepRightSound` — Footstep sound for right foot.

---

- `string strainSound` — Unused sound.

---

## `SWEP` `[client/server]`

---

Information about Scripted_Entities (SWEPs),
used by SANDBOX:PlayerGiveSWEP and in SWEP creation.

For list of callbacks, see WEAPON_Hooks.

While some of the fields may be serverside or clientside only, it is recommended to provide them on both so
addons could use their values.

---

- `string ClassName` — Entity class name of the SWEP (file or folder name of your SWEP). This is
set automatically

---

- `string ClassNameOverride` — If set, overrides the classname of the SWEP.

---

- `string Category` (default `#spawnmenu.category.other`) — The spawn menu category that this weapon
resides in.

---

- `boolean Spawnable` (default `false`) — Whether or not this weapon can be obtained through the
spawn menu.

---

- `boolean AdminOnly` (default `false`) — If spawnable, this variable determines whether only
administrators can use the button in the spawn menu.

---

- `string PrintName` (default `Scripted Weapon`) — The name of the SWEP displayed in the spawn menu.

---

- `string Base` (default `weapon_base`) — The weapon's base script, relative to `lua/weapons`.

---

- `number m_WeaponDeploySpeed` (default `GetConVar('sv_defaultdeployspeed'):GetFloat()`) — The deploy speed multiplier. This does not change the
internal deployment speed.

---

- `Entity Owner` — Use Entity:GetOwner() instead.

---

- `Weapon Weapon` — Use `SWEP` instead. However, if called in a SWEP method; use `self` instead.

---

- `string Author` — The SWEP's author.

---

- `string Contact` — The contact information regarding the SWEP's author.

---

- `string Purpose` — The purpose of the SWEP.

---

- `string Instructions` — The instructions regarding the SWEP's usage.

---

- `string ViewModel` (default `models/weapons/v_pistol.mdl`) — Relative path to the SWEP's view model.

---

- `boolean ViewModelFlip` (default `false`) — Used primarily for Counter Strike: Source view models, this variable is used to flip them back to normal.

---

- `boolean ViewModelFlip1` (default `false`) — Behaves similarly to `ViewModelFlip`, but for the second view model.

---

- `boolean ViewModelFlip2` (default `false`) — Behaves similarly to `ViewModelFlip`, but for the third view model.

---

- `number ViewModelFOV` (default `62`) — The field of view percieved whilst wielding this `SWEP`.

---

- `string WorldModel` (default `models/weapons/w_357.mdl`) — Relative path to the SWEP's world model.

---

- `boolean AutoSwitchFrom` (default `true`) — Whether this weapon can be autoswitched
away from when the player runs out of ammo in this weapon or picks up another weapon or ammo

---

- `boolean AutoSwitchTo` (default `true`) — Whether this weapon can be autoswitched to
when the player runs out of ammo in their current weapon or they pick this weapon up

---

- `number Weight` (default `5`) — Determines the priority of the weapon when
autoswitching. The weapon being autoswitched from will attempt to switch to a weapon with the same weight
that has ammo, but if none exists, it will prioritise higher weight weapons.

---

- `number BobScale` (default `1`) — The scale of the viewmodel bob (viewmodel movement
from left to right when walking around)

---

- `number SwayScale` (default `1`) — The scale of the viewmodel sway (viewmodel
position lerp when looking around).

---

- `boolean BounceWeaponIcon` (default `true`) — Should the weapon icon bounce in weapon
selection?

---

- `boolean DrawWeaponInfoBox` (default `true`) — Should draw the weapon selection info
box, containing SWEP.Instructions, etc.

---

- `boolean DrawAmmo` (default `true`) — Should we draw the default HL2 ammo counter?

---

- `boolean DrawCrosshair` (default `true`) — Should we draw the default crosshair?

---

- `number{RENDERGROUP} RenderGroup` — The SWEP render group, see Enums/RENDERGROUP. If unset, the engine will decide the render group based on the SWEPs world model.

---

- `number Slot` (default `0`) — Slot in the weapon selection menu, starts with `0`

---

- `number SlotPos` (default `10`) — Position in the slot, should be in the range `0-128`

---

- `number SpeechBubbleLid` (default `surface.GetTextureID( 'gui/speech_lid' )`) — Internal variable for drawing the info box in weapon selection

---

- `number WepSelectIcon` (default `surface.GetTextureID( 'weapons/swep' )`) — Path to
a material. Override this in your SWEP to set the icon in the weapon selection. This must be the texture ID,
see surface.GetTextureID. Keep in mind that the path must be to a `.vmt` file, NOT `.vtf`.

Alternatively you can render custom weapon selection via WEAPON:DrawWeaponSelection.

---

- `boolean CSMuzzleFlashes` (default `false`) — Should we use Counter-Strike muzzle
flashes upon firing? This is required for DoD:S or CS:S view models to fix their muzzle flashes.

---

- `boolean CSMuzzleX` (default `false`) — Use the X shape muzzle flash instead of the
default Counter-Strike muzzle flash. Requires Structures/SWEP#CSMuzzleFlashes to be set to true.

---

- `table Primary` — Primary attack settings. The table contains these fields:

* string `Ammo` - Ammo type (`Pistol`, `SMG1`, etc.) See game.AddAmmoType.
* number `ClipSize` - The maximum amount of bullets one clip can hold. Setting it to `-1` means weapon uses no clips, like a grenade or a rocket launch.
* number `DefaultClip` - Default ammo in the clip, making it higher than ClipSize will give player additional ammo on spawn
* boolean `Automatic` - If true makes the weapon shoot automatically as long as the player has primary attack button held down

---

- `table Secondary` — Secondary attack settings, has same fields as Primary attack settings

---

- `boolean UseHands` (default `false`) — Makes the player models hands bonemerged onto
the view model

The gamemode and view models **must** support this feature for it to work!
You can find more information here: Using_Viewmodel_Hands

---

- `string Folder` — The folder from where the weapon was loaded. This should always be
"weapons/weapon_myweapon", regardless whether your SWEP is stored as a file, or multiple files in a folder.
It is set automatically on load

---

- `boolean AccurateCrosshair` (default `false`) — Makes the default SWEP crosshair be
positioned in 3D space where your aim actually is (like on Jeep), instead of simply sitting in the middle of
the screen at all times

---

- `boolean DisableDuplicator` (default `false`) — Disable the ability for players to duplicate this
SWEP

---

- `string ScriptedEntityType` (default `weapon`) — Sets the spawnmenu content icon type
for the entity, used by spawnmenu in the Sandbox-derived gamemodes.
See spawnmenu.AddContentType for more information.

---

- `boolean m_bPlayPickupSound` (default `true`) — If set to false, the weapon will not play the
weapon pick up sound when picked up.

---

- `string IconOverride` (default `entities/<ClassName>.png`) — If set,
overrides the icon path to be displayed in the Spawnmenu for this entity. The path is relative to the `materials/` folder.

---

## `TeamData` `[client/server]`

---

Table is one element from team.GetAllTeams.

---

- `Color Color` — Color of the team

---

- `boolean Joinable` — Whether the team is joinable or not.

---

- `string Name` — Name of the team

---

- `number Score` — Score of the team

---

## `TextData` `[client/menu]`

---

Used for draw.Text.

---

- `string text` — Text to be drawn.

---

- `string font` (default `DermaDefault`) — The font to draw with. List of default fonts can be found Default_Fonts.

---

- `table pos` — This holds the X and Y coordinates. Key value 1 is x, key value 2 is y.

---

- `number{TEXT_ALIGN} xalign` (default `TEXT_ALIGN_LEFT`) — The alignment of the X position. See Enums/TEXT_ALIGN

---

- `number{TEXT_ALIGN} yalign` (default `TEXT_ALIGN_TOP`) — The alignment of the Y position. See Enums/TEXT_ALIGN

---

- `Color color` (default `color_white`) — The text color

---

## `TextureData` `[client/menu]`

---

Used for draw.TexturedQuad.

---

- `number texture` — surface.GetTextureID number of the texture to be drawn.

---

- `number x` — The x Coordinate.

---

- `number y` — The y Coordinate.

---

- `number w` — The width of the texture.

---

- `number h` — The height of the texture.

---

- `Color color` (default `color_white`) — The texture color. See Color.

---

## `TOOL` `[client/server]`

---

The **TOOL** table is used in Sandbox tool creation. You can find a list of callbacks on the  page and a list of methods on the  page. Do note that some of the fields below have no effect on server-side operations.

The tool information box drawn on the HUD while your tool is selected has 2 values that are set by language.Add.
* `tool.[tool mode].name` - The tool name (Note this is NOT the same as TOOL.Name)
* `tool.[tool mode].desc` - The tool description

Ensure that all tool file names are entirely lowercase.  Including capital letters can lead to unintended behavior.

---

- `boolean AddToMenu` (default `true`) — If set to false, the tool won't be added to the tool menu and players will have to access it by other means.

---

- `string Category` (default `New Category`) — The tool menu category under which the tool should be listed.

---

- `string Command` (default `gmod_toolmode [tool]`) — The console command to execute upon being selected in the Q menu.

---

- `string Name` (default `#[tool mode]`) — The name of the tool in the Q menu.
Common practice is to set this to "#tool.[lua filename].name" to match the name displayed in the tool information box.

---

- `table ClientConVar` — A key-value ( convar name-default value ) table containing the client-side convars to create. All convars will be prefixed with the filename of the tool.
You can later use Tool:GetClientNumber or Tool:GetClientInfo to retrieve these values.

---

- `table ServerConVar` — Same as above, but created server-side instead.

---

- `table ClientConVars` — A key-value ( string name - ConVar object ) table containing the cached convar objected created from `ClientConVar`.

---

- `table ServerConVars` — Same as above, but server-side (`ServerConVar`) instead.

---

- `function BuildCPanel` — The function that is called to build the context menu for your tool. It has one argument, namely the context menu's base panel to which all of your custom panels are going to be parented to.

While it might sound like a hook, it isn't - you won't receive a `self` argument inside the function. See TOOL.BuildCPanel.

---

- `table Information` — Allows you to override the tool usage information shown when the tool is equipped.
See Tool Information Display for more information.

---

- `string Mode` — Class name of the tool. (name of the .lua file)

This is set automatically.

---

- `string Tab` — The tool tab (spawnmenu.AddToolTab) to add this tool to. (The internal name, first argument)

---

- `boolean LeftClickAutomatic` (default `false`) — When enabled the game tries to run the left mouse click as soon as possible

---

- `boolean RightClickAutomatic` (default `false`) — When enabled the game tries to run the right mouse click as soon as possible

---

## `ToScreenData` `[client]`

---

Table returned by Vector:ToScreen.

---

- `number x` — The x coordinate on the players screen

---

- `number y` — The y coordinate on the players screen

---

- `boolean visible` — The coordinate is not behind the player. **This does not mean the coordinate is on the screen.** When this is false, it means that the coordinate would not be on the screen even if the player had a full 180 degree FOV.

---

## `Trace` `[client/server]`

---

Table structure used for util.TraceLine.

---

- `Vector start` (default `Vector(0, 0, 0)`) — The start position of the trace

---

- `Vector endpos` (default `Vector(0, 0, 0)`) — The end position of the trace

---

- `Entity|table<Entity>|table<string>|function filter` (default `nil`) — Things the trace should not hit. Can be an entity, a table of entities, a table of entity classes or a function:

The entity that the trace hit
Return `true` to hit the entity, `false` to skip it.

Using a function here is super slow. Try to avoid it.

---

- `number{MASK} mask` (default `MASK_SOLID`) — The trace mask Enums/MASK. This determines what the trace should hit and what it shouldn't hit. A mask is a combination of Enums/CONTENTS - you can use these for more advanced masks.

---

- `number{COLLISION_GROUP} collisiongroup` (default `COLLISION_GROUP_NONE`) — The collision group Enums/COLLISION_GROUP. This determines what the trace should hit in regards to the entity's collision group.

---

- `boolean ignoreworld` (default `false`) — Should the trace ignore world or not

---

- `table{TraceResult} output` (default `nil`) — If set, the trace result will be written to the supplied table instead of returning a new table

---

- `boolean whitelist` (default `false`) — Turns the `filter` field into a whitelist, if it is a table.

---

- `boolean hitclientonly` (default `false`) — Enables traces to hit clientside only entities. Keep in mind that most naturally spawned entities are classified as debris, so extra `mask` values might be required.

---

## `TraceResult` `[client/server]`

---

Table structure used as trace result. Default values are when the trace hits nothing.

See util.TraceLine and util.TraceHull.

---

- `Entity Entity` (default `NULL`) — The entity hit by the trace.

---

- `number Fraction` (default `1`) — This indicates the how much of your trace length was used from 0-1 (resultLength/originalLength).

---

- `number FractionLeftSolid` (default `0`) — Given the trace started in a solid enviroment, this will return at what distance the trace left the solid from 0-1. Doesn't work if the trace hit a non-worldspawn entity.

---

- `boolean Hit` (default `false`) — Indicates whether the trace hit something.

---

- `number HitBox` (default `0`) — The ID of the hitbox hit by the trace, or ID of the static prop hit in case of hitting the world.

---

- `number{HITGROUP} HitGroup` (default `0`) — Enums/HITGROUP describing what hitgroup the trace hit (not the same as HitBox).

---

- `boolean HitNoDraw` (default `false`) — Indicates whenever the trace hit a no-draw brush.

---

- `boolean HitNonWorld` (default `false`) — Indicates whenever the trace did not hit the world.

---

- `Vector HitNormal` (default `Global.Vector(0, 0, 0)`) — The direction of the surface that was hit as a normal vector (vector with Vector:Length of 1).

---

- `Vector HitPos` — The position the trace stopped. This will be the provided endpos if the trace hit nothing.

---

- `boolean HitSky` (default `false`) — Indicates whenever the trace hit the sky.

---

- `string HitTexture` (default `** empty **`) — The surface material (not texture) of whatever the trace hit. Will be `**displacement**` if the trace hit a displacement, and `**studio**` if it hit a prop.

---

- `boolean HitWorld` (default `false`) — Indicates whenever the trace hit the world.

---

- `number{MAT} MatType` (default `nil`) — Enums/MAT of the material hit by the trace.

---

- `Vector Normal` — The direction of the trace as a normal vector (vector with Vector:Length of 1).

Equivalent to: `( traceRes.HitPos - traceRes.StartPos ):Normalize()`

---

- `number PhysicsBone` (default `0`) — The PhysObj ID that was hit.

Used for Entity:GetPhysicsObjectNum.

---

- `Vector StartPos` — The origin of the trace. Will match the provided startpos.

---

- `number SurfaceProps` (default `0`) — ID of hit surface property from `scripts/surfaceproperties.txt`.
You can get the name using util.GetSurfacePropName.

Used for CEffectData:SetSurfaceProp.

---

- `boolean StartSolid` (default `false`) — Indicates whenever the trace started in a solid enviroment.

---

- `boolean AllSolid` (default `false`) — True if the entire trace is inside a solid.

---

- `number{SURF} SurfaceFlags` (default `0`) — The surface flags of the hit surface. See Enums/SURF.

---

- `number{DISPSURF} DispFlags` (default `0`) — The displacement flags of the hit surface. See Enums/DISPSURF.

---

- `number{CONTENTS} Contents` (default `0`) — The contents of the hit surface. See Enums/CONTENTS.

---

- `number HitBoxBone` (default `nil`) — BoneID on the model that the hit hitbox is attached to, if available.

---

## `UGCFileInfo` `[client/menu]`

---

Table structure used by steamworks.FileInfo.

---

- `number id` — The Workshop item ID

---

- `string title` — The title of the Workshop item

---

- `string description` — The description of the Workshop item. It will be limited to 255 characters (by Steam) unless steamworks.FileInfo is called with the `extraInfo` parameter set.

---

- `number fileid` — The internal File ID of the workshop item, if any

---

- `number previewid` — The internal File ID of the workshop item preview, if any

---

- `string previewurl` — A URL to the preview image of the workshop item

---

- `number owner` — The SteamID64 of the original uploader of the addon

---

- `number created` — Unix timestamp of when the item was created

---

- `number updated` — Unix timestamp of when the file was last updated

---

- `boolean banned` — Whether the file is banned or not

---

- `string tags` — Comma (,) separated list of tags, may be truncated to some length

---

- `number size` — File size of the workshop item contents in bytes

---

- `number previewsize` — Filesize of the preview file in bytes

---

- `boolean installed` — If the addon is subscribed, this value represents whether it is installed on the client and its files are accessible, false otherwise.

---

- `boolean disabled` — If the addon is subscribed, this value represents whether it is disabled on the client, false otherwise.

---

- `table children` — A list of child Workshop Items for this item.

For collections this will be sub-collections, for workshop items this will be the items they depend on.

---

- `string ownername` — We advise against using this. It may be changed or removed in a future update.

The "nice" name of the Uploader, or "Unnammed Player" if we failed to get the data for some reason.

Do not use this field as it will most likely not be updated in time. Use steamworks.RequestPlayerInfo instead.

---

- `number error` — If this key is set, no other data will be present in the response.

Values above 0 represent Steam Error codes (https://steamerrors.com/), values below 0 mean the following:
* -1 means Failed to create query
* -2 means Failed to send query
* -3 means Received 0 or more than 1 result
* -4 means Failed to get item data from the response
* -5 means Workshop item ID in the response is invalid
* -6 means Workshop item ID in response is mismatching the requested file ID

---

- `number up` — Number of "up" votes for this item.

---

- `number down` — Number of "down" votes for this item.

---

- `number total` — Number of total votes (up and down) for this item. This is NOT `up - down`.

---

- `number score` — The up down vote ratio for this item, i.e. `1` is when every vote is `up`, `0.5` is when half of the total votes are the up votes, etc.

---

- `table<string> content_descriptors` — A list of Steam content descriptiors for this Steam Workshop item.

Possible values are:
* `general_mature`
* `gore`
* `suggestive`
* `nudity`
* `adult_only`

---

- `table<table> extra_previews` — If present, a list of additional previews for this Workshop item.

steamworks.FileInfo must be called with `extraInfo` parameter.

It will be a table of tables with the following keys:
* number `type` - type of additional preview. 0 = is normal image, 1=YouTube video ID
* string `url` - URL to the additional preview. Format depends on the type.

---

## `Undo` `[server]`

---

Table structure used by undo.Do_Undo and GM:CanUndo.

---

- `Player Owner` — The player responsible who owns the undo

---

- `string Name` — The name of the text to report to the player

---

- `table<Entity> Entities` — A table of entities to be removed by the undo

---

- `table<table> Functions` — A table of {function_to_call, func_arg2, func_arg3}

---

- `string CustomUndoText` — A custom undo text to show the client

---

- `string NiceText` — A "nice" name of the undo, which will be used for the UI

---

## `VehicleParams` `[server]`

---

The structure used by Vehicle:SetVehicleParams and Vehicle:GetVehicleParams.

---

- `number wheelsPerAxle` — Wheels per axle

---

- `number axleCount` — Number of axles

---

- `table{VehicleParamsAxle} axles` — A table of Structures/VehicleParamsAxle tables.

---

- `table{VehicleParamsBody} body` — See Structures/VehicleParamsBody

---

- `table{VehicleParamsEngine} engine` — See Structures/VehicleParamsEngine

---

- `table{VehicleParamsSteering} steering` — See Structures/VehicleParamsSteering

---

## `VehicleParamsAxle` `[server]`

---

The structure used by Structures/VehicleParams.

---

- `number brakeFactor` — 

---

- `Vector offset` — 

---

- `Vector raytraceCenterOffset` — 

---

- `Vector raytraceOffset` — 

---

- `number suspension_maxBodyForce` — 

---

- `number suspension_springConstant` — 

---

- `number suspension_springDamping` — 

---

- `number suspension_springDampingCompression` — 

---

- `number suspension_stabilizerConstant` — 

---

- `number torqueFactor` — 

---

- `Vector wheelOffset` — 

---

- `number wheels_brakeMaterialIndex` — Material index of braking material of the wheels. Upon braking, the wheels will be set to this material.

---

- `number wheels_damping` — 

---

- `number wheels_frictionScale` — 

---

- `number wheels_inertia` — 

---

- `number wheels_mass` — Mass of each wheel.

---

- `number wheels_materialIndex` — Material index of the wheels by default.

---

- `number wheels_radius` — Radius of the wheels.

---

- `number wheels_rotdamping` — 

---

- `number wheels_skidMaterialIndex` — Material index of skid material of the wheels. Upon skidding ( pressing Space and sliding the vehicle ), the wheels will be set to this material.

---

- `number wheels_springAdditionalLength` — 

---

## `VehicleParamsBody` `[server]`

---

The structure used by Structures/VehicleParams.

---

- `number addGravity` — Additional gravity to be applied to the vehicle

---

- `number counterTorqueFactor` — 

---

- `number keepUprightTorque` — 

---

- `Vector massCenterOverride` — Mass center override

---

- `number massOverride` — Mass override

---

- `number maxAngularVelocity` — Maximum angular velocity

---

- `number tiltForce` — 

---

- `number tiltForceHeight` — 

---

## `VehicleParamsEngine` `[server]`

---

The structure used by Structures/VehicleParams.

---

- `number autobrakeSpeedFactor` — 

---

- `number autobrakeSpeedGain` — 

---

- `number axleRatio` — This acts as the final ratio of the gearbox.

It's like a master coefficient of the gearbox.

---

- `number boostDelay` — Amount of seconds between being able to use the boost ( by pressing Shift key by default )

---

- `number boostDuration` — Duration of the boost in seconds

---

- `number boostForce` — 

---

- `number boostMaxSpeed` — Maximum speed while boosting

The Vehicle:SetVehicleParams function takes this in **miles per hour**, but Vehicle:GetVehicleParams returns this in **hammer units per second**!

In this case HU = inches, so 1 MPH is 17.6 HU/s.

---

- `number gearCount` — Amount of gears this vehicle has.

---

- `table gearRatio` — A table of numbers, of gear rations.

Table length is equal to "gearCount" member of this table.

---

- `number horsepower` — The HP amount of the vehicle

This value is used to calculate the effectively applied torque, along with ratios and `maxRPM`.

---

- `boolean isAutoTransmission` — If `true`, the gearbox shifts gears, if `false` the gearbox stays stuck to the 1st gear (gear number 0).

---

- `number maxRPM` — Maximum RPM of the vehicle.

Despite this being a maximum value, the vehicle can exceed it.

Attempts to exceed the max RPM will force the active gear ratio to be that of the 1st gear, which will provide even more torque. This is the opposite of a rev limiter. This value is only used for the calculation of the effectively applied torque.

---

- `number maxRevSpeed` — Maximum reverse speed of the vehicle

The Vehicle:SetVehicleParams function takes this in **miles per hour**, but Vehicle:GetVehicleParams returns this in **hammer units per second**!

In this case HU = inches, so 1 MPH is 17.6 HU/s.

---

- `number maxSpeed` — Maximum forward going speed of the vehicle without boosting

The Vehicle:SetVehicleParams function takes this in **miles per hour**, but Vehicle:GetVehicleParams returns this in **hammer units per second**!

In this case HU = inches, so 1 MPH is 17.6 HU/s.

---

- `number shiftDownRPM` — Amount of RPM to automatically shift one gear down

---

- `number shiftUpRPM` — Amount of RPM to automatically shift one gear up

---

- `number throttleTime` — 

---

- `boolean torqueBoost` — 

---

## `VehicleParamsSteering` `[server]`

---

The structure used by Structures/VehicleParams.

---

- `number boostSteeringRateFactor` — 

---

- `number boostSteeringRestRateFactor` — 

---

- `number brakeSteeringRateFactor` — 

---

- `number degreesBoost` — The maximum angle at which the vehicle can turn while boosting

---

- `number degreesFast` — The maximum angle at which the vehicle can turn while moving at max speed and not boosting

---

- `number degreesSlow` — The maximum angle at which the vehicle can turn while moving slowest

---

- `boolean dustCloud` — Disabled in Garry's Mod. In Half-Life 2: Episode 2 this dictates whether the vehicle should leave wheel dust effects when driving around

---

- `boolean isSkidAllowed` — Whether the vehicle is allowed to skid/drift

---

- `number powerSlideAccel` — In Hammer Units

---

- `number speedFast` — 

---

- `number speedSlow` — 

---

- `number steeringExponent` — 

---

- `number steeringRateFast` — 

---

- `number steeringRateSlow` — 

---

- `number steeringRestRateFast` — 

---

- `number steeringRestRateSlow` — 

---

- `number throttleSteeringRestRateFactor` — 

---

- `number turnThrottleReduceFast` — 

---

- `number turnThrottleReduceSlow` — 

---

## `VehicleTable` `[client/server]`

---

Table structure passed to SANDBOX:PlayerSpawnVehicle, describing a spawnable Vehicle in Sandbox gamemode.

Example usage in defined a custom spawnable vehicle:
```
list.Set( "Vehicles", "Jeep", {
-- Required information
Name = "Jeep",
Model = "models/buggy.mdl",
Class = "prop_vehicle_jeep_old",
Category = "Half-Life 2",

-- Optional information
Author = "VALVe",
Information = "The regular old jeep",

KeyValues = {
vehiclescript = "scripts/vehicles/jeep_test.txt"
}
} )
```

---

- `string Class` — Entity class name for this vehicle.

---

- `string Name` — Nice name for this vehicle, for UI purposes.

---

- `string Model` — Model of the vehicle.

---

- `table KeyValues` — A list of key-value pairs to apply to the vehicle entity.
Possible valid keys that can be set are:

| Key | Description |
|:-------:|:------------|
| `vehiclescript` | The vehicle script files contained in scripts\vehicles\ define the behaviour and handling of a vehicle.
| `limitview` | Limit vertical view of the vehicles to +/-70 degrees (90 for unlimited)
| `vehiclelocked` | Players cannot enter vehicle until it is unlocked.
| `cargovisible` | Is the Magnusson cargo hopper visible?
| `EnableGun` | Whether the Tau Cannon is enabled or disabled. Doesn't work correctly with the Episode Two jalopy model.
| `NoHazardLights`| Stops the jalopy's hazard lights from turning on and flashing when the player exits the vehicle.

---

- `number Offset` (default `nil`) — Offset away the surface player is looking at to spawn at.

---

- `table Members` (default `nil`) — Set these members on the spawned vehicle's table (Entity:GetTable) to given values.

---

- `string Author` — Author of the vehicle, for UI purposes.

---

- `string Category` (default `Other`) — Category of this vehicle, for UI purposes.

---

- `string Information` — A small description of the vehicle, for UI purposes.

---

## `VideoData` `[client/menu]`

---

Table structure used by video.Record.

---

- `string container` — The video container format.

Valid options are: `webm`, `ogg`

---

- `string video` — The video codec.

Valid options are: `vp8`, `theora`

---

- `string audio` — The audio codec.

Valid options are: `vorbis`

---

- `number quality` — The video quality

---

- `number bitrate` — The record bitrate

---

- `number fps` — Frames per second

---

- `boolean lockfps` — Lock the frame count per second

---

- `string name` — The file name for the video

---

- `number width` — The videos width

---

- `number height` — The videos height

---

## `ViewData` `[client]`

---

Table structure used for render.RenderView.

Unless stated otherwise, the default values for all these keys would be inherited from the engine's CViewSetup and do not have static representations.

---

- `Vector origin` — The view's original position

---

- `Angle angles` — The view's angles

---

- `number aspect` — Default width divided by height. Has a deprecated alias `aspectratio`.

---

- `number x` — The x position of the viewport to render in

---

- `number y` — The y position of the viewport to render in

---

- `number w` — The width of the viewport to render in

---

- `number h` — The height of the viewport to render in

---

- `boolean drawhud` (default `false`) — Draw the HUD and call the hud painting related hooks

---

- `boolean drawmonitors` (default `false`) — Draw monitors

---

- `boolean drawviewmodel` (default `true`) — The weapon's viewmodel

---

- `boolean drawviewer` (default `false`) — Whether to force draw the local player or not.

---

- `number viewmodelfov` — The viewmodel's FOV

---

- `number fov` — The main view's FOV

---

- `table ortho` — If set, renders the view orthogonally. A table with these keys:
* left
* right
* top
* bottom

---

- `number ortholeft` — Coordinate for the left clipping plane. Requires `ortho` to be set to `true`.

**Deprecated**: Use `ortho` table instead!

---

- `number orthoright` — Coordinate for the right clipping plane. Requires `ortho` to be set to `true`.

**Deprecated**: Use `ortho` table instead!

---

- `number orthotop` — Coordinate for the top clipping plane. Requires `ortho` to be set to `true`.

**Deprecated**: Use `ortho` table instead!

---

- `number orthobottom` — Coordinate for the bottom clipping plane. Requires `ortho` to be set to `true`.

**Deprecated**: Use `ortho` table instead!

---

- `number znear` — The distance of the view's origin to the near clipping plane

---

- `number zfar` — The distance of the view's origin to the far clipping plane

---

- `number znearviewmodel` — The distance of the view's origin to the near clipping plane for the viewmodel

---

- `number zfarviewmodel` — The distance of the view's origin to the far clipping plane for the viewmodel

---

- `boolean dopostprocess` (default `false`) — Currently works identically to the "bloomtone" option (it also overrides it if you set this to false).

---

- `boolean bloomtone` (default `true`) — Disables default engine bloom and pauses the "brightness changes" on HDR maps.

---

- `number{VIEW} viewid` (default `0`) — This is identifying which logical part of the scene an entity is being redered in, see Enums/VIEW.

---

- `table offcenter` — This allows you to "zoom in" on a part of the screen - for example, the top-left quarter of the screen. This is similar to how [poster splits the screen](https://garry.blog/poster-screenshots/) into separate renders.

It's a table with 4 keys, controlling what portion of the screen to draw:
* left - where the left edge starts. Natural value is 0.
* right - where the right edge ends. Natural value is equal to w (the width of the viewport).
* top - where the `bottom` edge starts. Natural value is 0.
* bottom - where the `top` edge ends. Natural value is equal to h (the height of the viewport).

Note that top and bottom are reversed.

Values outside the viewport are allowed, but not recommended - instead you should increase the view FOV.

---

## `ViewSetup` `[client]`

---

Table structure used for render.GetViewSetup.

---

- `number{VIEW} viewid` — The current view id. See Enums/VIEW.

---

- `Vector origin` — The view's origin/position

---

- `Angle angles` — The view's angles

---

- `number aspect` — Width divided by height

---

- `number x` — The x position of the viewport

---

- `number y` — The y position of the viewport

---

- `number width` — The width of the viewport

---

- `number height` — The height of the viewport

---

- `number fov` — The main view's FOV, adjusted for aspect ratio.

---

- `number fov_unscaled` — The main view's FOV as the user setting.

---

- `number fovviewmodel` — The viewmodel's FOV, adjusted for aspect ratio.

---

- `number fovviewmodel_unscaled` — The viewmodel's FOV as the user setting.

---

- `table ortho` — If the current view is orthogonal, a table with these keys:
* left
* right
* top
* bottom

Will not be present if view is not orthagonal.

---

- `number znear` — The distance of the view's origin to the near clipping plane

---

- `number zfar` — The distance of the view's origin to the far clipping plane

---

- `number znearviewmodel` — The distance of the view's origin to the near clipping plane for the viewmodel

---

- `number zfarviewmodel` — The distance of the view's origin to the far clipping plane for the viewmodel

---

- `boolean bloomtone` — Whether default engine bloom and tonemapping are enabled at this instant for this view.

---

- `boolean subrect` — Whether `m_bRenderToSubrectOfLargerScreen` if set for this view.

---

- `table offcenter` — It's a table with 4 keys, controlling what portion of the screen to draw:
* left - where the left edge starts. Natural value is 0.
* right - where the right edge ends. Natural value is equal to w (the width of the viewport).
* top - where the `bottom` edge starts. Natural value is 0.
* bottom - where the `top` edge ends. Natural value is equal to h (the height of the viewport).

Note that top and bottom are reversed.

This will not be present if offscreen rendering is not enabled for this view.

See Structures/ViewData for more info.