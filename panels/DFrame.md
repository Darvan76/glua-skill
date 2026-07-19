# DFrame

---

**Hereda de:** `EditablePanel`

---

The DFrame is the moma of basically all VGUI elements. 98% of the time you will parent your element to this.

---


## Miembros (26)


---

### `DFrame:Center` `[client/menu]`

Centers the frame relative to the whole screen and invalidates its layout. This overrides Panel:Center.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dframe.lua:104`*

---

### `DFrame:Close` `[client/menu]`

Hides or removes the DFrame, and calls DFrame:OnClose.

To set whether the frame is hidden or removed, use DFrame:SetDeleteOnClose.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dframe.lua:89`*

---

### `DFrame:GetBackgroundBlur` `[client/menu]`

Gets whether the background behind the frame is being blurred.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not background blur is enabled.

*Fuente: `lua/vgui/dframe.lua:14`*

---

### `DFrame:GetDeleteOnClose` `[client/menu]`

Determines whether or not the DFrame will be removed when it is closed. This is set with DFrame:SetDeleteOnClose.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the frame will be removed on close.

*Fuente: `lua/vgui/dframe.lua:8`*

---

### `DFrame:GetDraggable` `[client/menu]`

Gets whether or not the frame is draggable by the user.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the frame is draggable or not.

*Fuente: `lua/vgui/dframe.lua:5`*

---

### `DFrame:GetIsMenu` `[client/menu]`

Gets whether or not the frame is part of a derma menu. This is set with DFrame:SetIsMenu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not this frame is a menu component.

*Fuente: `lua/vgui/dframe.lua:4`*

---

### `DFrame:GetMinHeight` `[client/menu]`

Gets the minimum height the DFrame can be resized to by the user.

You must call DFrame:SetSizable before the user can resize the frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum height the user can resize the frame to.

*Fuente: `lua/vgui/dframe.lua:12`*

---

### `DFrame:GetMinWidth` `[client/menu]`

Gets the minimum width the DFrame can be resized to by the user.

You must call DFrame:SetSizable before the user can resize the frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum width the user can resize the frame to.

*Fuente: `lua/vgui/dframe.lua:11`*

---

### `DFrame:GetPaintShadow` `[client/menu]`

Gets whether or not the shadow effect bordering the DFrame is being drawn.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the shadow is being drawn.

*Fuente: `lua/vgui/dframe.lua:9`*

---

### `DFrame:GetScreenLock` `[client/menu]`

Gets whether or not the DFrame is restricted to the boundaries of the screen resolution.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the frame is restricted.

*Fuente: `lua/vgui/dframe.lua:7`*

---

### `DFrame:GetSizable` `[client/menu]`

Gets whether or not the DFrame can be resized by the user.

This is achieved by clicking and dragging in the bottom right corner of the frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the frame can be resized or not.

*Fuente: `lua/vgui/dframe.lua:6`*

---

### `DFrame:GetTitle` `[client/menu]`

Returns the title of the frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Title of the frame.

*Fuente: `lua/vgui/dframe.lua:77`*

---

### `DFrame:IsActive` `[client/menu]`

Determines if the frame or one of its children has the screen focus.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the frame has focus.

*Fuente: `lua/vgui/dframe.lua:112`*

---

### `DFrame:OnClose` `[client/menu]`

Called when the DFrame is closed with DFrame:Close. This applies when the `close` button in the DFrame's control box is clicked.

This function does nothing and is safe to override.

This is **not** called when the DFrame is removed with Panel:Remove, see PANEL:OnRemove for that.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dframe.lua:101`*

---

### `DFrame:SetBackgroundBlur` `[client/menu]`

Indicate that the background elements won't be usable.

**Argumentos:**

- `boolean blur` — Whether or not to block mouse on background panels or not.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetDeleteOnClose` `[client/menu]`

Determines whether or not the DFrame is removed when it is closed with DFrame:Close.

**Argumentos:**

- `boolean shouldDelete` — Whether or not to delete the frame on close. This is `true` by default.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetDraggable` `[client/menu]`

Sets whether the frame should be draggable by the user. The DFrame can only be dragged from its title bar.

**Argumentos:**

- `boolean draggable` — Whether to be draggable or not.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetIcon` `[client/menu]`

Adds or removes an icon on the left of the DFrame's title.

**Argumentos:**

- `string path` — Set to empty string ("") to remove the icon.

Otherwise, set to file path to create the icon.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dframe.lua:121`*

---

### `DFrame:SetIsMenu` `[client/menu]`

Sets whether the frame is part of a derma menu or not.

If this is set to `true`, Global.CloseDermaMenus will not be called when the frame is clicked, and thus any open menus will remain open.

**Argumentos:**

- `boolean isMenu` — Whether or not this frame is a menu component.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetMinHeight` `[client/menu]`

Sets the minimum height the DFrame can be resized to by the user.

This only applies to users attempting to resize the frame; Panel:SetTall and similar methods will not be affected. You must call DFrame:SetSizable before the user can resize the frame.

**Argumentos:**

- `number minH` — The minimum height the user can resize the frame to.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetMinWidth` `[client/menu]`

Sets the minimum width the DFrame can be resized to by the user.

This only applies to users attempting to resize the frame; Panel:SetWide and similar methods will not be affected. You must call DFrame:SetSizable before the user can resize the frame.

**Argumentos:**

- `number minW` — The minimum width the user can resize the frame to.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetPaintShadow` `[client/menu]`

Sets whether or not the shadow effect bordering the DFrame should be drawn.

**Argumentos:**

- `boolean shouldPaint` — Whether or not to draw the shadow. This is `true` by default.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetScreenLock` `[client/menu]`

Sets whether the DFrame is restricted to the boundaries of the screen resolution.

**Argumentos:**

- `boolean lock` — If `true`, the frame cannot be dragged outside of the screen bounds

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetSizable` `[client/menu]`

Sets whether or not the DFrame can be resized by the user.

This is achieved by clicking and dragging in the bottom right corner of the frame.

You can set the minimum size using DFrame:SetMinWidth and DFrame:SetMinHeight.

**Argumentos:**

- `boolean sizeable` — Whether the frame should be resizeable or not.

**Retorna:**

*(sin retorno)*

---

### `DFrame:SetTitle` `[client/menu]`

Sets the title of the frame.

**Argumentos:**

- `string title` — New title of the frame.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dframe.lua:83`*

---

### `DFrame:ShowCloseButton` `[client/menu]`

Determines whether the DFrame's control box (close, minimise and maximise buttons) is displayed.

**Argumentos:**

- `boolean show` — `false` hides the control box; this is `true` by default.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dframe.lua:69`*