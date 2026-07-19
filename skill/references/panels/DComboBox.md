# DComboBox

---

**Hereda de:** `DButton`

---

A field with multiple selectable values.

---


## Miembros (20)


---

### `DComboBox:AddChoice` `[client/menu]`

Adds a choice to the combo box.

**Argumentos:**

- `string value` — The text show to the user.
- `any data` = `nil` — The data accompanying this string. If left empty, the value argument is used instead.

Can be accessed with the second argument of DComboBox:GetSelected, DComboBox:GetOptionData and as an argument of DComboBox:OnSelect.
- `boolean select` = `false` — Should this be the default selected text show to the user or not.
- `string icon` = `nil` — Adds an icon for this choice.

**Retorna:**

- `number` — The index of the new option.

*Fuente: `lua/vgui/dcombobox.lua:138`*

---

### `DComboBox:AddSpacer` `[client/menu]`

Adds a spacer below the currently last item in the drop down. Recommended to use with DComboBox:SetSortItems set to `false`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:132`*

---

### `DComboBox:CheckConVarChanges` `[client/menu]`

Ran every frame to update the value of this panel to the value of the associated convar. See Panel:SetConvar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:247`*

---

### `DComboBox:ChooseOption` `[client/menu]`

Selects a combo box option by its index and changes the text displayed at the top of the combo box.

**Argumentos:**

- `string value` — The text to display at the top of the combo box.
- `number index` — The option index.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:85`*

---

### `DComboBox:ChooseOptionID` `[client/menu]`

Selects an option within a combo box based on its table index.

**Argumentos:**

- `number index` — Selects the option with given index.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:99`*

---

### `DComboBox:Clear` `[client/menu]`

Clears the combo box's text value, choices, and data values.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:29`*

---

### `DComboBox:CloseMenu` `[client/menu]`

Closes the combo box menu. Called when the combo box is clicked while open.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:236`*

---

### `DComboBox:GetOptionData` `[client/menu]`

Returns an option's data based on the given index.

**Argumentos:**

- `number index` — The option index.

**Retorna:**

- `any` — The option's data value.

*Fuente: `lua/vgui/dcombobox.lua:48`*

---

### `DComboBox:GetOptionText` `[client/menu]`

Returns an option's text based on the given index.

**Argumentos:**

- `number index` — The option index.

**Retorna:**

- `string` — The option's text value.

*Fuente: `lua/vgui/dcombobox.lua:42`*

---

### `DComboBox:GetOptionTextByData` `[client/menu]`

Returns an option's text based on the given data.

**Argumentos:**

- `string data` — The data to look up the name of.

If given a number and no matching data was found, the function will test given data against each Global.tonumber'd data entry.

**Retorna:**

- `string` — The option's text value.

If no matching data was found, the data itself will be returned. If multiple identical data entries exist, the first instance will be returned.

*Fuente: `lua/vgui/dcombobox.lua:54`*

---

### `DComboBox:GetSelected` `[client/menu]`

Returns the currently selected option's text and data

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The option's text value.
- `any` — The option's stored data.

*Fuente: `lua/vgui/dcombobox.lua:112`*

---

### `DComboBox:GetSelectedID` `[client/menu]`

Returns the index (ID) of the currently selected option.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The ID of the currently selected option.

*Fuente: `lua/vgui/dcombobox.lua:106`*

---

### `DComboBox:GetSortItems` `[client/menu]`

An Global.AccessorFunc that returns an whether the items in the dropdown will be alphabetically sorted or not.

See DComboBox:SetSortItems.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if enabled, false otherwise.

*Fuente: `lua/vgui/dcombobox.lua:8`*

---

### `DComboBox:IsMenuOpen` `[client/menu]`

Returns whether or not the combo box's menu is opened.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the menu is open, false otherwise.

*Fuente: `lua/vgui/dcombobox.lua:170`*

---

### `DComboBox:OnMenuOpened` `[client/menu]`

Called when the player opens the dropdown menu. For Override

**Argumentos:**

- `Panel menu` — The DMenu menu panel.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:126`*

---

### `DComboBox:OnSelect` `[client/menu]`

Called when an option in the combo box is selected. This function does nothing by itself, you're supposed to overwrite it.

**Argumentos:**

- `number index` — The index of the option for use with other DComboBox functions.
- `string value` — The name of the option.
- `any data` — The data assigned to the option.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:120`*

---

### `DComboBox:OpenMenu` `[client/menu]`

Opens the combo box drop down menu. Called when the combo box is clicked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:176`*

---

### `DComboBox:RemoveChoice` `[client/menu]`

Removes a choice added with DComboBox:AddChoice

**Argumentos:**

- `number index` — The index of the option to remove.

**Retorna:**

- `string text` — The text of the removed option.
- `any data` — The data of the removed option that was provided.

*Fuente: `lua/vgui/dcombobox.lua:160`*

---

### `DComboBox:SetSortItems` `[client/menu]`

An Global.AccessorFunc that sets whether or not the items should be sorted alphabetically in the dropdown menu of the DComboBox. If set to false, items will appear in the order they were added by DComboBox:AddChoice calls.

This is enabled by default.

**Argumentos:**

- `boolean sort` — true to enable, false to disable

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:8`*

---

### `DComboBox:SetValue` `[client/menu]`

Sets the text shown in the combo box when the menu is not collapsed.

**Argumentos:**

- `string value` — The text in the DComboBox.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcombobox.lua:266`*