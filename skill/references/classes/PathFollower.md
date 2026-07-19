# PathFollower

---

Path object for a NextBot NPC and bots created by player.CreateNextbot. Returned by Global.Path.

---


## Miembros (31)


---

### `PathFollower:Chase` `[server]`

Computes the shortest path to the provided entity arg. PathFollower Object must have `Chase` type.

For PathFollower objects of the `Follow` type use PathFollower:Compute

**Argumentos:**

- `NextBot bot` — The bot to update along the path. This can also be a nextbot player (player.CreateNextbot)
- `Entity ent` — The entity we want to chase
- `function generator` = `nil` — A function that allows you to alter the path generation. See example on PathFollower:Compute for the default function.

The area to move to.
The area to move from.
The ladder to move to or from (Validation required), if any.
Will probably be always NULL
Precomputed length between `area` and `fromArea`.
The cost of movement between `area` and `fromArea`.

**Retorna:**

*(sin retorno)*

---

### `PathFollower:Compute` `[server]`

Compute shortest path from bot to 'goal' via A* algorithm. This only works if the PathFollower is the `Follow` Type.

For PathFollowers of the `Chase` Type see PathFollower:Chase

**Argumentos:**

- `NextBot bot` — The nextbot we're generating for.  This can also be a nextbot player (player.CreateNextbot).
- `Vector goal` — The target location, the goal.
- `function generator` = `nil` — A function that allows you to alter the path generation by adjusting the "cost". See example below for the default function.

The area to move to.
The area to move from.
The ladder to move to or from (Validation required), if any.
Will probably be always NULL
Precomputed length between `area` and `fromArea`.
The cost of movement between `area` and `fromArea`.

**Retorna:**

- `boolean` — * If returns true, path was found to the goal position.
* If returns false, path may either be invalid (use IsValid() to check), or valid but doesn't reach all the way to the goal.

---

### `PathFollower:Draw` `[server]`

Draws the path. This is meant for debugging - and uses debugoverlay.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PathFollower:FirstSegment` `[server]`

Returns the first segment of the path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with Structures/PathSegment.

---

### `PathFollower:GetAge` `[server]`

Returns the age since the path was built

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Path age

---

### `PathFollower:GetAllSegments` `[server]`

Returns all of the segments of the given path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{PathSegment}` — A table of tables with Structures/PathSegment.

---

### `PathFollower:GetClosestPosition` `[server]`

The closest position along the path to a position

**Argumentos:**

- `Vector position` — The point we're querying for

**Retorna:**

- `Vector` — The closest position on the path

---

### `PathFollower:GetCurrentGoal` `[server]`

Returns the current goal data. Can return nil if the current goal is invalid, for example immediately after PathFollower:Update.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with Structures/PathSegment.

---

### `PathFollower:GetCursorData` `[server]`

Returns the cursor data

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with 3 keys:
number curvature

Vector forward

Vector pos

---

### `PathFollower:GetCursorPosition` `[server]`

Returns the current progress along the path

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current progress

---

### `PathFollower:GetEnd` `[server]`

Returns the path end position

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The end position

---

### `PathFollower:GetGoalTolerance` `[server]`

Returns how close we can get to the goal to call it done.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The distance we're setting it to

---

### `PathFollower:GetHindrance` `[server]`

Currently always returns NULL due to internal implementation of Lua Nextbots, where nothing is considered a hindrance, so do not try to use.

Returns the entity the bot is currently trying to avoid.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The current path hindrance, if any.

---

### `PathFollower:GetLength` `[server]`

Returns the total length of the path

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The length of the path

---

### `PathFollower:GetMinLookAheadDistance` `[server]`

Returns the minimum range movement goal must be along path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum look ahead distance

---

### `PathFollower:GetPositionOnPath` `[server]`

Returns the vector position of distance along path

**Argumentos:**

- `number distance` — The distance along the path to query

**Retorna:**

- `Vector` — The position

---

### `PathFollower:GetStart` `[server]`

Returns the path start position

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The start position

---

### `PathFollower:Invalidate` `[server]`

Invalidates the current path

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PathFollower:IsValid` `[server]`

Returns true if the path is valid

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Wether the path is valid or not.

---

### `PathFollower:LastSegment` `[server]`

Returns the last segment of the path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with Structures/PathSegment.

---

### `PathFollower:MoveCursor` `[server]`

Moves the cursor by give distance.

For a function that sets the distance, see PathFollower:MoveCursorTo.

**Argumentos:**

- `number distance` — The distance to move the cursor (in relative world units)

**Retorna:**

*(sin retorno)*

---

### `PathFollower:MoveCursorTo` `[server]`

Sets the cursor position to given distance.

For relative distance, see PathFollower:MoveCursor.

**Argumentos:**

- `number distance` — The distance to move the cursor (in world units)

**Retorna:**

*(sin retorno)*

---

### `PathFollower:MoveCursorToClosestPosition` `[server]`

Moves the cursor of the path to the closest position compared to given vector.

**Argumentos:**

- `Vector pos` — 
- `number type` = `0` — Seek type

0 = SEEK_ENTIRE_PATH - Search the entire path length

1 = SEEK_AHEAD - Search from current cursor position forward toward end of path

2 = SEEK_BEHIND - Search from current cursor position backward toward path start
- `number alongLimit` = `0` — 

**Retorna:**

*(sin retorno)*

---

### `PathFollower:MoveCursorToEnd` `[server]`

Moves the cursor to the end of the path

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PathFollower:MoveCursorToStart` `[server]`

Moves the cursor to the end of the path

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PathFollower:NextSegment` `[server]`

Returns the next segment of the path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with Structures/PathSegment.

---

### `PathFollower:PriorSegment` `[server]`

Returns the previous segment of the path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with Structures/PathSegment.

---

### `PathFollower:ResetAge` `[server]`

Resets the age which is retrieved by PathFollower:GetAge to 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `PathFollower:SetGoalTolerance` `[server]`

How close we can get to the goal to call it done

**Argumentos:**

- `number distance` — The distance we're setting it to

**Retorna:**

*(sin retorno)*

---

### `PathFollower:SetMinLookAheadDistance` `[server]`

Sets minimum range movement goal must be along path

**Argumentos:**

- `number mindist` — The minimum look ahead distance

**Retorna:**

*(sin retorno)*

---

### `PathFollower:Update` `[server]`

Move the bot along the path.
player nextbots require CUserCmd:SetForwardMove to move forward along the path

**Argumentos:**

- `NextBot bot` — The bot to update along the path. This can also be a nextbot player (player.CreateNextbot)

**Retorna:**

*(sin retorno)*