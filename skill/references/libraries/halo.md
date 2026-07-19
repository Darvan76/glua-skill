# halo

---

The halo library is used to draw glowing outlines around entities, an example of this can be seen by picking up props with the physgun in Garry's Mod 13.

---


## Miembros (3)


---

### `halo:Add` `[client]`

Applies a halo glow effect to one or multiple entities. It is preferable to add them in GM:PreDrawHalos, but they can be added at any time.
The ignoreZ parameter will cause the halos to draw over the player's viewmodel. You can work around this using render.DepthRange in the GM:PreDrawViewModel, GM:PostDrawViewModel, GM:PreDrawPlayerHands and GM:PostDrawPlayerHands hooks.

**Argumentos:**

- `table entities` — A table of entities to add the halo effect to.
- `Color color` — The desired color of the halo.
- `number blurX` = `2` — The strength of the halo's blur on the x axis.
- `number blurY` = `2` — The strength of the halo's blur on the y axis.
- `number passes` = `1` — The number of times the halo should be drawn per frame. **Increasing this may hinder player FPS**.
- `boolean additive` = `true` — Sets the render mode of the halo to additive.
- `boolean ignoreZ` = `false` — Renders the halo through anything when set to `true`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/halo.lua:13`*

---

### `halo:Render` `[client]`

Renders a halo according to the specified table, only used internally, called from a GM:PostDrawEffects hook added by the halo library.

**Argumentos:**

- `table entry` — Table with info about the halo to draw.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/halo.lua:39`*

---

### `halo:RenderedEntity` `[client]`

Returns the entity the halo library is currently rendering the halo for.

The main purpose of this function is to be used in ENTITY:Draw in order not to draw certain parts of the entity when the halo is being rendered, so there's no halo around unwanted entity parts, such as lasers, 3D2D displays, etc.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — If set, the currently rendered entity by the halo library.

*Fuente: `lua/includes/modules/halo.lua:35`*