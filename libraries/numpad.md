# numpad

---

The numpad module allows you to execute functions on a key press or release.

---


## Miembros (8)


---

### `numpad:Activate` `[server]`

Activates numpad key owned by the player

**Argumentos:**

- `Player ply` — The player whose numpad should be simulated
- `number key` — The key to press, see Enums/KEY
- `boolean isButton` = `false` — Should this keypress pretend to be a from a `gmod_button`? (causes numpad.FromButton to return `true`)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/numpad.lua:96`*

---

### `numpad:Deactivate` `[server]`

Deactivates numpad key owned by the player

**Argumentos:**

- `Player ply` — The player whose numpad should be simulated
- `number key` — The key to press, corresponding to Enums/KEY
- `boolean isButton` = `false` — Should this keypress pretend to be a from a `gmod_button`? (causes numpad.FromButton to return `true`)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/numpad.lua:122`*

---

### `numpad:FromButton` `[server]`

Returns true during a function added with numpad.Register when the third argument to numpad.Activate is true.

This is caused when a numpad function is triggered by a button SENT being used.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — wasButton

*Fuente: `lua/includes/modules/numpad.lua:30`*

---

### `numpad:OnDown` `[server]`

Calls a function registered with numpad.Register when a player presses specified key.

See for key released action: numpad.OnUp

**Argumentos:**

- `Player ply` — The player whose numpad should be watched
- `number key` — The key, corresponding to Enums/KEY
- `string name` — The name of the function to run, corresponding with the one used in numpad.Register
- `vararg ...` — Arguments to pass to the function passed to numpad.Register.

**Retorna:**

- `number` — The impulse ID

*Fuente: `lua/includes/modules/numpad.lua:174`*

---

### `numpad:OnUp` `[server]`

Calls a function registered with numpad.Register when a player releases specified key.

See for key pressed action: numpad.OnDown

**Argumentos:**

- `Player ply` — The player whose numpad should be watched
- `number key` — The key, corresponding to Enums/KEY
- `string name` — The name of the function to run, corresponding with the one used in numpad.Register
- `vararg ...` — Arguments to pass to the function passed to numpad.Register.

**Retorna:**

- `number` — The impulse ID

*Fuente: `lua/includes/modules/numpad.lua:192`*

---

### `numpad:Register` `[server]`

Registers a numpad library action for use with numpad.OnDown and numpad.OnUp

**Argumentos:**

- `string id` — The unique id of your action.
- `function func` — The function to be executed.

The player who pressed the button
The 4th and all subsequent arguments passed from numpad.OnDown and/or numpad.OnUp.
Returning `false` in this function will remove the listener which triggered this function

(example: return `false` if one of your varargs is an entity which is no longer valid)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/numpad.lua:241`*

---

### `numpad:Remove` `[server]`

Removes a function added by either numpad.OnUp or numpad.OnDown

**Argumentos:**

- `number ID` — The impulse ID returned by numpad.OnUp or numpad.OnDown

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/numpad.lua:229`*

---

### `numpad:Toggle` `[server]`

Either runs numpad.Activate or numpad.Deactivate depending on the key's current state

**Argumentos:**

- `Player ply` — The player whose numpad should be simulated
- `number key` — The key to press, corresponding to Enums/KEY

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/numpad.lua:145`*