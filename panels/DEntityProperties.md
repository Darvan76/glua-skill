# DEntityProperties

---

**Hereda de:** `DProperties`

---

Unless you know what you are doing and you benefit from this panel, you should be using the DProperties instead.

A panel used by the Editable Entities system.

---


## Miembros (5)


---

### `DEntityProperties:EditVariable` `[client]`

Called internally by DEntityProperties:RebuildControls.

**Argumentos:**

- `string varname` — 
- `table editdata` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dentityproperties.lua:59`*

---

### `DEntityProperties:EntityLost` `[client]`

Called internally when an entity being edited became invalid.

You should use DEntityProperties:OnEntityLost instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dentityproperties.lua:99`*

---

### `DEntityProperties:OnEntityLost` `[client]`

Called when we were editing an entity and then it became invalid (probably removed). For Override

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dentityproperties.lua:106`*

---

### `DEntityProperties:RebuildControls` `[client]`

Called internally by DEntityProperties:SetEntity to rebuild the controls.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dentityproperties.lua:26`*

---

### `DEntityProperties:SetEntity` `[client]`

Sets the entity to be edited by this panel. The entity must support the Editable Entities system or nothing will happen.

**Argumentos:**

- `Entity ent` — The entity to edit

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dentityproperties.lua:14`*