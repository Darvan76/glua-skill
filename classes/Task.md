# Task

---

A single AI task. Returned by ai_task.New.

---


## Miembros (9)


---

### `Task:Init` `[server]`

Initialises the AI task. Called by ai_task.New.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:29`*

---

### `Task:InitEngine` `[server]`

Initialises the AI task as an engine task.

**Argumentos:**

- `string taskname` — The name of the task.
- `number taskdata` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:36`*

---

### `Task:InitFunctionName` `[server]`

Initialises the AI task as NPC method-based.

**Argumentos:**

- `string startname` — The name of the NPC method to call on task start.
- `string runname` — The name of the NPC method to call on task run.
- `number taskdata` — 

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:56`*

---

### `Task:IsEngineType` `[server]`

Determines if the task is an engine task (`TYPE_ENGINE`, 1).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:67`*

---

### `Task:IsFNameType` `[server]`

Determines if the task is an NPC method-based task (`TYPE_FNAME`, 2).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:75`*

---

### `Task:Run` `[server]`

Runs the AI task.

**Argumentos:**

- `NPC target` — The NPC to run the task on.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:112`*

---

### `Task:Run_FName` `[server]`

Runs the AI task as an NPC method. This requires the task to be of type `TYPE_FNAME`.

**Argumentos:**

- `NPC target` — The NPC to run the task on.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:125`*

---

### `Task:Start` `[server]`

Starts the AI task.

**Argumentos:**

- `NPC target` — The NPC to start the task on.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:83`*

---

### `Task:Start_FName` `[server]`

Starts the AI task as an NPC method.

**Argumentos:**

- `NPC target` — The NPC to start the task on.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/ai_task.lua:99`*