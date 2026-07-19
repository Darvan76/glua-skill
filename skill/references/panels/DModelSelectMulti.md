# DModelSelectMulti

---

**Hereda de:** `DPropertySheet`

---

A combination of DModelSelect and DPropertySheet.

---


## Miembros (1)


---

### `DModelSelectMulti:AddModelList` `[client/menu]`

Adds a new tab of models.

**Argumentos:**

- `string name` — Name of the tab to add.
- `table models` — Models list for this tab. See DModelSelect:SetModelList.
- `string convar` — ConVar to set when a model from this list is selected.
- `boolean dontSort` — Do not sort the list. (by the `Model` member)
- `boolean dontCallListConVars` — If set, only the `convar` from the 2nd argument will be set, not individual convars from the models list.

**Retorna:**

*(sin retorno)*