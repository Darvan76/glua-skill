# spawnmenu

---

The spawnmenu library is a set of functions that allow you to control the spawn (Q) menu.

---


## Miembros (24)


---

### `spawnmenu:ActivateTool` `[client]`

Activates a tool, opens context menu and brings up the tool gun.

**Argumentos:**

- `string tool` — Tool class/file name
- `boolean menu_only` = `false` — Should we activate this tool in the menu only or also the toolgun? `true` = menu only,`false` = toolgun aswell

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:101`*

---

### `spawnmenu:ActivateToolPanel` `[client]`

Activates tools context menu in specified tool tab.

**Argumentos:**

- `number tab` — The tabID of the tab to open the context menu in
- `Panel cp` — The control panel to open

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:81`*

---

### `spawnmenu:ActiveControlPanel` `[client]`

Returns currently opened control panel of a tool, post process effect or some other menu in spawnmenu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The currently opened control panel, if any.

*Fuente: `lua/includes/modules/spawnmenu.lua:24`*

---

### `spawnmenu:AddContentType` `[client]`

Registers a new content type that is saveable into spawnlists.
Created/called by spawnmenu.CreateContentIcon.

**Argumentos:**

- `string name` — An unique name of the content type.
- `function constructor` — A function that is called whenever we need create a new panel for this content type.

The container/parent of the new panel from spawnmenu.CreateContentIcon
Data for the content type passed from spawnmenu.CreateContentIcon.

The created panel

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:285`*

---

### `spawnmenu:AddCreationTab` `[client]`

Inserts a new tab into the CreationMenus table, which will be used by the creation menu to generate its tabs (Spawnlists, Weapons, Entities, etc.)

**Argumentos:**

- `string name` — What text will appear on the tab (i.e Spawnlists).
- `function function` — The function called to generate the content of the tab.

A container panel that holds all of the content for the new tab.
- `string material` = `icon16/exclamation.png` — Path to the material that will be used as an icon on the tab. Should be a `.png` file. See Silkicons.
- `number order` = `1000` — The order in which this tab should be shown relative to the other tabs on the creation menu.
- `string tooltip` = `nil` — The tooltip to be shown for this tab.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:182`*

---

### `spawnmenu:AddPropCategory` `[client]`

Used to add addon spawnlists to the spawnmenu tree. This function should be called within SANDBOX:PopulatePropMenu.

Addon spawnlists will not save to disk if edited.

You should never try to modify player customized spawnlists!

**Argumentos:**

- `string classname` — A unique classname of the list.
- `string name` — The name of the category displayed to the player, e.g. `Comic Props`.
- `table contents` — A table of entries for the spawn menu. It must be numerically indexed.

Each member of the table is a sub-table containing a type member, and other members depending on the type.

New content types can be added via spawnmenu.AddContentType.

| string type | Description | Other members |
| ------------- | ---------- | ----------------- |
| "header" | a simple header for organization | string text - The text that the header will display |
| "model" | spawns a model where the player is looking | string model - The path to the model file 	 number skin - The skin for the model to use (optional)  string body - The bodygroups for the model (optional)  number wide - The width of the spawnicon (optional)  number tall - The height of the spawnicon (optional) |
| "entity" | spawns an entity where the player is looking(appears in the Entities tab by default) | string spawnname - The filename of the entity, for example "sent_ball"  string nicename - The name of the entity to display  string material - The icon to display, this should be set to `entities/[sent_name].png` 	boolean admin - Whether the entity is only spawnable by admins (optional) |
| "vehicle" | spawns a vehicle where the player is looking  (appears in the Vehicles tab by default) | string spawnname - The filename of the vehicle  string nicename - The name of the vehicle to display  string material - The icon to display  boolean admin - Whether the vehicle is only spawnable by admins (optional) |
| "npc" | spawns an NPC where the player is looking  (appears in the NPCs tab by default) | string spawnname - The spawn name of the NPC 	string nicename - The name to display  string material - The icon to display  table weapon - A table of potential weapons (each a string) to give to the NPC. When spawned, one of these will be chosen randomly each time.  boolean admin - Whether the NPC is only spawnable by admins (optional) |
| "weapon" | When clicked, gives the player a weapon;  When middle-clicked, spawns a weapon where the player is looking  (appears in the Weapons tab by default) |string spawnname - The spawn name of the weapon  string nicename - The name to display  string material - The icon to display  boolean admin - Whether the weapon is only spawnable by admins (optional) |
- `string icon` — The icon to use in the tree.
- `number id` = `1000` — The unique ID number for the spawnlist category. Used to make sub categories. See "parentID" parameter below. If not set, it will be automatically set to ever increasing number, starting with 1000.
- `number parentID` = `0` — The unique ID of the parent category. This will make the created category a subcategory of category with given unique ID. `0` makes this a base category (such as `Builder`).
- `string needsApp` — The needed game for this prop category, if one is needed. If the specified game is not mounted, the category isn't shown. This uses the shortcut name, e.g. `cstrike`, and not the Steam AppID.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:224`*

---

### `spawnmenu:AddToolCategory` `[client]`

Used to create a new category in the list inside of a spawnmenu Tool Tab.

You must call this function from SANDBOX:AddToolMenuCategories for it to work properly.

See spawnmenu.AddToolTab to add new tool tabs.
See spawnmenu.AddToolMenuOption to add new sub options to a newly created tool category.

**Argumentos:**

- `string tabName` — The internal tool tab name, as created with spawnmenu.AddToolTab.

You can also use the default Tool Tab names `"Main"` and `"Utilities"`.
- `string className` — The unique identifier name, which will be used to add tool option to this category.
- `string printName` — The nice name to be displayed to the player. See Addon Localization.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:131`*

---

### `spawnmenu:AddToolMenuOption` `[client]`

Adds an option to the right side of the spawnmenu.

See spawnmenu.AddToolTab to add new right-side tabs. See spawnmenu.AddToolCategory to add new categories.

**Argumentos:**

- `string tab` — The internal name of the spawnmenu tab to add into (for example "Utilities")
- `string category` — The internal name of the category within the tab to add into (for example "Admin")
- `string class` — Unique internal identifier of the new option. This is used to reference this option by other code.
- `string name` — The nice name of item to show to the player. See Addon Localization.
- `string cmd` = `nil` — Console command to execute when the item is selected.
- `string config` = `nil` — Config name, used in older versions to load tool settings UI from a file.

Legacy argument, no longer works.
- `function cpanel` — A function to build the context panel.

A DForm that will be shown in the context menu
- `table table` = `{}` — Allows to override the table that will be added to the tool list. Some of the fields will be overwritten by this function.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:147`*

---

### `spawnmenu:AddToolTab` `[client]`

Adds a new tool tab to the right side of the spawnmenu. (usually via the SANDBOX:AddToolMenuTabs hook)

See spawnmenu.GetToolMenu for a function to retrieve existing tool tabs.

See spawnmenu.AddCreationTab for tabs on the left side of the spawnmenu.

See spawnmenu.AddToolCategory to add new categories to the newly created tool tab.
See spawnmenu.AddToolMenuOption to add new options to the categories within a tool tab.

**Argumentos:**

- `string name` — The internal name of the tab. This is used for sorting, as well as adding categories, so it should be unique.
- `string label` = `name` — The 'nice' name of the tab that is displayed to the player. See Addon Localization.
- `string icon` = `icon16/wrench.png` — The file path to the icon of the tab. Should be a `.png` file. See Silkicons.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:66`*

---

### `spawnmenu:ClearToolMenus` `[client]`

Clears all the tools from the different tool categories and the categories itself, if ran at the correct place.

Seems to only work when ran at initialization.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:60`*

---

### `spawnmenu:CreateContentIcon` `[client]`

Creates a new ContentIcon previously defined via spawnmenu.AddContentType.

**Argumentos:**

- `string type` — The type of the content icon.

Default content types are:
* model

Sandbox only content types:
* tool
* header
* entity
* vehicle
* npc
* weapon
* postprocess
- `Panel parent` = `nil` — The parent to add the ContentIcon to.
- `table data` — The data to send to the content icon in spawnmenu.AddContentType. Data required will depend on the content type.

**Retorna:**

- `Panel` — The created ContentIcon, if it was returned by spawnmenu.AddContentType.

*Fuente: `lua/includes/modules/spawnmenu.lua:301`*

---

### `spawnmenu:DoSaveToTextFiles` `[client]`

Calls spawnmenu.SaveToTextFiles.

**Argumentos:**

- `table spawnlists` — A table containing spawnlists.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:260`*

---

### `spawnmenu:GetContentType` `[client]`

Returns the function to create an vgui element for a specified content type, previously defined by spawnmenu.AddContentType.

If a content type doesn't exist, a dummy function will be returned, and a warning printed to the console.

You probably want to use spawnmenu.CreateContentIcon to create icons.

**Argumentos:**

- `string contentType` — The content type name.

**Retorna:**

- `function` — The panel creation function.

The container panel to parent the created icon to.
Data for the content type passed from spawnmenu.CreateContentIcon.

The created panel

*Fuente: `lua/includes/modules/spawnmenu.lua:289`*

---

### `spawnmenu:GetCreationTabs` `[client]`

Returns the list of Creation tabs. Creation tabs are added via spawnmenu.AddCreationTab.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of Creation tabs. See the Structures/CreationMenus.

*Fuente: `lua/includes/modules/spawnmenu.lua:192`*

---

### `spawnmenu:GetCustomPropTable` `[client]`

Similar to spawnmenu.GetPropTable, but only returns spawnlists created by addons via spawnmenu.AddPropCategory.

These spawnlists are shown in a separate menu in-game.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — See spawnmenu.GetPropTable for table format.

*Fuente: `lua/includes/modules/spawnmenu.lua:218`*

---

### `spawnmenu:GetPropTable` `[client]`

Returns a table of all prop categories and their props in the spawnmenu.

Note that if the spawnmenu has not been populated, this will return an empty table.

This will not return spawnlists created by addons, see  spawnmenu.GetCustomPropTable for that.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Table of all the prop categories and props in the following format:

```
{
["settings/spawnlist/001-construction props.txt"] = {
name = "Construction Props",
icon = "icon16/page.png",
id = 1,
parentid = 0,
needsapp = "",
contents = {
{
model = "models/Cranes/crane_frame.mdl",
type = "model"
}
-- etc.
},
}
-- etc.
}
```

*Fuente: `lua/includes/modules/spawnmenu.lua:212`*

---

### `spawnmenu:GetToolMenu` `[client]`

Returns an existing tool tab by name from the right side of the spawnmenu (usually during the SANDBOX:AddToolMenuTabs hook)

If the requested tooltab does not exist, it will be added. See also spawnmenu.AddToolTab.

**Argumentos:**

- `string name` — The internal name of the tab. This is used for sorting.
- `string label` = `name` — The 'nice' name of the tab
- `string icon` = `icon16/wrench.png` — The file path to the icon of the tab. Should be a `.png` file. See Silkicons.

**Retorna:**

- `table` — A table of tables representing categories and items in the left part of the tab. See example below to example structure.

*Fuente: `lua/includes/modules/spawnmenu.lua:32`*

---

### `spawnmenu:GetTools` `[client]`

Gets a table of tools on the client.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table with groups of tools, along with information on each tool.

*Fuente: `lua/includes/modules/spawnmenu.lua:28`*

---

### `spawnmenu:PopulateFromEngineTextFiles` `[client]`

Calls spawnmenu.PopulateFromTextFiles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:240`*

---

### `spawnmenu:PopulateFromTextFiles` `[client]`

Loads spawnlists from text files. You probably are looking for spawnmenu.AddPropCategory.

**Argumentos:**

- `function callback` — The function to call.

The file name for the spawnlist.
The "nice" title for the spawnlist.
The list of contents for this spawnlist.
Path to an `.png` icon of the spawnlist, should be 16x16 image.
Unique ID of the spawnlist
UniqueID of the parents spawnlist ID
If not empty, the internal folder name of an mountable game that is required for this spawnlist to show up.

**Retorna:**

*(sin retorno)*

---

### `spawnmenu:SaveToTextFiles` `[client]`

Saves a table of spawnlists to files.

**Argumentos:**

- `table spawnlists` — A table containing spawnlists.

**Retorna:**

*(sin retorno)*

---

### `spawnmenu:SetActiveControlPanel` `[client]`

Sets currently active control panel to be returned by spawnmenu.ActiveControlPanel.

**Argumentos:**

- `Panel pnl` — The panel to set.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:20`*

---

### `spawnmenu:SwitchCreationTab` `[client]`

Switches the creation tab (left side of the spawnmenu) on the spawnmenu to the given tab.

**Argumentos:**

- `string id` — The tab ID to open

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:198`*

---

### `spawnmenu:SwitchToolTab` `[client]`

Opens specified tool tab in spawnmenu.

**Argumentos:**

- `number id` — The tab ID to open

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/spawnmenu.lua:72`*