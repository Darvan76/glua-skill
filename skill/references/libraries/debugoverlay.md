# debugoverlay

---

The debugoverlay library is mainly useful for 3D debugging, it can be used to draw shapes on the screen for debug purposes.

These functions will not do anything unless the `developer` console variable is set to non 0.
There's some code that prevents debugoverlay from being added if the game is paused, i.e. when console is open in singleplayer.

---


## Miembros (12)


---

### `debugoverlay:Axis` `[client/server]`

Displays an axis indicator at the specified position, with 3 lines pointing in the positive direction (i.e. direction in which the values increase) of each axis.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector origin` — Position origin.
- `Angle ang` — Angle of the axis.
- `number size` — Size of the axis.
- `number lifetime` = `1` — Number of seconds to appear.
- `boolean ignoreZ` = `false` — If true, will draw on top of everything; ignoring the Z buffer.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Box` `[client/server]`

Displays a solid coloured box at the specified position.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector origin` — Position origin.
- `Vector mins` — Minimum bounds of the box.
- `Vector maxs` — Maximum bounds of the box.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255, 255 )` — The color of the box.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:BoxAngles` `[client/server]`

Displays a solid colored rotated box at the specified position.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector pos` — World position.
- `Vector mins` — The mins of the box (lowest corner).
- `Vector maxs` — The maxs of the box (highest corner).
- `Angle ang` — The angle to draw the box at.
- `number lifetime` = `1` — Amount of seconds to show the box.
- `Color color` = `Color( 255, 255, 255, 255 )` — The color of the box.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Cross` `[client/server]`

Creates a coloured cross at the specified position for the specified time.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector position` — Position origin.
- `number size` — Size of the cross.
- `number lifetime` = `1` — Number of seconds the cross will appear for.
- `Color color` = `Color( 255, 255, 255 )` — The color of the cross.
- `boolean ignoreZ` = `false` — If true, will draw on top of everything; ignoring the Z buffer.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:EntityTextAtPosition` `[client/server]`

Displays 2D text at the specified coordinates.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector pos` — The position in 3D to display the text.
- `number line` — Line of text, will offset text on the to display the new line unobstructed.
- `string text` — The text to display.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255 )` — The color of the box.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Grid` `[client/server]`

Draws a 3D grid of limited size in given position.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector position` — 

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Line` `[client/server]`

Displays a coloured line at the specified position.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector pos1` — First position of the line.
- `Vector pos2` — Second position of the line.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255 )` — The color of the line.
- `boolean ignoreZ` = `false` — If true, will draw on top of everything; ignoring the Z buffer.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:ScreenText` `[client/server]`

Displays text triangle at the specified coordinates.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `number x` — The position of the text, from 0 ( left ) to 1 ( right ).
- `number y` — The position of the text, from 0 ( top ) to 1 ( bottom ).
- `string text` — The text to display.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255 )` — The color of the box.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Sphere` `[client/server]`

Displays a coloured sphere at the specified position.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector origin` — Position origin.
- `number size` — Size of the sphere.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255 )` — The color of the sphere.
- `boolean ignoreZ` = `false` — If true, will draw on top of everything; ignoring the Z buffer.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:SweptBox` `[client/server]`

Displays "swept" box, two boxes connected with lines by their vertices.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector vStart` — The start position of the box.
- `Vector vEnd` — The end position of the box.
- `Vector vMins` — The "minimum" edge of the box.
- `Vector vMaxs` — The "maximum" edge of the box.
- `Angle ang` — The angle to draw the box at.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255 )` — The color of the box.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Text` `[client/server]`

Displays text at the specified position.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector origin` — Position origin.
- `string text` — String message to display.
- `number lifetime` = `1` — Number of seconds to appear.
- `boolean viewCheck` = `false` — Clip text that is obscured.

**Retorna:**

*(sin retorno)*

---

### `debugoverlay:Triangle` `[client/server]`

Displays a colored triangle at the specified coordinates.

This function will silently fail if the `developer` ConVar is set to `0`.
It is not networked to clients, except for the Player:IsListenServerHost.
It will not work when the game is paused.

**Argumentos:**

- `Vector pos1` — First point of the triangle.
- `Vector pos2` — Second point of the triangle.
- `Vector pos3` — Third point of the triangle.
- `number lifetime` = `1` — Number of seconds to appear.
- `Color color` = `Color( 255, 255, 255 )` — The color of the box.
- `boolean ignoreZ` = `false` — If true, will draw on top of everything; ignoring the Z buffer.

**Retorna:**

*(sin retorno)*