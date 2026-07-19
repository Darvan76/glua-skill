# ContentSidebar

---

**Hereda de:** `DPanel`

---

The ContentSidebar is internally used by the spawnmenu and manages things like the Spawnmenu Toolbar.
It internally uses a DTree which is accessible with ContentSidebar .Tree.
When ContentSidebar:EnableModify has been called ContentSidebar.Toolbox will return a ContentSidebarToolbox

---


## Miembros (3)


---

### `ContentSidebar:CreateSaveNotification` `[client]`

Creates a Save Notification which will be shown when SANDBOX:SpawnlistContentChanged has been called.

**Argumentos:**

- `string style` — 
- `string hookname` = `PopulateContent` — A Populate Hook like PopulateEntities

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contentsidebar.lua:42`*

---

### `ContentSidebar:EnableModify` `[client]`

Internally calls ContentSidebar:EnableSearch, ContentSidebar:CreateSaveNotification and creates a ContentSidebarToolbox which is accessible under ContentSidebar.Toolbox. Call the Hook SANDBOX:OpenToolbox to open the created Toolbox

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contentsidebar.lua:25`*

---

### `ContentSidebar:EnableSearch` `[client]`

Creates a search bar which will be displayed over the Nodes.

**Argumentos:**

- `string style` — 
- `string hookname` = `PopulateContent` — A Populate Hook like PopulateEntities

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contentsidebar.lua:20`*