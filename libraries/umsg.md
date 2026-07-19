# umsg

---

You should be using the net library instead

The umsg (user message) library was previously the most common way of sending information from the server to the client.

Usermessages have a limit of only 256 bytes!

---


## Miembros (13)


---

### `umsg:Angle` `[server]`

You should be using the net instead
Writes an angle to the usermessage.

**Argumentos:**

- `Angle angle` — The angle to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:Bool` `[server]`

You should be using the net instead
Writes a bool to the usermessage.

**Argumentos:**

- `boolean bool` — The bool to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:Char` `[server]`

You should be using the net instead
Writes a signed char to the usermessage.

**Argumentos:**

- `number char` — The char to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:End` `[server]`

You should be using the net instead
Dispatches the usermessage to the client(s).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `umsg:Entity` `[server]`

You should be using the net instead
Writes an entity object to the usermessage. (As an entity handle, which means the entity index + its serial number)

**Argumentos:**

- `Entity entity` — The entity to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:Float` `[server]`

You should be using the net instead

Writes a float to the usermessage.

**Argumentos:**

- `number float` — The float to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:Long` `[server]`

You should be using the net instead

Writes a signed int (32 bit) to the usermessage.

**Argumentos:**

- `number int` — The int to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:PoolString` `[server]`

Inferior version of util.AddNetworkString

The string specified will be networked to the client and receive a identifying number, which will be sent instead of the string to optimize networking.

**Argumentos:**

- `string string` — The string to be pooled.

**Retorna:**

*(sin retorno)*

---

### `umsg:Short` `[server]`

You should be using the net instead

Writes a signed short (16 bit) to the usermessage.

**Argumentos:**

- `number short` — The short to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:Start` `[server]`

You should be using net instead

Starts a new usermessage.

Usermessages have a limit of only 256 bytes!

**Argumentos:**

- `string name` — The name of the message to be sent.
- `Player filter` = `nil` — If passed a player object, it will only be sent to the player, if passed a CRecipientFilter of players, it will be sent to all specified players, if passed `nil` (or another invalid value), the message will be sent to all players.

**Retorna:**

*(sin retorno)*

---

### `umsg:String` `[server]`

You should be using the net instead
Writes a null terminated string to the usermessage.

**Argumentos:**

- `string string` — The string to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:Vector` `[server]`

You should be using the net instead

Writes a Vector to the usermessage.

**Argumentos:**

- `Vector vector` — The vector to be sent.

**Retorna:**

*(sin retorno)*

---

### `umsg:VectorNormal` `[server]`

You should be using the net instead

Writes a vector normal to the usermessage.

**Argumentos:**

- `Vector normal` — The vector normal to be sent.

**Retorna:**

*(sin retorno)*