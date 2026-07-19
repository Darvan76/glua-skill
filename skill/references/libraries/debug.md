# debug

---

The debug library is intended to help you debug your scripts, however it also has several other powerful uses. Some builtin debug function were removed in GMod due to security reasons

---


## Miembros (17)


---

### `debug:Trace` `[client/menu/server]`

Prints out the lua function call stack to the console.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/debug.lua:24`*

---

### `debug:debug` `[client/menu/server]`

This only works on the source dedicated server. 

Enters an interactive mode with the user, running each string that the user enters. Using simple commands and other debug facilities, the user can inspect global and local variables, change their values, evaluate expressions, and so on. A line containing only the word cont finishes this function, so that the caller continues its execution.

* Commands for debug.debug are not lexically nested within any function, and so have no direct access to local variables.
* To exit this interactive mode, you can press Ctrl + Z then Enter OR type the word 'cont' on a single line and press enter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `debug:getfenv` `[client/menu/server]`

Returns the environment of the passed object. This can be set with debug.setfenv.

**Argumentos:**

- `table object` — Object to get environment of.

**Retorna:**

- `table` — The environment.

---

### `debug:gethook` `[client/menu/server]`

Returns the current hook settings of the passed thread. The thread argument can be omitted. This is completely different to gamemode hooks. More information on hooks can be found at http://www.lua.org/pil/23.2.html. This function will simply return the function, mask, and count of the last called debug.sethook.

**Argumentos:**

- `thread thread` = `nil` — Which thread to retrieve it's hook from, doesn't seem to actually work.

**Retorna:**

- `function` — Hook function.
- `string` — Hook mask. This is reversed of the debug.sethook mask ("clr" would be "rlc").
- `number` — Hook count.

---

### `debug:getinfo` `[client/menu/server]`

Returns debug information about a function.

**Argumentos:**

- `function funcOrStackLevel` — Takes either a function or a number representing the stack level as an argument. Stack level 0 always corresponds to the debug.getinfo call, 1 would be the function calling debug.getinfo in most cases, and so on.

Returns useful information about that function in a table.
- `string fields` = `>flnSu` — A string whose characters specify the information to be retrieved.

* `f` - Populates the func field.
* `l` - Populates the currentline field.
* `L` - Populates the activelines field.
* `n` - Populates the name and namewhat fields - only works if stack level is passed rather than function pointer.
* `S` - Populates the location fields (lastlinedefined, linedefined, short_src, source and what).
* `u` - Populates the argument and upvalue fields (isvararg, nparams, nups).
* `&gt;` - Causes this function to use the last argument to get the data from.
- `function|nil function` — Function to use. (Only used by the `&gt;` field)

**Retorna:**

- `table` — A table as a Structures/DebugInfo containing information about the function you passed. Can return nil if the stack level didn't point to a valid stack frame.

---

### `debug:getlocal` `[client/menu/server]`

Gets the name and value of a local variable indexed from the level.
When a function has a tailcall return, you cannot access the locals of this function.

**Argumentos:**

- `thread thread` = `Current thread` — The thread.
- `number level` — The level above the thread.
* 0 = the function that was called (most always this function)'s arguments.
* 1 = the thread that had called this function.
* 2 = the thread that had called the function that started the thread that called this function.

A function defined in Lua can also be passed as the level. The index will specify the parameter's name to be returned (a parameter will have a value of nil).
- `number index` — The variable's index you want to get.
* 1 = the first local defined in the thread.
* 2 = the second local defined in the thread.
* etc...

**Retorna:**

- `string` — The name of the variable.

Sometimes this will be `(*temporary)` if the local variable had no name.

Variables with names starting with **(** are **internal variables**.
- `any` — The value of the local variable.

---

### `debug:getmetatable` `[client/menu/server]`

Returns the metatable of an object. This function ignores the metatable's __metatable field.

**Argumentos:**

- `any object` — The object to retrieve the metatable from.

**Retorna:**

- `table` — The metatable of the given object.

---

### `debug:getregistry` `[client/menu/server]`

This function now returns a table that serves as a proxy to Global.FindMetaTable and Global.RegisterMetaTable. If you previously used the registry to get/add metatables, you should use those functions directly instead.

Returns the internal Lua registry table.

The Lua registry is used by the engine and binary modules to create references to Lua values. The registry contains every global ran and used in the Lua environment. Avoid creating entries into the registry with a number as the key, as they are reserved for the reference system.

Improper editing of the registry can result in unintended side effects, including crashing the game.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The Lua registry.

*Fuente: `lua/includes/util.lua:2`*

---

### `debug:getupvalue` `[client/menu/server]`

Used for getting variable values in an index from the passed function. This does nothing for C functions.

**Argumentos:**

- `function func` — Function to get the upvalue indexed from.
- `number index` — The index in the upvalue array. The max number of entries can be found in debug.getinfo's "Structures/DebugInfo" key.

**Retorna:**

- `string` — Name of the upvalue. Will be nil if the index was out of range (&lt; 1 or &gt; debug.getinfo.nups), or the function was defined in C.
- `any` — Value of the upvalue.

---

### `debug:setfenv` `[client/menu/server]`

Sets the environment of the passed object.

Unlike Global.setfenv, this also works on **any** userdata, allowing you to save data stored to it which can be accessed using debug.getfenv.
Userdata seem to intentionally support this &amp; setting/changing it does not affect anything (though unused by gmod / Entities and such don't this)
This can be useful when trying to store data on a IGModAudioChannel, Vector, Angle or any other that doesn't already allow you to store data on it.

**Argumentos:**

- `any object` — Object to set environment of. Valid types: userdata, thread, function.
- `table env` — Environment to set.

**Retorna:**

- `table` — The object.

---

### `debug:sethook` `[client/menu/server]`

Sets the given function as a Lua hook. This is completely different to gamemode hooks. The thread argument can be completely omitted and calling this function with no arguments will remove the current hook. This is used by default for infinite loop detection. More information on hooks can be found at http://www.lua.org/pil/23.2.html and https://www.gammon.com.au/scripts/doc.php?lua=debug.sethook

Hooks are not always ran when code that has been compiled by LuaJIT's JIT compiler is being executed, this is due to Intermediate Representation internally storing constantly running bytecode for performance reasons.

**Argumentos:**

- `thread thread` — Thread to set the hook on. This argument can be omitted.
- `function hook` — Function for the hook to call. First argument in this function will be the mask event that called the hook as a full string (not as 'c' but instead as 'call').
- `string mask` — The hook's mask. Can be one or more of the following events:
* c - Triggers the hook on each function call made from Lua.
* r - Triggers the hook on each function return made from Lua.
* l - Triggers the hook on each line compiled of code.
- `number count` — How often to call the hook (in instructions). 0 for every instruction. Can be omitted.

**Retorna:**

*(sin retorno)*

---

### `debug:setlocal` `[client/menu/server]`

This function was removed due to security concerns.

Sets a local variable's value.

**Argumentos:**

- `thread thread` = `Current Thread` — The thread.
- `number level` — The level above the thread.

0 is the function that was called (most always this function)'s arguments.

1 is the thread that had called this function.

2 is the thread that had called the function that started the thread that called this function.
- `number index` — The variable's index you want to get.

1 = the first local defined in the thread.

2 = the second local defined in the thread.
- `any value` = `nil` — The value to set the local to.

**Retorna:**

- `string` — The name of the local variable if the local at the index exists, otherwise nil is returned.

---

### `debug:setmetatable` `[client/menu/server]`

Sets the object's metatable. Unlike Global.setmetatable, this function works regardless of whether the first object passed is a valid table or not; this function even works on primitive datatypes such as numbers, functions, and even nil.

**Argumentos:**

- `any object` — Object to set the metatable for.
- `table metatable` — The metatable to set for the object.
If this argument is nil, then the object's metatable is removed.

**Retorna:**

- `boolean` — true if the object's metatable was set successfully.

---

### `debug:setupvalue` `[client/menu/server]`

This function was removed due to security concerns.

Sets the variable indexed from func.

**Argumentos:**

- `function func` — The function to index the upvalue from.
- `number index` — The index from func.
- `any val` = `nil` — The value to set the upvalue to.

**Retorna:**

- `string` — Returns nil if there is no upvalue with the given index, otherwise it returns the upvalue's name.

---

### `debug:traceback` `[client/menu/server]`

Returns a full execution stack trace.

**Argumentos:**

- `thread thread` = `current thread` — Thread (ie. error object from xpcall error handler) to build traceback for. If this argument is not set to a proper thread it will act as the next argument.
- `string message` = `nil` — Appended at the beginning of the traceback.
- `number level` = `1` — Which level to start the traceback.

**Retorna:**

- `string` — A dump of the execution stack.

---

### `debug:upvalueid` `[client/menu/server]`

This function was removed due to security concerns.

Returns an unique identifier for the upvalue indexed from func.

**Argumentos:**

- `function func` — The function to index the upvalue from.
- `number index` — The index from func.

**Retorna:**

- `number` — A unique identifier.

---

### `debug:upvaluejoin` `[client/menu/server]`

This function was removed due to security concerns.

Makes an upvalue of `func1` refer to an upvalue of `func2`. Both functions provided must be Lua-defined, otherwise an error is thrown.

**Argumentos:**

- `function func1` — 
- `number upvalueIndex1` — The index of the upvalue in `func1`.
- `function func2` — 
- `number upvalueIndex2` — The index of the upvalue in `func2`.

**Retorna:**

*(sin retorno)*