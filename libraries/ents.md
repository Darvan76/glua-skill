# ents

---

The ents library provides functions for creating and finding entities in the game.

---


## Miembros (20)


---

### `ents:Create` `[server]`

Creates an entity. This function will fail and return `NULL` if the networked-edict limit is hit (around **8176**), or the provided entity class doesn't exist.

Do not use before GM:InitPostEntity has been called, otherwise the server will crash!
If you need to perform entity creation when the game starts, create a hook for GM:InitPostEntity and do it there.

**Argumentos:**

- `string class` — The classname of the entity to create.

**Retorna:**

- `Entity` — The created entity, or `NULL` if failed.

---

### `ents:CreateClientProp` `[client]`

Creates a clientside only prop with optional physics. See also Global.ClientsideModel if physics is not needed.

For physics to work you're expected to use the `model` argument. A simple Entity:SetModel will not be enough — the Entity:PhysicsInit* function will be needed.
Parented clientside prop will become detached if the parent entity leaves the PVS. **A workaround is available on its github page.**

**Argumentos:**

- `string model` = `models/error.mdl` — The model for the entity to be created.

**Retorna:**

- `Entity` — Created entity (`C_PhysPropClientside`).

---

### `ents:CreateClientRope` `[client]`

Creates a clientside only rope, similar to those used by the Dog and Fast Zombie models from Half-Life 2.

Created ropes will be automatically cleaned up when one of the attached entities is removed.

It doesn’t work exactly the same way as constraint.CreateKeyframeRope or constraint.Rope, you can see it when you try to use Slack with constraint.CreateKeyframeRope or addlength on constraint.Rope.

**Argumentos:**

- `Entity ent1` — The first entity to attach the rope to.
- `number|Vector ent1attach` — The attachment ID on the first entity to attach the rope to, or a local Vector relative to the first entity.
- `Entity ent2` — The second entity to attach the rope to.
- `number|Vector ent2attach` — The attachment ID on the second entity to attach the rope to, or a local Vector relative to the second entity.
- `table extra` = `nil` — Extra optional settings for the rope. Possible values are:
* slack - How much extra rope to add to the length. (default: 0)
* width - Width of the rope. (default: 2)
* segments - How many segments the rope should have (default: 8, valid range is [2,10])
* material - Which material should the rope have. (default: `"cable/cable"`)
* nogravity - If set, the rope should have no gravity. (default: 0)

**Retorna:**

- `Entity` — Created entity (`C_RopeKeyframe`).

---

### `ents:CreateClientside` `[client]`

Creates a clientside only scripted entity. The scripted entity must be of "anim" type.

**Argumentos:**

- `string class` — The class name of the entity to create.

**Retorna:**

- `Entity` — Created entity.

---

### `ents:FindAlongRay` `[client/server]`

Returns a table of all entities along the ray. The ray does not stop on collisions, meaning it will go through walls/entities.

This function is capable of detecting clientside only entities by default.

This internally uses [spatial partitioning](https://en.wikipedia.org/wiki/Space_partitioning) to avoid looping through all entities.

**Argumentos:**

- `Vector start` — The start position of the ray.
- `Vector end` — The end position of the ray.
- `Vector mins` = `nil` — The mins corner of the ray.
- `Vector maxs` = `nil` — The maxs corner of the ray.

**Retorna:**

- `table<Entity>` — Table of the found entities. There's a limit of 1024 entities.

---

### `ents:FindByClass` `[client/server]`

Gets all entities with the given class, supports wildcards.

This function returns a sequential table, meaning it should be looped with Global.ipairs instead of Global.pairs for efficiency reasons.

This works internally by iterating over ents.GetAll. `ents.FindByClass` is always faster than ents.GetAll or ents.Iterator.

**Argumentos:**

- `string class` — The class of the entities to find, supports wildcards.

Asterisks (`*`) are the only wildcard supported.

**Retorna:**

- `table<Entity>` — A table containing all found entities.

---

### `ents:FindByClassAndParent` `[client/server]`

Finds all entities that are of given class and are children of given entity. This works internally by iterating over ents.FindByClass.

**Argumentos:**

- `string class` — The class of entities to search for.
- `Entity parent` — Parent of entities that are being searched for.

**Retorna:**

- `table<Entity>` — A table of found entities or nil if none are found.

*Fuente: `lua/includes/extensions/ents.lua:2`*

---

### `ents:FindByModel` `[client/server]`

Gets all entities with the given model, supports wildcards.

This works internally by iterating over ents.GetAll.

**Argumentos:**

- `string model` — The model of the entities to find.

**Retorna:**

- `table<Entity>` — A table of all found entities.

---

### `ents:FindByName` `[client/server]`

Gets all entities with the given hammer targetname. This works internally by iterating over ents.GetAll.

Doesn't do anything on client.

**Argumentos:**

- `string name` — The targetname to look for.

**Retorna:**

- `table<Entity>` — A table of all found entities.

---

### `ents:FindInBox` `[client/server]`

Returns all entities within the specified box.

This internally uses a Spatial Partition to avoid looping through all entities, so it is more efficient than using ents.GetAll for this purpose.

Clientside entities will not be returned by this function. Serverside only entities without networked edicts (entity indexes), such as point logic or Constraints are not returned either

**Argumentos:**

- `Vector boxMins` — The box minimum coordinates.
- `Vector boxMaxs` — The box maximum coordinates.

**Retorna:**

- `table<Entity>` — A table of all found entities.

---

### `ents:FindInCone` `[client/server]`

Finds and returns all entities within the specified cone. Only entities whose Entity:WorldSpaceCenter is within the cone are considered to be in it.

The "cone" is actually a conical "slice" of an axis-aligned box (see: ents.FindInBox). The image to the right shows approximately how this function would look in 2D. Due to this, the entity may be farther than the specified range!

**Argumentos:**

- `Vector origin` — The tip of the cone.
- `Vector normal` — Direction of the cone.
- `number range` — The range of the cone/box around the origin.
 The function internally adds 1 to this argument before using it.
- `number angle_cos` — The math.cos of the angle between the center of the cone to its edges, which is half the overall angle of the cone.

1 makes a 0° cone, 0.707 makes approximately 90°, 0 makes 180°, and so on.

**Retorna:**

- `table<Entity>` — A table of all found Entitys.

---

### `ents:FindInPVS` `[server]`

Finds all entities that lie within a [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community").

The function won't take in to account Global.AddOriginToPVS and the like.

**Argumentos:**

- `Entity|Vector viewPoint` — Entity or Vector to find entities within the PVS of. If a player is given, this function will use the player's view entity.

**Retorna:**

- `table<Entity>` — The found Entitys.

---

### `ents:FindInSphere` `[client/server]`

Gets all entities within the specified sphere.

This function internally calls util.IsBoxIntersectingSphere for every entity on the map based on their Orientated Bounding Box.

**Argumentos:**

- `Vector origin` — Center of the sphere.
- `number radius` — Radius of the sphere.

**Retorna:**

- `table<Entity>` — A table of all found Entitys.

---

### `ents:FireTargets` `[server]`

Fires a use event.

**Argumentos:**

- `string target` — Name of the target entity.
- `Entity activator` — Activator of the event.
- `Entity caller` — Caller of the event.
- `number{USE} usetype` — Use type. See the Enums/USE.
- `number value` — This value is passed to ENTITY:Use, but isn't used by any default entities in the engine.

**Retorna:**

*(sin retorno)*

---

### `ents:GetAll` `[client/server]`

Returns a table of all existing entities.

Consider using ents.Iterator instead for better performance.

This function returns a sequential table, meaning it should be looped with Global.ipairs instead of Global.pairs for efficiency reasons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Entity>` — Table of all existing Entitys.

---

### `ents:GetByIndex` `[client/server]`

Returns an entity by its index. Same as Global.Entity.

**Argumentos:**

- `number entIdx` — The index of the entity.

**Retorna:**

- `Entity` — The entity if it exists, or `NULL` if it doesn't.

---

### `ents:GetCount` `[client/server]`

Gives you the amount of currently existing entities.

Similar to **#**ents.GetAll() but with better performance since the entity table doesn't have to be generated.
If ents.GetAll is already being called for iteration, than using the **#** operator on the table will be faster than calling this function since it is JITted.

**Argumentos:**

- `boolean IncludeKillMe` = `false` — Include entities with the FL_KILLME flag. This will skip an internal loop, and the function will be more efficient as a byproduct.

**Retorna:**

- `number` — Number of entities.

---

### `ents:GetEdictCount` `[server]`

Returns the amount of networked entities, which is limited to 8192.

ents.Create will fail somewhere between 8064 and 8176 - this can vary based on the amount of player slots on the server and other entities.

See also [MAX_EDICT_BITS](https://wiki.facepunch.com/gmod/Global_Variables#maxedictbits) global variable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of networked entities.

---

### `ents:GetMapCreatedEntity` `[client/server]`

Returns entity that has given Entity:MapCreationID.

This works internally by iterating over ents.GetAll.

**Argumentos:**

- `number id` — Entity's creation id.

**Retorna:**

- `Entity|nil` — Found entity, `nil` otherwise.

---

### `ents:Iterator` `[client/server]`

Returns a [Stateless Iterator](https://www.lua.org/pil/7.3.html) for all entities.
Intended for use in [Generic For-Loops](https://www.lua.org/pil/4.3.5.html).
See player.Iterator for a similar function for all players.

Internally, this function uses cached values that are stored in Lua, as opposed to ents.GetAll, which is a C++ function.
Because a call operation from Lua to C++ *and* with a return back to Lua is quite costly, this function will be more efficient than ents.GetAll.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `function` — The Iterator Function from Global.ipairs.
- `table<Entity>` — Table of all existing Entity.  This is a cached copy of ents.GetAll.
This table is intended to be read-only.

Modifying the return table will affect all subsequent calls to this function until the cache is refreshed, replacing all of your ents.GetAll usages may come with unintended side effects because of this.
- `number` — The starting index for the table of players.
This is always `0` and is returned for the benefit of [Generic For-Loops](https://www.lua.org/pil/4.3.5.html).

*Fuente: `lua/includes/extensions/entity_iter.lua:4`*