# package

---

The package library is a standard Lua library, it's mainly for use with the module system built into Lua.

---


## Miembros (2)


---

### `package:loaded` `[client/menu/server]`

A list of all loaded packages.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all loaded packages.

---

### `package:seeall` `[client/menu/server]`

Sets a metatable for module with its __index field referring to the global environment, so that this module inherits values from the global environment. To be used as an option to Global.module.

**Argumentos:**

- `table module` — The module table to be given a metatable

**Retorna:**

*(sin retorno)*