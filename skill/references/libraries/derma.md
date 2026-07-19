# derma

---

The derma library allows you to add custom derma controls and create &amp; modify derma skins.

---


## Miembros (13)


---

### `derma:Color` `[client/menu]`

Gets the color from a Derma skin of a panel and returns default color if not found.

**Argumentos:**

- `string name` — 
- `Panel pnl` — 
- `Color default` — The default Color in case of failure.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma.lua:222`*

---

### `derma:Controls` `[client/menu]`

This is NOT a function, it's a variable containing all derma controls, registered with derma.DefineControl.

Use derma.GetControlList to retrieve this list.

It's a list of tables, each having 3 keys, all from derma.DefineControl arguments:
* string ClassName - The class name of the panel.
* string Description - The description of the panel.
* string BaseClass - The base class of the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all registered derma controls.

---

### `derma:DefineControl` `[client/menu]`

Defines a new Derma control with an optional base.

This calls vgui.Register internally, but also does the following:
* Adds the control to derma.GetControlList
* Adds a key "Derma" - This is returned by derma.GetControlList
* Makes a global table with the name of the control (This is technically deprecated and should not be relied upon)
* If reloading (i.e. called this function with name of an existing panel), updates all existing instances of panels with this name. (Updates functions, calls PANEL:PreAutoRefresh and PANEL:PostAutoRefresh, etc.)

**Argumentos:**

- `string name` — Name of the newly created control.
- `string description` — Description of the control.
- `table tab` — Table containing control methods and properties.
- `string base` — Derma control to base the new control off of.

**Retorna:**

- `table` — A table containing the new control's methods and properties.

*Fuente: `lua/derma/derma.lua:99`*

---

### `derma:DefineSkin` `[client/menu]`

Defines a new skin so that it is usable by Derma. The default skin can be found in `garrysmod/lua/skins/default.lua`.

**Argumentos:**

- `string name` — Name of the skin.
- `string descriptions` — Description of the skin.
- `table skin` — Table containing skin data.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma.lua:132`*

---

### `derma:GetControlList` `[client/menu]`

Returns the derma.Controls table, a list of all derma controls registered with derma.DefineControl.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A listing of all available derma-based controls. See derma.Controls for structure and contents.

*Fuente: `lua/derma/derma.lua:90`*

---

### `derma:GetDefaultSkin` `[client/menu]`

Returns the default skin table, which can be changed with the hook GM:ForceDermaSkin.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The default skin table.

*Fuente: `lua/derma/derma.lua:163`*

---

### `derma:GetNamedSkin` `[client/menu]`

Returns the skin table of the skin with the supplied name.

**Argumentos:**

- `string name` — Name of skin.

**Retorna:**

- `table` — The skin table.

*Fuente: `lua/derma/derma.lua:183`*

---

### `derma:GetSkinTable` `[client/menu]`

Returns a copy of the table containing every Derma skin.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Table of every Derma skin.

*Fuente: `lua/derma/derma.lua:154`*

---

### `derma:RefreshSkins` `[client/menu]`

Clears all cached panels so that they reassess which skin they should be using.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma.lua:243`*

---

### `derma:SkinChangeIndex` `[client/menu]`

Returns how many times derma.RefreshSkins has been called.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Amount of times derma.RefreshSkins has been called.

*Fuente: `lua/derma/derma.lua:234`*

---

### `derma:SkinHook` `[client/menu]`

Checks if a matching hook function exists in the skin _(based on the concatenation of type and name args)_, then calls it.

This function is used dynamically inside Global.Derma_Hook.

**Argumentos:**

- `string type` — The type of hook to run, usually `Paint`.
- `string name` — The name of the hook/panel to run. Example: `Button`.
- `Panel panel` — The panel to call the hook for.
- `any vararg1` = `nil` — First parameter for the panel hook. i.e. width of the panel for.PANEL:Paint hooks.
- `any vararg2` = `nil` — Second parameter for the panel hook. i.e. height of the panel for.PANEL:Paint hooks.

**Retorna:**

- `any` — The returned variable from the skin hook.

*Fuente: `lua/derma/derma.lua:187`*

---

### `derma:SkinList` `[client/menu]`

This is NOT a function, it's a variable containing all registered via derma.DefineSkin derma skins.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all registered derma skins.

---

### `derma:SkinTexture` `[client/menu]`

Returns a function to draw a specified texture of panels skin.

These are usually generated via GWEN.CreateTextureBorder and similar.

**Argumentos:**

- `string name` — The identifier of the texture.
- `Panel pnl` — Panel to get the skin of.
- `function fallback` = `nil` — What to return if we failed to retrieve the texture.

**Retorna:**

- `function` — A function that is created with the GWEN library to draw a texture.

X coordinate for the box.
Y coordinate for the box.
Width of the box.
Height of the box.
Optional color, default is white.

*Fuente: `lua/derma/derma.lua:207`*