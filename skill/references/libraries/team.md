# team

---

The team library gives you access to the team system built into the Source engine, and allows you to create custom teams and get information about them.

---


## Miembros (20)


---

### `team:AddScore` `[client/server]`

Increases the score of the given team

**Argumentos:**

- `number index` — Index of the team
- `number increment` — Amount to increase the team's score by

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/team.lua:184`*

---

### `team:BestAutoJoinTeam` `[client/server]`

Returns the team index of the team with the least players. Falls back to TEAM_UNASSIGNED

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Team index

*Fuente: `lua/includes/modules/team.lua:190`*

---

### `team:GetAllTeams` `[client/server]`

Returns the real table consisting of information on every defined team

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Team info

*Fuente: `lua/includes/modules/team.lua:34`*

---

### `team:GetClass` `[client/server]`

Returns the selectable classes for the given team. This can be added to with team.SetClass

**Argumentos:**

- `number index` — Index of the team

**Retorna:**

- `table` — Selectable classes

*Fuente: `lua/includes/modules/team.lua:98`*

---

### `team:GetColor` `[client/server]`

Returns the team's color.

**Argumentos:**

- `number teamIndex` — The team index.

**Retorna:**

- `Color` — The team's color as a Color.

*Fuente: `lua/includes/modules/team.lua:171`*

---

### `team:GetName` `[client/server]`

Returns the name of the team.

**Argumentos:**

- `number teamIndex` — The team index.

**Retorna:**

- `string` — The team name. If the team is not defined, returns an empty string.

*Fuente: `lua/includes/modules/team.lua:155`*

---

### `team:GetPlayers` `[client/server]`

Returns a table with all player of the specified team.
This function returns a sequential table, meaning it should be looped with Global.ipairs instead of Global.pairs for efficiency reasons.

**Argumentos:**

- `number teamIndex` — The team index.

**Retorna:**

- `table` — A sequential table of Players that belong to the requested team.

*Fuente: `lua/includes/modules/team.lua:135`*

---

### `team:GetScore` `[client/server]`

Returns the score of the team.

**Argumentos:**

- `number teamIndex` — The team index.

**Retorna:**

- `number` — score

*Fuente: `lua/includes/modules/team.lua:149`*

---

### `team:GetSpawnPoint` `[client/server]`

Returns a table of valid spawnpoint classes the team can use. These are set with team.SetSpawnPoint.

**Argumentos:**

- `number index` — Index of the team

**Retorna:**

- `table` — Valid spawnpoint classes

*Fuente: `lua/includes/modules/team.lua:54`*

---

### `team:GetSpawnPoints` `[client/server]`

Returns a table of valid spawnpoint entities the team can use. These are set with  team.SetSpawnPoint.

**Argumentos:**

- `number index` — Index of the team

**Retorna:**

- `table` — Valid spawnpoint entities

*Fuente: `lua/includes/modules/team.lua:61`*

---

### `team:Joinable` `[client/server]`

Returns if a team is joinable or not. This is set in team.SetUp.

**Argumentos:**

- `number index` — The index of the team.

**Retorna:**

- `boolean` — True if the team is joinable. False otherwise.

*Fuente: `lua/includes/modules/team.lua:47`*

---

### `team:NumPlayers` `[client/server]`

Returns the amount of players in a team.

**Argumentos:**

- `number teamIndex` — The team index.

**Retorna:**

- `number` — playerCount

*Fuente: `lua/includes/modules/team.lua:129`*

---

### `team:SetClass` `[client/server]`

Sets valid classes for use by a team. Classes can be created using player_manager.RegisterClass

**Argumentos:**

- `number index` — Index of the team
- `any classes` — A class ID or table of class IDs

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/team.lua:89`*

---

### `team:SetColor` `[client/server]`

Sets the team's color.

**Argumentos:**

- `number teamIndex` — The team index.
- `Color color` — The team's new color as a Color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/team.lua:162`*

---

### `team:SetScore` `[client/server]`

Sets the score of the given team

**Argumentos:**

- `number index` — Index of the team
- `number score` — The team's new score

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/team.lua:178`*

---

### `team:SetSpawnPoint` `[client/server]`

Sets valid spawnpoint classes for use by a team.

GM.TeamBased must be set to true for this to work

**Argumentos:**

- `number index` — Index of the team
- `any classes` — A spawnpoint classname or table of spawnpoint classnames

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/team.lua:80`*

---

### `team:SetUp` `[client/server]`

Creates a new team. See GM:CreateTeams for the hook to call this in.

**Argumentos:**

- `number teamIndex` — The team index.
- `string teamName` — The team name.
- `Color teamColor` — The team color. Uses the Color.
- `boolean isJoinable` = `true` — Whether the team is joinable or not.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/team.lua:25`*

---

### `team:TotalDeaths` `[client/server]`

Returns the total number of deaths of all players in the team.

**Argumentos:**

- `number index` — The team index.

**Retorna:**

- `number` — Total deaths in team.

*Fuente: `lua/includes/modules/team.lua:105`*

---

### `team:TotalFrags` `[client/server]`

Get's the total frags in a team.

**Argumentos:**

- `Entity Entity or number` — Entity or number.

**Retorna:**

- `number` — index

*Fuente: `lua/includes/modules/team.lua:117`*

---

### `team:Valid` `[client/server]`

Returns true if the given team index is valid

**Argumentos:**

- `number index` — Index of the team

**Retorna:**

- `boolean` — Is valid

*Fuente: `lua/includes/modules/team.lua:40`*