# gmsave

---

The gmsave library provides functions relating to the singleplayer save system in Garry's Mod.

---


## Miembros (5)


---

### `gmsave:LoadMap` `[server]`

Loads a saved map.

**Argumentos:**

- `string mapData` — The JSON encoded string containing all the map data.
- `Player ply` = `NULL` — The player to load positions for.
- `function callback` = `nil` — A function to be called after all the entities have been placed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/gmsave.lua:11`*

---

### `gmsave:PlayerLoad` `[server]`

Sets player position and angles from supplied table.

**Argumentos:**

- `Player ply` — The player to "load" values for.
- `table data` — A table containing Origin and Angle keys for position and angles to set.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/gmsave/player.lua:14`*

---

### `gmsave:PlayerSave` `[server]`

Returns a table containing player position and angles. Used by gmsave.SaveMap.

**Argumentos:**

- `Player ply` — The player to "save".

**Retorna:**

- `table` — A table containing player position ( Origin ) and angles ( Angle ).

*Fuente: `lua/includes/gmsave/player.lua:2`*

---

### `gmsave:SaveMap` `[server]`

Saves the map.

**Argumentos:**

- `Player ply` — The player, whose position should be saved for loading the save.

**Retorna:**

- `string` — The encoded to JSON string containing save data.

*Fuente: `lua/includes/gmsave.lua:80`*

---

### `gmsave:ShouldSaveEntity` `[server]`

Returns if we should save this entity in a duplication or a map save or not.

**Argumentos:**

- `Entity ent` — The entity.
- `table t` — A table containing classname key with entities classname.

**Retorna:**

- `boolean` — Should save entity or not.

*Fuente: `lua/includes/gmsave/entity_filters.lua:49`*