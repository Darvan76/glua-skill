# construct

---

The construct library is used to control the physical properties of entities.

---


## Miembros (2)


---

### `construct:Magnet` `[server]`

Creates a magnet.

**Argumentos:**

- `Player ply` — Player that will have the numpad control over the magnet.
- `Vector pos` — The position of the magnet.
- `Angle ang` — The angles of the magnet.
- `string model` — The model of the magnet.
- `string material` — Material of the magnet ( texture ).
- `number key` — The key to toggle the magnet, see Enums/KEY.
- `number maxObjects` — Maximum amount of objects the magnet can hold.
- `number strength` — Strength of the magnet.
- `number nopull` = `0` — If &gt; 0, disallows the magnet to pull objects towards it.
- `number allowrot` = `0` — If &gt; 0, allows rotation of the objects attached.
- `number startOn` = `0` — If &gt; 0, enabled from spawn.
- `number toggle` — If != 0, pressing the key toggles the magnet, otherwise you'll have to hold the key to keep it enabled.
- `Vector vel` = `Vector( 0, 0, 0 )` — Velocity to set on spawn.
- `Angle aVel` = `Angle( 0, 0, 0 )` — Angular velocity to set on spawn.
- `boolean frozen` = `false` — Freeze the magnet on start.

**Retorna:**

- `Entity` — The magnet.

*Fuente: `lua/includes/modules/construct.lua:95`*

---

### `construct:SetPhysProp` `[server]`

Sets props physical properties.

**Argumentos:**

- `Player ply` — The player. This variable is not used and can be left out.
- `Entity ent` — The entity to apply properties to.
- `number physObjID` — You can use this or the argument below. This will be used in case you don't provide argument below.
- `PhysObj physObj` — The physics object to apply the properties to.
- `table data` — The table containing properties to apply. See Structures/PhysProperties.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/construct.lua:13`*