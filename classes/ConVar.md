# ConVar

---

An object returned by Global.CreateConVar, Global.CreateClientConVar (which uses Global.CreateConVar internally), and Global.GetConVar.

It represents a console variable. See ConVars page for more information.

---


## Miembros (16)


---

### `ConVar:GetBool` `[client/menu/server]`

Tries to convert the current string value of a ConVar to a boolean.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — The boolean value of the console variable. If the variable is numeric and not 0, the result will be `true`. Otherwise the result will be `false`.

---

### `ConVar:GetDefault` `[client/menu/server]`

Returns the default value of the ConVar

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The default value of the console variable.

---

### `ConVar:GetFlags` `[client/menu/server]`

Returns the Enums/FCVAR flags of the ConVar

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number flag` — The bitflag. See Enums/FCVAR

---

### `ConVar:GetFloat` `[client/menu/server]`

Attempts to convert the ConVar value to a float

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The float value of the console variable.

If the value cannot be converted to a float, it will return 0.

---

### `ConVar:GetHelpText` `[client/menu/server]`

Returns the help text assigned to that convar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The help text

---

### `ConVar:GetInt` `[client/menu/server]`

Attempts to convert the ConVar value to a integer.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The integer value of the console variable.

If it fails to convert to an integer, it will return 0.

All float/decimal values will be rounded down. ( With math.floor )

---

### `ConVar:GetMax` `[client/menu/server]`

Returns the maximum value of the ConVar

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum value of the ConVar

---

### `ConVar:GetMin` `[client/menu/server]`

Returns the minimum value of the ConVar

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum value of the ConVar

---

### `ConVar:GetName` `[client/menu/server]`

Returns the name of the ConVar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the console variable.

---

### `ConVar:GetString` `[client/menu/server]`

Returns the current ConVar value as a string.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The current console variable value as a string.

---

### `ConVar:IsFlagSet` `[client/menu/server]`

Returns whether the specified flag is set on the ConVar

**Argumentos:**

- `number flag` — The Enums/FCVAR flag to test

**Retorna:**

- `boolean` — Whether the flag is set or not

---

### `ConVar:Revert` `[client/menu/server]`

Reverts ConVar to its default value

This can only be ran on ConVars created from within Lua.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ConVar:SetBool` `[client/menu/server]`

Sets a ConVar's value to 1 or 0 based on the input boolean. This can only be ran on ConVars created from within Lua.

**Argumentos:**

- `boolean value` — Value to set the ConVar to.

**Retorna:**

*(sin retorno)*

---

### `ConVar:SetFloat` `[client/menu/server]`

Sets a ConVar's value to the input number.
This can only be ran on ConVars created from within Lua.

**Argumentos:**

- `number value` — Value to set the ConVar to.

**Retorna:**

*(sin retorno)*

---

### `ConVar:SetInt` `[client/menu/server]`

Sets a ConVar's value to the input number after converting it to an integer.

This can only be ran on ConVars created from within Lua.

**Argumentos:**

- `number value` — Value to set the ConVar to.

**Retorna:**

*(sin retorno)*

---

### `ConVar:SetString` `[client/menu/server]`

Sets a ConVar's value to the input string. This can only be ran on ConVars created from within Lua.

**Argumentos:**

- `string value` — Value to set the ConVar to.

**Retorna:**

*(sin retorno)*