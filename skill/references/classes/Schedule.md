# Schedule

---

The object returned by ai_schedule.New.

---


## Miembros (6)


---

### `Schedule:AddTask` `[server]`

Adds a task to the schedule. See also Schedule:AddTaskEx if you wish to customize task start and run function names.

See also ENTITY:StartSchedule, NPC:StartEngineTask, and NPC:RunEngineTask.

**Argumentos:**

- `string taskname` — Custom task name
- `any taskdata` — Task data to be passed into the NPC's functions

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_schedule.lua:56`*

---

### `Schedule:AddTaskEx` `[server]`

Adds a task to the schedule with completely custom function names.

See also Schedule:AddTask.

**Argumentos:**

- `string start` — The full name of a function on the entity's table to be ran when the task is started.
- `string run` — The full name of a function on the entity's table to be ran when the task is continuously running.
- `number data` — Task data to be passed into the NPC's functions

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_schedule.lua:70`*

---

### `Schedule:EngTask` `[server]`

Adds an engine task to the schedule.

**Argumentos:**

- `string taskname` — Task name, see [ai_task.h](https://github.com/ValveSoftware/source-sdk-2013/blob/55ed12f8d1eb6887d348be03aee5573d44177ffb/mp/src/game/server/ai_task.h#L89-L502)
- `number taskdata` — Task data, can be a float.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_schedule.lua:36`*

---

### `Schedule:GetTask` `[server]`

Returns the task at the given index.

**Argumentos:**

- `number num` — Task index.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_schedule.lua:82`*

---

### `Schedule:Init` `[server]`

Initialises the Schedule. Called by ai_schedule.New when the Schedule is created.

**Argumentos:**

- `string debugName` — The name passed from ai_schedule.New.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_schedule.lua:21`*

---

### `Schedule:NumTasks` `[server]`

Returns the number of tasks in the schedule.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of tasks in this schedule.

*Fuente: `lua/includes/modules/ai_schedule.lua:78`*