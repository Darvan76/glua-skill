# PLAYER

---


## Miembros (14)


---

### `PLAYER:ClassChanged` `[client/server]`

Called when the player's class was changed from this class.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PLAYER:Death` `[server]`

Called when the player dies

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:74`*

---

### `PLAYER:FinishMove` `[client/server]`

Called from GM:FinishMove.

This hook will not work if the current gamemode overrides GM:FinishMove and does not call this hook.

This hook is run after the drive.FinishMove has been called.

**Argumentos:**

- `CMoveData mv` — 

**Retorna:**

- `boolean` — Return true to prevent default action

*Fuente: `gamemodes/sandbox/gamemode/player_class/player_sandbox.lua:161`*

---

### `PLAYER:GetHandsModel` `[server]`

Called on player spawn to determine which hand model to use

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table containing info about view model hands model to be set. See examples.

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:126`*

---

### `PLAYER:Init` `[client/server]`

Called when the class object is created

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:37`*

---

### `PLAYER:Loadout` `[server]`

Called on spawn to give the player their default loadout

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:60`*

---

### `PLAYER:Move` `[client/server]`

Called from GM:Move.

This hook will not work if the current gamemode overrides GM:Move and does not call this hook.

This hook is run after the drive.Move has been called.

**Argumentos:**

- `CMoveData mv` — Movement information

**Retorna:**

- `boolean` — Return true to prevent default action

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:86`*

---

### `PLAYER:PostDrawViewModel` `[client]`

Called after the viewmodel has been drawn

**Argumentos:**

- `Entity viewmodel` — The viewmodel
- `Entity weapon` — The weapon

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:110`*

---

### `PLAYER:PreDrawViewModel` `[client]`

Called before the viewmodel is drawn

**Argumentos:**

- `Entity viewmodel` — The viewmodel
- `Entity weapon` — The weapon

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:100`*

---

### `PLAYER:SetModel` `[server]`

Called when we need to set player model from the class.

This will only be called if you have not overridden GM:PlayerSetModel or call this function from it or anywhere else using player_manager.RunClass

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:67`*

---

### `PLAYER:SetupDataTables` `[client/server]`

Setup the network table accessors.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:27`*

---

### `PLAYER:Spawn` `[server]`

Called when the player spawns

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:45`*

---

### `PLAYER:StartMove` `[client/server]`

Called from GM:CreateMove.

This hook will not work if the current gamemode overrides GM:SetupMove and does not call this hook.

This hook is run after the drive.StartMove has been called.

**Argumentos:**

- `CMoveData mv` — The move data to override/use
- `CUserCmd cmd` — The command data

**Retorna:**

- `boolean` — Return true to prevent default action

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:85`*

---

### `PLAYER:ViewModelChanged` `[client]`

Called when the player changes their weapon to another one causing their viewmodel model to change

**Argumentos:**

- `Entity viewmodel` — The viewmodel that is changing
- `string old` — The old model
- `string new` — The new model

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/gamemode/player_class/player_default.lua:89`*