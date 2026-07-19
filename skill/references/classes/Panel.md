# Panel

---

This is the base panel for every other [VGUI](vgui) panel.

It contains all of the basic methods, some of which may only work on certain VGUI elements. See also Panel Hooks.

As their functionality is provided at the game's C/C++ level rather than by its Lua script extension, they are unfortunately unavailable for most practical purposes, however, they can still be obtained in a way similar to that provided by the baseclass library:

```
-- Create a new panel type NewPanel that inherits all of its functionality from DLabel,
-- but has a different SetText method than DLabel does - all without the hassle of that
-- old DLabel's default text getting in the way. Fun stuff.

local PANEL = {}

function PANEL:Init()

self:SetText_Base( "" )
self:SetText( "Time for something different!" )

end

function PANEL:Paint( aWide, aTall )

local TextX, TextY = 0, 0
local TextColor = Color( 255, 0, 0, 255 )

surface.SetFont( self:GetFont() or "default" )
surface.SetTextColor( TextColor )
surface.SetTextPos( TextX, TextY )
surface.DrawText( self:GetText() )

end

-- And here we go:
PANEL.SetText_Base = FindMetaTable( "Panel" ).SetText

function PANEL:SetText( aText )

self.Text = tostring( aText )

end

function PANEL:GetText()

return self.Text or ""

end

vgui.Register( "NewPanel", PANEL, "DLabel" )
```

---


## Miembros (291)


---

### `Panel:Add` `[client/menu]`

When provided with a string or table, this function will create a new vgui element with that name and set the parent to the panel that this method is called on. When provided with a panel it will use Panel:SetParent on the provided panel to set it to our source panel

**Argumentos:**

- `Panel object` — The panel to be added (parented).

**Retorna:**

- `Panel` — New panel

**Sobrecargas:**

- Variante 1: - `string class` — The class to be added.

- Variante 2: - `table table` — The table to create the panel from.

*Fuente: `lua/includes/extensions/client/panel.lua:506`*

---

### `Panel:AddText` `[client/menu]`

Does nothing
This function does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:AlignBottom` `[client/menu]`

Aligns the panel on the bottom of its parent with the specified offset.

**Argumentos:**

- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:129`*

---

### `Panel:AlignLeft` `[client/menu]`

Aligns the panel on the left of its parent with the specified offset.

**Argumentos:**

- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:132`*

---

### `Panel:AlignRight` `[client/menu]`

Aligns the panel on the right of its parent with the specified offset.

**Argumentos:**

- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:130`*

---

### `Panel:AlignTop` `[client/menu]`

Aligns the panel on the top of its parent with the specified offset.

**Argumentos:**

- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:131`*

---

### `Panel:AlphaTo` `[client/menu]`

Uses animation to transition the current alpha value of a panel to a new alpha, over a set period of time and after a specified delay.

**Argumentos:**

- `number alpha` — The alpha value (0-255) to approach.
- `number duration` — The time in seconds it should take to reach the alpha.
- `number delay` = `0` — The delay before the animation starts.
- `function callback` = `nil` — The function to be called once the animation finishes.

The Structures/AnimationData that was used.
The panel object that was animated.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:263`*

---

### `Panel:AnimTail` `[client/menu]`

Returns the Global.SysTime value when all animations for this panel object will end.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The system time value when all animations will end for this panel.

*Fuente: `lua/includes/extensions/client/panel/animation.lua:90`*

---

### `Panel:AnimationThinkInternal` `[client/menu]`

Performs the per-frame operations required for panel animations.

This is called every frame by PANEL:AnimationThink.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:20`*

---

### `Panel:AppendText` `[client/menu]`

Appends text to a RichText element. This does not automatically add a new line.

**Argumentos:**

- `string txt` — The text to append (add on).

**Retorna:**

*(sin retorno)*

---

### `Panel:AppendTextWithURLs` `[client/menu]`

Appends text to a RichText element (exactly like Panel:AppendText), while also parsing and adding valid URLs (Panel:InsertClickableTextStart). This does not automatically add a new line.

**Argumentos:**

- `string txt` — The text to append (add on).

**Retorna:**

*(sin retorno)*

---

### `Panel:ApplyGWEN` `[client/menu]`

Used by Panel:LoadGWENFile and Panel:LoadGWENString to apply a GWEN controls table to a panel object.

You can do this manually using file.Read and util.JSONToTable to import and create a GWEN table structure from a `.gwen` file. This method can then be called, passing the GWEN table's `Controls` member.

**Argumentos:**

- `table GWENTable` — The GWEN controls table to apply to the panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:166`*

---

### `Panel:Center` `[client/menu]`

Centers the panel on its parent.

See Panel:CenterHorizontal and Panel:CenterVertical for more specialized functions.

This will center the panel using the current size of the panel, so it should be called **AFTER** setting or adjusting the size of the panel.

Take special care when using Panel:Dock as it will not update the size immediately.

You may want to use Panel:PerformLayout to set positions of child panels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:165`*

---

### `Panel:CenterHorizontal` `[client/menu]`

Centers the panel horizontally with specified fraction.

See Panel:CenterVertical for vertical only centering, and  Panel:Center for a function that does both axes.

**Argumentos:**

- `number fraction` = `0.5` — The center fraction.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:158`*

---

### `Panel:CenterVertical` `[client/menu]`

Centers the panel vertically with specified fraction.

See Panel:CenterHorizontal for horizontal only centering, and  Panel:Center for a function that does both axes.

**Argumentos:**

- `number fraction` = `0.5` — The center fraction.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:151`*

---

### `Panel:ChildCount` `[client/menu]`

Returns the amount of children of the of panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of children the panel has.

*Fuente: `lua/vgui/dmenu.lua:145`*

---

### `Panel:ChildrenSize` `[client/menu]`

Returns the width and height of the space between the position of the panel (upper-left corner) and the max bound of the children panels (farthest reaching lower-right corner).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The children size width.
- `number` — The children size height.

---

### `Panel:Clear` `[client/menu]`

Removes all of the panel's children. Many panels also override this method to gracefully clear their contents without breaking themselves.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:590`*

---

### `Panel:ColorTo` `[client/menu]`

Fades panels color to specified one.
The panel must have `GetColor` and `SetColor` functions for `ColorTo` to work.

**Argumentos:**

- `Color color` — The color to fade to
- `number length` — Length of the animation
- `number delay` = `0` — Delay before start fading
- `function callback` = `nil` — Function to execute when finished

The Structures/AnimationData that was used.
The panel object that was animated.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:240`*

---

### `Panel:ConVarChanged` `[client/menu]`

Updates a panel object's associated console variable. This must first be set up with Global.Derma_Install_Convar_Functions, and have a ConVar set using Panel:SetConVar.

**Argumentos:**

- `string newValue` — The new value to set the associated console variable to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/init.lua:86`*

---

### `Panel:ConVarNumberThink` `[client/menu]`

A think hook for Panels using ConVars as a value. Call it in the Think hook. Sets the panel's value should the convar change.

This function is best for: checkboxes, sliders, number wangs

For a string alternative, see Panel:ConVarStringThink.

Make sure your Panel has a SetValue function, else you may get errors.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/init.lua:106`*

---

### `Panel:ConVarStringThink` `[client/menu]`

A think hook for Panel using ConVars as a value. Call it in the Think hook. Sets the panel's value should the convar change.

This function is best for: text inputs, read-only inputs, dropdown selects

For a number alternative, see Panel:ConVarNumberThink.

Make sure your Panel has a SetValue function, else you may get errors.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/init.lua:94`*

---

### `Panel:CopyBase` `[client/menu]`

Gets the size, position and dock state of the passed panel object, and applies it to this one.

**Argumentos:**

- `Panel srcPanel` — The panel to copy the boundary and dock settings from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:497`*

---

### `Panel:CopyBounds` `[client/menu]`

Copies position and size of the panel.

**Argumentos:**

- `Panel base` — The panel to copy size and position from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:175`*

---

### `Panel:CopyHeight` `[client/menu]`

Copies the height of the panel.

**Argumentos:**

- `Panel base` — Panel to copy the height from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:108`*

---

### `Panel:CopyPos` `[client/menu]`

Copies the position of the panel.

**Argumentos:**

- `Panel base` — Panel to position the width from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:122`*

---

### `Panel:CopySelected` `[client/menu]`

Performs the CONTROL + C key combination effect ( Copy selection to clipboard ) on selected text in a TextEntry or RichText based element.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:CopyWidth` `[client/menu]`

Copies the width of the panel.

**Argumentos:**

- `Panel base` — Panel to copy the width from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:115`*

---

### `Panel:CursorPos` `[client/menu]`

Returns the cursor position relative to the top left of the panel.

This is equivalent to calling gui.MousePos and then Panel:ScreenToLocal.

This function uses a cached value for the screen position of the panel, computed at the end of the last VGUI Think/Layout pass.

ie. inaccurate results may be returned if the panel or any of its ancestors have been repositioned outside of PANEL:Think or PANEL:PerformLayout within the last frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — X coordinate of the cursor, relative to the top left of the panel.
- `number` — Y coordinate of the cursor, relative to the top left of the panel.

---

### `Panel:CutSelected` `[client/menu]`

Performs the CONTROL + X (delete text and copy it to clipboard buffer) action on selected text in a TextEntry or RichText based element.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:DeleteCookie` `[client/menu]`

Deletes a cookie value using the panel's cookie name ( Panel:GetCookieName ) and the passed extension.

**Argumentos:**

- `string cookieName` — The unique cookie name to delete.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:238`*

---

### `Panel:DisableLerp` `[client/menu]`

Resets the panel object's Panel:SetPos method and removes its animation table (`Panel.LerpAnim`). This effectively undoes the changes made by Panel:LerpPositions.

In order to use Lerp animation again, you must call Panel:Stop before setting its `SetPosReal` property to `nil`. See the example below.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:359`*

---

### `Panel:Distance` `[client/menu]`

Returns the linear distance from the center of this panel object and another. **Both panels must have the same parent for this function to work properly.**

**Argumentos:**

- `Panel tgtPanel` — The target object with which to compare position.

**Retorna:**

- `number` — The linear (straight-line) distance between the center of the two objects.

*Fuente: `lua/includes/extensions/client/panel.lua:422`*

---

### `Panel:DistanceFrom` `[client/menu]`

Returns the distance between the center of this panel object and a specified point **local to the parent panel**.

**Argumentos:**

- `number posX` — The horizontal (x) position in pixels of the point to compare with. Local to the parent panel, or container, not the panel the function is called on.
- `number posY` — The vertical (y) position in pixels of the point to compare with. Local to the parent panel, or container, not the panel the function is called on.

**Retorna:**

- `number` — The linear (straight-line) distance between the specified point local to parent panel and the center of this panel object.

*Fuente: `lua/includes/extensions/client/panel.lua:430`*

---

### `Panel:DoModal` `[client/menu]`

Makes the panel "lock" the screen until it is removed. All input will be directed to the given panel.

It will silently fail if used while cursor is not visible.
Call Panel:MakePopup before calling this function.
This must be called on a panel derived from EditablePanel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:Dock` `[client/menu]`

Sets the dock type for the panel, making the panel "dock" in a certain direction, modifying it's position and size.

You can set the inner spacing of a panel's docking using Panel:DockPadding, which will affect docked child panels, and you can set the outer spacing of a panel's docking using Panel:DockMargin, which affects how docked siblings are positioned/sized.

You may need to use Panel:SetZPos to ensure child panels (DTextEntry) stay in a specific order.

After using this function, if you want to get the correct panel's bounds (position, size), use Panel:InvalidateParent (use `true` as argument if you need to update immediately)

**Argumentos:**

- `number{DOCK} dockType` — Dock type using Enums/DOCK.

**Retorna:**

*(sin retorno)*

---

### `Panel:DockMargin` `[client/menu]`

Sets the dock margin of the panel.

The dock margin is the extra space that will be left around the edge when this element is docked inside its parent element.

**Argumentos:**

- `number marginLeft` — The left margin to the parent.
- `number marginTop` — The top margin to the parent.
- `number marginRight` — The right margin to the parent.
- `number marginBottom` — The bottom margin to the parent.

**Retorna:**

*(sin retorno)*

---

### `Panel:DockPadding` `[client/menu]`

Sets the dock padding of the panel.

The dock padding is the extra space that will be left around the edge when child elements are docked inside this element.

**Argumentos:**

- `number paddingLeft` — The left padding to the parent.
- `number paddingTop` — The top padding to the parent.
- `number paddingRight` — The right padding to the parent.
- `number paddingBottom` — The bottom padding to the parent.

**Retorna:**

*(sin retorno)*

---

### `Panel:DragClick` `[client/menu]`

Called by Panel:DragMouseRelease when a user clicks one mouse button whilst dragging with another.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Always returns `true`.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:431`*

---

### `Panel:DragHover` `[client/menu]`

Called by dragndrop.HoverThink to perform actions on an object that is dragged and hovered over another.

**Argumentos:**

- `number HoverTime` — If this time is greater than 0.1, PANEL:DragHoverClick is called, passing it as an argument.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:499`*

---

### `Panel:DragHoverEnd` `[client/menu]`

Called to end a drag and hover action. This resets the panel's PANEL:PaintOver method, and is primarily used by dragndrop.StopDragging.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:531`*

---

### `Panel:DragMousePress` `[client/menu]`

Called to inform the dragndrop that a mouse button is being held down on a panel object.

**Argumentos:**

- `number mouseCode` — The code for the mouse button pressed, passed by, for example, PANEL:OnMousePressed. See the Enums/MOUSE.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:412`*

---

### `Panel:DragMouseRelease` `[client/menu]`

Called to inform the dragndrop that a mouse button has been depressed on a panel object.

**Argumentos:**

- `number mouseCode` — The code for the mouse button pressed, passed by, for example, PANEL:OnMouseReleased. See the Enums/MOUSE.

**Retorna:**

- `boolean` — `true` if an object was being dragged, otherwise `false`.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:440`*

---

### `Panel:DrawDragHover` `[client/menu]`

Called to draw the drop target when an object is being dragged across another. See Panel:SetDropTarget.

**Argumentos:**

- `number x` — The x coordinate of the top-left corner of the drop area.
- `number y` — The y coordinate of the top-left corner of the drop area.
- `number width` — The width of the drop area.
- `number height` — The height of the drop area.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:514`*

---

### `Panel:DrawFilledRect` `[client/menu]`

Draws a coloured rectangle to fill the panel object this method is called on. The colour is set using surface.SetDrawColor. This should only be called within the object's PANEL:Paint or PANEL:PaintOver hooks, as a shortcut for surface.DrawRect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:DrawOutlinedRect` `[client/menu]`

Draws a hollow rectangle the size of the panel object this method is called on, with a border width of 1 px. The border colour is set using surface.SetDrawColor. This should only be called within the object's PANEL:Paint or PANEL:PaintOver hooks, as a shortcut for surface.DrawOutlinedRect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:DrawSelections` `[client/menu]`

Used to draw the magenta highlight colour of a panel object when it is selected. This should be called in the object's PANEL:PaintOver hook. Once this is implemented, the highlight colour will be displayed only when the object is selectable and selected. This is achieved using Panel:SetSelectable and Panel:SetSelected respectively.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:91`*

---

### `Panel:DrawTextEntryText` `[client/menu]`

Used to draw the text in a DTextEntry within a derma skin. This is usually called within the SKIN:PaintTextEntry skin hook.
Will silently fail if any of arguments are not given.

**Argumentos:**

- `table textCol` — The colour of the main text.
- `table highlightCol` — The colour of the selection highlight (when selecting text).
- `table cursorCol` — The colour of the text cursor (or caret).

**Retorna:**

*(sin retorno)*

---

### `Panel:DrawTexturedRect` `[client/menu]`

Draws a textured rectangle to fill the panel object this method is called on. The texture is set using surface.SetTexture or surface.SetMaterial. This should only be called within the object's PANEL:Paint or PANEL:PaintOver hooks, as a shortcut for surface.DrawTexturedRect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:Droppable` `[client/menu]`

Makes this panel droppable. This is used with Panel:Receiver to create drag and drop events.

Can be called multiple times with different names allowing to be dropped onto different receivers.

**Argumentos:**

- `string name` — Name of your droppable panel

**Retorna:**

- `table` — Blank table stored on the panel itself under pnl.m_DragSlot[ name ]. Is reset every time this function is called and does not appear to be used or exposed anywhere else.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:302`*

---

### `Panel:EndBoxSelection` `[client/menu]`

Completes a box selection. If the end point of the selection box is within the selection canvas, mouse capture is disabled for the panel object, and the selected state of each child object within the selection box is toggled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the end point of the selection box was within the selection canvas.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:223`*

---

### `Panel:Exec` `[client/menu]`

Used to run commands within a DHTML window.

**Argumentos:**

- `string cmd` — The command to be run.

**Retorna:**

*(sin retorno)*

---

### `Panel:Find` `[client/menu]`

Finds a panel in its children(and sub children) with the given name.

**Argumentos:**

- `string panelName` — The name of the panel that should be found.

**Retorna:**

- `Panel` — foundPanel

---

### `Panel:FocusNext` `[client/menu]`

Focuses the next panel in the focus queue.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:FocusPrevious` `[client/menu]`

Focuses the previous panel in the focus queue.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:GWEN_SetCheckboxText` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `CheckboxText` property to a DCheckBoxLabel. This does exactly the same as Panel:GWEN_SetText, but exists to cater for the seperate GWEN properties.

**Argumentos:**

- `string txt` — The text to be applied to the DCheckBoxLabel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:222`*

---

### `Panel:GWEN_SetControlName` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `ControlName` property to a panel. This calls Panel:SetName.

**Argumentos:**

- `string name` — The new name to apply to the panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:204`*

---

### `Panel:GWEN_SetDock` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Dock` property to a  panel object. This calls Panel:Dock.

**Argumentos:**

- `string dockState` — The dock mode to pass to the panel's `Dock` method. This reads a string and applies the approriate Enums/DOCK.
* `Right`: Dock right.
* `Left`: Dock left.
* `Bottom`: Dock at the bottom.
* `Top`: Dock at the top.
* `Fill`: Fill the parent panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:214`*

---

### `Panel:GWEN_SetHorizontalAlign` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `HorizontalAlign` property to a  panel object. This calls Panel:SetContentAlignment.

**Argumentos:**

- `string hAlign` — The alignment, as a string, to pass to Panel:SetContentAlignment. Accepts:
* `Right`: Align mid-right.
* `Left`: Align mid-left.
* `Center`: Align mid-center.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:208`*

---

### `Panel:GWEN_SetMargin` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Margin` property to a  panel object. This calls Panel:DockMargin.

**Argumentos:**

- `table margins` — A four-membered table containing the margins as numbers:
* number left - The left margin.
* number top - The top margin.
* number right - The right margin.
* number bottom - The bottom margin.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:205`*

---

### `Panel:GWEN_SetMax` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Max` property to a  DNumberWang, Slider, DNumSlider or DNumberScratch. This calls `SetMax` on one of the previously listed methods.

**Argumentos:**

- `number maxValue` — The maximum value the element is to permit.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:207`*

---

### `Panel:GWEN_SetMin` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Min` property to a  DNumberWang, Slider, DNumSlider or DNumberScratch. This calls `SetMin` on one of the previously listed methods.

**Argumentos:**

- `number minValue` — The minimum value the element is to permit.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:206`*

---

### `Panel:GWEN_SetPosition` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Position` property to a  panel object. This calls Panel:SetPos.

**Argumentos:**

- `table pos` — A two-membered table containing the x and y coordinates as numbers:
* number x - The x coordinate.
* number y - The y coordinate.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:201`*

---

### `Panel:GWEN_SetSize` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Size` property to a  panel object. This calls Panel:SetSize.

**Argumentos:**

- `table size` — A two-membered table containing the width and heights as numbers:
* number w - The width.
* number h - The height.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:202`*

---

### `Panel:GWEN_SetText` `[client/menu]`

Used by Panel:ApplyGWEN to apply the `Text` property to a panel.

**Argumentos:**

- `string txt` — The text to be applied to the panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:203`*

---

### `Panel:GetAlpha` `[client/menu]`

Returns the alpha multiplier for this panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — alphaMul

---

### `Panel:GetBGColor` `[client/menu]`

Returns the background color of a panel such as a RichText, Label or DColorCube.

This doesn't apply to all VGUI elements and its function varies between them

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color color` — The Color.

---

### `Panel:GetBounds` `[client/menu]`

Returns the position and size of the panel.

This is equivalent to calling Panel:GetPos and Panel:GetSize together.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The x coordinate of the panel, relative to its parent's top left.
- `number` — The y coordinate of the panel, relative to its parent's top left.
- `number` — The width of the panel.
- `number` — The height of the panel.

---

### `Panel:GetCaretPos` `[client/menu]`

Returns the position/offset of the caret (or text cursor) in a text-based panel object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The caret position/offset from the start of the text. A value of `0` means the caret sits before the first character.

---

### `Panel:GetChild` `[client/menu]`

Gets a child by its index. For use with Panel:ChildCount.

**Argumentos:**

- `number childIndex` — The index of the child to get.

This index starts at 0, except when you use this on a DMenu.

**Retorna:**

*(sin retorno)*

---

### `Panel:GetChildPosition` `[client/menu]`

Gets a child object's position relative to this panel object. The number of levels is not relevant; the child may have many parents between itself and the object on which the method is called.

**Argumentos:**

- `Panel pnl` — The panel to get the position of.

**Retorna:**

- `number` — The horizontal (x) position of the child relative to this panel object.
- `number` — The vertical (y) position of the child relative to this panel object.

*Fuente: `lua/includes/extensions/client/panel.lua:442`*

---

### `Panel:GetChildren` `[client/menu]`

Returns a table with all the child panels of the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — All direct children of this panel.

---

### `Panel:GetChildrenInRect` `[client/menu]`

Returns a table of all visible, selectable children of the panel object that lie at least partially within the specified rectangle.

**Argumentos:**

- `number x` — The horizontal (x) position of the top-left corner of the rectangle, relative to the panel object.
- `number y` — The vertical (y) position of the top-left corner of the rectangle, relative to the panel object.
- `number w` — The width of the rectangle.
- `number h` — The height of the rectangle.

**Retorna:**

- `table` — A table of panel objects that lie at least partially within the specified rectangle.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:162`*

---

### `Panel:GetClassName` `[client/menu]`

Returns the class name of the panel. This would be the class name of the base engine-level panel, not Lua classname. The latter is stored usually in Panel:GetName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The panel's class name.

---

### `Panel:GetClosestChild` `[client/menu]`

Returns the child of this panel object that is closest to the specified point. The point is relative to the object on which the method is called. The distance the child is from this point is also returned.

**Argumentos:**

- `number x` — The horizontal (x) position of the point.
- `number y` — The vertical (y) position of the point.

**Retorna:**

- `Panel` — The child object that was closest to the specified point.
- `number` — The distance that this child was from the point.

*Fuente: `lua/includes/extensions/client/panel.lua:523`*

---

### `Panel:GetContentAlignment` `[client/menu]`

Returns the alignment of the text of a Label.

This function only works on Label panels and its derivatives.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number alignment` — The direction of the content, based on the number pad.

1: **bottom-left** 
2: **bottom-center** 
3: **bottom-right** 
4: **middle-left** 
5: **center** 
6: **middle-right** 
7: **top-left** 
8: **top-center** 
9: **top-right**

---

### `Panel:GetContentSize` `[client/menu]`

Gets the size of the content/children within a panel object.

Only works with Label derived panels by default such as DLabel.

Will also work on any panel that manually implements this method.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The content width of the object.
- `number` — The content height of the object.

---

### `Panel:GetCookie` `[client/menu]`

Gets the value of a cookie stored by the panel object. This can also be done with cookie.GetString, using the panel's cookie name, a fullstop, and then the actual name of the cookie.

Make sure the panel's cookie name has not changed since writing, or the cookie will not be accessible. This can be done with Panel:GetCookieName and Panel:SetCookieName.

**Argumentos:**

- `string cookieName` — The name of the cookie from which to retrieve the value.
- `string default` — The default value to return if the cookie does not exist.

**Retorna:**

- `string` — The value of the stored cookie, or the default value should the cookie not exist.

*Fuente: `lua/includes/extensions/client/panel.lua:214`*

---

### `Panel:GetCookieName` `[client/menu]`

Gets the name the panel uses to store cookies. This is set with Panel:SetCookieName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name the panel uses when reading or writing cookies. The format used is as follows:
```
panelCookieName.individualCookieName
```

---

### `Panel:GetCookieNumber` `[client/menu]`

Gets the value of a cookie stored by the panel object, as a number. This can also be done with cookie.GetNumber, using the panel's cookie name, a fullstop, and then the actual name of the cookie.

Make sure the panel's cookie name has not changed since writing, or the cookie will not be accessible. This can be done with Panel:GetCookieName and Panel:SetCookieName.

**Argumentos:**

- `string cookieName` — The name of the cookie from which to retrieve the value.
- `number default` — The default value to return if the cookie does not exist.

**Retorna:**

- `number` — The number value of the stored cookie, or the default value should the cookie not exist.

*Fuente: `lua/includes/extensions/client/panel.lua:202`*

---

### `Panel:GetDock` `[client/menu]`

Returns a dock enum for the panel's current docking type.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The dock enum for the panel. See Enums/DOCK.

---

### `Panel:GetDockMargin` `[client/menu]`

Returns the docked margins of the panel. (set by Panel:DockMargin)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Left margin.
- `number` — Top margin.
- `number` — Right margin.
- `number` — Bottom margin.

---

### `Panel:GetDockPadding` `[client/menu]`

Returns the docked padding of the panel. (set by Panel:DockPadding)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Left padding.
- `number` — Top padding.
- `number` — Right padding.
- `number` — Bottom padding.

---

### `Panel:GetFGColor` `[client/menu]`

Returns the foreground color of the panel.

For a Label or RichText, this is the color of its text.

This doesn't apply to all VGUI elements (such as DLabel) and its function varies between them

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color color` — The Color.

---

### `Panel:GetFont` `[client/menu]`

Returns the name of the font that the panel renders its text with.

This is the same font name set with Panel:SetFontInternal.

Only works on Label and TextEntry and their derived panels by default (such as DLabel and DTextEntry), and on any panel that manually implemented the Panel:GetFont method.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The font name.

---

### `Panel:GetHTMLMaterial` `[client]`

Returns the panel's HTML material. Only works with Awesomium, HTML and DHTML panels that have been fully loaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `IMaterial` — The HTML material used by the panel. Typically starts with `__vgui_texture_` followed by an incremental number.

---

### `Panel:GetLineHeight` `[client/menu]`

Returns the height of a single line of a RichText panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The line height.

---

### `Panel:GetMaximumCharCount` `[client/menu]`

Returns the current maximum character count.

This function will only work on RichText and TextEntry panels and their derivatives.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number maxChar` — The maximum amount of characters this panel is allowed to contain.

---

### `Panel:GetName` `[client/menu]`

Returns the internal name of the panel. Can be set via Panel:SetName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The previously set internal name of the panel.

---

### `Panel:GetNumLines` `[client/menu]`

Returns the number of lines in a RichText or a TextEntry.

You must wait a couple frames before calling this after using Panel:AppendText or Panel:SetText, otherwise it will return the number of text lines before the text change.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of lines.

---

### `Panel:GetParent` `[client/menu]`

Returns the parent of the panel, returns nil if there is no parent.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The parent of given panel

---

### `Panel:GetPos` `[client/menu]`

Returns the position of the panel relative to its Panel:GetParent.

If you require the panel's position **and** size, consider using Panel:GetBounds instead.

If you need the position in screen space, see Panel:LocalToScreen.

See also Panel:GetX and Panel:GetY.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — X coordinate, relative to this panels parents top left corner.
- `number` — Y coordinate, relative to this panels parents top left corner.

---

### `Panel:GetScrollStartIndexes` `[client/menu]`

Returns the vertical and horizontal start indexes of a TextEntry's visible text. This is useful when the panel is scrolled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number horizontalIndex` — The horizontal start index. (characters)
- `number verticalIndex` — The vertical start index. (lines)

---

### `Panel:GetSelectedChildren` `[client/menu]`

Returns a table of all children of the panel object that are selected. This is recursive, and the returned table will include tables for any child objects that also have children. This means that not all first-level members in the returned table will be of type Panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of any child objects that are selected, including tables for children of the child objects (These tables may also contain table members, as the method is recursive).

*Fuente: `lua/includes/extensions/client/panel/selections.lua:189`*

---

### `Panel:GetSelectedTextRange` `[client/menu]`

Returns the currently selected range of text.

This function will only work on RichText and TextEntry panels and their derivatives.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number start` — The start of the range. If no text is selected it may be 0 and/or equal to the end range.
- `number endrange` — The end of the range. If no text is selected it may be 0 and/or equal to the start range.

---

### `Panel:GetSelectionCanvas` `[client/menu]`

Returns the selection canvas for this panel. This will be the first parent that has Panel:SetSelectionCanvas set to true (or `self` if this panel is the selection canvas)

A selection canvas would be the panel that contains a bunch of selectable panels (Panel:SetSelectable), usually for the drag'n'drop system. Calling this function on any of the selectable items, or any of their children, will return the first parent that can contain selectable panels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The selection canvas, otherwise `nil`.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:116`*

---

### `Panel:GetSize` `[client/menu]`

Returns the size of the panel.

If you require both the panel's position and size, consider using Panel:GetBounds instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The panel's width. (Panel:GetWide)
- `number` — The panel's height (Panel:GetTall)

---

### `Panel:GetSkin` `[client/menu]`

Returns the table for the derma skin currently being used by this panel object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The derma skin table currently being used by this object.

*Fuente: `lua/includes/extensions/client/panel.lua:378`*

---

### `Panel:GetTable` `[client/menu]`

Returns the internal Lua table of the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table containing all the members of given panel object.

---

### `Panel:GetTall` `[client/menu]`

Returns the height of the panel.

See Panel:GetWide for the width of the panel. See also Panel:GetSize for a function that returns both.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — height

---

### `Panel:GetText` `[client/menu]`

Returns the panel's text (where applicable).

This method returns a maximum of 1023 bytes, except for TextEntry.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The panel's text.

---

### `Panel:GetTextInset` `[client/menu]`

Gets the left and top text margins of a text-based panel object, such as a DButton or DLabel. This is set with Panel:SetTextInset.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The left margin of the text, in pixels.
- `number` — The top margin of the text, in pixels.

---

### `Panel:GetTextSize` `[client/menu]`

Gets the size of the text within a Label derived panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The width of the text in the DLabel.
- `number` — The height of the text in the DLabel.

---

### `Panel:GetTooltip` `[client/menu]`

Returns the tooltip text that was set with PANEL:SetTooltip.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string tooltip` — The tooltip text, if it was set.

*Fuente: `lua/includes/extensions/client/panel.lua:277`*

---

### `Panel:GetTooltipDelay` `[client/menu]`

Returns the tooltip delay (time between hovering over the panel, and the tooltip showing up) that was set with Panel:SetTooltipDelay, or nothing if it was not set.

If the delay is not explicitly set by this function, it will fallback to the value of the `tooltip_delay` ConVar, which is `0.5` by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number tooltip` — The tooltip delay in seconds, if it was set.

*Fuente: `lua/includes/extensions/client/panel.lua:294`*

---

### `Panel:GetTooltipPanel` `[client/menu]`

Returns the tooltip panel that was set with PANEL:SetTooltipPanel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel tooltip` — The tooltip panel, if it was set.

*Fuente: `lua/includes/extensions/client/panel.lua:287`*

---

### `Panel:GetValidReceiverSlot` `[client/menu]`

Gets valid receiver slot of currently dragged panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The panel this was called on if a valid receiver slot exists, otherwise false.
- `table` — The slot table.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:335`*

---

### `Panel:GetValue` `[client/menu]`

Returns the value the panel holds.

In engine is only implemented for CheckButton, Label and TextEntry as a string.

This function is limited to 8092 Bytes. If using DTextEntry, use Panel:GetText for unlimited bytes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `any` — The value the panel holds.

---

### `Panel:GetWide` `[client/menu]`

Returns the width of the panel.

See Panel:GetTall for the height of the panel. See also Panel:GetSize for a function that returns both.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — width

---

### `Panel:GetX` `[client/menu]`

Returns the X position of the panel relative to its Panel:GetParent.

Uses Panel:GetPos internally.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — X coordinate.

*Fuente: `lua/includes/extensions/client/panel.lua:62`*

---

### `Panel:GetY` `[client/menu]`

Returns the Y position of the panel relative to its Panel:GetParent.

Uses Panel:GetPos internally.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Y coordinate.

*Fuente: `lua/includes/extensions/client/panel.lua:66`*

---

### `Panel:GetZPos` `[client/menu]`

Returns the Z position of the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The Z order position of the panel.

---

### `Panel:GoBack` `[client/menu]`

Goes back one page in the HTML panel's history if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:GoForward` `[client/menu]`

Goes forward one page in the HTML panel's history if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:GoToHistoryOffset` `[client/menu]`

Goes to the page in the HTML panel's history at the specified relative offset.

**Argumentos:**

- `number offset` — The offset in the panel's back/forward history, relative to the current page, that you would like to skip to. Because this is relative, 0 = current page while negative goes back and positive goes forward. For example, -2 will go back 2 pages in the history.

**Retorna:**

*(sin retorno)*

---

### `Panel:GotoTextEnd` `[client/menu]`

Causes a RichText element to scroll to the bottom of its text.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:GotoTextStart` `[client/menu]`

Causes a RichText element to scroll to the top of its text.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:HasChildren` `[client/menu]`

Returns whenever the panel has child panels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — hasChilds

---

### `Panel:HasFocus` `[client/menu]`

Returns if the panel is focused.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — hasFocus

---

### `Panel:HasHierarchicalFocus` `[client/menu]`

Returns if the panel or any of its children(sub children and so on) has the focus.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — hasHierarchicalFocus

---

### `Panel:HasParent` `[client/menu]`

Returns whether the panel is a descendent of the given panel.

**Argumentos:**

- `Panel parentPanel` — 

**Retorna:**

- `boolean` — True if the panel is contained within parentPanel.

---

### `Panel:Hide` `[client/menu]`

Makes a panel invisible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:606`*

---

### `Panel:InsertClickableTextEnd` `[client/menu]`

Marks the end of a clickable text segment in a RichText element, started with Panel:InsertClickableTextStart.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:InsertClickableTextStart` `[client/menu]`

Starts the insertion of clickable text for a RichText element. Any text appended with Panel:AppendText between this call and Panel:InsertClickableTextEnd will become clickable text.

The hook PANEL:OnTextClicked is called when the text is clicked.

The clickable text is a separate Derma panel which will not inherit the current font from the `RichText`.

**Argumentos:**

- `string signalValue` — The text passed as the action signal's value.

**Retorna:**

*(sin retorno)*

---

### `Panel:InsertColorChange` `[client/menu]`

Inserts a color change in a RichText element, which affects the color of all text added with Panel:AppendText until another color change is applied.

**Argumentos:**

- `number r` — The red value `(0 - 255)`.
- `number g` — The green value `(0 - 255)`.
- `number b` — The blue value `(0 - 255)`.
- `number a` — The alpha value `(0 - 255)`.

**Retorna:**

*(sin retorno)*

---

### `Panel:InsertFade` `[client/menu]`

Begins a text fade for a RichText element where the last appended text segment is fully faded out after a specific amount of time, at a specific speed.

The alpha of the text at any given time is determined by the text's base alpha * ((`sustain` - Global.CurTime) / `length`) where Global.CurTime is added to `sustain` when this method is called.

**Argumentos:**

- `number sustain` — The number of seconds the text remains visible.
- `number length` — The number of seconds it takes the text to fade out.

If set **lower** than `sustain`, the text will not begin fading out until (`sustain` - `length`) seconds have passed.

If set **higher** than `sustain`, the text will begin fading out immediately at a fraction of the base alpha.

If set to **-1**, the text doesn't fade out.

**Retorna:**

*(sin retorno)*

---

### `Panel:InvalidateChildren` `[client/menu]`

Invalidates the layout of this panel object and all its children. This will cause these objects to re-layout immediately, calling PANEL:PerformLayout. If you want to perform the layout in the next frame, you will have loop manually through all children, and call Panel:InvalidateLayout on each.

**Argumentos:**

- `boolean recursive` = `false` — If `true`, the method will recursively invalidate the layout of all children. Otherwise, only immediate children are affected.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:473`*

---

### `Panel:InvalidateLayout` `[client/menu]`

Causes the panel to re-layout in the next frame. During the layout process  PANEL:PerformLayout will be called on the target panel.

You should avoid calling this function every frame.

Using this on a panel after clicking on a docked element will cause docked elements to reorient themselves incorrectly. This can be fixed by assigning a unique Panel:SetZPos to each docked element.

**Argumentos:**

- `boolean layoutNow` = `false` — If true the panel will re-layout instantly and not wait for the next frame.

**Retorna:**

*(sin retorno)*

---

### `Panel:InvalidateParent` `[client/menu]`

Calls Panel:InvalidateLayout on the panel's Panel:GetParent. This function will silently fail if the panel has no parent.

This will cause the parent panel to re-layout, calling PANEL:PerformLayout.

Internally sets `LayingOutParent` to `true` on this panel, and will silently fail if it is already set.

**Argumentos:**

- `boolean layoutNow` = `false` — If `true`, the re-layout will occur immediately, otherwise it will be performed in the next frame.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:250`*

---

### `Panel:IsChildHovered` `[client/menu]`

Determines whether the mouse cursor is hovered over one of this panel object's children. This is a reverse process using vgui.GetHoveredPanel, and looks upward to find the parent.

**Argumentos:**

- `boolean immediate` = `false` — Set to true to check only the immediate children of given panel ( first level )

**Retorna:**

- `boolean` — Whether or not one of this panel object's children is being hovered over.

*Fuente: `lua/includes/extensions/client/panel.lua:610`*

---

### `Panel:IsDraggable` `[client/menu]`

Returns whether this panel is draggable ( if user is able to drag it ) or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this panel is draggable ( if user is able to drag it ) or not.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:361`*

---

### `Panel:IsDragging` `[client/menu]`

Returns whether this panel is currently being dragged or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this panel is currently being dragged or not.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:367`*

---

### `Panel:IsEnabled` `[client/menu]`

Returns whether the the panel is enabled or disabled.

See Panel:SetEnabled for a function that makes the panel enabled or disabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the panel is enabled or disabled.

---

### `Panel:IsHovered` `[client/menu]`

Returns whether the mouse cursor is hovering over this panel or not

Uses vgui.GetHoveredPanel internally.

Requires Panel:SetMouseInputEnabled to be set to true.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — true if the panel is hovered

*Fuente: `lua/includes/extensions/client/panel.lua:598`*

---

### `Panel:IsKeyboardInputEnabled` `[client/menu]`

Returns true if the panel can receive keyboard input.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — keyboardInputEnabled

---

### `Panel:IsLoading` `[client/menu]`

Determines whether or not a HTML or DHTML element is currently loading a page.

Before calling Panel:SetHTML or DHTML:OpenURL, the result seems to be `false` with the Awesomium web renderer and `true` for the Chromium web renderer. This difference can be used to determine the available HTML5 capabilities.
On Awesomium, the result remains `true` until the root document is loaded and when in-page content is loading (when adding pictures, frames, etc.). During this state, the HTML texture is not refreshed and the panel is not painted (it becomes invisible).

On Chromium, the value is only `true` when the root document is not ready. The rendering is not suspended when in-page elements are loading.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the (D)HTML object is loading.

---

### `Panel:IsMarkedForDeletion` `[client/menu]`

Returns if the panel is going to be deleted in the next frame.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — markedForDeletion

---

### `Panel:IsModal` `[client/menu]`

Returns whether the panel was made modal or not. See Panel:DoModal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the panel is modal.

---

### `Panel:IsMouseInputEnabled` `[client/menu]`

Returns true if the panel can receive mouse input.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — mouseInputEnabled

---

### `Panel:IsMultiline` `[client/menu]`

Determines whether or not a TextEntry panel is in multi-line mode. This is set with Panel:SetMultiline.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the object is in multi-line mode or not.

---

### `Panel:IsOurChild` `[client/menu]`

Returns whether the panel contains the given panel, recursively.

**Argumentos:**

- `Panel childPanel` — 

**Retorna:**

- `boolean` — True if the panel contains childPanel.

*Fuente: `lua/includes/extensions/client/panel.lua:489`*

---

### `Panel:IsPopup` `[client/menu]`

Returns if the panel was made popup or not. See Panel:MakePopup

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the panel was made popup.

---

### `Panel:IsSelectable` `[client/menu]`

Determines if the panel object is selectable (like icons in the Spawn Menu, holding Shift). This is set with Panel:SetSelectable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the panel is selectable or not.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:66`*

---

### `Panel:IsSelected` `[client/menu]`

Returns if the panel object is selected (like icons in the Spawn Menu, holding Shift). This can be set in Lua using Panel:SetSelected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the panel object is selected or not. Always returns false if the object is not selectable. This can be modified using Panel:SetSelectable.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:59`*

---

### `Panel:IsSelectionCanvas` `[client/menu]`

Determines if the panel object is a selection canvas or not. This is set with Panel:SetSelectionCanvas.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `any` — The value (if any) set by Panel:SetSelectionCanvas.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:17`*

---

### `Panel:IsValid` `[client/menu]`

Returns if the panel is valid and not marked for deletion.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the object is valid.

---

### `Panel:IsVisible` `[client/menu]`

Returns if the panel is visible. This will **NOT** take into account visibility of the parent.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the panel ls visible, `false` otherwise.

---

### `Panel:IsWorldClicker` `[client/menu]`

Returns if a panel allows world clicking set by Panel:SetWorldClicker.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If the panel allows world clicking.

---

### `Panel:KillFocus` `[client/menu]`

Remove the focus from the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:LerpPositions` `[client/menu]`

Redefines the panel object's Panel:SetPos method to operate using frame-by-frame linear interpolation (Global.Lerp). When the panel's position is changed, it will move to the target position at the speed defined. You can undo this with Panel:DisableLerp.

Unlike the other panel animation functions, such as Panel:MoveTo, this animation method will not operate whilst the game is paused. This is because it relies on Global.FrameTime.

**Argumentos:**

- `number speed` — The speed at which to move the panel. This is affected by the value of `easeOut`. Recommended values are:
* **0.1 - 10** when `easeOut` is `false`.
* **0.1 - 1** when `easeOut` is `true`.
- `boolean easeOut` — This causes the panel object to 'jump' at the target, slowing as it approaches. This affects the `speed` value significantly, see above.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:338`*

---

### `Panel:LoadControlsFromFile` `[client/menu]`

No longer does anything.

Similar to Panel:LoadControlsFromString but loads controls from a file.

**Argumentos:**

- `string path` — The path to load the controls from.

**Retorna:**

*(sin retorno)*

---

### `Panel:LoadControlsFromString` `[client/menu]`

No longer does anything.

Loads controls(positions, etc) from given data. This is what the default options menu uses.

**Argumentos:**

- `string data` — The data to load controls from. Format unknown.

**Retorna:**

*(sin retorno)*

---

### `Panel:LoadGWENFile` `[client/menu]`

Loads a .gwen file (created by GWEN Designer) and calls Panel:LoadGWENString with the contents of the loaded file.

Used to load panel controls from a file.

**Argumentos:**

- `string filename` — The file to open. The path is relative to garrysmod/garrysmod/.
- `string path` = `GAME` — The path used to look up the file.

* "GAME" Structured like base folder (garrysmod/), searches all the mounted content (main folder, addons, mounted games etc)
* "LUA" or "lsv" - All Lua folders (lua/) including gamesmodes and addons
* "DATA" Data folder (garrysmod/data)
* "MOD" Strictly the game folder (garrysmod/), ignores mounting.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:126`*

---

### `Panel:LoadGWENString` `[client/menu]`

Loads controls for the panel from a JSON string.

**Argumentos:**

- `string str` — JSON string containing information about controls to create.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_gwen.lua:138`*

---

### `Panel:LoadTGAImage` `[client/menu]`

DImage should be used instead (with `.png` or `.jpg` images). `TGAImage` panel has no advantages.

Sets a new image to be loaded by a TGAImage.

**Argumentos:**

- `string imageName` — The file path.
- `string strPath` — The PATH to search in. See File Search Paths.

This isn't used internally.

**Retorna:**

*(sin retorno)*

---

### `Panel:LocalCursorPos` `[client/menu]`

Returns the cursor position local to the position of the panel (usually the upper-left corner).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The x coordinate
- `number` — The y coordinate

*Fuente: `lua/includes/extensions/client/panel.lua:540`*

---

### `Panel:LocalToScreen` `[client/menu]`

Takes X and Y coordinates relative to the panel and returns their corresponding positions relative to the screen.

See also Panel:ScreenToLocal.

This function uses a cached value for the screen position of the panel, computed at the end of the last VGUI Think/Layout pass, so inaccurate results may be returned if the panel or any of its ancestors have been re-positioned outside of PANEL:Think or PANEL:PerformLayout within the last frame.

If the panel uses Panel:Dock, this function will return 0, 0 when the panel was created. The position will be updated in the next frame.

**Argumentos:**

- `number posX` — The X coordinate of the position on the panel to translate.
- `number posY` — The Y coordinate of the position on the panel to translate.

**Retorna:**

- `number` — The X coordinate relative to the screen.
- `number` — The Y coordinate relative to the screen.

---

### `Panel:MakePopup` `[client/menu]`

Focuses the panel and enables it to receive input.

This automatically calls Panel:SetMouseInputEnabled and Panel:SetKeyboardInputEnabled(lowercase) and sets them to `true`.

Panels derived from Panel will not work properly with this function. Due to this, any children will not be intractable with keyboard. Derive from EditablePanel instead.

For non gui related mouse focus, you can use gui.EnableScreenClicker.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:MouseCapture` `[client/menu]`

Allows the panel to receive mouse input even if the mouse cursor is outside the bounds of the panel.

**Argumentos:**

- `boolean doCapture` — Set to true to enable, set to false to disable.

**Retorna:**

*(sin retorno)*

---

### `Panel:MoveAbove` `[client/menu]`

Places the panel above the passed panel with the specified offset.

**Argumentos:**

- `Panel panel` — Panel to position relatively to.
- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:137`*

---

### `Panel:MoveBelow` `[client/menu]`

Places the panel below the passed panel with the specified offset.

**Argumentos:**

- `Panel panel` — Panel to position relatively to.
- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:138`*

---

### `Panel:MoveBy` `[client/menu]`

Moves the panel by the specified coordinates using animation.

**Argumentos:**

- `number moveX` — The number of pixels to move by in the horizontal (x) direction.
- `number moveY` — The number of pixels to move by in the vertical (y) direction.
- `number time` — The time (in seconds) in which to perform the animation.
- `number delay` = `0` — The delay (in seconds) before the animation begins.
- `number ease` = `-1` — The easing of the start and/or end speed of the animation. See Panel:NewAnimation for how this works.
- `function callback` = `nil` — The function to be called once the animation is complete.

The Structures/AnimationData that was used.
The panel object that was animated.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:286`*

---

### `Panel:MoveLeftOf` `[client/menu]`

Places the panel left to the passed panel with the specified offset.

**Argumentos:**

- `Panel panel` — Panel to position relatively to.
- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:140`*

---

### `Panel:MoveRightOf` `[client/menu]`

Places the panel right to the passed panel with the specified offset.

**Argumentos:**

- `Panel panel` — Panel to position relatively to.
- `number offset` = `0` — The align offset.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:139`*

---

### `Panel:MoveTo` `[client/menu]`

Moves the panel to the specified position using animation.
Setting the ease argument to 0 will result in the animation happening instantly, this applies to all MoveTo/SizeTo functions

**Argumentos:**

- `number posX` — The target x coordinate of the panel.
- `number posY` — The target y coordinate of the panel.
- `number time` — The time to perform the animation within.
- `number delay` = `0` — The delay before the animation starts.
- `number ease` = `-1` — The easing of the start and/or end speed of the animation. See Panel:NewAnimation for how this works.
- `function callback` = `nil` — The function to be called once the animation finishes.

The Structures/AnimationData that was used.
The panel object that was animated.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:146`*

---

### `Panel:MoveToAfter` `[client/menu]`

Moves this panel object in front of the specified sibling (child of the same parent) in the render order, and shuffles up the Z-positions of siblings now behind.

**Argumentos:**

- `Panel siblingPanel` — The panel to move this one in front of. Must be a child of the same parent panel.

**Retorna:**

- `boolean` — `false` if the passed panel is not a sibling, otherwise `nil`.

*Fuente: `lua/includes/extensions/client/panel.lua:544`*

---

### `Panel:MoveToBack` `[client/menu]`

Moves the panel object behind all other panels on screen. If the panel has been made a pop-up with Panel:MakePopup, it will still draw in front of any panels that haven't.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:MoveToBefore` `[client/menu]`

Moves this panel object behind the specified sibling (child of the same parent) in the render order, and shuffles up the Panel:SetZPos of siblings now in front.

**Argumentos:**

- `Panel siblingPanel` — The panel to move this one behind. Must be a child of the same parent panel.

**Retorna:**

- `boolean` — `false` if the passed panel is not a sibling, otherwise `nil`.

*Fuente: `lua/includes/extensions/client/panel.lua:567`*

---

### `Panel:MoveToFront` `[client/menu]`

Moves the panel in front of all other panels on screen. Unless the panel has been made a pop-up using Panel:MakePopup, it will still draw behind any that have.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:NewAnimation` `[client/menu]`

Creates a new animation for the panel object.

Methods that use this function:
* Panel:MoveTo
* Panel:SizeTo
* Panel:SlideUp
* Panel:SlideDown
* Panel:ColorTo
* Panel:AlphaTo
* Panel:MoveBy
* Panel:LerpPositions

**Argumentos:**

- `number length` — The length of the animation in seconds.
- `number delay` = `0` — The delay before the animation starts.
- `number ease` = `-1` — The power/index to use for easing.
* Positive values greater than 1 will ease in; the higher the number, the sharper the curve's gradient (less linear).
* A value of 1 removes all easing.
* Positive values between 0 and 1 ease out; values closer to 0 increase the curve's gradient (less linear).
* A value of 0 will break the animation and should be avoided.
* Any value less than zero will ease in/out; the value has no effect on the gradient.
- `function callback` = `nil` — The function to be called when the animation ends.

The Structures/AnimationData that was used.
The panel object that was animated.

**Retorna:**

- `table` — Partially filled Structures/AnimationData with the following members:
* number **EndTime** - Equal to `length` and `delay` arguments added together, plus either the Global.SysTime if there is no other animation queued or the end time of the last animation in the queue.
* number **StartTime** - Equal to the `delay` argument, plus either the Global.SysTime if there is no other animation queued or the end time of the last animation in the queue.
* number **Ease** - Equal to the `ease` argument.
* function **OnEnd** - Equal to the `callback` argument.

*Fuente: `lua/includes/extensions/client/panel/animation.lua:102`*

---

### `Panel:NewObject` `[client/menu]`

**Argumentos:**

- `string objectName` — 

**Retorna:**

*(sin retorno)*

---

### `Panel:NewObjectCallback` `[client/menu]`

**Argumentos:**

- `string objectName` — 
- `string callbackName` — 

**Retorna:**

*(sin retorno)*

---

### `Panel:NoClipping` `[client/menu]`

Sets whether this panel's drawings should be clipped within the parent panel's bounds.

See render.SetScissorRect if you wish to set the clipping rect instead.

This only disabled clipping for the Paint Related functions (as far as i can tell at the current moment, more testing should be done) so things like the text of a DLabel will still be clipped to the parent.

To fully disable the clipping of any children see Global.DisableClipping.

**Argumentos:**

- `boolean disableClipping` — Whether to disable clipping or not. `true` to disable clipping, `false` to enable clipping.

**Retorna:**

*(sin retorno)*

---

### `Panel:NumSelectedChildren` `[client/menu]`

Returns the number of children of the panel object that are selected. This is equivalent to calling Panel:IsSelected on all child objects and counting the number of returns that are `true`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of child objects that are currently selected. This does not include the parent object you are calling the method from.

*Fuente: `lua/includes/extensions/client/panel/selections.lua:207`*

---

### `Panel:OpenURL` `[client/menu]`

Instructs a HTML control to download and parse a HTML script using the passed URL.

This function can only be used on [HTML](HTML) panel and its derivatives.

**Argumentos:**

- `string URL` — URL to open. It has to start or be one of the following:
* `http://`
* `https://`
* `asset://`
* `about:blank`
* `chrome://credits/`

**Retorna:**

*(sin retorno)*

---

### `Panel:PaintAt` `[client/menu]`

Paints a ghost copy of the panel at the given position.

This function sets Z pos of panel's children (PANEL:SetZPos). It also briefly unparents and reparents the panel.

**Argumentos:**

- `number posX` — The x coordinate to draw the panel from.
- `number posY` — The y coordinate to draw the panel from.

**Retorna:**

*(sin retorno)*

---

### `Panel:PaintManual` `[client/menu]`

Paints the panel at its current position. To use this you must call Panel:SetPaintedManually(true).

**Argumentos:**

- `boolean unclamp` = `false` — If set, overrides panels' clipping so that it can render fully when its size is larger than the game's resolution.

**Retorna:**

*(sin retorno)*

---

### `Panel:PaintingDragging` `[client/menu]`

Set to true by the dragndrop system when the panel is being drawn for the drag'n'drop.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Set to true if drawing for the transparent dragging render.

---

### `Panel:ParentToHUD` `[client]`

Parents the panel to the HUD.
Makes it invisible on the escape-menu and disables controls.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:Paste` `[client/menu]`

Due to privacy concerns, this function has been disabled

Only works for TextEntries.

Pastes the contents of the clipboard into the TextEntry.

Tab characters will be dropped from the pasted text

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:PositionLabel` `[client/menu]`

Sets the width and position of a DLabel and places the passed panel object directly to the right of it. Returns the `y` value of the bottom of the tallest object. The panel on which this method is run is not relevant; only the passed objects are affected.

**Argumentos:**

- `number lblWidth` — The width to set the label to.
- `number x` — The horizontal (x) position at which to place the label.
- `number y` — The vertical (y) position at which to place the label.
- `Panel lbl` — The label to resize and position.
- `Panel panelObj` — The panel object to place to the right of the label.

**Retorna:**

- `number` — The distance from the top of the parent panel to the bottom of the tallest object (the `y` position plus the height of the label or passed panel, depending on which is tallest).

*Fuente: `lua/includes/extensions/client/panel.lua:262`*

---

### `Panel:Prepare` `[client/menu]`

Installs Lua defined functions into the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:Queue` `[client/menu]`

Enables the queue for panel animations. If enabled, the next new animation will begin after all current animations have ended. This must be called before Panel:NewAnimation to work, and only applies to the next new animation. If you want to queue many, you must call this before each.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:84`*

---

### `Panel:RebuildSpawnIcon` `[client]`

Causes a SpawnIcon to rebuild its model image.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:RebuildSpawnIconEx` `[client]`

Re-renders a spawn icon with customized cam data.

Global.PositionSpawnIcon can be used to easily calculate the necessary camera parameters.

This function does **not** accept the standard Structures/CamData.

**Argumentos:**

- `table data` — A four-membered table containing the information needed to re-render:
* Vector cam_pos - The relative camera position the model is viewed from.
* Angle cam_ang - The camera angle the model is viewed from.
* number cam_fov - The camera's field of view (FOV).
* Entity ent - The entity object of the model.
See the example below for how to retrieve these values.

**Retorna:**

*(sin retorno)*

---

### `Panel:Receiver` `[client/menu]`

Allows the panel to receive drag and drop events. Can be called multiple times with different names to receive multiple different draggable panel events.

**Argumentos:**

- `string name` — Name of DnD panels to receive. This is set on the drag'n'drop-able panels via  Panel:Droppable
- `function func` — This function is called whenever a panel with valid name is hovering above and dropped on this panel.

The receiver panel
A table of panels dropped onto receiver panel
False if hovering over, true if dropped onto
Index of clicked menu item from third argument of Panel:Receiver
Cursor pos, relative to the receiver
Cursor pos, relative to the receiver
- `table menu` = `nil` — A table of strings that will act as a menu if drag'n'drop was performed with a right click

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:315`*

---

### `Panel:Refresh` `[client/menu]`

Refreshes the HTML panel's current page.

**Argumentos:**

- `boolean ignoreCache` = `false` — If true, the refresh will ignore cached content similar to "ctrl+f5" in most browsers.

**Retorna:**

*(sin retorno)*

---

### `Panel:Remove` `[client/menu]`

Marks a panel for deletion so it will be deleted on the next frame.

This will not mark child panels for deletion this frame, but they will be marked and deleted in the next frame.

See also Panel:IsMarkedForDeletion

Will automatically call Panel:InvalidateParent.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:RequestFocus` `[client/menu]`

Attempts to obtain focus for this panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:ResetAllFades` `[client/menu]`

Resets all text fades in a RichText element made with Panel:InsertFade.

**Argumentos:**

- `boolean hold` — True to reset fades, false otherwise.
- `boolean expiredOnly` — Any value equating to `true` will reset fades only on text segments that are completely faded out.
- `number newSustain` — The new sustain value of each faded text segment. Set to -1 to keep the old sustain value.

**Retorna:**

*(sin retorno)*

---

### `Panel:RunJavascript` `[client/menu]`

Executes a string as JavaScript code on a web document panel.

This function does **NOT** allow you to pass variables from JavaScript (JS) to Lua context.
If you wish to pass/return values from JS to Lua, you may want to use DHTML:AddFunction function to accomplish that job.

The Awesomium web renderer automatically delays the code execution if the document is not ready, but the Chromium web renderer does not!

This means that with Chromium, you cannot JavaScript run code immediatly after calling Panel:SetHTML or Panel:OpenURL. You should wait for the events HTML:OnDocumentReady or HTML:OnFinishLoadingDocument to be triggered before proceeding, otherwise you may manipulate an empty / incomplete document.

**Argumentos:**

- `string js` — Specify JavaScript code to be executed.

**Retorna:**

*(sin retorno)*

---

### `Panel:SaveUndoState` `[client/menu]`

Saves the current state (caret position and the text inside) of a TextEntry as an undo state.

See also Panel:Undo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:ScreenToLocal` `[client/menu]`

Translates global screen coordinate to coordinates relative to the panel.

See also Panel:LocalToScreen.

This function uses a cached value for the screen position of the panel, computed at the end of the last VGUI Think/Layout pass, so inaccurate results may be returned if the panel or any of its ancestors have been re-positioned outside of PANEL:Think or PANEL:PerformLayout within the last frame.

**Argumentos:**

- `number screenX` — The x coordinate of the screen position to be translated.
- `number screenY` — The y coordinate of the screed position be to translated.

**Retorna:**

- `number` — Relativeposition X
- `number` — Relativeposition Y

---

### `Panel:SelectAll` `[client/menu]`

Selects all items within a panel or object. For text-based objects, selects all text.

Only works on RichText and TextEntry and their derived panels by default (such as DTextEntry), and on any panel that manually reimplemented this method.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:SelectAllOnFocus` `[client/menu]`

If called on a TextEntry, clicking the text entry for the first time will automatically select all of the text ready to be copied by the user.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:SelectAllText` `[client/menu]`

Duplicate of Panel:SelectAll.

Selects all the text in a panel object. Will not select non-text items; for this, use Panel:SelectAll.

**Argumentos:**

- `boolean resetCursorPos` — Reset cursor pos?

**Retorna:**

*(sin retorno)*

---

### `Panel:SelectNone` `[client/menu]`

Deselects all items in a panel object. For text-based objects, this will deselect all text.

Only works on RichText and TextEntry and their derived panels by default (such as DTextEntry), and on any panel that manually reimplemented this method.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:SetAchievement` `[client/menu]`

Sets the achievement to be displayed by AchievementIcon.

**Argumentos:**

- `number id` — Achievement number ID

**Retorna:**

*(sin retorno)*

---

### `Panel:SetAllowNonAsciiCharacters` `[client/menu]`

Configures a TextEntry to allow user to type characters that are not included in the US-ASCII (7-bit ASCII) character set.

Characters not included in US-ASCII are multi-byte characters in UTF-8. They can be accented characters, non-Latin characters and special characters.

**Argumentos:**

- `boolean allowed` — Set to true in order not to restrict input characters.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetAlpha` `[client/menu]`

Sets the alpha multiplier for the panel

**Argumentos:**

- `number alpha` — The alpha value in the range of 0-255.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetAnimationEnabled` `[client/menu]`

Enables or disables animations for the panel object by overriding the PANEL:AnimationThink hook to nil and back.

**Argumentos:**

- `boolean enable` — Whether to enable or disable animations.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:65`*

---

### `Panel:SetAutoDelete` `[client/menu]`

Sets whenever the panel should be removed if the parent was removed.

**Argumentos:**

- `boolean autoDelete` — Whenever to delete if the parent was removed or not.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetBGColor` `[client/menu]`

Sets the background color of a panel such as a RichText, Label, DColorCube or the base Panel.

For many panels, such as DLabel and Panel, you must use Panel:SetPaintBackgroundEnabled( true ) for the background to appear.

Please note that for most panels the engine will overwrite the foreground and background colors a frame after panel creation via the PANEL:ApplySchemeSettings hook, so you may want to set the color in that hook instead.

See Panel:SetFGColor for the foreground color.

This doesn't apply to all VGUI elements and its function varies between them

**Argumentos:**

- `number r` — The red channel of the color.
- `number g` — The green channel of the color.
- `number b` — The blue channel of the color.
- `number a` — The alpha channel of the color.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `Color color` — A Color object/table to read the color from. This is slower than providing four numbers. You could use Color:Unpack to address this. You should also cache your color objects if you wish to use them, for performance reasons.

*Fuente: `lua/includes/extensions/client/panel.lua:32`*

---

### `Panel:SetBGColorEx` `[client/menu]`

Sets the background color of the panel.

**Argumentos:**

- `number r` — The red channel of the color.
- `number g` — The green channel of the color.
- `number b` — The blue channel of the color.
- `number a` — The alpha channel of the color.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetCaretPos` `[client/menu]`

Sets the position of the caret (or text cursor) in a text-based panel object.

**Argumentos:**

- `number offset` — Caret position/offset from the start of text. A value of `0` places the caret before the first character.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetConVar` `[client/menu]`

This function does not exist on all panels
This function cannot interact with serverside convars unless you are host
Blocked convars will not work with this, see Blocked ConCommands

Sets this panel's convar. When the convar changes this panel will update automatically.

For developer implementation, see Global.Derma_Install_Convar_Functions.

**Argumentos:**

- `string convar` — The console variable to check.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetContentAlignment` `[client/menu]`

Sets the alignment of the contents.

This function only works on Label panels and its derivatives.
This function doesnt work, if Panel:SetWrap is true.

**Argumentos:**

- `number alignment` — The direction of the content, based on the number pad.

1: **bottom-left** 
2: **bottom-center** 
3: **bottom-right** 
4: **middle-left** 
5: **center** 
6: **middle-right** 
7: **top-left** 
8: **top-center** 
9: **top-right**

**Retorna:**

*(sin retorno)*

---

### `Panel:SetCookie` `[client/menu]`

Stores a string in the named cookie using Panel:GetCookieName as prefix.

You can also retrieve and modify this cookie by using the cookie. Cookies are stored in this format:

```
panelCookieName.cookieName
```

The panel's cookie name MUST be set for this function to work. See Panel:SetCookieName.

**Argumentos:**

- `string cookieName` — The unique name used to retrieve the cookie later.
- `string value` — The value to store in the cookie. This can be retrieved later as a string or number.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:226`*

---

### `Panel:SetCookieName` `[client/menu]`

Sets the panel's cookie name. Calls PANEL:LoadCookies if defined.

**Argumentos:**

- `string name` — The panel's cookie name. Used as prefix for Panel:SetCookie, therefore should be a unique value.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:187`*

---

### `Panel:SetCursor` `[client/menu]`

Sets the appearance of the cursor. You can find a list of all available cursors with image previews [here](https://wiki.facepunch.com/gmod/Cursors).

**Argumentos:**

- `string cursor` — The cursor to be set. Can be one of the following:

* [arrow](https://wiki.facepunch.com/gmod/Cursors#:~:text=arrow)
* [beam](https://wiki.facepunch.com/gmod/Cursors#:~:text=beam)
* [hourglass](https://wiki.facepunch.com/gmod/Cursors#:~:text=hourglass)
* [waitarrow](https://wiki.facepunch.com/gmod/Cursors#:~:text=waitarrow)
* [crosshair](https://wiki.facepunch.com/gmod/Cursors#:~:text=crosshair)
* [up](https://wiki.facepunch.com/gmod/Cursors#:~:text=up)
* [sizenwse](https://wiki.facepunch.com/gmod/Cursors#:~:text=sizenwse)
* [sizenesw](https://wiki.facepunch.com/gmod/Cursors#:~:text=sizenesw)
* [sizewe](https://wiki.facepunch.com/gmod/Cursors#:~:text=sizewe)
* [sizens](https://wiki.facepunch.com/gmod/Cursors#:~:text=sizens)
* [sizeall](https://wiki.facepunch.com/gmod/Cursors#:~:text=sizeall)
* [no](https://wiki.facepunch.com/gmod/Cursors#:~:text=no)
* [hand](https://wiki.facepunch.com/gmod/Cursors#:~:text=hand)
* [blank](https://wiki.facepunch.com/gmod/Cursors#:~:text=blank)

Set to anything else to set it to "none", the default fallback. Do note that a value of "none" does not, as one might assume, result in no cursor being drawn - hiding the cursor requires a value of "blank" instead.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetDragParent` `[client/menu]`

Sets the drag parent.

Drag parent means that when we start to drag this panel, we'll really start dragging the defined parent.

**Argumentos:**

- `Panel parent` — The panel to set as drag parent.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:331`*

---

### `Panel:SetDrawLanguageID` `[client/menu]`

Sets the visibility of the language selection box when typing in non-English mode.

See Panel:SetDrawLanguageIDAtLeft for a function that changes the position of the language selection box.

**Argumentos:**

- `boolean visible` — true to make it visible, false to hide it.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetDrawLanguageIDAtLeft` `[client/menu]`

Sets where to draw the language selection box.

See Panel:SetDrawLanguageID for a function that hides or shows the language selection box.

**Argumentos:**

- `boolean left` — true = left, false = right

**Retorna:**

*(sin retorno)*

---

### `Panel:SetDrawOnTop` `[client/menu]`

Makes the panel render in front of all others, including the spawn menu and main menu.

Priority is given based on the last call, so of two panels that call this method, the second will draw in front of the first.

This only makes the panel **draw** above other panels. If there's another panel that would have otherwise covered it, users will not be able to interact with it.

Completely disregards PANEL:ParentToHUD.

This does not work when using PANEL:SetPaintedManually or PANEL:PaintAt.

**Argumentos:**

- `boolean drawOnTop` = `false` — Whether or not to draw the panel in front of all others.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetDropTarget` `[client/menu]`

Sets the target area for dropping when an object is being dragged around this panel using the dragndrop.

This draws a target box of the specified size and position, until Panel:DragHoverEnd is called. It uses Panel:DrawDragHover to draw this area.

**Argumentos:**

- `number x` — The x coordinate of the top-left corner of the drop area.
- `number y` — The y coordinate of the top-left corner of the drop area.
- `number width` — The width of the drop area.
- `number height` — The height of the drop area.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:468`*

---

### `Panel:SetEnabled` `[client/menu]`

Sets the enabled state of a panel object that supports being disabled, such as a DButton or DTextEntry.

Disabled panels cannot be interacted with, and have a different appearance to indicate this.

See Panel:IsEnabled for a function that retrieves the "enabled" state of a panel.

**Argumentos:**

- `boolean enable` — Whether to enable or disable the panel object.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetExpensiveShadow` `[client/menu]`

Adds a shadow falling to the bottom right corner of the panel's text.

This works only on  panels that derive from Label.

**Argumentos:**

- `number distance` — The distance of the shadow from the panel.
- `Color Color` — The color of the shadow. Uses Color.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetFGColor` `[client/menu]`

Sets the foreground color of a panel.

For a Label or RichText, this is the color of its text.

This function calls Panel:SetFGColorEx internally.

Please note that for most panels the engine will overwrite the foreground and background colors a frame after panel creation via the PANEL:ApplySchemeSettings hook, so you may want to set the color in that hook instead.

See Panel:SetBGColor for the background color.

This doesn't apply to all VGUI elements (such as DLabel) and its function varies between them

**Argumentos:**

- `number r` — The red channel of the color.
- `number g` — The green channel of the color.
- `number b` — The blue channel of the color.
- `number a` — The alpha channel of the color.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `Color color` — A Color object/table to read the color from. This is slower than providing four numbers. You could use Color:Unpack to address this. You should also cache your color objects if you wish to use them, for performance reasons.

*Fuente: `lua/includes/extensions/client/panel.lua:18`*

---

### `Panel:SetFGColorEx` `[client/menu]`

Sets the foreground color of the panel.

For labels, this is the color of their text.

**Argumentos:**

- `number r` — The red channel of the color.
- `number g` — The green channel of the color.
- `number b` — The blue channel of the color.
- `number a` — The alpha channel of the color.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetFocusTopLevel` `[client/menu]`

Sets the panel that owns this FocusNavGroup to be the root in the focus traversal hierarchy. This function will only work on EditablePanel class panels and its derivatives.

Child panels that should be part of the tab navigation need Panel:SetTabPosition called on them.

**Argumentos:**

- `boolean state` — 

**Retorna:**

*(sin retorno)*

---

### `Panel:SetFontInternal` `[client/menu]`

Sets the font used to render this panel's text. This works for Label, TextEntry and RichText, but it's a better idea to use their local `SetFont` (DTextEntry:SetFont, DLabel:SetFont) methods when available.

To retrieve the font used by a panel, call Panel:GetFont.

**Argumentos:**

- `string fontName` — The name of the font.

See Default_Fonts for a list of existing fonts.
Alternatively, use surface.CreateFont to create your own custom font.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetHTML` `[client/menu]`

Allows you to set HTML code within a panel.

**Argumentos:**

- `string HTML` — The HTML code to set.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetHeight` `[client/menu]`

Sets the height of the panel.

Calls PANEL:OnSizeChanged and marks this panel for layout (Panel:InvalidateLayout).
Automatically rounds the height down

See also Panel:SetSize.

**Argumentos:**

- `number height` — The height to be set.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:45`*

---

### `Panel:SetKeyBoardInputEnabled` `[client/menu]`

Alias of Panel:SetKeyboardInputEnabled(lowercase)Enables or disables the keyboard input for the panel.

**Argumentos:**

- `boolean keyboardInput` — Whether to enable or disable keyboard input.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetKeyboardInputEnabled` `[client]`

Allows or disallows the panel to receive keyboard focus and input. This is recursively applied to all children.

**Argumentos:**

- `boolean enable` — Whether keyboard input should be enabled for this panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetLineHeight` `[client/menu]`

Sets the height of a single line of a RichText panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number height` — The new line height. Values below zero mean no override.

---

### `Panel:SetMaximumCharCount` `[client/menu]`

Sets the maximum character count this panel should have.

This function will only work on RichText and TextEntry panels and their derivatives.

**Argumentos:**

- `number maxChar` — The new maximum amount of characters this panel is allowed to contain.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetMinimumSize` `[client/menu]`

Sets the minimum dimensions of the panel or object.

You can restrict either or both values.

Calling the function without arguments will remove the minimum size.

**Argumentos:**

- `number minW` = `nil` — The minimum width of the object.
- `number minH` = `nil` — The minimum height of the object.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetModel` `[client]`

Sets the model to be displayed by SpawnIcon.

This must be called after setting size if you wish to use a different size spawnicon

**Argumentos:**

- `string ModelPath` — The path of the model to set
- `number skin` = `0` — The skin to set
- `string bodygroups` = `nil` — The body groups to set. Each single-digit number in the string represents a separate bodygroup, **This argument must be 9 characters in total**.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetMouseInputEnabled` `[client/menu]`

Enables or disables the mouse input for the panel.
Panels parented to the context menu will not be clickable unless Panel:SetKeyboardInputEnabled(lowercase) is enabled or Panel:MakePopup has been called. If you want the panel to have mouse input but you do not want to prevent players from moving, set Panel:SetKeyboardInputEnabled(lowercase) to false immediately after calling Panel:MakePopup.

**Argumentos:**

- `boolean mouseInput` — Whenever to enable or disable mouse input.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetMultiline` `[client/menu]`

Enables or disables the multi-line functionality of TextEntry panel and its derivatives.

**Argumentos:**

- `boolean multiline` — Whether to enable multiline or not.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetName` `[client/menu]`

Sets the internal name of the panel. Can be retrieved with Panel:GetName.

**Argumentos:**

- `string name` — The new name of the panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetOpenLinksExternally` `[menu]`

Set to true to open links in an external browser. This only functions on the `x86-64` beta.

**Argumentos:**

- `boolean openExternally` — 

**Retorna:**

*(sin retorno)*

---

### `Panel:SetPaintBackgroundEnabled` `[client/menu]`

Sets whether the default background of the panel should be drawn or not. It's color is usually set by Panel:SetBGColor.

**Argumentos:**

- `boolean paintBackground` — Whether to draw the background or not.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetPaintBorderEnabled` `[client/menu]`

Sets whether the default border of the panel should be drawn or not.

**Argumentos:**

- `boolean paintBorder` — Whether to draw the border or not.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetPaintedManually` `[client/menu]`

Enables or disables painting of the panel manually with Panel:PaintManual.

**Argumentos:**

- `boolean paintedManually` — True if the panel should be painted manually.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetParent` `[client/menu]`

Sets the parent of the panel.
Panels parented to the context menu will not be clickable unless Panel:SetMouseInputEnabled and Panel:SetKeyboardInputEnabled(lowercase) are both true or Panel:MakePopup has been called. If you want the panel to have mouse input but you do not want to prevent players from moving, set Panel:SetKeyboardInputEnabled(lowercase) to false immediately after calling Panel:MakePopup.

**Argumentos:**

- `Panel parent` — The new parent of the panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetPlayer` `[client]`

Used by AvatarImage to load an avatar for given player.

**Argumentos:**

- `Player player` — The player to use avatar of.
- `number size` = `32` — The size of the avatar to use. Acceptable sizes are `32`, `64`, `184`. Non matching sizes will be clamped down to the highest valid number.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetPopupStayAtBack` `[client/menu]`

If this panel object has been made a popup with Panel:MakePopup, this method will prevent it from drawing in front of other panels when it receives input focus.

**Argumentos:**

- `boolean stayAtBack` — If `true`, the popup panel will not draw in front of others when it gets focus, for example when it is clicked.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetPos` `[client/menu]`

Sets the position of the panel's top left corner.

This will trigger PANEL:PerformLayout. You should avoid calling this function in PANEL:PerformLayout to avoid infinite loops.

See also Panel:SetX and Panel:SetY.

If you wish to position and re-size panels without much guesswork and have them look good on different screen resolutions, you may find Panel:Dock useful

**Argumentos:**

- `number posX` — The x coordinate of the position.
- `number posY` — The y coordinate of the position.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetRenderInScreenshots` `[client/menu]`

Sets whenever the panel should be rendered in a screenshot. (`jpeg` or `screenshot` commands, Camera SWEP)

**Argumentos:**

- `boolean renderInScreenshot` — Whether to render in the screenshot or not.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetSelectable` `[client/menu]`

Sets whether the panel object can be selected or not (like icons in the Spawn Menu, holding Shift). If enabled, this will affect the function of a DButton whilst Shift is pressed. Panel:SetSelected can be used to select/deselect the object.

**Argumentos:**

- `boolean selectable` — Whether the panel object should be selectable or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:23`*

---

### `Panel:SetSelected` `[client/menu]`

Sets the selected state of a selectable panel object. This functionality is set with Panel:SetSelectable and checked with Panel:IsSelectable.

**Argumentos:**

- `boolean selected` = `false` — Whether the object should be selected or deselected. Panel:IsSelected can be used to determine the selected state of the object.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:47`*

---

### `Panel:SetSelectionCanvas` `[client/menu]`

Enables the panel object for selection (much like the spawn menu).

**Argumentos:**

- `boolean set` — Whether to enable selection.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:10`*

---

### `Panel:SetSize` `[client/menu]`

Sets the size of the panel.

Calls PANEL:OnSizeChanged and marks this panel for layout (Panel:InvalidateLayout).
Automatically rounds the width and height down

See also Panel:SetWidth and Panel:SetHeight.

If you wish to position and re-size panels without much guesswork and have them look good on different screen resolutions, you may find Panel:Dock useful

**Argumentos:**

- `number width` — The width of the panel.
- `number height` — The height of the panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetSkin` `[client/menu]`

Sets the derma skin that the panel object will use, and refreshes all panels with derma.RefreshSkins.

**Argumentos:**

- `string skinName` — The name of the skin to use. The default derma skin is `Default`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:364`*

---

### `Panel:SetSpawnIcon` `[client]`

Sets the `.png` image to be displayed on a  SpawnIcon or the panel it is based on - ModelImage.

Only `.png` images can be used with this function.

**Argumentos:**

- `string icon` — A path to the .png material, for example one of the Silkicons shipped with the game.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetSteamID` `[client]`

Used by AvatarImage panels to load an avatar by its 64-bit Steam ID (community ID).

**Argumentos:**

- `string steamid` — The 64bit SteamID of the player to load avatar of
- `number size` — The size of the avatar to use. Acceptable sizes are 32, 64, 184.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTabPosition` `[client/menu]`

When TAB is pressed, the next selectable panel in the number sequence is selected.

This function requires Panel:SetFocusTopLevel to be called on the parent panel for tab navigation to work.

**Argumentos:**

- `number position` — 

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTall` `[client/menu]`

Sets height of a panel. An alias of Panel:SetHeight.

**Argumentos:**

- `number height` — Desired height to set

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTerm` `[client/menu]`

Removes the panel after given time in seconds.
This function will not work if PANEL:AnimationThink is overridden, unless Panel:AnimationThinkInternal is called every frame.

**Argumentos:**

- `number delay` — Delay in seconds after which the panel should be removed.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:10`*

---

### `Panel:SetText` `[client/menu]`

Sets the text value of a panel object containing text, such as a Label, TextEntry or  RichText and their derivatives, such as DLabel, DTextEntry or DButton.

When used on a Label or its derivatives ( DLabel and DButton ), it will automatically call Panel:InvalidateLayout, meaning that you should avoid running this function every frame on these panels to avoid unnecessary performance loss.

Label &amp; its derivatives has hard length limit, maximum 1023 ascii characters.

**Argumentos:**

- `string text` — The text value to set.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTextHidden` `[client/menu]`

Makes TextEntry's text be replaced by `*` characters, just like a password-entry text field would.

**Argumentos:**

- `boolean ` — Whether to have the text be hidden.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTextInset` `[client/menu]`

Sets the left and top text margins of a text-based panel object, such as a DButton or DLabel.

**Argumentos:**

- `number insetX` — The left margin for the text, in pixels. This will only affect centered text if the margin is greater than its x-coordinate.
- `number insetY` — The top margin for the text, in pixels.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTextSelectionColors` `[client/menu]`

Sets text selection colors of a RichText element.

**Argumentos:**

- `Color textColor` — The Color to set for selected text.
- `Color backgroundColor` — The Color to set for selected text background.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetToFullHeight` `[client/menu]`

Sets the height of a RichText element to accommodate the text inside.

This function internally relies on Panel:GetNumLines, so it should be called at least a couple frames after modifying the text using Panel:AppendText

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:SetTooltip` `[client/menu]`

Sets the tooltip to be displayed when a player hovers over the panel object with their cursor.

By default, DTooltip will be used. Panel:SetTooltipPanelOverride can be used to override the tooltip panel.

**Argumentos:**

- `string str` = `nil` — The text to be displayed in the tooltip. Set `nil` to disable it.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:301`*

---

### `Panel:SetTooltipDelay` `[client/menu]`

Sets the tooltip delay. (time between hovering over the panel, and the tooltip showing up)

Can be retrieved with Panel:GetTooltipDelay.

**Argumentos:**

- `number tooltip` — The tooltip delay to set.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:323`*

---

### `Panel:SetTooltipPanel` `[client/menu]`

Sets the panel to be displayed as contents of a DTooltip when a player hovers over the panel object with their cursor. See Panel:SetTooltipPanelOverride if you are looking to override DTooltip itself.

Panel:SetTooltip will override this functionality.

Calling this from PANEL:OnCursorEntered is too late! The tooltip will not be displayed or be updated.

Given panel or the previously set one will **NOT** be automatically removed.

**Argumentos:**

- `Panel tooltipPanel` = `nil` — The panel to use as the tooltip.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:309`*

---

### `Panel:SetTooltipPanelOverride` `[client/menu]`

Sets the panel class to be created instead of DTooltip when the player hovers over this panel and a tooltip needs creating.

**Argumentos:**

- `string override` — The panel class to override the default DTooltip. The new panel class must have the following methods:
* Panel:SetText - If you are using Panel:SetTooltip.
* DTooltip:SetContents - If you are using Panel:SetTooltipPanel.
* DTooltip:OpenForPanel - A "hook" type function that gets called shortly after creation (and after the above 2) to open and position the tooltip. You can see this logic in `lua/includes/util/tooltips.lua`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:316`*

---

### `Panel:SetURL` `[client/menu]`

Sets the URL of a link-based panel such as DLabelURL.

**Argumentos:**

- `string url` — The URL to set. It **must** begin with either `http://` or `https://`.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetUnderlineFont` `[client/menu]`

Sets the underlined font for use by clickable text in a RichText. See also Panel:InsertClickableTextStart

This function will only work on RichText panels.

**Argumentos:**

- `string fontName` — The name of the font.

See Default_Fonts for a list of existing fonts.
Alternatively, use surface.CreateFont to create your own custom font.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetVerticalScrollbarEnabled` `[client/menu]`

Sets the visibility of the vertical scrollbar.

Works for RichText and TextEntry.

**Argumentos:**

- `boolean display` = `false` — True to display the vertical text scroll bar, false to hide it.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetVisible` `[client/menu]`

Sets the "visibility" of the panel.

**Argumentos:**

- `boolean visible` — The visibility of the panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetWide` `[client/menu]`

Sets width of a panel. An alias of Panel:SetWidth.

**Argumentos:**

- `number width` — Desired width to set

**Retorna:**

*(sin retorno)*

---

### `Panel:SetWidth` `[client/menu]`

Sets the width of the panel.

Calls PANEL:OnSizeChanged and marks this panel for layout (Panel:InvalidateLayout).
Automatically rounds the width down

See also Panel:SetSize.

**Argumentos:**

- `number width` — The new width of the panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:53`*

---

### `Panel:SetWorldClicker` `[client/menu]`

This makes it so that when you're hovering over this panel you can "click" on the world. Your weapon aim (and its viewmodel) will follow the cursor. This is primarily used for the Sandbox context menu.

**Argumentos:**

- `boolean enable` — Whether to enable or disable the feature for this panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetWrap` `[client/menu]`

Sets whether text wrapping should be enabled or disabled on Label and DLabel panels.

Use DLabel:SetAutoStretchVertical to automatically correct vertical size; Panel:SizeToContents will not set the correct height.

**Argumentos:**

- `boolean wrap` — `True` to enable text wrapping, `false` otherwise.

**Retorna:**

*(sin retorno)*

---

### `Panel:SetX` `[client/menu]`

Sets the X position of the panel.

Uses Panel:SetPos internally.

**Argumentos:**

- `number x` — The X coordinate of the position.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:70`*

---

### `Panel:SetY` `[client/menu]`

Sets the Y position of the panel.

Uses Panel:SetPos internally.

**Argumentos:**

- `number y` — The Y coordinate of the position.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:73`*

---

### `Panel:SetZPos` `[client/menu]`

Sets the panels z position which determines the rendering order.

Panels with lower z positions appear behind panels with higher z positions.

This also controls in which order panels docked with Panel:Dock appears.

**Argumentos:**

- `number zIndex` — The z position of the panel. 
Can't be lower than -32768 or higher than 32767.

**Retorna:**

*(sin retorno)*

---

### `Panel:Show` `[client/menu]`

Makes a panel visible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:602`*

---

### `Panel:SizeTo` `[client/menu]`

Uses animation to resize the panel to the specified size.

**Argumentos:**

- `number sizeW` = `0` — The target width of the panel. Use -1 to retain the current width.
- `number sizeH` = `0` — The target height of the panel. Use -1 to retain the current height.
- `number time` — The time to perform the animation within.
- `number delay` = `0` — The delay before the animation starts.
- `number ease` = `-1` — Easing of the start and/or end speed of the animation. See Panel:NewAnimation for how this works.
- `function callback` = `nil` — The function to be called once the animation finishes.

The Structures/AnimationData that was used.
The panel object that was animated.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:182`*

---

### `Panel:SizeToChildren` `[client/menu]`

Resizes the panel to fit the bounds of its children.

Your panel must have its layout updated (Panel:InvalidateLayout) for this function to work properly.
The sizeW and sizeH parameters are false by default. Therefore, calling this function with no arguments will result in a no-op.

**Argumentos:**

- `boolean sizeW` = `false` — Resize with width of the panel.
- `boolean sizeH` = `false` — Resize the height of the panel.

**Retorna:**

*(sin retorno)*

---

### `Panel:SizeToContents` `[client/menu]`

Resizes the panel so that its width and height fit all of the content inside.

Only works on Label derived panels such as DLabel by default, and on any panel that manually implemented the Panel:SizeToContents method, such as DNumberWang and DImage.

You must call this function **AFTER** setting text/font, adjusting child panels or otherwise altering the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:SizeToContentsX` `[client/menu]`

Resizes the panel object's width to accommodate all child objects/contents.

Only works on Label derived panels such as DLabel by default, and on any panel that manually implemented Panel:GetContentSize method.

You must call this function **AFTER** setting text/font or adjusting child panels.

**Argumentos:**

- `number addVal` = `0` — The number of extra pixels to add to the width. Can be a negative number, to reduce the width.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:342`*

---

### `Panel:SizeToContentsY` `[client/menu]`

Resizes the panel object's height to accommodate all child objects/contents.

Only works on Label derived panels such as DLabel by default, and on any panel that manually implemented Panel:GetContentSize method.

You must call this function **AFTER** setting text/font or adjusting child panels.

**Argumentos:**

- `number addVal` = `0` — The number of extra pixels to add to the height.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:330`*

---

### `Panel:SlideDown` `[client/menu]`

Slides the panel in from above.

**Argumentos:**

- `number Length` — Time to complete the animation.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:216`*

---

### `Panel:SlideUp` `[client/menu]`

Slides the panel out to the top.

**Argumentos:**

- `number Length` — Time to complete the animation.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:202`*

---

### `Panel:StartBoxSelection` `[client/menu]`

Begins a box selection, enables mouse capture for the panel object, and sets the start point of the selection box to the mouse cursor's position, relative to this object. For this to work, either the object or its parent must be enabled as a selection canvas. This is set using Panel:SetSelectionCanvas.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:134`*

---

### `Panel:Stop` `[client/menu]`

Stops all panel animations by clearing its animation list. This also clears all delayed animations.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/animation.lua:78`*

---

### `Panel:StopLoading` `[client/menu]`

Stops the loading of the HTML panel's current page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:StretchBottomTo` `[client/menu]`

Resizes the panel object's height so that its bottom is aligned with the top of the passed panel. An offset greater than zero will reduce the panel's height to leave a gap between it and the passed panel.

**Argumentos:**

- `Panel tgtPanel` — The panel to align the bottom of this one with.
- `number offset` = `0` — The gap to leave between this and the passed panel. Negative values will cause the panel's height to increase, forming an overlap.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:146`*

---

### `Panel:StretchRightTo` `[client/menu]`

Resizes the panel object's width so that its right edge is aligned with the left of the passed panel. An offset greater than zero will reduce the panel's width to leave a gap between it and the passed panel.

**Argumentos:**

- `Panel tgtPanel` — The panel to align the right edge of this one with.
- `number offset` = `0` — The gap to leave between this and the passed panel. Negative values will cause the panel's width to increase, forming an overlap.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:145`*

---

### `Panel:StretchToParent` `[client/menu]`

Sets the dimensions of the panel to fill its parent. It will only stretch in directions that aren't nil.

**Argumentos:**

- `number offsetLeft` = `nil` — The left offset to the parent.
- `number offsetTop` = `nil` — The top offset to the parent.
- `number offsetRight` = `nil` — The right offset to the parent.
- `number offsetBottom` = `nil` — The bottom offset to the parent.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:80`*

---

### `Panel:ToggleSelection` `[client/menu]`

Toggles the selected state of a selectable panel object. This functionality is set with Panel:SetSelectable and checked with Panel:IsSelectable. To check whether the object is selected or not, Panel:IsSelected is used.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:29`*

---

### `Panel:ToggleVisible` `[client/menu]`

Toggles the visibility of a panel and all its children.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:418`*

---

### `Panel:Undo` `[client/menu]`

Restores the last saved state (caret position and the text inside) of a TextEntry. Should act identically to pressing CTRL+Z in a TextEntry.

See also Panel:SaveUndoState.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:UnselectAll` `[client/menu]`

Recursively deselects this panel object and all of its children. This will cascade to all child objects at every level below the parent.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/selections.lua:35`*

---

### `Panel:UpdateHTMLTexture` `[client/menu]`

Forcibly updates the panels' HTML Material, similar to when Paint is called on it.This is only useful if the panel is not normally visible, i.e the panel exists purely for its HTML Material.
Only works on with panels that have a HTML Material. See Panel:GetHTMLMaterial for more details.
A good place to call this is in the GM:PreRender hook

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Panel:Valid` `[client/menu]`

Use Panel:IsValid instead.Returns if a given panel is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the panel is valid or not, true being it is, false being it isn't.