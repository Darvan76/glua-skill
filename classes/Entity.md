# ENTITY

---


## Miembros (3)


---

### `ENTITY:GetNPCClass` `[server]`

Gets the NPC classification. Internally gets the `m_iClass` variable which is polled by the engine. This will be equivalent to NPC:Classify.

This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — See Enums/CLASS

*Fuente: `gamemodes/base/entities/entities/base_ai/init.lua:14`*

---

### `ENTITY:SetMaxYawSpeed` `[server]`

Sets the NPC max yaw speed. Internally sets the `m_fMaxYawSpeed` variable which is polled by the engine.

This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `number maxyaw` — The new max yaw value to set

**Retorna:**

*(sin retorno)*

---

### `ENTITY:SetNPCClass` `[server]`

Sets the NPC classification. Internally sets the `m_iClass` variable which is polled by the engine.

This is a helper function only available if your SENT is based on `base_ai`

**Argumentos:**

- `number classification` — The Enums/CLASS

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/base/entities/entities/base_ai/init.lua:14`*