# achievements

---

This library is used internally by Garry's Mod to help keep track of achievement progress and unlock the appropriate achievements once a certain number is reached.

---


## Miembros (16)


---

### `achievements:BalloonPopped` `[client]`

Adds one to the count of balloons burst. Once this count reaches 1000, the 'Popper' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:Count` `[client/menu]`

Returns the amount of achievements currently in Garry's Mod.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of achievements available.

This will include 1 extra hidden/non functional achievement at index 0.

---

### `achievements:EatBall` `[client]`

Adds one to the count of balls eaten. Once this count reaches 200, the 'Ball Eater' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:GetCount` `[client/menu]`

Retrieves progress of given achievement.

**Argumentos:**

- `number achievementID` — The ID of the achievement.

**Retorna:**

- `number` — The numerical progress.

One-time achievements **always** have the progress of 0.

---

### `achievements:GetDesc` `[client/menu]`

Retrieves the description of the given achievement.

**Argumentos:**

- `number achievementID` — The ID of the achievement.

**Retorna:**

- `string` — The description.

---

### `achievements:GetGoal` `[client/menu]`

Retrieves the end progress goal of the given achievement.

**Argumentos:**

- `number achievementID` — The ID of the achievement.

**Retorna:**

- `number` — The end progress goal.

---

### `achievements:GetName` `[client/menu]`

Retrieves the name of the given achievement.

**Argumentos:**

- `number achievementID` — The ID of the achievement.

**Retorna:**

- `string` — The name.

---

### `achievements:IncBaddies` `[client]`

Adds one to the count of baddies killed. Once this count reaches 1000, the 'War Zone' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:IncBystander` `[client]`

Adds one to the count of innocent animals killed. Once this count reaches 1000, the 'Innocent Bystander' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:IncGoodies` `[client]`

Adds one to the count of friendly NPCs killed. Once this count reaches 1000, the 'Bad Friend' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:IsAchieved` `[client/menu]`

Returns whether the given achievement is obtained or not.

**Argumentos:**

- `number achievementID` — The ID of the achievement.

**Retorna:**

- `boolean` — The state.

---

### `achievements:Remover` `[client]`

Adds one to the count of things removed. Once this count reaches 5000, the 'Destroyer' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:SpawnMenuOpen` `[client]`

Adds one to the count of how many times the spawnmenu has been opened. Once this count reaches 100,000, the 'Menu User' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:SpawnedNPC` `[client]`

Adds one to the count of NPCs spawned. Once this count reaches 1000, the 'Procreator' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:SpawnedProp` `[client]`

Adds one to the count of props spawned. Once this count reaches 5000, the 'Creator' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `achievements:SpawnedRagdoll` `[client]`

Adds one to the count of ragdolls spawned. Once this count reaches 2000, the 'Dollhouse' achievement is unlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*