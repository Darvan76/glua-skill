# DLabel

---

**Hereda de:** `Label`

---

A standard Derma text label. A lot of this panels functionality is a base for button elements, such as DButton

---


## Miembros (42)


---

### `DLabel:DoClick` `[client/menu]`

Called when the label is left clicked (on key release) by the player.

This will be called after DLabel:OnDepressed and DLabel:OnReleased.

This can be overridden; by default, it calls DLabel:Toggle.

See also DLabel:DoRightClick, DLabel:DoMiddleClick and DLabel:DoDoubleClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:DoClickInternal` `[client/menu]`

Called just before DLabel:DoClick.

In DLabel does nothing and is safe to override. Used by DMenuOption and DCollapsibleCategory's tabs.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:DoDoubleClick` `[client/menu]`

Called when the label is double clicked by the player with left clicks.

DLabel:SetDoubleClickingEnabled must be set to true for this hook to work, which it is by default.

This will be called after DLabel:OnDepressed and DLabel:OnReleased and DLabel:DoClick.

See also DLabel:DoRightClick and DLabel:DoMiddleClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:DoDoubleClickInternal` `[client/menu]`

Called just before DLabel:DoDoubleClick. In DLabel does nothing and is safe to override.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:DoMiddleClick` `[client/menu]`

Called when the label is middle mouse (Mouse wheel, also known as mouse 3) clicked (on key release) by the player.

This will be called after DLabel:OnDepressed and DLabel:OnReleased.

See also DLabel:DoClick, DLabel:DoRightClick and DLabel:DoDoubleClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:DoRightClick` `[client/menu]`

Called when the label is right clicked (on key release) by the player.

This will be called after DLabel:OnDepressed and DLabel:OnReleased.

See also DLabel:DoClick, DLabel:DoMiddleClick and DLabel:DoDoubleClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:GetAutoStretchVertical` `[client/menu]`

Returns whether the label stretches vertically or not.

Set by DLabel:SetAutoStretchVertical.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the label stretches vertically or not.

---

### `DLabel:GetBright` `[client/menu]`

Returns whether the DLabel should set its text color to the current skin's bright text color.

See DLabel:SetBright.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DLabel:GetColor` `[client/menu]`

Returns the actual color of the text.

See also DLabel:GetTextColor and DLabel:GetTextStyleColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The the actual Color of the text.

---

### `DLabel:GetDark` `[client/menu]`

Returns whether the DLabel should set its text color to the current skin's dark text color.

See DLabel:SetDark.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DLabel:GetDisabled` `[client/menu]`

Use Panel:IsEnabled instead.

Gets the disabled state of the DLabel. This is set with DLabel:SetDisabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — The disabled state of the label.

---

### `DLabel:GetDoubleClickingEnabled` `[client/menu]`

Returns whether or not double clicking will call DLabel:DoDoubleClick.

See DLabel:SetDoubleClickingEnabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — true = enabled, false means disabled

---

### `DLabel:GetDrawBackground` `[client/menu]`

You should use DLabel:GetPaintBackground instead.

Returns whether or not the panel background is being drawn. Alias of DLabel:GetPaintBackground.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the panel background is drawn, false otherwise.

---

### `DLabel:GetFont` `[client/menu]`

Returns the current font of the DLabel. This is set with DLabel:SetFont.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the font in use.

---

### `DLabel:GetHighlight` `[client/menu]`

Returns whether the DLabel should set its text color to the current skin's highlighted text color.

See DLabel:SetHighlight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DLabel:GetIsMenu` `[client/menu]`

Used internally by DComboBox.

Returns whether the frame is part of a derma menu or not.

If this is `true`, Global.CloseDermaMenus will not be called when the frame is clicked, and thus any open menus will remain open.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean isMenu` — Whether this panel is a Menu Component

---

### `DLabel:GetIsToggle` `[client/menu]`

Returns whether the toggle functionality is enabled for a label. Set with DLabel:SetIsToggle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not toggle functionality is enabled.

---

### `DLabel:GetPaintBackground` `[client/menu]`

Returns whether or not the background should be painted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If the background is painted or not

---

### `DLabel:GetTextColor` `[client/menu]`

Returns the "override" text color, set by DLabel:SetTextColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The Color of the text, or nil.

---

### `DLabel:GetTextStyleColor` `[client/menu]`

Returns the "internal" or fallback color of the text.

See also DLabel:GetTextColor and DLabel:SetTextStyleColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The "internal" Color of the text

---

### `DLabel:GetToggle` `[client/menu]`

Returns the current toggle state of the label. This can be set with DLabel:SetToggle and toggled with DLabel:Toggle.

In order to use toggle functionality, you must first call DLabel:SetIsToggle with `true`, as it is disabled by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — The current toggle state.

---

### `DLabel:OnDepressed` `[client/menu]`

Called when the player presses the label with any mouse button.

This works as an alternative to PANEL:OnMousePressed as that hook is used heavily by DLabel and overriding it will break functionality.

See also DLabel:DoClick, DLabel:DoMiddleClick, DLabel:DoRightClick, DLabel:OnReleased and DLabel:DoDoubleClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:OnReleased` `[client/menu]`

Called when the player releases any mouse button on the label. This is always called after DLabel:OnDepressed.

This works as an alternative to PANEL:OnMouseReleased as that hook is used heavily by DLabel and overriding it will break functionality.

See also DLabel:DoClick, DLabel:DoMiddleClick, DLabel:DoRightClick and DLabel:DoDoubleClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:OnToggled` `[client/menu]`

Called when the toggle state of the label is changed by DLabel:Toggle.

In order to use toggle functionality, you must first call DLabel:SetIsToggle with `true`, as it is disabled by default.

**Argumentos:**

- `boolean toggleState` — The new toggle state.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetAutoStretchVertical` `[client/menu]`

Automatically adjusts the height of the label dependent of the height of the text inside of it.

**Argumentos:**

- `boolean stretch` — Whenever to stretch the label vertically or not.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetBright` `[client/menu]`

Sets the color of the text to the bright text color defined in the skin.

Disables DLabel:SetDark. Gets overridden by DLabel:SetHighlight.

You should only consider using this if you are using background elements that are not manually painted and are using the skin colors. Otherwise use DLabel:SetTextColor.

**Argumentos:**

- `boolean bright` — Whenever to set the text to bright or not.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetColor` `[client/menu]`

Changes color of label. Alias of DLabel:SetTextColor.

**Argumentos:**

- `Color color` — The color to set. Uses Color.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetDark` `[client/menu]`

Sets the color of the text to the dark text color defined in the skin.

Disables DLabel:SetBright. Gets overridden by DLabel:SetHighlight.

You should only consider using this if you are using background elements that are not manually painted and are using the skin colors. Otherwise use DLabel:SetTextColor.

**Argumentos:**

- `boolean dark` — Whenever to set the text to dark or not.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetDisabled` `[client/menu]`

Use Panel:SetEnabled instead.

Sets the disabled state of the DLabel.

When disabled, the label does not respond to click, toggle or drag &amp; drop actions.

**Argumentos:**

- `boolean disable` — `true` to disable the DLabel, `false` to enable it.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetDoubleClickingEnabled` `[client/menu]`

Sets whether or not double clicking should call DLabel:DoDoubleClick.

This is enabled by default.

**Argumentos:**

- `boolean enable` — true to enable, false to disable

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetDrawBackground` `[client/menu]`

You should use DLabel:SetPaintBackground instead.Sets whether or not to draw the panel background. Alias of DLabel:SetPaintBackground.

**Argumentos:**

- `boolean draw` — True to show the panel's background, false to hide it.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetFont` `[client/menu]`

Sets the font of the label.

**Argumentos:**

- `string fontName` — The name of the font.

See Default_Fonts for a list of existing fonts.
Alternatively, use surface.CreateFont to create your own custom font.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetHighlight` `[client/menu]`

Sets the color of the text to the highlight text color defined in the skin.

For the default Derma skin this makes the label red.

Overrides colors set by both DLabel:SetBright and DLabel:SetDark while active.

You should only consider using this if you are using background elements that are not manually painted and are using the skin colors. Otherwise use DLabel:SetTextColor.

**Argumentos:**

- `boolean highlight` — true to set the label's color to skins's text highlight color, false otherwise.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetIsMenu` `[client/menu]`

Used internally by DComboBox.

Sets whether the frame is part of a derma menu or not.

If this is set to `true`, Global.CloseDermaMenus will not be called when the frame is clicked, and thus any open menus will remain open.

**Argumentos:**

- `boolean isMenu` — Whether this pane is a Menu Component

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetIsToggle` `[client/menu]`

Enables or disables toggle functionality for a label. Retrieved with DLabel:GetIsToggle.

You must call this before using DLabel:SetToggle, DLabel:GetToggle or DLabel:Toggle.

**Argumentos:**

- `boolean allowToggle` — Whether or not to enable toggle functionality.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetPaintBackground` `[client/menu]`

Sets whether or not the background should be painted. This is mainly used by derivative classes, such as DButton.

**Argumentos:**

- `boolean paint` — 

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetTextColor` `[client/menu]`

Sets the text color of the DLabel. This will take precedence over DLabel:SetTextStyleColor.

**Argumentos:**

- `Color color` — The text color. Uses Color.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetTextStyleColor` `[client/menu]`

Use DLabel:SetTextColor instead!

Used by DLabel:SetDark, DLabel:SetBright and DLabel:SetHighlight to set the text color without affecting DLabel:SetTextColor calls.

**Argumentos:**

- `Color color` — The text color. Uses the Color.

**Retorna:**

*(sin retorno)*

---

### `DLabel:SetToggle` `[client/menu]`

Sets the toggle state of the label. This can be retrieved with DLabel:GetToggle and toggled with DLabel:Toggle.

In order to use toggle functionality, you must first call DLabel:SetIsToggle with `true`, as it is disabled by default.

**Argumentos:**

- `boolean toggleState` — The toggle state to be set.

**Retorna:**

*(sin retorno)*

---

### `DLabel:Toggle` `[client/menu]`

Toggles the label's state. This can be set and retrieved with DLabel:SetToggle and DLabel:GetToggle.

In order to use toggle functionality, you must first call DLabel:SetIsToggle with `true`, as it is disabled by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DLabel:UpdateColours` `[client/menu]`

A hook called from within PANEL:ApplySchemeSettings to determine the color of the text on display.

**Argumentos:**

- `table skin` — A table supposed to contain the color values listed above.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dlabel.lua:289`*

---

### `DLabel:UpdateFGColor` `[client/menu]`

Called internally to update the color of the text.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*