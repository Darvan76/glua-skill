# cleanup

---

The cleanup library allows you to control what happens to custom entities when the clean-up buttons are pressed in the Utilities tab of the Spawn menu (default Q).

---


## Miembros (8)


---

### `cleanup:Add` `[server]`

Adds an entity to a player's cleanup list.

**Argumentos:**

- `Player pl` — Who's cleanup list to add the entity to.
- `string type` — The type of cleanup.
- `Entity ent` — The entity to add to the player's cleanup list.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cleanup.lua:59`*

---

### `cleanup:CC_AdminCleanup` `[server]`

Called by the `gmod_admin_cleanup` console command. Allows admins to clean up the server.

**Argumentos:**

- `Player pl` — The player that called the console command.
- `string command` — The console command that called this function.
- `table args` — First and only arg is the cleanup type.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cleanup.lua:148`*

---

### `cleanup:CC_Cleanup` `[server]`

Called by the `gmod_cleanup` console command. Allows players to cleanup their own props.

**Argumentos:**

- `Player pl` — The player that called the console command.
- `string command` — The console command that called this function.
- `table args` — First and only argument is the cleanup type.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cleanup.lua:98`*

---

### `cleanup:GetList` `[server]`

Gets the cleanup list.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cleanup.lua:40`*

---

### `cleanup:GetTable` `[client/server]`

Gets the table of cleanup types.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A list of cleanup types.

*Fuente: `lua/includes/modules/cleanup.lua:31`*

---

### `cleanup:Register` `[client/server]`

Registers a new cleanup type.

**Argumentos:**

- `string type` — Name of type.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cleanup.lua:17`*

---

### `cleanup:ReplaceEntity` `[server]`

Replaces one entity in the cleanup module with another.

You very likely want to call undo.ReplaceEntity with the same entities as well.

**Argumentos:**

- `Entity from` — The old entity.
- `Entity|nil to` — The new entity. Can be a `NULL` entity to remove the old entity from the cleanup system.

**Retorna:**

- `boolean` — Whether any action was taken.

*Fuente: `lua/includes/modules/cleanup.lua:76`*

---

### `cleanup:UpdateUI` `[client]`

Repopulates the clients cleanup menu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cleanup.lua:207`*