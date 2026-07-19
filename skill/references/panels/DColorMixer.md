# DColorMixer

---

**Hereda de:** `DPanel`

---

A standard Derma color mixer

---


## Miembros (27)


---

### `DColorMixer:ConVarThink` `[client/menu]`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:341`*

---

### `DColorMixer:DoConVarThink` `[client/menu]`

**Argumentos:**

- `string cvar` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:362`*

---

### `DColorMixer:GetAlphaBar` `[client/menu]`

An Global.AccessorFunc that returns true if alpha bar is shown, false if not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true if shown, false if not.

*Fuente: `lua/vgui/dcolormixer.lua:10`*

---

### `DColorMixer:GetColor` `[client/menu]`

An Global.AccessorFunc that returns the current selected color.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The current selected color as a Color.

*Fuente: `lua/vgui/dcolormixer.lua:317`*

---

### `DColorMixer:GetConVarA` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the alpha channel of the color.

See also:
* DColorMixer:GetConVarR - For the red channel
* DColorMixer:GetConVarG - For the green channel
* DColorMixer:GetConVarB - For the blue channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the alpha channel of the color

*Fuente: `lua/vgui/dcolormixer.lua:7`*

---

### `DColorMixer:GetConVarB` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the blue channel of the color.

See also:
* DColorMixer:GetConVarR - For the red channel
* DColorMixer:GetConVarG - For the green channel
* DColorMixer:GetConVarA - For the alpha channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the blue channel of the color

*Fuente: `lua/vgui/dcolormixer.lua:6`*

---

### `DColorMixer:GetConVarG` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the green channel of the color.

See also:
* DColorMixer:GetConVarR - For the red channel
* DColorMixer:GetConVarB - For the blue channel
* DColorMixer:GetConVarA - For the alpha channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the green channel of the color

*Fuente: `lua/vgui/dcolormixer.lua:5`*

---

### `DColorMixer:GetConVarR` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the red channel of the color.

See also:
* DColorMixer:GetConVarG - For the green channel
* DColorMixer:GetConVarB - For the blue channel
* DColorMixer:GetConVarA - For the alpha channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the red channel of the color

*Fuente: `lua/vgui/dcolormixer.lua:4`*

---

### `DColorMixer:GetPalette` `[client/menu]`

An Global.AccessorFunc that returns true if palette is shown, false if not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true if shown, false if not.

*Fuente: `lua/vgui/dcolormixer.lua:9`*

---

### `DColorMixer:GetVector` `[client/menu]`

Returns the color as a normalized Vector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — A vector representing the color of the DColorMixer, each value being in range of 0 to 1. Alpha is not included.

*Fuente: `lua/vgui/dcolormixer.lua:328`*

---

### `DColorMixer:GetWangs` `[client/menu]`

An Global.AccessorFunc that returns true if the wangs are shown, false if not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true if shown, false if not.

*Fuente: `lua/vgui/dcolormixer.lua:11`*

---

### `DColorMixer:SetAlphaBar` `[client/menu]`

An Global.AccessorFunc that show/hide the alpha bar in DColorMixer

**Argumentos:**

- `boolean show` — Show / Hide the alpha bar

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:166`*

---

### `DColorMixer:SetBaseColor` `[client/menu]`

Sets the base color of the DColorCube part of the DColorMixer.

See also DColorCube:SetBaseRGB

**Argumentos:**

- `Color clr` — Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:252`*

---

### `DColorMixer:SetColor` `[client/menu]`

An Global.AccessorFunc that sets the color of the DColorMixer. See also DColorMixer:GetColor

**Argumentos:**

- `Color color` — The color to set. See Global.Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:13`*

---

### `DColorMixer:SetConVarA` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the alpha channel of the color.

See also:
* DColorMixer:SetConVarR - For the red channel
* DColorMixer:SetConVarG - For the green channel
* DColorMixer:SetConVarB - For the blue channel

**Argumentos:**

- `string convar` — The ConVar name for the alpha channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:198`*

---

### `DColorMixer:SetConVarB` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the blue channel of the color.

See also:
* DColorMixer:SetConVarR - For the red channel
* DColorMixer:SetConVarG - For the green channel
* DColorMixer:SetConVarA - For the alpha channel

**Argumentos:**

- `string convar` — The ConVar name for the blue channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:193`*

---

### `DColorMixer:SetConVarG` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the green channel of the color.

See also:
* DColorMixer:SetConVarR - For the red channel
* DColorMixer:SetConVarB - For the blue channel
* DColorMixer:SetConVarA - For the alpha channel

**Argumentos:**

- `string convar` — The ConVar name for the green channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:188`*

---

### `DColorMixer:SetConVarR` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the red channel of the color.

See also:
* DColorMixer:SetConVarG - For the green channel
* DColorMixer:SetConVarB - For the blue channel
* DColorMixer:SetConVarA - For the alpha channel

**Argumentos:**

- `string convar` — The ConVar name for the red channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:183`*

---

### `DColorMixer:SetLabel` `[client/menu]`

Sets the label's text to show.

**Argumentos:**

- `string text` = `nil` — Set to non empty string to show the label and its text.

Give it an empty string or nothing and the label will be hidden.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:144`*

---

### `DColorMixer:SetPalette` `[client/menu]`

Show or hide the palette panel

**Argumentos:**

- `boolean enabled` — Show or hide the palette panel?

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:158`*

---

### `DColorMixer:SetVector` `[client/menu]`

Sets the color of DColorMixer from a Vector. Alpha is not included.

**Argumentos:**

- `Vector vec` — The color to set. It is expected that the vector will have values be from 0 to 1. (i.e. be normalized)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:246`*

---

### `DColorMixer:SetWangs` `[client/menu]`

Show / Hide the colors indicators in DColorMixer

**Argumentos:**

- `boolean show` — Show / Hide the colors indicators

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:175`*

---

### `DColorMixer:UpdateColor` `[client/menu]`

Use DColorMixer:SetColor instead!

**Argumentos:**

- `Color clr` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:277`*

---

### `DColorMixer:UpdateConVar` `[client/menu]`

**Argumentos:**

- `string cvar` — The ConVar name
- `string part` — The color part to set the cvar to. "r", "g", "b" or "a".
- `Color clr` — The Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:257`*

---

### `DColorMixer:UpdateConVars` `[client/menu]`

**Argumentos:**

- `Color clr` — The Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:266`*

---

### `DColorMixer:UpdateDefaultColor` `[client/menu]`

sets the default color of the element to the currently selected color

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:204`*

---

### `DColorMixer:ValueChanged` `[client/menu]`

Called when the player changes the color of the DColorMixer. Meant to be overridden.

The returned color will not have the color metatable.

**Argumentos:**

- `Color col` — The new color. See Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolormixer.lua:313`*