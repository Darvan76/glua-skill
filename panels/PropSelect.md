# PropSelect

---

**Hereda de:** `ContextBase`

---

Used in Sandbox tools to allow the player to select models out of a list. Despite being only used in Sandbox, it is **not** exclusive to that gamemode.

See also MatSelect for the material selecting alternative.

---


## Miembros (8)


---

### `PropSelect:AddModel` `[client]`

Adds a new model to the selection list.

**Argumentos:**

- `string model` — Model path, **including** `models/` and `.mdl`.
- `table convars` — A list of convar names (as keys) and their values to set when the user selects this model.

**Retorna:**

*(sin retorno)*

---

### `PropSelect:AddModelEx` `[client]`

Adds a new model to the selection list.

**Argumentos:**

- `string value` — The "value" for this model, which is used to set the ContextBase:SetConVar.
- `string model` — Model path, **including** `models/` and `.mdl`.
- `number skin` — The skin number for this model. It will **not** be set to the convar, use the value argument to track skin-model combos.

**Retorna:**

*(sin retorno)*

---

### `PropSelect:FindAndSelectButton` `[client]`

Find and select a SpawnIcon panel based on the input model path.

**Argumentos:**

- `string mdl` — The model to find and select within this PropSelect.

**Retorna:**

*(sin retorno)*

---

### `PropSelect:FindModelByValue` `[client]`

Find a SpawnIcon panel based on the input model path.

**Argumentos:**

- `string mdl` — The model to find within this PropSelect.

**Retorna:**

- `SpawnIcon` — The found spawnicon, or `nil`.

---

### `PropSelect:Height` `[client]`

If set to above 0, automatically stretches the panel to fit this many rows. Default is 2.

If 0 or below, it will automatically stretch to fit all rows.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of rows to stretch to.

---

### `PropSelect:OnRightClick` `[client]`

Called when the player right clicks a model.

By default, this opens a menu that lets the player copy the model path.

**Argumentos:**

- `Panel pnl` — The Spawnicon that was clicked.

**Retorna:**

*(sin retorno)*

---

### `PropSelect:OnSelect` `[client]`

Called when the player selects a model.

**Argumentos:**

- `Panel pnl` — The Spawnicon that was clicked.
- `String model` — Path of the selected model, or its "value".

**Retorna:**

*(sin retorno)*

---

### `PropSelect:SelectModel` `[client]`

Use PropSelect:FindAndSelectButton instead.

Selects a given spawnicon panel.

**Argumentos:**

- `SpawnIcon icon` — The spawnicon to select, retrieved via PropSelect:FindModelByValue.

**Retorna:**

*(sin retorno)*