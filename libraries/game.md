# game

---

The game library provides functions to access various features in the game's engine, most of it's functions are related to controlling the map.

---


## Miembros (40)


---

### `game:AddAmmoType` `[client/server]`

Adds a new ammo type to the game.

You can find a list of default ammo types [here](https://wiki.facepunch.com/gmod/Default_Ammo_Types).

This function **must** be called on both the client and server in GM:Initialize or you will have unexpected problems.
There is a limit of 256 ammo types, including the default ones.

**Argumentos:**

- `table{AmmoData} ammoData` — The attributes of the ammo. See the Structures/AmmoData.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/game.lua:2`*

---

### `game:AddDecal` `[client/server]`

Registers a new decal.

There's a rather low limit of around 256 for decal materials that may be registered and they are not cleared on map load.

**Argumentos:**

- `string decalName` — The name of the decal.
- `string materialName` — The material to be used for the decal. May also be a list of material names, in which case a random material from that list will be chosen every time the decal is placed.

**Retorna:**

*(sin retorno)*

---

### `game:AddParticles` `[client/server]`

Loads a particle file. Individual particle systems will still need to be precached with Global.PrecacheParticleSystem.

You will still need to call this function clientside regardless if you create the particle effects serverside.

**Argumentos:**

- `string particleFileName` — The path of the file to add. Must be `(file).pcf`.

**Retorna:**

*(sin retorno)*

---

### `game:BuildAmmoTypes` `[client/server]`

Consider using game.GetAmmoTypes and game.GetAmmoData instead.
Called by the engine to retrieve the ammo types.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — All ammo types registered via game.AddAmmoType, sorted by its name value.

*Fuente: `lua/includes/extensions/game.lua:46`*

---

### `game:CleanUpMap` `[client/server]`

Removes most entities, and then respawns entities created by the map, as if the map was just loaded.

There are certain exclusions, such as players or weapons held by players, soundscapes and others.
enums/EFL can be set on entities to preserve them through a map cleanup.

On the client it will remove decals, sounds, gibs, dead NPCs, and entities created via ents.CreateClientProp. This function is ran on all clients from server automatically, when it is called on the server.

This function calls GM:PreCleanupMap before cleaning up the map and GM:PostCleanupMap after cleaning up the map.

Beware of calling this function in hooks that may be called on map clean up (such as ENTITY:StartTouch) to avoid infinite loops.

Calling this destroys all BASS streams.
The EFL_KEEP_ON_RECREATE_ENTITIES flag doesn't prevent an entity from being recreated, which means flagged entities will be duplicated since they are both kept and recreated.

**Argumentos:**

- `boolean dontSendToClients` = `false` — If set to `true`, don't run this functions on all clients.
- `table extraFilters` = `{}` — Entity classes not to reset during cleanup.
- `function callback` = `nil` — If set, delays the map cleanup until the end of a server tick, allowing bypassing the entity limit on maps with large amounts of them. Otherwise the entities will not be cleaned up until the end of the server tick.

The callback function will be called after the map cleanup has been performed.

**Retorna:**

*(sin retorno)*

---

### `game:ConsoleCommand` `[server]`

Runs a console command.
Make sure to add a newline ("\n") at the end of the command.

If you use data that were received from a client, you should avoid using this function because newline and semicolon (at least) allow the client to run arbitrary commands!

For safety, you are urged to prefer using Global.RunConsoleCommand in this case.

**Argumentos:**

- `string stringCommand` — String containing the command and arguments to be ran.

**Retorna:**

*(sin retorno)*

---

### `game:Get3DSkyboxInfo` `[client/server]`

Returns information about the currently active 3D skybox.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Structures/Sky3DParams> sky3dparams` — The 3D skybox info, or `nil` if the map has no 3d skybox or the function is called too soon during server start up.

---

### `game:GetAmmoDamageType` `[client/server]`

Returns the damage type of given ammo type.

**Argumentos:**

- `number id` — Ammo ID to retrieve the damage type of. Starts from 1.

**Retorna:**

- `number` — See Enums/DMG.

---

### `game:GetAmmoData` `[client/server]`

Returns the Structures/AmmoData for given ID.

**Argumentos:**

- `number id` — ID of the ammo type to look up the data for.

**Retorna:**

- `table{AmmoData}` — The Structures/AmmoData containing all ammo data.

---

### `game:GetAmmoForce` `[client/server]`

Returns the ammo bullet force that is applied when an entity is hit by a bullet of given ammo type.

**Argumentos:**

- `number id` — Ammo ID to retrieve the force of. Starts from 1.

**Retorna:**

- `number` — The ammo force.

---

### `game:GetAmmoID` `[client/server]`

Returns the ammo type ID for given ammo type name.

See game.GetAmmoName for reverse.

**Argumentos:**

- `string name` — Name of the ammo type to look up ID of.

**Retorna:**

- `number` — The ammo type ID of given ammo type name, or -1 if not found.

---

### `game:GetAmmoMax` `[client/server]`

Returns the real maximum amount of ammo of given ammo ID, regardless of the setting of `gmod_maxammo` convar.

**Argumentos:**

- `number id` — Ammo type ID.

**Retorna:**

- `number` — The maximum amount of reserve ammo a player can hold of this ammo type.

---

### `game:GetAmmoNPCDamage` `[client/server]`

Returns the damage given ammo type should do to NPCs.

**Argumentos:**

- `number id` — Ammo ID to retrieve the damage info of. Starts from 1.

**Retorna:**

- `number` — 

---

### `game:GetAmmoName` `[client/server]`

Returns the ammo name for given ammo type ID.

See game.GetAmmoID for reverse.

**Argumentos:**

- `number id` — Ammo ID to retrieve the name of. Starts from 1.

**Retorna:**

- `string` — The name of given ammo type ID or nil if ammo type ID is invalid.

---

### `game:GetAmmoPlayerDamage` `[client/server]`

Returns the damage given ammo type should do to players.

**Argumentos:**

- `number id` — Ammo ID to retrieve the damage info of. Starts from 1.

**Retorna:**

- `number` — 

---

### `game:GetAmmoTypes` `[client/server]`

Returns a list of all ammo types currently registered.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<number,string>` — A table containing all ammo types. The keys are ammo IDs, the values are the names associated with those IDs.

---

### `game:GetGlobalCounter` `[server]`

Returns the counter of a Global State.

See Global States for more information.

**Argumentos:**

- `string name` — The name of the Global State to set.

If the Global State by that name does not exist, it will be created.

See Global States for a list of default global states.

**Retorna:**

- `number` — The value of the given Global State, 0 if the global state doesn't exist.

---

### `game:GetGlobalState` `[server]`

Returns whether a Global State is off, active or dead ( inactive ).

See Global States for more information.

**Argumentos:**

- `string name` — The name of the Global State to retrieve the state of.

If the Global State by that name does not exist, **GLOBAL_DEAD** will be returned.

See Global States for a list of default global states.

**Retorna:**

- `number` — The state of the Global State. See Enums/GLOBAL.

---

### `game:GetIPAddress` `[client/server]`

Returns the public IP address and port of the current server. This will return the IP/port that you are connecting through when ran clientside.
Returns "loopback" in singleplayer.

Returns "0.0.0.0:`port`" on the server when called too early, including in GM:Initialize and GM:InitPostEntity. This bug seems to only happen the first time a server is launched, and will return the correct value after switching maps.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The IP address and port in the format "x.x.x.x:x".

---

### `game:GetMap` `[client/menu/server]`

Returns the name of the current map, without a file extension.
On the menu state, returns "menu".
In Multiplayer this does not return the current map in the CLIENT realm before GM:Initialize.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the current map, without a file extension.

---

### `game:GetMapChangeCount` `[server]`

Returns the current map change count for the server.

This is useful to determine whether the current map is the initial map, or whether a `changelevel` (using `map` command is also detected) has occurred at any point in the server's session.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current map change count. Will start at `1`.

---

### `game:GetMapNext` `[server]`

Returns the next map that would be loaded according to the file that is set by the mapcyclefile convar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — nextMap or nil if called too early.

---

### `game:GetMapVersion` `[server]`

Returns the revision (Not to be confused with [VBSP Version](https://developer.valvesoftware.com/wiki/Source_BSP_File_Format#Versions)) and BSP version of the current map.

Map revision is the amount of times the map file was saved in Hammer at the time of the map being compiled. This is useful to detect when a map has changed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Revision of the currently loaded map.
- `number` — BSP version.

---

### `game:GetSkillLevel` `[client/server]`

Returns the difficulty level of the game.

**TIP:** You can use this function in your scripted NPCs or Nextbots to make them stronger, however, it is a good idea to lock powerful attacks behind the highest difficulty instead of just increasing the health.

Internally this is tied to the gamerules entity, so you'll have to wait until GM:InitPostEntity is called to return the skill level.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The difficulty level, Easy (1), Normal (2), Hard (3).

---

### `game:GetTimeScale` `[client/server]`

Returns the time scale set with game.SetTimeScale.

If you want to get the value of `host_timescale`, use:
```lua
local timescale = GetConVar( "host_timescale" ):GetFloat()
```

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The time scale.

---

### `game:GetWindSpeed` `[client/server]`

Returns the wind's velocity at a given position, as influenced by current map's [env_wind](https://developer.valvesoftware.com/wiki/Env_wind) entities.

**Argumentos:**

- `Vector pos` = `nil` — The point to get wind speed at.

If specified, wind controllers with `windradius` other than `-1` will be taken into account, if the point is within their radius.
If omitted, only the global wind controller will be used (if one exists).

This argument will be ignored on the `CLIENT` States and will be treated as `nil` because the position of `env_wind` is not currently networked to clients.

**Retorna:**

- `Vector windVelocity` — `windDir * windSpeed` — the current wind direction multiplied by the current total wind speed.

See [env_wind_shared.cpp#L255-L258](https://github.com/ValveSoftware/source-sdk-2013/blob/master/src/game/shared/env_wind_shared.cpp#L255-L258) for how it's calculated.

---

### `game:GetWorld` `[client/server]`

Returns the worldspawn entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The world.

---

### `game:IsDedicated` `[client/server]`

Returns true if the server is a dedicated server, false if it is a listen server or a singleplayer game.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the server dedicated or not.

---

### `game:KickID` `[server]`

Kicks a player from the server. This can be ran before the player has spawned.

**Argumentos:**

- `string id` — Player:UserID, Player:SteamID or Player:SteamID64 of the player to kick. Uses SteamID32 eg STEAM_0:0:00000000.
- `string reason` = `No reason given` — Reason to display to the player. This can span across multiple lines.

This will be shortened to ~512 chars, though this includes the command itself and the player index so will realistically be more around ~483. It is recommended to avoid going near the limit to avoid truncation.

**Retorna:**

*(sin retorno)*

---

### `game:LoadNextMap` `[server]`

Loads the next map according to the `nextlevel` convar, or from the current `mapcyclefile` set by the respective convar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `game:MapLoadType` `[server]`

Returns the map load type of the current map.

After changing the map with the console command `changelevel`, "newgame" is returned. With `changelevel2` (single player only), "transition" is returned.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The load type. Possible values are: "newgame", "loadgame", "transition", "background".

---

### `game:MaxPlayers` `[client/server]`

Returns the maximum amount of players (including bots) that the server can have.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum amount of players.

---

### `game:MountGMA` `[client/server]`

Mounts a GMA addon from the disk.
Can be used with steamworks.DownloadUGC.

Any error models currently loaded that the mounted addon provides will be reloaded.

Any error materials currently loaded that the mounted addon provides will NOT be reloaded. That means that this cannot be used to fix missing map materials, as the map materials are loaded before you are able to call this.

**Argumentos:**

- `string path` — Location of the GMA file to mount, retrieved from steamworks.DownloadUGC or relative to the `garrysmod/` directory (ignores mounting). This file does not have to end with the .gma extension, but will be interpreted as a GMA.

**Retorna:**

- `boolean` — success.
- `table` — If successful, a table of files that have been mounted.

---

### `game:RemoveRagdolls` `[client/server]`

Removes all the clientside ragdolls. On server, it will remove all `prop_ragdolls` that have the `SF_RAGDOLLPROP_USE_LRU_RETIREMENT` (4096) spawnflag.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `game:SetGlobalCounter` `[server]`

Sets the counter of a Global State.

See Global States for more information.

**Argumentos:**

- `string name` — The name of the Global State to set.

If the Global State by that name does not exist, it will be created.

See Global States for a list of default global states.
- `number count` — The value to set for that Global State.

**Retorna:**

*(sin retorno)*

---

### `game:SetGlobalState` `[server]`

Sets whether a Global State is off, active or dead ( inactive ).

See Global States for more information.

**Argumentos:**

- `string name` — The name of the Global State to set.

If the Global State by that name does not exist, it will be created.

See Global States for a list of default global states.
- `number state` — The state of the Global State. See Enums/GLOBAL.

**Retorna:**

*(sin retorno)*

---

### `game:SetSkillLevel` `[server]`

Sets the difficulty level of the game, can be retrieved with game.GetSkillLevel.

This will automatically change whenever the "skill" convar is modified serverside.

**Argumentos:**

- `number level` — The difficulty level, Easy( 1 ), Normal( 2 ), Hard( 3 ).

**Retorna:**

*(sin retorno)*

---

### `game:SetTimeScale` `[server]`

Sets the time scale of the game logic.

To slow down or speed up the movement of a specific player, use Player:SetLaggedMovementValue instead.

See physenv.SetTimeScale if you wish to only scale the physics timescale.

This function is meant to remove the need of using the `host_timescale` convar, which is cheat protected.
The true timescale will be `host_timescale` multiplied by game.GetTimeScale.

Like `host_timescale`, this method does not affect sounds, if you wish to change that, look into GM:EntityEmitSound.

**Argumentos:**

- `number timeScale` — The new timescale, minimum value is 0.001 and maximum is 5.

**Retorna:**

*(sin retorno)*

---

### `game:SinglePlayer` `[client/server]`

Returns whether the current session is a single player game.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isSinglePlayer.

---

### `game:StartSpot` `[server]`

Returns the name of the entity that should be used as player start position.

This is not the same thing as spawn points (See GM:PlayerSelectSpawn for that), this is used to properly transit the player between maps, and therefore will only be set after a level change via `trigger_changelevel` entity in singleplayer.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the entity that should be used as start position.