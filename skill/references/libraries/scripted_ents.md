# scripted_ents

---

The scripted_ents library allows you to access information about any scripted entities loaded into the game, as well as register your own entities.

---


## Miembros (10)


---

### `scripted_ents:Alias` `[client/server]`

Defines an alias string that can be used to refer to another classname

**Argumentos:**

- `string alias` — A new string which can be used to refer to another classname
- `string classname` — The classname the alias should refer to

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/scripted_ents.lua:256`*

---

### `scripted_ents:Get` `[client/server]`

Returns a copy of the ENT table for a class, including functions defined by the base class

**Argumentos:**

- `string classname` — The classname of the ENT table to return, can be an alias

**Retorna:**

- `table` — entTable

*Fuente: `lua/includes/modules/scripted_ents.lua:159`*

---

### `scripted_ents:GetList` `[client/server]`

Returns a copy of the list of all ENT tables registered

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string, table>` — A table of all SENTs where the key is the classname and the value is a table where:
* table **t** — The Structures/ENT table associated with the entity
* boolean **isBaseType** — Unused. Always `true`
* string **Base** — The entity base
* string **type** — The entity type

*Fuente: `lua/includes/modules/scripted_ents.lua:228`*

---

### `scripted_ents:GetMember` `[client/server]`

Retrieves a member of entity's table.

**Argumentos:**

- `string class` — Entity's class name
- `string name` — Name of member to retrieve

**Retorna:**

- `any` — The member or nil if failed

*Fuente: `lua/includes/modules/scripted_ents.lua:262`*

---

### `scripted_ents:GetSpawnable` `[client/server]`

Returns a list of all ENT tables which contain ENT.Spawnable

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of Structures/ENTs

*Fuente: `lua/includes/modules/scripted_ents.lua:238`*

---

### `scripted_ents:GetStored` `[client/server]`

Returns the actual ENT table for a class. Modifying functions/variables in this table will change newly spawned entities

**Argumentos:**

- `string classname` — The classname of the ENT table to return

**Retorna:**

- `table` — entTable

*Fuente: `lua/includes/modules/scripted_ents.lua:220`*

---

### `scripted_ents:GetType` `[client/server]`

Returns the 'type' of a class, this will one of the following: 'anim', 'ai', 'brush', 'point'.

**Argumentos:**

- `string classname` — The classname to check

**Retorna:**

- `string` — type

*Fuente: `lua/includes/modules/scripted_ents.lua:195`*

---

### `scripted_ents:IsBasedOn` `[client/server]`

Checks if name is based on base

**Argumentos:**

- `string name` — Entity's class name to be checked
- `string base` — Base class name to be checked

**Retorna:**

- `boolean` — Returns true if class name is based on base, else false.

*Fuente: `lua/includes/modules/scripted_ents.lua:44`*

---

### `scripted_ents:OnLoaded` `[client/server]`

Called after all ENTS have been loaded and runs baseclass.Set on each one.

You can retrieve all the currently registered ENTS with scripted_ents.GetList.

This is not called after an ENT auto refresh, and thus the inherited baseclass functions retrieved with baseclass.Get will not be updated

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/scripted_ents.lua:144`*

---

### `scripted_ents:Register` `[client/server]`

Registers an ENT table with a classname. Reregistering an existing classname will automatically update the functions of all existing entities of that class.

Sub-tables provided in the first argument will not carry over their metatable, and will receive a BaseClass key if the table was merged with the base's. Userdata references, which includes Vectors, Angles, Entities, etc. will not be copied.

**Argumentos:**

- `table ENT` — The ENT table to register.
For the table's format and available options see the Structures/ENT page.
- `string classname` — The classname to register.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/scripted_ents.lua:53`*