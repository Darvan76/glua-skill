# hook

---

The hook library allows you to add hooks called by the game engine, allowing multiple scripts to modify game function.

---


## Miembros (5)


---

### `hook:Add` `[client/menu/server]`

Registers a function (or "callback") with the Hook system so that it will be called automatically whenever a specific event (or "hook") occurs.

**Argumentos:**

- `string eventName` — The event to hook on to. This can be any GM_Hooks hook, gameevent after using gameevent.Listen, or custom hook run with hook.Call or hook.Run.
- `any identifier` — The unique identifier, usually a string. This can be used elsewhere in the code to replace or remove the hook. The identifier **should** be unique so that you do not accidentally override some other mods hook, unless that's what you are trying to do.

The identifier can be either a string, or a table/object with an IsValid function defined such as an Entity or Panel. numbers and booleans, for example, are not allowed.

If the identifier is a table/object, it will be inserted in front of the other arguments in the callback and the hook will be called as long as it's valid. However, if IsValid( identifier ) returns false when **any** eventName hook is called, the hook will be removed.
- `function func` — The function to be called, arguments given to it depend on the identifier used.

Returning any value besides nil from the hook's function will stop other hooks of the same event down the loop from being executed. Only return a value when absolutely necessary and when you know what you are doing.

It will also prevent the associated `GM:*` hook from being called on the gamemode.

It WILL break other addons.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/hook.lua:23`*

---

### `hook:Call` `[client/menu/server]`

Calls all hooks associated with the given event until one returns something other than `nil`, and then returns that data.

In almost all cases, you should use hook.Run instead - it calls hook.Call internally but supplies the gamemode table by itself, making your code neater.

**Argumentos:**

- `string eventName` — The event to call hooks for.
- `table gamemodeTable` = `nil` — If the gamemode is specified, the gamemode hook within will be called, otherwise not.
- `vararg args` = `nil` — The arguments to be passed to the hooks.

**Retorna:**

- `vararg` — Return data from called hooks. Limited to **6** return values.

*Fuente: `lua/includes/modules/hook.lua:74`*

---

### `hook:GetTable` `[client/menu/server]`

Returns a list of all the hooks registered with hook.Add.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of tables. See below for output example.

*Fuente: `lua/includes/modules/hook.lua:15`*

---

### `hook:Remove` `[client/menu/server]`

Removes the hook with the supplied identifier from the given event.

**Argumentos:**

- `string eventName` — The event name.
- `any identifier` — The unique identifier of the hook to remove, usually a string.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/hook.lua:45`*

---

### `hook:Run` `[client/menu/server]`

Calls all hooks associated with the given event **until** one returns something other than `nil` and then returns that data. If no hook returns any data, it will try to call the `GAMEMODE:` alternative, if one exists.

This function internally calls hook.Call.

See also: gamemode.Call - same as this, but does not call hooks if the gamemode hasn't defined the function.

**Argumentos:**

- `string eventName` — The event to call hooks for.
- `vararg args` — The arguments to be passed to the hooks.

**Retorna:**

- `vararg` — Return data from called hooks. Limited to **6** return values.

*Fuente: `lua/includes/modules/hook.lua:64`*