# DMenuBar

---

**Hereda de:** `DPanel`

---

A simple menu bar.

---


## Miembros (9)


---

### `DMenuBar:AddMenu` `[client/menu]`

Creates a new DMenu object tied to a DButton with the given label on the menu bar.

This will create a new menu regardless of whether or not one with the same label exists. To add **or** get a menu, use DMenuBar:AddOrGetMenu.

**Argumentos:**

- `string label` — The name (label) of the derma menu to create.

**Retorna:**

- `Panel` — The new DMenu which will be opened when the button is clicked.

---

### `DMenuBar:AddOrGetMenu` `[client/menu]`

Retrieves a DMenu object from the menu bar. If one with the given label doesn't exist, a new one is created.

To add a DMenu without checking, use DMenuBar:AddMenu.

**Argumentos:**

- `string label` — The name (label) of the derma menu to get or create.

**Retorna:**

- `Panel` — The DMenu with the given label.

---

### `DMenuBar:GetDrawBackground` `[client/menu]`

Use DMenuBar:GetPaintBackground instead.

Returns whether or not the background should be painted. Is the same as DMenuBar:GetPaintBackground

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Should the background be painted

---

### `DMenuBar:GetIsMenu` `[client/menu]`

Returns whether or not the panel is a menu. Used for closing menus when another panel is selected.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is a menu

---

### `DMenuBar:GetOpenMenu` `[client/menu]`

If a menu is visible/opened, then the menu is returned.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — Returns the visible/open menu or nil.

---

### `DMenuBar:GetPaintBackground` `[client/menu]`

Returns whether or not the background should be painted. Is the same as DMenuBar:GetDrawBackground

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Should the background be painted

---

### `DMenuBar:SetDrawBackground` `[client/menu]`

Use DMenuBar:SetPaintBackground

Sets whether or not the background should be painted. Is the same as DMenuBar:SetPaintBackground

**Argumentos:**

- `boolean shouldPaint` — Should the background be painted

**Retorna:**

*(sin retorno)*

---

### `DMenuBar:SetIsMenu` `[client/menu]`

Sets whether or not the panel is part of a DMenu.

If this is set to `true`, Global.CloseDermaMenus will not be called when the panel is clicked, and thus any open menus will remain open.

**Argumentos:**

- `boolean isMenu` — Is this a menu

**Retorna:**

*(sin retorno)*

---

### `DMenuBar:SetPaintBackground` `[client/menu]`

Sets whether or not the background should be painted. Is the same as DMenuBar:SetDrawBackground

**Argumentos:**

- `boolean shouldPaint` — Should the background be painted

**Retorna:**

*(sin retorno)*