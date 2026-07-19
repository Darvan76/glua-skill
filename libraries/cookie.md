# cookie

---

Functions to persist data on a user's computer.

The data will be read / written to / from a database
corresponding to the realm the library was used in.

| Realm | Database File |
|:-----:|:-----|
| [Server](/gmod/States#server) | `garrysmod/sv.db`
| [Client](/gmod/States#client) | `garrysmod/cl.db`
| [Menu](/gmod/States#menu) | `garrysmod/mn.db`

---


## Miembros (4)


---

### `cookie:Delete` `[client/menu/server]`

Removes any cookie with the given name.

Does nothing if the cookie doesn't exist.

**Argumentos:**

- `string key` — The name of the cookie that you want to delete.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cookie.lua:105`*

---

### `cookie:GetNumber` `[client/menu/server]`

Gets the value of a cookie on the client as a number.

**Argumentos:**

- `string name` — The name of the cookie that you want to get.
- `any default` = `nil` — Value to return if the cookie does not exist.

**Retorna:**

- `number` — The cookie value.

*Fuente: `lua/includes/modules/cookie.lua:95`*

---

### `cookie:GetString` `[client/menu/server]`

Gets the value of a cookie on the client as a string.

**Argumentos:**

- `string name` — The name of the cookie that you want to get.
- `any default` = `nil` — Value to return if the cookie does not exist.

**Retorna:**

- `string` — The cookie value.

*Fuente: `lua/includes/modules/cookie.lua:85`*

---

### `cookie:Set` `[client/menu/server]`

Creates / updates a cookie in the cookie.

**Argumentos:**

- `string key` — The name of the cookie.
- `string value` — The data stored in the cookie.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/cookie.lua:116`*