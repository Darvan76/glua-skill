# SANDBOX

---


## Miembros (53)


---

### `SANDBOX:AddGamemodeToolMenuCategories` `[client]`

This hook is used to add default categories to spawnmenu tool tabs.

Do not override or hook this function, use SANDBOX:AddToolMenuCategories!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:AddGamemodeToolMenuTabs` `[client]`

This hook is used to add default tool tabs to spawnmenu.

Do not override or hook this function, use SANDBOX:AddToolMenuTabs!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:AddToolMenuCategories` `[client]`

This hook is used to add new categories to spawnmenu tool tabs.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:AddToolMenuTabs` `[client]`

This hook is used to add new tool tabs to spawnmenu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:CanArmDupe` `[client/server]`

Called when a player attempts to "arm" a duplication with the Duplicator tool. Return false to prevent the player from sending data to server, and to ignore data if it was somehow sent anyway.

**Argumentos:**

- `Player ply` — The player who attempted to arm a dupe.

**Retorna:**

- `boolean` — Can the player arm a dupe or not.
- `string` — If given and the return value above is `false`, overrides the error message displayed to the player.

---

### `SANDBOX:CanDrive` `[client/server]`

Called when a player attempts to drive a prop via Prop Drive

**Argumentos:**

- `Player ply` — The player who attempted to use Prop Drive.
- `Entity ent` — The entity the player is attempting to drive

**Retorna:**

- `boolean` — Return true to allow driving, false to disallow

---

### `SANDBOX:CanTool` `[client/server]`

Called when a player attempts to fire their tool gun. Return true to specifically allow the attempt, false to block it.

**Argumentos:**

- `Player ply` — The player who attempted to use their toolgun.
- `table{TraceResult} tr` — A trace from the players eye to where in the world their crosshair/cursor is pointing.
Returns only Structures/TraceResult#Entity when the 5th argument returns `4`
- `string toolname` — The tool mode the player currently has selected.
- `table tool` — The tool mode table the player currently has selected.
- `number button` — The tool button pressed.
* 1 - left click
* 2 - right click
* 3 - reload
* 4 - Menu (No interaction with the toolgun)
The number `4` is a test that Rubat is conducting to implement the CanTool in the SpawnMenu. It may disappear.

**Retorna:**

- `boolean` — Can use toolgun or not.

---

### `SANDBOX:ContentSidebarSelection` `[client]`

Called when player selects an item on the spawnmenu sidebar at the left.

**Argumentos:**

- `Panel parent` — The panel that holds spawnicons and the sidebar of spawnmenu
- `Panel node` — The item player selected

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:ContextMenuClosed` `[client]`

Called when the context menu is supposedly closed.

This is simply an alias of GM:OnContextMenuClose.

This hook **will** be called even if the Sandbox's context menu doesn't actually exist, i.e. SANDBOX:ContextMenuEnabled blocked its creation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:ContextMenuCreated` `[client]`

Called when the context menu is created.

**Argumentos:**

- `Panel g_ContextMenu` — The created context menu panel

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:ContextMenuEnabled` `[client]`

Allows to prevent the creation of the context menu. If the context menu is already created, this will have no effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return `false` to prevent the context menu from being created.

---

### `SANDBOX:ContextMenuOpen` `[client]`

Called when the context menu is trying to be opened.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return `false` to block the opening.

---

### `SANDBOX:ContextMenuOpened` `[client]`

Called when the context menu is supposedly opened.

This is simply an alias of GM:OnContextMenuOpen but will **not** be called if SANDBOX:ContextMenuOpen prevents the context menu from opening.

This hook **will** be called even if the context menu doesn't actually exist, i.e. SANDBOX:ContextMenuEnabled blocked its creation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:ContextMenuShowTool` `[client]`

Called to poll if active tool settings should appear in the context menu. Please note that this is only called on initial opening of the context menu, not every frame the context menu is in use.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return `false` to prevent active tool settings from displaying in the context menu.

---

### `SANDBOX:OnRevertSpawnlist` `[client]`

Called when the Client reverts spawnlist changes

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contentsidebar.lua:70`*

---

### `SANDBOX:OnSaveSpawnlist` `[client]`

Called when a player saves his changes made to the spawnmenu

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contentsidebar.lua:56`*

---

### `SANDBOX:OpenToolbox` `[client]`

This hook is called when the player edits a category in the Spawnmenu

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/custom.lua:50`*

---

### `SANDBOX:PaintNotes` `[client]`

Called from GM:HUDPaint; does nothing by default.

This cannot be used with hook.Add

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PaintWorldTips` `[client]`

Called from GM:HUDPaint to draw world tips. By default, enabling cl_drawworldtooltips will stop world tips from being drawn here.
See Global.AddWorldTip for more information.

This cannot be used with hook.Add

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PersistenceLoad` `[server]`

Called when persistent props are loaded.

**Argumentos:**

- `string name` — Save from which to load.

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PersistenceSave` `[server]`

Called when persistent props are saved.

**Argumentos:**

- `string name` — Where to save. By default is convar "sbox_persist".

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerGiveSWEP` `[server]`

Called when a player attempts to give themselves a weapon from the Q menu. (Left mouse clicks on an icon)

Not to be confused with SANDBOX:PlayerSpawnSWEP, which is called when the weapon is spawned as entity on the ground.

**Argumentos:**

- `Player ply` — The player who attempted to give themselves a weapon.
- `string weapon` — Class name of the weapon the player tried to give themselves.
- `table spawninfo` — The weapon list table of this weapon, see [CCGiveSWEP](https://github.com/Facepunch/garrysmod/blob/c3801c10e1aacc4c114d81331f301c57bdcf5a52/garrysmod/gamemodes/sandbox/gamemode/commands.lua#L893) and [weapons.Register](https://github.com/Facepunch/garrysmod/blob/c3801c10e1aacc4c114d81331f301c57bdcf5a52/garrysmod/lua/includes/modules/weapons.lua#L58)

**Retorna:**

- `boolean` — Can the SWEP be given to the player

*Fuente: `gamemodes/sandbox/gamemode/commands.lua:902`*

---

### `SANDBOX:PlayerSpawnEffect` `[server]`

Called to ask if player allowed to spawn a particular effect or not.

**Argumentos:**

- `Player ply` — The player that wants to spawn an effect
- `string model` — The effect model that player wants to spawn

**Retorna:**

- `boolean` — Return false to disallow spawning that effect

---

### `SANDBOX:PlayerSpawnNPC` `[server]`

Called to ask if player allowed to spawn a particular NPC or not.

**Argumentos:**

- `Player ply` — The player that wants to spawn that NPC
- `string npc_type` — The npc type that player is trying to spawn
- `string weapon` — The weapon of that NPC

**Retorna:**

- `boolean` — Return false to disallow spawning that NPC

---

### `SANDBOX:PlayerSpawnObject` `[server]`

Called to ask whether player is allowed to spawn a given model. This includes props, effects, and ragdolls and is called before the respective PlayerSpawn* hook.

**Argumentos:**

- `Player ply` — The player in question
- `string model` — Model path
- `number skin` — Skin number

**Retorna:**

- `boolean` — Return false to disallow the player to spawn the given model.

---

### `SANDBOX:PlayerSpawnProp` `[server]`

Called when a player attempts to spawn a prop from the Q menu.

**Argumentos:**

- `Player ply` — The player who attempted to spawn a prop.
- `string model` — Path to the model of the prop the player is attempting to spawn.

**Retorna:**

- `boolean` — Should the player be able to spawn the prop or not.

---

### `SANDBOX:PlayerSpawnRagdoll` `[server]`

Called when a player attempts to spawn a ragdoll from the Q menu.

**Argumentos:**

- `Player ply` — The player who attempted to spawn a ragdoll.
- `string model` — Path to the model of the ragdoll the player is attempting to spawn.

**Retorna:**

- `boolean` — Should the player be able to spawn the ragdoll or not.

---

### `SANDBOX:PlayerSpawnSENT` `[server]`

Called when a player attempts to spawn an Entity from the Q menu.

**Argumentos:**

- `Player ply` — The player who attempted to spawn the entity.
- `string class` — Class name of the entity the player tried to spawn.

**Retorna:**

- `boolean` — Should the player be able to spawn the entity or not.

---

### `SANDBOX:PlayerSpawnSWEP` `[server]`

Called when a player attempts to spawn a weapon from the spawnmenu as an entity on the ground, by middle mouse clicking (mouse wheel clicking) on a weapon icon.

Not to be confused with SANDBOX:PlayerGiveSWEP, which is called only when the weapon is given to the player directly, if they don't already have it.

See SANDBOX:PlayerSpawnedSWEP for post entity creation event.

**Argumentos:**

- `Player ply` — The player who attempted to spawn a weapon.
- `string weapon` — Class name of the weapon the player tried to spawn.
- `table swep` — Information about the weapon the player is trying to spawn, see Structures/SWEP

**Retorna:**

- `boolean` — Can the SWEP be spawned

---

### `SANDBOX:PlayerSpawnVehicle` `[server]`

Called to ask if player allowed to spawn a particular vehicle or not.

**Argumentos:**

- `Player ply` — The player that wants to spawn that vehicle
- `string model` — The vehicle model that player wants to spawn
- `string name` — Vehicle name
- `table table` — Table of that vehicle, containing info about it See Structures/VehicleTable.

**Retorna:**

- `boolean` — Return false to disallow spawning that vehicle

---

### `SANDBOX:PlayerSpawnedEffect` `[server]`

Called after the player spawned an effect.

**Argumentos:**

- `Player ply` — The player that spawned the effect
- `string model` — The model of spawned effect
- `Entity ent` — The spawned effect itself

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerSpawnedNPC` `[server]`

Called after the player spawned an NPC.

**Argumentos:**

- `Player ply` — The player that spawned the NPC
- `Entity ent` — The spawned NPC itself

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerSpawnedProp` `[server]`

Called when a player has successfully spawned a prop from the Q menu.

**Argumentos:**

- `Player ply` — The player who spawned a prop.
- `string model` — Path to the model of the prop the player is attempting to spawn.
- `Entity entity` — The entity that was spawned.

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerSpawnedRagdoll` `[server]`

Called after the player spawned a ragdoll.

**Argumentos:**

- `Player ply` — The player that spawned the ragdoll
- `string model` — The ragdoll model that player wants to spawn
- `Entity ent` — The spawned ragdoll itself

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerSpawnedSENT` `[server]`

Called after the player has spawned a scripted entity.

**Argumentos:**

- `Player ply` — The player that spawned the SENT
- `Entity ent` — The spawned SENT

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerSpawnedSWEP` `[server]`

Called after the player has spawned a weapon from the spawnmenu with a middle mouse click (mouse wheel click).

For a hook capable of preventing such spawns, see SANDBOX:PlayerSpawnSWEP.
For left mouse click spawns, see SANDBOX:PlayerGiveSWEP.

**Argumentos:**

- `Player ply` — The player that spawned the SWEP
- `Entity ent` — The SWEP itself

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PlayerSpawnedVehicle` `[server]`

Called after the player spawned a vehicle.

**Argumentos:**

- `Player ply` — The player that spawned the vehicle
- `Entity ent` — The vehicle itself

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PopulateContent` `[client]`

Called by the spawnmenu when the content tab is generated
Creating an error in this Hook will result in a completely broken Content Tab

**Argumentos:**

- `Panel pnlContent` — The SpawnmenuContentPanel
- `Panel tree` — The ContentNavBar tree from the SpawnmenuContentPanel
- `Panel node` — The old Spawnlists

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/content.lua:91`*

---

### `SANDBOX:PopulateEntities` `[client]`

Called by the spawnmenu when the Entities tab is generated
Creating an error in this Hook will result in a completely broken Entites Tab

**Argumentos:**

- `Panel pnlContent` — The SpawnmenuContentPanel
- `Panel tree` — The ContentNavBar tree from the SpawnmenuContentPanel
- `Panel node` — The old Spawnlists

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/entities.lua:75`*

---

### `SANDBOX:PopulateNPCs` `[client]`

Called by the spawnmenu when the NPCs tab is generated
Creating an error in this Hook will result in a completely broken NPCs Tab

**Argumentos:**

- `Panel pnlContent` — The SpawnmenuContentPanel
- `Panel tree` — The ContentNavBar tree from the SpawnmenuContentPanel
- `Panel node` — The old Spawnlists

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/npcs.lua:141`*

---

### `SANDBOX:PopulatePropMenu` `[client]`

This hook makes the engine load the spawnlist text files.
It calls spawnmenu.PopulateFromEngineTextFiles by default.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/content.lua:90`*

---

### `SANDBOX:PopulateToolMenu` `[client]`

Add the TOOL to the tool menu. You want to call spawnmenu.AddToolMenuOption in this hook.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/spawnmenu.lua:241`*

---

### `SANDBOX:PopulateVehicles` `[client]`

Called by the spawnmenu when the Vehicles tab is generated
Creating an error in this Hook will result in a completely broken vehicles Tab

**Argumentos:**

- `Panel pnlContent` — The SpawnmenuContentPanel
- `Panel tree` — The ContentNavBar tree from the SpawnmenuContentPanel
- `Panel node` — The old Spawnlists

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/vehicles.lua:77`*

---

### `SANDBOX:PopulateWeapons` `[client]`

Called by the spawnmenu when the Weapons tab is generated
Creating an error in this Hook will result in a completely broken Weapons Tab

**Argumentos:**

- `Panel pnlContent` — The SpawnmenuContentPanel
- `Panel tree` — The ContentNavBar tree from the SpawnmenuContentPanel
- `Panel node` — The old Spawnlists

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/weapons.lua:75`*

---

### `SANDBOX:PostReloadToolsMenu` `[client]`

Called right after the Lua Loaded tool menus are reloaded. This is a good place to set up any ControlPanels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:PreRegisterTOOL` `[client/server]`

Called just before registering a Sandbox scripted tool.

**Argumentos:**

- `table tool` — The TOOL table to be registered. See Structures/TOOL.
- `string class` — The class name to be assigned.

**Retorna:**

- `boolean` — Return `false` to prevent the TOOL from being registered.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stool.lua:163`*

---

### `SANDBOX:PreReloadToolsMenu` `[client]`

Called right before the Lua Loaded tool menus are reloaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:SpawnMenuEnabled` `[client]`

If false is returned then the spawn menu is never created. This saves load times if your mod doesn't actually use the spawn menu for any reason.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether to create spawnmenu or not.

---

### `SANDBOX:SpawnMenuOpen` `[client]`

Called when spawnmenu is trying to be opened.

Hiding the spawnmenu will not stop people from being able to use the various console commands to spawn in items, etc. See GM:PlayerSpawn* hooks for blocking actual spawning.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return false to dissallow opening the spawnmenu

---

### `SANDBOX:SpawnMenuOpened` `[client]`

Called when the spawnmenu is opened.

This is an alias of GM:OnSpawnMenuOpen but will **not** be called if SANDBOX:SpawnMenuOpen prevents the spawnmenu from opening.

This hook **will** be called even if the spawnmenu doesn't actually exist, i.e. SANDBOX:SpawnMenuEnabled blocked its creation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:SpawnlistContentChanged` `[client]`

Called when changes were made to the spawnmenu like creating a new category.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/custom.lua:44`*

---

### `SANDBOX:SpawnlistOpenGenericMenu` `[client]`

Use SANDBOX:SpawnmenuIconMenuOpen if you wish to add new options to spawnmenu icon right click menus.
Called when there's one or more items selected in the spawnmenu by the player, to open the multi selection right click menu (DMenu)

**Argumentos:**

- `Panel canvas` — The canvas that has the selection. (Panel:GetSelectionCanvas)

**Retorna:**

*(sin retorno)*

---

### `SANDBOX:SpawnmenuIconMenuOpen` `[client]`

Called when the player opens a context menu by right clicking one of the spawnmenu icons. Either ContentIcon or SpawnIcon.

This hook can be used to add new custom menu options to the context menu.

**Argumentos:**

- `Panel menu` — The DMenu to add options to.
- `Panel icon` — The ContentIcon or SpawnIcon that was right clicked. It will be a `SpawnIcon` for `model` content type, and a `ContentIcon` for all others.
- `string contentType` — The content type, such as:
* `weapon`
* `entity`
* `vehicle`
* `npc`
* `model`
* `tool`
* `postprocess`

Addon related icons may have different types.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenticon.lua:32`*