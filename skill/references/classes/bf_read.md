# bf_read

---

This is the object passed to usermessage.Hook when a message is received. It contains each value stored in the message in sequential order. You should read values from it in the order you wrote them.
You should be using net instead

---


## Miembros (11)


---

### `bf_read:ReadAngle` `[client]`

Reads and returns an angle object from the bitstream.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The read angle

---

### `bf_read:ReadBool` `[client]`

Reads 1 bit and returns a bool representing the bit.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — bit

---

### `bf_read:ReadChar` `[client]`

Reads a signed char and returns a number from -127 to 127 representing the ascii value of that char.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — asciiVal

---

### `bf_read:ReadEntity` `[client]`

Reads a short representing an entity index and returns the matching entity handle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — ent

---

### `bf_read:ReadFloat` `[client]`

Reads a 4 byte float from the bitstream and returns it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — float

---

### `bf_read:ReadLong` `[client]`

Reads a 4 byte long from the bitstream and returns it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — int

---

### `bf_read:ReadShort` `[client]`

Reads a 2 byte short from the bitstream and returns it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — short

---

### `bf_read:ReadString` `[client]`

Reads a null terminated string from the bitstream.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — str

---

### `bf_read:ReadVector` `[client]`

Reads a special encoded vector from the bitstream and returns it, this function is not suitable to send normals.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — vec

---

### `bf_read:ReadVectorNormal` `[client]`

Reads a special encoded vector normal from the bitstream and returns it, this function is not suitable to send vectors that represent a position.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — normal

---

### `bf_read:Reset` `[client]`

Rewinds the bitstream so it can be read again.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*