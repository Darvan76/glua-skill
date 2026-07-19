# DMenuOptionCVar

---

**Hereda de:** `DMenuOption`

---

An internal panel used by DMenu.
It acts as a menu option that can be checked.
It automatically sets and reads the given console variable.

It can be right clicked to toggle without closing the DMenu.

Use DMenu:AddCVar instead.

---


## Miembros (6)


---

### `DMenuOptionCVar:GetConVar` `[client]`

Returns the ConVars used by the DMenuOptionCVar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVars used

---

### `DMenuOptionCVar:GetValueOff` `[client]`

Returns the value of the ConVars when the DMenuOptionCVar is not checked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The value

---

### `DMenuOptionCVar:GetValueOn` `[client]`

Return the value of the ConVars when the DMenuOptionCVar is checked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The value

---

### `DMenuOptionCVar:SetConVar` `[client]`

Sets the ConVars to be used by DMenuOptionCVar.

**Argumentos:**

- `string cvar` — The ConVars name to set

**Retorna:**

*(sin retorno)*

---

### `DMenuOptionCVar:SetValueOff` `[client]`

Sets the value of the ConVars when the DMenuOptionCVar is not checked.

**Argumentos:**

- `string value` — The value

**Retorna:**

*(sin retorno)*

---

### `DMenuOptionCVar:SetValueOn` `[client]`

Sets the value of the ConVars when the DMenuOptionCVar is checked.

**Argumentos:**

- `string value` — The value

**Retorna:**

*(sin retorno)*