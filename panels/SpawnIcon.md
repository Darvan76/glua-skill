# SpawnIcon

---

**Hereda de:** `DButton`

---

A "spawn icon" displays an image for the given model path.
It is mostly used in the Spawn Menu (Q).
It uses ModelImage internally.

---


## Miembros (7)


---

### `SpawnIcon:GetBodyGroup` `[client]`

Returns the currently active Structures/BodyGroupData#submodels for each Body Group of the spawn icon.

This is set by SpawnIcon:SetBodyGroup.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The Body Groups of the spawnicon

---

### `SpawnIcon:GetModelName` `[client]`

Returns the currently set model name. This is set by SpawnIcon:SetModelName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The model name

---

### `SpawnIcon:GetSkinID` `[client]`

Returns the currently set skin of the spawnicon. This is set by SpawnIcon:SetSkinID.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current skin ID

---

### `SpawnIcon:OpenMenu` `[client]`

Called when right clicked on the SpawnIcon. It will not be called if there is a selection (Panel:GetSelectionCanvas), in which case SANDBOX:SpawnlistOpenGenericMenu is called.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SpawnIcon:SetBodyGroup` `[client]`

This is done automatically by SpawnIcon. You do not need to call this. Doing so may cause unforeseen consequences.

Sets the active Structures/BodyGroupData#submodels for the given Structures/BodyGroupData#id, so it can be retrieved with SpawnIcon:GetBodyGroup.

Use Panel:SetModel instead.

**Argumentos:**

- `number bodyGroupId` — The Body Group ID to set the active Sub Model ID for.
Body Group IDs start at `0`.
- `number activeSubModelId` — The Sub Model ID to set as active.
Sub Model IDs start at `0`.

**Retorna:**

*(sin retorno)*

---

### `SpawnIcon:SetModelName` `[client]`

This is done automatically by SpawnIcon. You do not need to call this. Doing so may cause unforeseen consequences.

Sets the model name, so it can be retrieved with SpawnIcon:GetModelName. Use Panel:SetModel instead.

**Argumentos:**

- `string mdl` — The model name to set

**Retorna:**

*(sin retorno)*

---

### `SpawnIcon:SetSkinID` `[client]`

This is done automatically by SpawnIcon. You do not need to call this. Doing so may cause unforeseen consequences.

Sets the skin id of the spawn icon, so it can be retrieved with SpawnIcon:GetSkinID. Use Panel:SetModel instead.

**Argumentos:**

- `number skin` — Skin ID to set

**Retorna:**

*(sin retorno)*