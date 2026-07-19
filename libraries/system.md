# system

---

The system library provides functions that allow you to gather information about the system running the game, such as operating system, uptime and battery level.

---


## Miembros (11)


---

### `system:AppTime` `[client/menu/server]`

Returns the total uptime of the current application as reported by Steam.

This will return a similar value to Global.SysTime.

This function does not work on Dedicated Servers and will instead return no value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Seconds of game uptime as an integer.

---

### `system:BatteryPower` `[client/menu/server]`

Returns the current battery power.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 0-100 if a battery (laptop, UPS, etc) is present.

Will instead return 255 if plugged in without a battery.

---

### `system:FlashWindow` `[client/menu]`

Flashes the window, turning the border to white briefly

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `system:GetCountry` `[client/menu/server]`

Returns the country code of this computer, determined by the IP of the client. Uses the steamworks API function `SteamUtils()-&gt;GetIPCountry()`.

This function does not work on Dedicated Servers and will instead return no value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Two-letter country code, using [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard.

---

### `system:HasFocus` `[client/menu/server]`

Returns whether or not the game window has focus.

This function does not work on dedicated servers and will instead return no value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the game window has focus.

---

### `system:IsLinux` `[client/menu/server]`

Returns whether the current OS is Linux.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the game is running on Linux.

---

### `system:IsOSX` `[client/menu/server]`

Returns whether the current OS is OSX.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the game is running on OSX.

---

### `system:IsWindowed` `[client/menu]`

Returns whether the game is being run in a window or in fullscreen (you can change this by opening the menu, clicking 'Options', then clicking the 'Video' tab, and changing the Display Mode using the dropdown menu):

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the game running in a window?

---

### `system:IsWindows` `[client/menu/server]`

Returns whether the current OS is Windows.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the system the game runs on is Windows or not.

---

### `system:SteamTime` `[client/menu/server]`

Returns the synchronized Steam time. This is the number of seconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time).

This function does not work on Dedicated Servers and will instead return no value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current Steam-synchronized Unix time.

---

### `system:UpTime` `[client/menu/server]`

Returns the amount of seconds since the Steam user last moved their mouse.

This is a direct binding to ISteamUtils-&gt;GetSecondsSinceComputerActive, and is most likely related to Steam's automatic "Away" online status.

This function does not work on Dedicated Servers and will instead return no value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of seconds since the Steam user last moved their mouse.