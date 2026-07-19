# input

---

The input library allows you to gather information about the clients input devices (mouse &amp; keyboard), such as the cursor position and whether a key is pressed or not.

---


## Miembros (23)


---

### `input:CheckKeyTrapping` `[client/menu]`

Returns the last key captured by key trapping.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The key, see Enums/KEY.

---

### `input:GetAnalogValue` `[client/menu]`

Returns the digital value of an analog stick on the current (set up via convars) controller.

**Argumentos:**

- `number{ANALOG} axis` — The analog axis to poll. See Enums/ANALOG.

**Retorna:**

- `number` — The digital value.
A joystick axis returns `-32768` when it's pushed completely up/completely left, &amp; returns `32767` when it's pushed completely down/completely right.

A mouse wheel starts @ `0` &amp; increases by `1` for every unit of scroll up/decreases by `1` for every unit of scroll down.

A mouse axis is `0` when the arrow is @ the top or left of the screen; When the arrow is @ the bottom right of the screen, the mouse y axis is the height of the screen &amp; the mouse x axis is the width of the screen (in pixels). Note that in game, the “arrow” stays near the middle of the screen.

Trigger axis always return `0` (verify).

---

### `input:GetCursorPos` `[client/menu]`

Returns the cursor's position on the screen.
On macOS, the cursor isn't locked on the middle of the screen which causes a significant offset of the positions returned by this function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The cursors position on the X axis.
- `number` — The cursors position on the Y axis.

---

### `input:GetKeyCode` `[client/menu]`

Gets the button code from a button name. This is opposite of input.GetKeyName.

**Argumentos:**

- `string button` — The internal button name, such as E or SHIFT.

**Retorna:**

- `number{BUTTON_CODE}` — The button code, see Enums/BUTTON_CODE.

---

### `input:GetKeyName` `[client/menu]`

Gets the button name from a numeric button code. The name needs to be translated with language.GetPhrase before being displayed.

Despite the name of the function, this also works for the full range of keys in Enums/BUTTON_CODE.

**Argumentos:**

- `number{BUTTON_CODE} button` — The button, see Enums/BUTTON_CODE.

**Retorna:**

- `string` — Button name.

---

### `input:IsButtonDown` `[client/menu]`

Gets whether the specified button code is down.

Unlike input.IsKeyDown this can also detect joystick presses from Enums/JOYSTICK.

**Argumentos:**

- `number{BUTTON_CODE} button` — The button, valid values are in the range of Enums/BUTTON_CODE.

**Retorna:**

- `boolean` — Is the button down?

---

### `input:IsControlDown` `[client/menu]`

Returns whether a control key is being pressed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is Ctrl key down or not?

---

### `input:IsKeyDown` `[client/menu]`

Gets whether a key is down.

**Argumentos:**

- `number key` — The key, see Enums/KEY.

**Retorna:**

- `boolean` — Is the key down?

---

### `input:IsKeyTrapping` `[client/menu]`

Returns whether key trapping is activate and the next key press will be captured.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether key trapping active or not.

---

### `input:IsMouseDown` `[client/menu]`

Gets whether a mouse button is down.

**Argumentos:**

- `number mouseKey` — The key, see Enums/MOUSE.

**Retorna:**

- `boolean` — Is the key down?

---

### `input:IsShiftDown` `[client/menu]`

Gets whether a shift key is being pressed

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — isDown

---

### `input:LookupBinding` `[client/menu]`

Returns the client's bound key for the specified console command. If the player has multiple keys bound to a single command, then the key with the lowest Enums/BUTTON_CODE will be returned.

**Argumentos:**

- `string binding` — The binding name
- `boolean exact` = `false` — True to disable automatic stripping of a single leading `+` character

**Retorna:**

- `string` — The first key found with that binding or no value if no key with given binding was found.

See also input.GetKeyCode.

---

### `input:LookupKeyBinding` `[client/menu]`

Returns the bind string that the given key is bound to.

**Argumentos:**

- `number{BUTTON_CODE} key` — Key from Enums/BUTTON_CODE

**Retorna:**

- `string` — The bind string of the given key.

---

### `input:SelectWeapon` `[client]`

Switches to the provided weapon on the next CUserCmd generation/CreateMove call. Direct binding to [CInput::MakeWeaponSelection](https://github.com/ValveSoftware/source-sdk-2013/blob/39f6dde8fbc238727c020d13b05ecadd31bda4c0/src/game/client/in_main.cpp#L989-L992).

**Argumentos:**

- `Weapon weapon` — The weapon entity to switch to.

**Retorna:**

*(sin retorno)*

---

### `input:SetCursorPos` `[client/menu]`

Sets the cursor's position on the screen, relative to the topleft corner of the window

**Argumentos:**

- `number mouseX` — X coordinate for mouse position
- `number mouseY` — Y coordinate for mouse position

**Retorna:**

*(sin retorno)*

---

### `input:StartKeyTrapping` `[client/menu]`

Begins waiting for a key to be pressed so we can save it for input.CheckKeyTrapping. Used by the DBinder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `input:TranslateAlias` `[client/menu]`

Translates a console command alias, basically reverse of the `alias` console command.

**Argumentos:**

- `string command` — The alias to lookup.

**Retorna:**

- `string` — The command(s) this alias will execute if ran, or nil if the alias doesn't exist.

---

### `input:WasKeyPressed` `[client/menu]`

Returns whether a key was initially pressed in the same frame this function was called.

This function only works in Move hooks, and will detect key presses even in main menu or when a typing in a text field.

**Argumentos:**

- `number key` — The key, see Enums/KEY.

**Retorna:**

- `boolean` — True if the key was initially pressed the same frame that this function was called, false otherwise.

---

### `input:WasKeyReleased` `[client/menu]`

Returns whether a key was released in the same frame this function was called.

This function only works in Move hooks, and will detect key releases even in main menu or when a typing in a text field.

**Argumentos:**

- `number key` — The key, see Enums/KEY.

**Retorna:**

- `boolean` — True if the key was released the same frame that this function was called, false otherwise.

---

### `input:WasKeyTyped` `[client/menu]`

Returns whether the key is being held down or not.

This function only works in Move hooks, and will detect key events even in main menu or when a typing in a text field.

**Argumentos:**

- `number key` — The key to test, see Enums/KEY

**Retorna:**

- `boolean` — Whether the key is being held down or not.

---

### `input:WasMouseDoublePressed` `[client/menu]`

Returns whether a mouse key was double pressed in the same frame this function was called.

If this function returns true, input.WasMousePressed will return false.

This function only works in Move hooks, and will detect mouse events even in main menu or when a typing in a text field.

**Argumentos:**

- `number button` — The mouse button to test, see Enums/MOUSE

**Retorna:**

- `boolean` — Whether the mouse key was double pressed or not.

---

### `input:WasMousePressed` `[client/menu]`

Returns whether a mouse key was initially pressed in the same frame this function was called.

If input.WasMouseDoublePressed returns true, this function will return false.

This function only works in Move hooks, and will detect mouse events even in main menu or when a typing in a text field.

**Argumentos:**

- `number key` — The key, see Enums/MOUSE

**Retorna:**

- `boolean` — True if the mouse key was initially pressed the same frame that this function was called, false otherwise.

---

### `input:WasMouseReleased` `[client/menu]`

Returns whether a mouse key was released in the same frame this function was called.

This function only works in Move hooks, and will detect mouse events even in main menu or when a typing in a text field.

**Argumentos:**

- `number key` — The key to test, see Enums/MOUSE

**Retorna:**

- `boolean` — True if the mouse key was released the same frame that this function was called, false otherwise.