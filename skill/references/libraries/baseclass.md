# baseclass

---

The baseclass library. Used to lookup a field from a metatable.

---


## Miembros (2)


---

### `baseclass:Get` `[client/menu/server]`

Gets the base class of an an object.

This is used not just by entities, but also by widgets, panels, drive modes, weapons and gamemodes (with "gamemode_" prefix).

The keyword **DEFINE_BASECLASS** translates into a call to this function. In the engine, it is replaced with:

```lua
local BaseClass = baseclass.Get
```

You should prefer using this instead of `self.BaseClass` to avoid infinite recursion.

For more information, including usage examples, see the BaseClasses reference page.

**Argumentos:**

- `string name` — The child class.

**Retorna:**

- `table` — The base class's meta table.

*Fuente: `lua/includes/modules/baseclass.lua:32`*

---

### `baseclass:Set` `[client/menu/server]`

Add a new base class that can be derived by others. This is done automatically for:
* [panels](vgui.Register)
* [drive modes](drive.Register)
* [entities and widgets](scripted_ents.Register)
* [weapons](weapons.Register)
* [gamemodes](gamemode.Register) (with prefix "gamemode_")

For more information, including usage examples, see the BaseClasses reference page.

**Argumentos:**

- `string name` — The name of this base class. Must be completely unique.
- `table tab` — The base class.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/baseclass.lua:43`*