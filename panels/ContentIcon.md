# ContentIcon

---

**Hereda de:** `DButton`

---

The spawn icon used for SWEPs and other SENTs, commonly featured as part of the spawn menu.
Do note that at least one of your ContentIcon's parents must either be an EditablePanel or derived from it
(like a DFrame, for example), else it won't be able to focus and thus be unclickable.

This control only exists in Sandbox derived gamemodes.

---


## Miembros (12)


---

### `ContentIcon:GetColor` `[client]`

An Global.AccessorFunc that returns the color set by ContentIcon:SetColor

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — See Color

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:13`*

---

### `ContentIcon:GetContentType` `[client]`

An Global.AccessorFunc that returns the content type used to save and restore the content icon in a spawnlist.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The content type, for example "entity" or "weapon".

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:14`*

---

### `ContentIcon:GetNPCWeapon` `[client]`

An Global.AccessorFunc that returns a table of weapon classes for the content icon with "NPC" content type to be randomly chosen from when user tries to spawn the NPC.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of weapon classes to be chosen from when user tries to spawn the NPC.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:16`*

---

### `ContentIcon:GetSpawnName` `[client]`

An Global.AccessorFunc that returns the internal "name" for the content icon, usually a class name for an entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Internal "name" to be used when user left clicks the icon.

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:15`*

---

### `ContentIcon:OpenMenu` `[client]`

A hook for override, by default does nothing. Called when user right clicks on the content icon, you are supposed to open a Global.DermaMenu here with additional options.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:104`*

---

### `ContentIcon:SetAdminOnly` `[client]`

An Global.AccessorFunc that sets whether the content item is admin only. This makes the icon to display a admin icon in the top left corner of the icon.

**Argumentos:**

- `boolean adminOnly` — Whether this content should be admin only or not

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:17`*

---

### `ContentIcon:SetColor` `[client]`

An Global.AccessorFunc that sets the color for the content icon. Currently is not used by the content icon panel.

**Argumentos:**

- `Color clr` — The color to set. See Color

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:13`*

---

### `ContentIcon:SetContentType` `[client]`

An Global.AccessorFunc that sets the content type used to save and restore the content icon in a spawnlist.

**Argumentos:**

- `string type` — The content type, for example "entity" or "weapon"

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:14`*

---

### `ContentIcon:SetMaterial` `[client]`

Sets the material to be displayed as the content icon.

**Argumentos:**

- `string path` — Path to the icon to use.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:66`*

---

### `ContentIcon:SetNPCWeapon` `[client]`

An Global.AccessorFunc that sets a table of weapon classes for the content icon with "NPC" content type to be randomly chosen from when user tries to spawn the NPC.

**Argumentos:**

- `table weapons` — A table of weapon classes to be chosen from when user tries to spawn the NPC.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:16`*

---

### `ContentIcon:SetName` `[client]`

Sets the tool tip and the "nice" name to be displayed by the content icon.

**Argumentos:**

- `string name` — "Nice" name to display.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:58`*

---

### `ContentIcon:SetSpawnName` `[client]`

An Global.AccessorFunc that sets the internal "name" for the content icon, usually a class name for an entity.

**Argumentos:**

- `string name` — Internal "name" to be used when user left clicks the icon.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:15`*