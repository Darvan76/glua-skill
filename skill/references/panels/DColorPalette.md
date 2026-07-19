# DColorPalette

---

**Hereda de:** `DIconLayout`

---

The **DColorPalette** allows the player to select a color from a list of given colors.
This panel supports saving across sessions via the panel cookie system.
Use Panel:SetCookieName to change "save files".

---


## Miembros (23)


---

### `DColorPalette:DoClick` `[client/menu]`

Basically the same functionality as DColorPalette:OnValueChanged, you should use that instead!

For Override

**Argumentos:**

- `Color clr` — The new color via the Color
- `Panel btn` — The DColorButton that was pressed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:121`*

---

### `DColorPalette:GetButtonSize` `[client/menu]`

An Global.AccessorFunc that returns the size of each palette button. Set by DColorPalette:SetButtonSize.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The size of each palette button

*Fuente: `lua/vgui/dcolorpalette.lua:11`*

---

### `DColorPalette:GetConVarA` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the alpha channel of the color.

See also:
* DColorPalette:GetConVarR - For the red channel
* DColorPalette:GetConVarG - For the green channel
* DColorPalette:GetConVarB - For the blue channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the alpha channel of the color

*Fuente: `lua/vgui/dcolorpalette.lua:9`*

---

### `DColorPalette:GetConVarB` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the blue channel of the color.

See also:
* DColorPalette:GetConVarR - For the red channel
* DColorPalette:GetConVarG - For the green channel
* DColorPalette:GetConVarA - For the alpha channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the blue channel of the color

*Fuente: `lua/vgui/dcolorpalette.lua:8`*

---

### `DColorPalette:GetConVarG` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the green channel of the color.

See also:
* DColorPalette:GetConVarR - For the red channel
* DColorPalette:GetConVarB - For the blue channel
* DColorPalette:GetConVarA - For the alpha channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the green channel of the color

*Fuente: `lua/vgui/dcolorpalette.lua:7`*

---

### `DColorPalette:GetConVarR` `[client/menu]`

An Global.AccessorFunc that returns the ConVar name for the red channel of the color.

See also:
* DColorPalette:GetConVarG - For the green channel
* DColorPalette:GetConVarB - For the blue channel
* DColorPalette:GetConVarA - For the alpha channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The ConVar name for the red channel of the color

*Fuente: `lua/vgui/dcolorpalette.lua:6`*

---

### `DColorPalette:GetNumRows` `[client/menu]`

An Global.AccessorFunc that returns the number of rows of the palette, provided 6 colors fill each row. This value is equal to the number of colors in the DColorPalette divided by 6.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of rows of the DColorPalette.

*Fuente: `lua/vgui/dcolorpalette.lua:13`*

---

### `DColorPalette:NetworkColorChange` `[client/menu]`

Used internally to make sure changes on one palette affect other palettes with same name.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:103`*

---

### `DColorPalette:OnRightClickButton` `[client/menu]`

Called when a palette button has been pressed. For Override

**Argumentos:**

- `Panel pnl` — The DColorButton that was pressed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:232`*

---

### `DColorPalette:OnValueChanged` `[client/menu]`

Called when the color is changed after clicking a new value. For Override

**Argumentos:**

- `Color newcol` — The new color of the DColorPalette

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:228`*

---

### `DColorPalette:Reset` `[client/menu]`

Resets this entire color palette to a default preset one, without saving.

See DColorPalette:ResetSavedColors for version that also saves the changes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:127`*

---

### `DColorPalette:ResetSavedColors` `[client/menu]`

Resets this entire color palette to a default preset one and saves the changes.

See DColorPalette:Reset for version that does not save the changes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:133`*

---

### `DColorPalette:SaveColor` `[client/menu]`

Saves the color of given button across sessions.
The color is saved as a panel cookie, see Panel:SetCookie and Panel:SetCookieName.
It is expected that the amount of colors per palette (Panel:SetCookieName) is the same every time.

**Argumentos:**

- `Panel btn` — The button to save the color of. Used to get the ID of the button.
- `Color clr` — The color to save to this button's index

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:210`*

---

### `DColorPalette:SetButtonSize` `[client/menu]`

Sets the size of each palette button.

This is best kept to such a number, where this equation would return a whole number:
`WidthOfColorPalette / ButtonSize= WholeNumber`

If not, there will be ugly whitespace on the right side of the panel.

**Argumentos:**

- `number size` — Sets the new size

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:181`*

---

### `DColorPalette:SetColor` `[client/menu]`

Currently does nothing. Intended to "select" the color.

**Argumentos:**

- `Color clr` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:224`*

---

### `DColorPalette:SetColorButtons` `[client/menu]`

Clears the palette and adds new buttons with given colors.

**Argumentos:**

- `table tab` — A number indexed table where each value is a Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:164`*

---

### `DColorPalette:SetConVarA` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the alpha channel of the color.

See also:
* DColorPalette:SetConVarR - For the red channel
* DColorPalette:SetConVarG - For the green channel
* DColorPalette:SetConVarB - For the blue channel

**Argumentos:**

- `string convar` — The ConVar name for the alpha channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:9`*

---

### `DColorPalette:SetConVarB` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the blue channel of the color.

See also:
* DColorPalette:SetConVarR - For the red channel
* DColorPalette:SetConVarG - For the green channel
* DColorPalette:SetConVarA - For the alpha channel

**Argumentos:**

- `string convar` — The ConVar name for the blue channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:8`*

---

### `DColorPalette:SetConVarG` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the green channel of the color.

See also:
* DColorPalette:SetConVarR - For the red channel
* DColorPalette:SetConVarB - For the blue channel
* DColorPalette:SetConVarA - For the alpha channel

**Argumentos:**

- `string convar` — The ConVar name for the green channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:7`*

---

### `DColorPalette:SetConVarR` `[client/menu]`

An Global.AccessorFunc that sets the ConVar name for the red channel of the color.

See also:
* DColorPalette:SetConVarG - For the green channel
* DColorPalette:SetConVarB - For the blue channel
* DColorPalette:SetConVarA - For the alpha channel

**Argumentos:**

- `string convar` — The ConVar name for the red channel of the color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:6`*

---

### `DColorPalette:SetNumRows` `[client/menu]`

Roughly sets the number of colors that can be picked by the user. If the DColorPalette is exactly 6 rows tall, this function will set the number of colors shown per row in the palette. This is an Global.AccessorFunc
DColorPalette:Reset or DColorPalette:ResetSavedColors must be called after this function to apply changes.

**Argumentos:**

- `number rows` — Scale for the range of colors that the user can pick. Default is 8.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:13`*

---

### `DColorPalette:UpdateConVar` `[client/menu]`

Internal helper function for DColorPalette:UpdateConVars.

**Argumentos:**

- `string name` — The name of the console variable to set
- `string key` — The key of the 3rd argument to set the convar to
Possible values: "r", "g", "b", "a"
- `Color clr` — The Color to retrieve the info from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:193`*

---

### `DColorPalette:UpdateConVars` `[client/menu]`

Updates all the console variables set by DColorPalette:SetConVarR and so on with given color.

Called internally when a palette color is clicked.

**Argumentos:**

- `Color clr` — A Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcolorpalette.lua:201`*