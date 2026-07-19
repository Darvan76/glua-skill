# effects

---

The effects library allows you to manually add scripted effects.

---


## Miembros (7)


---

### `effects:BeamRingPoint` `[client/server]`

Creates a "beam ring point" effect.

**Argumentos:**

- `Vector pos` — The origin position of the effect.
- `number lifetime` — How long the effect will be drawing for, in seconds.
- `number startRad` — Initial radius of the effect.
- `number endRad` — Final radius of the effect, at the end of the effect's lifetime.
- `number width` — How thick the beam should be.
- `number amplitude` — How noisy the beam should be.
- `Color color` — Beam's Color.
- `table extra` — Extra info, all optional. A table with the following keys: (any combination)
* number speed - ?
* number spread - ?
* number delay - Delay in seconds after which the effect should appear.
* number flags- Beam flags.
* number framerate - texture framerate.
* string material - The material to use instead of the default one.

**Retorna:**

*(sin retorno)*

---

### `effects:BubbleTrail` `[client/server]`

Creates a bubble trail effect, the very same you get when shooting underwater.

**Argumentos:**

- `Vector startPos` — The start position of the effect.
- `Vector endPos` — The end position of the effects.
- `number count` — How many bubbles to spawn. There's a hard limit of 500 tempents at any time.
- `number height` — How high the bubbles can fly up before disappearing.
- `number speed` = `0` — How quickly the bubbles move.
- `number delay` = `0` — Delay in seconds after the function call and before the effect actually spawns.

**Retorna:**

*(sin retorno)*

---

### `effects:Bubbles` `[client/server]`

Creates a bunch of bubbles inside a defined box.

**Argumentos:**

- `Vector mins` — The lowest extents of the box.
- `Vector maxs` — The highest extents of the box.
- `number count` — How many bubbles to spawn. There's a hard limit of 500 tempents at any time.
- `number height` — How high the bubbles can fly up before disappearing.
- `number speed` = `0` — How quickly the bubbles move.
- `number delay` = `0` — Delay in seconds after the function call and before the effect actually spawns.

**Retorna:**

*(sin retorno)*

---

### `effects:Create` `[client]`

You are looking for util.Effect.Returns the table of the effect specified.

**Argumentos:**

- `string name` — Effect name.

**Retorna:**

- `table` — The effect table.

*Fuente: `lua/includes/modules/effects.lua:51`*

---

### `effects:GetList` `[client]`

Returns a list of all Lua-defined effects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The effects table.

*Fuente: `lua/includes/modules/effects.lua:73`*

---

### `effects:Register` `[client]`

Registers a new effect.

**Argumentos:**

- `table effect_table` — Effect table.
- `string name` — Effect name.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/effects.lua:18`*

---

### `effects:TracerSound` `[client]`

Imitates the "near miss" tracer sound, with the ability to override the sound played.

The frequency of the sound is limited internally, as to not overwhelm the player. (same as normal tracers)

**Argumentos:**

- `Vector start` — Start position of the tracer.
- `Vector endpos` — End position of the tracer.
- `number tracerType` = `1` — Tracer type. Acceptable values are:
* 1 - Normal bullet.
* 2 - Gunship bullet.
* 4 - Strider bullet.
* 8 - Underwater bullet.

This affects the default sound, as well as the distance from which the sound can be heard compared to the closest point on the tracer line to the Player:GetShootPos.
- `string soundOverride` = `nil` — If set, this sound will be played instead of the default sound.

**Retorna:**

*(sin retorno)*