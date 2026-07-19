# widgets

---

The widgets library.

Widgets allow the player to have mouse interaction with entities, such as being able to manipulate the [bones of an NPC](https://www.youtube.com/watch?v=O3gG0t39-pQ).

---


## Miembros (2)


---

### `widgets:PlayerTick` `[client/server]`

Automatically called to update all widgets.

**Argumentos:**

- `Player ply` — The player
- `CMoveData mv` — Player move data

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/widget.lua:92`*

---

### `widgets:RenderMe` `[client]`

Renders a widget. Normally you won't need to call this.

**Argumentos:**

- `Entity ent` — Widget entity to render

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/widget.lua:114`*