# File

---

This is the file object. It used used primarily to read or write binary data from files.
The default endianness is little-endian. To use big-endian you will need to provide your own functions to read and write shorts and longs.

The object is returned by file.Open.

---


## Miembros (28)


---

### `File:Close` `[client/menu/server]`

Dumps the file changes to disk and closes the file handle which makes the handle useless.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `File:EndOfFile` `[client/menu/server]`

Returns whether the File object has reached the end of file or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the file has reached end or not.

---

### `File:Flush` `[client/menu/server]`

Dumps the file changes to disk and saves the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `File:Read` `[client/menu/server]`

Reads the specified amount of chars and returns them as a binary string.

**Argumentos:**

- `number length` = `nil` — Reads the specified amount of chars. If not set, will read the entire file.

**Retorna:**

- `string data` — The read data.

---

### `File:ReadBool` `[client/menu/server]`

Reads one byte of the file and returns whether that byte was not 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — val

---

### `File:ReadByte` `[client/menu/server]`

Reads one unsigned 8-bit integer from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The unsigned 8-bit integer from the file.

---

### `File:ReadDouble` `[client/menu/server]`

Reads an 8-byte little-endian IEEE-754 floating point double from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The double-precision floating point value read from the file.

---

### `File:ReadFloat` `[client/menu/server]`

Reads an IEEE 754 little-endian 4-byte float from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The read value

---

### `File:ReadLine` `[client/menu/server]`

Returns the contents of the file from the current position up until the end of the current line.

This function will look specifically for `Line Feed` characters `\n` and will **completely ignore `Carriage Return` characters** `\r`.

It will also stop at a `\0` or `NULL` character, but will add a new line instead.

This function will not return more than 8192 characters. The return value will include the `\n` character.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The string of data from the read line.

---

### `File:ReadLong` `[client/menu/server]`

Reads a signed little-endian 32-bit integer from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — A signed 32-bit integer

---

### `File:ReadShort` `[client/menu/server]`

Reads a signed little-endian 16-bit integer from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — int16

---

### `File:ReadUInt64` `[client/menu/server]`

Reads an unsigned 64-bit integer from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — An unsigned 64-bit integer.
Since Lua cannot store full 64-bit integers, this function returns a string. It is mainly aimed at usage with Player:SteamID64.

---

### `File:ReadULong` `[client/menu/server]`

Reads an unsigned little-endian 32-bit integer from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — An unsigned 32-bit integer

---

### `File:ReadUShort` `[client/menu/server]`

Reads an unsigned little-endian 16-bit integer from the file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The 16-bit integer

---

### `File:Seek` `[client/menu/server]`

Sets the file pointer to the specified position.

**Argumentos:**

- `number pos` — Pointer position, in bytes.

**Retorna:**

*(sin retorno)*

---

### `File:Size` `[client/menu/server]`

Returns the size of the file in bytes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number size` — 

---

### `File:Skip` `[client/menu/server]`

Moves the file pointer by the specified amount of chars.

**Argumentos:**

- `number amount` — The amount of chars to skip, can be negative to skip backwards.

**Retorna:**

- `number` — amount

---

### `File:Tell` `[client/menu/server]`

Returns the current position of the file pointer.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — pos

---

### `File:Write` `[client/menu/server]`

Writes the given string into the file.

**Argumentos:**

- `string data` — Binary data to write to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteBool` `[client/menu/server]`

Writes a boolean value to the file as one **byte**.

**Argumentos:**

- `boolean bool` — The bool to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteByte` `[client/menu/server]`

Write an 8-bit unsigned integer to the file.

**Argumentos:**

- `number uint8` — The 8-bit unsigned integer to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteDouble` `[client/menu/server]`

Writes an 8-byte little-endian IEEE-754 floating point double to the file.

**Argumentos:**

- `number double` — The double to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteFloat` `[client/menu/server]`

Writes an IEEE 754 little-endian 4-byte float to the file.

**Argumentos:**

- `number float` — The float to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteLong` `[client/menu/server]`

Writes a signed little-endian 32-bit integer to the file.

**Argumentos:**

- `number int32` — The 32-bit signed integer to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteShort` `[client/menu/server]`

Writes a signed little-endian 16-bit integer to the file.

**Argumentos:**

- `number int16` — The 16-bit signed integer to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteUInt64` `[client/menu/server]`

Writes an unsigned 64-bit integer to the file.

**Argumentos:**

- `string uint64` — The unsigned 64-bit integer to be written to the file.

Since Lua cannot store full 64-bit integers, this function takes a string. It is mainly aimed at usage with Player:SteamID64.

**Retorna:**

*(sin retorno)*

---

### `File:WriteULong` `[client/menu/server]`

Writes an unsigned little-endian 32-bit integer to the file.

**Argumentos:**

- `number uint32` — The unsigned 32-bit integer to be written to the file.

**Retorna:**

*(sin retorno)*

---

### `File:WriteUShort` `[client/menu/server]`

Writes an unsigned little-endian 16-bit integer to the file.

**Argumentos:**

- `number uint16` — The unsigned 16-bit integer to the file.

**Retorna:**

*(sin retorno)*