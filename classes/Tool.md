# Tool

---

A list of functions available inside a Sandbox Toolgun tool.

You can find the hooks TOOL_Hooks, and members Structures/TOOL.

---


## Miembros (33)


---

### `Tool:Allowed` `[client/server]`

Returns whether the tool is allowed to be used or not. This function ignores the SANDBOX:CanTool hook.

By default this will always return true clientside and uses `TOOL.AllowedCVar`which is a ConVar object pointing to  `toolmode_allow_*toolname*` convar on the server.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns true if the tool is allowed.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:90`*

---

### `Tool:BuildConVarList` `[client/server]`

Builds a list of all ConVars set via the ClientConVar variable on the Structures/TOOL and their default values. This is used for the preset system.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table convars` — A list of all convars and their default values.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:67`*

---

### `Tool:CheckObjects` `[client/server]`

This is called automatically for most toolgun actions so you shouldn't need to use it.

Checks all added objects to see if they're still valid, if not, clears the list of objects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:117`*

---

### `Tool:ClearObjects` `[client/server]`

Clears all objects previously set with Tool:SetObject.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:34`*

---

### `Tool:Create` `[client/server]`

This is called automatically for all tools.
Initializes the tool object

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Tool tool` — The created tool object.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:11`*

---

### `Tool:CreateConVars` `[client/server]`

This is called automatically for all tools.

Creates clientside ConVars based on the ClientConVar table specified in the tool structure. Also creates the 'toolmode_allow_X' ConVar.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:33`*

---

### `Tool:GetBone` `[client/server]`

Retrieves a physics bone number previously stored using Tool:SetObject.

**Argumentos:**

- `number id` — The id of the object which was set in Tool:SetObject.

**Retorna:**

- `number` — Associated physics bone with given id.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:81`*

---

### `Tool:GetClientBool` `[client/server]`

Attempts to grab a clientside tool ConVar value as a boolean.

**Argumentos:**

- `string name` — Name of the ConVar to retrieve. The function will automatically add the `mytoolfilename_` part to it.
- `boolean default` = `false` — The default value to return in case the lookup fails.

**Retorna:**

- `number` — The value of the requested ConVar. It will be true if the value if the convar is not 0, just like ConVar:GetBool

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:87`*

---

### `Tool:GetClientInfo` `[client/server]`

Attempts to grab a clientside tool ConVar as a string.

**Argumentos:**

- `string name` — Name of the convar to retrieve. The function will automatically add the `mytoolfilename_` part to it.

**Retorna:**

- `string` — The value of the requested ConVar.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:67`*

---

### `Tool:GetClientNumber` `[client/server]`

Attempts to grab a clientside tool ConVar's value as a number.

**Argumentos:**

- `string name` — Name of the convar to retrieve. The function will automatically add the `mytoolfilename_` part to it.
- `number default` = `0` — The default value to return in case the lookup fails.

**Retorna:**

- `number` — The value of the requested ConVar.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:77`*

---

### `Tool:GetEnt` `[client/server]`

Retrieves an Entity previously stored using Tool:SetObject.

**Argumentos:**

- `number id` — The id of the object which was set in Tool:SetObject.

**Retorna:**

- `Entity` — Associated Entity with given id.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:48`*

---

### `Tool:GetHelpText` `[client/server]`

Returns a language key based on this tool's name and the current stage it is on.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string key` — The returned language key, for example `"#tool.weld.1"`

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:163`*

---

### `Tool:GetLocalPos` `[client/server]`

Retrieves an local vector previously stored using Tool:SetObject.
See also Tool:GetPos.

**Argumentos:**

- `number id` — The id of the object which was set in Tool:SetObject.

**Retorna:**

- `Vector` — Associated local vector with given id.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:76`*

---

### `Tool:GetMode` `[client/server]`

Returns the name of the current tool mode.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The current tool mode.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:101`*

---

### `Tool:GetNormal` `[client/server]`

Retrieves an normal vector previously stored using Tool:SetObject.

**Argumentos:**

- `number id` — The id of the object which was set in Tool:SetObject.

**Retorna:**

- `Vector` — Associated normal vector with given id.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:85`*

---

### `Tool:GetOperation` `[client/server]`

Returns the current operation of the tool set by Tool:SetOperation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current operation the tool is at.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:28`*

---

### `Tool:GetOwner` `[client/server]`

Returns the owner of this tool.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Player` — Player using the tool

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:120`*

---

### `Tool:GetPhys` `[client/server]`

Retrieves an PhysObj previously stored using Tool:SetObject.
See also Tool:GetEnt.

**Argumentos:**

- `number id` — The id of the object which was set in Tool:SetObject.

**Retorna:**

- `PhysObj` — Associated PhysObj with given id. If it wasn't specified, returns current PhysObj of associated Entity.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:100`*

---

### `Tool:GetPos` `[client/server]`

Retrieves an vector previously stored using Tool:SetObject. See also Tool:GetLocalPos.

**Argumentos:**

- `number id` — The id of the object which was set in Tool:SetObject.

**Retorna:**

- `Vector` — Associated vector with given id. The vector is converted from Tool:GetLocalPos.

*Fuente: `gamemode/sandbox/entities/weapons/gmod_tool/object.lua:61`*

---

### `Tool:GetSWEP` `[client/server]`

Use Tool:GetWeapon instead.

Returns the Tool Gun (`gmod_tool`) Scripted Weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Weapon` — The tool gun weapon. (`gmod_tool`)

---

### `Tool:GetServerInfo` `[client/server]`

Attempts to grab a serverside tool ConVar.
This will not do anything on client, despite the function being defined shared.

**Argumentos:**

- `string name` — Name of the convar to retrieve. The function will automatically add the "mytoolfilename_" part to it.

**Retorna:**

- `string` — The value of the requested ConVar.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:59`*

---

### `Tool:GetStage` `[client/server]`

Returns the current stage of the tool set by Tool:SetStage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current stage of the current operation the tool is at.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:16`*

---

### `Tool:GetWeapon` `[client/server]`

Returns the Tool Gun (`gmod_tool`) Scripted Weapon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Weapon` — The tool gun weapon. (`gmod_tool`)

---

### `Tool:MakeGhostEntity` `[client/server]`

Initializes the ghost entity with the given model. Removes any old ghost entity if called multiple times.

The ghost is a regular prop_physics entity in singleplayer games, and a clientside prop in multiplayer games.

**Argumentos:**

- `string model` — The model of the new ghost entity
- `Vector pos` — Position to initialize the ghost entity at, usually not needed since this is updated in Tool:UpdateGhostEntity.
- `Angle angle` — Angle to initialize the ghost entity at, usually not needed since this is updated in Tool:UpdateGhostEntity.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/ghostentity.lua:6`*

---

### `Tool:NumObjects` `[client/server]`

Returns the amount of stored objects ( Entitys ) the tool has.
Are TOOLs limited to 4 entities?

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of stored objects, or Tool:GetStage clientide.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:149`*

---

### `Tool:RebuildControlPanel` `[client]`

Automatically forces the tool's control panel to be rebuilt.

**Argumentos:**

- `vararg extra_args` — Any arguments given to this function will be added to TOOL.BuildCPanel's arguments.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool_cl.lua:12`*

---

### `Tool:ReleaseGhostEntity` `[client/server]`

Removes any ghost entity created for this tool.

This is called automatically at various points, including when changing tools, holstering the toolgun, therefore it is a very good idea to implement this callback in your custom tool to cleanup any custom ghost entities.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/ghostentity.lua:68`*

---

### `Tool:SetObject` `[client/server]`

Stores an Entity for later use in the tool.

The stored values can be retrieved by Tool:GetEnt, Tool:GetPos, Tool:GetLocalPos, Tool:GetPhys, Tool:GetBone and Tool:GetNormal

**Argumentos:**

- `number id` — The id of the object to store.
- `Entity ent` — The entity to store.
- `Vector pos` — The position to store.
this position is in **global space** and is internally converted to **local space** relative to the object, so when you retrieve it later it will be corrected to the object's new position
- `PhysObj phys` — The physics object to store.
- `number bone` — The hit bone to store.
- `Vector normal` — The hit normal to store.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:112`*

---

### `Tool:SetOperation` `[client/server]`

Sets the current operation of the tool. Does nothing clientside. See also Tool:SetStage.

Operations and stages work as follows:
* Operation 1
* * Stage 1
* * Stage 2
* * Stage 3
* Operation 2
* * Stage 1
* * Stage 2
* * Stage ...

**Argumentos:**

- `number operation` — The new operation ID to set.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:20`*

---

### `Tool:SetStage` `[client/server]`

Sets the current stage of the tool. Does nothing clientside.

See also Tool:SetOperation.

**Argumentos:**

- `number stage` — The new stage to set.

**Retorna:**

*(sin retorno)*

*Fuente: `/gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:8`*

---

### `Tool:StartGhostEntity` `[client/server]`

Initializes the ghost entity based on the supplied entity.

**Argumentos:**

- `Entity ent` — The entity to copy ghost parameters off

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/ghostentity.lua:54`*

---

### `Tool:UpdateData` `[client/server]`

Called on deploy automatically

Sets the tool's stage to how many stored objects the tool has.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/object.lua:2`*

---

### `Tool:UpdateGhostEntity` `[client/server]`

Updates the position and orientation of the ghost entity based on where the toolgun owner is looking along with data from object with id 1 set by Tool:SetObject.

This should be called in the tool's TOOL:Think hook.

This command is only used for tools that move props, such as easy weld, axis and motor. If you want to update a ghost like the thruster tool does it for example, check its [source code](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/gamemodes/sandbox/entities/weapons/gmod_tool/stools/thruster.lua#L179).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/ghostentity.lua:101`*