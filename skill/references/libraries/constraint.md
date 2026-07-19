# constraint

---

The constraint library allows you to control the constraint system built into the physics engine (rope, weld, ballsockets, etc).

---


## Miembros (29)


---

### `constraint:AddConstraintTable` `[server]`

Stores the constraint entity in the constrained entity's `Constraints` table.

This will make the `constrt` entity be removed if any of the other entities `ent1`, `ent2`, `ent3` or `ent4` are removed by any means.
To prevent this, constraint.AddConstraintTableNoDelete can be used instead.

**Argumentos:**

- `Entity ent1` — The entity to store the information on.
- `Entity constrt` — The constraint to store in the entity's table.
- `Entity ent2` = `nil` — Optional. If different from `ent1`, the info will also be stored in the table for this entity.
- `Entity ent3` = `nil` — Optional. Same as `ent2`.
- `Entity ent4` = `nil` — Optional. Same as `ent2`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/constraint.lua:352`*

---

### `constraint:AddConstraintTableNoDelete` `[server]`

Stores info about the constraints on the entity's table.

The only difference between this and constraint.AddConstraintTable is that the constraint does not get deleted when any of the constrained entities are removed.

**Argumentos:**

- `Entity ent1` — The entity to store the information on.
- `Entity constrt` — The constraint to store in the entity's table.
- `Entity ent2` = `nil` — Optional. If different from `ent1`, the info will also be stored in the table for this entity.
- `Entity ent3` = `nil` — Optional. Same as `ent2`.
- `Entity ent4` = `nil` — Optional. Same as `ent2`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/constraint.lua:374`*

---

### `constraint:AdvBallsocket` `[server]`

Creates an advanced ballsocket (ragdoll) constraint. See constraint.Ballsocket for the simpler version.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` = `nil` — Position relative to the the second physics object to constrain to.
Does nothing!
- `number forceLimit` = `0` — Amount of force until it breaks (0 = unbreakable).
- `number torqueLimit` = `0` — Amount of torque (rotation speed) until it breaks (0 = unbreakable).
- `number xMin` — Minimum angle in rotations around the X axis local to the constraint.
- `number yMin` — Minimum angle in rotations around the Y axis local to the constraint.
- `number zMin` — Minimum angle in rotations around the Z axis local to the constraint.
- `number xMax` — Maximum angle in rotations around the X axis local to the constraint.
- `number yMax` — Maximum angle in rotations around the Y axis local to the constraint.
- `number zMax` — Maximum angle in rotations around the Z axis local to the constraint.
- `number xFric` = `0` — Rotational friction in the X axis local to the constraint.
- `number yFric` = `0` — Rotational friction in the Y axis local to the constraint.
- `number zFric` = `0` — Rotational friction in the Z axis local to the constraint.
- `number onlyRotation` = `0` — Only limit rotation, free movement.
- `number noCollide` = `0` — Whether the entities should be no-collided.

**Retorna:**

- `Entity` — A [phys_ragdollconstraint](https://developer.valvesoftware.com/wiki/Phys_ragdollconstraint) entity. Will return `false` if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:856`*

---

### `constraint:Axis` `[server]`

Creates an axis constraint.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number forceLimit` = `0` — Amount of force until it breaks (0 = unbreakable).
- `number torqueLimit` = `0` — Amount of torque (rotational force) until it breaks (0 = unbreakable).
- `number friction` = `0` — Constraint friction.
- `number noCollide` = `0` — Whether the entities should be no-collided.
- `Vector localAxis` = `nil` — If you include the LocalAxis then LPos2 will not be used in the final constraint. However, LPos2 is still a required argument.
- `boolean dontAddTable` = `false` — Whether or not to add the constraint info on the entity table. See constraint.AddConstraintTable.

**Retorna:**

- `Entity` — The created constraint. ([phys_hinge](https://developer.valvesoftware.com/wiki/Phys_hinge)) Will return `false` if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:793`*

---

### `constraint:Ballsocket` `[server]`

Creates a ballsocket joint. See See constraint.AdvBallsocket if you also wish to limit rotation angles in some way.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos` — Center position of the joint, relative to the **second** entity's physics object.
- `number forceLimit` = `0` — Amount of force until it breaks (0 = unbreakable).
- `number torqueLimit` = `0` — Amount of torque (rotational force) until it breaks (0 = unbreakable).
- `number nocollide` = `0` — Whether the constrained entities should collided with each other or not.

**Retorna:**

- `Entity` — The created constraint. ([phys_ballsocket](https://developer.valvesoftware.com/wiki/Phys_ballsocket)) Will return `false` if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:1232`*

---

### `constraint:CanConstrain` `[server]`

Basic checks to make sure that the specified entity and bone are valid. Returns false if we should not be constraining the entity.

**Argumentos:**

- `Entity ent` — The entity to check.
- `number bone` — The bone of the entity to check (use 0 for mono boned ents).

**Retorna:**

- `boolean` — Whether a constraint can or should be created.

*Fuente: `lua/includes/modules/constraint.lua:269`*

---

### `constraint:CreateKeyframeRope` `[server]`

Creates a rope without any constraint.

**Argumentos:**

- `Vector pos` — Position for the rope entity. Unknown effect, probably none.
- `number width` — Width of the rope.
- `string material` = `nil` — Material of the rope. If unset, will be solid black.
- `Entity constraint` = `nil` — Constraint for the rope. If set, the rope will be deleted when the constraint entity is.
- `Entity ent1` — First entity.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Entity ent2` — Second entity.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `table keyValues` = `nil` — Any additional key/values to be set on the rope.

**Retorna:**

- `Entity` — The created rope ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)), or `nil` or failure.

*Fuente: `lua/includes/modules/constraint.lua:296`*

---

### `constraint:CreateStaticAnchorPoint` `[server]`

Creates an invisible, non-moveable anchor point in the world to which things can be attached.
The entity used internally by this function (`gmod_anchor`) only exists in Sandbox derived gamemodes, meaning this function will only work in these gamemodes.

To use this in other gamemodes, you may need to create your own [gmod_anchor](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/gamemodes/sandbox/entities/entities/gmod_anchor.lua) entity.

**Argumentos:**

- `Vector pos` — The position to spawn the anchor at

**Retorna:**

- `Entity` — The anchor entity. (`gmod_anchor`)
- `PhysObj` — The achor entity's physics object. (Entity:GetPhysicsObject)
- `number` — Always `0`.
- `Vector` — Always `vector_zero`.

*Fuente: `lua/includes/modules/constraint.lua:665`*

---

### `constraint:Elastic` `[server]`

Creates an elastic rope constraint.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls). Must be different from `bone1`.

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number constant` — Stiffness of the elastic. The larger the number the less the elastic will stretch.
- `number damping` — How much energy the elastic loses. The larger the number, the less bouncy the elastic.
- `number relDamping` — The amount of energy the elastic loses proportional to the relative velocity of the two objects the elastic is attached to.
- `string material` — The material of the rope. If unset, will be solid black.
- `number width` — Width of rope.
- `boolean stretchOnly` = `false` — Apply physics forces only on stretch.
- `Color color` = `color_white` — The color of the rope. See Color.

**Retorna:**

- `Entity` — The created constraint. ([phys_spring](https://developer.valvesoftware.com/wiki/Phys_spring)) Will return `false` if the constraint could not be created.
- `Entity` — The created rope. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:546`*

---

### `constraint:Find` `[server]`

Returns the constraint of a specified type between two entities, if it exists

**Argumentos:**

- `Entity ent1` — The first entity to check.
- `Entity ent2` — The second entity to check.
- `string type` — The type of constraint, case sensitive. List of default constrains is as follows:
* `Weld`
* `Axis`
* `AdvBallsocket`
* `Rope`
* `Elastic`
* `NoCollide`
* `Motor`
* `Pulley`
* `Ballsocket`
* `Winch`
* `Hydraulic`
* `Muscle`
* `Keepupright`
* `Slider`
- `number bone1` — The bone number for the first entity (0 for monoboned entities).
- `number bone2` — The bone number for the second entity.

**Retorna:**

- `Entity` — The constraint found.

*Fuente: `lua/includes/modules/constraint.lua:222`*

---

### `constraint:FindConstraint` `[server]`

Returns the first constraint of a specific type directly connected to the entity found.

**Argumentos:**

- `Entity ent` — The entity to check.
- `string type` — The type of constraint, case sensitive. List of default constrains is as follows:
* `Weld`
* `Axis`
* `AdvBallsocket`
* `Rope`
* `Elastic`
* `NoCollide`
* `Motor`
* `Pulley`
* `Ballsocket`
* `Winch`
* `Hydraulic`
* `Muscle`
* `Keepupright`
* `Slider`

**Retorna:**

- `table` — The constraint table, set with constraint.AddConstraintTable

*Fuente: `lua/includes/modules/constraint.lua:1605`*

---

### `constraint:FindConstraintEntity` `[server]`

Returns the other entity involved in the first constraint of a specific type directly connected to the entity.

**Argumentos:**

- `Entity ent` — The entity to check.
- `string type` — The type of constraint, case sensitive. List of default constrains is as follows:
* `Weld`
* `Axis`
* `AdvBallsocket`
* `Rope`
* `Elastic`
* `NoCollide`
* `Motor`
* `Pulley`
* `Ballsocket`
* `Winch`
* `Hydraulic`
* `Muscle`
* `Keepupright`
* `Slider`

**Retorna:**

- `Entity` — The other entity.

*Fuente: `lua/includes/modules/constraint.lua:1624`*

---

### `constraint:FindConstraints` `[server]`

Returns a table of all constraints of a specific type directly connected to the entity.

If you are looking for a list of all constraints, use constraint.GetTable.

**Argumentos:**

- `Entity ent` — The entity to check.
- `string type` — The type of constraint, case sensitive. List of default constrains is as follows:
* `Weld`
* `Axis`
* `AdvBallsocket`
* `Rope`
* `Elastic`
* `NoCollide`
* `Motor`
* `Pulley`
* `Ballsocket`
* `Winch`
* `Hydraulic`
* `Muscle`
* `Keepupright`
* `Slider`

**Retorna:**

- `table` — All the constraints of this entity.

*Fuente: `lua/includes/modules/constraint.lua:1584`*

---

### `constraint:ForgetConstraints` `[server]`

Make this entity forget any constraints it knows about. Note that this will not actually remove the constraints.

**Argumentos:**

- `Entity ent` — The entity that will forget its constraints.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/constraint.lua:1574`*

---

### `constraint:GetAllConstrainedEntities` `[server]`

Returns a table of all entities recursively constrained to an entity.

**Argumentos:**

- `Entity ent` — The entity to check.
- `table resultTable` = `nil` — Table used to return result. Optional.

**Retorna:**

- `table` — A table containing all of the constrained entities. This includes all entities constrained to entities constrained to the supplied entity, etc.

*Fuente: `lua/includes/modules/constraint.lua:1643`*

---

### `constraint:GetTable` `[server]`

Returns a table of all constraints directly connected to the entity.

If you are looking for a list of specific constraint(s), use constraint.FindConstraints.

**Argumentos:**

- `Entity ent` — The entity to check.

**Retorna:**

- `table` — A list of all constraints connected to the entity.

*Fuente: `lua/includes/modules/constraint.lua:1531`*

---

### `constraint:HasConstraints` `[server]`

Returns true if the entity has constraints attached to it

**Argumentos:**

- `Entity ent` — The entity to check.

**Retorna:**

- `boolean` — Whether the entity has any constraints or not.

*Fuente: `lua/includes/modules/constraint.lua:1502`*

---

### `constraint:Hydraulic` `[server]`

Creates a controllable constraint.Elastic, aka a Hydraulic constraint.

**Argumentos:**

- `Player player` — The player that will be able to control the constraint. Used to call numpad.OnDown.
- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls). Must be different from `bone1`.

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number length1` — Minimum length of the constraint.
- `number length2` — Maximum length of the constraint.
- `number width` — The width of the rope.
- `number key` — The key binding, corresponding to an Enums/KEY.
- `number slider` — Whether the hydraulic is fixed, i.e. cannot bend. Must be `1` to act as `true`.
- `number speed` — How fast it changes the length from `length1` to `length2` and backwards.
- `string material` — The material of the rope. If unset, will be solid black.
- `boolean toggle` = `true` — Whether the hydraulic should be a toggle, not a "hold key to extend" action.
- `Color color` = `color_white` — The color of the rope.

**Retorna:**

- `Entity` — The created constraint. ([phys_spring](https://developer.valvesoftware.com/wiki/Phys_spring)) Will return `false` if the constraint could not be created.
- `Entity` — The created rope. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint could not be created.
- `Entity` — The muscle controller. (`gmod_winch_controller`) Will return `nil` if the constraint could not be created.
- `Entity` — The slider ([phys_slideconstraint](https://developer.valvesoftware.com/wiki/Phys_slideconstraint)) if `fixed` was exactly `1`. Will return nil otherwise, or if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:1337`*

---

### `constraint:Keepupright` `[server]`

Creates a keep upright constraint.

**Argumentos:**

- `Entity ent` — The entity to keep upright.
- `Angle ang` — The angle defined as "upright".
- `number bone` — The bone of the entity to constrain (0 for boneless).
- `number angularLimit` — Basically, the strength of the constraint. Must be above 0.

**Retorna:**

- `Entity` — The created constraint, if any or false if the constraint failed to set.

*Fuente: `lua/includes/modules/constraint.lua:621`*

---

### `constraint:Motor` `[server]`

Creates a motor constraint, a player controllable constraint.Axis.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls). Must be different from `bone1`.

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number friction` — Motor friction.
- `number torque` — Motor torque.
- `number forcetime` — Automatic shut-off after this time has passed. A value of 0 means to stay on forever or until deactivated.
- `number nocollide` = `0` — Whether the entities should be no-collided.
- `number toggle` = `false` — Whether the constraint is on toggle.
- `Player player` = `NULL` — The player that will control the motor. Used to to call numpad.OnDown and numpad.OnUp.
- `number forcelimit` = `0` — Amount of force until it breaks (0 = unbreakable).
- `number key_fwd` = `nil` — The key binding for "forward", corresponding to an Enums/KEY.
- `number key_bwd` = `nil` — The key binding for "backwards", corresponding to an Enums/KEY.
- `number direction` = `1` — Either `1` or `-1` signifying which direction the motor should spin.
- `Vector localAxis` = `nil` — Overrides axis of rotation?

**Retorna:**

- `Entity` — The created constraint. ([phys_torque](https://developer.valvesoftware.com/wiki/Phys_torque)) Will return `false` if the constraint could not be created.
- `Entity` — The created axis constraint. ([phys_hinge](https://developer.valvesoftware.com/wiki/Phys_hinge)) Will return `nil` if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:1037`*

---

### `constraint:Muscle` `[server]`

Creates a muscle constraint.

Very similar to constraint.Hydraulic, but instead of a toggle between fully expanded and contracted, it will continuously alternate between the 2 states while enabled.

**Argumentos:**

- `Player player` — The player that will be able to control the constraint. Used to call numpad.OnDown.
- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls). Must be different from `bone1`.

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number length1` — Minimum length of the constraint.
- `number length2` — Maximum length of the constraint.
- `number width` — Width of the rope.
- `number key` — The key binding, corresponding to an Enums/KEY.
- `number fixed` — Whether the constraint is fixed, i.e. cannot bend. Must be `1` to act as `true`.
- `number period` — How often the "contractions" should happen.
- `number amplitude` — Amplification of the "contractions"?
- `boolean startOn` = `false` — Whether the constraint should start activated. (i.e. spazzing).
- `string material` — Material of the rope. If left unset, will be solid black.
- `Color color` = `color_white` — The color of the rope.

**Retorna:**

- `Entity` — The created constraint. ([phys_spring](https://developer.valvesoftware.com/wiki/Phys_spring)) Will return `false` if the constraint could not be created.
- `Entity` — The created rope. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint could not be created.
- `Entity` — The muscle controller. (`gmod_winch_controller`) Will return `nil` if the constraint could not be created.
- `Entity` — The slider ([phys_slideconstraint](https://developer.valvesoftware.com/wiki/Phys_slideconstraint)) if `fixed` was exactly `1`. Will return nil otherwise, or if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:1422`*

---

### `constraint:NoCollide` `[server]`

Creates an no-collide "constraint". Disables collision between two entities.
Does not work with players.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `boolean disableOnRemove` = `false` — If set, the nocollide will be reversed if the constraint is removed.

**Retorna:**

- `Entity` — The created constraint. ([logic_collision_pair](https://developer.valvesoftware.com/wiki/Logic_collision_pair)) Will return `false` if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:913`*

---

### `constraint:Pulley` `[server]`

Creates a pulley constraint.

It consists of 3 rope segments, 2 of which have variable length, visually connected by a 3rd. Reducing length of one end will increase the length of the other end.

You can visualize the pulley like so:
```
WPos2 --- WPos3
|			|
|			|
Ent1	   Ent4
```

**Argumentos:**

- `Entity ent1` — First entity to constrain.
- `Entity ent4` — The other entity to attach to.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone4` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos4` — Position relative to the the second physics object to constrain to.
- `Vector worldPos2` — World position constrain the first entity to. This point will be static.
- `Vector worldPos3` — World position constrain the second entity to. This point will be static.
- `number forceLimit` — Amount of force until it breaks (0 = unbreakable).
- `boolean rigid` = `false` — Whether the constraint is rigid, i.e. cannot bend.
- `number width` — Width of the rope. If below or at `0`, visual rope segments will not be created.
- `string material` — Material of the rope. If unset, will be solid black.
- `Color color` = `color_white` — The color of the rope.

**Retorna:**

- `Entity` — The created constraint. ([phys_pulleyconstraint](https://developer.valvesoftware.com/wiki/Phys_pulleyconstraint)) Will return `false` if the constraint could not be created.
- `Entity` — The first rope segment. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint or this rope segment could not be created.
- `Entity` — The second rope segment. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint or this rope segment could not be created.
- `Entity` — The third rope segment. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint or this rope segment could not be created.

*Fuente: `lua/includes/modules/constraint.lua:1137`*

---

### `constraint:RemoveAll` `[server]`

Attempts to remove all constraints associated with an entity.

**Argumentos:**

- `Entity ent` — The entity to remove constraints from.

**Retorna:**

- `boolean` — Whether any constraints were removed.
- `number` — Number of constraints removed.

*Fuente: `lua/includes/modules/constraint.lua:189`*

---

### `constraint:RemoveConstraints` `[server]`

Attempts to remove all constraints of a specified type associated with an entity

**Argumentos:**

- `Entity ent` — The entity to check.
- `string type` — The constraint type to remove (eg. `"Weld"`, `"Elastic"`, `"NoCollide"`).

**Retorna:**

- `boolean` — Whether we removed any constraints or not.
- `number` — The amount of constraints removed.

*Fuente: `lua/includes/modules/constraint.lua:146`*

---

### `constraint:Rope` `[server]`

Creates a simple rope (length) based constraint.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number length` — Length of the rope.
- `number addLength` = `0` — Amount to add to the length of the rope. Works as it does in the Rope tool.
- `number forceLimit` = `0` — Amount of force until it breaks (0 = unbreakable).
- `number width` — Width of the rope.
- `string material` = `nil` — Material of the rope. If unset, will be solid black.
- `boolean rigid` = `false` — Whether the constraint is rigid.
- `Color color` = `color_white` — The color of the rope.

**Retorna:**

- `Entity constraint` — The constraint entity ([phys_lengthconstraint](https://developer.valvesoftware.com/wiki/Phys_lengthconstraint)).

Will be a `keyframe_rope` if you are roping to the same bone on the same entity. Will return `false` if the constraint could not be created.
- `Entity rope` — The rope entity. Will return `nil` if `constraint` return value is a [keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope) or if the constraint could not be created.

*Fuente: `lua/includes/modules/constraint.lua:468`*

---

### `constraint:Slider` `[server]`

Creates a slider constraint. A slider is like a rope, but allows the constrained object to move only in 1 direction.

**Argumentos:**

- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number width` — The width of the rope.
- `string material` — The material of the rope. If unset, will be solid black.
- `Color color` = `color_white` — The color of the rope. See Color.

**Retorna:**

- `Entity` — The created constraint entity. ([phys_slideconstraint](https://developer.valvesoftware.com/wiki/Phys_slideconstraint)) Will return `false` if the constraint could not be created.
- `Entity` — The created rope. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint or the rope could not be created.

*Fuente: `lua/includes/modules/constraint.lua:684`*

---

### `constraint:Weld` `[server]`

Creates a weld constraint.

**Argumentos:**

- `Entity ent1` — The first entity.
- `Entity ent2` — The second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number forceLimit` = `0` — The amount of force appliable to the constraint before it will break (0 is never).
- `boolean noCollide` = `false` — Should `ent1` be nocollided to `ent2` via this constraint.
- `boolean deleteEnt1OnBreak` = `false` — If true, when `ent2` is removed, `ent1` will also be removed.

**Retorna:**

- `Entity` — The created constraint entity, or false if the constraint failed. ([phys_constraint](https://developer.valvesoftware.com/wiki/Phys_constraint))

*Fuente: `lua/includes/modules/constraint.lua:396`*

---

### `constraint:Winch` `[server]`

Creates a winch constraint, a player controllable constraint.Elastic, allowing gradually increasing or decreasing the length.

**Argumentos:**

- `Player player` — The player that will be used to call numpad.OnDown and numpad.OnUp.
- `Entity ent1` — First entity.
- `Entity ent2` — Second entity.
- `number bone1` — PhysObj number of first entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `number bone2` — PhysObj number of second entity to constrain to. (0 for non-ragdolls).

See Entity:TranslateBoneToPhysBone.
- `Vector localPos1` — Position relative to the the first physics object to constrain to.
- `Vector localPos2` — Position relative to the the second physics object to constrain to.
- `number width` — The width of the rope.
- `number fwdBind` — The key binding for "forward", corresponding to an Enums/KEY.
- `number bwdBind` — The key binding for "backwards", corresponding to an Enums/KEY.
- `number fwdSpeed` — Forward speed.
- `number bwdSpeed` — Backwards speed.
- `string material` — The material of the rope. If unset, will be solid black.
- `boolean toggle` = `false` — Whether the winch should be on toggle.
- `Color color` = `color_white` — The color of the rope.

**Retorna:**

- `Entity` — The created constraint. ([phys_spring](https://developer.valvesoftware.com/wiki/Phys_spring)) Can return `nil`. Will return `false` if the constraint could not be created.
- `Entity` — The created rope. ([keyframe_rope](https://developer.valvesoftware.com/wiki/Keyframe_rope)) Will return `nil` if the constraint could not be created.
- `Entity` — The winch controller. (`gmod_winch_controller`) Can return `nil`.

*Fuente: `lua/includes/modules/constraint.lua:1265`*