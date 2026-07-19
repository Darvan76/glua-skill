# saverestore

---

The saverestore library contains functions relating to the singleplayer save system built into the game.

---


## Miembros (13)


---

### `saverestore:AddRestoreHook` `[client/server]`

Adds a restore/load hook for the Half-Life 2 save system.

**Argumentos:**

- `string identifier` — The unique identifier for this hook.
- `function callback` — The function to be called when an engine save is being loaded.

The restore object to be used to read data from save file that is being loaded.

You can also use those functions to read data:
* saverestore.ReadVar
* saverestore.ReadTable
* saverestore.LoadEntity

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:371`*

---

### `saverestore:AddSaveHook` `[client/server]`

Adds a save hook for the Half-Life 2 save system. You can use this to carry data through level transitions in Half-Life 2.

**Argumentos:**

- `string identifier` — The unique identifier for this hook.
- `function callback` — The function to be called when an engine save is being saved.

The save object to be used to write data to the save file that is being saved.

You can also use those functions to save data:
* saverestore.WriteVar
* saverestore.WriteTable
* saverestore.SaveEntity

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:357`*

---

### `saverestore:LoadEntity` `[client/server]`

Loads Entity:GetTable from the save game file that is being loaded and merges it with the given entitys Entity:GetTable.

**Argumentos:**

- `Entity ent` — The entity which will receive the loaded values from the save.
- `IRestore save` — The restore object to read the Entity:GetTable from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:334`*

---

### `saverestore:LoadGlobal` `[client/server]`

Called by engine when a save is being loaded.

This handles loading gamemode and calls all of the hooks added with saverestore.AddRestoreHook.

**Argumentos:**

- `IRestore save` — The restore object to read data from the save file with.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:408`*

---

### `saverestore:PreRestore` `[client/server]`

Called by the engine just before saverestore.LoadGlobal is.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:55`*

---

### `saverestore:PreSave` `[client/server]`

Called by the engine just before saverestore.SaveGlobal is.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:48`*

---

### `saverestore:ReadTable` `[client/server]`

Reads a table from the save game file that is being loaded.

**Argumentos:**

- `IRestore save` — The restore object to read the table from.

**Retorna:**

- `table` — The table that has been read, if any

*Fuente: `lua/includes/modules/saverestore.lua:271`*

---

### `saverestore:ReadVar` `[client/server]`

Loads a variable from the save game file that is being loaded.

Variables will be read in the save order you have saved them.

**Argumentos:**

- `IRestore save` — The restore object to read variables from.

**Retorna:**

- `any` — The variable that was read, if any.

*Fuente: `lua/includes/modules/saverestore.lua:185`*

---

### `saverestore:SaveEntity` `[client/server]`

Saves entitys Entity:GetTable to the save game file that is being saved.

**Argumentos:**

- `Entity ent` — The entity to save Entity:GetTable of.
- `ISave save` — The save object to save Entity:GetTable to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:320`*

---

### `saverestore:SaveGlobal` `[client/server]`

Called by engine when a save is being saved.

This handles saving gamemode and calls all of the hooks added with saverestore.AddSaveHook.

**Argumentos:**

- `ISave save` — The save object to write data into the save file.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:385`*

---

### `saverestore:WritableKeysInTable` `[client/server]`

Returns how many writable keys are in the given table.

**Argumentos:**

- `table table` — The table to test.

**Retorna:**

- `number` — The number of keys that can be written with saverestore.WriteTable.

*Fuente: `lua/includes/modules/saverestore.lua:132`*

---

### `saverestore:WriteTable` `[client/server]`

Write a table to a save game file that is being saved.

**Argumentos:**

- `table table` — The table to write
- `ISave save` — The save object to write the table to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:220`*

---

### `saverestore:WriteVar` `[client/server]`

Writes a variable to the save game file that is being saved.

**Argumentos:**

- `any value` — The value to save.

It can be one of the following types: number, boolean, string, Entity, Angle, Vector or table.
- `ISave save` — The save object to write the variable to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/saverestore.lua:151`*