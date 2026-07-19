# MatSelect

---

**Hereda de:** `ContextBase`

---

The panel used by Material &amp; Lamp Sandbox tools for texture selection. Despite being only used in Sandbox, it is **not** exclusive to that gamemode.

See also PropSelect for the prop selecting alternative.

---


## Miembros (13)


---

### `MatSelect:AddMaterial` `[client]`

Adds a new material to the selection list.

**Argumentos:**

- `string label` — Tooltip for the material, for when the player hovers over the material.
- `string path` — Path to the material. Relative to `materials/` folder (do not include it), and do not include the `.vmt` extension.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:AddMaterialEx` `[client]`

Adds a new material to the selection list, with some extra options.

**Argumentos:**

- `string label` — Tooltip for the material, for when the player hovers over the material.
- `string path` — Path to the material. Relative to `materials/` folder (do not include it), and do not include the `.vmt` extension.
- `any value` — Overrides the "value" of the material. This will be what MatSelect:OnSelect receives in the first argument. It also affects MatSelect:FindMaterialByValue.
- `table convars` — A list of convar names (as keys) and their values to set when the user selects this material. ContextBase:SetConVar will be ignored.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:FindAndSelectMaterial` `[client]`

Find a material and selects it, if it exists in this panel.

**Argumentos:**

- `string mat` — The material to find and select within this MatSelect.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:FindMaterialByValue` `[client]`

Find a DImageButton panel based on the input material path.

**Argumentos:**

- `string mat` — The material to find within this MatSelect.

**Retorna:**

- `DImageButton` — The found material, or nil.

---

### `MatSelect:GetAutoHeight` `[client]`

Returns whether the panel would set its own height to fit all materials within its height.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean autoSize` — `true` = auto size itself.

---

### `MatSelect:OnRightClick` `[client]`

Called when the player right clicks a material.

By default, this opens a menu that lets the player copy the material path.

**Argumentos:**

- `Panel pnl` — The DImageButton that was clicked.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:OnSelect` `[client]`

Called when the player selects a material.

**Argumentos:**

- `string material` — Material path of the selected material, not including any file extension.
- `Panel pnl` — The DImageButton that was clicked.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:SelectMaterial` `[client]`

Use MatSelect:FindAndSelectMaterial instead.

Selects a given material panel.

**Argumentos:**

- `DImageButton mat` — The material to select, found by MatSelect:FindMaterialByValue

**Retorna:**

*(sin retorno)*

---

### `MatSelect:SelectedItemPaintOver` `[client]`

Defines a paint over function for a DImageButton when it is selected.

`self` in the context of this function is the DImageButton!

**Argumentos:**

- `number w` — Width of the DImageButton panel.
- `number h` — Height of the DImageButton panel.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:SetAutoHeight` `[client]`

Sets whether the panel should set its own height to fit all materials within its height.

**Argumentos:**

- `boolean autoSize` — If `true`, auto size itself.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:SetItemHeight` `[client]`

Sets the height of a single material in pixels.

**Argumentos:**

- `number height ` — The height of the material, in pixels. Default is `128`.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:SetItemWidth` `[client]`

Sets the width of a single material in pixels.

**Argumentos:**

- `number width` — The width of the material, in pixels. Default is `128`.

**Retorna:**

*(sin retorno)*

---

### `MatSelect:SetNumRows` `[client]`

Sets the target height of the panel, in number of rows.

**Argumentos:**

- `number rows` — Amount of rows to target the height to. Default is `2`.

**Retorna:**

*(sin retorno)*