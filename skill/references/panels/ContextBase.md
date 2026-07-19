# ContextBase

---

**Hereda de:** `Panel`

---

A base for all context menu panels ( The ones used for tool options in sandbox )

---


## Miembros (4)


---

### `ContextBase:ConVar` `[client]`

Returns the ConVar for the panel to change/handle, set by ContextBase:SetConVar

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar for the panel to change.

*Fuente: `lua/vgui/contextbase.lua:16`*

---

### `ContextBase:ControlValues` `[client]`

Called by spawnmenu functions (when creating a context menu) to fill this control with data.

**Argumentos:**

- `table contextData` — A two-membered table:
* string convar - The console variable to use. Calls ContextBase:SetConVar.
* string label - The text to display inside the control's label.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/contextbase.lua:20`*

---

### `ContextBase:SetConVar` `[client]`

Sets the ConVar for the panel to change/handle.

**Argumentos:**

- `string cvar` — The ConVar for the panel to change.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/contextbase.lua:12`*

---

### `ContextBase:TestForChanges` `[client]`

You should override this function and use it to check whether your convar value changed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/contextbase.lua:40`*