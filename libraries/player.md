# player

---

The player library is used to get the Lua objects that represent players in-game.

---


## Miembros (12)


---

### `player:CreateNextBot` `[server]`

Similar to the serverside command "bot", this function creates a new Player bot with the given name. This bot will not obey to the usual `bot_*` commands, and it's the same bot base used in TF2 and CS:S.

The best way to control the behaviour of a Player bot right now is to use the GM:StartCommand hook and modify its input serverside.

Despite this Player being fake, it has to be removed from the server by using Player:Kick and **NOT** Entity:Remove.
Also keep in mind that these bots still use player slots, so you won't be able to spawn them in singleplayer!

Any Bot created using this method will be considered UnAuthed by Garry's Mod

**Argumentos:**

- `string botName` — The name of the bot, using an already existing name will append brackets at the end of it with a number pertaining it.

Example: "Bot name test", "Bot name test(1)".

**Retorna:**

- `Player` — The newly created Player bot. Returns NULL if there's no Player slots available to host it.

---

### `player:GetAll` `[client/server]`

Gets all the current players in the server (not including connecting clients).

This function returns bots as well as human players. See player.GetBots and  player.GetHumans.

This function returns a sequential table, meaning it should be looped with Global.ipairs instead of Global.pairs for efficiency reasons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Player>` — All Players currently in the server.

---

### `player:GetBots` `[client/server]`

Returns a table of all bots on the server.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Player>` — A table only containing bots ( AI / non human players )

---

### `player:GetByAccountID` `[client/server]`

Tried to get the player with the specified Player:AccountID.
Internally this function iterates over all players in the server, meaning it can be quite expensive in a performance-critical context.

**Argumentos:**

- `number accountID` — The Player:AccountID to find the player by.

**Retorna:**

- `Player|boolean` — Player if one is found, `false` otherwise.

*Fuente: `lua/includes/extensions/player.lua:265`*

---

### `player:GetByID` `[client/server]`

Gets the player with the specified connection ID.

Connection ID can be retrieved via gameevent.Listen events.

For a function that returns a player based on their Entity:EntIndex, see Global.Entity.

For a function that returns a player based on their Player:UserID, see Global.Player.

**Argumentos:**

- `number connectionID` — The connection ID to find the player by.

**Retorna:**

- `Player|NULL` — Player if one is found, `NULL` otherwise.

---

### `player:GetBySteamID` `[client/server]`

Gets the player with the specified SteamID.
Internally this function iterates over all players in the server, meaning it can be quite expensive in a performance-critical context.

**Argumentos:**

- `string steamID` — The Player:SteamID to find the player by.

**Retorna:**

- `Player|boolean` — Player if one is found, `false` otherwise.

*Fuente: `lua/includes/extensions/player.lua:287`*

---

### `player:GetBySteamID64` `[client/server]`

Gets the player with the specified SteamID64.
Internally this function iterates over all players in the server, meaning it can be quite expensive in a performance-critical context.

**Argumentos:**

- `string steamID64` — The Player:SteamID64 to find the player by.

**Retorna:**

- `Player|boolean` — Player if one is found, `false` otherwise.

*Fuente: `lua/includes/extensions/player.lua:299`*

---

### `player:GetByUniqueID` `[client/server]`

Use player.GetBySteamID64, player.GetBySteamID or player.GetByAccountID to get a player by a unique identifier instead.

Gets the player with the specified uniqueID (not recommended way to identify players).

It is highly recommended to use player.GetByAccountID, player.GetBySteamID or player.GetBySteamID64 instead as this function can have collisions ( be same for different people ) while SteamID is guaranteed to unique to each player.
Internally this function iterates over all players in the server, meaning it can be quite expensive in a performance-critical context.

**Argumentos:**

- `string uniqueID` — The Player:UniqueID to find the player by.

**Retorna:**

- `Player|boolean` — Player if one is found, `false` otherwise.

*Fuente: `lua/includes/extensions/player.lua:276`*

---

### `player:GetCount` `[client/server]`

Returns the active player count.

Similar to **#**player.GetAll() but with better performance since the player table doesn't have to be generated. If player.GetAll is already being called for iteration, then using the **#** operator on the table will be faster than calling this function since it is JITted.
Players who are currently connecting to the server will not be counted. See function: player.GetCountConnecting

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of players.

---

### `player:GetCountConnecting` `[server]`

Returns the amount of players connecting to the server, but not yet spawned in.

`player.GetCountConnecting() + player.GetCount()` would result in the total player count on this server.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of players still connecting.

---

### `player:GetHumans` `[client/server]`

Returns a table containing all human players (non-bot/AI).

Unlike player.GetAll, this does not include bots.
This function returns a sequential table, meaning it should be looped with Global.ipairs instead of Global.pairs for efficiency reasons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Player>` — A table containing all human (non-bot/AI) players.

---

### `player:Iterator` `[client/server]`

Returns a [Stateless Iterator](https://www.lua.org/pil/7.3.html) for all players on the server.
Intended for use in [Generic For-Loops](https://www.lua.org/pil/4.3.5.html).
See ents.Iterator for a similar function for all entities.

Internally, this function uses cached values that are stored in Lua, as opposed to player.GetAll, which is a C++ function.
Because a call operation from Lua to C++ *and* with a return back to Lua is quite costly, this function will be more efficient than player.GetAll.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `function` — The Iterator Function from Global.ipairs.
- `table<Player>` — Table of all existing Player.  This is a cached copy of player.GetAll.
This table is intended to be read-only.

Modifying the return table will affect all subsequent calls to this function until the cache is refreshed, replacing all of your player.GetAll usages may come with unintended side effects because of this.

An example:
```
-- Bad code.
local scan_ents = select( 2, player.Iterator() )
table.Add( scan_ents, ents.FindByClass( "ttt_decoy" ) )

-- Fine code. A copy of the table is being made and used.
local scan_ents = table.Copy( select( 2, player.Iterator() ) )
table.Add( scan_ents, ents.FindByClass( "ttt_decoy" ) )
```
- `number` — The starting index for the table of players.
This is always `0` and is returned for the benefit of [Generic For-Loops](https://www.lua.org/pil/4.3.5.html).

*Fuente: `lua/includes/extensions/entity_iter.lua:13`*