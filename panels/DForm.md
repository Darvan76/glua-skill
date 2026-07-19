# DForm

---

**Hereda de:** `DCollapsibleCategory`

---

An easy form with functions to quickly add form elements

---


## Miembros (18)


---

### `DForm:AddItem` `[client/menu]`

Adds one or two items to the DForm.
If this method is called with only one argument, it is added to the bottom of the form. If two arguments are passed, they are placed side-by-side at the bottom of the form.

Internally, this function is used by the various DForm functions to, for example, add labels to the left of buttons.

**Argumentos:**

- `Panel left` — Left-hand element to add to the DForm.
- `Panel right` = `nil` — Right-hand element to add to the DForm.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dform.lua:42`*

---

### `DForm:Button` `[client/menu]`

Adds a DButton onto the DForm

**Argumentos:**

- `string text` — The text on the button
- `string concommand` — The concommand to run when the button is clicked
- `vararg args` = `nil` — The arguments to pass on to the concommand when the button is clicked

**Retorna:**

- `DButton` — The created DButton

*Fuente: `lua/vgui/dform.lua:254`*

---

### `DForm:CheckBox` `[client/menu]`

Adds a DCheckBoxLabel onto the DForm.
This will run DCheckBoxLabel:OnChange when being added. This is caused by Panel:SetConVar being used when this function is used. To avoid this, use DForm:AddItem with a DCheckBoxLabel.

**Argumentos:**

- `string label` — The label to be set next to the check box
- `string convar` — The console variable to change when this is changed

**Retorna:**

- `DCheckBoxLabel` — The created DCheckBoxLabel

*Fuente: `lua/vgui/dform.lua:192`*

---

### `DForm:ComboBox` `[client/menu]`

Adds a DComboBox onto the DForm

**Argumentos:**

- `string title` — Text to the left of the combo box
- `string convar` — Console variable to change when the user selects something from the dropdown.

**Retorna:**

- `DComboBox` — The created DComboBox
- `DLabel` — The created DLabel

*Fuente: `lua/vgui/dform.lua:134`*

---

### `DForm:ControlHelp` `[client/menu]`

Adds a DLabel onto the DForm. Unlike DForm:Help, this is indented and is colored blue, depending on the derma skin.

**Argumentos:**

- `string help` — The help message to be displayed.

**Retorna:**

- `DLabel` — The created DLabel

*Fuente: `lua/vgui/dform.lua:225`*

---

### `DForm:GetAutoSize` `[client/menu]`

An Accessor Function in DForm that does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

*Fuente: `lua/vgui/dform.lua:6`*

---

### `DForm:GetSpacing` `[client/menu]`

An Global.AccessorFunc that does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

*Fuente: `lua/vgui/dform.lua:7`*

---

### `DForm:Help` `[client/menu]`

Adds a DLabel onto the DForm as a helper

**Argumentos:**

- `string help` — The help message to be displayed

**Retorna:**

- `DLabel` — The created DLabel

*Fuente: `lua/vgui/dform.lua:205`*

---

### `DForm:ListBox` `[client/menu]`

Adds a DListBox onto the DForm
Use DListView with DForm:AddItem instead.

**Argumentos:**

- `string label` = `nil` — The label to set on the DListBox

**Retorna:**

- `DListBox` — The created DListBox
- `DLabel` — The created DLabel if label string was specified

*Fuente: `lua/vgui/dform.lua:277`*

---

### `DForm:NumSlider` `[client/menu]`

Adds a DNumSlider onto the DForm

**Argumentos:**

- `string label` — A short label for the slider.
- `string convar` — The [console variable](ConVars) to change when the slider is changed
- `number min` — The minimum value of the slider
- `number max` — The maximum value of the slider
- `number decimals` = `2` — The number of decimals to allow for the slider value.

**Retorna:**

- `DNumSlider` — The created DNumSlider.

*Fuente: `lua/vgui/dform.lua:174`*

---

### `DForm:NumberWang` `[client/menu]`

Adds a DNumberWang onto the DForm

**Argumentos:**

- `string label` — The label to be placed next to the DNumberWang
- `string convar` — The console variable to change when the slider is changed
- `number min` — The minimum value of the slider
- `number max` — The maximum value of the slider
- `number decimals` = `nil` — The number of decimals to allow in the slider (Optional)

**Retorna:**

- `DNumberWang` — The created DNumberWang
- `DLabel` — The created DLabel

*Fuente: `lua/vgui/dform.lua:154`*

---

### `DForm:PanelSelect` `[client/menu]`

This is derived from the deprecated DPanelSelect.Creates a DPanelSelect and docks it to the top of the DForm.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `DPanelSelect` — The created DPanelSelect.

*Fuente: `lua/vgui/dform.lua:269`*

---

### `DForm:PropSelect` `[client/menu]`

Creates a PropSelect panel and docks it to the top of the DForm.

**Argumentos:**

- `string label` — The label to display above the prop select.
- `string convar` — The convar to set the selected model to.
- `table models` — A table of models to display for selection. Supports 2 formats:
1) Key is the model and value are the convars to set when that model is selected in format `convar=value`
2) An table of tables where each table must have the following keys:
* string model - The model.
* number skin - Model's skin. Defaults to 0
* string tooltip - Displayed when user hovers over the model. Defaults to the model path.
* The key of the table is the value of the convar.
- `number height` = `2` — The height of the prop select panel, in 64px icon increments.

**Retorna:**

- `PropSelect` — The created PropSelect panel.

*Fuente: `lua/vgui/dform.lua:91`*

---

### `DForm:Rebuild` `[client/menu]`

Does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dform.lua:297`*

---

### `DForm:SetAutoSize` `[client/menu]`

an Global.AccessorFunc that does nothing

**Argumentos:**

- `boolean ?` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dform.lua:6`*

---

### `DForm:SetName` `[client/menu]`

Sets the title (header) name of the DForm. This is `Label` until set.

This is an alias of derived DCollapsibleCategory:SetLabel

**Argumentos:**

- `string name` — The new header name.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dform.lua:24`*

---

### `DForm:SetSpacing` `[client/menu]`

An Global.AccessorFunc that does nothing.

**Argumentos:**

- `number ?` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dform.lua:7`*

---

### `DForm:TextEntry` `[client/menu]`

Adds a DTextEntry to a DForm

**Argumentos:**

- `string label` — The label to be next to the text entry
- `string convar` — The console variable to be changed when the text entry is changed

**Retorna:**

- `DTextEntry` — The created DTextEntry
- `DLabel` — The created DLabel

*Fuente: `lua/vgui/dform.lua:75`*