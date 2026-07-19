# notification

---

Used to display notifications on the screen (mid-right).

---


## Miembros (3)


---

### `notification:AddLegacy` `[client]`

Adds a standard notification to your screen.

**Argumentos:**

- `string text` — The text to display.
- `number type` — Determines the notification method (e.g. icon) for displaying the notification. See the Enums/NOTIFY.
- `number length` — The number of seconds to display the notification for.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/notification.lua:66`*

---

### `notification:AddProgress` `[client]`

Adds a notification with an animated progress bar.

**Argumentos:**

- `any id` — Can be any type. It's used as an index.
- `string strText` — The text to show
- `number frac` = `nil` — If set, overrides the progress bar animation with given percentage. Range is 0 to 1.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/notification.lua:26`*

---

### `notification:Kill` `[client]`

Removes the notification after 0.8 seconds.

**Argumentos:**

- `any uid` — The unique ID of the notification

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/notification.lua:57`*