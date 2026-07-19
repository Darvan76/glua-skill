# NextBot

---

NextBots are a new system to create NPCs in the Source Engine, utilizing the more powerful navmesh system for navigation over the old node based system.

This page lists all possible functions usable with NextBots.

See NextBot NPC Creation for more information on how to create NextBot NPCs.

---


## Miembros (20)


---

### `NextBot:BecomeRagdoll` `[server]`

Become a ragdoll and remove the entity.

**Argumentos:**

- `CTakeDamageInfo info` — Damage info passed from an onkilled event

**Retorna:**

- `Entity` — The created ragdoll, if any.

---

### `NextBot:BodyMoveXY` `[server]`

Should only be called in NEXTBOT:BodyUpdate. This sets the `move_x` and `move_y` pose parameters of the bot to fit how they're currently moving, sets the animation speed (Entity:GetPlaybackRate) to suit the ground speed, and calls Entity:FrameAdvance.

This function might cause crashes with some activities.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NextBot:ClearLastKnownArea` `[server]`

Clears this bot's last known area. See NextBot:GetLastKnownArea.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NextBot:FindSpot` `[server]`

Like NextBot:FindSpots but only returns a vector.

**Argumentos:**

- `string type` — Either `"random"`, `"near"`, `"far"`.
- `table options` — This table should contain the search info.
* string type - The type (Only `hiding` for now)
* Vector pos - the position to search.
* number radius - the radius to search.
* number stepup - the highest step to step up.
* number stepdown - the highest we can step down without being hurt.

**Retorna:**

- `Vector` — If it finds a spot it will return a vector. If not it will return nil.

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:201`*

---

### `NextBot:FindSpots` `[server]`

Returns a table of hiding spots.

**Argumentos:**

- `table specs` — This table should contain the search info.
* string type - The type (optional, only `hiding` supported)
* Vector pos - the position to search.
* number radius - the radius to search.
* number stepup - the highest step to step up.
* number stepdown - the highest we can step down without being hurt.

**Retorna:**

- `table` — An unsorted table of tables containing:
* Vector vector - The position of the hiding spot
* number distance - the distance to that position

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:189`*

---

### `NextBot:GetActivity` `[server]`

Returns the currently running activity

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current activity

---

### `NextBot:GetFOV` `[server]`

Returns the Field of View of the Nextbot NPC, used for its vision functionality, such as NextBot:IsAbleToSee.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number fov` — The current FOV of the nextbot

---

### `NextBot:GetLastKnownArea` `[server]`

Returns this bots last known area. See also NextBot:ClearLastKnownArea.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The last area the bot is known to have been in.

---

### `NextBot:GetMaxVisionRange` `[server]`

Returns the maximum range the nextbot can see other nextbots/players at. See NextBot:IsAbleToSee.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current vision range

---

### `NextBot:GetRangeSquaredTo` `[server]`

Returns squared distance to an entity or a position.

See also NextBot:GetRangeTo.

**Argumentos:**

- `Vector to` — The position to measure distance to. Can be an entity.

**Retorna:**

- `number` — The squared distance

---

### `NextBot:GetRangeTo` `[server]`

Returns the distance to an entity or position.

See also NextBot:GetRangeSquaredTo.

**Argumentos:**

- `Vector to` — The position to measure distance to. Can be an entity.

**Retorna:**

- `number` — The distance

---

### `NextBot:GetSolidMask` `[server]`

Returns the solid mask for given NextBot.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The solid mask, see Enums/CONTENTS and Enums/MASK

---

### `NextBot:HandleStuck` `[server]`

Called from Lua when the NPC is stuck. This should only be called from the behaviour coroutine - so if you want to override this function and do something special that yields - then go for it.

You should always call self.loco:ClearStuck() in this function to reset the stuck status - so it knows it's unstuck. See CLuaLocomotion:ClearStuck.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:265`*

---

### `NextBot:IsAbleToSee` `[server]`

Returns if the Nextbot NPC can see the give entity or not.

Using this function creates the nextbot vision interface which will cause a significant performance hit!

**Argumentos:**

- `Entity ent` — The entity to test if we can see
- `number useFOV` = `true` — Whether to use the Field of View of the Nextbot

**Retorna:**

- `boolean` — If the nextbot can see or not

---

### `NextBot:MoveToPos` `[server]`

To be called in the behaviour coroutine only! Will yield until the bot has reached the goal or is stuck

**Argumentos:**

- `Vector pos` — The position we want to get to
- `table options` — A table containing a bunch of tweakable options.
* number lookahead - Minimum look ahead distance.
* number tolerance - How close we must be to the goal before it can be considered complete.
* boolean draw - Draw the path. Only visible on listen servers and single player.
* number maxage - Maximum age of the path before it times out.
* number repath - Rebuilds the path after this number of seconds.

**Retorna:**

- `string` — Either `"failed"`, `"stuck"`, `"timeout"` or `"ok"` - depending on how the NPC got on

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:299`*

---

### `NextBot:PlaySequenceAndWait` `[server]`

To be called in the behaviour coroutine only! Plays an animation sequence and waits for it to end before returning.

**Argumentos:**

- `string name` — The sequence name
- `number speed` = `1` — Playback Rate of that sequence

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:298`*

---

### `NextBot:SetFOV` `[server]`

Sets the Field of View for the Nextbot NPC, used for its vision functionality, such as NextBot:IsAbleToSee.

**Argumentos:**

- `number fov` — The new FOV

**Retorna:**

*(sin retorno)*

---

### `NextBot:SetMaxVisionRange` `[server]`

Sets the maximum range the nextbot can see other nextbots/players at. See NextBot:IsAbleToSee.

**Argumentos:**

- `number range` — The new vision range to set.

**Retorna:**

*(sin retorno)*

---

### `NextBot:SetSolidMask` `[server]`

Sets the solid mask for given NextBot.

The default solid mask of a NextBot is Enums/MASK.

**Argumentos:**

- `number mask` — The new mask, see Enums/CONTENTS and Enums/MASK

**Retorna:**

*(sin retorno)*

---

### `NextBot:StartActivity` `[server]`

Start doing an activity (animation).

This function may not produce the desired result if Entity:SetModel has not yet been called on the nextbot entity

**Argumentos:**

- `number activity` — One of the Enums/ACT

**Retorna:**

*(sin retorno)*