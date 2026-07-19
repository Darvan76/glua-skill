# gameevent

---

Used to interface with the built-in game events system.

All Serverside gameevents are networked and called clientside. It could happen that a gameevent is called twice because of this like gameevent/OnRequestFullUpdate.

The following is a list of all available game events.

---


## Miembros (1)


---

### `gameevent:Listen` `[client/server]`

Adds a [game event](gameevent) listener, creating a new hook using the hook library, which can be listened to via hook.Add with the given `eventName` as event.

All gameevents are called in the **Menu State**, but if you want to use them you need to use some DLL(like [this](https://github.com/RaphaelIT7/gmod-gameevent) one) or you need to create your own.

**Argumentos:**

- `string eventName` — The event to listen to. List of valid events (with examples) can be found [here](gameevent).

**Retorna:**

*(sin retorno)*