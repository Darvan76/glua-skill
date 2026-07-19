# menubar

---

The menubar library.

---


## Miembros (3)


---

### `menubar:Init` `[client]`

Creates the menu bar ( The bar at the top of the screen when holding C or Q in sandbox ) and docks it to the top of the screen. It will not appear.

Calling this multiple times will **NOT** remove previous panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `menubar:IsParent` `[client]`

Checks if the supplied panel is parent to the menubar

**Argumentos:**

- `Panel pnl` — The panel to check

**Retorna:**

- `boolean` — Is parent or not

---

### `menubar:ParentTo` `[client]`

Parents the menubar to the panel and displays the menubar.

**Argumentos:**

- `Panel pnl` — The panel to parent to

**Retorna:**

*(sin retorno)*