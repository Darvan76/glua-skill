# ISave

---

The object used in the saverestore, mainly in saverestore.AddSaveHook.

It allows you to write blocks directly into the save game files used by Half-Life 2 save system when such save is being saved.

---


## Miembros (9)


---

### `ISave:EndBlock` `[client/server]`

Ends current data block started with ISave:StartBlock and returns to the parent block.

To avoid all sorts of errors, you **must** end all blocks you start.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ISave:StartBlock` `[client/server]`

Starts a new block of data that you can write to inside current block. Blocks **must** be ended with ISave:EndBlock.

**Argumentos:**

- `string name` — Name of the new block. Used for determining which block is which, returned by IRestore:StartBlock during game load.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteAngle` `[client/server]`

Writes an Angle to the save object.

**Argumentos:**

- `Angle ang` — The angle to write.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteBool` `[client/server]`

Writes a boolean to the save object.

**Argumentos:**

- `boolean bool` — The boolean to write.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteEntity` `[client/server]`

Writes an Entity to the save object.

**Argumentos:**

- `Entity ent` — The entity to write.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteFloat` `[client/server]`

Writes a floating point number to the save object.

**Argumentos:**

- `number float` — The floating point number to write.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteInt` `[client/server]`

Writes an integer number to the save object.

**Argumentos:**

- `number int` — The integer number to write.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteString` `[client/server]`

Writes a **null terminated** string to the save object.

**Argumentos:**

- `string str` — The string to write.

**Retorna:**

*(sin retorno)*

---

### `ISave:WriteVector` `[client/server]`

Writes a Vector to the save object.

**Argumentos:**

- `Vector vec` — The vector to write.

**Retorna:**

*(sin retorno)*