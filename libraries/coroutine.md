# coroutine

---

Coroutines are similar to threads, however they do not run simultaneously. They offer a way to split up tasks and dynamically pause &amp; resume functions.

---


## Miembros (8)


---

### `coroutine:create` `[client/menu/server]`

Creates a coroutine of the given function.

**Argumentos:**

- `function func` — The function for the coroutine to use.

**Retorna:**

- `thread` — The created coroutine.

---

### `coroutine:isyieldable` `[client/menu/server]`

Returns whether the running coroutine can yield.
A running coroutine is yieldable if it is not in the main thread, and it is not inside a non-yieldable C&nbsp;function.
This is only available on the x86-64 versions, because of the difference in the LuaJIT version. [See here](jit.version)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean canyield` — Returns true when the running coroutine can yield.

---

### `coroutine:resume` `[client/menu/server]`

Resumes the given coroutine and passes the given vararg to either the function arguments or the coroutine.yield that is inside that function and returns whatever yield is called with the next time or by the final return in the function.

**Argumentos:**

- `thread coroutine` — Coroutine to resume.
- `vararg args` — Arguments to be returned by coroutine.yield.

**Retorna:**

- `boolean` — If the executed thread code had no errors occur within it.
- `vararg` — If an error occurred, this will be a string containing the error message. Otherwise, this will be arguments that were yielded.

---

### `coroutine:running` `[client/menu/server]`

Returns the active coroutine or nil if we are not within a coroutine.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `thread` — The active coroutine.

---

### `coroutine:status` `[client/menu/server]`

Returns the status of the coroutine passed to it, the possible statuses are "suspended", "running", and "dead".

**Argumentos:**

- `thread coroutine` — Coroutine to check the status of.

**Retorna:**

- `string` — The coroutine's status.

---

### `coroutine:wait` `[client/server]`

Repeatedly yields the coroutine for the given duration before continuing.

Only works inside a coroutine. Only useful in nextbot coroutine think function.

This function uses Global.CurTime instead of Global.RealTime.

**Argumentos:**

- `number duration` — The number of seconds to wait.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/coroutine.lua:15`*

---

### `coroutine:wrap` `[client/menu/server]`

Returns a function which calling is equivalent with calling coroutine.resume with the coroutine and all extra parameters.

The values returned by the returned function only contain the values passed to the inner coroutine.yield call and do not include the *no error* status that coroutine.resume provides. In case of failure, an error is thrown instead.

**Argumentos:**

- `function coroutine` — Coroutine to resume.

**Retorna:**

- `function` — 

---

### `coroutine:yield` `[client/menu/server]`

Pauses the active coroutine and passes all additional variables to the call of coroutine.resume that resumed the coroutine last time, and returns all additional variables that were passed to the previous call of resume.

**Argumentos:**

- `vararg returnValue` — Arguments to be returned by the last call of coroutine.resume.

**Retorna:**

- `vararg` — Arguments that were set previously by coroutine.resume.