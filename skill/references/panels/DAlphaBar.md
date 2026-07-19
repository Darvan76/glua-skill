# DAlphaBar

---

**Hereda de:** `DPanel`

---

A bar to select the opacity (alpha level) of a color.

---


## Miembros (5)


---

### `DAlphaBar:GetBarColor` `[client/menu]`

Returns the base color of the alpha bar. This is the color for which the alpha channel is being modified. An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The current base Color.

*Fuente: `lua/vgui/dalphabar.lua:8`*

---

### `DAlphaBar:GetValue` `[client/menu]`

Returns the alpha value of the alpha bar. An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current alpha value.

*Fuente: `lua/vgui/dalphabar.lua:7`*

---

### `DAlphaBar:OnChange` `[client/menu]`

Called when user changes the desired alpha value with the control. This function is meant to be overridden

**Argumentos:**

- `number alpha` — The new alpha value

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dalphabar.lua:45`*

---

### `DAlphaBar:SetBarColor` `[client/menu]`

Sets the base color of the alpha bar. This is the color for which the alpha channel is being modified. An Global.AccessorFunc

**Argumentos:**

- `Color clr` — The new Color to set. See Global.Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dalphabar.lua:8`*

---

### `DAlphaBar:SetValue` `[client/menu]`

Sets the alpha value or the alpha bar. An Global.AccessorFunc

**Argumentos:**

- `number alpha` — The new alpha value to set

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dalphabar.lua:7`*