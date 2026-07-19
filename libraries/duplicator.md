# duplicator

---

The duplicator library allows you to specify what should be saved when someone attempts to duplicate your custom entity with the duplicator tool. It can also be used by 3rd party duplicator tools to make use of the built in system.

---


## Miembros (34)


---

### `duplicator:Allow` `[client/server]`

Allow entities with given class name to be duplicated. See duplicator.Disallow for the opposite effect.

duplicator.IsAllowed can be used to poll the status of a particular entity class.

`duplicator.Allow` is automatically called by scripted_ents.Register and weapons.Register, unless the associated entity table has `ENT.DisableDuplicator` set to `true`.

This is also automatically called by duplicator.RegisterEntityClass.

In addition to that most spawnmenu content, such as engine weapons and pickup-ables, as well as most engine NPCs in Sandbox-derived gamemodes are also allowed by default.

**Argumentos:**

- `string classname` — An entity's classname to allow duplicating.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:331`*

---

### `duplicator:ApplyBoneModifiers` `[server]`

Calls every function registered with duplicator.RegisterBoneModifier on each bone the ent has.

**Argumentos:**

- `Player ply` — The player whose entity this is.
- `Entity ent` — The entity in question.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:885`*

---

### `duplicator:ApplyEntityModifiers` `[server]`

Calls every function registered with duplicator.RegisterEntityModifier on the entity.

**Argumentos:**

- `Player ply` — The player whose entity this is.
- `Entity ent` — The entity in question.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:865`*

---

### `duplicator:BoneModifiers` `[client/server]`

A list of all entity bone modifiers registered with duplicator.RegisterBoneModifier.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all entity bone modifiers.

---

### `duplicator:ClearEntityModifier` `[server]`

Clears/removes the chosen entity modifier from the entity.

**Argumentos:**

- `Entity ent` — The entity the modification is stored on.
- `any key` — The key of the stored entity modifier.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:527`*

---

### `duplicator:ConstraintType` `[client/server]`

A list of all constraints that can be duplicated. Registered with duplicator.RegisterConstraint.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all constraints that can be duplicated. Key = classname, Value = table.

---

### `duplicator:Copy` `[server]`

Copies the entity, and all of its constraints and entities, then returns them in a table.

**Argumentos:**

- `Entity ent` — The entity to duplicate. The function will automatically copy all constrained entities.
- `table tableToAdd` = `{}` — A preexisting table to add entities and constraints in from.
Uses the same table format as the table returned from this function.

**Retorna:**

- `table` — A table containing duplication info which includes the following members:
* table Entities
* table Constraints
* Vector Mins
* Vector Maxs

The values of Mins &amp; Maxs from the table are returned from duplicator.WorkoutSize.

*Fuente: `lua/includes/modules/duplicator.lua:615`*

---

### `duplicator:CopyEntTable` `[server]`

Returns a table with some entity data that can be used to create a new entity with duplicator.CreateEntityFromTable.

**Argumentos:**

- `Entity ent` — The entity table to save.

**Retorna:**

- `table` — See Structures/EntityCopyData.

*Fuente: `lua/includes/modules/duplicator.lua:558`*

---

### `duplicator:CopyEnts` `[server]`

Copies the passed table of entities to save for later.

**Argumentos:**

- `table ents` — A table of entities to save/copy.

**Retorna:**

- `table` — A table containing duplication info which includes the following members:
* table Entities
* table Constraints
* Vector Mins
* Vector Maxs

*Fuente: `lua/includes/modules/duplicator.lua:647`*

---

### `duplicator:CreateConstraintFromTable` `[server]`

Creates a constraint from a saved/copied constraint table.

**Argumentos:**

- `table constraint` — Saved/copied constraint table.
- `table entityList` — The list of entities that are to be constrained.

**Retorna:**

- `Entity` — The newly created constraint entity, if any.

For example, an entity of class `phys_pulleyconstraint` or `phys_spring`, etc., the functional entity of the constraint.
- `Entity` — The second constraint related entity, if any.

For a most constraints, this would be a `keyframe_rope` for the visual part of a constraint.
- `Entity` — The third constraint related entity, if any.

For example, a Hydraulic constraint would return the `gmod_winch_controller` entity here. A pulley would have another `keyframe_rope`.
- `Entity` — The fourth constraint related entity, if any.

For example, a Hydraulic constraint would return the `phys_slideconstraint` entity here. A pulley would have yet another `keyframe_rope`.

*Fuente: `lua/includes/modules/duplicator.lua:726`*

---

### `duplicator:CreateEntityFromTable` `[server]`

"Create an entity from a table."

This creates an entity using the data in EntTable.

If an entity factory has been registered for the entity's Class, it will be called.

Otherwise, duplicator.GenericDuplicatorFunction will be called instead.

**Argumentos:**

- `Player ply` — The player who wants to create something.
- `table entTable` — The duplication data to build the entity with. See Structures/EntityCopyData.

**Retorna:**

- `Entity` — The newly created entity.

*Fuente: `lua/includes/modules/duplicator.lua:664`*

---

### `duplicator:Disallow` `[client/server]`

Disallow this entity to be duplicated. Opposite of duplicator.Allow.

This function is useful for temporarily disabling duplication of certain entity classes that may have been previously allowed.

**Argumentos:**

- `string classname` — An entity's classname to disallow duplicating.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:340`*

---

### `duplicator:DoBoneManipulator` `[server]`

"Restores the bone's data."

Loops through Bones and calls Entity:ManipulateBoneScale, Entity:ManipulateBoneAngles and Entity:ManipulateBonePosition on ent with the table keys and the subtable values s, a and p respectively.

**Argumentos:**

- `Entity ent` — The entity to be bone manipulated.
- `table bones` — Table with a Structures/BoneManipulationData for every bone (that has manipulations applied) using the bone ID as the table index.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:454`*

---

### `duplicator:DoFlex` `[server]`

Restores the flex data using Entity:SetFlexWeight and Entity:SetFlexScale.

**Argumentos:**

- `Entity ent` — The entity to restore the flexes on.
- `table flex` — The flexes to restore.
- `number scale` = `nil` — The flex scale to apply. (Flex scale is unchanged if omitted)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:436`*

---

### `duplicator:DoGeneric` `[server]`

"Applies generic every-day entity stuff for ent from table data."

Depending on the values of Model, Angle, Pos, Skin, Flex, Bonemanip, ModelScale, ColGroup, Name, and BodyG (table of multiple values) in the data table, this calls Entity:SetModel, Entity:SetAngles, Entity:SetPos, Entity:SetSkin, duplicator.DoFlex, duplicator.DoBoneManipulator, Entity:SetModelScale, Entity:SetCollisionGroup, Entity:SetName, Entity:SetBodygroup on ent.

If ent has a RestoreNetworkVars function, it is called with data.DT.

**Argumentos:**

- `Entity ent` — The entity to be applied upon.
- `table data` — The data to be applied onto the entity.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:1044`*

---

### `duplicator:DoGenericPhysics` `[server]`

"Applies bone data, generically."

If data contains a PhysicsObjects table, it moves, re-angles and if relevent freezes all specified bones, first converting from local coordinates to world coordinates.

**Argumentos:**

- `Entity ent` — The entity to be applied upon.
- `Player ply` = `nil` — The player who owns the entity. Unused in function as of early 2013.
- `table data` — The data to be applied onto the entity.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:1036`*

---

### `duplicator:EntityClasses` `[client/server]`

A list of all entity classes have a custom duplication spawn function. Registered with duplicator.RegisterEntityClass.

If you wish to get a specific entity class table, use duplicator.FindEntityClass.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all entity classes with a custom duplication handler. Key = classname, Value = table.

---

### `duplicator:EntityModifiers` `[client/server]`

A list of all entity modifiers registered with duplicator.RegisterEntityModifier.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all entity modifiers.

---

### `duplicator:FigureOutRequiredAddons` `[client/server]`

Checks the given duplication table and tries to figure out any addons that might be required to correctly spawn the duplication. Currently this is limited to models and material overrides saved in the duplication.

**Argumentos:**

- `table dupe` — The duplication table to process, for example from duplicator.Copy.

The provided table will have `RequiredAddons` key added.

**Retorna:**

*(sin retorno)*

---

### `duplicator:FindEntityClass` `[client/server]`

Returns the entity class factory registered with duplicator.RegisterEntityClass.

**Argumentos:**

- `string name` — The name of the entity class factory.

**Retorna:**

- `table` — Is compromised of the following members:
* function Func - The function that creates the entity.
* table Args - Arguments to pass to the function.

*Fuente: `lua/includes/modules/duplicator.lua:395`*

---

### `duplicator:GenericDuplicatorFunction` `[server]`

"Generic function for duplicating stuff"

This is called when duplicator.CreateEntityFromTable can't find an entity factory to build with. It calls duplicator.DoGeneric and duplicator.DoGenericPhysics to apply standard duplicator stored things such as the model and position.

**Argumentos:**

- `Player ply` — The player who wants to create something.
- `table data` — The duplication data to build the entity with.

**Retorna:**

- `Entity` — The newly created entity.

*Fuente: `lua/includes/modules/duplicator.lua:472`*

---

### `duplicator:GetAllConstrainedEntitiesAndConstraints` `[server]`

Fills entStorageTable with all of the entities in a group connected with constraints. Fills constraintStorageTable with all of the constraints constraining the group.

**Argumentos:**

- `Entity ent` — The entity to start from
- `table entStorageTable` — The table the entities will be inserted into.
- `table constraintStorageTable` — The table the constraints will be inserted into.

**Retorna:**

- `table` — entStorageTable
- `table` — constraintStorageTable

*Fuente: `lua/includes/modules/duplicator.lua:921`*

---

### `duplicator:IsAllowed` `[client/server]`

Returns whether the entity can be duplicated or not.

**Argumentos:**

- `string classname` — An entity's classname.

**Retorna:**

- `boolean` — Returns true if the entity can be duplicated (nil otherwise).

*Fuente: `lua/includes/modules/duplicator.lua:349`*

---

### `duplicator:Paste` `[server]`

"Given entity list and constraint list, create all entities and return their tables"

Calls duplicator.CreateEntityFromTable on each sub-table of EntityList. If an entity is actually created, it calls ENTITY:OnDuplicated with the entity's duplicator data, then duplicator.ApplyEntityModifiers, duplicator.ApplyBoneModifiers and finally  ENTITY:PostEntityPaste is called.

The constraints are then created with duplicator.CreateConstraintFromTable.

**Argumentos:**

- `Player Player` — The player who wants to create something.
- `table EntityList` — A table of duplicator data to create the entities from.
- `table ConstraintList` — A table of duplicator data to create the constraints from.

**Retorna:**

- `table` — List of created entities.
- `table` — List of created constraints.

*Fuente: `lua/includes/modules/duplicator.lua:769`*

---

### `duplicator:RegisterBoneModifier` `[client/server]`

Registers a function to be called on each of an entity's bones when duplicator.ApplyBoneModifiers is called.

This function is available to call on the client, but registered functions aren't used anywhere!

**Argumentos:**

- `any key` — The type of the key doesn't appear to matter, but it is preferable to use a string.
- `function boneModifier` — Function called on each bone that an ent has. Called during duplicator.ApplyBoneModifiers.

The player that is spawning the entity.
The entity being spawned in.

What you pass to duplicator.StoreBoneModifier.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:405`*

---

### `duplicator:RegisterConstraint` `[client/server]`

Register a function used for creating a duplicator-supported constraint.

**Argumentos:**

- `string name` — The unique name of the new constraint. It will be used to identify which constraint to apply on duplicator load.
- `function callback` — Function to be called when this constraint is created.

It is a good idea to check constraint.CanConstrain before doing anything else.

You must also call constraint.AddConstraintTable if creating custom constraint entities.
* This is what stores the constraint for duplicator to save and load, as well as for constraint.GetTable.
* The constraint entity must have `Type` key on it. This means that a single entity can only represent one constraint.

Optionally, the callback can return up to 4 entities, which are considered the "constraint" entities.
* Each of those is added to `"ropeconstraints"` or `"constraints"` cleanup list based on entity's classname (Player:AddCleanup)
* The first entity is added to the player's entity count (Player:AddCount) in Sandbox.
* None of these entities **should** be the 2 entities being constraint (i.e. a `prop_physics`), but it can be one one of them if you know what you are doing.
- `vararg customData` — Arguments to be passed to the callback function when the constraint is created via duplicator.CreateConstraintFromTable.

The data would be taken the constraint entity table added via constraint.AddConstraintTable. All constraint library constraints call it on the appropriate entity for you. (Typically its the first entity returned by the callback)

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:367`*

---

### `duplicator:RegisterEntityClass` `[client/server]`

This allows you to specify a specific function to be run when your SENT is pasted with the duplicator, instead of relying on the generic automatic functions.

Automatically calls duplicator.Allow for the entity class.

**Argumentos:**

- `string name` — The ClassName of the entity you wish to register a factory for.
- `function function` — The factory function you want to have called.

The player that is spawning the entity.
Whatever arguments you request to be passed.
It also should return the entity created, otherwise duplicator.Paste result will not include it!
- `vararg args` — Strings of the names of arguments you want passed to function the from the Structures/EntityCopyData. As a special case, "Data" will pass the whole structure.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:381`*

---

### `duplicator:RegisterEntityModifier` `[client/server]`

This allows you to register tweaks to entities. For instance, if you were making an "unbreakable" addon, you would use this to enable saving the "unbreakable" state of entities between duplications.

This function registers a piece of generic code that is run on all entities with this modifier. In order to have it actually run, use duplicator.StoreEntityModifier.

This function does nothing when run clientside.

**Argumentos:**

- `string name` — An identifier for your modification. This is not limited, so be verbose. `Person's 'Unbreakable' mod` is far less likely to cause conflicts than `unbreakable`.
- `function func` — The function to be called for your modification.

The player that is spawning the entity.
The entity being spawned in.
What you pass to duplicator.StoreEntityModifier.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:406`*

---

### `duplicator:RemoveMapCreatedEntities` `[server]`

Help to remove certain map created entities before creating the saved entities
This is obviously so we don't get duplicate props everywhere.
It should be called before calling Paste.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:993`*

---

### `duplicator:SetLocalAng` `[client/server]`

"When a copy is copied it will be translated according to these.
If you set them - make sure to set them back to 0 0 0!"

**Argumentos:**

- `Angle v` — The angle to offset all pastes from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:362`*

---

### `duplicator:SetLocalPos` `[client/server]`

"When a copy is copied it will be translated according to these.
If you set them - make sure to set them back to 0 0 0!"

**Argumentos:**

- `Vector v` — The position to offset all pastes from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:361`*

---

### `duplicator:StoreBoneModifier` `[server]`

Stores bone mod data for a registered bone modification function.

**Argumentos:**

- `Entity ent` — The entity to add bone mod data to.
- `number boneID` — The bone ID.
See Entity:GetPhysicsObjectNum.
- `any key` — The key for the bone modification.
- `table data` — The bone modification data that is passed to the bone modification function.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:539`*

---

### `duplicator:StoreEntityModifier` `[server]`

Stores an entity modifier into an entity for saving.

**Argumentos:**

- `Entity entity` — The entity to store modifier in.
- `string name` — Unique modifier name as defined in duplicator.RegisterEntityModifier.
- `table data` — Modifier data.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/duplicator.lua:510`*

---

### `duplicator:WorkoutSize` `[server]`

Works out the AABB size of the duplication.

**Argumentos:**

- `table Ents` — A table of entity duplication datums.

**Retorna:**

- `Vector Mins` — AABB mins vector.
- `Vector Maxs` — AABB maxs vector.

*Fuente: `lua/includes/modules/duplicator.lua:569`*