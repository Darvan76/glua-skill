# timer

---

The timer library is a very useful set of functions which allow you to run a function periodically or after a given delay.

---


## Miembros (15)


---

### `timer:Adjust` `[client/menu/server]`

Adjusts a previously created (timer.Create) timer with the given identifier.

**Argumentos:**

- `any identifier` — Identifier of the timer to adjust.
- `number delay` — The delay interval in seconds. **Must be specified.**
- `number repetitions` = `nil` — Repetitions. Use `0` for infinite or `nil` to keep previous value.
- `function func` = `nil` — The new function. Use `nil` to keep previous value.

**Retorna:**

- `boolean` — `true` if succeeded.

---

### `timer:Check` `[client/menu/server]`

If you want to check if whether or not a timer exists, use timer.Exists. This function does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `timer:Create` `[client/menu/server]`

Creates a new timer that will repeat its function given amount of times.
This function also requires the timer to be named, which allows you to control it after it was created via the timer.

For a simple one-time timer with no identifiers, see timer.Simple.

Timers use Global.CurTime internally. Due to this, they won't advance while the client is timing out from the server or on an empty dedicated server due to hibernation. (unless `sv_hibernate_think` is set to `1` or `delay` is set to `0` ).

**Argumentos:**

- `string identifier` — Identifier of the timer to create. Must be unique. If a timer already exists with the same identifier, that timer will be updated to the new settings and reset.
- `number delay` — The delay interval in seconds. If the delay is too small, the timer will fire on the next GM:Tick.
- `number repetitions` — The number of times to repeat the timer. Enter `0` or any value below `0` for infinite repetitions.
- `function func` — Function called when timer has finished the countdown.

**Retorna:**

*(sin retorno)*

---

### `timer:Destroy` `[client/menu/server]`

You should be using timer.Remove instead. Stops and destroys the given timer. Alias of timer.Remove.

**Argumentos:**

- `string identifier` — Identifier of the timer to destroy.

**Retorna:**

*(sin retorno)*

---

### `timer:Exists` `[client/menu/server]`

Returns whenever the given timer exists or not.

For debugging purposes you can use the following commands:
* `lua_dumptimers_cl`
* `lua_dumptimers_sv`
* `lua_dumptimers_menu`

These will list all active timers in each realm.

**Argumentos:**

- `string identifier` — Identifier of the timer.

**Retorna:**

- `boolean` — Returns true if the timer exists, false if it doesn't

---

### `timer:IsPaused` `[client/menu/server]`

Returns whenever the given timer is paused or not. (timer.Pause)

**Argumentos:**

- `string identifier` — Identifier of the timer. (timer.Create)

**Retorna:**

- `boolean` — Returns true if the timer is paused, false if it isn't, `nil` if it doesn't exist.

---

### `timer:Pause` `[client/menu/server]`

Pauses the given timer.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

*(sin retorno)*

---

### `timer:Remove` `[client/menu/server]`

Stops and removes a timer created by timer.Create.
The timers are removed in the next frame! Keep this in mind when storing identifiers in variables.

**Argumentos:**

- `string identifier` — Identifier of the timer to remove.

**Retorna:**

*(sin retorno)*

---

### `timer:RepsLeft` `[client/menu/server]`

Returns amount of repetitions/executions left before the timer destroys itself.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

- `number` — The amount of executions left.

---

### `timer:Simple` `[client/menu/server]`

Creates a simple timer that runs the given function after a specified delay.

For a more advanced version that you can control after creation, see timer.Create.

Timers use Global.CurTime internally. Due to this, they won't advance while the client is timing out from the server or on an empty dedicated server due to hibernation. (unless `sv_hibernate_think` is set to `1`).

A previous message on this page stated that a delay of 0 would run the function on the next tick. This was partially an invalid assumption, and the true behavior is dependent on where `timer.Simple(0, func)` is called relative to `GarrysMod::Lua::Libraries::Timer::DoSimpleTimers`.

- If called *before* `DoSimpleTimers`, the callback will be executed on the same frame.

- If called *during* `DoSimpleTimers`, the callback will be executed on the same frame. **Note that calling timer.Simple(0, func) recursively (ie. a function that calls **`timer.simple(0, itself)`**) can lead to a hang!**

- If called *after* `DoSimpleTimers`, the callback will be executed on the next frame.

For more information on hook execution order, see Lua Hooks Order.

As of a commit on [2026.1.5](https://commits.facepunch.com/574654), simple timers are queued to the next frame.

As of a commit on [2026.1.8](https://commits.facepunch.com/575132), only timers with the same callback function are queued to the next frame. [Source](https://github.com/Facepunch/garrysmod-issues/issues/6668#issuecomment-3725044829)

**Argumentos:**

- `number delay` — How long until the function should be ran (in seconds). A value of `0` differs in behavior, depending on where you're calling this function.
- `function func` — The function to run after the specified delay.

**Retorna:**

*(sin retorno)*

---

### `timer:Start` `[client/menu/server]`

Restarts the given timer.

Timers won't advance while the client is timing out from the server.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

*(sin retorno)*

---

### `timer:Stop` `[client/menu/server]`

Stops the given timer and rewinds it.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

*(sin retorno)*

---

### `timer:TimeLeft` `[client/menu/server]`

Returns amount of time left (in seconds) before the timer executes its function.

If the timer is paused, the amount will be negative.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

- `number` — The amount of time left (in seconds).

---

### `timer:Toggle` `[client/menu/server]`

Runs either timer.Pause or timer.UnPause based on the timer's current status.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

*(sin retorno)*

---

### `timer:UnPause` `[client/menu/server]`

Unpauses the timer.

**Argumentos:**

- `any identifier` — Identifier of the timer.

**Retorna:**

*(sin retorno)*