# drive

---

The drive library is for adding custom control modes to the new "remote control" entity piloting system in Garry's Mod 13. See Entity Driving.

---


## Miembros (12)


---

### `drive:CalcView` `[client/server]`

Used internally to make DRIVE:CalcView work, called by default from `base` gamemode's GM:CalcView hook.

**Argumentos:**

- `Player ply` — The player.
- `table{ViewData} view` — The view, see Structures/ViewData.

**Retorna:**

- `boolean` — True if succeeded.

*Fuente: `lua/includes/modules/drive.lua:154`*

---

### `drive:CreateMove` `[client/server]`

Clientside, the client creates the cmd (usercommand) from their input device (mouse, keyboard) and then it's sent to the server. Restrict view angles here.

**Argumentos:**

- `CUserCmd cmd` — The user command.

**Retorna:**

- `boolean` — True if succeeded.

*Fuente: `lua/includes/modules/drive.lua:141`*

---

### `drive:DestroyMethod` `[client/server]`

Destroys players current driving method.

**Argumentos:**

- `Player ply` — The player to affect.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/drive.lua:103`*

---

### `drive:End` `[client/server]`

Player has stopped driving the entity.

**Argumentos:**

- `Player ply` — The player.
- `Entity ent` — The entity.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/drive.lua:214`*

---

### `drive:FinishMove` `[client/server]`

The move is finished. Copy mv back into the target.

**Argumentos:**

- `Player ply` — The player.
- `CMoveData mv` — The move data.

**Retorna:**

- `boolean` — True if succeeded.

*Fuente: `lua/includes/modules/drive.lua:196`*

---

### `drive:GetMethod` `[client/server]`

Returns ( or creates if inexistent ) a driving method.

**Argumentos:**

- `Player ply` — The player.

**Retorna:**

- `table` — A method object.

*Fuente: `lua/includes/modules/drive.lua:56`*

---

### `drive:Move` `[client/server]`

The move is executed here.

**Argumentos:**

- `Player ply` — The player.
- `CMoveData mv` — The move data.

**Retorna:**

- `boolean` — True if succeeded.

*Fuente: `lua/includes/modules/drive.lua:183`*

---

### `drive:PlayerStartDriving` `[client/server]`

Starts driving for the player.

**Argumentos:**

- `Player ply` — The player to affect.
- `Entity ent` — The entity to drive.
- `string mode` — The driving mode.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/drive.lua:39`*

---

### `drive:PlayerStopDriving` `[client/server]`

Stops the player from driving anything. ( For example a prop in sandbox )

**Argumentos:**

- `Player ply` — The player to affect.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/drive.lua:50`*

---

### `drive:Register` `[client/server]`

Registers a new entity drive mode/method.

**Argumentos:**

- `string name` — The name of the drive mode/method.
- `table data` — The data required to create the drive mode/method. This includes the functions used by the drive. See DRIVE_Hooks.
- `string base` = `nil` — The name of a drive mode/method to inherit code from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/drive.lua:14`*

---

### `drive:Start` `[client/server]`

Called when the player first starts driving this entity.

**Argumentos:**

- `Player ply` — The player.
- `Entity ent` — The entity.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/drive.lua:114`*

---

### `drive:StartMove` `[client/server]`

The user command is received by the server and then converted into a move. This is also run clientside when in multiplayer, for prediction to work.

**Argumentos:**

- `Player ply` — The player.
- `CMoveData mv` — The move data.
- `CUserCmd cmd` — The user command.

**Retorna:**

- `boolean` — True if succeeded.

*Fuente: `lua/includes/modules/drive.lua:169`*