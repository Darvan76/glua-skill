# NEXTBOT

---


## Miembros (17)


---

### `NEXTBOT:BehaveStart` `[server]`

Called to initialize the behaviour.

This is called automatically when the NextBot is created, you should not call it manually.

You shouldn't override this unless you know what you are doing - it's used to kick off the coroutine that runs the bot's behaviour. See NEXTBOT:RunBehaviour instead.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:2`*

---

### `NEXTBOT:BehaveUpdate` `[server]`

Called to update the bot's behaviour.

If you override this hook you must call `coroutine.resume(self.BehaveThread)` to resume the NEXTBOT:RunBehaviour Behavior

**Argumentos:**

- `number interval` — How long since the last update

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:23`*

---

### `NEXTBOT:BodyUpdate` `[server]`

Called to update the bot's animation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:52`*

---

### `NEXTBOT:OnContact` `[server]`

Called when the nextbot touches another entity.

**Argumentos:**

- `Entity ent` — The entity the nextbot came in contact with.

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnEntitySight` `[server]`

Called when the nextbot NPC sees another Nextbot NPC or a Player.
This hook will only run after NextBot:SetFOV or other vision related function is called on the nextbot. See NextBot:IsAbleToSee for more details.

**Argumentos:**

- `Entity ent` — the entity that was seen

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnEntitySightLost` `[server]`

Called when the nextbot NPC loses sight of another Nextbot NPC or a Player.
This hook will only run after NextBot:SetFOV or other vision related function is called on the nextbot. See NextBot:IsAbleToSee for more details.

**Argumentos:**

- `Entity ent` — the entity that we lost sight of

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnIgnite` `[server]`

Called when the bot is ignited.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnInjured` `[server]`

Called when the bot gets hurt. This is a good place to play hurt sounds or voice lines.

**Argumentos:**

- `CTakeDamageInfo info` — The damage info

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:130`*

---

### `NEXTBOT:OnKilled` `[server]`

Called when the bot gets killed.

**Argumentos:**

- `CTakeDamageInfo info` — The damage info

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:140`*

---

### `NEXTBOT:OnLandOnGround` `[server]`

Called when the bot's feet return to the ground.

**Argumentos:**

- `Entity ent` — The entity the nextbot has landed on.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:94`*

---

### `NEXTBOT:OnLeaveGround` `[server]`

Called when the bot's feet leave the ground - for whatever reason.

**Argumentos:**

- `Entity ent` — The entity the bot "jumped" from.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:82`*

---

### `NEXTBOT:OnNavAreaChanged` `[server]`

Called when the nextbot enters a new navigation area.

**Argumentos:**

- `CNavArea old` — The navigation area the bot just left
- `CNavArea new` — The navigation area the bot just entered

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnOtherKilled` `[server]`

Called when someone else or something else has been killed.

**Argumentos:**

- `Entity victim` — The victim that was killed
- `CTakeDamageInfo info` — The damage info

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnStuck` `[server]`

Called when the bot thinks it is stuck.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:106`*

---

### `NEXTBOT:OnTraceAttack` `[server]`

Called when a trace attack is done against the nextbot, allowing override of the damage being dealt by altering the CTakeDamageInfo.

This is called before NEXTBOT:OnInjured.

**Argumentos:**

- `CTakeDamageInfo info` — The damage info
- `Vector dir` — The direction the damage goes in
- `table trace` — The Structures/TraceResult of the attack, containing the hitgroup.

**Retorna:**

*(sin retorno)*

---

### `NEXTBOT:OnUnStuck` `[server]`

Called when the bot thinks it is un-stuck.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_nextbot/sv_nextbot.lua:118`*

---

### `NEXTBOT:RunBehaviour` `[server]`

A hook called to process nextbot logic.

This hook runs in a coroutine by default. It will only be called if NEXTBOT:BehaveStart is not overriden.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*