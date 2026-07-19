# DCategoryList

---

**Hereda de:** `DScrollPanel`

---

A host for multiple DCollapsibleCategory panels.
As the name suggests, each one of them can be collapsed or expanded on demand by the user.

---


## Miembros (3)


---

### `DCategoryList:Add` `[client/menu]`

Adds a DCollapsibleCategory to the list.

**Argumentos:**

- `string categoryName` — The name of the category to add.

**Retorna:**

- `Panel` — The created DCollapsibleCategory

*Fuente: `lua/vgui/dcategorylist.lua:18`*

---

### `DCategoryList:AddItem` `[client/menu]`

Adds an element to the list.

**Argumentos:**

- `Panel element` — VGUI element to add to the list.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorylist.lua:10`*

---

### `DCategoryList:UnselectAll` `[client/menu]`

Calls Panel:UnselectAll on all child elements, if they have it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dcategorylist.lua:37`*