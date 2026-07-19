# permissions

---

Used to ask player for various potentially dangerous permissions.

---


## Miembros (7)


---

### `permissions:AskToConnect` `[client]`

Requests the player to connect to a specified server. The player will be prompted with a confirmation window.

**Argumentos:**

- `string address` — The address to ask to connect to. If a port is not given, the default `:27015` port will be added.

**Retorna:**

*(sin retorno)*

---

### `permissions:Connect` `[menu]`

Connects player to the server. This is what permissions.AskToConnect uses internally.

**Argumentos:**

- `string ip` — IP address to connect.

**Retorna:**

*(sin retorno)*

---

### `permissions:EnableVoiceChat` `[client]`

Activates player's microphone as if they pressed the speak button themself. The player will be prompted with a confirmation window which grants permission temporarily/permanently(depending on checkbox state) for the connected server (revokable).
This is used for TTT's traitor voice channel.

**Argumentos:**

- `boolean enable` — Enable or disable voice activity. `true` will run `+voicerecord` command, anything else `-voicerecord`.

**Retorna:**

*(sin retorno)*

---

### `permissions:GetAll` `[menu]`

Returns all permissions per server. Permanent permissions are stored in `settings/permissions.bin`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string,table> permissions` — A table of permanent and temporary permissions granted for servers.

Example structure:
```lua
permanent = {
["123.123.123.123"] = "connect" -- this server has a permission to connect player to any server even after restarting the game
},
temporary = {
["111.111.111.111"] = "voicerecord" -- this server can enable voice activity on player during this game session
}
```

---

### `permissions:Grant` `[menu]`

Grants permission to the current connected server.

**Argumentos:**

- `string permission` — Permission to grant for the server the player is currently connected.
- `boolean temporary` — `true` if the permission should be granted temporary.

**Retorna:**

*(sin retorno)*

---

### `permissions:IsGranted` `[client/menu]`

Returns whether the player has granted the current server a specific permission.

**Argumentos:**

- `string permission` — The permission to poll. Currently only 2 permission are valid:
* `"connect"`
* `"voicerecord"`

**Retorna:**

- `boolean` — Whether the permission is granted or not.

---

### `permissions:Revoke` `[menu]`

Revokes permission from the server.

**Argumentos:**

- `string permission` — Permission to revoke from the server.
- `string ip` — IP of the server.

**Retorna:**

*(sin retorno)*