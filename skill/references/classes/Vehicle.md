# Vehicle

---

This is a list of all methods only available for vehicles. It is also possible to call Entity functions on vehicles.

---


## Miembros (49)


---

### `Vehicle:BoostTimeLeft` `[server]`

Returns the remaining boosting time left.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The remaining boosting time left

---

### `Vehicle:CheckExitPoint` `[server]`

Tries to find an Exit Point for leaving vehicle, if one is unobstructed in the direction given.

**Argumentos:**

- `number yaw` — Yaw/roll from vehicle angle to check for exit
- `number distance` — Distance from origin to drop player

**Retorna:**

- `Vector` — Returns the vector for exit position or nil if cannot exit that way.

---

### `Vehicle:EnableEngine` `[server]`

Sets whether the engine is enabled or disabled, i.e. can be started or not.

**Argumentos:**

- `boolean enable` — Enable or disable the engine

**Retorna:**

*(sin retorno)*

---

### `Vehicle:GetAmmo` `[client]`

Returns information about the ammo of the vehicle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Ammo type of the vehicle ammo
- `number` — Clip size
- `number` — Count

---

### `Vehicle:GetCameraDistance` `[client/server]`

Returns third person camera distance.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Camera distance

*Fuente: `lua/includes/extensions/entity.lua:683`*

---

### `Vehicle:GetDriver` `[client/server]`

Gets the driver of the vehicle, returns NULL if no driver is present.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The driver of the vehicle.

---

### `Vehicle:GetHLSpeed` `[server]`

Returns the current speed of the vehicle in Half-Life Hammer Units (in/s). Same as Entity:GetVelocity + Vector:Length.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The speed of the vehicle

---

### `Vehicle:GetMaxSpeed` `[server]`

Returns the max speed of the vehicle in MPH.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The max speed of the vehicle in MPH

---

### `Vehicle:GetOperatingParams` `[server]`

Returns some info about the vehicle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{OperatingParams}` — The operating parameters.

---

### `Vehicle:GetPassenger` `[client/server]`

Gets the passenger of the vehicle, returns NULL if no drivers is present.

**Argumentos:**

- `number passenger` — The index of the passenger ( 0 is the driver )

**Retorna:**

- `Entity` — The passenger

---

### `Vehicle:GetPassengerSeatPoint` `[server]`

Returns the seat position and angle of a given passenger seat.

**Argumentos:**

- `number role` — The passenger role. ( 0 is the driver )

**Retorna:**

- `Vector` — The seat position in worldspace coordinates.
- `Angle` — The seat angle in worldspace coordinates.

---

### `Vehicle:GetRPM` `[server]`

Returns the current RPM of the vehicle. This value is fake and doesn't actually affect the vehicle movement.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The RPM.

---

### `Vehicle:GetSpeed` `[server]`

Returns the current speed of the vehicle in MPH.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The speed of the vehicle in MPH

---

### `Vehicle:GetSteering` `[server]`

Returns the current steering of the vehicle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current steering of the vehicle.

---

### `Vehicle:GetSteeringDegrees` `[server]`

Returns the maximum steering degree of the vehicle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The maximum steering degree of the vehicle

---

### `Vehicle:GetThirdPersonMode` `[client/server]`

Returns if vehicle has thirdperson mode enabled or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns `true` if third person mode enabled, `false` otherwise

*Fuente: `lua/includes/extensions/entity.lua:696`*

---

### `Vehicle:GetThrottle` `[server]`

Returns the current throttle of the vehicle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current throttle of the vehicle

---

### `Vehicle:GetVehicleClass` `[client/server]`

Returns the vehicle class name. This is only useful for Sandbox spawned vehicles or any vehicle that properly sets the vehicle class with Vehicle:SetVehicleClass.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The class name of the vehicle.

*Fuente: `lua/includes/extensions/entity.lua:684`*

---

### `Vehicle:GetVehicleParams` `[server]`

Returns the vehicle parameters of given vehicle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{VehicleParams}` — The vehicle parameters.

---

### `Vehicle:GetVehicleViewPosition` `[client/server]`

Returns the view position and forward angle of a given passenger seat.

**Argumentos:**

- `number role` = `0` — The passenger role. 0 is the driver. This parameter seems to be ignored by the game engine and is therefore optional.

**Retorna:**

- `Vector` — The view position, will be 0, 0, 0 on failure
- `Angle` — The view angles, will be 0, 0, 0 on failure
- `number` — The field of view, will be 0 on failure

---

### `Vehicle:GetWheel` `[server]`

Returns the PhysObj of given wheel.

**Argumentos:**

- `number wheel` — The wheel to retrieve

**Retorna:**

- `PhysObj` — The wheel

---

### `Vehicle:GetWheelBaseHeight` `[server]`

Returns the base wheel height.

**Argumentos:**

- `number wheel` — The wheel to get the base wheel height of.

**Retorna:**

- `number` — The base wheel height.

---

### `Vehicle:GetWheelContactPoint` `[server]`

Returns the wheel contact point.

**Argumentos:**

- `number wheel` — The wheel to check

**Retorna:**

- `Vector` — The contact position
- `number` — The Surface Properties ID of hit surface.
- `boolean` — Whether the wheel is on ground or not

---

### `Vehicle:GetWheelCount` `[server]`

Returns the wheel count of the vehicle

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of wheels

---

### `Vehicle:GetWheelTotalHeight` `[server]`

Returns the total wheel height.

**Argumentos:**

- `number wheel` — The wheel to get the base wheel height of.

**Retorna:**

- `number` — The total wheel height.

---

### `Vehicle:HasBoost` `[server]`

Returns whether this vehicle has boost at all.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this vehicle has boost at all.

---

### `Vehicle:HasBrakePedal` `[server]`

Returns whether this vehicle has a brake pedal. See Vehicle:SetHasBrakePedal.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this vehicle has a brake pedal or not.

---

### `Vehicle:IsBoosting` `[server]`

Returns whether this vehicle is currently boosting or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this vehicle is currently boosting or not.

---

### `Vehicle:IsEngineEnabled` `[server]`

Returns whether the engine is enabled or not, i.e. whether it can be started.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the engine is enabled

---

### `Vehicle:IsEngineStarted` `[server]`

Returns whether the engine is started or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the engine is started or not.

---

### `Vehicle:IsValidVehicle` `[client/server]`

Determines whether a given Vehicle is fully initialized.

It is possible, in uncommon circumstances, for a Global.IsValid Entity:IsVehicle entity to be in an invalid state, such as before Entity:Spawn is called on the vehicle after creation.

If this function returns `false`, then the Vehicle functions are not usable on this vehicle, while Entity functions are.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the Vehicle is in a valid state, or `false` if the Vehicle is in an invalid state.

---

### `Vehicle:IsVehicleBodyInWater` `[server]`

Returns whether this vehicle's engine is underwater or not. ( Internally the attachment point "engine" or "vehicle_engine" is checked )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this vehicle's engine is underwater or not.

---

### `Vehicle:ReleaseHandbrake` `[server]`

Releases the vehicle's handbrake (Jeep) so it can roll without any passengers.

This will be overwritten if the vehicle has a driver. Same as Vehicle:SetHandbrake( false )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetBoost` `[server]`

Sets the boost. It is possible that this function does not work while the vehicle has a valid driver in it.

**Argumentos:**

- `number boost` — The new boost value

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetCameraDistance` `[client/server]`

Sets the third person camera distance of the vehicle.

**Argumentos:**

- `number distance` — Camera distance to set to

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/entity.lua:677`*

---

### `Vehicle:SetHandbrake` `[server]`

Turns on or off the Jeep handbrake so it can roll without a driver inside.

Does nothing while the vehicle has a driver in it.

**Argumentos:**

- `boolean handbrake` — true to turn on, false to turn off.

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetHasBrakePedal` `[server]`

Sets whether this vehicle has a brake pedal.

**Argumentos:**

- `boolean brakePedal` — Whether this vehicle has a brake pedal

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetMaxReverseThrottle` `[server]`

Sets maximum reverse throttle

**Argumentos:**

- `number maxRevThrottle` — The new maximum throttle. This number must be negative.

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetMaxThrottle` `[server]`

Sets maximum forward throttle

**Argumentos:**

- `number maxThrottle` — The new maximum throttle.

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetSpringLength` `[server]`

Sets spring length of given wheel

**Argumentos:**

- `number wheel` — The wheel to change spring length of
- `number length` — The new spring length

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetSteering` `[server]`

Sets the steering of the vehicle.
The correct range, 0 to 1 or -1 to 1

**Argumentos:**

- `number front` — Angle of the front wheels (-1 to 1)
- `number rear` — Angle of the rear wheels (-1 to 1)

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetSteeringDegrees` `[server]`

Sets the maximum steering degrees of the vehicle

**Argumentos:**

- `number steeringDegrees` — The new maximum steering degree

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetThirdPersonMode` `[client/server]`

Sets the third person mode state.

**Argumentos:**

- `boolean enable` — Enable or disable the third person mode for this vehicle

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/entity.lua:665`*

---

### `Vehicle:SetThrottle` `[server]`

Sets the throttle of the vehicle. It is possible that this function does not work with a valid driver in it.

**Argumentos:**

- `number throttle` — The new throttle.

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetVehicleClass` `[client/server]`

Sets the vehicle class name.

**Argumentos:**

- `string class` — The vehicle class name to set

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/entity.lua:678`*

---

### `Vehicle:SetVehicleEntryAnim` `[server]`

Sets whether the entry or exit camera animation should be played or not.

**Argumentos:**

- `boolean bOn` — Whether the entry or exit camera animation should be played or not.

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetVehicleParams` `[server]`

Sets the vehicle parameters for given vehicle.

Not all variables from the Structures/VehicleParams can be set.

**Argumentos:**

- `table params` — The new new vehicle parameters. See Structures/VehicleParams.

**Retorna:**

*(sin retorno)*

---

### `Vehicle:SetWheelFriction` `[server]`

Sets friction of given wheel.  This function may be broken.

**Argumentos:**

- `number wheel` — The wheel to change the friction of
- `number friction` — The new friction to set

**Retorna:**

*(sin retorno)*

---

### `Vehicle:StartEngine` `[server]`

Starts or stops the engine.

**Argumentos:**

- `boolean start` — True to start, false to stop.

**Retorna:**

*(sin retorno)*