# net

---

The net library is one of a number of ways to send data between the client and server.

The major advantages of the net library are the large size limit (64kb/message) and the ability to send data backwards - from the client to the server.

Refer to Net Library Usage for a short introduction.

---


## Miembros (52)


---

### `net:Abort` `[client/server]`

Cancels a net message started by net.Start, so you can immediately start a new one without any errors.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `net:Broadcast` `[server]`

Sends the currently built net message (see net.Start) to all connected players.
More information can be found in Net Library Usage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `net:BytesLeft` `[client/server]`

Returns the amount of data left to read in the current message. Does nothing when sending data.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of data left to read in the current net message in **bytes**.
Returns `nil` if no net message has been started.
- `number` — The amount of data left to read in the current net message in **bits**.
Returns `nil` if no net message has been started.

---

### `net:BytesWritten` `[client/server]`

Returns the size of the current message.

This will include 3 extra bytes (24 bits) used by the engine internally to send the data over the network.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of **bytes** written to the current net message.
Returns `nil` if no net message has been started.
- `number` — The amount of **bits** written to the current net message.
Returns `nil` if no net message has been started.

---

### `net:Incoming` `[client/server]`

You may be looking for net.Receive.

Function called by the engine to tell the Lua state a message arrived.

**Argumentos:**

- `number length` — The message length, in **bits**.
- `Player client` — The player that sent the message. This will be `nil` in the client state.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:23`*

---

### `net:ReadAngle` `[client/server]`

Reads an angle from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The read angle, or `Angle( 0, 0, 0 )` if no angle could be read

---

### `net:ReadBit` `[client/server]`

Reads a bit from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — `0` or `1`, or `0` if the bit could not be read.

---

### `net:ReadBool` `[client/server]`

Reads a boolean from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` or `false`, or `false` if the bool could not be read.

*Fuente: `lua/includes/extensions/net.lua:47`*

---

### `net:ReadColor` `[client/server]`

Reads a Color from the current net message.

You **must** read information in same order as you write it.

**Argumentos:**

- `boolean hasAlpha` = `true` — If the color has alpha written or not. **Must match what was given to net.WriteColor.**

**Retorna:**

- `Color` — The Color read from the current net message, or `Color( 0, 0, 0, 0 )` if the color could not be read.

*Fuente: `lua/includes/extensions/net.lua:118`*

---

### `net:ReadData` `[client/server]`

Reads pure binary data from the message.

You **must** read information in same order as you write it.

**Argumentos:**

- `number length` — The length of the data to be read, in **bytes**.

**Retorna:**

- `string` — The binary data read, or a string containing one character with a byte of `0` if no data could be read.

---

### `net:ReadDouble` `[client/server]`

Reads a double-precision number from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The double-precision number, or `0` if no number could be read.

---

### `net:ReadEntity` `[client/server]`

Reads an entity from the received net message. You should always check if the specified entity exists as it may have been removed and therefore `NULL` if it is outside of the players [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community") or was already removed.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity, or `nil` if no entity could be read.

*Fuente: `lua/includes/extensions/net.lua:66`*

---

### `net:ReadFloat` `[client/server]`

Reads a floating point number from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The floating point number, or `0` if no number could be read.

---

### `net:ReadHeader` `[client/server]`

Reads a word, basically unsigned short. This is used internally to read the "header" of the message which is an unsigned short which can be converted to the corresponding message name via util.NetworkIDToString.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The header number

---

### `net:ReadInt` `[client/server]`

Reads an integer from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

- `number bitCount` — The amount of bits to be read.

This must be set to what you set to net.WriteInt. Read more information at net.WriteInt.

**Retorna:**

- `number` — The read integer number, or `0` if no integer could be read.

---

### `net:ReadMatrix` `[client/server]`

Reads a VMatrix from the received net message.
You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The matrix, or an empty matrix if no matrix could be read.

---

### `net:ReadNormal` `[client/server]`

Reads a normal vector from the net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The normalized vector ( length = `1` ), or `Vector( 0, 0, 1 )` if no normal could be read.

---

### `net:ReadPlayer` `[client/server]`

Reads a player entity that was written with net.WritePlayer from the received net message.

You should always check if the specified entity exists as it may have been removed and therefore `NULL` if it is outside of the local players [PVS](https://developer.valvesoftware.com/wiki/PVS) or was already removed.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Player` — The player, or `Entity(0)` if no entity could be read.

*Fuente: `lua/includes/extensions/net.lua:89`*

---

### `net:ReadString` `[client/server]`

Reads a [null-terminated string](https://en.wikipedia.org/wiki/Null-terminated_string) from the net stream. The size of the string is 8 bits plus 8 bits for every ASCII character in the string.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The read string, or a string with `0` length if no string could be read.

---

### `net:ReadTable` `[client/server]`

Reads a table from the received net message.

See net.WriteTable for extra info.

Sometimes when sending a table through the net library, the order of the keys may be switched. So be cautious when comparing (See example 1).

You may get `net.ReadType: Couldn't read type X` during the execution of the function, the problem is that you are sending objects that **cannot** be serialized/sent over the network.

You **must** read information in same order as you write it.

**Argumentos:**

- `boolean sequential` = `false` — Set to `true` if the input table is sequential. This saves on bandwidth.

**Retorna:**

- `table` — Table received via the net message, or a blank table if no table could be read.

*Fuente: `lua/includes/extensions/net.lua:156`*

---

### `net:ReadType` `[client/server]`

Used internally by net.ReadTable.

Reads a value from the net message with the specified type, written by net.WriteType.

You **must** read information in same order as you write it.

**Argumentos:**

- `number typeID` = `net.ReadUInt(8)` — The type of value to be read, using Enums/TYPE.

**Retorna:**

- `any` — The value, or the respective blank value based on the type you're reading if the value could not be read.

*Fuente: `lua/includes/extensions/net.lua:229`*

---

### `net:ReadUInt` `[client/server]`

Reads an unsigned integer with the specified number of bits from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

- `number bitCount` — The size of the integer to be read, in bits.

This must be set to what you set to net.WriteUInt. Read more information at net.WriteUInt.

**Retorna:**

- `number` — The unsigned integer read, or `0` if the integer could not be read.

---

### `net:ReadUInt64` `[client/server]`

Reads a unsigned integer with 64 bits from the received net message.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The uint64 number.

Since Lua cannot store full 64-bit integers, this function returns a string. It is mainly aimed at usage with Player:SteamID64.

---

### `net:ReadVars` `[client/server]`

A list of types that can be sent over the network via net.ReadType.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Key = type ID (Global.TypeID), Value = function to send the data over the net.

---

### `net:ReadVector` `[client/server]`

Reads a vector from the received net message. Vectors sent by this function are **compressed**, which may result in precision loss. See net.WriteVector for more information.

You **must** read information in same order as you write it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The read vector, or `Vector( 0, 0, 0 )` if no vector could be read.

---

### `net:Receive` `[client/server]`

Adds a net message handler. Only one receiver can be used to receive the net message.

You can use the `net.Read*` functions within the message handler callback.

You **should** put this function **outside** of any other function or hook for it to work properly unless you know what you are doing!

You **must** read information in the same order as you write it.

Each net message has a length limit of **64KB**!

**Argumentos:**

- `string messageName` — The message name to hook to.

The message-name is converted to lower-case so the message-names "`BigBlue`" and "`bigblue`" would be equal.
- `function callback` — The function to be called if the specified message was received.

Length of the message, in bits.
The player that sent the message, works **only** server-side.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:14`*

---

### `net:Receivers` `[client/server]`

This is NOT a function, it's a table used internally by the net library to store net receivers added with net.Receive.

The key is the lowercase net message name and the value is the message's callback function.

Modifying net.Receivers won't affect the net string pool used in util.AddNetworkString.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all registered net receivers.

---

### `net:Send` `[server]`

Sends the current net message to the specified player(s)

**Argumentos:**

- `Player ply` — The player to send the message to.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `table<Player> plys` — A table of players to send the message to.

- Variante 2: - `CRecipientFilter filter` — A recipient filter specifying message targets.

---

### `net:SendOmit` `[server]`

Sends the current message (see net.Start) to all except the player or players specified.

**Argumentos:**

- `Player ply` — The player to **NOT** send the message to.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `table<Player> plys` — A table of players to **NOT** send the message to.

---

### `net:SendPAS` `[server]`

Sends current net message (see net.Start) to all players that are in the same [Potentially Audible Set (PAS)](https://developer.valvesoftware.com/wiki/PAS) as the position, or simply said, it adds all players that can potentially hear sounds from this position.

**Argumentos:**

- `Vector position` — PAS position.

**Retorna:**

*(sin retorno)*

---

### `net:SendPVS` `[server]`

Sends current net message (see net.Start) to all players in the [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community") of the position, or, more simply said, sends the message to players that can potentially see this position.

**Argumentos:**

- `Vector position` — Position that must be in players' visibility set.

**Retorna:**

*(sin retorno)*

---

### `net:SendToServer` `[client]`

Sends the current net message (see net.Start) to the server. The player object must exist on the server for the net message to be received successfully by the server.

Each net message has a length limit of 65,533 bytes (approximately 64 KiB) and your net message will error and fail to send if it is larger than this.

The message name must be pooled with util.AddNetworkString beforehand!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `net:Start` `[client/server]`

Begins a new net message. If another net message is already started and hasn't been sent yet, it will be discarded.

After calling this function, you will want to call `net.Write` functions to write your data, if any, and then finish with a call to one of the following functions:
* net.Send
* net.SendOmit
* net.SendPAS
* net.SendPVS
* net.Broadcast
* net.SendToServer

Each net message has a length limit of 65,533 bytes (approximately 64 KiB) and your net message will error and fail to send if it is larger than this.

The net library has an internal buffer that sent messages are added to that is capable of holding roughly 256 kb at a time. Trying to send more will lead to the client being kicked because of a buffer overflow. Networking_Usage#netlimits

The message name must be pooled with util.AddNetworkString beforehand!

Net messages will not reliably reach the client until the client's GM:InitPostEntity hook is called.

**Argumentos:**

- `string messageName` — The name of the message to send
- `boolean unreliable` = `false` — If set to `true`, the message is not guaranteed to reach its destination

**Retorna:**

- `boolean` — `true` if the message has been started.

---

### `net:WriteAngle` `[client/server]`

Writes an angle to the current net message.

**Argumentos:**

- `Angle angle` — The angle to be sent.

**Retorna:**

*(sin retorno)*

---

### `net:WriteBit` `[client/server]`

Appends a boolean (as `1` or `0`) to the current net message.

Please note that the bit is written here from a boolean (`true/false`) but net.ReadBit returns a number.

**Argumentos:**

- `boolean boolean` — Bit status (false = `0`, true = `1`).

**Retorna:**

*(sin retorno)*

---

### `net:WriteBool` `[client/server]`

Appends a boolean to the current net message. Alias of net.WriteBit.

**Argumentos:**

- `boolean boolean` — Boolean value to write.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:41`*

---

### `net:WriteColor` `[client/server]`

Appends a Color to the current net message.

**Argumentos:**

- `Color Color` — The Color you want to append to the net message.
- `boolean writeAlpha` = `true` — If we should write the alpha of the color or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:103`*

---

### `net:WriteData` `[client/server]`

Writes a chunk of binary data to the message.

**Argumentos:**

- `string binaryData` — The binary data to be sent.
- `number length` = `#binaryData` — The length of the binary data to be sent, in bytes.

**Retorna:**

*(sin retorno)*

---

### `net:WriteDouble` `[client/server]`

Appends a double-precision number to the current net message.

**Argumentos:**

- `number double` — The double to be sent

**Retorna:**

*(sin retorno)*

---

### `net:WriteEntity` `[client/server]`

Appends an entity to the current net message using its Entity:EntIndex.

See net.ReadEntity for the function to read the entity.

**Argumentos:**

- `Entity entity` — The entity to be sent.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:56`*

---

### `net:WriteFloat` `[client/server]`

Appends a float (number with decimals) to the current net message.

**Argumentos:**

- `number float` — The float to be sent.

**Retorna:**

*(sin retorno)*

---

### `net:WriteInt` `[client/server]`

Appends a signed integer - a whole number, positive/negative - to the current net message. Can be read back with net.ReadInt on the receiving end.

Use net.WriteUInt to send an unsigned number (that you know will **never** be negative). Use net.WriteFloat for a non-whole number (e.g. `2.25`).

**Argumentos:**

- `number integer` — The integer to be sent.
- `number bitCount` — The amount of bits the number consists of. This must be **32** or less.

If you are unsure what to set, just set it to `32`.

Consult the table below to determine the bit count you need:

| Bit Count |  Minimum value |  Maximum value |
|-----------|:--------------:|:--------------:|
| 3 | -4 | 3 |
| 4 | -8 | 7 |
| 5 | -16 | 15 |
| 6 | -32 | 31 |
| 7 | -64 | 63 |
| 8 | -128 | 127 |
| 9 | -256 | 255 |
| 10 | -512 | 511 |
| 11 | -1,024 | 1,023 |
| 12 | -2,048 | 2,047 |
| 13 | -4,096 | 4,095 |
| 14 | -8,192 | 8,191 |
| 15 | -16,384 | 16,383 |
| 16 | -32,768 | 32,767 |
| 17 | -65,536 | 65,535 |
| 18 | -131,072 | 131,071 |
| 19 | -262,144 | 262,143 |
| 20 | -524,288 | 524,287 |
| 21 | -1,048,576 | 1,048,575 |
| 22 | -2,097,152 | 2,097,151 |
| 23 | -4,194,304 | 4,194,303 |
| 24 | -8,388,608 | 8,388,607 |
| 25 | -16,777,216 | 16,777,215 |
| 26 | -33,554,432 | 33,554,431 |
| 27 | -67,108,864 | 67,108,863 |
| 28 | -134,217,728 | 134,217,727 |
| 29 | -268,435,456 | 268,435,455 |
| 30 | -536,870,912 | 536,870,911 |
| 31 | -1,073,741,824 | 1,073,741,823 |
| 32 | -2,147,483,648 | 2,147,483,647 |

**Retorna:**

*(sin retorno)*

---

### `net:WriteMatrix` `[client/server]`

Writes a VMatrix to the current net message.

**Argumentos:**

- `VMatrix matrix` — The matrix to be sent.

**Retorna:**

*(sin retorno)*

---

### `net:WriteNormal` `[client/server]`

Writes a normalized/direction vector ( Vector with length of 1 ) to the net message.

This function uses less bandwidth compared to net.WriteVector and will not send vectors with length of &gt; 1 properly.

**Argumentos:**

- `Vector normal` — The normalized/direction vector to be send.

**Retorna:**

*(sin retorno)*

---

### `net:WritePlayer` `[client/server]`

Appends a player entity to the current net message using its Entity:EntIndex. This saves a small amount of network bandwidth over net.WriteEntity.

See net.ReadPlayer for the function to read the entity.

**Argumentos:**

- `Player ply` — The player to be sent.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:76`*

---

### `net:WriteString` `[client/server]`

Appends a string to the current net message. The size of the written data is 8 bits for every ASCII character in the string + 8 bits for the null terminator.

The maximum allowed length of a single written string is **65532 characters**. (aka the limit of the net message itself)

**Argumentos:**

- `string string` — The string to be sent.

The input will be terminated at the first null byte if one is present. See net.WriteData if you wish to write binary data.

**Retorna:**

*(sin retorno)*

---

### `net:WriteTable` `[client/server]`

Appends a table to the current net message. Adds **16 extra bits** per key/value pair, so you're better off writing each individual key/value as the exact type if possible.

All net messages have a **64kb** buffer. This function will not check or error when that buffer is overflown. You might want to consider using util.TableToJSON and util.Compress and send the resulting string in **60kb** chunks, doing the opposite on the receiving end.

**Argumentos:**

- `table table` — The table to be sent.

If the table contains a `nil` key the table may not be read correctly.

Not all objects can be sent over the network. Things like functions, IMaterials, etc will cause errors when reading the table from a net message.

Each element is also limited by the constraint of the `net.Write` function for the element type.
- `boolean sequential` = `false` — Set to `true` if the input table is sequential. This saves on bandwidth, adding **8 extra bits** per key/value pair instead of 16 bits.

To read the table you need to give net.ReadTable the same value!

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:127`*

---

### `net:WriteType` `[client/server]`

Used internally by net.WriteTable.

Appends any type of value to the current net message.

An additional 8-bit unsigned integer indicating the type will automatically be written to the packet before the value, in order to facilitate reading with net.ReadType. If you know the data type you are writing, use a function meant for that specific data type to reduce amount of data sent.

**Argumentos:**

- `any Data` — The data to be sent.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/net.lua:199`*

---

### `net:WriteUInt` `[client/server]`

Appends an unsigned integer with the specified number of bits to the current net message.

Use net.WriteInt if you want to send negative and positive numbers. Use net.WriteFloat for a non-whole number (e.g. `2.25`).

Unsigned numbers **do not** support negative numbers.

**Argumentos:**

- `number unsignedInteger` — The unsigned integer to be sent.
- `number bitCount` — The size of the integer to be sent, in bits. Acceptable values range from any number `1` to `32` inclusive.

For reference: `1` = bit, `4` = nibble, `8` = byte, `16` = short, `32` = long.

Consult the table below to determine the bit count you need. The minimum value for all bit counts is `0`.

| Bit Count |  Maximum value |
|-----------|:--------------:|
| 1 | 1  |
| 2 | 3  |
| 3 | 7  |
| 4 | 15 |
| 5 | 31 |
| 6 | 63 |
| 7 | 127 |
| 8 | 255 |
| 9 | 511 |
| 10 | 1,023 |
| 11 | 2,047 |
| 12 | 4,095 |
| 13 | 8,191 |
| 14 | 16,383 |
| 15 | 32,767 |
| 16 | 65,535 |
| 17 | 131,071 |
| 18 | 262,143 |
| 19 | 524,287  |
| 20 | 1,048,575  |
| 21 | 2,097,151  |
| 22 | 4,194,303  |
| 23 | 8,388,607  |
| 24 | 16,777,215  |
| 25 | 33,554,431  |
| 26 | 67,108,863  |
| 27 | 134,217,727  |
| 28 | 268,435,455  |
| 29 | 536,870,911  |
| 30 | 1,073,741,823 |
| 31 | 2,147,483,647 |
| 32 | 4,294,967,295 |

**Retorna:**

*(sin retorno)*

---

### `net:WriteUInt64` `[client/server]`

Appends an unsigned integer with 64 bits to the current net message.

The limit for an uint64 is 18'446'744'073'709'551'615.
Everything above the limit will be set to the limit.

Unsigned numbers **do not** support negative numbers.

**Argumentos:**

- `string uint64` — The 64 bit value to be sent. Can be a number.

Since Lua cannot store full 64-bit integers, this function takes a string. It is mainly aimed at usage with Player:SteamID64.

If your input is a number and not a string, it won't be networked correctly as soon as it has more than 13 digits.
This is because Lua represents numbers over 13 digits as `1e+14`(`100 000 000 000 000`)
You can do something like this to convert it to a string: `string.format("%.0f", number)`.
If you try to use Global.tostring it will fail because it will create a result something like `1e+14` which doesn't work.

**Retorna:**

*(sin retorno)*

---

### `net:WriteVars` `[client/server]`

A list of types that can be sent over the network via net.WriteType.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Key = type ID (Global.TypeID), Value = function to send the data over the net.

---

### `net:WriteVector` `[client/server]`

Appends a vector to the current net message.
Vectors sent by this function are compressed, which may result in precision loss. XYZ components greater than `16384` or less than `-16384` are irrecoverably altered (most significant bits are trimmed) and precision after the decimal point is 1 digit (5 bits).

**Argumentos:**

- `Vector vector` — The vector to be sent.

**Retorna:**

*(sin retorno)*