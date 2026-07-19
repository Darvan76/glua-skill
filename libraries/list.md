# list

---

The list library allows you add and retrieve values to and from lists. The list library is basically a fancy wrapper for a table, but with much more limited functionality.

It is used extensively in the built-in Sandbox gamemode for addon-extensible lists of things (list of wheel models, list of thruster effects, etc) , without using global tables for this task.

See Default Lists for a page of default Sandbox lists.

---


## Miembros (9)


---

### `list:Add` `[client/menu/server]`

Adds an item to a named list.

**Argumentos:**

- `string identifier` — The list identifier.
- `any item` — The item to add to the list.

**Retorna:**

- `number` — The index at which the item was added.

*Fuente: `lua/includes/modules/list.lua:41`*

---

### `list:Contains` `[client/menu/server]`

Returns true if the list contains the value. (as a value - not a key)

For a function that looks for a key and not a value see list.HasEntry.

**Argumentos:**

- `string list` — List to search through.
- `any value` — The value to test.

**Retorna:**

- `boolean` — Returns true if the list contains the value, false otherwise.

*Fuente: `lua/includes/modules/list.lua:47`*

---

### `list:Get` `[client/menu/server]`

Returns a copy of the list stored at identifier.
This function uses table.Copy which can be very slow for larger lists. You should avoid calling it repeatedly or in performance sensitive hooks such as GM:Think.
Where possible you should use the much faster helper functions:
list.Contains,
list.HasEntry, or
list.GetEntry.

There is also the more dangerous option of calling list.GetForEdit to get the unprotected list if you absolutely must iterate through it in a think hook.

**Argumentos:**

- `string identifier` — The list identifier.

**Retorna:**

- `table` — The copy of the list.

*Fuente: `lua/includes/modules/list.lua:10`*

---

### `list:GetEntry` `[client/menu/server]`

Returns a copy of the entry in the list `list` with key `key`.

**Argumentos:**

- `string list` — List to search through.
- `string key` — The key to search for.

**Retorna:**

- `any|nil` — Returns the  value if the list contains the key, nil otherwise.

*Fuente: `lua/includes/modules/list.lua:16`*

---

### `list:GetForEdit` `[client/menu/server]`

Returns the actual table of the list stored at identifier. Modifying this will affect the stored list.

**Argumentos:**

- `string identifier` — The list identifier.
- `boolean dontCreate` = `false` — If the list at given identifier does not exist, do **not** create it.

**Retorna:**

- `table` — The actual list.

*Fuente: `lua/includes/modules/list.lua:16`*

---

### `list:GetTable` `[client/menu/server]`

Returns a list of all lists currently in use.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all lists, i.e. a table containing names of all lists.

*Fuente: `lua/includes/modules/list.lua:29`*

---

### `list:HasEntry` `[client/menu/server]`

Returns true if the list contains the given key.

For a function that looks for values and not keys see list.Contains.

**Argumentos:**

- `string list` — List to search through.
- `any key` — The key to test.

**Retorna:**

- `boolean` — Returns true if the list contains the key, false otherwise.

*Fuente: `lua/includes/modules/list.lua:60`*

---

### `list:RemoveEntry` `[client/menu/server]`

Removes a single entry from the list `list` with key `key`.

This is equivalent to `list.Set( myList, myKey, nil )`.

**Argumentos:**

- `string list` — List to remove an entry in.
- `string key` — The key for the entry to remove.

**Retorna:**

*(sin retorno)*

---

### `list:Set` `[client/menu/server]`

Sets a specific position in the named list to a value.

**Argumentos:**

- `string identifier` — The list identifier.
- `any key` — The key in the list to set.
- `any item` — The item to set to the list as key.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/list.lua:35`*