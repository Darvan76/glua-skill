# CRecipientFilter

---

List of all possible functions to manipulate Recipient Filters. Can be created with Global.RecipientFilter.

---


## Miembros (16)


---

### `CRecipientFilter:AddAllPlayers` `[server]`

Adds all players to the recipient filter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:AddPAS` `[server]`

Adds all players that are in the same [PAS (Potentially Audible Set)](https://developer.valvesoftware.com/wiki/PAS "PAS - Valve Developer Community") as this position.

**Argumentos:**

- `Vector pos` — A position that players may be able to hear, usually the position of an entity the sound is playing played from.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:AddPVS` `[server]`

Adds all players that are in the same [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community") as this position.

**Argumentos:**

- `Vector Position` — PVS position that players may be able to see.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:AddPlayer` `[server]`

Adds a player to the recipient filter

**Argumentos:**

- `Player Player` — Player to add to the recipient filter.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:AddPlayers` `[server]`

Adds players to the recipient filter from a given table or another recipient filter.

**Argumentos:**

- `CRecipientFilter|table<Player> input` — The filter to add players from. This can also be a sequential table of players. Non player entities or duplicate players will be ignored.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:AddRecipientsByTeam` `[server]`

Adds all players that are on the given team to the filter.

**Argumentos:**

- `number teamid` — Team index to add players from.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:GetCount` `[server]`

Returns the number of valid players in the recipient filter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of valid players in the recipient filter.

---

### `CRecipientFilter:GetPlayers` `[server]`

Returns a table of all valid players currently in the recipient filter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Player>` — A table of all valid players currently in the recipient filter.

---

### `CRecipientFilter:RemoveAllPlayers` `[server]`

Removes all players from the recipient filter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemoveMismatchedPlayers` `[server]`

Remove players from this recipient filter that are **NOT** present in a given table or recipient filter.

**Argumentos:**

- `CRecipientFilter input` — The filter that contains a list of players to test against. Players **NOT** in the given filter will be removed from this filter.

This can also be a sequential table of players. Non player entities will be ignored.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemovePAS` `[server]`

Removes all players from the filter that are in [PAS (Potentially Audible Set)](https://developer.valvesoftware.com/wiki/PAS "PAS - Valve Developer Community") for given position.

**Argumentos:**

- `Vector position` — The position to test

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemovePVS` `[server]`

Removes all players that can see this [PVS (Potential Visibility Set)](https://developer.valvesoftware.com/wiki/PVS "PVS - Valve Developer Community") from the recipient filter.

**Argumentos:**

- `Vector pos` — Position that players may be able to see.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemovePlayer` `[server]`

Removes the player from the recipient filter.

**Argumentos:**

- `Player Player` — The player that should be in the recipient filter if you call this function.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemovePlayers` `[server]`

Remove players from this recipient filter that are present in a given table or recipient filter.

**Argumentos:**

- `CRecipientFilter input` — The filter that contains a list of players to remove. This can also be a sequential table of players. Non player entities will be ignored. If a player in the given table/filter is not present in this filter, it is ignored.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemoveRecipientsByTeam` `[server]`

Removes all players that are on the given team from the filter.

**Argumentos:**

- `number teamid` — Team index to remove players from.

**Retorna:**

*(sin retorno)*

---

### `CRecipientFilter:RemoveRecipientsNotOnTeam` `[server]`

Removes all players that are not on the given team from the filter.

**Argumentos:**

- `number teamid` — Team index.

**Retorna:**

*(sin retorno)*