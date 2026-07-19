# undo

---

The undo library allows you to add custom entities to the undo list, allowing users to "undo" their creation with their undo (default: Z) key.

---


## Miembros (11)


---

### `undo:AddEntity` `[server]`

Adds an entity to the current undo block

**Argumentos:**

- `Entity ent` — The entity to add

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:237`*

---

### `undo:AddFunction` `[server]`

Adds a function to call when the current undo block is undone. Note that if an undo has a function, the player will always be notified when this undo is performed, even if the entity it is meant to undo no longer exists.

**Argumentos:**

- `function func` — The function to call.

See Structures/Undo.
What was passed after the function callback argument.

Returning `false` will mark execution of this function as "failed", meaning that the undo might be skipped if no other entities are removed by it. This is useful when for example an entity you want to access is removed therefore there's nothing to do.
- `vararg arguments` — Arguments to pass to the function (after the undo info table)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:249`*

---

### `undo:Create` `[server]`

Begins a new undo entry

**Argumentos:**

- `string name` — Name of the undo message to show to players

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:213`*

---

### `undo:Do_Undo` `[server]`

Processes an undo block (in table form). This is used internally by the undo manager when a player presses Z.

You should use `gmod_undo` or `gmod_undonum *num*` console commands instead of calling this function directly.

**Argumentos:**

- `table{Undo} tab` — The undo block to process as an Structures/Undo

**Retorna:**

- `number` — Number of removed entities

*Fuente: `lua/includes/modules/undo.lua:368`*

---

### `undo:Finish` `[server]`

Completes an undo entry, and registers it with the player's client

**Argumentos:**

- `string NiceText` = `nil` — Text that appears in the player's undo history. If unset, is set to undo's name.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:329`*

---

### `undo:GetTable` `[client/server]`

Serverside, returns a table containing all undo blocks of all players. Clientside, returns a table of the local player's undo blocks.
Serverside, this table's keys use Player:UniqueID to store a player's undo blocks.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<table{Undo}>` — The undo table.

*Fuente: `lua/includes/modules/undo.lua:187`*

---

### `undo:MakeUIDirty` `[client]`

Makes the UI dirty - it will re-create the controls the next time it is viewed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:116`*

---

### `undo:ReplaceEntity` `[server]`

Replaces any instance of the "from" reference with the "to" reference, in any existing undo block.

You very likely want to call cleanup.ReplaceEntity with the same entities as well.

**Argumentos:**

- `Entity from` — The old entity
- `Entity|nil to` — The new entity to replace the old one. Can also be a `NULL` to remove the entity from the undo system.

**Retorna:**

- `boolean` — Whether the entity was replaced

*Fuente: `lua/includes/modules/undo.lua:261`*

---

### `undo:SetCustomUndoText` `[server]`

Sets a custom undo text for the current undo block

**Argumentos:**

- `string customText` — The text to display when the undo block is undone

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:226`*

---

### `undo:SetPlayer` `[server]`

Sets the player which the current undo block belongs to

**Argumentos:**

- `Player ply` — The player responsible for undoing the block

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:288`*

---

### `undo:SetupUI` `[client]`

Adds a hook (CPanelPaint) to the control panel paint function so we can determine when it is being drawn.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/undo.lua:149`*