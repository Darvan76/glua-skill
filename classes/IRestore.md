# IRestore

---

The object used in the saverestore, mainly in saverestore.AddRestoreHook.

It allows you to read blocks directly from the save game files used by Half-Life 2 save system when such save is loaded.

---


## Miembros (9)


---

### `IRestore:EndBlock` `[client/server]`

Ends current data block started with IRestore:StartBlock and returns to the parent block.

To avoid all sorts of errors, you **must** end all blocks you start.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IRestore:ReadAngle` `[client/server]`

Reads next bytes from the restore object as an Angle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angle that has been read

---

### `IRestore:ReadBool` `[client/server]`

Reads next bytes from the restore object as a boolean.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — The boolean that has been read

---

### `IRestore:ReadEntity` `[client/server]`

Reads next bytes from the restore object as an Entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity that has been read.

---

### `IRestore:ReadFloat` `[client/server]`

Reads next bytes from the restore object as a floating point number.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The read floating point number.

---

### `IRestore:ReadInt` `[client/server]`

Reads next bytes from the restore object as an integer number.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The read integer number.

---

### `IRestore:ReadString` `[client/server]`

Reads next bytes from the restore object as a string.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The read string.

---

### `IRestore:ReadVector` `[client/server]`

Reads next bytes from the restore object as a Vector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The read vector.

---

### `IRestore:StartBlock` `[client/server]`

Loads next block of data to be read inside current block. Blocks **must** be ended with IRestore:EndBlock.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the next data block to be read.