# gui

---

The gui library is similar to the input but features functions that are more focused on the mouse's interaction with GUI panels.

---


## Miembros (22)


---

### `gui:ActivateGameUI` `[client/menu]`

Opens the game main menu as if the player pressed their Escape key.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `gui:AddCaption` `[client]`

Pushes text to the closed caption box.
The function will not work, if the console command variable `closecaption` is set to 0.

**Argumentos:**

- `string captionStream` — The caption to emit. See [Closed Captions](https://developer.valvesoftware.com/wiki/Closed_Captions) for more info.

Note the ability to add special commands to captions, such as `` to mark the caption as a sound effect caption, which would be hidden if `cc_subtitles` is set to 1. (To only show dialogue subtitles)
- `number duration` — How long the caption should stay for
- `boolean fromPlayer` = `false` — Is this caption coming from the player?

This is used to give different colors to the caption to differentiate, for example, whether the SMG is fired by the player or an NPC.

**Retorna:**

*(sin retorno)*

---

### `gui:EnableScreenClicker` `[client]`

Enables the mouse cursor without restricting player movement, like using Sandbox's context menu. See vgui.CursorVisible for a function to see if the cursor is visible or not.

Some CUserCmd functions will return incorrect values when this function is active because [the user input is getting overtaken by the vgui system](https://github.com/Facepunch/garrysmod-issues/issues/982#issuecomment-505671531).

**Argumentos:**

- `boolean enabled` — Whether the cursor should be enabled or not. (true = enable, false = disable)

**Retorna:**

*(sin retorno)*

---

### `gui:HideGameUI` `[client/menu]`

Hides the game main menu if it is currently open.

This can only be ran a certain amount of times per second to prevent main menu being completely inaccessible by the player.

Use GM:OnPauseMenuShow to prevent opening the main menu without a one frame flash.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `gui:InternalCursorMoved` `[client/menu]`

Simulates a mouse move with the given deltas.

**Argumentos:**

- `number deltaX` — The movement delta on the x axis.
- `number deltaY` — The movement delta on the y axis.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalKeyCodePressed` `[client/menu]`

Simulates a key press for the given key.

**Argumentos:**

- `number key` — The key, see Enums/KEY.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalKeyCodeReleased` `[client/menu]`

Simulates a key release for the given key.

**Argumentos:**

- `number key` — The key, see Enums/KEY.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalKeyCodeTyped` `[client/menu]`

Simulates a key type typing to the specified key.

**Argumentos:**

- `number key` — The key, see Enums/KEY.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalKeyTyped` `[client/menu]`

Simulates an ASCII symbol writing.
Use to write text in the chat or in VGUI.
Doesn't work while the main menu is open!

**Argumentos:**

- `number code` — ASCII code of symbol, see [this chart](https://files.facepunch.com/wiki/files/ab571/8dc389806d65b98.gif).

**Retorna:**

*(sin retorno)*

---

### `gui:InternalMouseDoublePressed` `[client/menu]`

Simulates a double mouse key press for the given mouse key.

**Argumentos:**

- `number key` — The key, see Enums/MOUSE.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalMousePressed` `[client/menu]`

Simulates a mouse key press for the given mouse key.

**Argumentos:**

- `number key` — The key, see Enums/MOUSE.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalMouseReleased` `[client/menu]`

Simulates a mouse key release for the given mouse key.

**Argumentos:**

- `number key` — The key, see Enums/MOUSE.

**Retorna:**

*(sin retorno)*

---

### `gui:InternalMouseWheeled` `[client/menu]`

Simulates a mouse wheel scroll with the given delta.

**Argumentos:**

- `number delta` — The amount of scrolling to simulate.

**Retorna:**

*(sin retorno)*

---

### `gui:IsConsoleVisible` `[client/menu]`

Returns whether the console is visible or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the console is visible or not.

---

### `gui:IsGameUIVisible` `[client/menu]`

Returns whether the game menu overlay ( main menu ) is open or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the game menu overlay ( main menu ) is open or not

---

### `gui:MousePos` `[client/menu]`

Use input.GetCursorPos instead.

Returns the cursor's position on the screen, or 0, 0 if cursor is not visible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — mouseX
- `number` — mouseY

---

### `gui:MouseX` `[client/menu]`

Returns x component of the mouse position.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — mouseX

---

### `gui:MouseY` `[client/menu]`

Returns y component of the mouse position.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — mouseY

---

### `gui:OpenURL` `[client/menu]`

Opens specified URL in the steam overlay browser.

When called clientside, user will be asked for confirmation before the website will open.

**Argumentos:**

- `string url` — URL to open, it has to start with either `http://` or `https://`.

**Retorna:**

*(sin retorno)*

---

### `gui:ScreenToVector` `[client]`

Converts the specified screen position to a **direction** vector local to the player's view. A related function is Vector:ToScreen, which translates a 3D position to a screen coordinate.

util.AimVector is a more generic version of this, using a custom view instead of the player's current view.

**Argumentos:**

- `number x` — X coordinate on the screen.
- `number y` — Y coordinate on the screen.

**Retorna:**

- `Vector` — Direction

---

### `gui:SetMousePos` `[client/menu]`

Use input.SetCursorPos instead.
Sets the cursor's position on the screen, relative to the topleft corner of the window

**Argumentos:**

- `number mouseX` — The X coordinate to move the cursor to.
- `number mouseY` — The Y coordinate to move the cursor to.

**Retorna:**

*(sin retorno)*

---

### `gui:ShowConsole` `[menu]`

Shows console in the game UI.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*