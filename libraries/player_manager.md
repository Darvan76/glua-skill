# player_manager

---

The player_manager library lets you manage players, such as setting their models or creating player classes.

---


## Miembros (14)


---

### `player_manager:AddValidHands` `[client/server]`

Assigns view model hands to player model.

**Argumentos:**

- `string name` — Player model name.
- `string model` — Hands model.
- `number skin` = `0` — Skin to apply to the hands.
- `string bodygroups` = `0000000` — Bodygroups to apply to the hands. See Entity:SetBodyGroups for help with the format.
- `boolean matchBodySkin` = `false` — If set to `true`, the skin of the hands will be set to the skin of the playermodel.
This is useful when player models have multiple user-selectable skins.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/player_manager.lua:27`*

---

### `player_manager:AddValidModel` `[client/server]`

Associates a simplified name with a path to a valid player model.

Only used internally.

**Argumentos:**

- `string name` — Simplified name.
- `string model` — Valid PlayerModel path.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/player_manager.lua:17`*

---

### `player_manager:AllValidModels` `[client/server]`

Returns the entire list of valid player models.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — List of all valid player models.

*Fuente: `lua/includes/modules/player_manager.lua:36`*

---

### `player_manager:ClearPlayerClass` `[client/server]`

Clears a player's class association by setting their ClassID to 0.

**Argumentos:**

- `Player ply` — Player to clear class from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/player_manager.lua:399`*

---

### `player_manager:GetPlayerClass` `[client/server]`

Gets a players class.

**Argumentos:**

- `Player ply` — Player to get class.

**Retorna:**

- `string` — The players class.

*Fuente: `lua/includes/modules/player_manager.lua:390`*

---

### `player_manager:GetPlayerClassTable` `[client/server]`

Gets a players' class table.

**Argumentos:**

- `Player ply` — Player to get class of.

**Retorna:**

- `table` — The players class table.

---

### `player_manager:GetPlayerClasses` `[client/server]`

Retrieves a copy of all registered player classes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A copy of all registered player classes.

*Fuente: `lua/includes/modules/player_manager.lua:300`*

---

### `player_manager:OnPlayerSpawn` `[client/server]`

Applies basic class variables when the player spawns.

Called from GM:PlayerSpawn in the base gamemode.

**Argumentos:**

- `Player ply` — Player to setup.
- `boolean transition` — If true, the player just spawned from a map transition. You probably want to not touch player's weapons or position if this is set to `true`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/player_manager.lua:433`*

---

### `player_manager:RegisterClass` `[client/server]`

Register a class metatable to be assigned to players later.

**Argumentos:**

- `string name` — Class name.
- `table table` — Class metatable, see Structures/PLAYER.
- `string base` = `nil` — Base class name.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/player_manager.lua:350`*

---

### `player_manager:RunClass` `[client/server]`

Execute a named function within the player's set class.

**Argumentos:**

- `Player ply` — Player to execute function on.
- `string funcName` — Name of function.
- `vararg arguments` — Optional arguments. Can be of any type.

**Retorna:**

- `vararg` — The values returned by the called function.

*Fuente: `lua/includes/modules/player_manager.lua:405`*

---

### `player_manager:SetPlayerClass` `[client/server]`

Sets a player's class.

**Argumentos:**

- `Player ply` — Player to set class.
- `string className` — Name of class to set.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/player_manager.lua:377`*

---

### `player_manager:TranslatePlayerHands` `[client/server]`

Retrieves correct hands for given player model. By default returns citizen hands.

See player_manager.AddValidHands for defining/linking hands to a model - this must be defined somewhere otherwise the model will return citizen hands here.

**Argumentos:**

- `string name` — Player model name.

**Retorna:**

- `table` — A table with following contents:
* string model - Model of hands.
* number skin - Skin of hands.
* string body - Bodygroups of hands.
* boolean matchBodySkin - Use player skinIndex.

*Fuente: `lua/includes/modules/player_manager.lua:69`*

---

### `player_manager:TranslatePlayerModel` `[client/server]`

Returns the valid model path for a simplified name.

**Argumentos:**

- `string shortName` — The short name of the model.

**Retorna:**

- `string` — The valid model path for the short name.

*Fuente: `lua/includes/modules/player_manager.lua:44`*

---

### `player_manager:TranslateToPlayerModelName` `[client/server]`

Returns the simplified name for a valid model path of a player model.

Opposite of player_manager.TranslatePlayerModel.

**Argumentos:**

- `string model` — The model path to a player model.

**Retorna:**

- `string` — The simplified name for that model.

*Fuente: `lua/includes/modules/player_manager.lua:57`*