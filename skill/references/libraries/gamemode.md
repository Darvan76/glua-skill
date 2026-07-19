# gamemode

---

The gamemode library provides functions relating to the gamemode system in Garry's Mod. This entire library also passes through the C -&gt; Lua bridge.

---


## Miembros (3)


---

### `gamemode:Call` `[client/server]`

Called by the engine to call a hook within the loaded gamemode.

The supplied event 'name' must be defined in the active gamemode. Otherwise, nothing will happen - not even hooks added with hook.Add will be called.

This is similar to hook.Run and hook.Call, except the hook library will call hooks created with hook.Add even if there is no corresponding gamemode function.

**Argumentos:**

- `string name` — The name of the hook to call.
- `vararg args` — The arguments.

**Retorna:**

- `any` — The result of the hook function - can be up to 6 values. Returns false if the gamemode function doesn't exist (i.e. nothing happened), but remember - a hook can also return false.

*Fuente: `lua/includes/modules/gamemode.lua:74`*

---

### `gamemode:Get` `[client/server]`

This returns the internally stored gamemode table.

**Argumentos:**

- `string name` — The name of the gamemode you want to get.

**Retorna:**

- `table` — The gamemode's table.

*Fuente: `lua/includes/modules/gamemode.lua:66`*

---

### `gamemode:Register` `[client/server]`

Called by the engine when a gamemode is being loaded.

**Argumentos:**

- `table gm` — Your GM table.
- `string name` — Name of your gamemode, lowercase, no spaces.
- `string derived` — The gamemode name that your gamemode is derived from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/gamemode.lua:20`*