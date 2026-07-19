# CtrlNumPad

---

CtrlNumPad is a VGUI element designed primarily for SpawnMenu and ControlPanel. It is used to create a DBinder with at least one DLabel. Each change made by the player in the `CtrlNumPad` acts on a previously defined ConVar.

To retrieve the panels associated with this panel:
* To retrieve the DBinder created, you can use this variable associated with the panel: `PANEL.NumPad1`
* To retrieve the first DLabel created, you can use this variable associated with the panel: `PANEL.Label1`
* To retrieve the second DLabel created, you can use this variable associated with the panel: `PANEL.Label2`

By default, the DLabel:SetDark function is activated on both DLabels.

To retrieve the value of the `CtrlNumPad` you can use these functions : Player:GetInfoNum, CtrlNumPad:GetValue1 or CtrlNumPad:GetValue2

---


## Miembros (6)


---

### `CtrlNumPad:GetValue1` `[client]`

The value (key bind) of the first DBinder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{KEY} keyBind` — The key bind or `KEY_NONE`.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/ctrlnumpad.lua:58`*

---

### `CtrlNumPad:GetValue2` `[client]`

The value (key bind) of the second DBinder, if it's enabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number{KEY} keyBind` — The key bind or `KEY_NONE`.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/ctrlnumpad.lua:66`*

---

### `CtrlNumPad:SetConVar1` `[client]`

The name of the convar that will store the key code for player selected key of the left key binder.

**Argumentos:**

- `string cvar` — The convar that will be used in the event of a key change by a player.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/ctrlnumpad.lua:45`*

---

### `CtrlNumPad:SetConVar2` `[client]`

If set and label2 is set, the name of the convar that will store the key code for player selected key of the right key binder.

**Argumentos:**

- `string cvar` — The convar that will be used in the event of a key change by a player.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/ctrlnumpad.lua:53`*

---

### `CtrlNumPad:SetLabel1` `[client]`

The label for the left key binder.

**Argumentos:**

- `string txt` — The label for the left key binder.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/ctrlnumpad.lua:29`*

---

### `CtrlNumPad:SetLabel2` `[client]`

If set and convar2 is set, the label for the right key binder.

**Argumentos:**

- `string txt` — The label for the right key binder.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/controls/ctrlnumpad.lua:37`*