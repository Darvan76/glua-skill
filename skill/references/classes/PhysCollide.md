# PhysCollide

---

A PhysCollide holds collision data from VPhysics. These objects can be used to run (currently quite limited) collision tests, but do not represent actual physics objects.

Created by Global.CreatePhysCollideBox or Global.CreatePhysCollidesFromModel.

---


## Miembros (3)


---

### `PhysCollide:Destroy` `[client/server]`

Destroys the PhysCollide object.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PhysCollide:IsValid` `[client/server]`

Checks whether this PhysCollide object is valid or not.

You should just use Global.IsValid instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is valid or not.

---

### `PhysCollide:TraceBox` `[client/server]`

Performs a trace against this PhysCollide with the given parameters. This can be used for both line traces and box traces.

**Argumentos:**

- `Vector origin` — The origin for the PhysCollide during the trace
- `Angle angles` — The angles for the PhysCollide during the trace
- `Vector rayStart` — The start position of the trace
- `Vector rayEnd` — The end position of the trace
- `Vector rayMins` — The mins of the trace's bounds
- `Vector rayMaxs` — The maxs of the trace's bounds

**Retorna:**

- `Vector` — Hit position of the trace. This is false if the trace did not hit.
- `Vector` — Hit normal of the trace
- `number` — Fraction of the trace. This is calculated from the distance between startPos, hitPos, and endPos.