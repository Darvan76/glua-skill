# DBinder

---

**Hereda de:** `DButton`

---

Input which can bind a command to a key. Used for binding inputs and outputs of TOOLs.

---


## Miembros (6)


---

### `DBinder:GetSelectedNumber` `[client]`

Gets the code of the key currently bound by the DBinder. Same as DBinder:GetValue. An Global.AccessorFunc

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The key code of the bound key. See Enums/KEY.

*Fuente: `lua/vgui/dbinder.lua:4`*

---

### `DBinder:GetValue` `[client]`

Gets the code of the key currently bound by the DBinder. Same as DBinder:GetSelectedNumber.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The key code of the bound key. See Enums/KEY.

*Fuente: `lua/vgui/dbinder.lua:83`*

---

### `DBinder:OnChange` `[client]`

Called when the player selects a new bind. Meant to be Overridden

**Argumentos:**

- `number iNum` — The new bound key. See input.GetKeyName.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbinder.lua:89`*

---

### `DBinder:SetSelectedNumber` `[client]`

Sets the current key bound by the DBinder, and updates the button's text as well as the ConVar.

**Argumentos:**

- `number keyCode` — The key code of the key to bind. See Enums/KEY.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbinder.lua:41`*

---

### `DBinder:SetValue` `[client]`

Alias of DBinder:SetSelectedNumber.

**Argumentos:**

- `number keyCode` — The key code of the key to bind. See Enums/KEY.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbinder.lua:77`*

---

### `DBinder:UpdateText` `[client]`

Used to set the text of the DBinder to the current key binding, or `NONE`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbinder.lua:15`*