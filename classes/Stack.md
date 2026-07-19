# Stack

---

An object returned by util.Stack.

Like a Lua table, a Stack is a container. It follows the principle of LIFO (last in, first out).

The Stack works like a stack of papers: the first page you put down (push) will be the last one you remove (pop). That also means that the last page you put down, will be the first to be removed.

---


## Miembros (5)


---

### `Stack:Pop` `[client/menu/server]`

Pop an item from the stack

**Argumentos:**

- `number amount` = `1` — Amount of items you want to pop.

**Retorna:**

- `any object` — Latest popped item.

*Fuente: `lua/includes/extensions/util.lua:257`*

---

### `Stack:PopMulti` `[client/menu/server]`

Pop an item from the stack

**Argumentos:**

- `number amount` = `1` — Amount of items you want to pop.

**Retorna:**

- `table items` — The Popped Items.

*Fuente: `lua/includes/extensions/util.lua:279`*

---

### `Stack:Push` `[client/menu/server]`

Push an item onto the stack

**Argumentos:**

- `any object` — The item you want to push

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/util.lua:251`*

---

### `Stack:Size` `[client/menu/server]`

Returns the size of the stack

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The size of the stack

*Fuente: `lua/includes/extensions/util.lua:317`*

---

### `Stack:Top` `[client/menu/server]`

Get the item at the top of the stack

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `any` — The item at the top of the stack

*Fuente: `lua/includes/extensions/util.lua:307`*