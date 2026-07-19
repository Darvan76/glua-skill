# concommand

---

The concommand library is used to create console commands which can be used to network (basic) information &amp; events between the client and the server.

---


## Miembros (5)


---

### `concommand:Add` `[client/menu/server]`

Creates a console command that runs a function in lua with optional autocompletion function and help text.

Clients can still run commands created only on the server. Always check permissions in the callback.
This will fail if the concommand was previously removed with concommand.Remove in a different realm (creating a command on the client that was removed from the server and vice-versa).

**Argumentos:**

- `string name` — The command name to be used in console.

This cannot be a name of existing console command or console variable. It will silently fail if it is.
- `function callback` — The function to run when the concommand is executed.

The player that ran the concommand. NULL entity if command was entered with the dedicated server console.
The concommand string (if one callback is used for several concommands).
A table of all string arguments.
The arguments as a string (including double quotes if there were any).
- `function autoComplete` = `nil` — The function to call which should return a table of options for autocompletion. (Console_Command_Auto-completion)

This only properly works on the client since it is **not** networked.

The concommand this autocompletion is for.
The arguments typed so far.
A table of all string arguments.
A table containing the autocomplete options to display.
- `string helpText` = `nil` — The text to display should a user run 'help cmdName'.
- `number{FCVAR}|table<number> flags` = `0` — Console command modifier flags. Either a bitflag, or a table of enums. See Enums/FCVAR.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/concommand.lua:24`*

---

### `concommand:AutoComplete` `[client/menu/server]`

Used by the engine to call the autocomplete function for a console command, and retrieve returned options.

**Argumentos:**

- `string command` — Name of command.
- `string arguments` — Arguments given to the command.

**Retorna:**

- `table` — Possibilities for auto-completion. This is the return value of the auto-complete callback.

*Fuente: `lua/includes/modules/concommand.lua:63`*

---

### `concommand:GetTable` `[client/menu/server]`

Returns the tables of all console command callbacks, and autocomplete functions, that were added to the game with concommand.Add.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string,function>` — Table of command callback functions.
- `table<string,function>` — Table of command autocomplete functions.

*Fuente: `lua/includes/modules/concommand.lua:16`*

---

### `concommand:Remove` `[client/menu/server]`

Removes a console command.

concommand.Add will fail if the concommand was previously removed with this function in a different realm (creating a command on the client that was removed from the server and vice-versa).

**Argumentos:**

- `string name` — The name of the command to be removed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/concommand.lua:35`*

---

### `concommand:Run` `[client/menu/server]`

You might be looking for Global.RunConsoleCommand or Player:ConCommand.

Used by the engine to run a console command's callback function. This will only be called for commands that were added with Global.AddConsoleCommand, which concommand.Add calls internally. An error is sent to the player's console if no callback is found.

This will still be called for concommands removed with concommand.Remove but will return false. This will not be called for concommands added by the engine, only those made from Lua.

**Argumentos:**

- `Player ply` — Player to run concommand on.
- `string cmd` — Command name.
- `any args` — Command arguments.
Can be table or string.
- `string argumentString` — string of all arguments sent to the command.

**Retorna:**

- `boolean` — `true` if the console command with the given name exists, and `false` if it doesn't.

*Fuente: `lua/includes/modules/concommand.lua:45`*