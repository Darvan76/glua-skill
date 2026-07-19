# dragndrop

---

The drag'n'drop library, used internally by certain base panels to allow for drag'n'drop functionality, like spawnmenu's customizations.

---


## Miembros (11)


---

### `dragndrop:CallReceiverFunction` `[client/menu]`

Calls the receiver function of hovered panel.

**Argumentos:**

- `boolean bDoDrop` — true if the mouse was released, false if we right clicked.
- `number command` — The command value. This should be the ID of the clicked dropdown menu ( if right clicked, or nil ).
- `number mx` — The local to the panel mouse cursor X position when the click happened.
- `number my` — The local to the panel  mouse cursor Y position when the click happened.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:175`*

---

### `dragndrop:Clear` `[client/menu]`

Clears all the internal drag'n'drop variables.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:6`*

---

### `dragndrop:Drop` `[client/menu]`

Handles the drop action of drag'n'drop library.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:37`*

---

### `dragndrop:GetDroppable` `[client/menu]`

Returns a table of currently dragged panels.

**Argumentos:**

- `string name` = `nil` — If set, the function will return only the panels with this Panel:Droppable name.

**Retorna:**

- `table` — A table of all panels that are being currently dragged, if any.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:162`*

---

### `dragndrop:HandleDroppedInGame` `[client/menu]`

Allows you to capture the panel that was dropped into the game (dropped onto the root panel). This function is meant to be overridden.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:29`*

---

### `dragndrop:HoverThink` `[client/menu]`

Handles the hover think. Called from dragndrop.Think.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:557`*

---

### `dragndrop:IsDragging` `[client/menu]`

Returns whether the user is dragging something with the drag'n'drop system.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the user is dragging something with the drag'n'drop system.

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:21`*

---

### `dragndrop:StartDragging` `[client/menu]`

Starts the drag'n'drop.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:78`*

---

### `dragndrop:StopDragging` `[client/menu]`

Stops the drag'n'drop and calls dragndrop.Clear.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:113`*

---

### `dragndrop:Think` `[client/menu]`

Handles all the drag'n'drop processes. Calls dragndrop.UpdateReceiver and dragndrop.HoverThink.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:194`*

---

### `dragndrop:UpdateReceiver` `[client/menu]`

Updates the receiver to drop the panels onto. Called from dragndrop.Think.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel/dragdrop.lua:131`*