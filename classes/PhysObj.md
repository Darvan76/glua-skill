# PhysObj

---

This is the object returned by Entity:GetPhysicsObject, Entity:GetPhysicsObjectNum and Vehicle:GetWheel.

It represents a physics object. An entity can have multiple physics objects (ragdolls), one physics objects (props), or none. (NPCs, non physics entities, etc.)

Physics objects are usually simulated by the physics engine and usually dictate the position of the entity, and not the other way around.

---


## Miembros (78)


---

### `PhysObj:AddAngleVelocity` `[client/server]`

Adds the specified [angular velocity](https://en.wikipedia.org/wiki/Angular_velocity) velocity to the current PhysObj.

**Argumentos:**

- `Vector angularVelocity` — The additional velocity in `degrees/s`. (Local to the physics object.)
Does nothing on frozen objects.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:AddGameFlag` `[client/server]`

Adds one or more bit flags.

**Argumentos:**

- `number flags` — Bitflag, see Enums/FVPHYSICS.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:AddVelocity` `[client/server]`

Adds the specified velocity to the current.

**Argumentos:**

- `Vector velocity` — Additional velocity in `source_unit/s`. (World frame)
Does nothing on frozen objects.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:AlignAngles` `[client/server]`

Rotates the object so that it's angles are aligned to the ones inputted.

**Argumentos:**

- `Angle from` — 
- `Angle to` — 

**Retorna:**

- `Angle` — 

---

### `PhysObj:ApplyForceCenter` `[client/server]`

Applies the specified impulse in the mass center of the physics object.

This will not work on players, use Entity:SetVelocity instead.

**Argumentos:**

- `Vector impulse` — The [impulse](https://en.wikipedia.org/wiki/Impulse_(physics)) to be applied in `kg*source_unit/s`. (The vector is in world frame)

**Retorna:**

*(sin retorno)*

---

### `PhysObj:ApplyForceOffset` `[client/server]`

Applies the specified impulse on the physics object at the specified position.

**Argumentos:**

- `Vector impulse` — The impulse to be applied in `kg*source_unit/s`. (World frame)
- `Vector position` — The position in world coordinates (`source units`) where the force is applied to the physics object.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:ApplyTorqueCenter` `[client/server]`

Applies the specified angular impulse to the physics object. See PhysObj:CalculateForceOffset

**Argumentos:**

- `Vector angularImpulse` — The angular impulse to be applied in `kg * m^2 * degrees / s`. (The vector is in world frame)

The unit conversion between meters and source units in this case is `1 meter ≈ 39.37 source units (100/2.54 exactly)`

**Retorna:**

*(sin retorno)*

---

### `PhysObj:CalculateForceOffset` `[client/server]`

Calculates the linear and angular impulse on the object's center of mass for an offset impulse.The outputs can be used with PhysObj:ApplyForceCenter and PhysObj:ApplyTorqueCenter, respectively.

**Be careful to convert the angular impulse to world frame (PhysObj:LocalToWorldVector) if you are going to use it with ApplyTorqueCenter.**

**Argumentos:**

- `Vector impulse` — The impulse acting on the object in `kg*source_unit/s`. (World frame)
- `Vector position` — The location of the impulse in world coordinates (`source units`)

**Retorna:**

- `Vector linearImpulse` — The calculated linear impulse on the physics object's center of mass in `kg*source_unit/s`. (World frame)
- `Vector angularImpulse` — The calculated angular impulse on the physics object's center of mass in `kg*m^2*degrees/s`. (Local frame)

---

### `PhysObj:CalculateVelocityOffset` `[client/server]`

Calculates the linear and angular velocities on the center of mass for an offset impulse. The outputs can be directly passed to PhysObj:AddVelocity and PhysObj:AddAngleVelocity, respectively.

This will return zero length vectors if the physics object's motion is disabled. See PhysObj:IsMotionEnabled.

**Argumentos:**

- `Vector impulse` — The impulse acting on the object in `kg*source_unit/s`. (World frame)
- `Vector position` — The location of the impulse in world coordinates (`source units`)

**Retorna:**

- `Vector` — The calculated linear velocity from the impulse on the physics object's center of mass in `source_unit/s`. (World frame)
- `Vector` — The calculated angular velocity from the impulse on the physics object's center of mass in `degrees/s`. (Local frame)

---

### `PhysObj:ClearGameFlag` `[client/server]`

Removes one of more specified flags.

**Argumentos:**

- `number flags` — Bitflag, see Enums/FVPHYSICS.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:ComputeShadowControl` `[client/server]`

Allows you to move a PhysObj to a point and angle in 3D space. Works with any PhysObj, not just physics shadows.

**Argumentos:**

- `table shadowparams` — The parameters for the shadow. See Structures/ShadowControlParams.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:EnableCollisions` `[client/server]`

Sets whether the physics object should collide with anything or not, including world.

This function currently has major problems with player collisions, and as such should be avoided at all costs.

A better alternative to this function would be using Entity:SetCollisionGroup( COLLISION_GROUP_WORLD ).

**Argumentos:**

- `boolean enable` — True to enable, false to disable.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:EnableDrag` `[client/server]`

Sets whenever the physics object should be affected by drag.

**Argumentos:**

- `boolean enable` — True to enable, false to disable.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:EnableGravity` `[client/server]`

Sets whether the PhysObject should be affected by gravity

**Argumentos:**

- `boolean enable` — True to enable, false to disable.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:EnableMotion` `[client/server]`

Sets whether the physobject should be able to move or not.

This is the exact method the Physics Gun uses to freeze props. If a motion-disabled physics object is grabbed with the physics gun, the object will be able to move again. To disallow this, use GM:PhysgunPickup.

**Argumentos:**

- `boolean enable` — True to enable, false to disable.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:GetAABB` `[client/server]`

Returns the mins and max of the physics object Axis-Aligned Bounding Box.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector|nil` — The minimum extents of the bounding box, or `nil` for runtime generated physics object.
- `Vector` — The maximum extents of the bounding box.

---

### `PhysObj:GetAngleVelocity` `[client/server]`

Gets the angular velocity of the object in degrees per second as a local vector. You can use dot product to read the magnitude from a specific axis.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The angular velocity

---

### `PhysObj:GetAngles` `[client/server]`

Returns the angles of the physics object in degrees.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the physics object.

---

### `PhysObj:GetBuoyancyRatio` `[client/server]`

Returns the buoyancy ratio of the physics object. (How well it floats in water).

This feature is not available on x86-64 beta and on MacOS version of the game.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number buoyancy` — Buoyancy ratio, where 0 is not buoyant at all (like a rock), and 1 is very buoyant (like wood)

---

### `PhysObj:GetContents` `[client/server]`

Returns the contents flag of the PhysObj.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The Enums/CONTENTS.

---

### `PhysObj:GetDamping` `[client/server]`

Returns the linear and angular damping of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The linear damping
- `number` — The angular damping

---

### `PhysObj:GetEnergy` `[client/server]`

Returns the sum of the linear and rotational kinetic energies of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The kinetic energy

---

### `PhysObj:GetEntity` `[client/server]`

Returns the parent entity of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The entity this physics object belongs to

---

### `PhysObj:GetFrictionSnapshot` `[server]`

Returns the friction snapshot of this physics object. This is useful for determining if an object touching ground for example.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of tables containing the following data:
* PhysObj Other - The other physics object we came in contact with
* number EnergyAbsorbed -
* number FrictionCoefficient -
* number NormalForce -
* Vector Normal - Direction of the friction event
* Vector ContactPoint - Contact point of the friction event
* number Material - Surface Property ID of our physics obj
* number MaterialOther - Surface Property ID of the physics obj we came in contact with

---

### `PhysObj:GetIndex` `[client/server]`

Returns the index this physics object is on its PhysObj:GetEntity.

Useful for Entity:TranslateBoneToPhysBone.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The physics object index on its parent entity.

---

### `PhysObj:GetInertia` `[client/server]`

Returns the principal moments of inertia `(Ixx, Iyy, Izz)` of the physics object, in the local frame, with respect to the center of mass.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector angularInertia` — The moment of inertia in `kg * m^2`
The unit conversion between meters and source units in this case is `1 meter ≈ 39.37 source units (100/2.54 exactly)`
This value changes proportionally to the physics object's mass (e.g. making the object twice as heavy will result in it having twice the angular inertia)

---

### `PhysObj:GetInvInertia` `[client/server]`

Returns 1 divided by the angular inertia. See PhysObj:GetInertia

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector invAngularInertia` — The inverted angular inertia
Returns `[0, 0, 0]` on frozen physics objects.

---

### `PhysObj:GetInvMass` `[client/server]`

Returns 1 divided by the physics object's mass (in kilograms).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The inverted mass.
Returns 0 on frozen physics objects.

---

### `PhysObj:GetMass` `[client/server]`

Returns the mass of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The mass in kilograms.

---

### `PhysObj:GetMassCenter` `[client/server]`

Returns the center of mass of the physics object as a local vector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The center of mass of the physics object.

---

### `PhysObj:GetMaterial` `[client/server]`

Returns the [physical material](https://developer.valvesoftware.com/wiki/Material_surface_properties) ($surfaceprop) of the physics object.

See util.GetSurfaceData for a function that adds these types as well as further explanation of what they are.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The physical material name. ($surfaceprop)

---

### `PhysObj:GetMesh` `[client/server]`

Returns the physics mesh of the object which is used for physobj-on-physobj collision.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Table of Structures/MeshVertexs where each three vertices represent a triangle. Returns nil if the physics object is a sphere.

---

### `PhysObj:GetMeshConvexes` `[client/server]`

Returns all convex physics meshes of the object. See Entity:PhysicsInitMultiConvex for more information.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Table of Structures/MeshVertexs where each Structures/MeshVertex is an independent convex mesh and each three vertices represent a triangle. Returns nil if the physics object is a sphere.

---

### `PhysObj:GetName` `[client/server]`

Returns the name of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the physics object.

---

### `PhysObj:GetPos` `[client/server]`

Returns the position of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position in world coordinates. (`source units`)

---

### `PhysObj:GetPositionMatrix` `[client/server]`

Returns the position and angle of the physics object as a 3x4 matrix (VMatrix is 4x4 so the fourth row goes unused). The first three columns store the angle as a [rotation matrix](https://en.wikipedia.org/wiki/Rotation_matrix), and the fourth column stores the position vector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The position and angle matrix.

---

### `PhysObj:GetRotDamping` `[client/server]`

Returns the rotation damping of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The rotation damping

---

### `PhysObj:GetShadowAngles` `[client/server]`

Returns the angles of the PhysObj shadow. See PhysObj:UpdateShadow.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the PhysObj shadow.

---

### `PhysObj:GetShadowPos` `[client/server]`

Returns the position of the PhysObj shadow. See PhysObj:UpdateShadow.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the PhysObj shadow.

---

### `PhysObj:GetSpeedDamping` `[client/server]`

Returns the speed damping of the physics object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — speedDamping

---

### `PhysObj:GetStress` `[server]`

Returns the internal and external stress of the entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The external stress (`𝜎𝑒`). It's the value of a giving force to other entities (in kg).
- `number` — The internal stress (`𝜎𝑖`). It's the value of a receiving force from other entities (in kg).

---

### `PhysObj:GetSurfaceArea` `[client/server]`

Returns the surface area of the physics object in source-units². Or nil if the PhysObj is a generated sphere or box.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number|nil` — The surface area or `nil` if the PhysObj is a generated sphere or box.

---

### `PhysObj:GetVelocity` `[client/server]`

Returns the absolute directional velocity of the physobject.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — velocity

---

### `PhysObj:GetVelocityAtPoint` `[client/server]`

Returns the world velocity of a point in world coordinates about the object. This is useful for objects rotating around their own axis/origin.

**Argumentos:**

- `Vector point` — A point to test in world space coordinates

**Retorna:**

- `Vector velocity` — Velocity at the given point

---

### `PhysObj:GetVolume` `[client/server]`

Returns the volume in source units³. Or nil if the PhysObj is a generated sphere or box.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number|nil` — The volume or `nil` if the PhysObj is a generated sphere or box.

---

### `PhysObj:HasGameFlag` `[client/server]`

Returns whenever the specified flag(s) is/are set.

**Argumentos:**

- `number flags` — Bitflag, see Enums/FVPHYSICS.

**Retorna:**

- `boolean` — If flag was set or not

---

### `PhysObj:IsAsleep` `[client/server]`

Returns whether the physics object is "sleeping".

See PhysObj:Sleep for more information.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the physics object is sleeping.

---

### `PhysObj:IsCollisionEnabled` `[client/server]`

Returns whenever the entity is able to collide or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isCollisionEnabled

---

### `PhysObj:IsDragEnabled` `[client/server]`

Returns whenever the entity is affected by drag.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — dragEnabled

---

### `PhysObj:IsGravityEnabled` `[client/server]`

Returns whenever the entity is affected by gravity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the gravity is enabled, `false` otherwise

---

### `PhysObj:IsMotionEnabled` `[client/server]`

Returns if the physics object can move itself (by velocity, acceleration)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the motion is enabled, `false` otherwise.

---

### `PhysObj:IsMoveable` `[client/server]`

Returns whenever the entity is able to move.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — movable

---

### `PhysObj:IsPenetrating` `[client/server]`

Returns whenever the physics object is penetrating another physics object.

This is internally implemented as `PhysObj:HasGameFlag( FVPHYSICS_PENETRATING )` and thus is only updated for non-static physics objects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the physics object is penetrating another object.

---

### `PhysObj:IsValid` `[client/server]`

Returns if the physics object is valid/not NULL.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the physics object is valid or not.

---

### `PhysObj:LocalToWorld` `[client/server]`

Translates a vector in the physics object's local space into worldspace coordinates.

Internally transforms the vector by the PhysObj:GetPositionMatrix.

So in GLua it approximates to:
```
local matrixWorldTransform = PhysObj:GetPositionMatrix()
local vecWorldspaced = Vector()
vecWorldspaced:Set( vecLocal )
vecWorldspaced:Mul( matrixWorldTransform )

return vecWorldspaced
```

**Argumentos:**

- `Vector vecLocal` — A vector in the physics object's local space.

**Retorna:**

- `Vector` — The corresponding worldspace vector.

---

### `PhysObj:LocalToWorldVector` `[client/server]`

Rotationally transforms a vector in the physics object's local space by the PhysObj:GetPositionMatrix.

In contrast to PhysObj:LocalToWorld, this function doesn't translate the vector.

**Argumentos:**

- `Vector vecLocal` — A vector in the physics object's local space.

**Retorna:**

- `Vector` — The resulting vector from the rotational transformation.

---

### `PhysObj:OutputDebugInfo` `[client/server]`

Prints debug info about the state of the physics object to the console.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PhysObj:RecheckCollisionFilter` `[client/server]`

Call this when the collision filter conditions change due to this object's state (e.g. changing solid type or collision group)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PhysObj:RotateAroundAxis` `[client/server]`

A convinience function for Angle:RotateAroundAxis.

**Argumentos:**

- `Vector dir` — Direction, around which we will rotate
- `number ang` — Amount of rotation, in degrees

**Retorna:**

- `Angle` — The resulting angle

---

### `PhysObj:SetAngleDragCoefficient` `[client/server]`

Sets the amount of [drag](https://en.wikipedia.org/wiki/Drag_(physics)) to apply to a physics object when attempting to rotate.

**Argumentos:**

- `number coefficient` — [Drag coefficient](https://en.wikipedia.org/wiki/Drag_coefficient). The bigger this value is, the slower the angles will change.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetAngleVelocity` `[client/server]`

Sets the specified [angular velocity](https://en.wikipedia.org/wiki/Angular_velocity) on the PhysObj

**Argumentos:**

- `Vector angularVelocity` — The new velocity in `degrees/s`. (Local frame)

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetAngleVelocityInstantaneous` `[client/server]`

Sets the specified instantaneous [angular velocity](https://en.wikipedia.org/wiki/Angular_velocity) on the PhysObj

**Argumentos:**

- `Vector angularVelocity` — The new velocity to set velocity.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetAngles` `[client/server]`

Sets the angles of the physobject in degrees.

**Argumentos:**

- `Angle angles` — The new angles of the physobject.
The new angle will not be applied on the parent entity while the physics object is asleep (PhysObj:Sleep)

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetBuoyancyRatio` `[client/server]`

Sets the buoyancy ratio of the physics object. (How well it floats in water)

**Argumentos:**

- `number buoyancy` — Buoyancy ratio, where 0 is not buoyant at all (like a rock), and 1 is very buoyant (like wood). You can set values larger than 1 for greater effect.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetContents` `[client/server]`

Sets the contents flag of the PhysObj.

**Argumentos:**

- `number{CONTENTS} contents` — The Enums/CONTENTS.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetDamping` `[client/server]`

Sets the linear and angular damping of the physics object.

**Argumentos:**

- `number linearDamping` — Linear damping.
- `number angularDamping` — Angular damping.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetDragCoefficient` `[client/server]`

Modifies how much drag (air resistance) affects the object.

**Argumentos:**

- `number drag` — The drag coefficient
It can be positive or negative.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetInertia` `[client/server]`

Sets the angular inertia. See PhysObj:GetInertia.

This does not affect linear inertia.

**Argumentos:**

- `Vector angularInertia` — The angular inertia of the object.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetMass` `[client/server]`

Sets the mass of the physics object.

This resets PhysObj:SetBuoyancyRatio (Recalculated based materials' and the physics objects' densities, latter of which is dependent on mass).

If you used a custom ratio, you will have to re-set it again after `SetMass`.

**Argumentos:**

- `number mass` — The mass in kilograms, in range `[0, 50000]`

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetMaterial` `[client/server]`

Sets the material of the physobject.

Impact sounds will only change if this is called on client

**Argumentos:**

- `string materialName` — The name of the phys material to use. From this list: [Valve Developer](https://developer.valvesoftware.com/wiki/Material_surface_properties)

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetPos` `[client/server]`

Sets the position of the physobject.

**Argumentos:**

- `Vector position` — The new position of the physobject in world coordinates. (`source units`).
The new position will not be applied on the parent entity while the physics object is asleep (PhysObj:Sleep)
- `boolean teleport` = `false` — If `true`, temporarily disables collisions of the physics objects just before moving it, then enables collisions back again.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetVelocity` `[client/server]`

Sets the velocity of the physics object for the next iteration.

**Argumentos:**

- `Vector velocity` — The new velocity of the physics object in `source_unit/s`. (World frame)

**Retorna:**

*(sin retorno)*

---

### `PhysObj:SetVelocityInstantaneous` `[client/server]`

Sets the velocity of the physics object.

**Argumentos:**

- `Vector velocity` — The new velocity of the physics object.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:Sleep` `[client/server]`

Makes the physics object "sleep". The physics object will no longer be moving unless it is "woken up" by either a collision with another moving object, or by PhysObj:Wake.

This is an optimization feature of the physics engine. Normally physics objects will automatically "sleep" when not moving for a short while, to save resources, but it can be used for other purposes, for example to temporarily suspend an object mid air.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PhysObj:UpdateShadow` `[client/server]`

Unlike PhysObj:SetPos and PhysObj:SetAngles, this allows the movement of a physobj while leaving physics interactions intact.
This is used internally by the motion controller of the Gravity Gun , the +use pickup and the Physics Gun, and entities such as the crane.

This is the ideal function to move a physics shadow created with Entity:PhysicsInitShadow or Entity:MakePhysicsObjectAShadow.

**Argumentos:**

- `Vector targetPosition` — The position we should move to.
- `Angle targetAngles` — The angle we should rotate towards.
- `number frameTime` — The frame time to use for this movement, can be generally filled with Global.FrameTime or ENTITY:PhysicsSimulate with the deltaTime.

Can be set to 0 when you need to update the physics object just once.

**Retorna:**

*(sin retorno)*

---

### `PhysObj:Wake` `[client/server]`

Wakes the physics object, so that it will continue to simulate physics/gravity.

See PhysObj:Sleep for more information.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PhysObj:WorldToLocal` `[client/server]`

Translates a worldspace vector into the physics object's local space.

**Argumentos:**

- `Vector vec` — A worldspace vector.

**Retorna:**

- `Vector` — The corresponding local space vector.

---

### `PhysObj:WorldToLocalVector` `[client/server]`

Rotationally transforms a worldspace vector into the physics object's local space by the inverted PhysObj:GetPositionMatrix.

For example, in GMod this is used in thrusters, for working out linear force for local acceleration.

In contrast to PhysObj:WorldToLocal, this function doesn't translate the vector.

**Argumentos:**

- `Vector vec` — A worldspace vector.

**Retorna:**

- `Vector` — The resulting vector from the rotational transformation.