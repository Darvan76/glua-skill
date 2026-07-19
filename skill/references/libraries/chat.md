# chat

---

The chat library's purpose is to interface with the default chatbox.

---


## Miembros (6)


---

### `chat:AddText` `[client]`

Adds text to the local player's chat box (which only they can read).

**Argumentos:**

- `vararg arguments` — The message to be added to the chat box.

Arguments can be:
* Color - Will set the color for all following strings until the next Color argument.
* string - Text to be added to the chat box.
* Player - Adds the name of the player in the player's team color to the chat box.
* any - Any other type, such as Entity will be converted to string and added as text.

These argument types can be combined to create formatted messages.

**Retorna:**

*(sin retorno)*

---

### `chat:Close` `[client]`

Closes the chat window.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `chat:GetChatBoxPos` `[client]`

Returns the chatbox position.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The X coordinate of the chatbox's position.
- `number` — The Y coordinate of the chatbox's position.

---

### `chat:GetChatBoxSize` `[client]`

Returns the chatbox size.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The width of the chatbox.
- `number` — The height of the chatbox.

---

### `chat:Open` `[client]`

Opens the chat window.

**Argumentos:**

- `number mode` — If equals 1, opens public chat, otherwise opens team chat.

**Retorna:**

*(sin retorno)*

---

### `chat:PlaySound` `[client]`

Plays the chat "tick" sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*