# DModelSelect

---

**Hereda de:** `DPanelSelect`

---

This is derived from the deprecated DPanelList.

A vertical list of models.

---


## Miembros (2)


---

### `DModelSelect:SetHeight` `[client]`

Sets the height of the panel **in the amount of 64px spawnicons**.

Overrides Panel:SetHeight.

**Argumentos:**

- `number num` = `2` — Basically how many rows of 64x64 px spawnicons should fit in this DModelSelect

**Retorna:**

*(sin retorno)*

---

### `DModelSelect:SetModelList` `[client]`

Called to set the list of models within the panel element.

**Argumentos:**

- `table models` — Each key is a model path, the value is a kay-value table where they key is a convar name and value is the value to set to that convar.
- `string convar` — ConVar to set when a model from this list is selected.
- `boolean dontSort` — Do not sort the list. (by the `Model` member)
- `boolean dontCallListConVars` — If set, only the `convar` from the 2nd argument will be set, not individual convars from the models list.

**Retorna:**

*(sin retorno)*