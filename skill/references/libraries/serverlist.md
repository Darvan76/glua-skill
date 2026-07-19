# serverlist

---

Menu state library to query the master server list.

---


## Miembros (8)


---

### `serverlist:AddCurrentServerToFavorites` `[menu]`

Adds current server the player is on to their favorites.

**Argumentos:**

- `boolean addOrRemove` — `true` if to add, or `false` if to remove from favorites.

**Retorna:**

*(sin retorno)*

---

### `serverlist:AddServerToFavorites` `[menu]`

Adds the given server address to their favorites.

**Argumentos:**

- `string address` — Server Address. **IP:Port like "127.0.0.1:27015"**

**Retorna:**

*(sin retorno)*

---

### `serverlist:IsCurrentServerFavorite` `[menu]`

Returns true if the current server address is in their favorites.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean favorite` — true if the current server is in their favorites

---

### `serverlist:IsServerFavorite` `[menu]`

Returns true if the given server address is in their favorites.

**Argumentos:**

- `string address` — Server Address. **IP:Port like "127.0.0.1:27015"**

**Retorna:**

- `boolean favorite` — true if the server address is in their favorites

---

### `serverlist:PingServer` `[menu]`

Queries a server for its information/ping.

**Argumentos:**

- `string ip` — The IP address of the server, including the port.
- `function callback` — The function to be called if and when the request finishes.

Callback has arguments described here: Structures/ServerQueryData.

**Retorna:**

*(sin retorno)*

---

### `serverlist:PlayerList` `[menu]`

Queries a server for its player list.

**Argumentos:**

- `string ip` — The IP address of the server, including the port.
- `function callback` — The function to be called if and when the request finishes.

A list of players and their info. Each entry has the following fields:
* number **time** - The amount of time the player is playing on the server, in seconds
* string **name** - The player name
* number **score** - The players score

**Retorna:**

*(sin retorno)*

---

### `serverlist:Query` `[menu]`

Queries the master server for server list.

**Argumentos:**

- `table data` — The information about what kind of servers we want. See Structures/ServerQueryData

**Retorna:**

*(sin retorno)*

---

### `serverlist:RemoveServerFromFavorites` `[menu]`

Removes the given server address from their favorites.

**Argumentos:**

- `string address` — Server Address. **IP:Port like "127.0.0.1:27015"**

**Retorna:**

*(sin retorno)*