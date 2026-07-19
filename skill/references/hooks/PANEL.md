# PANEL

---


## Miembros (37)


---

### `PANEL:AnimationThink` `[client]`

Called every frame unless the panel is not visible (Panel:IsVisible). Similar to PANEL:Think, but can be disabled by Panel:SetAnimationEnabled as explained below.

If you are overriding this, you must call Panel:AnimationThinkInternal every frame, else animations will cease to work.

If you want to "disable" this hook with Panel:SetAnimationEnabled, you must call it after defining this hook. Once disabled, a custom hook **will not** be re-enabled by Panel:SetAnimationEnabled again - the hook will have to be re-defined.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:ApplySchemeSettings` `[client]`

Called whenever the panel should apply its scheme (colors, fonts, style).

It is called a few frames after panel's creation once.

The engine will overwrite Panel:SetFGColor and Panel:SetBGColor (from the engine panel theme/scheme) for most panels just before this hook is called in Lua.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:DragHoverClick` `[client]`

Called when an object is dragged and hovered over this panel for 0.1 seconds.

This is used by DPropertySheet and DTree, for example to open a tab or expand a node when an object is hovered over it.

**Argumentos:**

- `number hoverTime` — The time the object was hovered over this panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:540`*

---

### `PANEL:DroppedOn` `[client]`

Called when this panel is dropped onto another panel.

Only works for panels derived from DDragBase.

**Argumentos:**

- `Panel pnl` — The panel we are dropped onto

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:375`*

---

### `PANEL:GenerateExample` `[client]`

Called when the panel should generate example use case / example code to use for this panel. Used in the panel opened by **derma_controls** console command.

**Argumentos:**

- `string class` — The classname of the panel to generate example for. This will be the class name of your panel.
- `Panel dpropertysheet` — A DPropertySheet to add your example to. See examples below.
- `number width` — Width of the property sheet?
- `number height` — Width of the property sheet?

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_example.lua:20`*

---

### `PANEL:Init` `[client]`

Called when the panel is created. This is called for each base type that the panel has.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:LoadCookies` `[client]`

Called after Panel:SetCookieName is called on this panel to apply the just loaded cookie values for this panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnActivate` `[client/menu]`

Called when we are activated during level load. Used by the loading screen panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnChildAdded` `[client]`

Called whenever a child was parented to the panel.

This is called before the panel's metatable is set.

**Argumentos:**

- `Panel child` — The child which was added.

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnChildRemoved` `[client]`

Called whenever a child of the panel is about to removed.

**Argumentos:**

- `Panel child` — The child which is about to be removed.

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnCursorEntered` `[client]`

Called whenever the cursor entered the panels bounds.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnCursorExited` `[client]`

Called whenever the cursor left the panels bounds.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnCursorMoved` `[client]`

Called whenever the cursor was moved with the panels bounds.

**Argumentos:**

- `number cursorX` — The new x position of the cursor relative to the panels origin.
- `number cursorY` — The new y position of the cursor relative to the panels origin.

**Retorna:**

- `boolean` — Return true to suppress default action.

---

### `PANEL:OnDeactivate` `[client/menu]`

Called when we are deactivated during level load. Used by the loading screen panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnDrop` `[client]`

We're being dropped on something
We can create a new panel here and return it, so that instead of dropping us - it drops the new panel instead! We remain where we are!

Only works for panels derived from DDragBase.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The panel to drop instead of us. By default you should return self.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:379`*

---

### `PANEL:OnFocusChanged` `[client]`

Called whenever the panel gained or lost focus.

Panel:HasFocus will only be updated on the next frame and will return the "old" value at the time this hook is run. Same goes for vgui.GetKeyboardFocus.

**Argumentos:**

- `boolean gained` — If the focus was gained (`true`) or lost (`false`).

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnHScroll` `[client]`

Called when the panel a child DHScrollBar is scrolled.

**Argumentos:**

- `number offset` — The new horizontal scroll offset.

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnKeyCodePressed` `[client]`

Called whenever a keyboard key was pressed while the panel is focused.

This is not run for ESC/"cancelselect" binding.

**Argumentos:**

- `number keyCode` — The key code of the pressed key, see Enums/KEY.

**Retorna:**

- `boolean` — Return `true` to suppress default action.

---

### `PANEL:OnKeyCodeReleased` `[client]`

Called whenever a keyboard key was released while the panel is focused.

This is not run for TILDE/"toggleconsole" binding.

**Argumentos:**

- `number keyCode` — The key code of the released key, see Enums/KEY.

**Retorna:**

- `boolean` — Return true to suppress default action.

---

### `PANEL:OnMousePressed` `[client]`

Called whenever a mouse key was pressed while the panel is focused.

**Argumentos:**

- `number keyCode` — They key code of the key pressed, see Enums/MOUSE.

**Retorna:**

- `boolean` — Return true to suppress default action such as right click opening edit menu for DTextEntry.

---

### `PANEL:OnMouseReleased` `[client]`

Called whenever a mouse key was released while the panel is focused.

**Argumentos:**

- `number keyCode` — They key code of the key released, see Enums/MOUSE.

**Retorna:**

- `boolean` — Return true to suppress default action.

---

### `PANEL:OnMouseWheeled` `[client]`

Called whenever the mouse wheel was used.

**Argumentos:**

- `number scrollDelta` — The scroll delta, indicating how much the user turned the mouse wheel.

**Retorna:**

- `boolean` — Return true to suppress default action.

---

### `PANEL:OnRemove` `[client]`

Called when the panel is about to be removed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnScreenSizeChanged` `[client/menu]`

Called when the player's screen resolution of the game changes.

Global.ScrW and Global.ScrH will return the new values when this hook is called.

**Argumentos:**

- `number oldWidth` — The previous width  of the game's window
- `number oldHeight` — The previous height of the game's window
- `number newWidth` — The new/current width of the game's window.
- `number newHeight` — The new/current height of the game's window.

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnScrollbarAppear` `[client]`

Called when the panel a child DVScrollBar or DHScrollBar becomes visible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnSizeChanged` `[client]`

Called just after the panel size changes.

All size functions will return the new values when this hook is called.

Changing the panel size in this hook will cause an infinite loop!

**Argumentos:**

- `number newWidth` — The new width of the panel
- `number newHeight` — The new height of the panel

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnStartDragging` `[client]`

Called by dragndrop.StartDragging when the panel starts being dragged.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:391`*

---

### `PANEL:OnStopDragging` `[client]`

Called by Panel:DragMouseRelease when the panel object is released after being dragged.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:408`*

---

### `PANEL:OnTextClicked` `[client]`

Called whenever clickable text is clicked within a RichText.

**Argumentos:**

- `string id` — The identifier of the text clicked. The one passed to Panel:InsertClickableTextStart.

**Retorna:**

*(sin retorno)*

---

### `PANEL:OnVScroll` `[client]`

Called when the panel a child DVScrollBar is scrolled.

**Argumentos:**

- `number offset` — The new vertical scroll offset.

**Retorna:**

*(sin retorno)*

---

### `PANEL:Paint` `[client/menu]`

Called whenever the panel should be drawn.

This hook will not run if the panel is completely off the screen, and will still run if any parts of the panel are still on screen.

You can create panels with a customized appearance by overriding their `Paint()` function, which will prevent the default appearance from being drawn.

See also PANEL:PaintOver.

Render operations from the surface library (and consequentially the draw library) are always offset by the global position of this panel, as seen in the example below

**Argumentos:**

- `number width` — The panel's width.
- `number height` — The panel's height.

**Retorna:**

- `boolean` — Returning true prevents the background from being drawn.

---

### `PANEL:PaintOver` `[client/menu]`

Called whenever the panel and all its children were drawn, return true to override the default drawing.

This is useful to draw content over the panel without having to overwrite it's PANEL:Paint hook, for example as an indicator that a panel is selected in PropSelect

**Argumentos:**

- `number width` — The panels current width.
- `number height` — The panels current height.

**Retorna:**

- `boolean` — Should we disable default PaintOver rendering? This is useful in case with Derma panels that use Derma hooks.

---

### `PANEL:PerformLayout` `[client]`

Called whenever the panels' layout needs to be performed again. This means all child panels must be re-positioned to fit the possibly new size of this panel.

This can be triggered in numerous ways:
* Panel:InvalidateLayout was called this or previous frame (depending on the argument)
* Panel:SetPos called more than once on the same panel ([Issue](https://github.com/Facepunch/garrysmod-issues/issues/5519))
* A child element was added to this panel (TODO: Verify me)
* The size of this panel has changed

You should not call this function directly. Use Panel:InvalidateLayout instead.

You should also be careful to not cause layout loops. You can use `vgui_visualizelayout 1` to visualize panel layouts as they happen for debugging purposes. Panels should not be doing this every frame for performance reasons.

**Argumentos:**

- `number width` — The panels current width.
- `number height` — The panels current height.

**Retorna:**

*(sin retorno)*

---

### `PANEL:PostAutoRefresh` `[client]`

Only works on elements defined with derma.DefineControl and only if the panel has **AllowAutoRefresh** set to true.

Called after derma.DefineControl is called with panel's class name.

See also PANEL:PreAutoRefresh

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:PreAutoRefresh` `[client]`

Only works on elements defined with derma.DefineControl and only if the panel has **AllowAutoRefresh** set to true.

Called when derma.DefineControl is called with this panel's class name before applying changes to this panel.

See also PANEL:PostAutoRefresh

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PANEL:TestHover` `[client]`

Called to test if the panel is being `hovered` by the mouse. This will only be called if the panel's parent is being hovered.

**Argumentos:**

- `number x` — The x coordinate of the cursor, in screen space.
- `number y` — The y coordinate of the cursor, in screen space.

**Retorna:**

- `boolean` — Return false when the cursor is not considered on the panel, true if it is considered on the panel. Do not return anything for default behavior.

---

### `PANEL:Think` `[client/menu]`

Called every frame while Panel:IsVisible is true.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*