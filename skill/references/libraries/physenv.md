# physenv

---

The physenv library allows you to control the physics environment created by the engine, and lets you modify constants such as gravity and maximum velocity.

---


## Miembros (12)


---

### `physenv:AddSurfaceData` `[client/server]`

Adds a [material surface property](https://developer.valvesoftware.com/wiki/Material_surface_properties) type to the game's physics environment.

See util.GetSurfaceData for the opposite function.

The game has a limit of 128 surface properties - this includes properties loaded automatically from [surfaceproperties.txt](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/scripts/surfaceproperties.txt). Due to this, there's only a small amount of open slots that can be registered with GMod's provided surfaceproperties.txt.

Does nothing on `x86-64` beta.

**Argumentos:**

- `string properties` — The properties to add. Each one should include `"base"` or the game will crash due to some values being missing.

**Retorna:**

*(sin retorno)*

---

### `physenv:GetAirDensity` `[client/server]`

Returns the air density used to calculate drag on physics objects.
The unit is in `kg/m³`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number airDensity` — Default value is 2.

---

### `physenv:GetGravity` `[client/server]`

Gets the gravitational acceleration used for physics objects in `source_unit/s^2`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Gravity direction and strength.

---

### `physenv:GetLastSimulationTime` `[client/server]`

Returns the last simulation duration of the in-game physics.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The last simulation duration of the in-game physics in seconds

---

### `physenv:GetPerformanceSettings` `[client/server]`

Gets the current performance settings in table form.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Performance settings or nil if called too early. See Structures/PhysEnvPerformanceSettings

---

### `physenv:GetPhysicsPaused` `[client/server]`

Returns the pause status of global physics simulation. See physenv.SetPhysicsPaused for the setter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if paused.

---

### `physenv:GetTimeScale` `[client/server]`

Returns the physics time scale set with physenv.SetTimeScale.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current physics time scale.

---

### `physenv:SetAirDensity` `[client/server]`

Sets the air density.

**Argumentos:**

- `number airDensity` — The new air density.

**Retorna:**

*(sin retorno)*

---

### `physenv:SetGravity` `[client/server]`

Sets the gravitational acceleration used for physics objects. Does not affect players.

**Argumentos:**

- `Vector gravAccel` — The new gravity in `source_unit/s^2`.

**Retorna:**

*(sin retorno)*

---

### `physenv:SetPerformanceSettings` `[client/server]`

Sets the performance settings.

**Argumentos:**

- `table performanceSettings` — The new performance settings. See Structures/PhysEnvPerformanceSettings

**Retorna:**

*(sin retorno)*

---

### `physenv:SetPhysicsPaused` `[client/server]`

Pauses or unpauses the physics simulation globally. See physenv.GetPhysicsPaused for the getter.

**Argumentos:**

- `boolean pause` — `true` to pause, `false` to unpause.

**Retorna:**

*(sin retorno)*

---

### `physenv:SetTimeScale` `[client/server]`

Sets the time scale of the physics simulation.

This will affect serverside-only physics if called on server, and clientside-only physics if used on the client.

See game.SetTimeScale for a function that also affects all game logic.

The true timescale will be `phys_timescale` (`cl_phys_timescale` on client) multiplied by physenv.GetTimeScale.

**Argumentos:**

- `number timeScale` — The new timescale, minimum value is 0.001 and maximum is 5.

**Retorna:**

*(sin retorno)*