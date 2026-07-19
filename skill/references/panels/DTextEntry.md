# DTextEntry

---

**Hereda de:** `TextEntry`

---

A form which may be used to display text the player is meant to select and copy or alternately allow them to enter some text of their own.

At least one of your `DTextEntry`'s parents must either be an EditablePanel or derived from it (like a DFrame, for example), else it won't be able to focus and thus be unselectable.

You must also call Panel:MakePopup on said panel or the `DTextEntry` will not work.

---


## Miembros (49)


---

### `DTextEntry:AddHistory` `[client/menu]`

Adds an entry to DTextEntry's history.

See DTextEntry:SetHistoryEnabled.

**Argumentos:**

- `string text` — Text to add to the text entry's history.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:366`*

---

### `DTextEntry:AllowInput` `[client/menu]`

Called whenever the value of the panel has been updated (whether by user input or otherwise).

It allows you to determine whether a user can modify the TextEntry's text.

By default, this only checks whether the panel disallows numeric characters, preventing it from being edited if the value contains any.

This is actually an engine hook that only works on TextEntry derived elements.

If you are looking for a way to modify character limits, see Panel:SetMaximumCharCount

**Argumentos:**

- `string char` — The last character entered into the panel.

**Retorna:**

- `boolean` — Return `true` to prevent the value from changing, `false` to allow it.

*Fuente: `lua/vgui/dtextentry.lua:321`*

---

### `DTextEntry:CheckNumeric` `[client/menu]`

Returns whether a string is numeric or not.
Always returns false if the DTextEntry:SetNumeric is set to false.

**Argumentos:**

- `string strValue` — The string to check.

**Retorna:**

- `boolean` — Whether the string is numeric or not.

*Fuente: `lua/vgui/dtextentry.lua:296`*

---

### `DTextEntry:GetAutoComplete` `[client/menu]`

Called by the DTextEntry when a list of autocompletion options is requested. Meant to be overridden.

**Argumentos:**

- `string inputText` — Player's current input.

**Retorna:**

- `table` — If a table is returned, the values of the table will show up as autocomplete suggestions for the user.

---

### `DTextEntry:GetCursorColor` `[client/menu]`

Returns the cursor color of a DTextEntry.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color of the cursor as a Color.

---

### `DTextEntry:GetDisabled` `[client/menu]`

Use Panel:IsEnabled instead.

Returns whether the textbox is disabled. Use Panel:IsEnabled instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the textbox is disabled.

---

### `DTextEntry:GetDrawBackground` `[client/menu]`

Alias of DTextEntry:GetPaintBackground. Use that instead.

Whether the background is displayed or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTextEntry:GetDrawBorder` `[client/menu]`

Returns the value set by DTextEntry:SetDrawBorder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTextEntry:GetEnterAllowed` `[client/menu]`

Returns whether pressing Enter can cause the panel to lose focus. Note that a multiline DTextEntry cannot be escaped using the Enter key even when this function returns true.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether pressing the Enter key can cause the panel to lose focus.

---

### `DTextEntry:GetFloat` `[client/menu]`

Returns the contents of the DTextEntry as a number.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Text of the DTextEntry as a float, or nil if it cannot be converted to a number using Global.tonumber.

*Fuente: `lua/vgui/dtextentry.lua:388`*

---

### `DTextEntry:GetHighlightColor` `[client/menu]`

Returns the highlight/text selection color of the text entry. If it was not overwritten, it will return the derma skin value. (`colTextEntryTextHighlight`)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The highlight Global.Color.

---

### `DTextEntry:GetHistoryEnabled` `[client/menu]`

Returns whether the history functionality of  DTextEntry is enabled. See DTextEntry:AddHistory.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the history is enabled or not.

---

### `DTextEntry:GetInt` `[client/menu]`

Similar to DTextEntry:GetFloat, but rounds the value to the nearest integer.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Text of the DTextEntry as a round number, or nil if it cannot be converted to a number.

*Fuente: `lua/vgui/dtextentry.lua:379`*

---

### `DTextEntry:GetNumeric` `[client/menu]`

Returns whether only numeric characters (`123456789.-`) can be entered into the DTextEntry.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the DTextEntry is numeric or not.

---

### `DTextEntry:GetPaintBackground` `[client/menu]`

Whether the background is displayed or not

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean show` — `false` hides the background; this is `true` by default.

---

### `DTextEntry:GetPlaceholderColor` `[client/menu]`

Return current color of panel placeholder

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — Current placeholder color

---

### `DTextEntry:GetPlaceholderText` `[client/menu]`

Returns the placeholder text set with DTextEntry:SetPlaceholderText.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — 

---

### `DTextEntry:GetTabbingDisabled` `[client/menu]`

Returns whether or not the panel accepts tab key.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the DTextEntry should ignore tab.

---

### `DTextEntry:GetTextColor` `[client/menu]`

Returns the text color of a DTextEntry.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color of the text as a Color.

---

### `DTextEntry:GetUpdateOnType` `[client/menu]`

Returns whether the DTextEntry is set to run DTextEntry:OnValueChange every time a character is typed or deleted or only when Enter is pressed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTextEntry:IsEditing` `[client/menu]`

Returns whether this DTextEntry is being edited or not. (i.e. has focus)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this DTextEntry is being edited or not

*Fuente: `lua/vgui/dtextentry.lua:64`*

---

### `DTextEntry:OnChange` `[client/menu]`

Called by DTextEntry:OnTextChanged when the user modifies the text in the DTextEntry.

You should override this function to define custom behavior when the DTextEntry text changes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:OnEnter` `[client/menu]`

Called whenever enter is pressed on a DTextEntry.

DTextEntry:IsEditing will still return true in this callback!

**Argumentos:**

- `string value` — The current text of the DTextEntry

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:OnGetFocus` `[client/menu]`

Called whenever the DTextEntry gains focus.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:336`*

---

### `DTextEntry:OnKeyCode` `[client/menu]`

Called from DTextEntry's TextEntry:OnKeyCodeTyped override whenever a valid character is typed while the text entry is focused.

**Argumentos:**

- `number keyCode` — They key code of the key pressed, see Enums/KEY.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:OnLoseFocus` `[client/menu]`

Called whenever the DTextEntry lose focus.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:OnTextChanged` `[client/menu]`

Called internally when the text inside the DTextEntry changes. This is an implementation of TextEntry:OnTextChanged

You should not override this function. Use DTextEntry:OnValueChange instead.

**Argumentos:**

- `boolean noMenuRemoval` — Determines whether to remove the autocomplete menu (false) or not (true).

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:188`*

---

### `DTextEntry:OnValueChange` `[client/menu]`

Called when the text changes of the DTextEntry are applied. (And set to the attached console variable, if one is given)

See also DTextEntry:OnChange for a function that is called on every text change, even if the console variable is not updated.

You should override this function to define custom behavior when the text changes.

This method is called:
* When Enter is pressed after typing
* When DTextEntry:SetValue is used
* For every key typed - only if DTextEntry:SetUpdateOnType was set to true (default is false)

**Argumentos:**

- `string value` — The DTextEntry text.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:OpenAutoComplete` `[client/menu]`

You really should be using DTextEntry:GetAutoComplete instead.
Builds a DMenu for the DTextEntry based on the input table.

**Argumentos:**

- `table tab` — Table containing results from DTextEntry:GetAutoComplete.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:213`*

---

### `DTextEntry:SetCursorColor` `[client/menu]`

Sets the cursor's color in  DTextEntry (the blinking line).

**Argumentos:**

- `Color color` — The color to set the cursor to.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetDisabled` `[client/menu]`

Use Panel:SetEnabled instead.

Disables input on a DTextEntry and greys it out visually. This differs from DTextEntry:SetEditable which doesn't visually change the textbox.

**Argumentos:**

- `boolean disabled` — Whether the textbox should be disabled

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:313`*

---

### `DTextEntry:SetDrawBackground` `[client/menu]`

Alias of DTextEntry:SetPaintBackground. Use that instead.

**Argumentos:**

- `boolean show` — 

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetDrawBorder` `[client/menu]`

Does nothing.

**Argumentos:**

- `boolean bool` — 

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetEditable` `[client/menu]`

Disables Input on a DTextEntry. This differs from DTextEntry:SetDisabled - SetEditable will not affect the appearance of the textbox.

**Argumentos:**

- `boolean enabled` — Whether the DTextEntry should be editable

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:329`*

---

### `DTextEntry:SetEnterAllowed` `[client/menu]`

Sets whether pressing the Enter key will cause the DTextEntry to lose focus or not, provided it is not multiline. This is true by default.

**Argumentos:**

- `boolean allowEnter` — If set to false, pressing Enter will not cause the panel to lose focus and will never call DTextEntry:OnEnter.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetFont` `[client/menu]`

Changes the font of the DTextEntry.

**Argumentos:**

- `string font` — The name of the font to be changed to.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetHighlightColor` `[client/menu]`

Sets/overrides the default highlight/text selection color of the text entry.

**Argumentos:**

- `Color color` — The new highlight Color.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetHistoryEnabled` `[client/menu]`

Enables or disables the history functionality of  DTextEntry. This allows the player to scroll through history elements using up and down arrow keys.

See DTextEntry:AddHistory.

**Argumentos:**

- `boolean enable` — Whether to enable history or not.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetNumeric` `[client/menu]`

Sets whether or not to decline non-numeric characters as input.

Numeric characters are `1234567890.-`

**Argumentos:**

- `boolean numericOnly` — Whether to accept only numeric characters.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetPaintBackground` `[client/menu]`

Sets whether to show the default background of the DTextEntry.

**Argumentos:**

- `boolean show` — `false` hides the background; this is `true` by default.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetPlaceholderColor` `[client/menu]`

Allow you to set placeholder color.

**Argumentos:**

- `Color color` = `Color(128, 128, 128)` — The color of the placeholder.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetPlaceholderText` `[client/menu]`

Sets the placeholder text that will be shown while the text entry has no user text. The player will not need to delete the placeholder text if they decide to start typing.

**Argumentos:**

- `string text` = `nil` — 

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetTabbingDisabled` `[client/menu]`

Sets whether or not the panel accepts tab key.
Disabling tab key prevents the panel from unfocusing by mouse, however, still works for focusing to other keyboard focus.

**Argumentos:**

- `boolean enabled` — Whether the DTextEntry should ignore tab.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetTextColor` `[client/menu]`

Sets the text color of the DTextEntry.

**Argumentos:**

- `Color color` — The text color. Uses the Color.

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetUpdateOnType` `[client/menu]`

Sets whether we should fire DTextEntry:OnValueChange every time we type or delete a character or only when Enter is pressed.

**Argumentos:**

- `boolean updateOnType` — 

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:SetValue` `[client/menu]`

Sets the text of the DTextEntry and calls DTextEntry:OnValueChange.

The text of the DTextEntry only changes if it's not currently being typed in. If you would rather set the text regardless, use Panel:SetText.

**Argumentos:**

- `string text` — The value to set.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:277`*

---

### `DTextEntry:UpdateConvarValue` `[client/menu]`

Used by DTextEntry:OnTextChanged, DTextEntry:OnEnter and DTextEntry:OnLoseFocus

Updates the ConVar associated with the TextEntry to its new value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:256`*

---

### `DTextEntry:UpdateFromHistory` `[client/menu]`

Used internally to set text from the history.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTextEntry:UpdateFromMenu` `[client/menu]`

Used internally to set text from the autocomplete menu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*