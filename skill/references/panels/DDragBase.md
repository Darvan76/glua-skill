# DDragBase

---

**Hereda de:** `DPanel`

---

A VGUI base panel providing drag/drop functionality. Used by DIconLayout, DListLayout and DTileLayout.

---


## Miembros (13)


---

### `DDragBase:DropAction_Copy` `[client/menu]`

Internal function used in DDragBase:MakeDroppable

**Argumentos:**

- `table drops` — 
- `boolean bDoDrop` — 
- `string command` — 
- `number y` — 
- `number x` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:47`*

---

### `DDragBase:DropAction_Normal` `[client/menu]`

Internal function used in DDragBase:DropAction_Copy

**Argumentos:**

- `table drops` — 
- `boolean bDoDrop` — 
- `string command` — 
- `number y` — 
- `number x` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:72`*

---

### `DDragBase:DropAction_Simple` `[client/menu]`

Internal function used in DDragBase:DropAction_Normal

**Argumentos:**

- `table drops` — 
- `boolean bDoDrop` — 
- `string command` — 
- `number y` — 
- `number x` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:53`*

---

### `DDragBase:GetDnD` `[client/menu]`

Returns the drag'n'drop group this panel belongs to. See DDragBase:MakeDroppable. An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Name of the DnD family.

*Fuente: `lua/vgui/ddragbase.lua:4`*

---

### `DDragBase:GetReadOnly` `[client/menu]`

Returns whether this panel is read only or not for drag'n'drop purposes. An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean name` — Whether this panel is read only or not.

*Fuente: `lua/vgui/ddragbase.lua:6`*

---

### `DDragBase:GetUseLiveDrag` `[client/menu]`

Whether this panel uses live drag'n'drop previews. An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

*Fuente: `lua/vgui/ddragbase.lua:5`*

---

### `DDragBase:MakeDroppable` `[client/menu]`

Makes the panel a receiver for any droppable panel with the same DnD name. Internally calls Panel:Receiver.

See Drag and Drop for VGUI.

**Argumentos:**

- `string name` — The unique name for the receiver slot. Only droppable panels with the same DnD name as this can be dropped on the panel.
- `boolean allowCopy` — Whether or not to allow droppable panels to be copied when the Ctrl key is held down.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:34`*

---

### `DDragBase:OnModified` `[client/menu]`

Called when anything is dropped on or rearranged within the DDragBase. For Override

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:139`*

---

### `DDragBase:SetDnD` `[client/menu]`

Used internally by DDragBase:MakeDroppable.

See also DDragBase:GetDnD

An Global.AccessorFunc

**Argumentos:**

- `string name` — Name of the DnD family.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:4`*

---

### `DDragBase:SetDropPos` `[client/menu]`

Determines where you can drop stuff.
"4" for left
"5" for center
"6" for right
"8" for top
"2" for bottom

**Argumentos:**

- `string pos` = `5` — Where you're allowed to drop things.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:24`*

---

### `DDragBase:SetReadOnly` `[client/menu]`

Sets whether this panel is read only or not for drag'n'drop purposes. If set to `true`, you can only copy from this panel, and cannot modify its contents. This is an Global.AccessorFunc

**Argumentos:**

- `boolean name` — Whether this panel should be read only or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:6`*

---

### `DDragBase:SetUseLiveDrag` `[client/menu]`

Whether to use live drag'n'drop previews. This is an Global.AccessorFunc

**Argumentos:**

- `boolean newState` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:5`*

---

### `DDragBase:UpdateDropTarget` `[client/menu]`

Internal function used in DDragBase:DropAction_Normal

**Argumentos:**

- `number drop` — 
- `Panel pnl` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/ddragbase.lua:143`*