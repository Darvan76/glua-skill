# DRIVE

---


## Miembros (1)


---

### `DRIVE:CalcView` `[client]`

Optionally alter the player's view if they are using this drive mode.

This hook is called from the default implementation of GM:CalcView which is [here](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/gamemodes/base/gamemode/cl_init.lua#L387-L395). Therefore, it will not be called if any other hook added to `CalcView` returns any value, or if the current gamemode overrides the default hook and does not call drive.CalcView.

**Argumentos:**

- `table{CamData} view_in` — The view, see Structures/CamData. Modify this table.

**Retorna:**

*(sin retorno)*