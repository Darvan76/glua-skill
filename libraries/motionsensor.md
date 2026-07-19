# motionsensor

---

Functions related to Kinect for Windows usage in GMod.
Kinect feature works only on 32-bit version of the game.

---


## Miembros (11)


---

### `motionsensor:BuildSkeleton` `[client/server]`

Called to build the skeleton. See Using The Kinect and Kinect developing.

**Argumentos:**

- `table translator` — `list.Get( "SkeletonConvertor" )` and motionsensor.ChooseBuilderFromEntity.
- `Player player` — The player to get motion sensor positions from.
- `Angle rotation` — Global rotation of the player?

**Retorna:**

- `Vector` — Position
- `Angle` — Angles
- `table` — Sensor

*Fuente: `lua/includes/extensions/motionsensor.lua:221`*

---

### `motionsensor:ChooseBuilderFromEntity` `[client/server]`

**Argumentos:**

- `Entity ent` — Entity to choose builder for

**Retorna:**

- `string` — Chosen builder. The builders are stored in `list.Get( "SkeletonConvertor" )`

*Fuente: `lua/includes/extensions/motionsensor.lua:46`*

---

### `motionsensor:GetColourMaterial` `[client/menu]`

Returns the depth map material.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `IMaterial` — The material

---

### `motionsensor:GetSkeleton` `[client]`

Returns players skeletal data if they are using Kinect. See Using The Kinect and Kinect developing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The skeleton data.

---

### `motionsensor:IsActive` `[client]`

Return whether a kinect is connected - and active (ie - Start has been called).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Connected and active or not

---

### `motionsensor:IsAvailable` `[client/menu]`

Returns true if we have detected that there's a kinect connected to the PC

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Connected or not

---

### `motionsensor:ProcessAngle` `[client/server]`

Used internally by motionsensor.ProcessAnglesTable. See Using The Kinect and Kinect developing.

**Argumentos:**

- `table translator` — 
- `table sensor` — 
- `Vector pos` — 
- `Angle ang` — 
- `table special_vectors` — 
- `number boneid` — 
- `table v` — 

**Retorna:**

- `boolean` — Return nil on failure

*Fuente: `lua/includes/extensions/motionsensor.lua:60`*

---

### `motionsensor:ProcessAnglesTable` `[client/server]`

Used internally by motionsensor.BuildSkeleton. See Using The Kinect and Kinect developing.

**Argumentos:**

- `table translator` — 
- `table sensor` — 
- `Vector pos` — 
- `Angle rotation` — 

**Retorna:**

- `table` — Ang. If `!translator.AnglesTable` then `return {}`

*Fuente: `lua/includes/extensions/motionsensor.lua:126`*

---

### `motionsensor:ProcessPositionTable` `[client/server]`

Used internally by motionsensor.BuildSkeleton. See Using The Kinect and Kinect developing.

**Argumentos:**

- `table translator` — 
- `table sensor` — 

**Retorna:**

- `table` — Positions. if `!translator.PositionTable` then return - `{}`

*Fuente: `lua/includes/extensions/motionsensor.lua:195`*

---

### `motionsensor:Start` `[client/menu]`

This starts access to the kinect sensor. Note that this usually freezes the game for a couple of seconds.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the access has been started

---

### `motionsensor:Stop` `[client]`

Stops the motion capture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*