# usermessage

---

You should be using the net instead

The usermessage library is used to receive user messages from the server on the client.

Usermessages have a limit of only 256 bytes!

---


## Miembros (3)


---

### `usermessage:GetTable` `[client/server]`

You should be using net instead

Returns a table of every usermessage hook

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — User message hooks

*Fuente: `lua/includes/modules/usermessage.lua:53`*

---

### `usermessage:Hook` `[client/server]`

You should be using net instead

Sets a hook for the specified to be called when a usermessage with the specified name arrives.

Usermessages have a limit of only 256 bytes!

**Argumentos:**

- `string name` — The message name to hook to.
- `function callback` — The function to be called if the specified message was received.

The object to read your custom data from.
- `vararg preArgs` = `nil` — Arguments that are passed to the callback function when the hook is called.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/usermessage.lua:63`*

---

### `usermessage:IncomingMessage` `[client/server]`

Called by the engine when a usermessage arrives, this method calls the hook function specified by usermessage.Hook if any.

**Argumentos:**

- `string name` — The message name.
- `bf_read msg` — The message.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/usermessage.lua:76`*