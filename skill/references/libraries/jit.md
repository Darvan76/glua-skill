# jit

---

Library to work with the [LuaJIT](http://luajit.org/) functionality of gmod.

---


## Miembros (21)


---

### `jit:arch` `[client/menu/server]`

A variable containing the target architecture name: `x86`, `x64`, `arm`, `ppc`, `ppcspe`, or `mips`. This will be `x86` or `x64` in GMod.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The system architecture.

---

### `jit:attach` `[client/menu/server]`

This function was disabled due to security concerns.
You can attach callbacks to a number of compiler events with jit.attach. The callback can be called:

* when a function has been compiled to bytecode (`"bc"`);
* when trace recording starts or stops (`"trace"`);
* as a trace is being recorded (`"record"`);
* or when a trace exits through a side exit (`"texit"`).

Set a callback with `jit.attach(callback, "event")` and clear the same callback with `jit.attach(callback)`.
Only one callback can be active per event.

This function isn't officially documented on LuaJIT wiki, use it at your own risk.

**Argumentos:**

- `function callback` — The callback function.

The arguments passed to the callback depend on the event being reported:

* `"bc"`:
* function **func** - The function that's just been recorded
* `"trace"`:
* string **what** - description of the trace event: "flush", "start", "stop", "abort". Available for all events.
* number **tr** - The trace number. Not available for flush.
* function **func** - The function being traced. Available for start and abort.
* number **pc** - The program counter - the bytecode number of the function being recorded (if this a Lua function). Available for start and abort.
* number **otr** - start: the parent trace number if this is a side trace, abort: abort code
* string **oex** - start: the exit number for the parent trace, abort: abort reason (string)
* `"record"`:
* number **tr** - The trace number. Not available for flush.
* function **func** - The function being traced. Available for start and abort.
* number **pc** - The program counter - the bytecode number of the function being recorded (if this a Lua function). Available for start and abort.
* number **depth** - The depth of the inlining of the current bytecode.
* `"texit"`:
* number **tr** - The trace number. Not available for flush.
* number **ex** - The exit number
* number **ngpr** - The number of general-purpose and floating point registers that are active at the exit.
* number **nfpr** - The number of general-purpose and floating point registers that are active at the exit.
- `string event` — The event to hook into.

**Retorna:**

*(sin retorno)*

---

### `jit:flush` `[client/menu/server]`

Flushes the whole cache of compiled code.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `jit:off` `[client/menu/server]`

Disables LuaJIT Lua compilation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `jit:on` `[client/menu/server]`

Enables LuaJIT Lua compilation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `opt.start` `[client/menu/server]`

JIT compiler optimization control. The opt sub-module provides the backend for the -O command line LuaJIT option.
You can also use it programmatically, e.g.:

```
jit.opt.start(2) -- same as -O2
jit.opt.start("-dce")
jit.opt.start("hotloop=10", "hotexit=2")
```

A list of LuaJIT -O command line options can be found here(a table of various optimization levels are displayed towards the bottom of the page along with exactly which optimization options are enabled for each level): http://luajit.org/running.html

**Argumentos:**

- `vararg args` — 

**Retorna:**

*(sin retorno)*

---

### `jit:os` `[client/menu/server]`

This is NOT a function, it's a variable containing the target OS name: `Windows`, `Linux`, `OSX`, `BSD`, `POSIX` or `Other`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The operating system.

---

### `jit:status` `[client/menu/server]`

Returns the status of the JIT compiler and the current optimizations enabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is JIT enabled
- `any` — Strings for CPU-specific features and enabled optimizations

---

### `util.funcbc` `[client/menu/server]`

Returns bytecode of a function at a position.
This function only works for Lua defined functions.

**Argumentos:**

- `function func` — Function to retrieve bytecode from.
- `number pos` — Position of the bytecode to retrieve.

**Retorna:**

- `number` — bytecode instruction
- `number` — bytecode opcode

---

### `util.funcinfo` `[client/menu/server]`

Retrieves LuaJIT information about a given function, similarly to debug.getinfo. Possible table fields:
* linedefined: as for debug.getinfo
* lastlinedefined: as for debug.getinfo
* params: the number of parameters the function takes
* stackslots: the number of stack slots the function's local variable use
* upvalues: the number of upvalues the function uses
* bytecodes: the number of bytecodes it the compiled function
* gcconsts: the number of garbage collectable constants
* nconsts: the number of lua_Number (double) constants
* children: Boolean representing whether the function creates closures
* currentline: as for debug.getinfo
* isvararg: if the function is a vararg function
* source: as for debug.getinfo
* loc: a string describing the source and currentline, like "&lt;source&gt;:&lt;line&gt;"
* ffid: the fast function id of the function (if it is one). In this case only upvalues above and addr below are valid
* addr: the address of the function (if it is not a Lua function). If it's a C function rather than a fast function, only upvalues above is valid*

**Argumentos:**

- `function func` — Function or Proto to retrieve info about.
- `number pos` = `0` — 

**Retorna:**

- `table` — Information about the supplied function/proto.

---

### `util.funck` `[client/menu/server]`

Gets a constant at a certain index in a function.
This function was disabled due to security concerns.

This function isn't officially documented on LuaJIT wiki, use it at your own risk.
Numbers constants goes from 0 (included) to n-1, n being the value of nconsts in jit.util.funcinfo in other words, the consts goes from (nconsts-1) to -n
This function only works for Lua defined functions.

**Argumentos:**

- `function func` — Function to get constant from
- `number index` — Constant index (counting down from the top of the function at -1)

**Retorna:**

- `any` — The constant found.

This will return a proto for functions that are created inside the target function - see Example 2.

---

### `util.funcuvname` `[client/menu/server]`

This function was disabled due to security concerns.

Does the exact same thing as debug.getupvalue except it only returns the name, not the name and the object. The upvalue indexes also start at 0 rather than 1, so doing `jit.util.funcuvname(func, 0)` will get you the same name as `debug.getupvalue(func, 1)`
This function isn't officially documented on LuaJIT wiki, use it at your own risk.

**Argumentos:**

- `function func` — Function to get the upvalue indexed from
- `number index` — The upvalue index, starting from 0

**Retorna:**

- `string` — The function returns nil if there is no upvalue with the given index, otherwise the name of the upvalue is returned

---

### `util.ircalladdr` `[client/menu/server]`

This function was disabled due to security concerns.

Previously got the address of a function from a set list of functions, but now always returns `0` as it is deprecated.

**Argumentos:**

- `number index` — This argument is ignored.

**Retorna:**

- `number` — Always returns `0`

---

### `util.traceexitstub` `[client/menu/server]`

This function was disabled due to security concerns. It will always return 0.
Grabs the address of a function based on it's trace exit number. Grabbed via jit.attach (with the texit event).

**Argumentos:**

- `number exitno` — exit number to retrieve exit stub address from (gotten via jit.attach with the texit event)

**Retorna:**

- `number` — exitstub trace address

---

### `util.traceinfo` `[client/menu/server]`

This function was disabled due to security concerns.

Return table fields:
* link (number): the linked trace (0 for link types: none, return, interpreter)
* nk (number): the lowest IR constant (???)
* nins (number): the next IR instruction (???)
* linktype (string): the link type (none, root, loop, tail-recursion, up-recursion, down-recursion, interpreter, return)
* nexit (number): number of snapshots (for use with jit.util.tracesnap)

**Argumentos:**

- `number trace` — trace index to retrieve info for (gotten via jit.attach)

**Retorna:**

- `table` — trace info

---

### `util.traceir` `[client/menu/server]`

This function was disabled due to security concerns.

**Argumentos:**

- `number tr` — 
- `number index` — 

**Retorna:**

- `number` — m
- `number` — ot
- `number` — op1
- `number` — op2
- `number` — prev

---

### `util.tracek` `[client/menu/server]`

This function was disabled due to security concerns.

**Argumentos:**

- `number tr` — 
- `number index` — 

**Retorna:**

- `any` — k
- `number` — t
- `number` — slot; optional

---

### `util.tracemc` `[client/menu/server]`

This function was disabled due to security concerns. It will always return 3 `0`s.

**Argumentos:**

- `number tr` — 

**Retorna:**

- `string` — mcode
- `number` — address
- `number` — loop

---

### `util.tracesnap` `[client/menu/server]`

This function was disabled due to security concerns.

Return table fields:
* 0 (ref) (number): first IR ref for the snapshot
* 1 (nslots) (number): the number of valid slots
* all indexes except first 2 and last (there might not be any of these): the snapshot map
* last index in table (number): -16777216 (255 &lt;&lt; 24)

**Argumentos:**

- `number tr` — trace index to retrieve snapshot for (gotten via jit.attach)
- `number sn` — snapshot index for trace (starting from 0 to nexit - 1, nexit gotten via jit.util.traceinfo)

**Retorna:**

- `table` — snapshot

---

### `jit:version` `[client/menu/server]`

A variable containing the LuaJIT version string. This is `LuaJIT 2.0.4` in GMod, and `LuaJIT 2.1.0-beta3` on the x86-64 branch of GMod.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The version string.

---

### `jit:version_num` `[client/menu/server]`

A variable containing the version number of the LuaJIT core.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The version number.  Version `xx.yy.zz` is represented by the decimal number `xxyyzz`. In GMod this is `20004`. On x86-64 branch it's `20100`.