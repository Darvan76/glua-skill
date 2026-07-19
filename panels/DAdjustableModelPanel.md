# DAdjustableModelPanel

---

**Hereda de:** `DModelPanel`

---

A derivative of the DModelPanel in which the user may modify the perspective of the model with their mouse and keyboard by clicking and dragging.

The keyboard keys W S A D Up Down Left Right Space and Ctrl can be used when the right mouse is held down, with Shift acting as a speed multiplier. When the left mouse is used, the Shift key holds the current `y` angle steady.

This is used by IconEditor for modifying spawn icons.

---


## Miembros (6)


---

### `DAdjustableModelPanel:CaptureMouse` `[client]`

Used by the panel to perform mouse capture operations when adjusting the model.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dadjustablemodelpanel.lua:61`*

---

### `DAdjustableModelPanel:FirstPersonControls` `[client]`

Used to adjust the perspective in the model panel via the keyboard, when the right mouse button is used.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dadjustablemodelpanel.lua:92`*

---

### `DAdjustableModelPanel:GetFirstPerson` `[client]`

Gets whether mouse and keyboard-based adjustment of the perspective has been enabled. See DAdjustableModelPanel:SetFirstPerson for more information.

This is an Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether first person controls are enabled. See DAdjustableModelPanel:FirstPersonControls.

*Fuente: `lua/vgui/dadjustablemodelpanel.lua:4`*

---

### `DAdjustableModelPanel:GetMovementScale` `[client]`

Returns the movement speed multiplier set by DAdjustableModelPanel:SetMovementScale.

An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The movement scale, where `1` is normal, `2` is double, etc.

*Fuente: `lua/vgui/dadjustablemodelpanel.lua:5`*

---

### `DAdjustableModelPanel:SetFirstPerson` `[client]`

Enables mouse and keyboard-based adjustment of the perspective.

This is set to `true` automatically each time mouse capture is enabled, and hence doesn't serve as a usable setting, other than to disable this functionality after the PANEL:OnMousePressed event.

An Global.AccessorFunc

**Argumentos:**

- `boolean enable` — Whether to enable/disable first person controls. See DAdjustableModelPanel:FirstPersonControls.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dadjustablemodelpanel.lua:4`*

---

### `DAdjustableModelPanel:SetMovementScale` `[client]`

Sets the movement speed multiplier. Currently this only affects first person camera controls.

**Argumentos:**

- `number ` — The movement scale, where `1` is normal, `2` is double, etc.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dadjustablemodelpanel.lua:5`*