# weapons

---

The weapons library allows you to access information about any scripted weapons loaded into the game, as well as register your own weapons.

---


## Miembros (6)


---

### `weapons:Get` `[client/server]`

Get a `copy` of weapon table by name. This function also inherits fields from the weapon's base class, unlike weapons.GetStored or weapons.GetList.
 This will only work on SWEP's, this means that this will not return anything for HL2/HL:S weapons.

**Argumentos:**

- `string classname` — Class name of weapon to retrieve

**Retorna:**

- `table` — The retrieved table or nil

*Fuente: `lua/includes/modules/weapons.lua:132`*

---

### `weapons:GetList` `[client/server]`

Get a list of all the registered SWEPs. This does not include weapons added to spawnmenu manually.
This function does not inherit fields from the weapon's base class, unlike weapons.Get

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — List of all the registered SWEPs

*Fuente: `lua/includes/modules/weapons.lua:177`*

---

### `weapons:GetStored` `[client/server]`

Gets the REAL weapon table, not a copy. The produced table does *not* inherit fields from the weapon's base class, unlike weapons.Get.

Modifying this table will modify what is stored by the weapons library. Take a copy or use weapons.Get to avoid this.

**Argumentos:**

- `string weapon_class` — Weapon class to retrieve weapon table of

**Retorna:**

- `table` — The weapon table

*Fuente: `lua/includes/modules/weapons.lua:169`*

---

### `weapons:IsBasedOn` `[client/server]`

Checks if name is based on base

**Argumentos:**

- `string name` — Entity's class name to be checked
- `string base` — Base class name to be checked

**Retorna:**

- `boolean` — Returns true if class name is based on base, else false.

*Fuente: `lua/includes/modules/weapons.lua:32`*

---

### `weapons:OnLoaded` `[client/server]`

Called after all SWEPS have been loaded and runs baseclass.Set on each one.

You can retrieve all the currently registered SWEPS with weapons.GetList.

This is not called after a SWEP auto refresh, and thus the inherited baseclass functions retrieved with baseclass.Get will not be updated

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/weapons.lua:113`*

---

### `weapons:Register` `[client/server]`

Registers a Scripted Weapon (SWEP) class manually. When the engine spawns an entity, weapons registered with this function will be created if the class names match.

See also scripted_ents.Register for Scripted Entities (SENTs)

Sub-tables provided in the first argument will not carry over their metatable, and will receive a BaseClass key if the table was merged with the base's. Userdata references, which includes Vectors, Angles, Entities, etc. will not be copied.

**Argumentos:**

- `table ENT` — The SWEP table to register.
For the table's format and available options see the Structures/SWEP page.
- `string classname` — Classname to assign to that swep

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/weapons.lua:46`*