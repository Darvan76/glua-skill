# util

---

`util.worldpicker` is for picking an entity in the world while [GUI](gui) is open.

---


## Miembros (91)


---

### `util:AddNetworkString` `[server]`

Adds the specified string to a string table, which will cache it and network it to all clients automatically.
Whenever you want to create a net message with net.Start, you must add the name of that message as a networked string via this function.

If the passed string already exists, nothing will happen and the ID of the existing item will be returned.

Each unique network name needs to be pooled once - do not put this function call into any other functions if you're using a constant string. Preferable place for this function is in a serverside lua file, or in a shared file with the net.Receive function.

The string table used for this function does not interfere with the engine string tables and has 4095 slots.
This limit is shared among all entities, SetNW* and SetGlobal* functions. If you exceed the limit, you cannot create new variables, and you will get the following warning:
```lua
Warning:  Table networkstring is full, can't add [key]
```
Existing variables will still get updated without the warning. You can check the limit by counting up until util.NetworkIDToString returns nil

**Argumentos:**

- `string str` — Adds the specified string to the string table.

**Retorna:**

- `number` — The id of the string that was added to the string table.
Same as calling util.NetworkStringToID.

---

### `util:AimVector` `[client/menu/server]`

Function used to calculate aim vector from 2D screen position. It is used in SuperDOF calculate Distance.

Essentially a generic version of gui.ScreenToVector.

**Argumentos:**

- `Angle ViewAngles` — View angles
- `number ViewFOV` — View Field of View
- `number x` — Mouse X position
- `number y` — Mouse Y position
- `number scrWidth` — Screen width
- `number scrHeight` — Screen height

**Retorna:**

- `Vector` — Calculated aim vector

---

### `util:Base64Decode` `[client/menu/server]`

Decodes the specified string from base64.

**Argumentos:**

- `string str` — String to decode.

**Retorna:**

- `string` — The raw bytes of the decoded string.

---

### `util:Base64Encode` `[client/menu/server]`

Encodes the specified string to base64.

Unless disabled with the `inline` argument, the Base64 returned is compliant to the RFC 2045 standard. **This means it will have a line break after every 76th character.**

**Argumentos:**

- `string str` — String to encode.
- `boolean inline` = `false` — `true` to disable RFC 2045 compliance (newline every 76th character)

**Retorna:**

- `string` — Base 64 encoded string.

---

### `util:BlastDamage` `[server]`

Applies explosion damage to all entities in the specified radius. Performs block checking.

**Argumentos:**

- `Entity inflictor` — The entity that caused the damage.
- `Entity attacker` — The entity that attacked.
- `Vector damageOrigin` — The center of the explosion
- `number damageRadius` — The radius in which entities will be damaged.
- `number damage` — The amount of damage to be applied.

**Retorna:**

*(sin retorno)*

---

### `util:BlastDamageInfo` `[server]`

Applies spherical damage based on damage info to all entities in the specified radius.

**Argumentos:**

- `CTakeDamageInfo dmg` — The information about the damage
- `Vector damageOrigin` — Center of the spherical damage
- `number damageRadius` — The radius in which entities will be damaged.

**Retorna:**

*(sin retorno)*

---

### `util:CRC` `[client/server]`

Generates the [CRC Checksum](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) of the specified string.

This is NOT a hashing function. It is a checksum, typically used for error detection/data corruption detection. It is possible for this function to generate "collisions", where two different strings will produce the same CRC. If you need a hashing function, use util.SHA256.

**Argumentos:**

- `string stringToChecksum` — The string to calculate the checksum of.

**Retorna:**

- `string` — The unsigned 32 bit checksum.

---

### `util:Compress` `[client/menu/server]`

Compresses the given string using the [LZMA](https://en.wikipedia.org/wiki/LZMA) algorithm.

Use with net.WriteData and net.ReadData for networking and  util.Decompress to decompress the data.

The output of this function will have the uncompressed size of the data prepended to it as an 8-byte little-endian integer. [Source](https://github.com/garrynewman/bootil/blob/beb4cec8ad29533965491b767b177dc549e62d23/src/Bootil/Utility/CompressionLZMA.cpp#L56-L63)

You may therefore experience issues using the output of this function **_outside of Garry's Mod_**. If you need to do this, you will need to manually strip the first 8 bytes from the compressed output, or use third-party tools such as [gmod-lzma](https://github.com/WilliamVenner/gmod-lzma-rs) to decompress the output instead.

**Argumentos:**

- `string str` — String to compress.

**Retorna:**

- `string` — The compressed string, or an empty string if the input string was zero length ("").

---

### `util:DateStamp` `[client/menu/server]`

Returns the current date formatted like '2012-10-31 18-00-00'

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — date

*Fuente: `lua/includes/extensions/util.lua:98`*

---

### `util:Decal` `[client/server]`

Performs a trace and paints a decal to the surface hit.

**Argumentos:**

- `string name` — The name of the decal to paint.
- `Vector start` — The start of the trace.
- `Vector end` — The end of the trace.
- `Entity filter` = `NULL` — If set, the decal will not be able to be placed on given entity. Can also be a table of entities.

**Retorna:**

*(sin retorno)*

---

### `util:DecalEx` `[client]`

Performs a trace and paints a decal to the surface hit.

This function has trouble spanning across multiple brushes on the map.

**Argumentos:**

- `IMaterial material` — The name of the decal to paint. Can be retrieved with util.DecalMaterial.
- `Entity ent` — The entity to apply the decal to
- `Vector position` — The position of the decal.
- `Vector normal` — The direction of the decal.
- `Color color` — The color of the decal. Uses Color.

This only works when used on a brush model and only if the decal material has set `$vertexcolor` to `1`.
- `number w` — The width scale of the decal.
- `number h` — The height scale of the decal.

**Retorna:**

*(sin retorno)*

---

### `util:DecalMaterial` `[client/server]`

Gets the full material path by the decal name. Used with util.DecalEx.

If decal specifies multiple materials, a random one will be chosen.

**Argumentos:**

- `string decalName` — Name of the decal.

**Retorna:**

- `string` — Material path of the decal.

---

### `util:Decompress` `[client/menu/server]`

Decompresses the given string using [LZMA](https://en.wikipedia.org/wiki/LZMA) algorithm. Used to decompress strings previously compressed with util.Compress.

When reading user data, always try to specify `maxSize` argument, otherwise the server can be [decompression bombed](https://en.wikipedia.org/wiki/Zip_bomb) with bad data that will fill up all Lua memory
This function expects the compressed input data to have the uncompressed size of the data prepended to it as an 8-byte little-endian integer. [Source](https://github.com/garrynewman/bootil/blob/beb4cec8ad29533965491b767b177dc549e62d23/src/Bootil/Utility/CompressionLZMA.cpp#L101)

If your compressed input data was compressed by util.Compress, you don't need to worry about this - the uncompressed size of the data is already prepended to its output.

However, if your compressed data was produced using standard tools **_outside of Garry's Mod_**, you will need to manually prepend the length of the uncompressed data to its compressed form as an 8-byte little endian integer.

**Argumentos:**

- `string compressedString` — The compressed string to decompress.
- `number maxSize` = `nil` — The maximum size of uncompressed data in bytes, if greater it fails.

**Retorna:**

- `string|nil` — The original, decompressed string or `nil` on failure or invalid input. Also returns empty string if the input string was zero length ("").

---

### `util:DistanceToLine` `[client/server]`

Gets the distance between a line and a point in 3d space.

**Argumentos:**

- `Vector lineStart` — Start of the line.
- `Vector lineEnd` — End of the line.
- `Vector pointPos` — The position of the point.

**Retorna:**

- `number` — Distance from line.
- `Vector` — Nearest point on line.
- `number` — Distance along line from start.

---

### `util:Effect` `[client/server]`

Creates an effect with the specified data.

For Orange Box `.pcf` particles, see Global.ParticleEffect, Global.ParticleEffectAttach and  Global.CreateParticleSystem.

When dispatching an effect from the server, some values may be clamped for networking optimizations. Visit the Set accessors on CEffectData to see which ones are affected.

You will need to couple this function with Global.IsFirstTimePredicted if you want to use it in a Prediction.

**Argumentos:**

- `string effectName` — The name of the effect to create.

You can find a list of Default_Effects. You can create your own in LUA, [example effects can be found here](https://github.com/Facepunch/garrysmod/tree/master/garrysmod/gamemodes/sandbox/entities/effects) and [here](https://github.com/Facepunch/garrysmod/tree/master/garrysmod/gamemodes/base/entities/effects).

If you use this function with Lua effects more than 2048 times in a single frame,

you will get errors: `Broke possible Lua Effect creation infinite loop` and `Too many Lua Effects (2049)! Are you killing them properly?`.
- `CEffectData effectData` — The effect data describing the effect.
- `boolean allowOverride` = `true` — Whether Lua-defined effects should override engine-defined effects with the same name for this/single function call.
- `boolean|CRecipientFilter ignorePredictionOrRecipientFilter` = `nil` — Can either be a boolean to ignore the prediction filter or a CRecipientFilter.

Set this to true if you wish to call this function in multiplayer from server.

**Retorna:**

*(sin retorno)*

---

### `util:FilterText` `[client]`

Filters given text using Steam's filtering system. The function will obey local client's Steam settings for chat filtering:

In some cases, especially in a chatbox, messages from some players may return an empty string if the context argument used for filtering is `TEXT_FILTER_CHAT` and [if the local player has blocked the sender of the message on Steam](https://github.com/Facepunch/garrysmod-issues/issues/5161#issuecomment-1035153941).

**Argumentos:**

- `string str` — String to filter.
- `number context` = `TEXT_FILTER_UNKNOWN` — Filtering context. See Enums/TEXT_FILTER.
- `Player player` = `nil` — Used to determine if the text should be filtered according to local user's Steam chat filtering settings.

**Retorna:**

- `string` — The filtered text based on given settings.

The maximum length of the string is 4095 bytes.

---

### `util:FullPathToRelative_Menu` `[menu]`

Converts the full path of the given file to a relative path.
You can use util.RelativePathToFull_Menu to convert the relative path back to the full path.

**Argumentos:**

- `string fullPath` — The **full** path to a file.
- `string fsPath` = `MOD` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `string relativePath` — The relative path to the given file.

---

### `util:GetActivityIDByName` `[client/server]`

Returns the ID of a custom model activity. This is useful for models that define custom ones.

See util.GetActivityNameByID for a function that does the opposite.

**Argumentos:**

- `string ` — The name of an activity, as defined in the model's `.qc` at compile time.

**Retorna:**

- `number id` — The ID of the activity. See also Enums/ACT.

---

### `util:GetActivityNameByID` `[client/server]`

Returns a name for given activity ID. This is useful for models that define custom activities.

See util.GetActivityIDByName for a function that does the opposite.

**Argumentos:**

- `number id` — The ID of an activity from some hook. See also Enums/ACT.

**Retorna:**

- `string` — The associated name with given activity ID.

---

### `util:GetAnimEventIDByName` `[client/server]`

Returns the ID of a custom model animation event. This is useful for models that define custom animation events.

See util.GetAnimEventNameByID for a function that does the opposite.

**Argumentos:**

- `string ` — The name of an model animation event, as defined in the model's `.qc` at compile time.

**Retorna:**

- `number id` — The ID of an animation event, typically for usage with ENTITY:HandleAnimEvent.

---

### `util:GetAnimEventNameByID` `[client/server]`

Returns a name for given automatically generated numerical animation event ID. This is useful for models that define custom animation events.

See util.GetAnimEventIDByName for a function that does the opposite.

**Argumentos:**

- `number id` — The ID of an animation event, typically from ENTITY:HandleAnimEvent.

**Retorna:**

- `string` — The associated name with given event ID.

---

### `util:GetModelInfo` `[client/server]`

Returns a table containing the info about the model. The model will be loaded and cached if it was not previously.

See also util.GetModelMeshes

This function will silently fail if used on models with following strings in them:
* _shared
* _anims
* _gestures
* _anim
* _postures
* _gst
* _pst
* _shd
* _ss
* _anm
* _include

**Argumentos:**

- `string mdl` — The model path to retrieve information about.

**Retorna:**

- `table{ModelInfo}` — The model info. See Structures/ModelInfo for details.

---

### `util:GetModelMeshes` `[client/server]`

Retrieves vertex, triangle, and bone data for the visual meshes of a given model.

This does not work on brush models (Models with names in the format `*number`)

**Argumentos:**

- `string model` — The full path to the model to get the visual meshes of.
- `number lod` = `0` — Which of the model's Level of Detail (LOD) models to retrieve.

`0` is the best quality with higher numbers progressively lowering the quality.
- `string|number bodygroupMask` = `0` — The combination of bodygroups to retrieve meshes for. This can also be a specially formatted bitflag.

For more information, see Entity:SetBodyGroups.
- `number skin` = `0` — Skin index. Affects the `.material` of Structures/ModelMeshData.

For more information, see Entity:GetSkin.

**Retorna:**

- `table<Structures/ModelMeshData> modelMeshes` — Each index in this table corresponds to a mesh within the model passed as an argument to this function.

The mesh data is raw, and is not transformed via bone transformations. That's what the second return value is for.
- `table<Structures/BoneBindPose> modelBindPoses` — This tables indices are bone IDs for the Structures/BoneBindPose stored at each index.

---

### `util:GetPData` `[client/menu/server]`

Gets persistent data of an offline player using their SteamID.

See also Player:GetPData for a more convenient version of this function for online players, util.RemovePData and
util.SetPData for the other accompanying functions.

This function internally uses util.SteamIDTo64, it previously utilized Player:UniqueID which can cause collisions (two or more players sharing the same PData entry). This function now only uses the old method as a fallback if the name isn't found.

**Argumentos:**

- `string steamID` — SteamID of the player, in the `STEAM_0:0:0` format. See Player:SteamID.
- `string name` — Variable name to get the value of
- `any default` — The default value, in case there's nothing stored

**Retorna:**

- `string` — The stored value

*Fuente: `lua/includes/extensions/util.lua:333`*

---

### `util:GetPixelVisibleHandle` `[client]`

Creates a new PixVis handle. See util.PixelVisible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `pixelvis_handle_t` — PixVis

---

### `util:GetPlayerTrace` `[client/menu/server]`

Utility function to quickly generate a trace table that starts at the players view position, and ends `32768` units along a specified direction.

For usage with util.TraceLine and similar functions.

**Argumentos:**

- `Player ply` — The player the trace should be based on
- `Vector dir` = `ply:GetAimVector()` — The direction of the trace. By default falls back to the direction the player is looking in.

**Retorna:**

- `table{Trace}` — The trace data. See Structures/Trace

*Fuente: `lua/includes/extensions/util.lua:32`*

---

### `util:GetSunInfo` `[client]`

Gets information about the sun position and obstruction or nil if there is no sun.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The sun info. See Structures/SunInfo

---

### `util:GetSurfaceData` `[client/server]`

Returns data of a [surface property](https://developer.valvesoftware.com/wiki/Material_surface_properties) at given ID. New surface properties can be added via physenv.AddSurfaceData.

**Argumentos:**

- `number id` — Surface property ID. You can get it from Structures/TraceResult or using util.GetSurfaceIndex.

**Retorna:**

- `table{SurfacePropertyData}` — The data or no value if there is no valid surface property at given index.

---

### `util:GetSurfaceIndex` `[client/server]`

Returns the matching surface property index for the given surface property name.

See also util.GetSurfaceData and util.GetSurfacePropName for opposite function.

**Argumentos:**

- `string surfaceName` — The name of the surface.

**Retorna:**

- `number` — The surface property index, or -1 if name doesn't correspond to a valid surface property.

---

### `util:GetSurfacePropName` `[client/server]`

Returns the name of a surface property at given ID.

See also util.GetSurfaceData and util.GetSurfaceIndex for opposite function.

**Argumentos:**

- `number id` — Surface property ID. You can get it from Structures/TraceResult.

**Retorna:**

- `string` — The name or an empty string if there is no valid surface property at given index.

---

### `util:GetUserGroups` `[server]`

Returns a table of all SteamIDs that have a usergroup.

This returns the original usergroups table, changes done to this table are not retroactive and will only affect newly connected users

This returns only groups that are registered in the **settings/users.txt** file of your server.

In order to get the usergroup of a connected player, please use Player:GetUserGroup instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of users where the key is the SteamID of the user and the value is a table with 2 fields:
* string name - Player Steam name
* string group - Player usergroup name

*Fuente: `lua/includes/extensions/player_auth.lua:99`*

---

### `util:IntersectRayWithOBB` `[client/server]`

Performs a Ray-OBB (Orientated Bounding Box) intersection and returns position, normal and the fraction if there was an intersection.

**Argumentos:**

- `Vector rayStart` — Origin or start position of the ray.
- `Vector rayDelta` — The ray vector itself, the ray end point relative to the start point. Can be implemented as `direction * distance`

Note that in this implementation, the ray is not infinite - it's only a segment.
- `Vector boxOrigin` — The center of the box.
- `Angle boxAngles` — The angle of the box.
- `Vector boxMins` — The min position of the box.
- `Vector boxMaxs` — The max position of the box.

**Retorna:**

- `Vector` — Hit position, nil if not hit.
- `Vector` — Normal/direction vector, nil if not hit.
- `number` — Fraction of trace used, nil if not hit.

---

### `util:IntersectRayWithPlane` `[client/server]`

Performs a [ray-plane intersection](https://en.wikipedia.org/wiki/Line%E2%80%93plane_intersection) and returns the hit position or nil.

**Argumentos:**

- `Vector rayOrigin` — Origin/start position of the ray.
- `Vector rayDirection` — The direction of the ray.
- `Vector planePosition` — Any position of the plane.
- `Vector planeNormal` — The normal vector of the plane.

**Retorna:**

- `Vector` — The position of intersection, nil if not hit.

---

### `util:IntersectRayWithSphere` `[client/server]`

Performs a ray-sphere intersection and returns the intersection positions or nil.

**Argumentos:**

- `Vector rayOrigin` — Origin/start position of the ray.
- `Vector rayDelta` — The end position of the ray relative to the start position. Equivalent of `direction * distance`.
- `Vector spherePosition` — Any position of the sphere.
- `number sphereRadius` — The radius of the sphere.

**Retorna:**

- `number` — The first intersection position along the ray, or `nil` if there is no intersection.
- `number` — The second intersection position along the ray, or `nil` if there is no intersection.

---

### `util:IsBinaryModuleInstalled` `[client/menu/server]`

Returns whether a binary module is installed and is resolvable by Global.require.

**Argumentos:**

- `string name` — Name of the binary module, exactly the same as you would enter it as the argument to Global.require.

**Retorna:**

- `boolean` — Whether the binary module is installed and Global.require can resolve it.

*Fuente: `lua/includes/extensions/util.lua:394`*

---

### `util:IsBoxIntersectingBox` `[client/server]`

Performs a box-box intersection and returns whether there was an intersection or not.

**Argumentos:**

- `Vector boxMin` — The minimum extents of the Axis-Aligned box.
- `Vector boxMax` — The maximum extents of the Axis-Aligned box.
- `Vector box2Min` — The minimum extents of the second Axis-Aligned box.
- `Vector box2Max` — The maximum extents of the second Axis-Aligned box.

**Retorna:**

- `boolean` — `true` if there is an intersection, `false` otherwise.

---

### `util:IsBoxIntersectingSphere` `[client/server]`

Performs a box-sphere intersection and returns whether there was an intersection or not.

**Argumentos:**

- `Vector boxMin` — The minimum extents of the Axis-Aligned box.
- `Vector boxMax` — The maximum extents of the Axis-Aligned box.
- `Vector shpere2Position` — Any position of the sphere.
- `number sphere2Radius` — The radius of the sphere.

**Retorna:**

- `boolean` — `true` if there is an intersection, `false` otherwise.

---

### `util:IsInWorld` `[server]`

Checks if a certain position is within the world bounds.

**Argumentos:**

- `Vector position` — Position to check.

**Retorna:**

- `boolean` — Whether the vector is in world.

---

### `util:IsModelLoaded` `[client/server]`

Checks if the model is loaded in the game.

**Argumentos:**

- `string modelName` — Name/Path of the model to check.

**Retorna:**

- `boolean` — Returns true if the model is loaded in the game; otherwise false.

---

### `util:IsOBBIntersectingOBB` `[client/server]`

Performs OBB on OBB intersection test.

**Argumentos:**

- `Vector box1Origin` — The center of the first box.
- `Angle box1Angles` — The angles of the first box.
- `Vector box1Mins` — The min position of the first box.
- `Vector box1Maxs` — The max position of the first box.
- `Vector box2Origin` — The center of the second box.
- `Angle box2Angles` — The angles of the second box.
- `Vector box2Mins` — The min position of the second box.
- `Vector box2Maxs` — The max position of the second box.
- `number tolerance` — Tolerance for error. Leave at 0 if unsure.

**Retorna:**

- `boolean` — Whether there is an intersection.

---

### `util:IsPointInCone` `[client/server]`

Returns whether a point is within a cone or not.

**Argumentos:**

- `Vector point` — The position of the point to test.
- `Vector coneOrigin` — The position of the cone tip.
- `Vector coneAxis` — The direction of the cone.
- `number coneSine` — The sine of the cone's angle.
- `number coneLength` — Length of the cone's axis.

**Retorna:**

- `boolean` — `true` if the point is within the cone, `false` otherwise.

---

### `util:IsRayIntersectingRay` `[client/server]`

Performs a ray-ray intersection and returns whether there was an intersection or not.

**Argumentos:**

- `Vector ray1Start` — Start position of the first ray.
- `Vector ray1End` — End position of the first ray.
- `Vector ray2Start` — Start position of the second ray.
- `Vector ray2End` — End position of the second ray.

**Retorna:**

- `boolean` — `true` if there is an intersection, `false` otherwise.
- `number` — Distance from start of ray 1 to the intersection, if there was one.
- `number` — Distance from start of ray 2 to the intersection, if there was one.

---

### `util:IsSkyboxVisibleFromPoint` `[client]`

Check whether the skybox is visible from the point specified.

This will always return true in fullbright maps.

**Argumentos:**

- `Vector position` — The position to check the skybox visibility from.

**Retorna:**

- `boolean` — Whether the skybox is visible from the position.

---

### `util:IsSphereIntersectingCone` `[client/server]`

Returns whether a sphere is intersecting a cone or not.

**Argumentos:**

- `Vector sphereCenter` — The center position of the sphere to test.
- `number sphereRadius` — The radius of the sphere to test.
- `Vector coneOrigin` — The position of the cone tip.
- `Vector coneAxis` — The direction of the cone.
- `number coneSine` — The math.sin of the cone's angle.
- `number coneCosine` — The math.cos of the cone's angle.

**Retorna:**

- `boolean` — `true` if the sphere intersects the cone, `false` otherwise.

---

### `util:IsSphereIntersectingSphere` `[client/server]`

Performs a sphere-sphere intersection and returns whether there was an intersection or not.

**Argumentos:**

- `Vector sphere1Position` — Any position of the first sphere.
- `number sphere1Radius` — The radius of the first sphere.
- `Vector sphere2Position` — Any position of the second sphere.
- `number sphere2Radius` — The radius of the second sphere.

**Retorna:**

- `boolean` — `true` if there is an intersection, `false` otherwise.

---

### `util:IsValidModel` `[client/server]`

Checks if the specified model is valid.

A model is considered invalid in following cases:
* Starts with a space or **maps**
* Doesn't start with **models**
* Contains any of the following:
* `_gestures`
* `_animations`
* `_postures`
* `_gst`
* `_pst`
* `_shd`
* `_ss`
* `_anm`
* `.bsp`
* `cs_fix`
* If the model isn't precached on the server, AND if the model file doesn't exist on disk
* If precache failed
* Model is the error model

Running this function will also precache the model.

**Argumentos:**

- `string modelName` — Name/Path of the model to check.

**Retorna:**

- `boolean` — Whether the model is valid or not. Returns false clientside if the model is not precached by the server.

---

### `util:IsValidPhysicsObject` `[client/server]`

Checks whether the given numbered physics object of the given entity is valid or not. Most useful for ragdolls.

**Argumentos:**

- `Entity ent` — The entity to take.
- `number physobj` — Number of the physics object to test.

**Retorna:**

- `boolean` — `true` that's valid, `false` otherwise.

*Fuente: `lua/includes/extensions/util.lua:9`*

---

### `util:IsValidProp` `[client/server]`

Checks if the specified prop is valid (has valid physics object).

**Argumentos:**

- `string modelName` — Name/Path of the model to check.

**Retorna:**

- `boolean` — Returns true if the specified prop is valid; otherwise false.

---

### `util:IsValidRagdoll` `[client/server]`

Checks if the specified model name points to a valid ragdoll.

**Argumentos:**

- `string ragdollName` — Name/Path of the ragdoll model to check.

**Retorna:**

- `boolean` — Returns true if the specified model name points to a valid ragdoll; otherwise false.

---

### `util:JSONToTable` `[client/menu/server]`

Converts a JSON string to a Lua table. It supports comments and trailing commas.

See util.TableToJSON for the opposite function.

Colors will not have the color metatable.

**Argumentos:**

- `string json` — The JSON string to convert.
- `boolean ignoreLimits` = `false` — ignore the depth and breadth limits, **use at your own risk!**.
If this is false, there is a limit of 15,000 keys total.
- `boolean ignoreConversions` = `false` — ignore string to number conversions for table keys.

if this is false, keys are converted to numbers wherever possible. This means using Player:SteamID64 as keys won't work.

**Retorna:**

- `table|nil` — The table containing converted information. Returns `nil` on failure.

---

### `util:KeyValuesToTable` `[client/menu/server]`

Converts a Valve KeyValue string (typically from util.TableToKeyValues) to a Lua table.

Due to how tables work in Lua, keys will not repeat within a table. See util.KeyValuesToTablePreserveOrder for alternative.

**Argumentos:**

- `string keyValues` — The KeyValue string to convert.
- `boolean usesEscapeSequences` = `false` — If set to true, will replace `\t`, `\n`, `\"` and `\\` in the input text with their escaped variants
- `boolean preserveKeyCase` = `false` — Whether we should preserve key case (may fail) or not (always lowercase)

**Retorna:**

- `table` — The converted table

---

### `util:KeyValuesToTablePreserveOrder` `[client/menu/server]`

Similar to util.KeyValuesToTable, but it also preserves order of keys (since Lua dictionary-style tables do not guarantee a specific order), and allows handling of repeated keys. (since each key can only appear once in a dictionary data structure)

**Argumentos:**

- `string keyValues` — The Valve KeyValue formatted text.
- `boolean usesEscapeSequences` = `false` — If set to true, will replace `\t`, `\n`, `\"` and `\\` in the input text with their escaped variants
- `boolean preserveKeyCase` = `false` — Whether we should preserve key case (may fail) or not (always lowercase)

**Retorna:**

- `table` — The output table

---

### `util:LocalToWorld` `[client/server]`

A convenience function around LocalToWorld-related functions.

If Entity:EntIndex returns `0`, the function will return the passed `lpos`.

**Argumentos:**

- `Entity ent` — The entity to take.
- `Vector lpos` — A local space vector.
- `number bone` = `0` — Actually to be treated as the number corresponding to a specific PhysObj of the entity.

If that specific physics object is valid, then PhysObj:LocalToWorld is used.

Otherwise, Entity:LocalToWorld.

**Retorna:**

- `Vector` — The corresponding worldspace vector.

*Fuente: `lua/includes/extensions/util.lua:76`*

---

### `util:MD5` `[client/server]`

Generates the [MD5 hash](https://en.wikipedia.org/wiki/MD5) of the specified string.
MD5 is considered cryptographically broken and is known to be vulnerable to a variety of attacks including duplicate return values. If security or duplicate returns is a concern, use util.SHA256.

**Argumentos:**

- `string stringToHash` — The string to calculate the MD5 hash of.

**Retorna:**

- `string` — The MD5 hash of the string in hexadecimal form.

---

### `util:NetworkIDToString` `[client/server]`

Returns the networked string associated with the given ID from the string table.

**Argumentos:**

- `number stringTableID` — ID to get the associated string from.

**Retorna:**

- `string` — The networked string, or nil if it wasn't found.

---

### `util:NetworkStringToID` `[client/server]`

Returns the networked ID associated with the given string from the string table.

**Argumentos:**

- `string networkString` — String to get the associated networked ID from.

**Retorna:**

- `number` — The networked ID of the string, or 0 if it hasn't been networked with util.AddNetworkString.

---

### `util:NiceFloat` `[client/menu/server]`

Formats a float by stripping off extra `0's` and `.'s`.

**Argumentos:**

- `number float` — The float to format.

**Retorna:**

- `string` — Formatted float.

*Fuente: `lua/includes/extensions/util.lua:147`*

---

### `util:ParticleTracer` `[client/server]`

Creates an orange box (.pcf) tracer effect with the given parameters. See util.ParticleTracerEx for version with additional arguments.

Internally uses `ParticleTracer` engine effect. (util.Effect) which then spawns in `ParticleEffect` effect.
The default bullet effect is not in .pcf format, therefore it is not used with util.ParticleTracer.  Consider utilizing util.Effect instead

**Argumentos:**

- `string name` — The name of the .pcf particle effect to use for the tracer.

Control Point 0 is the start location. Control Point 1 is the end pos.
- `Vector startPos` — The start position of the tracer.
- `Vector endPos` — The end position of the tracer.
- `boolean doWhiz` — Whether to play the hit near-miss (whiz) sound.

**Retorna:**

*(sin retorno)*

---

### `util:ParticleTracerEx` `[client/server]`

Creates a tracer effect with the given parameters. Expanded version of util.ParticleTracer.

**Argumentos:**

- `string name` — The name of the tracer effect.
- `Vector startPos` — The start position of the tracer.
- `Vector endPos` — The end position of the tracer.
- `boolean doWhiz` — Play the hit miss(whiz) sound.
- `number entityIndex` — Entity index of the emitting entity.
- `number attachmentIndex` — Attachment index to be used as origin.

**Retorna:**

*(sin retorno)*

---

### `util:PixelVisible` `[client]`

Returns the visibility of a square that is always pointed at the camera in the world-space.

This is typically used for in-game sprites or "billboards". (render.DrawSprite)

**Argumentos:**

- `Vector position` — The center of the visibility test.
- `number size` — The size of the square to check for visibility.
- `pixelvis_handle_t PixVis` — The PixVis handle created with util.GetPixelVisibleHandle.
Don't use the same handle twice per tick or it will give unpredictable results.

**Retorna:**

- `number` — Visibility percentage, in range of `[0-1]`. `0` when none of the area is visible, `0.5` when half the area is visible, `1` when all of it is visible, etc.

---

### `util:PointContents` `[client/server]`

Returns the contents of the position specified.
This function will sample only the world environments. It can be used to check if Entity:GetPos is underwater for example unlike Entity:WaterLevel which works for players only.

**Argumentos:**

- `Vector position` — Position to get the contents sample from.

**Retorna:**

- `number{CONTENTS}` — Contents bitflag, see Enums/CONTENTS

---

### `util:PrecacheModel` `[client/server]`

Precaches a model for later use. Model is cached after being loaded once.

Modelprecache is limited to 8192 unique models. When it reaches the limit the game will crash.

Does nothing on the client.

**Argumentos:**

- `string modelName` — The model to precache.

**Retorna:**

*(sin retorno)*

---

### `util:PrecacheSound` `[client/server]`

Precaches a sound for later use. Sound is cached after being loaded once.
Soundcache is limited to 16384 unique sounds on the server. Due to this fact this function is disabled on purpose, as exceeding the limit causes the server to shutdown.

Ultimately does nothing on client, and only works with sound scripts, not direct paths.

**Argumentos:**

- `string soundName` — The sound to precache.

**Retorna:**

*(sin retorno)*

---

### `util:QuickTrace` `[client/menu/server]`

Performs a trace with the given origin, direction, and filter.

This function will throw an error in the menu realm because it internally uses util.TraceLine which doesn't exist in the menu realm and thus error.

**Argumentos:**

- `Vector origin` — The origin of the trace.
- `Vector dir` — The direction of the trace times the distance of the trace. This is added to the origin to determine the endpos.
- `Entity|table<Entity>|table<string>|function filter` = `nil` — Entity which should be ignored by the trace. Can also be a table of entities or a function - see Structures/Trace.

**Retorna:**

- `table{TraceResult}` — Trace result. See Structures/TraceResult.

*Fuente: `lua/includes/extensions/util.lua:52`*

---

### `util:RelativePathToFull_Menu` `[menu]`

Converts the relative path of a given file to the full path on disk.
You can use util.FullPathToRelative_Menu to convert the full path back to the relative path.

**Argumentos:**

- `string filePath` — The relative path of a file, for example: `addons/[Name].gma`
- `string mountPath` = `MOD` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `string fullpath` — The full path to the file.

---

### `util:RelativePathToGMA_Menu` `[menu]`

Returns which Workshop addon the given file belongs to.

**Argumentos:**

- `string filePath` — The relative path to a file, such as `materials/myMaterial.vmt`.

**Retorna:**

- `table addonInfo` — The info about owner addon. Will return nil if the file doesn't belong to an addon. Table Structure:
```lua
Author	=	[Addon Author]
File	=	[Steam folder]\workshop\content\4000\[Addon ID]/[GMA Name].gma
ID	=	[Addon ID]
Title	=	[Addon Title]
```

---

### `util:RemoveDecalsAt` `[client]`

Removes world decals at given position, in given radius. Does not remove decals on models!

**Argumentos:**

- `Vector pos` — The position at which to remove decals.
- `number distance` — Radius of the sphere to remove decals in.
- `number limit` = `0` — If set to above 0, only remove this many decals.
- `boolean permanent` = `false` — Whether to remove map-spawned decals (`true`), or only gameplay-spawned decals
such as bullet holes or anything placed by util.Decal and similar(`false`)

**Retorna:**

- `number removed` — How many decals were removed.

---

### `util:RemovePData` `[client/menu/server]`

Removes persistent data of an offline player using their SteamID.

See also Player:RemovePData for a more convenient version of this function for online players, util.SetPData and
util.GetPData for the other accompanying functions.

This function internally uses util.SteamIDTo64, it previously utilized Player:UniqueID which can cause collisions (two or more players sharing the same PData entry). This function now tries to remove both old and new entries.

**Argumentos:**

- `string steamID` — SteamID of the player to remove data of, in the `STEAM_0:0:0` format. See Player:SteamID.
- `string name` — Variable name to remove

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/util.lua:370`*

---

### `util:SHA1` `[client/server]`

Generates the [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1) of the specified string.
SHA-1 is considered cryptographically broken and is known to be vulnerable to a variety of attacks. If security is a concern, use util.SHA256.

**Argumentos:**

- `string stringToHash` — The string to calculate the SHA-1 hash of.

**Retorna:**

- `string` — The SHA-1 hash of the string in hexadecimal form.

---

### `util:SHA256` `[client/server]`

Generates the [SHA-256 hash](https://en.wikipedia.org/wiki/SHA-2) of the specified string. This is mostly unique and is astronomically unlikely to return the same hash for a different string unlike util.CRC or util.MD5 which are both much more vulnerable to duplicate returns.

**Argumentos:**

- `string stringToHash` — The string to calculate the SHA-256 hash of.

**Retorna:**

- `string` — The SHA-256 hash of the string in hexadecimal form.

---

### `util:ScreenShake` `[client/server]`

Makes the screen shake.

The screen shake effect is rendered by modifying the view origin on the client. If you override the view origin in GM:CalcView you may not be able to see the shake effect.

**Argumentos:**

- `Vector pos` — The origin of the effect.

Used serverside only, to determine which clients the event should be networked to.
- `number amplitude` — The strength of the effect. How far away from its origin the camera will move while shaking.
- `number frequency` — How many times per second to change the direction of the camera wobble. 40 is generally enough; values higher are hardly distinguishable.
- `number duration` — The duration of the effect in seconds.
- `number radius` — The range from the origin within which views will be affected, in Hammer units.

This is used when networking the event to clients only.
- `boolean airshake` = `false` — Whether players in the air should also be affected.

Used serverside only to determine which clients to send the event to.
- `CRecipientFilter filter` = `nil` — If set, will only network the screen shake event to players present in the filter.

**Retorna:**

*(sin retorno)*

---

### `util:SetPData` `[client/menu/server]`

Sets persistent data for offline player using their SteamID.

See also Player:SetPData for a more convenient version of this function for online players, util.RemovePData and
util.GetPData for the other accompanying functions.
This function internally uses util.SteamIDTo64, it previously utilized Player:UniqueID which could have caused collisions (two or more players sharing the same PData entry).

**Argumentos:**

- `string steamID` — SteamID of the player, in the `STEAM_0:0:0` format. See Player:SteamID.
- `string name` — Variable name to store the value in.
- `any value` — The value to store.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/util.lua:359`*

---

### `util:SharedRandom` `[client/server]`

Generates a random float value that should be the same on client and server.

This function is best used in a prediction.

This uses a different method of obtaining random numbers and is unaffected by math.randomseed. Instead it uses an internal seed that is based on the player's current predicted command and is fixed to a value of -1 outside of prediction.

**Argumentos:**

- `string uniqueName` — The seed for the random value
- `number min` — The minimum value of the random range
- `number max` — The maximum value of the random range
- `number additionalSeed` = `0` — The additional seed

**Retorna:**

- `number` — The random float value

---

### `util:SpriteTrail` `[server]`

Adds a trail to the specified entity.

**Argumentos:**

- `Entity ent` — Entity to attach trail to
- `number attachmentID` — Attachment ID of the entities model to attach trail to. If you are not sure, set this to 0
- `Color color` — Color of the trail
- `boolean additive` — Should the trail be additive or not
- `number startWidth` — Start width of the trail
- `number endWidth` — End width of the trail
- `number lifetime` — How long it takes to transition from startWidth to endWidth
- `number textureRes` — The resolution of trails texture. A good value can be calculated using this formula: 1 / ( startWidth + endWidth ) * 0.5
- `string texture` — Path to the texture to use as a trail.

**Retorna:**

- `Entity` — Entity of created trail ([env_spritetrail](https://developer.valvesoftware.com/wiki/Env_spritetrail))

---

### `util:Stack` `[client/menu/server]`

Returns a new Stack object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Stack` — A brand new stack object.

*Fuente: `lua/includes/extensions/util.lua:324`*

---

### `util:SteamIDFrom64` `[client/server]`

Given a Player:SteamID64 will return a Player:SteamID style Steam ID.

This operation induces data loss. Not all fields of a [64bit SteamID](https://developer.valvesoftware.com/wiki/SteamID) can be represented using the `STEAM_0:0:0` format, specifically the "account type" and "account instance" fields.

**Argumentos:**

- `string id` — The 64 bit Steam ID

**Retorna:**

- `string` — String Player:SteamID style Steam ID representation.

---

### `util:SteamIDTo64` `[client/server]`

Converts a Player:SteamID style SteamID to a Player:SteamID64.

**Argumentos:**

- `string id` — The Player:SteamID format SteamID

**Retorna:**

- `string` — Player:SteamID64 or 0 (as a string) on fail

---

### `util:StringToType` `[client/menu/server]`

Converts a string to the specified type.

This can be useful when dealing with ConVars.

**Argumentos:**

- `string str` — The string to convert
- `string typename` — The type to attempt to convert the string to. This can be `vector`, `angle`, `float`, `int`, `bool`, or `string` (case insensitive).

**Retorna:**

- `any` — The result of the conversion, or nil if a bad type is specified.

*Fuente: `lua/includes/extensions/util.lua:108`*

---

### `util:TableToJSON` `[client/menu/server]`

Converts a table to a JSON string. Keep in mind that not every data type can be stored in the JSON format, notably any entity will not be written, as if it wasn't in the table. Same goes for materials and textures, etc.

See util.JSONToTable for the opposite function.

All keys are strings in the JSON format, so all keys of other types will be converted to strings!
This can lead to loss of data where a number key could be converted into an already existing string key! (for example in a table like this: `{["5"] = "ok", [5] = "BBB"}`)

**Argumentos:**

- `table table` — Table to convert.
- `boolean prettyPrint` = `false` — Format and indent the JSON.

**Retorna:**

- `string` — A JSON formatted string containing the serialized data

---

### `util:TableToKeyValues` `[client/menu/server]`

Converts the given table into a Valve keyValue formatted string.

Use util.KeyValuesToTable to perform the opposite transformation.

util.TableToJSON can be used as an alternative.

**Argumentos:**

- `table table` — The table to convert.
- `string rootKey` = `TableToKeyValues` — The root key name for the output KV table.

**Retorna:**

- `string` — The output.

---

### `util:Timer` `[client/menu/server]`

Creates a timer object. The returned timer will be already started with given duration.

**Argumentos:**

- `number duration` = `0` — How long you want the timer to be. `Elapsed()` will return true only after this much time has passed.

**Retorna:**

- `table` — A timer object. It has the following methods:
* `Reset()` - Resets and stops the timer.
* `Start( duration = 0 )` - (Re)starts the timer with given duration
* `Started()` - Returns `true` if the timer has been started. It will continue to return true even after the duration has passed.
* `Elapsed()` - Returns `true` if the timer duration has elapsed since its creation or the call to `Start()`
* `GetElaspedTime()` - Returns amount of time since timer started.

*Fuente: `lua/includes/extensions/util.lua:217`*

---

### `util:TimerCycle` `[client/menu/server]`

Returns the time since this function has been last called

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Time since this function has been last called in ms

---

### `util:TraceEntity` `[client/server]`

Runs a trace using the entity's collisionmodel between two points. This does not take the entity's angles into account and will trace its unrotated collisionmodel.

**Argumentos:**

- `table{Trace} tracedata` — Trace data. See Structures/Trace
- `Entity ent` — The entity to use

**Retorna:**

- `table{TraceResult}` — Trace result. See Structures/TraceResult

---

### `util:TraceEntityHull` `[client/server]`

Identical to util.TraceHull but uses an entity's [Axis-Aligned Bounding Box (AABB)](https://en.wikipedia.org/wiki/Minimum_bounding_box) for `mins`/`maxs` inputs. (These 2 keys will be ignored in the provided table)

**Argumentos:**

- `table{HullTrace} tracedata` — Trace data. See Structures/HullTrace
- `Entity ent` — The entity to use mins/maxs of for the hull trace.

**Retorna:**

- `table{TraceResult}` — Trace result. See Structures/TraceResult

---

### `util:TraceHull` `[client/server]`

Performs an AABB hull (axis-aligned bounding box, aka not rotated) trace with the given trace data.

This trace type cannot hit hitboxes.

See util.TraceLine for a simple line ("ray") trace.

This function may not always give desired results clientside due to certain physics mechanisms not existing on the client. Use it serverside for accurate results.

**Argumentos:**

- `table{HullTrace} TraceData` — The trace data to use. See Structures/HullTrace

**Retorna:**

- `table{TraceResult}` — Trace result. See Structures/TraceResult

---

### `util:TraceLine` `[client/server]`

Performs an infinitely thin, invisible ray trace (or "trace") in a line based on the input and returns a table that contains information about what, if anything, the trace line hit or intersected.

Traces intersect with the physics meshes of enums/SOLID, States, Entity (including the game.GetWorld) but cannot detect client-side only entities unless Structures/Trace#hitclientonly is set to true.

See ents.FindAlongRay if you wish for the trace to not stop on first intersection.
See util.TraceHull for a "box" type trace.

Traces do not differentiate between the inside and the outside faces of physics meshes. Because of this, if a trace starts within a solid physics mesh it will hit the inside faces of the physics mesh and may return unexpected values as a result.

You can use `r_visualizetraces` set to `1` (requires `sv_cheats` set to `1`) to visualize traces in real time for debugging purposes.

**Argumentos:**

- `table{Trace} traceConfig` — A table of data that configures the trace. See Structures/Trace for available options.

**Retorna:**

- `table{TraceResult}` — A table of information detailing where and what the trace line intersected, or `nil` if the trace is being done before the GM:InitPostEntity hook.

For the table's format and available options see the Structures/TraceResult page.

---

### `util:TypeToString` `[client/menu/server]`

Converts a type to a (nice, but still parsable) string

**Argumentos:**

- `any input` — What to convert

**Retorna:**

- `string` — Converted string

*Fuente: `lua/includes/extensions/util.lua:127`*

---

### `util:tobool` `[client/menu/server]`

You should use Global.tobool instead.

Converts string or a number to a bool, if possible. Alias of Global.tobool.

**Argumentos:**

- `any input` — A string or a number to convert.

**Retorna:**

- `boolean` — False if the input is equal to the string or boolean "false", if the input is equal to the string or number "0", or if the input is nil. Returns true otherwise.

*Fuente: `lua/includes/extensions/util.lua:73`*

---

### `worldpicker.Active` `[client]`

Returns if the user is currently picking an entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is world picking

*Fuente: `lua/includes/extensions/util/worldpicker.lua:37`*

---

### `worldpicker.Finish` `[client]`

Finishes the world picking. This is called when a user presses their mouse after calling util.worldpicker.Start.

**Argumentos:**

- `table tr` — Structures/TraceResult from the mouse press

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/util/worldpicker.lua:29`*

---

### `worldpicker.Start` `[client]`

Starts picking an entity in the world. This will suppress the next mouse click, and instead use it as a direction in the trace sent to the callback.

**Argumentos:**

- `function callback` — Function to call after an entity choice has been made.

Structures/TraceResult from the mouse press. `tr.Entity` will return the entity clicked

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/util/worldpicker.lua:18`*