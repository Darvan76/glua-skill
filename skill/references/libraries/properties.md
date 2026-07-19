# properties

---

The properties library gives you access to the menu that shows up when right clicking entities while holding C.

---


## Miembros (7)


---

### `properties:Add` `[client/server]`

Add properties to the properties module. Properties can be blocked via GM:CanProperty.

**Argumentos:**

- `string name` — A unique name used to identify the property
- `table propertyData` — A table that defines the property. Uses the Structures/PropertyAdd.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/properties.lua:28`*

---

### `properties:CanBeTargeted` `[client/server]`

Returns true if given entity can be targeted by the player via the properties system.

This should be used serverside in your properties to prevent abuse by clientside scripting.

**Argumentos:**

- `Entity ent` — The entity to test
- `Player ply` — If given, will also perform a distance check based on the entity's Orientated Bounding Box.

**Retorna:**

- `boolean` — True if entity can be targeted, false otherwise

*Fuente: `lua/includes/modules/properties.lua:104`*

---

### `properties:GetHovered` `[client]`

Returns an entity player is hovering over with their cursor.

**Argumentos:**

- `Vector pos` — Eye position of local player, Entity:EyePos
- `Vector aimVec` — Aim vector of local player, Player:GetAimVector

**Retorna:**

- `Entity` — The hovered entity

*Fuente: `lua/includes/modules/properties.lua:122`*

---

### `properties:List` `[client/server]`

A list of all properties registered with properties.Add.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all properties. The keys will be the first argument passed to properties.Add, the values will be the second argument.

---

### `properties:OnScreenClick` `[client/server]`

Checks if player hovers over any entities and open a properties menu for it.

**Argumentos:**

- `Vector eyepos` — The eye pos of a player
- `Vector eyevec` — The aim vector of a player

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/properties.lua:93`*

---

### `properties:OpenEntityMenu` `[client/server]`

Opens properties menu for given entity.

**Argumentos:**

- `Entity ent` — The entity to open menu for
- `table tr` — The trace that is passed as second argument to Action callback of a property

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/properties.lua:74`*

---

### `properties:Remove` `[client/server]`

Remove an entity right-click property. See properties.Add for details.

**Argumentos:**

- `string name` — A unique name used to identify the property to be removed.

**Retorna:**

*(sin retorno)*