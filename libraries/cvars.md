# cvars

---

The cvars library allows you to control what happens when a cvar (console variable) is changed.

---


## Miembros (7)


---

### `cvars:AddChangeCallback` `[client/menu/server]`

Adds a callback to be called when the named convar changes.

This does not callback convars in the menu state.
This does not callback convars on the client with FCVAR_GAMEDLL and convars on the server without FCVAR_GAMEDLL.
This does not callback convars on the client with FCVAR_REPLICATED.

**Argumentos:**

- `string name` — The name of the convar to add the change callback to.
- `function callback` — The function to be called when the convar changes.

The name of the convar.
The old value of the convar.
The new value of the convar.
- `string identifier` = `nil` — If set, you will be able to remove the callback using cvars.RemoveChangeCallback.

The identifier is not required to be globally unique, as it's paired with the actual name of the convar.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cvars.lua:54`*

---

### `cvars:Bool` `[client/menu/server]`

Retrieves console variable as a boolean.

**Argumentos:**

- `string cvar` — Name of console variable.
- `boolean default` = `nil` — The value to return if the console variable does not exist.

**Retorna:**

- `boolean` — Retrieved value.

*Fuente: `lua/includes/modules/cvars.lua:138`*

---

### `cvars:GetConVarCallbacks` `[client/menu/server]`

Returns a table of the given ConVars callbacks.

**Argumentos:**

- `string name` — The name of the ConVar.
- `boolean createIfNotFound` = `false` — Whether or not to create the internal callback table for given ConVar if there isn't one yet.

This argument is internal and should not be used.

**Retorna:**

- `table` — A table of the convar's callbacks, or nil if the convar doesn't exist.

*Fuente: `lua/includes/modules/cvars.lua:21`*

---

### `cvars:Number` `[client/menu/server]`

Retrieves console variable as a number.

**Argumentos:**

- `string cvar` — Name of console variable.
- `any default` = `nil` — The value to return if the console variable does not exist.

**Retorna:**

- `number` — Retrieved value or the second argument if the console variable does not exist. Will return 0 if the console variable exists and has a string value.

*Fuente: `lua/includes/modules/cvars.lua:123`*

---

### `cvars:OnConVarChanged` `[client/menu/server]`

You are probably looking for cvars.AddChangeCallback.

Called by the engine when a convar value changes.

**Argumentos:**

- `string name` — Convar name.
- `string oldVal` — The old value of the convar.
- `string newVal` — The new value of the convar.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cvars.lua:38`*

---

### `cvars:RemoveChangeCallback` `[client/menu/server]`

Removes a callback for a convar using the the callback's identifier. The identifier should be the third argument specified for cvars.AddChangeCallback.

**Argumentos:**

- `string name` — The name of the convar to remove the callback from.
- `string indentifier` — The callback's identifier.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cvars.lua:87`*

---

### `cvars:String` `[client/menu/server]`

Retrieves console variable as a string.

**Argumentos:**

- `string cvar` — Name of console variable.
- `any default` = `nil` — The value to return if the console variable does not exist.

**Retorna:**

- `string` — Retrieved value.

*Fuente: `lua/includes/modules/cvars.lua:108`*