# DButton

---

**Hereda de:** `DLabel`

---

A standard Derma button.

By default, a DButton is 22px tall.

---


## Miembros (8)


---

### `DButton:GetDrawBorder` `[client/menu]`

An Global.AccessorFunc that returns value set by DButton:SetDrawBorder. See that page for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — value set by DButton:SetDrawBorder.

*Fuente: `lua/vgui/dbutton.lua:4`*

---

### `DButton:IsDown` `[client/menu]`

Returns true if the DButton is currently depressed (a user is clicking on it).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the button is depressed.

*Fuente: `lua/vgui/dbutton.lua:26`*

---

### `DButton:SetConsoleCommand` `[client/menu]`

Sets a console command to be called when the button is clicked.

This overrides the button's `DoClick` method.

**Argumentos:**

- `string command` — The console command to be called.
- `string args` = `nil` — The arguments for the command.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbutton.lua:129`*

---

### `DButton:SetDrawBorder` `[client/menu]`

Does absolutely nothing at all. Default value is automatically set to true.

**Argumentos:**

- `boolean draw` — Does nothing.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbutton.lua:4`*

---

### `DButton:SetIcon` `[client/menu]`

Sets an image to be displayed as the button's background. Alias of DButton:SetImage

**Argumentos:**

- `string img` = `nil` — The image file to use, relative to `/materials`. If this is nil, the image background is removed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbutton.lua:52`*

---

### `DButton:SetImage` `[client/menu]`

Sets an image to be displayed as the button's background.

See DButton:SetMaterial for equivalent function that uses IMaterial instead.

Also see: DImageButton

**Argumentos:**

- `string img` = `nil` — The image file to use, relative to the `materials/` folder. Can be set to `nil` to remove the image background.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbutton.lua:32`*

---

### `DButton:SetMaterial` `[client/menu]`

Sets an image to be displayed as the button's background.

See DButton:SetImage for equivalent function that uses file paths instead. Also see DImageButton.

**Argumentos:**

- `IMaterial img` = `nil` — The material to use. If this is nil, the image background is removed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbutton.lua:54`*

---

### `DButton:UpdateColours` `[client/menu]`

A hook called from within DLabel's PANEL:ApplySchemeSettings to determine the color of the text on display.

**Argumentos:**

- `table skin` — A table supposed to contain the color values listed above.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbutton.lua:86`*