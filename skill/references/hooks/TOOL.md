# TOOL

---


## Miembros (10)


---

### `TOOL:BuildCPanel` `[client]`

Called when the tool's control panel needs to be rebuilt.

Due to historical reasons, this hook does not provide the tool object as `self`! See examples.

**Argumentos:**

- `Panel cpanel` — The DForm control panel to add settings to.

**Retorna:**

*(sin retorno)*

---

### `TOOL:Deploy` `[client/server]`

Called when WEAPON:Deploy of the toolgun is called.

This is also called when switching from another tool on the server.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to allow switching away from the toolgun using lastinv command

---

### `TOOL:DrawHUD` `[client]`

Called when WEAPON:DrawHUD of the toolgun is called, only when the user has this tool selected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `TOOL:DrawToolScreen` `[client]`

Called after the default tool screen has been drawn from WEAPON:RenderScreen.

If this method exists on the TOOL object table, the default scrolling text will not be drawn
Materials rendered in this hook require $ignorez parameter to draw properly.

**Argumentos:**

- `number width` — The width of the tool's screen in pixels.
- `number height` — The height of the tool's screen in pixels.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/cl_viewscreen.lua:62`*

---

### `TOOL:FreezeMovement` `[client]`

Called when WEAPON:Think of the toolgun is called, only when the user has this tool selected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to freeze the player

---

### `TOOL:Holster` `[client/server]`

Called when WEAPON:Holster of the toolgun is called, when switching between different toolguns.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `TOOL:LeftClick` `[client/server]`

Called when the user left clicks with the tool.

**Argumentos:**

- `table tr` — A trace from user's eyes to wherever they aim at. See Structures/TraceResult

**Retorna:**

- `boolean` — Return `true` to draw the tool gun beam and play fire animations, `false` otherwise.

---

### `TOOL:Reload` `[client/server]`

Called when the user presses the reload key with the tool out.

**Argumentos:**

- `table tr` — A trace from user's eyes to wherever they aim at. See Structures/TraceResult

**Retorna:**

- `boolean` — Return `true` to draw the tool gun beam and play fire animations, `false` otherwise

---

### `TOOL:RightClick` `[client/server]`

Called when the user right clicks with the tool.

**Argumentos:**

- `table tr` — A trace from user's eyes to wherever they aim at. See Structures/TraceResult

**Retorna:**

- `boolean` — Return `true` to draw the tool gun beam and play fire animations, `false` otherwise

---

### `TOOL:Think` `[client/server]`

Called when WEAPON:Think of the toolgun is called. This only happens when the tool gun is currently equipped/selected by the player and the selected tool is this tool.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*