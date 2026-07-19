# controlpanel

---

The controlpanel library.

---


## Miembros (2)


---

### `controlpanel:Clear` `[client]`

Clears ALL the control panels ( for tools ).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/controlpanel.lua:43`*

---

### `controlpanel:Get` `[client]`

Returns (or creates if not exists) a control panel.

**Argumentos:**

- `string name` — The name of the panel. For normal tools this will be equal to `TOOL.Mode` (the tool's filename without the extension).

When you create a tool/option via spawnmenu.AddToolMenuOption, the internal control panel name is `TOOL.Mode .. "_" .. tool_tab:lower() .. "_" .. tool_category:lower()`.

**Retorna:**

- `Panel` — The ControlPanel panel.

*Fuente: `lua/includes/modules/controlpanel.lua:21`*