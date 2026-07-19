# DHTML

---

**Hereda de:** `HTML`

---

The DHTML control wraps the internal web engine, supports calling Javascript functions from Lua,
as well as running Lua from within the HTML. Running Lua code is disabled by default.

---


## Miembros (7)


---

### `DHTML:AddFunction` `[client/menu]`

Defines a Javascript function that when called will call a Lua callback.
Must be called after the HTML document has fully loaded.

**Argumentos:**

- `string library` — Library name of the JS function you are defining.
- `string name` — Name of the JS function you are defining.
- `function callback` — Function called when the JS function is called. Arguments passed to the JS function will be passed here.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dhtml.lua:123`*

---

### `DHTML:Call` `[client/menu]`

Runs/Executes a string as JavaScript code in a panel.
This function does **NOT** evaluate expression (i.e. allow you to pass variables from JavaScript (JS) to Lua context).Because a return value is nil/no value (a.k.a. void).If you wish to pass/return values from JS to Lua, you may want to use DHTML:AddFunction function to accomplish that job.
This function is an alias of DHTML:QueueJavascript ([source](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/lua/vgui/dhtml.lua#L62)).

**Argumentos:**

- `string js` — Specify JavaScript code to be executed.

**Retorna:**

*(sin retorno)*

---

### `DHTML:GetAllowLua` `[client/menu]`

Returns if the loaded page can run Lua code, set by DHTML:SetAllowLua

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not Lua code can be called from the loaded page.

---

### `DHTML:GetScrollbars` `[client/menu]`

Broken. Use the CSS `overflow` rule instead.

Returns the value set by DHTML:SetScrollbars.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean show` — True if scrollbars should be visible.

---

### `DHTML:QueueJavascript` `[client/menu]`

Runs/Executes a string as JavaScript code in a panel.

This function does **NOT** evaluate expression (i.e. allow you to pass variables from JavaScript (JS) to Lua context).Because a return value is nil/no value (a.k.a. void).If you wish to pass/return values from JS to Lua, you may want to use DHTML:AddFunction function to accomplish that job.
If Panel:IsVisible is `false`, PANEL:Think will **NOT** run, meaning the Javascript Queue will not be processed.Consider overriding PANEL:Paint to stop the panel from drawing instead.

**Argumentos:**

- `string js` — Specify JavaScript code to be executed.

**Retorna:**

*(sin retorno)*

---

### `DHTML:SetAllowLua` `[client/menu]`

Determines whether the loaded page can run Lua code or not. See DHTML for how to run Lua from a DHTML window.

**Argumentos:**

- `boolean allow` = `false` — Whether or not to allow Lua.

**Retorna:**

*(sin retorno)*

---

### `DHTML:SetScrollbars` `[client/menu]`

Broken. Use the CSS `overflow` rule instead. Sets if the loaded window should display scrollbars when the webpage is larger than the viewing window. This is similar to the CSS `overflow` rule.

**Argumentos:**

- `boolean show` — True if scrollbars should be visible.

**Retorna:**

*(sin retorno)*