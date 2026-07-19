# ai

---

The ai library.

---


## Miembros (6)


---

### `ai:GetNodeCount` `[server]`

Returns the number of AI nodes on the map, used by the base game NPCs.

For NextBots, see navmesh.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The node count.

---

### `ai:GetScheduleID` `[server]`

Translates a schedule name to its corresponding ID.

**Argumentos:**

- `string sched` — Then schedule name. In most cases, this will be the same as the Enums/SCHED name.

**Retorna:**

- `number` — The schedule ID, see Enums/SCHED. Returns -1 if the schedule name isn't valid.

---

### `ai:GetSquadLeader` `[server]`

Returns the squad leader of the given squad.

**Argumentos:**

- `string squad` — The squad name.

**Retorna:**

- `NPC` — The squad leader.

---

### `ai:GetSquadMemberCount` `[server]`

Returns the amount of members a given squad has. See also ai.GetSquadMembers.

**Argumentos:**

- `string squad` — The squad name.

**Retorna:**

- `number` — The member count.

---

### `ai:GetSquadMembers` `[server]`

Returns all members of a given squad. See also ai.GetSquadMemberCount and NPC:GetSquad.

**Argumentos:**

- `string squad` — The squad name.

**Retorna:**

- `table` — A table of NPCs in the given squad.

---

### `ai:GetTaskID` `[server]`

Translates a task name to its corresponding ID.

**Argumentos:**

- `string task` — The task name.

**Retorna:**

- `number` — The task ID, see [ai_task.h](https://github.com/ValveSoftware/source-sdk-2013/blob/55ed12f8d1eb6887d348be03aee5573d44177ffb/mp/src/game/server/ai_task.h#L89-L502). Returns -1 if the schedule name isn't valid.