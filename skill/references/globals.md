# Global Functions


---

### `Global:AccessorFunc` `[client/menu/server]`

Adds simple Get/Set accessor functions on the specified table.
Can also force the value to be set to a number, bool or string.

**Argumentos:**

- `table tab` — The table to add the accessor functions to.
- `any key` — The key of the table to be get/set.
- `string name` — The name of the functions (will be prefixed with Get and Set).
- `number{FORCE} force` = `nil` — The type the setter should force to (uses Enums/FORCE).

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:212`*

---

### `Global:AddBackgroundImage` `[menu]`

Adds the specified image path to the main menu background pool. Image can be png or jpeg.

**Argumentos:**

- `string path` — Path to the image.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/background.lua:101`*

---

### `Global:AddCSLuaFile` `[client/server]`

Marks a Lua file to be sent to clients when they join the server. Doesn't do anything on the client - this means you can use it in a shared file without problems.

If the file trying to be added is empty, an error will occur, and the file will not be sent to the client.

The string cannot have whitespace.

This function is not needed for scripts located in these paths because they are automatically sent to clients:
**lua/matproxy/**
**lua/postprocess/**
**lua/vgui/**
**lua/skins/**
**lua/autorun/**
**lua/autorun/client/**

You can add up to **8192** files. Each file can be up to **64KB** compressed (LZMA).

**Argumentos:**

- `string file` = `current file` — The name/path to the Lua file that should be sent, **relative to the garrysmod/lua folder**. If no parameter is specified, it sends the current file.

The file path can be relative to the script it's ran from. For example, if your script is in `lua/myfolder/stuff.lua`, calling Global.AddCSLuaFile("otherstuff.lua") and Global.AddCSLuaFile("myfolder/otherstuff.lua") is the same thing.

Please make sure your file names are unique, the filesystem is shared across all addons, so a file named `lua/config.lua` in your addon may be overwritten by the same file in another addon.

**Retorna:**

*(sin retorno)*

---

### `Global:AddConsoleCommand` `[client/menu/server]`

Use concommand.Add instead.Tells the engine to register a console command. If the command was ran, the engine calls concommand.Run.

**Argumentos:**

- `string name` — The name of the console command to add.
- `string helpText` — The help text.
- `number{FCVAR} flags` — Concommand flags using Enums/FCVAR.

**Retorna:**

*(sin retorno)*

---

### `Global:AddOriginToPVS` `[server]`

Adds the specified vector to the PVS which is currently building. This allows all objects in visleafs visible from that vector to be drawn.

**Argumentos:**

- `Vector position` — The origin to add.

**Retorna:**

*(sin retorno)*

---

### `Global:AddPropsOfParent` `[client]`

This function creates a Custom Category in the Spawnlist. Use Global.GenerateSpawnlistFromPath if you want to create a category with the contents of a folder.
Using this function before SANDBOX:PopulateContent has been called will result in an error.

**Argumentos:**

- `Panel pnlContent` — The SMContentPanel of the Node.
- `Panel node` — The Node.
- `number parentid` — The ParentID to use.
- `table customProps` — The Table with the Contents of the new Category.

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/custom.lua:139`*

---

### `Global:AddWorldTip` `[client]`

This function creates a World Tip, similar to the one shown when aiming at a Thruster where it shows you its force.

This function will make a World Tip that will only last 50 milliseconds (1/20th of a second), so you must call it continuously as long as you want the World Tip to be shown. It is common to call it inside a Think hook.

Contrary to what the function's name implies, it is impossible to create more than one World Tip at the same time. A new World Tip will overwrite the old one, so only use this function when you know nothing else will also be using it.

See SANDBOX:PaintWorldTips for more information.

This function is only available in Sandbox and its derivatives.

**Argumentos:**

- `number entindex` = `nil` — **This argument is no longer used**; it has no effect on anything. You can use nil in this argument.
- `string text` — The text for the world tip to display.
- `number dieTime` = `SysTime() + 0.05` — **This argument is no longer used**; when you add a World Tip it will always last only 0.05 seconds. You can use nil in this argument.
- `Vector pos` = `ent:GetPos()` — Where in the world you want the World Tip to be drawn. If you add a valid Entity in the next argument, this argument will have no effect on the actual World Tip.
- `Entity ent` = `nil` — Which entity you want to associate with the World Tip. This argument is optional. If set to a valid entity, this will override the position set in `pos` with the Entity's position.

**Retorna:**

*(sin retorno)*

---

### `Global:Add_NPC_Class` `[client/menu/server]`

Defines a global entity class variable with an automatic value. In order to prevent collisions with other Enums/CLASS. You should prefix your variable with CLASS_ for consistency.

**Argumentos:**

- `string name` — The name of the new enum/global variable.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:441`*

---

### `Global:AddonMaterial` `[client/menu]`

Loads the specified image from the `/cache` folder, used in combination with steamworks.Download. Most addons will provide a 512x512 png image.

This works with any image file with the `.cache` file extension, even outside of the `/cache` folder.

**Argumentos:**

- `string name` — The name of the file.

**Retorna:**

- `IMaterial` — The material, returns `nil` if the cached file is not an image.

---

### `Global:Angle` `[client/menu/server]`

Creates an Angle object, representing a [Euler Angle](https://en.wikipedia.org/wiki/Euler_angles) made up of pitch, yaw, and roll components.

This function is relatively expensive, in terms of performance, in situations where it is being called multiple times every frame (Like a loop, for example.) This is due to the overhead associated with object creation and garbage collection.
Where possible, it is generally better to store an Angle in a variable and re-use that variable rather than re-creating it repeatedly.
In cases where an empty Angle is needed, the global variable `angle_zero` is the preferred solution instead of `Angle( 0, 0, 0 )`.

**Argumentos:**

- `number pitch` = `0` — The pitch value of the angle, in degrees.
- `number yaw` = `0` — The yaw value of the angle, in degrees.
- `number roll` = `0` — The roll value of the angle, in degrees.

**Retorna:**

- `Angle` — The newly created Angle.

**Sobrecargas:**

- Variante 1: - `Angle angle` — Creates a new Angle that is a copy of the Angle passed in.

- Variante 2: - `string angleString` — Attempts to parse the input string from the Global.print format of an Angle.

Returns an Angle with its pitch, yaw, and roll set to `0` if the string cannot be parsed.

---

### `Global:AngleRand` `[client/menu/server]`

Returns an angle with a randomized pitch, yaw, and roll between min(inclusive), max(exclusive).

**Argumentos:**

- `number min` = `-90 for pitch, -180 for yaw and roll` — Min bound inclusive.
- `number max` = `90 for pitch, 180 for yaw and roll` — Max bound exclusive.

**Retorna:**

- `Angle` — The randomly generated angle.

*Fuente: `lua/includes/util.lua:139`*

---

### `Global:BRANCH` `[client/menu/server]`

A variable containing a string indicating which (Beta) Branch of the game you are using.

While this variable is always available in the States#client &amp; States#menu realms, it is only defined in the States#server  realm on local servers.

For more information on beta branches, see Dev_Branch.

Branch List :
* unknown **(No beta program)**
* dev
* prerelease
* x86-64
* network_test

The Branch "network_test" might be one or more major live updates behind, as it is not merged from the other branches (e.g. prerelease) on regularly bases. This can also be true especially if the version number ([VERSION](https://wiki.facepunch.com/gmod/Global_Variables#version)) appears to be a newer date.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The current branch.

---

### `Global:BroadcastLua` `[client/server]`

Sends the specified Lua code to all connected clients and executes it.

If you need to use this function more than once, consider using net library.
Send net message and make the entire code you want to execute in net.Receive on client.

If executed **clientside**, this function won't do anything.

**Argumentos:**

- `string code` — The code to be executed. Capped at length of 6000 characters.

**Retorna:**

*(sin retorno)*

---

### `Global:BuildNetworkedVarsTable` `[client/server]`

Dumps the networked variables of all entities into one table and returns it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Format:
* key = Entity for NWVars or number (always 0) for global vars.
* value = table formatted as:
* key = string var name.
* value = any type var value.

---

### `Global:CanAddServerToFavorites` `[menu]`

Used internally to check if the current server the player is on can be added to favorites or not. Does not check if the server is ALREADY in the favorites.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Can add to favorites?

---

### `Global:CancelLoading` `[menu]`

Aborts joining of the server you are currently joining.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Global:ChangeBackground` `[menu]`

Sets the active main menu background image to a random entry from the background images pool. Images are added with Global.AddBackgroundImage.

**Argumentos:**

- `string currentgm` — Apparently does nothing.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/background.lua:109`*

---

### `Global:ChangeTooltip` `[client/menu]`

Automatically called by the engine when a panel is hovered over with the mouse

**Argumentos:**

- `Panel panel` — Panel that has been hovered over

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/tooltips.lua:38`*

---

### `Global:ClearBackgroundImages` `[menu]`

Empties the pool of main menu background images.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/background.lua:95`*

---

### `Global:ClearLuaErrorGroup` `[menu]`

Clears all Lua Errors with the given group id.

**Argumentos:**

- `string group_id` — group_id to remove. Will be "[addon-name]-0" or "Other-"

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:73`*

---

### `Global:ClearProblem` `[menu]`

Removes the given Problem from the Problems table and refreshes the Problems panel.

**Argumentos:**

- `string id` — The Problem ID to remove

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:88`*

---

### `Global:ClientsideModel` `[client]`

Creates a non physical entity that only exists on the client. See also ents.CreateClientProp if physics is wanted.

Parented clientside models will become detached if the parent entity leaves the PVS. A workaround is available on the issue tracker page linked below.

Clientside entities are not garbage-collected, thus you must store a reference to the object (in a variable) and call CSEnt:Remove manually when necessary.

Clientside models will occasionally delete themselves during high server lag.

**Argumentos:**

- `string model` — The file path to the model.
- `number renderGroup` = `RENDERGROUP_OTHER` — The render group of the entity for the clientside leaf system, see Enums/RENDERGROUP.

**Retorna:**

- `CSEnt|nil` — Created client-side model (`C_BaseFlex`) or `nil` if creation of the entity failed for any reason.

---

### `Global:ClientsideRagdoll` `[client]`

Creates a fully clientside ragdoll.

The ragdoll initially starts as hidden and with shadows disabled, see the example for how to enable it.

There's no need to call Entity:Spawn on this entity.

Clientside entities are not garbage-collected, thus you must store a reference to the object and call CSEnt:Remove manually.

**Argumentos:**

- `string model` — The file path to the model.
- `number renderGroup` = `RENDERGROUP_OPAQUE` — The Enums/RENDERGROUP to assign.

**Retorna:**

- `CSEnt` — The newly created client-side only ragdoll. (`C_ClientRagdoll`)

---

### `Global:ClientsideScene` `[client]`

Creates a scene entity based on the scene name and the entity.

**Argumentos:**

- `string name` — The name of the scene.
- `Entity targetEnt` — The entity to play the scene on.

**Retorna:**

- `CSEnt` — C_SceneEntity

---

### `Global:CloseDermaMenus` `[client/menu]`

Closes all Derma menus that have been passed to Global.RegisterDermaMenuForClose and calls GM:CloseDermaMenus

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Global:Color` `[client/menu/server]`

Creates a Color.
This function is relatively expensive when used in rendering hooks or in operations requiring very frequent calls (like loops for example) due to object creation and garbage collection. It is better to store the color in a variable or to use the [default colors](https://wiki.facepunch.com/gmod/Global_Variables#misc) available.

Here is a list of colors already cached by the game

Variable | Color (RGBA) |
-----|------------|
| color_white | Color(255, 255, 255, 255) |
| color_black | Color(0, 0, 0, 255) |
| color_transparent | Color(255, 255, 255, 0) |

Under no circumstances should these variables be modified (by a Lerp or value modification). Some addons that use these values (e.g. color_white) will be affected by this change.

**Argumentos:**

- `number r` — An integer from `0-255` describing the red value of the color.
- `number g` — An integer from `0-255` describing the green value of the color.
- `number b` — An integer from `0-255` describing the blue value of the color.
- `number a` = `255` — An integer from `0-255` describing the alpha (transparency) of the color.(default 255)

**Retorna:**

- `Color` — The created Color.

*Fuente: `lua/includes/util/color.lua:13`*

---

### `Global:ColorAlpha` `[client/menu/server]`

Returns a new Color with the RGB components of the given Color and the alpha value specified.

**Argumentos:**

- `Color color` — The Color from which to take RGB values. This color will not be modified.
- `number alpha` — The new alpha value, a number between 0 and 255. Values above 255 will be clamped.

**Retorna:**

- `table` — The new Color with the modified alpha value

*Fuente: `lua/includes/util/color.lua:27`*

---

### `Global:ColorRand` `[client/menu/server]`

Creates a Color with randomized red, green, and blue components. If the alpha argument is true, alpha will also be randomized.

**Argumentos:**

- `boolean a` = `false` — Should alpha be randomized.

**Retorna:**

- `Color` — The created Color.

*Fuente: `lua/includes/util.lua:149`*

---

### `Global:ColorToHSL` `[client/menu/server]`

Converts a Color into HSL color space.

**Argumentos:**

- `Color color` — The Color.

**Retorna:**

- `number` — The hue in degrees `[0, 360]`.
- `number` — The saturation in the range `[0, 1]`.
- `number` — The lightness in the range `[0, 1]`.

---

### `Global:ColorToHSV` `[client/menu/server]`

Converts a Color into HSV color space.

**Argumentos:**

- `Color color` — The Color.

**Retorna:**

- `number` — The hue in degrees `[0, 360]`.
- `number` — The saturation in the range `[0, 1]`.
- `number` — The value in the range `[0, 1]`.

---

### `Global:CompileFile` `[client/server]`

Attempts to compile the given file. If successful, returns a function that can be called to perform the actual execution of the script.

**Argumentos:**

- `string path` — Path to the file, relative to the `garrysmod/lua/` directory.
- `boolean showError` = `true` — Decides whether or not a non-halting error should be thrown on compile failure.

**Retorna:**

- `function` — The function which executes the script.

---

### `Global:CompileString` `[client/server]`

This function will compile the code argument as lua code and return a function that will execute that code.

Please note that this function will not automatically execute the given code after compiling it.

**Argumentos:**

- `string code` — The code to compile.
- `string identifier` — An identifier in case an error is thrown. (The same identifier can be used multiple times)
- `boolean handleError` = `true` — If false this function will return an error string instead of throwing an error.

**Retorna:**

- `function` — A function that, when called, will execute the given code.

Returns the error string if there was a Lua error and third argument is false.

---

### `Global:ConVarExists` `[client/menu/server]`

Returns whether a ConVar with the given name exists or not

**Argumentos:**

- `string name` — Name of the ConVar.

**Retorna:**

- `boolean` — True if the ConVar exists, false otherwise.

---

### `Global:CreateClientConVar` `[client/menu/server]`

Makes a clientside-only console variable

This function is a wrapper of Global.CreateConVar, with the difference being that FCVAR_ARCHIVE and FCVAR_USERINFO are added automatically when **shouldsave** and **userinfo** are true, respectively.

Although this function is shared, it should only be used clientside.

**Argumentos:**

- `string name` — Name of the ConVar to be created and able to be accessed.

This cannot be a name of existing console command or console variable. It will silently fail if it is.
- `string default` — Default value of the ConVar.
- `boolean shouldsave` = `true` — Should the ConVar be saved across sessions in the cfg/client.vdf file.
- `boolean userinfo` = `false` — Should the ConVar and its containing data be sent to the server when it has changed. This makes the convar accessible from server using Player:GetInfoNum and similar functions.
- `string helptext` — Help text to display in the console.
- `number min` = `nil` — If set, the convar cannot be changed to a number lower than this value.
- `number max` = `nil` — If set, the convar cannot be changed to a number higher than this value.

**Retorna:**

- `ConVar` — Created convar.

*Fuente: `lua/includes/util.lua:488`*

---

### `Global:CreateConVar` `[client/menu/server]`

Creates a console variable (ConVar).

Generally these are used for settings, which can be stored automatically across sessions if desired. They are usually set via an accompanying user interface clientside, or listed somewhere for dedicated server usage, in which case they might be set via `server.cfg` on server start up.

Do not use the FCVAR_NEVER_AS_STRING and FCVAR_REPLICATED flags together, as this can cause the console variable to have strange values on the client.

**Argumentos:**

- `string name` — Name of the ConVar.

This cannot be a name of an engine console command or console variable. It will throw an error if it is. If it is the same name as another lua ConVar, it will return that ConVar object.
- `string value` — Default value of the convar. Can also be a number.
- `number{FCVAR}|table<number> flags` = `FCVAR_NONE` — Flags of the convar, see Enums/FCVAR, either as bitflag or as table.
- `string helptext` — The help text to show in the console.
- `number min` = `nil` — If set, the ConVar cannot be changed to a number lower than this value.
- `number max` = `nil` — If set, the ConVar cannot be changed to a number higher than this value.

**Retorna:**

- `ConVar` — The convar created, or `nil` if convar could not be created. (such as when there's a console command with the same name)

If a ConVar already exists (including engine ones), it will simply return the already existing ConVar without modifying it in any way.

---

### `Global:CreateContextMenu` `[client]`

Creates a ContextMenu.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `gamemodes/sandbox/gamemode/spawnmenu/contextmenu.lua:137`*

---

### `Global:CreateMaterial` `[client/menu]`

Creates a new material with the specified name and shader.

Materials created with this function can be used in Entity:SetMaterial and Entity:SetSubMaterial by prepending a `!` to their material name argument.

This will not create a new material if another material object with the same name already exists. All Materials created by this functions are cleaned up on map shutdown.

This does not work with [patch materials](https://developer.valvesoftware.com/wiki/Patch).

.pngs must be loaded with Global.Material before being used with this function.

**Argumentos:**

- `string name` — The material name. Must be unique.
- `string shaderName` — The shader name. See Shaders.
- `table materialData` — Key-value table that contains shader parameters and proxies.

* See: [List of Shader Parameters on Valve Developers Wiki](https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters) and each shader's page from .

Unlike IMaterial:SetTexture, this table will not accept ITexture values. Instead, use the texture's name (see ITexture:GetName).

**Retorna:**

- `IMaterial` — Created material

---

### `Global:CreateNewAddonPreset` `[menu]`

Creates a new Preset from the given JSON string.

**Argumentos:**

- `string data` — A JSON string containing all necessary information.
JSON structue should be Structures/Preset

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:585`*

---

### `Global:CreateParticleSystem` `[client]`

Creates a new particle system. See also Entity:CreateParticleEffect, Global.ParticleEffectAttach and Global.CreateParticleSystemNoEntity.

The particle effect must be precached with Global.PrecacheParticleSystem and the file its from must be added via game.AddParticles before it can be used!

**Argumentos:**

- `Entity ent` — The entity to attach the control point to.
- `string effect` — The name of the effect to create. It must be precached via Global.PrecacheParticleSystem beforehand.
- `number partAtt` — See Enums/PATTACH.
- `number entAtt` = `0` — The attachment ID on the entity to attach the particle system to
- `Vector offset` = `Vector( 0, 0, 0 )` — The offset from the Entity:GetPos of the entity we are attaching this CP to.

**Retorna:**

- `CNewParticleEffect` — The created particle system.

---

### `Global:CreateParticleSystemNoEntity` `[client]`

Creates a new particle system, and sets control points 0 and 1 to given position, as well as optionally orientation of CP0 to the given angles. See also Global.CreateParticleSystem

The particle effect must be precached with Global.PrecacheParticleSystem and the file its from must be added via game.AddParticles before it can be used!

**Argumentos:**

- `string effect` — The name of the effect to create. It must be precached via Global.PrecacheParticleSystem beforehand.
- `Vector pos` — The position for the particle system.
- `Angle ang` = `Angle( 0, 0, 0 )` — The orientation of the particle system.

**Retorna:**

- `CNewParticleEffect` — The created particle system.

---

### `Global:CreatePhysCollideBox` `[client/server]`

Creates a new PhysCollide from the given bounds.

This fails to create planes or points - no components of the mins or maxs can be the same.

**Argumentos:**

- `Vector mins` — Min corner of the box. This is not automatically ordered with the maxs and must contain the smallest vector components. See Global.OrderVectors.
- `Vector maxs` — Max corner of the box. This is not automatically ordered with the mins and must contain the largest vector components.

**Retorna:**

- `PhysCollide` — The new PhysCollide. This will be a NULL PhysCollide (PhysCollide:IsValid returns false) if given bad vectors or no more PhysCollides can be created in the physics engine.

---

### `Global:CreatePhysCollidesFromModel` `[client/server]`

Creates PhysCollide objects for every physics object the model has. The model must be precached with util.PrecacheModel before being used with this function.

**Argumentos:**

- `string modelName` — Model path to get the collision objects of.

**Retorna:**

- `table<PhysCollide>` — Table of PhysCollide objects. The number of entries will match the model's physics object count. See also Entity:GetPhysicsObjectCount. Returns no value if the model doesn't exist, or has not been precached.

---

### `Global:CreateSound` `[client/server]`

Returns a sound parented to the specified entity.

You can only create one CSoundPatch per audio file, per entity at the same time.

Valid sample rates: **11025 Hz, 22050 Hz and 44100 Hz**, otherwise you may see this kind of message:

`Unsupported 32-bit wave file your_sound.wav` and
`Invalid sample rate (48000) for sound 'your_sound.wav'`

**Argumentos:**

- `Entity targetEnt` — The target entity.
- `string soundName` — The sound to play. (Sound path or a sound.Add) [Soundscript Characters](https://developer.valvesoftware.com/wiki/Soundscripts/en#Sound_Characters) are supported.
- `CRecipientFilter filter` = `nil` — A CRecipientFilter of the players that will have this sound networked to them.

If not set, the default is a [CPASAttenuationFilter](https://developer.valvesoftware.com/wiki/CRecipientFilter#Derived_classes).

This argument only works serverside.

**Retorna:**

- `CSoundPatch` — The sound object. You should keep a reference to this object for as long as you wish the sound to play!

---

### `Global:CreateSprite` `[client]`

Creates and returns a new DSprite element with the supplied material.

**Argumentos:**

- `IMaterial material` — Material the sprite should draw.

**Retorna:**

- `Panel` — The new DSprite element.

---

### `Global:CurTime` `[client/menu/server]`

Returns the uptime of the server in seconds (to at least 4 decimal places)

This is a synchronised value and affected by various factors such as host_timescale (or game.GetTimeScale) and the server being paused - either by `sv_pausable` or all players disconnecting.

You should use this function for timing in-game events but not for real-world events.

See also: Global.RealTime, Global.SysTime

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Time synced with the game server.

---

### `Global:DEFINE_BASECLASS` `[client/menu/server]`

Generates and provides a local variable `BaseClass` that can be used to call the original version of a class functions after modifying it.

This is a preprocessor keyword that is directly replaced with the following text:
```lua
local BaseClass = baseclass.Get
```

Because this is a simple preprocessor keyword and not a function, it will cause problems if not used properly

See baseclass.Get for more information.
The preprocessor is not smart enough to know when substitution doesn't make sense, such as: table keys and strings.

Running `print("DEFINE_BASECLASS")` is the same as `print("local BaseClass = baseclass.Get")`

For more information, including usage examples, see the BaseClasses reference page.

**Argumentos:**

- `string value` — Baseclass name

**Retorna:**

*(sin retorno)*

---

### `Global:DOFModeHack` `[client]`

A hacky method used to fix some bugs regarding DoF. What this basically does it force all `C_BaseAnimating` entities to have the translucent Enums/RENDERGROUP, even if they use opaque or two-pass models.

This is specifically to do with GM:NeedsDepthPass

**Argumentos:**

- `boolean enable` — Enables or disables depth-of-field mode

**Retorna:**

*(sin retorno)*

---

### `Global:DOF_Kill` `[client]`

Cancels current DOF post-process effect started with Global.DOF_Start

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/dof.lua:14`*

---

### `Global:DOF_Start` `[client]`

Cancels any existing DOF post-process effects.
Begins the DOF post-process effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/dof.lua:32`*

---

### `Global:DTVar_ReceiveProxyGL` `[client/server]`

Calls all NetworkVarNotify functions of the given entity with the given new value, but doesn't change the real value.
internally uses Entity:CallDTVarProxies

**Argumentos:**

- `Entity entity` — The Entity to run the NetworkVarNotify functions from.
- `string Type` — The NetworkVar Type.
* `String`
* `Bool`
* `Float`
* `Int` (32-bit signed integer)
* `Vector`
* `Angle`
* `Entity`
- `number index` — The NetworkVar index.
- `any new value` — The new value.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/entity.lua:211`*

---

### `Global:DamageInfo` `[client/server]`

Returns an CTakeDamageInfo object.

This does not create a unique object, but instead returns a shared reference. That means you cannot use two or more of these objects at once.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CTakeDamageInfo` — The CTakeDamageInfo object.

---

### `Global:DebugInfo` `[client/menu/server]`

Writes text to the right hand side of the screen, like the old error system. Messages disappear after a couple of seconds.

**Argumentos:**

- `number slot` — The location on the right hand screen to write the debug info to. Starts at 0, no upper limit
- `string info` — The debugging information to be written to the screen

**Retorna:**

*(sin retorno)*

---

### `Global:DeleteAddonPreset` `[menu]`

Deletes the given Preset.

**Argumentos:**

- `string name` — The name of the Preset to delete.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:611`*

---

### `Global:DeriveGamemode` `[client/server]`

Loads and registers the specified gamemode, setting the GM table's DerivedFrom field to the value provided, if the table exists. The DerivedFrom field is used post-gamemode-load as the "derived" parameter for gamemode.Register. See  Gamemode_Creation#derivinggamemodes for more information about deriving gamemodes.

**Argumentos:**

- `string base` — Gamemode name to derive from.

**Retorna:**

*(sin retorno)*

---

### `Global:DermaMenu` `[client/menu]`

Creates a DMenu and closes any current menus.

**Argumentos:**

- `boolean keepOpen` = `false` — If we should keep other DMenus open (`true`) or not (`false`).
- `Panel parent` = `nil` — The panel to parent the created menu to.

**Retorna:**

- `Panel menu` — The created DMenu.

*Fuente: `lua/derma/derma_menus.lua:10`*

---

### `Global:Derma_Anim` `[client/menu]`

Creates a new derma animation.

**Argumentos:**

- `string name` — Name of the animation to create
- `Panel panel` — Panel to run the animation on
- `function func` — Function to call to process the animation

the panel passed to Derma_Anim
the anim table
the fraction of the progress through the animation
optional data passed to the run metatable method

**Retorna:**

- `table` — A lua metatable containing four methods:
* Run() - Should be called each frame you want the animation to be ran.
* Active() - Returns if the animation is currently active (has not finished and stop has not been called)
* Stop() - Halts the animation at its current progress.
* Start( Length, Data ) - Prepares the animation to be ran for Length seconds. Must be called once before calling Run(). The data parameter will be passed to the func function.

*Fuente: `lua/derma/derma_animation.lua:59`*

---

### `Global:Derma_DrawBackgroundBlur` `[client/menu]`

Draws background blur around the given panel.
Calling this on the same Panel multiple times makes the blur darker.

**Argumentos:**

- `Panel panel` — Panel to draw the background blur around
- `number startTime` — Time that the blur began being painted

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/derma_utils.lua:7`*

---

### `Global:Derma_Hook` `[client/menu]`

Creates panel method that calls the supplied Derma skin hook via derma.SkinHook

**Argumentos:**

- `Panel panel` — Panel to add the hook to
- `string functionName` — Name of panel function to create
- `string hookName` — Name of Derma skin hook to call within the function
- `string typeName` — Type of element to call Derma skin hook for

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/init.lua:54`*

---

### `Global:Derma_Install_Convar_Functions` `[client/menu]`

Makes the panel (usually an input of sorts) respond to changes in console variables by adding next functions to the panel:
* Panel:SetConVar
* Panel:ConVarChanged
* Panel:ConVarStringThink
* Panel:ConVarNumberThink

The console variable value is saved in the `m_strConVar` property of the panel.

The panel should call
Panel:ConVarStringThink or
Panel:ConVarNumberThink
in its PANEL:Think hook and should call Panel:ConVarChanged when the panel's value has changed.

**Argumentos:**

- `Panel target` — The panel the functions should be added to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/derma/init.lua:80`*

---

### `Global:Derma_Message` `[client/menu]`

Creates a derma window to display information

**Argumentos:**

- `string Text` — The text within the created panel.
- `string Title` — The title of the created panel.
- `string Button` — The text of the button to close the panel.

**Retorna:**

- `Panel` — The created DFrame

*Fuente: `lua/derma/derma_utils.lua:45`*

---

### `Global:Derma_Query` `[client/menu]`

Shows a message box in the middle of the screen, with up to 4 buttons they can press.

**Argumentos:**

- `string text` = `Message Text (Second Parameter)` — The message to display.
- `string title` = `Message Title (First Parameter)` — The title to give the message box.
- `string btn1text` — The text to display on the first button.
- `function btn1func` = `nil` — The function to run if the user clicks the first button.
- `string btn2text` = `nil` — The text to display on the second button.
- `function btn2func` = `nil` — The function to run if the user clicks the second button.
- `string btn3text` = `nil` — The text to display on the third button
- `function btn3func` = `nil` — The function to run if the user clicks the third button.
- `string btn4text` = `nil` — The text to display on the fourth button
- `function btn4func` = `nil` — The function to run if the user clicks the fourth button.

**Retorna:**

- `Panel` — The Panel object of the created window.

*Fuente: `lua/derma/derma_utils.lua:105`*

---

### `Global:Derma_StringRequest` `[client/menu]`

Creates a derma window asking players to input a string.

**Argumentos:**

- `string title` — The title of the created panel.
- `string subtitle` — The text above the input box.
- `string default` — The default text for the input box.
- `function confirm` — The function to be called once the user has confirmed their input.

The text the player entered.
- `function cancel` = `nil` — The function to be called once the user has cancelled their input.

The text the player entered.
- `string confirmText` = `OK` — Allows you to override text of the "OK" button
- `string cancelText` = `Cancel` — Allows you to override text of the "Cancel" button

**Retorna:**

- `Panel` — The created DFrame

*Fuente: `lua/derma/derma_utils.lua:195`*

---

### `Global:DisableClipping` `[client/menu]`

Sets whether rendering should be limited to being inside a panel or not. Needs to be used inside one of the 2d rendering hooks

See also Panel:NoClipping.

**Argumentos:**

- `boolean disable` — Whether or not clipping should be disabled

**Retorna:**

- `boolean oldState` — Whether the clipping was enabled or not before this function call

---

### `Global:DoStopServers` `[menu]`

Stops searching for new servers in the given category

**Argumentos:**

- `string category` — The category to stop searching in. **Working Values: internet, favorite, history, lan**

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:447`*

---

### `Global:DrawBackground` `[menu]`

Draws the currently active main menu background image and handles transitioning between background images.

This is called by default in the menu panel's Paint hook.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/background.lua:73`*

---

### `Global:DrawBloom` `[client]`

Draws the bloom shader, which creates a glowing effect from bright objects.

**Argumentos:**

- `number Darken` — Determines how much to darken the effect. A lower number will make the glow come from lower light levels. A value of `1` will make the bloom effect unnoticeable. Negative values will make even pitch black areas glow.
- `number Multiply` — Will affect how bright the glowing spots are. A value of `0` will make the bloom effect unnoticeable.
- `number SizeX` — The size of the bloom effect along the horizontal axis.
- `number SizeY` — The size of the bloom effect along the vertical axis.
- `number Passes` — Determines how much to exaggerate the effect.
- `number ColorMultiply` — Will multiply the colors of the glowing spots, making them more vivid.
- `number Red` — How much red to multiply with the glowing color. Should be between `0` and `1`.
- `number Green` — How much green to multiply with the glowing color. Should be between `0` and `1`.
- `number Blue` — How much blue to multiply with the glowing color. Should be between `0` and `1`.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/bloom.lua:25`*

---

### `Global:DrawBokehDOF` `[client]`

Draws the Bokeh Depth Of Field effect .

**Argumentos:**

- `number intensity` — Intensity of the effect.
- `number distance` — **Not worldspace distance**. Value range is from `0` to `1`.
- `number focus` — Focus. Recommended values are from 0 to 12.

**Retorna:**

*(sin retorno)*

---

### `Global:DrawColorModify` `[client]`

Draws the Color Modify shader, which can be used to adjust colors on screen.

**Argumentos:**

- `table modifyParameters` — Color modification parameters. See Shaders/g_colourmodify and the example below. Note that if you leave out a field, it will retain its last value which may have changed if another caller uses this function.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/color_modify.lua:20`*

---

### `Global:DrawMaterialOverlay` `[client]`

Draws a material overlay on the screen.

**Argumentos:**

- `string Material` — This will be the material that is drawn onto the screen.
- `number RefractAmount` — This will adjust how much the material will refract your screen.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/overlay.lua:11`*

---

### `Global:DrawMotionBlur` `[client]`

Creates a motion blur effect by drawing your screen multiple times.

**Argumentos:**

- `number AddAlpha` — How much alpha to change per frame.
- `number DrawAlpha` — How much alpha the frames will have. A value of 0 will not render the motion blur effect.
- `number Delay` — Determines the amount of time between frames to capture.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/motion_blur.lua:17`*

---

### `Global:DrawSharpen` `[client]`

Draws the sharpen shader, which creates more contrast.

**Argumentos:**

- `number Contrast` — How much contrast to create.
- `number Distance` — How large the contrast effect will be.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/sharpen.lua:12`*

---

### `Global:DrawSobel` `[client]`

Draws the sobel shader, which detects edges and draws a black border.

**Argumentos:**

- `number Threshold` — Determines the threshold of edges. A value of `0` will make your screen completely black.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/sobel.lua:8`*

---

### `Global:DrawSunbeams` `[client]`

Renders the post-processing effect of beams of light originating from the map's sun. Utilises the `pp/sunbeams` material.

**Argumentos:**

- `number darken` — `$darken` property for sunbeams material.
- `number multiplier` — `$multiply` property for sunbeams material.
- `number sunSize` — `$sunsize` property for sunbeams material.
- `number sunX` — `$sunx` property for sunbeams material.
- `number sunY` — `$suny` property for sunbeams material.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/sunbeams.lua:14`*

---

### `Global:DrawTexturize` `[client]`

Draws the texturize shader, which replaces each pixel on your screen with a different part of the texture depending on its brightness. See Shaders/g_texturize for information on making the texture.

**Argumentos:**

- `number Scale` — Scale of the texture. A smaller number creates a larger texture.
- `number BaseTexture` — This will be the texture to use in the effect. Make sure you use Global.Material to get the texture number.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/texturize.lua:8`*

---

### `Global:DrawToyTown` `[client]`

Draws the toy town shader, which blurs the top and bottom of your screen. This can make very large objects look like toys, hence the name.

**Argumentos:**

- `number Passes` — An integer determining how many times to draw the effect. A higher number creates more blur.
- `number Height` — The amount of screen which should be blurred on the top and bottom.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/toytown.lua:12`*

---

### `Global:DropEntityIfHeld` `[server]`

You really should be using Entity:ForcePlayerDrop, which does the same thing.

Drops the specified entity if it is being held by any player with Gravity Gun, Physics Gun or `+use` pickup.

See also Player:DropObject and Entity:ForcePlayerDrop.

**Argumentos:**

- `Entity ent` — The entity to drop.

**Retorna:**

*(sin retorno)*

---

### `Global:DynamicLight` `[client]`

Creates or replaces a dynamic light with the given id.

Only 32 dlights and 64 elights can be active at once.
It is not safe to hold a reference to this object after creation since its data can be replaced by another dlight at any time.
Dynamic lights affect the world (brushwork, static props) and entities (dynamic props, etc.) differently.

**Argumentos:**

- `number index` — An unsigned Integer. Usually an Entity:EntIndex is used here.
- `boolean elight` = `false` — Allocates an elight instead of a dlight. Elights have a higher light limit and do not light the world (making the "noworld" parameter have no effect).

**Retorna:**

- `table` — A DynamicLight structured table. See Structures/DynamicLight

---

### `Global:DynamicMaterial` `[menu]`

Creates a dynamic Material from the given materialPath
This function should never be used in a Rendering Hook because it creates a new dynamic material every time and can fill up your vram.

**Argumentos:**

- `string materialPath` — The material with path. The path is relative to the `materials/` folder.
- `string flags` = `nil` — Flags, same as Global.Material.

**Retorna:**

- `IMaterial` — Generated material.

---

### `Global:EffectData` `[client/server]`

Returns a CEffectData object to be used with util.Effect.

This does not create a unique object, but instead returns a shared reference. That means you cannot use two or more of these objects at once.

As a result any values previously set (Origin, Magnitude, Scale etc) will carry over to all future calls of this function, and may unexpectedly affect effects created via util.Effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CEffectData` — The CEffectData object.

---

### `Global:Either` `[client/menu/server]`

An [eagerly evaluated](https://en.wikipedia.org/wiki/Eager_evaluation) [ternary operator](https://en.wikipedia.org/wiki/%3F:), or, in layman's terms, a compact "if then else" statement.

In most cases, you should just use Lua's ["pseudo" ternary operator](https://en.wikipedia.org/wiki/%3F:#Lua), like this:

```
local myCondition = true
local consequent = "myCondition is true"
local alternative = "myCondition is false"

print(myCondition and consequent or alternative)
```

In the above example, due to [short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation), `consequent` would be "skipped" and ignored (not evaluated) by Lua due to `myCondition` being `true`, and only `alternative` would be evaluated. However, when using `Either`, both `consequent` and `alternative` would be evaluated. A practical example of this can be found at the bottom of the page.

# Falsey values

If `consequent` is "falsey" (Lua considers both `false` and `nil` as false), this will not work. For example:

```
local X = true
local Y = false
local Z = "myCondition is false"

print(X and Y or Z)
```

This will actually print the value of `Z`.

In the above case, and other very rare cases, you may find `Either` useful.

**Argumentos:**

- `any condition` — The condition to check if true or false.
- `any truevar` — If the condition isn't nil/false, returns this value.
- `any falsevar` — If the condition is nil/false, returns this value.

**Retorna:**

- `any` — The result.

*Fuente: `lua/includes/util.lua:436`*

---

### `Global:EmitSentence` `[client/server]`

Plays a sentence from `scripts/sentences.txt`

**Argumentos:**

- `string soundName` — The sound to play
- `Vector position` — The position to play at
- `number entity` — The entity to emit the sound from. Must be Entity:EntIndex
- `number channel` = `CHAN_AUTO` — The sound channel, see Enums/CHAN.
- `number volume` = `1` — The volume of the sound, from 0 to 1
- `number soundLevel` = `75` — The sound level of the sound, see Enums/SNDLVL
- `number soundFlags` = `0` — The flags of the sound, see Enums/SND
- `number pitch` = `100` — The pitch of the sound, 0-255
- `number DSP` = `0` — Digital Sound Processor for this sound. DSP_Presets

**Retorna:**

*(sin retorno)*

---

### `Global:EmitSound` `[client/server]`

Emits the specified sound at the specified position. See also Entity:EmitSound if you wish to play sounds on a specific entity.

Valid 16 bit sample rates: **11025 Hz, 22050 Hz and 44100 Hz**, otherwise you may see this kind of message:

`Unsupported 32-bit wave file your_sound.wav` and
`Invalid sample rate (48000) for sound 'your_sound.wav'`

**Argumentos:**

- `string soundName` — The sound to play

This should either be a sound script name (sound.Add) or a file path relative to the `sound/` folder. (Make note that it's not sound**s**)
- `Vector position` — The position where the sound is meant to play, which is also used for a network filter (`CPASAttenuationFilter`) to decide which players will hear the sound.
- `number entity` = `0` — The entity to emit the sound from. Can be an Entity:EntIndex or one of the following:
* `0` - Plays sound on the world
* `-1` - Plays sound on the local player (on server acts as `0`)
* `-2` - Plays UI sound (position set to `0,0,0`, no spatial sound, on server acts as `0`)
- `number{CHAN} channel` = `CHAN_AUTO` — The sound channel, see Enums/CHAN.
- `number volume` = `1` — The volume of the sound, from 0 to 1
- `number{SNDLVL} soundLevel` = `75` — The sound level of the sound, see Enums/SNDLVL
- `number{SND} soundFlags` = `0` — The flags of the sound, see Enums/SND
- `number pitch` = `100` — The pitch of the sound, 0-255
- `number dsp` = `1` — The DSP preset for this sound. DSP_Presets
- `CRecipientFilter filter` = `nil` — If set serverside, the sound will only be networked to the clients in the filter.

**Retorna:**

*(sin retorno)*

---

### `Global:EndTooltip` `[client/menu]`

Removes the currently active tool tip from the screen.

**Argumentos:**

- `Panel panel` — This is the panel that has a tool tip.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/tooltips.lua:66`*

---

### `Global:Entity` `[client/server]`

Returns the entity with the matching Entity:EntIndex.

Indices `1` through game.MaxPlayers() are always reserved for players.

In examples on this wiki, `Entity( 1 )` is used when a player entity is needed (see ). In singleplayer and listen servers, `Entity( 1 )` will always be the first player. In dedicated servers, however, `Entity( 1 )` won't always be a valid player if there is no one currently on the server.

**Argumentos:**

- `number entityIndex` — The entity index.

**Retorna:**

- `Entity` — The entity if it exists, or `NULL` if it doesn't.

---

### `Global:Error` `[client/menu/server]`

Throws an error. This is currently an alias of Global.ErrorNoHalt despite it once throwing a halting error like Global.error(lowercase) without the stack trace appended.

This function throws a non-halting error instead of a halting error.

**Argumentos:**

- `vararg arguments` — Converts all arguments to strings and prints them with no spacing or line breaks.

**Retorna:**

*(sin retorno)*

---

### `Global:ErrorNoHalt` `[client/menu/server]`

Throws a Lua error but does not break out of the current call stack.
This function will not print a stack trace like a normal error would.
Essentially similar if not equivalent to Global.Msg.

**Argumentos:**

- `vararg arguments` — Converts all arguments to strings and prints them with no spacing.

**Retorna:**

*(sin retorno)*

---

### `Global:ErrorNoHaltWithStack` `[client/menu/server]`

Throws a Lua error but does not break out of the current call stack.

This function will print a stack trace like a normal error would.

**Argumentos:**

- `vararg arguments` — Converts all arguments to strings and prints them with no spacing.

**Retorna:**

*(sin retorno)*

---

### `Global:EyeAngles` `[client]`

Returns the angles of the current render context as calculated by GM:CalcView.

This function is only reliable inside rendering hooks.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angle of the currently rendered scene.

---

### `Global:EyePos` `[client]`

Returns the origin of the current render context as calculated by GM:CalcView.

This function is only reliable inside rendering hooks.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Camera position.

---

### `Global:EyeVector` `[client]`

Returns the normal vector of the current render context as calculated by GM:CalcView, similar to Global.EyeAngles.

This function is only reliable inside rendering hooks.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — View direction of the currently rendered scene.

---

### `Global:FindMetaTable` `[client/menu/server]`

Returns the meta table for the class with the matching name.

You can learn more about meta tables on the Meta Tables page.

You can find a list of meta tables that can be retrieved with this function on Enums/TYPE. The name in the description is the string to use with this function.

Custom meta tables should be registered via Global.RegisterMetaTable.

**Argumentos:**

- `string metaName` — The object type to retrieve the meta table of.

**Retorna:**

- `table|nil` — The corresponding meta table or `nil` if it doesn't exist.

---

### `Global:FindTooltip` `[client/menu]`

Returns the tool-tip text and tool-tip-panel (if any) of the given panel as well as itself

**Argumentos:**

- `Panel panel` — Panel to find tool-tip of

**Retorna:**

- `string` — tool-tip text
- `Panel` — tool-tip panel
- `Panel` — panel that the function was called with

*Fuente: `lua/includes/util/tooltips.lua:20`*

---

### `Global:FireAddonConflicts` `[menu]`

Refreshes all Addon Conflicts and Fires a Problem. Internally uses Global.FireProblem

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:321`*

---

### `Global:FireProblem` `[menu]`

Creates a problem from the given definition.

Existing problems with the same Id will be replaced / overridden.

**Argumentos:**

- `table{Problem} problem` — The problem's definition.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:100`*

---

### `Global:FireProblemFromEngine` `[menu]`

Internally uses Global.FireProblem to create / fire the Problem.
This function is called from the engine to notify the player about a problem in a more user friendly way compared to a console message.

**Argumentos:**

- `string id` — The Problem ID.
- `number severity` — The Problem severity.
- `string params` — Additional Parameters.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:188`*

---

### `Global:Format` `[client/menu/server]`

Formats the specified values into the string given. Same as string.format.

**Argumentos:**

- `string format` — The string to be formatted.
Follows this format: http://www.cplusplus.com/reference/cstdio/printf/
- `vararg formatParameters` — Values to be formatted into the string.

**Retorna:**

- `string` — The formatted string

*Fuente: `lua/includes/util.lua:29`*

---

### `Global:FrameNumber` `[client/server]`

Returns the number of frames rendered since the game was launched.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — frame count

---

### `Global:FrameTime` `[client/menu/server]`

Returns the Global.CurTime-based time in seconds it took to render the last frame.

This should be used for frame/tick based timing, such as movement prediction or animations.

For real-time-based frame time that isn't affected by `host_timescale`, use Global.RealFrameTime. RealFrameTime is more suited for things like GUIs or HUDs.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — time (in seconds)

---

### `Global:GMOD_OpenURLNoOverlay` `[menu]`

Opens the given URL in a HTML panel.

**Argumentos:**

- `string url` — The url to open.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/openurl.lua:34`*

---

### `Global:GameDetails` `[menu]`

Callback function for when the client has joined a server. This function shows the server's loading URL by default.

**Argumentos:**

- `string servername` — Server's name.
- `string serverurl` — Server's loading screen URL, or "" if the URL is not set.
- `string mapname` — Server's current map's name.
- `number maxplayers` — Max player count of server.
- `string steamid` — The local player's Player:SteamID64.
- `string gamemode` — Server's current gamemode's folder name.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/loading.lua:249`*

---

### `Global:GetAPIManifest` `[menu]`

Gets miscellaneous information from Facepunches API.

**Argumentos:**

- `function callback` — Callback to be called when the API request is done.

JSON encoded data, see util.JSONToTable.

Formatted output:
```js
{
"ManifestVersion": 	number - Version of the manifest
"Date": 			string - Date the data was retrieved

// Contains all the blog posts, the things in the top right of the menu
"News": {
"Blogs": [

// Structure of blog posts
{
"Date": 		string - Date the post was created
"ShortName": 	string - Short name of the post, identifier of it on the blog website
"Title": 		string - Title of the post
"HeaderImage": 	string - Main image of the post, showed in the top right
"SummaryHtml": 	string - Summary of the blogpost, text thats shown to the user
"Url": 			string - URL to the post on the blog
"Tags": 		string - String of the posts tag
}
]
}

// Array of Facepunches Mods, Admins and Developers
"Administrators": [
{
"UserId": 		string - SteamID64 of the person
"Level": 		string - Level of the user (Administrator, Developer or Moderator)
}
]

// Unused and contains nothing useful
"Heroes": {}

"SentryUrl": 		string - Nothing
"DatabaseUrl" 		string - URL to the Facepunch API (/database/{action}/)
"FeedbackUrl" 		string - URL to the Facepunch API (/feedback/add/)
"ReportUrl" 		string - URL to the Facepunch API (/feedback/report/)
"LeaderboardUrl" 	string - URL to the Facepunch API (/leaderboard/{action}/)
"BenchmarkUrl" 		string - URL to the Facepunch API (/benchmark/add/)
"AccountUrl" 		string - URL to the Facepunch API (/account/{action}/)

"Servers": {
"Official": [] // Nothing

// List of blacklisted servers
"Banned": [
string 	- IP of the blacklisted server
]
}
}
```

**Retorna:**

*(sin retorno)*

---

### `Global:GetAddonStatus` `[menu]`

Returns if the game was started with either -noaddons or -noworkshop

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean noaddons` — true if the game was started with -noaddons. (see Command_Line_Parameters)
- `boolean noworkshop` — true if the game was started with -noworkshop. (see Command_Line_Parameters)

---

### `Global:GetConVar` `[client/menu/server]`

Gets the ConVar with the specified name.

This function uses Global.GetConVar_Internal internally, but caches the result in Lua for quicker lookups.

**Argumentos:**

- `string name` — Name of the ConVar to get

**Retorna:**

- `ConVar` — The ConVar object, or nil if no such ConVar was found.

*Fuente: `lua/includes/util.lua:510`*

---

### `Global:GetConVarNumber` `[client/menu/server]`

Returns the numeric value ConVar (converted from the ConVar's string value) with the specified name.

This function will return `0` if the ConVar does not exist. Use cvars.Number to specify your own default.

Will return the value of game.MaxPlayers if `maxplayers` is specified as the ConVar name, even though `maxplayers` is not a ConVar. (it is a console **command**) You should be using aforementioned Lua function instead for that case.

In performance intensive places such as think and rendering callbacks/hooks, it is advised to use ConVar:GetFloat on a ConVar object directly, which be retrieved via Global.GetConVar, or from existing Global.CreateConVar call.

**Argumentos:**

- `string name` — Name of the ConVar to get the value of.

**Retorna:**

- `number` — The ConVar's value.

*Fuente: `lua/includes/util.lua:524`*

---

### `Global:GetConVarString` `[client/menu/server]`

Returns the string value ConVar with the specified name.

This function will return an empty string if the ConVar does not exist. Use cvars.String to specify your own default.

Will return the value of game.MaxPlayers (as a string) if `maxplayers` is specified as the ConVar name, even though `maxplayers` is not a ConVar. (it is a console **command**) You should be using aforementioned Lua function instead for that case.

In performance intensive places such as think and rendering callbacks/hooks, it is advised to use ConVar:GetString on a ConVar object directly, which be retrieved via Global.GetConVar, or from existing Global.CreateConVar call.

**Argumentos:**

- `string name` — Name of the ConVar to get the value of.

**Retorna:**

- `string` — The ConVar's value.

*Fuente: `lua/includes/util.lua:530`*

---

### `Global:GetConVar_Internal` `[client/menu/server]`

This function is very slow and not recommended. See Global.GetConVar for an example on how to properly store the return of what you're using so you can avoid using this function as much as possible.
Gets the ConVar with the specified name. This function doesn't cache the convar.

**Argumentos:**

- `string name` — Name of the ConVar to get

**Retorna:**

- `ConVar` — The ConVar object

---

### `Global:GetDefaultLoadingHTML` `[menu]`

Returns the default loading screen URL (asset://garrysmod/html/loading.html)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Default loading url (asset://garrysmod/html/loading.html)

---

### `Global:GetDemoFileDetails` `[menu]`

Retrieves data about the demo with the specified filename. Similar to Global.GetSaveFileDetails.

**Argumentos:**

- `string filename` — The file name of the demo.

**Retorna:**

- `table` — Demo data.

---

### `Global:GetDownloadables` `[menu]`

Returns a table with the names of files needed from the server you are currently joining.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string>` — table of file names

---

### `Global:GetGlobal2Angle` `[client/server]`

Returns an angle that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `Angle default` = `Angle( 0, 0, 0 )` — The value to return if the global value is not set.

**Retorna:**

- `Angle` — The global value, or default if the global is not set.

---

### `Global:GetGlobal2Bool` `[client/server]`

Returns a boolean that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `boolean default` = `false` — The value to return if the global value is not set.

**Retorna:**

- `boolean` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobal2Entity` `[client/server]`

Returns an entity that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `Entity default` = `NULL` — The value to return if the global value is not set.

**Retorna:**

- `Entity` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobal2Float` `[client/server]`

Returns a float that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `number default` = `0` — The value to return if the global value is not set.

**Retorna:**

- `number` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobal2Int` `[client/server]`

Returns an integer that is shared between the server and all clients.

The integer has a 32 bit limit. Use Global.GetGlobalInt for a higher limit

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `number default` = `0` — The value to return if the global value is not set.

**Retorna:**

- `number` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobal2String` `[client/server]`

Returns a string that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `string default` — The value to return if the global value is not set.

**Retorna:**

- `string` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobal2Var` `[client/server]`

Returns a value that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `any default` = `nil` — The value to return if the global value is not set.

**Retorna:**

- `any` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobal2Vector` `[client/server]`

Returns a vector that is shared between the server and all clients.

**Argumentos:**

- `string Index` — The unique index to identify the global value with.
- `Vector Default` — The value to return if the global value is not set.

**Retorna:**

- `Vector` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalAngle` `[client/server]`

Returns an angle that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `Angle default` — The value to return if the global value is not set.

**Retorna:**

- `Angle` — The global value, or default if the global is not set.

---

### `Global:GetGlobalBool` `[client/server]`

Returns a boolean that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `boolean default` = `false` — The value to return if the global value is not set.

**Retorna:**

- `boolean` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalEntity` `[client/server]`

Returns an entity that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `Entity default` = `NULL` — The value to return if the global value is not set.

**Retorna:**

- `Entity` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalFloat` `[client/server]`

Returns a float that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `number default` = `0` — The value to return if the global value is not set.

**Retorna:**

- `number` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalInt` `[client/server]`

Returns an integer that is shared between the server and all clients.

This function will not round decimal values as it actually networks a float internally.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `number default` = `0` — The value to return if the global value is not set.

**Retorna:**

- `number` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalString` `[client/server]`

Returns a string that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `string default` — The value to return if the global value is not set.

**Retorna:**

- `string` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalVar` `[client/server]`

Returns a value that is shared between the server and all clients.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `any default` = `nil` — The value to return if the global value is not set.

**Retorna:**

- `any` — The global value, or the default if the global value is not set.

---

### `Global:GetGlobalVector` `[client/server]`

Returns a vector that is shared between the server and all clients.

**Argumentos:**

- `string Index` — The unique index to identify the global value with.
- `Vector Default` — The value to return if the global value is not set.

**Retorna:**

- `Vector` — The global value, or the default if the global value is not set.

---

### `Global:GetHUDPanel` `[client]`

Returns the panel that is used as a wrapper for the HUD. If you want your panel to be hidden when the main menu is opened, parent it to this. Child panels will also have their controls disabled.

See also vgui.GetWorldPanel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The HUD panel

---

### `Global:GetHostName` `[client/server]`

Returns the name of the current server.

GetHostName returns information from ConVars_In_Garrysmod#cvarlistdump hostname

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name of the server.

---

### `Global:GetLoadPanel` `[menu]`

Returns the loading screen panel and creates it if it doesn't exist.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The loading screen panel

*Fuente: `lua/menu/loading.lua:228`*

---

### `Global:GetLoadStatus` `[menu]`

Returns the current status of the server join progress.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The current status

---

### `Global:GetMapList` `[menu]`

Returns a table with the names of all maps and categories that you have on your client.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Table of map names and categories.

*Fuente: `lua/menu/getmaps.lua:419`*

---

### `Global:GetOverlayPanel` `[menu]`

Returns the menu overlay panel, a container for panels like the error panel created in GM:OnLuaError.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The overlay panel

---

### `Global:GetPlayerList` `[menu]`

Updates the PlayerList for the Currently Viewed Server. Internally uses serverlist.PlayerList to retrieve the PlayerList.

**Argumentos:**

- `string serverip` — The ServerIP to retrieve the PlayerList from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:257`*

---

### `Global:GetPredictionPlayer` `[client/server]`

Returns the player whose movement commands are currently being processed. The player this returns can safely have Player:GetCurrentCommand() called on them. See Prediction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Player` — The player currently being predicted, or NULL if no command processing is currently being done.

---

### `Global:GetRenderTarget` `[client]`

Creates or gets the rendertarget with the given name.

See Global.GetRenderTargetEx for an advanced version of this function with more options.

This crashes when used on a cubemap texture.
Rendertargets are not garbage-collected, which means they will remain in memory until you disconnect. So make sure to avoid creating new ones unecessarily and re-use as many of your existing rendertargets as possible to avoid filling up all your memory.
Drawing rendertargets on themself can produce odd and unexpected results.

Calling this function is equivalent to
```lua
GetRenderTargetEx(name,
width, height,
RT_SIZE_NO_CHANGE,
MATERIAL_RT_DEPTH_SEPARATE,
bit.bor(2, 256),
0,
IMAGE_FORMAT_BGRA8888
)
```

**Argumentos:**

- `string name` — The internal name of the render target.
- `number width` — The width of the render target, must be power of 2. If not set to PO2, the size will be automatically converted to the nearest PO2 size.
- `number height` — The height of the render target, must be power of 2. If not set to PO2, the size will be automatically converted to the nearest PO2 size.

**Retorna:**

- `ITexture` — The render target

---

### `Global:GetRenderTargetEx` `[client]`

Gets (or creates if it does not exist) the rendertarget with the given name, this function allows to adjust the creation of a rendertarget more than Global.GetRenderTarget.

See also render.PushRenderTarget and render.SetRenderTarget.

**Argumentos:**

- `string name` — The internal name of the render target.

The name is treated like a path and gets its extension discarded."name.1" and "name.2" are considered the same name and will result in the same render target being reused.
- `number width` — The width of the render target, must be power of 2.
- `number height` — The height of the render target, must be power of 2.
- `number{RT_SIZE} sizeMode` — Bitflag that influences the sizing of the render target, see Enums/RT_SIZE.
- `number{MATERIAL_RT_DEPTH} depthMode` — Bitflag that determines the depth buffer usage of the render target Enums/MATERIAL_RT_DEPTH.

PNG's may not render to non MATERIAL_RT_DEPTH_NONE RenderTargets
- `number{TEXTUREFLAGS} textureFlags` — Bitflag that configures the texture, see Enums/TEXTUREFLAGS.

List of flags can also be found on the Valve's Developer Wiki:
https://developer.valvesoftware.com/wiki/Valve_Texture_Format
- `number{CREATERENDERTARGETFLAGS} rtFlags` — Flags that control the HDR behaviour of the render target, see Enums/CREATERENDERTARGETFLAGS.
- `number imageFormat` — Image format, see Enums/IMAGE_FORMAT.
Some additional image formats are accepted, but don't have enums. See [VTF Enumerations.](https://developer.valvesoftware.com/wiki/Valve_Texture_Format#VTF_enumerations)

**Retorna:**

- `ITexture` — The new render target.

---

### `Global:GetSaveFileDetails` `[menu]`

Retrieves data about the save with the specified filename. Similar to Global.GetDemoFileDetails.

**Argumentos:**

- `string filename` — The file name of the save.

**Retorna:**

- `table` — Save data.

---

### `Global:GetServers` `[menu]`

Starts Searching for Servers in the given Category. Can be stopped with Global.DoStopServers.
Internally uses serverlist.Query to search for Servers.

**Argumentos:**

- `string category` — The Category to start searching the Servers in. **Working Values: internet, favorite, history, lan**
- `number id` — Some ID. can be a random number?

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:387`*

---

### `Global:GetTimeoutInfo` `[client]`

Returns if the client is timing out, and time since last ping from the server. Similar to the server side Player:IsTimingOut.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is timing out?
- `number` — Get time since last pinged received.

---

### `Global:GetViewEntity` `[client]`

Returns the entity the client is using to see from (such as the player itself, the camera, or another entity).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The view entity.

---

### `Global:HSLToColor` `[client/menu/server]`

Converts a color from [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV) into RGB color space and returns a Color.

**Argumentos:**

- `number hue` — The hue in degrees from 0-360.
- `number saturation` — The saturation from 0-1.
- `number lightness` — The lightness from 0-1.

**Retorna:**

- `Color` — The Color created from the HSL color space.

*Fuente: `lua/includes/util/color.lua:76`*

---

### `Global:HSVToColor` `[client/menu/server]`

Converts a color from [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV) into RGB color space and returns a Color.

**Argumentos:**

- `number hue` — The hue in degrees from 0-360.
- `number saturation` — The saturation from 0-1.
- `number value` — The value from 0-1.

**Retorna:**

- `Color` — The Color created from the HSV color space.

*Fuente: `lua/includes/util/color.lua:45`*

---

### `Global:HTTP` `[client/menu/server]`

Launches an asynchronous http request with the given parameters.

This cannot send or receive multiple headers with the same name.
HTTP-requests that respond with a large body may return an `unsuccessful` error. Try using the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header to download the file in chunks.

HTTP-requests to destinations on private networks (such as `192.168.0.1`, or `127.0.0.1`) won't work.

To enable HTTP-requests to destinations on private networks use Command Line Parameters `-allowlocalhttp`. (Dedicated servers only)

**Argumentos:**

- `table{HTTPRequest} parameters` — The request parameters. See Structures/HTTPRequest.

**Retorna:**

- `boolean` — `true` if a request is queued, `false` if a request could not be queued. (i.e. When not giving a `table` or the game is ran with `-disablehttp`)

---

### `Global:HWBToColor` `[client/menu/server]`

Converts a color from [HWB color space](https://en.wikipedia.org/wiki/HWB_color_model) (Hue-Whiteness-Blackness) into RGB color space and returns a Color.

**Argumentos:**

- `number hue` — The hue of the color in degrees from 0-360.
- `number whiteness` — The whiteness of the color from 0-1.
- `number blackness` — The blackness of the color from 0-1.

**Retorna:**

- `Color` — The Color created from the HWB color space.

*Fuente: `lua/includes/util/color.lua:107`*

---

### `Global:HexToColor` `[client/menu/server]`

Converts a hexadecimal representation of a color to Color object.

**Argumentos:**

- `string hue` — A hex formatted color. Accepted formats are:
* `#RRGGBB`
* `#RRGGBBAA` (Web color standard variation)
* `#RGB`
* `#RGBA`

`#` can be omitted.

**Retorna:**

- `Color` — The Color created from the hexadecimal color code.

*Fuente: `lua/includes/util/color.lua:119`*

---

### `Global:IncludeCS` `[client/menu/server]`

To send the target file to the client simply call AddCSLuaFile() in the target file itself.

This function works exactly the same as Global.include both clientside and serverside.

The only difference is that on the serverside it also calls Global.AddCSLuaFile on the filename, so that it gets sent to the client.

**Argumentos:**

- `string filename` — The filename of the Lua file you want to include.

**Retorna:**

- `vararg` — Anything that the executed Lua script returns.

*Fuente: `lua/includes/util.lua:196`*

---

### `Global:InvalidateInternalEntityCache` `[client/server]`

Called by the engine before GM:OnEntityCreated and after GM:EntityRemoved hooks are called.
Internally used to clear the player.Iterator or ents.Iterator cache

**Argumentos:**

- `boolean isPly` — Reset the player.Iterator cache

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/entity_iter.lua:22`*

---

### `Global:IsColor` `[client/menu/server]`

Returns whether the given object does or doesn't have a `metatable` of a color.

**Argumentos:**

- `any Object` — The object to be tested

**Retorna:**

- `boolean` — Whether the given object is a color or not

*Fuente: `lua/includes/util/color.lua:36`*

---

### `Global:IsConCommandBlocked` `[client/menu/server]`

Determines whether or not the provided console command will be blocked if it's ran through Lua functions, such as Global.RunConsoleCommand or Player:ConCommand.

For more info on blocked console commands, check out Blocked_ConCommands.

**Argumentos:**

- `string name` — The console command to test.

**Retorna:**

- `boolean` — Whether the command will be blocked.

---

### `Global:IsEnemyEntityName` `[client/menu/server]`

Returns if the given NPC class name is an enemy. Returns `true` if the entity name is one of the following:
* `monster_alien_grunt`
* `monster_nihilanth`
* `monster_tentacle`
* `monster_alien_slave`
* `monster_bigmomma`
* `monster_bullchicken`
* `monster_gargantua`
* `monster_human_assassin`
* `monster_babycrab`
* `monster_human_grunt`
* `monster_cockroach`
* `monster_houndeye`
* `monster_zombie`
* `monster_headcrab`
* `monster_alien_controller`
* `monster_turret`
* `monster_miniturret`
* `monster_sentry`
* `npc_antlion`
* `npc_antlionguard`
* `npc_antlionguardian`
* `npc_barnacle`
* `npc_breen`
* `npc_clawscanner`
* `npc_combine_s`
* `npc_cscanner`
* `npc_fastzombie`
* `npc_fastzombie_torso`
* `npc_headcrab`
* `npc_headcrab_fast`
* `npc_headcrab_poison`
* `npc_hunter`
* `npc_metropolice`
* `npc_manhack`
* `npc_poisonzombie`
* `npc_strider`
* `npc_stalker`
* `npc_zombie`
* `npc_zombie_torso`
* `npc_zombine`
* `npc_combine_camera`
* `npc_turret_ceiling`
* `npc_combinedropship`
* `npc_combinegunship`
* `npc_helicopter`
* `npc_turret_floor`
* `npc_antlion_worker`
* `npc_headcrab_black`

**Argumentos:**

- `string className` — Class name of the entity to check.

**Retorna:**

- `boolean` — Is an enemy?

*Fuente: `lua/includes/util.lua:386`*

---

### `Global:IsEntity` `[client/menu/server]`

Use the function Global.isentity instead.
Identical to Global.isentity. Returns if the passed object is an Entity.

**Argumentos:**

- `any variable` — The variable to check.

**Retorna:**

- `boolean` — True if the variable is an Entity.

---

### `Global:IsFirstTimePredicted` `[client/server]`

Returns if this is the first time this hook was predicted.

This is useful for one-time logic in your SWEPs PrimaryAttack, SecondaryAttack and Reload and other  (to prevent those hooks from being called rapidly in succession). It's also useful in a Move hook for when the client predicts movement.

Visit Prediction for more information about this behavior.

This is already used internally for Entity:EmitSound, Weapon:SendWeaponAnim and Entity:FireBullets, but NOT in  util.Effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not this is the first time being predicted.

---

### `Global:IsFriendEntityName` `[client/menu/server]`

Returns if the given NPC class name is a friend. Returns `true` if the entity name is one of the following:
* `monster_scientist`
* `monster_barney`
* `npc_alyx`
* `npc_barney`
* `npc_citizen`
* `npc_dog`
* `npc_eli`
* `npc_fisherman`
* `npc_gman`
* `npc_kleiner`
* `npc_magnusson`
* `npc_monk`
* `npc_mossman`
* `npc_odessa`
* `npc_vortigaunt`

**Argumentos:**

- `string className` — Class name of the entity to check

**Retorna:**

- `boolean` — Is a friend

*Fuente: `lua/includes/util.lua:403`*

---

### `Global:IsInGame` `[menu]`

Returns true if the client is currently playing either a singleplayer or multiplayer game.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if we are in a game.

---

### `Global:IsInLoading` `[menu]`

Returns true when the loading panel is active.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if loading panel is active.

*Fuente: `lua/menu/loading.lua:239`*

---

### `Global:IsMounted` `[client/menu/server]`

Checks whether or not a game is currently mounted. Uses data given by engine.GetGames.

**Argumentos:**

- `string game` — The game string/app ID to check.

**Retorna:**

- `boolean` — True if the game is mounted.

*Fuente: `lua/includes/util.lua:407`*

---

### `Global:IsServerBlacklisted` `[menu]`

Checks if the given server data is blacklisted or not.

**Argumentos:**

- `string address` — Server ip. can end with *
- `string hostname` — Server name
- `string description` — description to check
- `string gm` — Gamemode name
- `string map` — Map name

**Retorna:**

- `string result` — Returns the reason why the server is blacklisted or nil if the server is not blacklisted.

*Fuente: `lua/menu/mainmenu.lua:313`*

---

### `Global:IsTableOfEntitiesValid` `[client/menu/server]`

Returns whether or not every element within a table is a valid entity

**Argumentos:**

- `table table` — Table containing entities to check

**Retorna:**

- `boolean` — All entities valid

*Fuente: `lua/includes/util.lua:67`*

---

### `Global:IsUselessModel` `[client/menu/server]`

Returns whether or not a model is useless by checking that the file path is that of a proper model.

If the string ".mdl" is not found in the model name, the function will return true.

The function will also return true if any of the following strings are found in the given model name:
* "_gesture"
* "_anim"
* "_gst"
* "_pst"
* "_shd"
* "_ss"
* "_posture"
* "_anm"
* "ghostanim"
* "_paths"
* "_shared"
* "anim_"
* "gestures_"
* "shared_ragdoll_"

**Argumentos:**

- `string modelName` — The model name to be checked

**Retorna:**

- `boolean` — Whether or not the model is useless

*Fuente: `lua/includes/util.lua:312`*

---

### `Global:IsValid` `[client/menu/server]`

Returns whether an object is valid or not. (Such as Entity, Panels, custom table objects and more).

Checks that an object is not nil, has an `IsValid` method and if this method returns `true`. If the object has no `IsValid` method, it will return `false`.

If you are sure that the object you are about to check is not `nil` and has the `IsValid` method, it would be faster to call it directly rather than using `IsValid`.
Due to vehicles being technically valid the moment they're spawned, also use Vehicle:IsValidVehicle to make sure they're fully initialized.
Putting a number in the argument will cause an error.

**Argumentos:**

- `any toBeValidated` — The table or object to be validated.

**Retorna:**

- `boolean` — True if the object is valid.

*Fuente: `lua/includes/util.lua:256`*

---

### `Global:JS_Language` `[client/menu]`

Adds JavaScript function 'language.Update' to an HTML panel as a method to call Lua's language.GetPhrase function.

**Argumentos:**

- `Panel htmlPanel` — Panel to add JavaScript function 'language.Update' to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/javascript_util.lua:2`*

---

### `Global:JS_Utility` `[client/menu]`

Adds JavaScript function 'util.MotionSensorAvailable' to an HTML panel as a method to call Lua's motionsensor.IsAvailable function.

**Argumentos:**

- `Panel htmlPanel` — Panel to add JavaScript function 'util.MotionSensorAvailable' to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/javascript_util.lua:11`*

---

### `Global:JS_Workshop` `[client/menu]`

Adds workshop related JavaScript functions to an HTML panel, used by the "Dupes" and "Saves" tabs in the spawnmenu.

**Argumentos:**

- `Panel htmlPanel` — Panel to add JavaScript functions to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/javascript_util.lua:19`*

---

### `Global:JoinServer` `[menu]`

Joins the server with the specified IP.

**Argumentos:**

- `string IP` — The IP of the server to join

**Retorna:**

*(sin retorno)*

---

### `Global:Label` `[client/menu]`

Convenience function that creates a DLabel, sets the text, and returns it

**Argumentos:**

- `string text` — The string to set the label's text to
- `Panel parent` = `nil` — Optional. The panel to parent the DLabel to

**Retorna:**

- `Panel` — The created DLabel

*Fuente: `lua/vgui/dlabel.lua:307`*

---

### `Global:LanguageChanged` `[menu]`

Callback function for when the client's language changes. Called by the engine.

**Argumentos:**

- `string lang` — The new language code.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:534`*

---

### `Global:Lerp` `[client/menu/server]`

Performs a linear interpolation from the start number to the end number.

This function provides a very efficient and easy way to smooth out movements.

See also math.ease for functions that allow to have non linear animations using linear interpolation.

This function is not meant to be used with constant value in the first argument if you're dealing with animation! Use a value that changes over time. See example for **proper** usage of Lerp for animations.

**Argumentos:**

- `number t` — The fraction for finding the result. This number is clamped between 0 and 1. Shouldn't be a constant.
- `number from` — The starting number. The result will be equal to this if delta is 0.
- `number to` — The ending number. The result will be equal to this if delta is 1.

**Retorna:**

- `number` — The result of the linear interpolation, `from + (to - from) * t`.

*Fuente: `lua/includes/util.lua:292`*

---

### `Global:LerpAngle` `[client/menu/server]`

Returns point between first and second angle using given fraction and linear interpolation
This function is not meant to be used with constant value in the first argument, if you're dealing with animation! Use a value that changes over time

**Argumentos:**

- `number ratio` — Ratio of progress through values
- `Angle angleStart` — Angle to begin from
- `Angle angleEnd` — Angle to end at

**Retorna:**

- `Angle` — angle

---

### `Global:LerpVector` `[client/menu/server]`

Linear interpolation between two vectors. It is commonly used to smooth movement between two vectors
This function is not meant to be used with constant value in the first argument, if you're dealing with animation! Use a value that changes over time

**Argumentos:**

- `number fraction` — Fraction ranging from 0 to 1
- `Vector from` — The initial Vector
- `Vector to` — The desired Vector

**Retorna:**

- `Vector` — The lerped vector.

---

### `Global:ListAddonPresets` `[menu]`

Loads all Addon Presets and updates the Preset list.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:621`*

---

### `Global:LoadAddonPresets` `[menu]`

Returns the contents of `addonpresets.txt` located in the `garrysmod/settings` folder. By default, this file stores your addon presets as JSON.

You can use Global.SaveAddonPresets to modify this file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string JSON` — The contents of the file.

---

### `Global:LoadLastMap` `[menu]`

This function is used to get the last map and category to which the map belongs from the cookie saved with Global.SaveLastMap.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/getmaps.lua:451`*

---

### `Global:LoadNewsList` `[menu]`

Updates the News List

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:300`*

---

### `Global:LoadPresets` `[client]`

Loads all preset settings for the presets and returns them in a table

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Preset data

---

### `Global:LocalPlayer` `[client]`

Returns the player object of the current client.

LocalPlayer() will return NULL until all entities have been initialized. See GM:InitPostEntity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Player` — The player object representing the client.

---

### `Global:LocalToWorld` `[client/server]`

Translates a vector and angle from a local coordinate system into a global coordinate system.

For the reverse of this function see Global.WorldToLocal.

For working with an entity's local space vectors/angles you might consider using Entity:LocalToWorld/Entity:LocalToWorldAngles instead.

**Argumentos:**

- `Vector localPos` — A vector from a local coordinate system.
- `Angle localAng` — An angle from a local coordinate system.

Pass a zero angle if you don't need to translate an angle.
- `Vector originPos` — The origin of a global coordinate system, in worldspace coordinates.
- `Angle originAngle` — The angles of a global coordinate system, as a worldspace angle.

**Retorna:**

- `Vector` — The corresponding worldspace vector to `localPos`.
- `Angle` — The corresponding worldspace angle to `localAng`.

---

### `Global:Localize` `[client/menu]`

Returns a localization for the given token, if none is found it will return the default (second) parameter.

Use language.GetPhrase instead.

**Argumentos:**

- `string localizationToken` — The token to find a translation for.
- `string default` — The default value to be returned if no translation was found.

**Retorna:**

- `string` — The localized string, 128 char limit.

---

### `Global:MainEyeAngles` `[client]`

Returns the main view angles, as they were at the start of the latest main view render.

This is a good alternative to Global.EyeAngles which is affected by other rendering operations, including render.RenderView.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the main view.

---

### `Global:MainEyePos` `[client]`

Returns the origin of the main view, as it was at the start of the latest main view render.

This is a good alternative to Global.EyePos which is affected by other rendering operations, including render.RenderView.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Main camera position.

---

### `Global:MakeBalloon` `[server]`

This function makes a balloon appear, similar to the one from the Toolgun.

This function doesn't make the rope attached to the balloon appear.

**Argumentos:**

- `player ply` — The player who spawns the balloon. This argument can be nil
- `number r` = `255` — Balloon color (red)
- `number g` = `255` — Balloon color (green)
- `number b` = `255` — Balloon color (blue).
- `number force` = `0` — The lift force applied to the balloon.
- `table{BalloonData} data` — Data applied to the balloon. This data is required for correctly spawning the balloon.
For more information, please see: Structures/BalloonData

**Retorna:**

- `Entity balloon` — Returns the created balloon entity.

*Fuente: `gamemodes/sandbox/entities/weapons/gmod_tool/stools/balloon.lua:135`*

---

### `Global:Material` `[client/menu/server]`

Either returns the material with the given name, or loads the material interpreting the first argument as the path.

## .png, .jpg and other image formats

This function is capable to loading `.png` or `.jpg` images, generating a texture and material for them on the fly.

PNG, JPEG, GIF, and TGA files will work, but only if they have the `.png` or `.jpg` file extensions (even if the actual image format doesn't match the file extension)

Use Global.AddonMaterial for image files with the `.cache` file extension. (from steamworks.Download)

While images are no longer scaled to Power of 2 (sizes of 8, 16, 32, 64, 128, etc.) sizes since February 2019, it is still a good practice for things like icons, etc.

Server-side, this function can consistently return an invalid material (with '__error') depending on the file type loaded.

This function is very expensive when used in rendering hooks or in operations requiring very frequent calls. It is a good idea to cache the material in a variable (like in the examples).

**Argumentos:**

- `string materialName` — The material name or path relative to the `materials/` folder.
Paths outside the `materials/` folder like `data/MyImage.jpg` or `maps/thumb/gm_construct.png` will also work for when generating materials.

To retrieve a Lua material created with Global.CreateMaterial, just prepend a `!` to the material name.
- `string pngParameters` = `nil` — A string containing space separated keywords which will be used to add material parameters.

See Material Parameters for more information.

This feature only works when importing `.png` or `.jpg` image files.

**Retorna:**

- `IMaterial` — Generated material.
- `number` — How long it took for the function to run.

*Fuente: `lua/includes/util.lua:34`*

---

### `Global:Matrix` `[client/server]`

Returns a VMatrix object, a 4x4 matrix.

**Argumentos:**

- `table data` = `{{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}}` — Initial data to initialize the matrix with. Leave empty to initialize an identity matrix. See examples for usage.

Can be a VMatrix to copy its data.

**Retorna:**

- `VMatrix` — New matrix.

---

### `Global:MenuGetAddonData` `[menu]`

Internally uses steamworks.FileInfo to fetch the data.
This function retrieves the Addon data and passes it onto JS(JavaScript)

**Argumentos:**

- `string workshopItemID` — The ID of Steam Workshop item.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:572`*

---

### `Global:Mesh` `[client]`

Returns a new static mesh object.

**Argumentos:**

- `IMaterial mat` = `nil` — The material the mesh is intended to be rendered with. It's merely a hint that tells that mesh what vertex format it should use.
- `number boneWeights` = `0` — Number of bone weights per vertex. This value can be set to 2 to enable skinning and rendering via IMesh:DrawSkinned. This was recently added and is only available on the Dev Branch right now.

**Retorna:**

- `IMesh` — The created object.

---

### `Global:Model` `[client/menu/server]`

Runs util.PrecacheModel and returns the string.

**Argumentos:**

- `string model` — The model to precache.

**Retorna:**

- `string` — The same string entered as an argument.

*Fuente: `lua/includes/util.lua:166`*

---

### `Global:Msg` `[client/menu/server]`

Writes every given argument to the console. Limitations of Global.print apply.

Automatically attempts to convert each argument to a string. (See Global.tostring)

Unlike Global.print, arguments are not separated by anything. They are simply concatenated.

Additionally, a newline isn't added automatically to the end, so subsequent Msg or print operations will continue the same line of text in the console. See Global.MsgN for a version that does add a newline.

The text is blue on the server, orange on the client, and green on the menu:

**Argumentos:**

- `vararg args` — List of values to print.

**Retorna:**

*(sin retorno)*

---

### `Global:MsgAll` `[client/server]`

Works exactly like Global.Msg except that, if called on the server, will print to all players consoles plus the server console. Limitations of Global.print apply.

**Argumentos:**

- `vararg args` — List of values to print.

**Retorna:**

*(sin retorno)*

---

### `Global:MsgC` `[client/menu/server]`

Just like Global.Msg, except it can also print colored text, just like chat.AddText.

**Argumentos:**

- `vararg args` — Values to print. If you put in a color, all text after that color will be printed in that color.

**Retorna:**

*(sin retorno)*

---

### `Global:MsgN` `[client/menu/server]`

Same as Global.print, except it concatinates the arguments without inserting any whitespace in between them.

See also Global.Msg, which doesn't add a newline (`"\n"`) at the end.

**Argumentos:**

- `vararg args` — List of values to print. They can be of any type and will be converted to strings with Global.tostring.

**Retorna:**

*(sin retorno)*

---

### `Global:NamedColor` `[client]`

Returns named color defined in `resource/ClientScheme.res`.

**Argumentos:**

- `string name` — Name of color

**Retorna:**

- `Color` — A Color or nil

---

### `Global:NumDownloadables` `[menu]`

Returns the number of files needed from the server you are currently joining.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The number of downloadables

---

### `Global:NumModelSkins` `[client]`

Returns the amount of skins the specified model has if the model has ever been loaded before, without loading the model directly.

See also Entity:SkinCount if you have an entity.

**Argumentos:**

- `string modelName` — Model to return amount of skins of

**Retorna:**

- `number` — Amount of skins

*Fuente: `lua/includes/util/model_database.lua:80`*

---

### `Global:OnModelLoaded` `[client]`

Called by the engine when a model has been loaded. Caches model information with the sql.

**Argumentos:**

- `string modelName` — Name of the model.
- `number numPostParams` — Number of pose parameters the model has.
- `number numSeq` — Number of sequences the model has.
- `number numAttachments` — Number of attachments the model has.
- `number numBoneControllers` — Number of bone controllers the model has.
- `number numSkins` — Number of skins that the model has.
- `number size` — Size of the model.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/model_database.lua:23`*

---

### `Global:OpenFolder` `[menu]`

Opens a folder with the given name in the garrysmod folder using the operating system's file browser.

This does not work on OSX or Linux.

**Argumentos:**

- `string folder` — The subdirectory to open in the garrysmod folder.

**Retorna:**

*(sin retorno)*

---

### `Global:OpenProblemsPanel` `[menu]`

Opens the Problems Panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:165`*

---

### `Global:OrderVectors` `[client/menu/server]`

Modifies the given vectors so that all of vector2's axis are larger than vector1's by switching them around. Also known as ordering vectors.

This function will irreversibly modify the given vectors

**Argumentos:**

- `Vector vector1` — Bounding box min resultant
- `Vector vector2` — Bounding box max resultant

**Retorna:**

*(sin retorno)*

---

### `Global:Particle` `[client/menu/server]`

Calls game.AddParticles and returns given string.

**Argumentos:**

- `string file` — The particle file.

**Retorna:**

- `string` — The particle file.

*Fuente: `lua/includes/util.lua:174`*

---

### `Global:ParticleEffect` `[client/server]`

Creates a particle effect. See also Global.CreateParticleSystem.

The particle effect must be precached **serverside** with Global.PrecacheParticleSystem and the file its from must be added via game.AddParticles before it can be used!

**Argumentos:**

- `string particleName` — The name of the particle effect.
- `Vector position` — The start position of Control Point 0 for the particle system.
- `Angle angles` — The orientation of Control Point 0 for the particle system.

You must provide the entity argument for the angles to take effect.
- `Entity parent` = `NULL` — If set, the particle will be parented to the entity.

**Retorna:**

*(sin retorno)*

---

### `Global:ParticleEffectAttach` `[client/server]`

Creates a particle effect with specialized parameters. See also Entity:CreateParticleEffect and Global.CreateParticleSystem.

The particle effect must be precached **serverside** with Global.PrecacheParticleSystem and the file its from must be added via game.AddParticles before it can be used!

**Argumentos:**

- `string particleName` — The name of the particle effect.
- `number attachType` — Attachment type using Enums/PATTACH.
- `Entity entity` — The entity to be used in the way specified by the attachType.
- `number attachmentID` — The id of the attachment to be used in the way specified by the attachType.

**Retorna:**

*(sin retorno)*

---

### `Global:ParticleEmitter` `[client]`

Creates a new CLuaEmitter.

Do not forget to delete the emitter with CLuaEmitter:Finish once you are done with it
There is a limit of 4097 emitters that can be active at once, exceeding this limit will throw a non-halting error in console!

**Argumentos:**

- `Vector position` — The start position of the emitter.

This is only used to determine particle drawing order for translucent particles.
- `boolean use3D` = `false` — Whenever to render the particles in 2D or 3D mode. Supplying "true" will enable 3D (non-billboarded), otherwise it will default to 2D.

**Retorna:**

- `CLuaEmitter` — The new particle emitter.

---

### `Global:Path` `[server]`

Creates a path for the bot to follow using one of two types (`Follow` or `Chase`)

`Follow` is a general purpose path. Best used for static or infrequently updated locations. The path will only be updated once PathFollower:Update is called. This needs to be done manually (typically inside the bots `BehaveThread` coroutine.

`Chase` is a specifically optimized for chasing a moving entity. Paths of this type will use PathFollower:Chase

**Argumentos:**

- `string type` — The type of the path to create, must be `"Follow"` or `"Chase"`

**Retorna:**

- `PathFollower` — The path

---

### `Global:Player` `[client/server]`

Returns the player with the matching Player:UserID.

For a function that returns a player based on their Entity:EntIndex, see Global.Entity.

For a function that returns a player based on their connection ID, see player.GetByID.

**Argumentos:**

- `number playerIndex` — The player index.

**Retorna:**

- `Player` — The retrieved player.

---

### `Global:PositionSpawnIcon` `[client]`

Moves the given model to the given position and calculates appropriate camera parameters for rendering the model to an icon.

The output table interacts nicely with Panel:RebuildSpawnIconEx with a few key renames.

**Argumentos:**

- `Entity model` — Model that is being rendered to the spawn icon
- `Vector position` — Position that the model is being rendered at
- `boolean noAngles` — If true the function won't reset the angles to 0 for the model.

**Retorna:**

- `table` — Table of information of the view which can be used for rendering

*Fuente: `lua/includes/util/client.lua:208`*

---

### `Global:PrecacheParticleSystem` `[client/server]`

Precaches a particle system with the specified name. The particle system must come from a file that is loaded with game.AddParticles beforehand.

When used on the server, it automatically precaches the particle on client.

There is a limit of 4096 precached particles on the server. So only precache particles that are actually going to be used.

**Argumentos:**

- `string particleSystemName` — The name of the particle system.

**Retorna:**

*(sin retorno)*

---

### `Global:PrecacheScene` `[server]`

Precaches a scene file.

**Argumentos:**

- `string scene` — Path to the scene file to precache.

**Retorna:**

*(sin retorno)*

---

### `Global:PrecacheSentenceFile` `[client/server]`

Load and precache a custom sentence file.

**Argumentos:**

- `string filename` — The path to the custom sentences.txt.

**Retorna:**

*(sin retorno)*

---

### `Global:PrecacheSentenceGroup` `[server]`

Precache a sentence group in a sentences.txt definition file.

**Argumentos:**

- `string group` — The group to precache.

**Retorna:**

*(sin retorno)*

---

### `Global:PrintMessage` `[server]`

Displays a message in the chat, console, or center of screen of every player.

This uses the archaic user message system (umsg) and hence is limited to 255 characters.

**Argumentos:**

- `number type` — Which type of message should be sent to the players (see Enums/HUD)
- `string message` — Message to be sent to the players

**Retorna:**

*(sin retorno)*

---

### `Global:PrintTable` `[client/menu/server]`

Recursively prints the contents of a table to the console.

The table keys will be sorted alphabetically or numerically when printed to the console.

**Argumentos:**

- `table tableToPrint` — The table to be printed
- `number indent` = `0` — Number of tabs to start indenting at. Increases by 2 when entering another table.
- `table done` = `{}` — Internal argument, you shouldn't normally change this. Used to check if a nested table has already been printed so it doesn't get caught in a loop.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:90`*

---

### `Global:ProjectedTexture` `[client]`

Creates a new ProjectedTexture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ProjectedTexture` — Newly created projected texture.

---

### `Global:ProtectedCall` `[client/server]`

Runs a function without stopping the whole script on error.

This function is similar to Global.pcall and Global.xpcall except the errors are still printed and sent to the error handler (i.e. sent to server console if clientside and GM:OnLuaError called).

**Argumentos:**

- `function func` — Function to run
- `vararg arguments` — Arguments to call the function with.

**Retorna:**

- `boolean` — Whether the function executed successfully or not

---

### `Global:RandomPairs` `[client/menu/server]`

Returns an iterator function that can be used to loop through a table in random order

**Argumentos:**

- `table table` — Table to create iterator for
- `boolean descending` = `nil` — Whether the iterator should iterate descending or not

**Retorna:**

- `function` — Iterator function

*Fuente: `lua/includes/extensions/table.lua:614`*

---

### `Global:RealFrameTime` `[client]`

Returns the real frame-time which is unaffected by host_timescale. To be used for GUI effects (for example)
The returned number is clamped between `0` and `0.1`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Real frame time

*Fuente: `lua/includes/util/client.lua:10`*

---

### `Global:RealTime` `[client/server]`

Returns the uptime of the game/server in seconds (to at least **4** decimal places). This value updates itself once every time the realm thinks. For servers, this is the server tickrate. For clients, this is once per frame.

This is **not** synchronised or affected by the game.

This will be affected by precision loss if the uptime is more than 30+(?) days, and effectively cease to be functional after 50+(?) days.

Changing the map will **not** fix it like it does with Global.CurTime. A server restart is necessary.

You should use this function (or Global.SysTime) for timing real-world events such as user interaction, but not for timing game events such as animations.

See also: Global.CurTime, Global.SysTime

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Uptime of the game/server.

---

### `Global:RecipientFilter` `[server]`

Creates a new CRecipientFilter.

**Argumentos:**

- `boolean unreliable` = `false` — If set to true, makes the filter unreliable.

This means, when sending over the network in cases like Global.CreateSound (and its subsequent updates), the message is not guaranteed to reach all clients.

**Retorna:**

- `CRecipientFilter` — The new created recipient filter.

---

### `Global:RecordDemoFrame` `[menu]`

Adds a frame to the currently recording demo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/demo_to_video.lua:312`*

---

### `Global:RefreshAddonConflicts` `[menu]`

Refreshes all Addon Conflicts after 1 Second. Internally uses Global.FireAddonConflicts

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/problems/problems.lua:317`*

---

### `Global:RegisterDermaMenuForClose` `[client/menu]`

Registers a Derma element to be closed the next time Global.CloseDermaMenus is called

**Argumentos:**

- `Panel menu` — Menu to be registered for closure

**Retorna:**

*(sin retorno)*

---

### `Global:RegisterMetaTable` `[client/menu/server]`

Registers a given table as a metatable. It can then be accessed by other code/addons via Global.FindMetaTable.

**Argumentos:**

- `string metaName` — The new metatable name. Cannot override existing types.
- `table metaTable` — The new metatable table. It will be given a `MetaID` and `MetaName` fields.

**Retorna:**

*(sin retorno)*

---

### `Global:RememberCursorPosition` `[client/menu]`

Saves position of your cursor on screen. You can restore it by using Global.RestoreCursorPosition. This is used internally by the spawn menu/context menu

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:454`*

---

### `Global:RemoveTooltip` `[client/menu]`

Does the removing of the tooltip panel. Called by Global.EndTooltip.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/tooltips.lua:5`*

---

### `Global:RenderAngles` `[client]`

Returns the angle that the clients view is being rendered at. Returns `angles` from the return value of render.GetViewSetup.

See also Global.EyeAngles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — Render Angles

---

### `Global:RenderDoF` `[client]`

Renders a Depth of Field effect

**Argumentos:**

- `Vector origin` — Origin to render the effect at
- `Angle angle` — Angle to render the effect at
- `Vector usableFocusPoint` — Point to focus the effect at
- `number angleSize` — Angle size of the effect
- `number radialSteps` — Amount of radial steps to render the effect with
- `number passes` — Amount of render passes
- `boolean spin` — Whether to cycle the frame or not
- `table inView` — Table of view data
- `number fov` — FOV to render the effect with

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/super_dof.lua:174`*

---

### `Global:RenderStereoscopy` `[client]`

Renders the stereoscopic post-process effect

**Argumentos:**

- `Vector viewOrigin` — Origin to render the effect at
- `Angle viewAngles` — Angles to render the effect at

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/stereoscopy.lua:11`*

---

### `Global:RenderSuperDoF` `[client]`

Renders the Super Depth of Field post-process effect

**Argumentos:**

- `Vector viewOrigin` — Origin to render the effect at
- `Angle viewAngles` — Angles to render the effect at
- `number viewFOV` — Field of View to render the effect at

**Retorna:**

*(sin retorno)*

*Fuente: `lua/postprocess/super_dof.lua:281`*

---

### `Global:RequestConnectToServer` `[menu]`

Called by permissions.AskToConnect
If the server has the permission "connect" granted, it will instantly connect you to the server.
If the permission is not granted it will, it opens a confirmation window to connect to the server.

**Argumentos:**

- `string serverip` — The server ip to connect to

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/openurl.lua:292`*

---

### `Global:RequestOpenURL` `[menu]`

Opens a confirmation window to open the url.

**Argumentos:**

- `string url` — The Website URL to open.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/openurl.lua:286`*

---

### `Global:RequestPermission` `[menu]`

Opens a confirmation window to grant the requested permission.

**Argumentos:**

- `string permission` — The permission to ask

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/openurl.lua:301`*

---

### `Global:RestoreCursorPosition` `[client/menu]`

Restores position of your cursor on screen. You can save it by using Global.RememberCursorPosition.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:476`*

---

### `Global:RunConsoleCommand` `[client/menu/server]`

Executes the given console command with the parameters.

Some commands/convars are blocked from being ran/changed using this function, usually to prevent harm/annoyance to clients. For a list of blocked commands, see Blocked ConCommands.

**Argumentos:**

- `string command` — The command to be executed.
- `vararg arguments` — The arguments. Note, that unlike Player:ConCommand, you must pass each argument as a new string, not separating them with a space.

**Retorna:**

*(sin retorno)*

---

### `Global:RunGameUICommand` `[menu]`

Runs a menu command. Equivalent to Global.RunConsoleCommand`( "gamemenucommand", command )` unless the command starts with the `"engine"` keyword in which case it is equivalent to Global.RunConsoleCommand`( command )`.
Invoking engine commands no longer works, prints out `Not running engine cmd 'concommand'`

**Argumentos:**

- `string command` — The menu command to run

Should be one of the following:
* `Disconnect` - Disconnects from the current server.
* `OpenBenchmarkDialog` - Opens the "Video Hardware Stress Test" dialog.
* `OpenChangeGameDialog` - Does not work in GMod.
* `OpenCreateMultiplayerGameDialog` - Opens the Source dialog for creating a listen server.
* `OpenCustomMapsDialog` - Does nothing.
* `OpenFriendsDialog` - Does nothing.
* `OpenGameMenu` - Does not work in GMod.
* `OpenLoadCommentaryDialog` - Opens the "Developer Commentary" selection dialog. Useless in GMod.
* `OpenLoadDemoDialog` - Does nothing.
* `OpenLoadGameDialog` - Opens the Source "Load Game" dialog.
* `OpenNewGameDialog` - Opens the "New Game" dialog. Useless in GMod.
* `OpenOptionsDialog` - Opens the options dialog.
* `OpenPlayerListDialog` - Opens the "Mute Players" dialog that shows all players connected to the server and allows to mute them.
* `OpenSaveGameDialog` - Opens the Source "Save Game" dialog.
* `OpenServerBrowser` - Opens the legacy server browser.
* `Quit` - Quits the game **without** confirmation (unlike other Source games).
* `QuitNoConfirm` - Quits the game without confirmation (like other Source games).
* `ResumeGame` - Closes the menu and returns to the game.
* `engine 'concommand'` - Runs a console command. Unlike Global.RunConsoleCommand It will ignore Blocked ConCommands

**Retorna:**

*(sin retorno)*

---

### `Global:RunString` `[client/menu/server]`

Evaluates and executes the given code, will throw an error on failure.
Local variables are not passed to the given code.

**Argumentos:**

- `string code` — The code to execute.
- `string identifier` = `RunString` — The name that should appear in any error messages caused by this code.
- `boolean handleError` = `true` — If false, this function will return a string containing any error messages instead of throwing an error.

**Retorna:**

- `string` — If handleError is false, the error message (if any).

---

### `Global:RunStringEx` `[client/menu/server]`

Alias of Global.RunString.

Use Global.RunString instead.

**Argumentos:**

- `string code` — The code to execute.
- `string identifier` = `RunString` — The name that should appear in any error messages caused by this code.
- `boolean handleError` = `true` — If false, this function will return a string containing any error messages instead of throwing an error.

**Retorna:**

- `string` — If handleError is false, the error message (if any).

---

### `Global:SQLStr` `[client/menu/server]`

Returns the input value in an escaped form so that it can safely be used inside of queries. The returned value is surrounded by quotes unless `noQuotes` is true. Alias of sql.SQLStr.

Do not use this function with external database engines such as `MySQL`. `MySQL` and `SQLite` use different escape sequences that are incompatible with each other! Escaping strings with inadequate functions is dangerous and will lead to SQL injection vulnerabilities.

**Argumentos:**

- `string input` — String to be escaped
- `boolean noQuotes` = `false` — Set this as `true`, and the function will not wrap the input string in apostrophes.

**Retorna:**

- `string` — Escaped input

*Fuente: `lua/includes/util/sql.lua:27`*

---

### `Global:SScale` `[client]`

You should be using Global.ScreenScale instead.

Returns a number based on the Size argument and your screen's width. Alias of Global.ScreenScale.

**Argumentos:**

- `number Size` — The number you want to scale.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/globals.lua:14`*

---

### `Global:STNDRD` `[client/menu/server]`

Returns the ordinal suffix of a given number.

**Argumentos:**

- `number number` — The number to find the ordinal suffix of.

**Retorna:**

- `string` — suffix

*Fuente: `lua/includes/util.lua:338`*

---

### `Global:SafeRemoveEntity` `[client/menu/server]`

Removes the given entity unless it is a player or the world entity.

**Argumentos:**

- `Entity ent` — Entity to safely remove.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:270`*

---

### `Global:SafeRemoveEntityDelayed` `[client/menu/server]`

Removes entity after delay using Global.SafeRemoveEntity.

**Argumentos:**

- `Entity entity` — Entity to be removed.
- `number delay` — Delay for entity removal in seconds.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util.lua:281`*

---

### `Global:SaveAddonPresets` `[menu]`

Sets the content of `addonpresets.txt` located in the `garrysmod/settings` folder. By default, this file stores your addon presets as JSON.

You can use Global.LoadAddonPresets to retrieve the data in this file.

**Argumentos:**

- `string JSON` — The new contents of the file.

**Retorna:**

*(sin retorno)*

---

### `Global:SaveHideNews` `[menu]`

Hides the News List when set to true.
If you call this don't forget to call Global.LoadNewsList to update the News List.

**Argumentos:**

- `boolean hide` — true if it should hide the News.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:309`*

---

### `Global:SaveLastMap` `[menu]`

This function is used to save the last map and category to which the map belongs as a .

**Argumentos:**

- `string map` — The name of the map.
- `string category` — The name of the category to which this map belongs.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/getmaps.lua:441`*

---

### `Global:SavePresets` `[client]`

Overwrites all presets with the supplied table. Used by the presets for preset saving

**Argumentos:**

- `table presets` — Presets to be saved

**Retorna:**

*(sin retorno)*

---

### `Global:ScrH` `[client/menu]`

Gets the height of the game's window (in pixels).
ScrH() returns the height from the current viewport, this can be changed via render.SetViewPort, inside Render Targets and cam.Start contexts.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of the game's window in pixels

---

### `Global:ScrW` `[client/menu]`

Gets the width of the game's window (in pixels).
ScrW() returns the width from the current viewport, this can be changed via render.SetViewPort, inside Render Targets and cam.Start contexts.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The width of the game's window in pixels

---

### `Global:ScreenScale` `[client]`

Returns a number based on the `size` argument and the players' screen width. This is used to scale user interface (UI) elements to be consistently sized and positioned across all screen resolutions.

The width is scaled in relation to `640x480` resolution, and does **not** take into account non the aspect ratio. See example below for how to adjust for that.

This function can also be used for scaling font sizes.

See Global.ScreenScaleH for a function that scales from height.

**Argumentos:**

- `number size` — The position or size you want to scale within 640 pixel wide screen.

**Retorna:**

- `number` — The scaled number based on the player's screen width.

*Fuente: `lua/includes/extensions/client/globals.lua:6`*

---

### `Global:ScreenScaleH` `[client]`

Returns a number based on the `size` argument and players' screen height. The height is scaled in relation to `640x480` resolution.  This function is primarily used for scaling font sizes.

See Global.ScreenScale for a function that scales from width.

**Argumentos:**

- `number size` — The number you want to scale.

**Retorna:**

- `number` — The scaled number based on your screen's height.

*Fuente: `lua/includes/extensions/client/globals.lua:10`*

---

### `Global:SendUserMessage` `[client/server]`

Send a usermessage

This uses the umsg internally, which has been deprecated. Use the net instead.

This does nothing clientside.

**Argumentos:**

- `string name` — The name of the usermessage
- `any recipients` — Can be a CRecipientFilter, table or Player object.
- `vararg args` — Data to send in the usermessage

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/usermessage.lua:11`*

---

### `Global:SentenceDuration` `[client/server]`

Returns approximate duration of a sentence by name. See Global.EmitSentence.

**Argumentos:**

- `string name` — The sentence name.

**Retorna:**

- `number` — The approximate duration.

---

### `Global:ServerLog` `[server]`

Prints `ServerLog: PARAM` without a newline, to the server log and console.

As of June 2022, if `sv_logecho` is set to `0` (defaults to `1`) the message will not print to console and will only be written to the server's log file.

**Argumentos:**

- `string parameter` — The value to be printed to console.

**Retorna:**

*(sin retorno)*

---

### `Global:SetClipboardText` `[client/menu]`

Adds the given string to the computers clipboard, which can then be pasted in or outside of GMod with Ctrl + V.

**Argumentos:**

- `string text` — The text to add to the clipboard.

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Angle` `[client/server]`

Defines an angle to be automatically networked to clients

Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global angle with
- `Angle angle` — Angle to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Bool` `[client/server]`

Defined a boolean to be automatically networked to clients

Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global boolean with
- `boolean bool` — Boolean to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Entity` `[client/server]`

Defines an entity to be automatically networked to clients

Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global entity with
- `Entity ent` — Entity to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Float` `[client/server]`

Defines a floating point number to be automatically networked to clients

This function has a floating point precision error. Use Global.SetGlobalFloat instead
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global float with
- `number float` — Float to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Int` `[client/server]`

Sets an integer that is shared between the server and all clients.
The integer has a 32 bit limit. Use Global.SetGlobalInt instead
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `number value` — The value to set the global value to

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2String` `[client/server]`

Defines a string with a maximum of 511 characters to be automatically networked to clients

Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global string with
- `string string` — String to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Var` `[client/server]`

Defines a variable to be automatically networked to clients

| Allowed Types   |
| --------------- |
| Angle           |
| Boolean         |
| Entity          |
| Float           |
| Int             |
| String          |
| Vector          |
Trying to network a type that is not listed above will result in a nil value!
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global vector with
- `any value` — Value to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobal2Vector` `[client/server]`

Defines a vector to be automatically networked to clients

Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global vector with
- `Vector vec` — Vector to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalAngle` `[client/server]`

Defines an angle to be automatically networked to clients

There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Angle. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global angle with
- `Angle angle` — Angle to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalBool` `[client/server]`

Defined a boolean to be automatically networked to clients

There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Bool. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global boolean with
- `boolean bool` — Boolean to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalEntity` `[client/server]`

Defines an entity to be automatically networked to clients

There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Entity. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global entity with
- `Entity ent` — Entity to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalFloat` `[client/server]`

Defines a floating point number to be automatically networked to clients

There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Float. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global float with
- `number float` — Float to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalInt` `[client/server]`

Sets an integer that is shared between the server and all clients.

There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Int. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
Running this function clientside will only set it clientside for the client it is called on!
This function will not round decimal values as it actually networks a 64 bit float internally.

**Argumentos:**

- `string index` — The unique index to identify the global value with.
- `number value` — The value to set the global value to

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalString` `[client/server]`

Defines a string with a maximum of 199 characters to be automatically networked to clients

There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2String. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
If you want to have a higher characters limit use Global.SetGlobal2String
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global string with
- `string string` — String to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalVar` `[client/server]`

Defines a variable to be automatically networked to clients

| Allowed Types   |
| --------------- |
| Angle           |
| Boolean         |
| Entity          |
| Float           |
| Int             |
| String          |
| Vector          |
Trying to network a type that is not listed above will result in an error!
There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Var. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage

Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global vector with
- `any value` — Value to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetGlobalVector` `[client/server]`

Defines a vector to be automatically networked to clients
There's a 4095 slots Network limit. If you need more, consider using the net library or Global.SetGlobal2Vector. You should also consider the fact that you have way too many variables. You can learn more about this limit here: Networking_Usage
Running this function clientside will only set it clientside for the client it is called on!

**Argumentos:**

- `any index` — Index to identify the global vector with
- `Vector vec` — Vector to be networked

**Retorna:**

*(sin retorno)*

---

### `Global:SetPhysConstraintSystem` `[client/server]`

Called by the engine to set which [constraint system](https://developer.valvesoftware.com/wiki/Phys_constraintsystem) the next created constraints should use.

**Argumentos:**

- `Entity constraintSystem` — Constraint system to use

**Retorna:**

*(sin retorno)*

---

### `Global:SortedPairs` `[client/menu/server]`

This function can be used in a for loop instead of Global.pairs. It sorts all **keys** alphabetically.

For sorting by specific **value member**, use Global.SortedPairsByMemberValue.

For sorting by **value**, use Global.SortedPairsByValue.

**Argumentos:**

- `table table` — The table to sort
- `boolean desc` = `false` — Reverse the sorting order

**Retorna:**

- `function` — Iterator function
- `table` — The table being iterated over

*Fuente: `lua/includes/extensions/table.lua:552`*

---

### `Global:SortedPairsByMemberValue` `[client/menu/server]`

Returns an iterator function that can be used to loop through a table in order of member values, when the values of the table are also tables and contain that member.

To sort by **value**, use Global.SortedPairsByValue.

To sort by **keys**, use Global.SortedPairs.

**Argumentos:**

- `table table` — Table to create iterator for.
- `any memberKey` — Key of the value member to sort by.
- `boolean descending` = `false` — Whether the iterator should iterate in descending order or not.

**Retorna:**

- `function` — Iterator function
- `table` — The table the iterator was created for.

*Fuente: `lua/includes/extensions/table.lua:578`*

---

### `Global:SortedPairsByValue` `[client/menu/server]`

Returns an iterator function that can be used to loop through a table in order of its **values**.

To sort by specific **value member**, use Global.SortedPairsByMemberValue.

To sort by **keys**, use Global.SortedPairs.

**Argumentos:**

- `table table` — Table to create iterator for
- `boolean descending` = `false` — Whether the iterator should iterate in descending order or not

**Retorna:**

- `function` — Iterator function
- `table` — The table which will be iterated over

*Fuente: `lua/includes/extensions/table.lua:578`*

---

### `Global:Sound` `[client/menu/server]`

Runs util.PrecacheSound and returns the string.

util.PrecacheSound does nothing and therefore so does this function.

**Argumentos:**

- `string soundPath` — The soundpath to precache.

**Retorna:**

- `string` — The string passed as the first argument.

*Fuente: `lua/includes/util.lua:158`*

---

### `Global:SoundDuration` `[client/server]`

Returns the approximate duration of the specified sound in seconds, for `.wav` and `.mp3` sounds.
This function only works on mp3 files if the file is encoded with constant bitrate.
This function will not work with sound files prepended with a [sound character](https://developer.valvesoftware.com/wiki/Soundscripts#Sound_Characters).

**Argumentos:**

- `string soundName` — The sound file path.

**Retorna:**

- `number` — Sound duration in seconds.

---

### `Global:SuppressHostEvents` `[server]`

Suppress any networking from the server to the specified player. Set this to NULL to stop suppressing network events.

This is automatically called by the engine before/after a player fires their weapon, reloads, or causes any other similar shared-predicted event to occur.

**Argumentos:**

- `Player suppressPlayer` — The player to suppress any networking to.

**Retorna:**

*(sin retorno)*

---

### `Global:SysTime` `[client/menu/server]`

Returns a highly accurate time in seconds since the start up, ideal for benchmarking. Unlike Global.RealTime, this value will be updated any time the function is called, allowing for sub-think precision.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Uptime of the server.

---

### `Global:TauntCamera` `[client/server]`

Returns a TauntCamera object

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — TauntCamera

*Fuente: `gamemodes/base/gamemode/player_class/taunt_camera.lua:14`*

---

### `Global:TextEntryLoseFocus` `[client/menu]`

Clears focus from any text entries player may have focused.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dtextentry.lua:415`*

---

### `Global:TimedCos` `[client/menu/server]`

Returns a cosine value that fluctuates based on the current time

**Argumentos:**

- `number frequency` — The frequency of fluctuation
- `number min` — Minimum value
- `number max` — Maximum value
- `number offset` — Offset variable that doesn't affect the rate of change, but causes the returned value to be offset by time

**Retorna:**

- `number` — Cosine value

*Fuente: `lua/includes/util.lua:358`*

---

### `Global:TimedSin` `[client/menu/server]`

Returns a sine value that fluctuates based on Global.CurTime. The value returned will be between the start value plus/minus the range value.

The range arguments don't work as intended. The existing (bugged) behavior is documented below.

**Argumentos:**

- `number frequency` — The frequency of fluctuation, in
- `number origin` — The center value of the sine wave.
- `number max` — This argument's distance from origin defines the size of the full range of the sine wave. For example, if origin is 3 and max is 5, then the full range of the sine wave is 5-3 = 2. 3 is the center point of the sine wave, so the sine wave will range between 2 and 4.
- `number offset` — Offset variable that doesn't affect the rate of change, but causes the returned value to be offset by time

**Retorna:**

- `number` — Sine value

*Fuente: `lua/includes/util.lua:351`*

---

### `Global:ToggleFavourite` `[menu]`

Toggles whether or not the named map is favorited in the new game list.

**Argumentos:**

- `string map` — Map to toggle favorite.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/getmaps.lua:423`*

---

### `Global:TranslateDownloadableName` `[menu]`

Returns "Lua Cache File" if the given file name is in a certain string table, nothing otherwise.

**Argumentos:**

- `string filename` — File name to test

**Retorna:**

- `string` — "Lua Cache File" if the given file name is in a certain string table, nothing otherwise.

---

### `Global:TypeID` `[client/server]`

Gets the associated type ID of the variable. Unlike Global.type, this does not work with no value - an argument must be provided.

This will return `TYPE_TABLE` for Color objects.

All subclasses of Entity will return `TYPE_ENTITY`.

This returns garbage for _LOADLIB objects.
This returns `TYPE_NIL` for protos.

**Argumentos:**

- `any variable` — The variable to get the type ID of.

**Retorna:**

- `number` — The type ID of the variable. See the Enums/TYPE.

---

### `Global:UTIL_IsUselessModel` `[client/menu/server]`

You should use Global.IsUselessModel instead.

This function is an alias of Global.IsUselessModel.

Returns whether or not a model is useless by checking that the file path is that of a proper model.

If the string ".mdl" is not found in the model name, the function will return true.

The function will also return true if any of the following strings are found in the given model name:
* "_gesture"
* "_anim"
* "_gst"
* "_pst"
* "_shd"
* "_ss"
* "_posture"
* "_anm"
* "ghostanim"
* "_paths"
* "_shared"
* "anim_"
* "gestures_"
* "shared_ragdoll_"

**Argumentos:**

- `string modelName` — The model name to be checked

**Retorna:**

- `boolean` — Whether or not the model is useless

*Fuente: `lua/includes/util.lua:336`*

---

### `Global:UnPredictedCurTime` `[client/menu/server]`

Returns the current asynchronous in-game time. This will not be synced with the players current clock allowing you to get Global.CurTime without interference from Prediction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The asynchronous in-game time.

---

### `Global:UpdateAddonDisabledState` `[menu]`

This function retrieves the values from Global.GetAddonStatus and passes them to JS(JavaScript).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:567`*

---

### `Global:UpdateAddonMapList` `[menu]`

This function is called by Global.UpdateMapList to pass the AddonMaps to JS to be used for the Search.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/getmaps.lua:271`*

---

### `Global:UpdateGames` `[menu]`

Updates the Gamelist.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:546`*

---

### `Global:UpdateLanguages` `[menu]`

This function searches for all available languages and passes them to JS(JavaScript). JS then updates the Language list with the given languages.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:523`*

---

### `Global:UpdateLoadPanel` `[menu]`

Runs JavaScript on the loading screen panel (Global.GetLoadPanel).

**Argumentos:**

- `string javascript` — JavaScript to run on the loading panel.

**Retorna:**

*(sin retorno)*

---

### `Global:UpdateMapList` `[menu]`

Called from JS when starting a new game
This function updates the Map List

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/getmaps.lua:280`*

---

### `Global:UpdateServerSettings` `[menu]`

Called from JS when starting a new game
Updates the Server Settings when called.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:216`*

---

### `Global:UpdateSubscribedAddons` `[menu]`

Updates the Addons list.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/menu/mainmenu.lua:555`*

---

### `Global:VGUIFrameTime` `[client/menu/server]`

Use the function Global.SysTime instead.
Identical to Global.SysTime. On Windows, will be the previous value of Global.SysTime.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Global:VGUIRect` `[client]`

Creates and returns a DShape rectangle GUI element with the given dimensions.

**Argumentos:**

- `number x` — X position of the created element
- `number y` — Y position of the created element
- `number w` — Width of the created element
- `number h` — Height of the created element

**Retorna:**

- `Panel` — DShape element

*Fuente: `lua/vgui/dshape.lua:34`*

---

### `Global:ValidPanel` `[client/menu]`

You should use Global.IsValid instead

Returns if a panel is safe to use.

**Argumentos:**

- `Panel panel` — The panel to validate.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/panel.lua:465`*

---

### `Global:Vector` `[client/menu/server]`

Creates a Vector object.
Creating Vectors is relatively expensive when used in often running hooks or in operations requiring very frequent calls (like loops for example) due to object creation and garbage collection. It is better to store the vector in a variable or to use the [default vectors](https://wiki.facepunch.com/gmod/Global_Variables#misc) available. See Vector:Add.

**Argumentos:**

- `number x` = `0` — The x component of the vector.
- `number y` = `0` — The y component of the vector.
- `number z` = `0` — The z component of the vector.

**Retorna:**

- `Vector` — The created vector object.

**Sobrecargas:**

- Variante 1: - `Vector vector` — Creates a new Vector that is a copy of the given Vector.

- Variante 2: - `string vectorString` — Attempts to parse the input string from the Global.print format of an Vector.

Returns a Vector with its `x`, `y`, and `z` set to `0` if the string cannot be parsed.

---

### `Global:VectorRand` `[client/menu/server]`

Returns a random vector whose components are each between min(inclusive), max(exclusive).

**Argumentos:**

- `number min` = `-1` — Min bound inclusive.
- `number max` = `1` — Max bound exclusive.

**Retorna:**

- `Vector` — The random direction vector.

*Fuente: `lua/includes/util.lua:130`*

---

### `Global:VisualizeLayout` `[client/menu]`

Used by the **vgui_visualizelayout** convar
Briefly displays layout details of the given panel on-screen

**Argumentos:**

- `Panel panel` — Panel to display layout details of

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/util/vgui_showlayout.lua:33`*

---

### `Global:WorkshopFileBase` `[client/menu]`

Returns a new WorkshopFileBase element

**Argumentos:**

- `string namespace` — Namespace for the file base
- `table requiredTags` — Tags required for a Workshop submission to be interacted with by the filebase

**Retorna:**

- `table` — WorkshopFileBase element

*Fuente: `lua/includes/util/workshop_files.lua:6`*

---

### `Global:WorldToLocal` `[client/server]`

Translates a worldspace vector and angle into a specific coordinate system.

**Argumentos:**

- `Vector position` — A worldspace vector.
- `Angle angle` — A worldspace angle.
- `Vector newSystemOrigin` — The origin of the new coordinate system.
- `Angle newSystemAngles` — The angles of the new coordinate system.

**Retorna:**

- `Vector` — The corresponding local space `position`
- `Angle` — The corresponding local space `angle`

---

### `Global:assert` `[client/menu/server]`

If the result of the first argument is false or nil, an error is thrown with the second argument as the message.

**Argumentos:**

- `any expression` — The expression to assert.
- `string errorMessage` = `assertion failed!` — The error message to throw when assertion fails. This is only type-checked if the assertion fails.
- `vararg returns` = `nil` — Any arguments past the error message will be returned by a successful assert.

**Retorna:**

- `any` — If successful, returns the first argument.
- `any` — If successful, returns the error message. This will be nil if the second argument wasn't specified.

Since the second argument is only type-checked if the assertion fails, this doesn't have to be a string.
- `vararg` — Returns any arguments past the error message.

---

### `Global:collectgarbage` `[client/menu/server]`

Executes the specified action on the garbage collector.

**Argumentos:**

- `string action` = `collect` — The action to run.

Valid actions are `collect`, `stop`, `restart`, `count`, `step`, `setpause`, `setstepmul` and `isrunning`.
`isrunning` is only available on the x86-64 versions, because of the difference in the LuaJIT version. [See here](jit.version)
- `number arg` — The argument of the specified action, only applicable for `step`, `setpause` and `setstepmul`.

**Retorna:**

- `any` — If the action is count this is the number of kilobytes of memory used by Lua.
If the action is step this is true if a garbage collection cycle was finished.

If the action is setpause this is the previous value for the GC's pause.
If the action is setstepmul this is the previous value for the GC's step.

---

### `Global:error` `[client/menu/server]`

Throws a Lua error and breaks out of the current call stack.

**Argumentos:**

- `string message` — The error message to throw.
- `number errorLevel` = `1` — The level to throw the error at.

**Retorna:**

*(sin retorno)*

---

### `Global:gcinfo` `[client/menu/server]`

This function was deprecated in Lua 5.1 and is removed in Lua 5.2. Use Global.collectgarbage( "count" ) instead. Returns the current floored dynamic memory usage of Lua in kilobytes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current floored dynamic memory usage of Lua, in kilobytes.

---

### `Global:getfenv` `[client/menu/server]`

Returns the environment table of either the stack level or the function specified.

**Argumentos:**

- `function location` = `1` — The object to get the enviroment from. Can also be a number that specifies the function at that stack level: Level 1 is the function calling getfenv. Level 0 is the base Garry's Mod environment (_G).

**Retorna:**

- `table` — The environment.

---

### `Global:getmetatable` `[client/menu/server]`

Returns the metatable of an object. This function obeys the metatable's __metatable field, and will return that field if the metatable has it set.

Use debug.getmetatable if you want the true metatable of the object.

If you want to modify the metatable, check out Global.FindMetaTable

**Argumentos:**

- `any object` — The value to return the metatable of.

**Retorna:**

- `any` — The metatable of the value. This is not always a table.

---

### `Global:include` `[client/menu/server]`

Executes a Lua script.

This function will try to load local client file if `sv_allowcslua` is **1**.

The file you are attempting to include **MUST NOT** be empty or the include will fail. Files over a certain size (64KB compressed) may fail clientside as well.

If the file you are including is clientside or shared, it **must** be Global.AddCSLuaFile'd or this function will error saying the file doesn't exist.

**Argumentos:**

- `string fileName` — The name of the script to be executed. The path must be either relative to the current file, or be an absolute path (relative to and excluding the **lua/** folder).

Addon files (.gma files) and dedicated servers clientside do not support relative parent folders (`..` notation).

Absolute paths for gamemode files must include `/gamemode/`.

Please make sure your file names are unique, the filesystem is shared across all addons, so a file named `lua/config.lua` in your addon may be overwritten by the same file in another addon.

**Retorna:**

- `vararg` — Anything that the executed Lua script returns.

---

### `Global:ipairs` `[client/menu/server]`

Returns a [Stateless Iterator](https://www.lua.org/pil/7.3.html) for a [Generic For Loops](https://www.lua.org/pil/4.3.5.html), to return ordered key-value pairs from a table.

This will only iterate through **numerical** keys, and these must also be **sequential**; starting at 1 with no gaps.

For unordered pairs, see Global.pairs.

For pairs sorted by key in alphabetical order, see Global.SortedPairs.

**Argumentos:**

- `table tab` — The table to iterate over.

**Retorna:**

- `function` — The iterator function.
- `table` — The table being iterated over.
- `number` — The origin index **=0**.

---

### `Global:isangle` `[client/menu/server]`

Returns if the passed object is an Angle.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is an Angle.

---

### `Global:isbool` `[client/menu/server]`

Returns if the passed object is a boolean.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a boolean.

---

### `Global:isentity` `[client/menu/server]`

Returns if the passed object is an Entity.

**Argumentos:**

- `any variable` — The variable to check.

**Retorna:**

- `boolean` — True if the variable is an Entity.

---

### `Global:isfunction` `[client/menu/server]`

Returns if the passed object is a function.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a function.

---

### `Global:ismatrix` `[client/menu/server]`

Returns whether the passed object is a VMatrix.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a VMatrix.

---

### `Global:isnumber` `[client/menu/server]`

Returns if the passed object is a number.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a number.

---

### `Global:ispanel` `[client/menu/server]`

Returns if the passed object is a Panel.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a Panel.

---

### `Global:isstring` `[client/menu/server]`

Returns if the passed object is a string.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a string.

---

### `Global:istable` `[client/menu/server]`

Returns if the passed object is a table.
Will return `true` if the argument has a metatable. It will return `true` for variables of type Color as well.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a table.

---

### `Global:isvector` `[client/menu/server]`

Returns if the passed object is a Vector.

**Argumentos:**

- `any variable` — The variable to perform the type check for.

**Retorna:**

- `boolean` — True if the variable is a Vector.

---

### `Global:module` `[client/menu/server]`

Creates a table with the specified module name and sets the function environment for said table.

Any passed loaders are called with the table as an argument. An example of this is package.seeall.

**Argumentos:**

- `string name` — The name of the module. This will be used to access the module table in the runtime environment.
- `vararg loaders` — Calls each function passed with the new table as an argument.

**Retorna:**

*(sin retorno)*

---

### `Global:newproxy` `[client/menu/server]`

Fails under certain conditions when called in coroutines
Creates a new userdata object.

**Argumentos:**

- `boolean addMetatable` = `false` — If true, the created userdata will be given its own metatable.

**Retorna:**

- `userdata` — The newly created userdata.

**Sobrecargas:**

- Variante 1: - `userdata userData` — Creates a new userdata with the same metatable the userdata passed in had. The userdata passed in **must be** a userdata that has a metatable that was created from this function.

---

### `Global:next` `[client/menu/server]`

Returns the next key and value pair in a table.

Table keys in Lua have no specific order, and will be returned in whatever order they exist in memory. This may not always be in ascending order or alphabetical order. If you need to iterate over an array in order, use Global.ipairs.

**Argumentos:**

- `table tab` — The table
- `any prevKey` = `nil` — The previous key in the table.

**Retorna:**

- `any` — The next key for the table. If the previous key was nil, this will be the first key in the table. If the previous key was the last key in the table, this will be nil.
- `any` — The value associated with that key. If the previous key was the last key in the table, this will be nil.

---

### `Global:pairs` `[client/menu/server]`

Returns an iterator function(Global.next) for a for loop that will return the values of the specified table in an arbitrary order.

* For alphabetical **key** order use Global.SortedPairs.
* For alphabetical **value** order use Global.SortedPairsByValue.

**Argumentos:**

- `table tab` — The table to iterate over.

**Retorna:**

- `function` — The iterator (Global.next).
- `table` — The table being iterated over.
- `any` — **nil** (for the constructor).

---

### `Global:pcall` `[client/menu/server]`

Calls a function and catches an error that can be thrown while the execution of the call.

This cannot stop errors from hooks called from the engine.

This does not stop Global.Error and Global.ErrorNoHalt from sending error messages to the server (if called clientside) or calling the GM:OnLuaError hook. The success boolean returned will always return true and thus you will not get the error message returned. Global.error does not exhibit these behaviours.

**Argumentos:**

- `function func` — Function to be executed and of which the errors should be caught of
- `vararg arguments` — Arguments to call the function with.

**Retorna:**

- `boolean` — If the function had no errors occur within it.
- `vararg` — If an error occurred, this will be a string containing the error message. Otherwise, this will be the return values of the function passed in.

---

### `Global:print` `[client/menu/server]`

Writes every given argument to the console.
Automatically attempts to convert each argument to a string. (See Global.tostring)

Separates lines with a line break (`"\n"`)

Separates arguments with a tab character (`"\t"`).

Can only print up to `4096` characters at a time, and will stop at NULL character. (`"\0"`)

See Global.Msg for alternative that doesn't force add a new line, and Global.MsgC for adding colored text to the console.

**Argumentos:**

- `vararg args` — List of values to print.

**Retorna:**

*(sin retorno)*

---

### `Global:rawequal` `[client/menu/server]`

Compares the two values without calling their __eq operator.

**Argumentos:**

- `any value1` — The first value to compare.
- `any value2` — The second value to compare.

**Retorna:**

- `boolean` — Whether or not the two values are equal.

---

### `Global:rawget` `[client/menu/server]`

Gets the value with the specified key from the table without calling the __index method.

**Argumentos:**

- `table table` — Table to get the value from.
- `any index` — The index to get the value from.

**Retorna:**

- `any` — The value.

---

### `Global:rawset` `[client/menu/server]`

Sets the value with the specified key from the table without calling the __newindex method.

**Argumentos:**

- `table table` — Table to get the value from.
- `any index` — The index to get the value from.
- `any value` — The value to set for the specified key.

**Retorna:**

*(sin retorno)*

---

### `Global:require` `[client/menu/server]`

First tries to load a binary module with the given name, if unsuccessful, it tries to load a Lua module with the given name.

Running this function with Global.pcall or Global.xpcall will still print an error that counts towards sv_kickerrornum.
This function will try to load local client file if `sv_allowcslua` is set to `1`

Binary modules can't be installed as part of an addon and have to be put directly into ``garrysmod/lua/bin/`` to be detected.
This is a safety measure, because modules can be malicious and harm the system.

**Argumentos:**

- `string name` — The name of the module to be loaded.

**Retorna:**

*(sin retorno)*

---

### `Global:select` `[client/menu/server]`

Used to select single values from a vararg or get the count of values in it.

**Argumentos:**

- `any parameter` — Can be a number or string.
* If it's a string and starts with "#", the function will return the amount of values in the vararg (ignoring the rest of the string).
* If it's a positive number, the function will return all values starting from the given index.
* If the number is negative, it will return the amount specified from the end instead of the beginning. This mode will not be compiled by LuaJIT.
- `vararg vararg` — The vararg. These are the values from which you want to select.

**Retorna:**

- `any` — Returns a number or vararg, depending on the select method.

---

### `Global:setfenv` `[client/menu/server]`

Sets the environment for a function or a stack level. Can be used to sandbox code.

**Argumentos:**

- `function location` — The function to set the environment for, or a number representing stack level.
- `table environment` — Table to be used as the the environment.

**Retorna:**

- `function` — The function passed, otherwise nil.

---

### `Global:setmetatable` `[client/menu/server]`

Sets, changes or removes a table's metatable. Returns Tab (the first argument).

**Argumentos:**

- `table Tab` — The table who's metatable to change.
- `table Metatable` — The metatable to assign.  If it's nil, the metatable will be removed.

**Retorna:**

- `table` — The first argument.

---

### `Global:tobool` `[client/menu/server]`

Attempts to return an appropriate boolean for the given value

**Argumentos:**

- `any input` — The object to be converted to a boolean

**Retorna:**

- `boolean` — * `false` for the boolean `false`.
* `false` for `"false"`.
* `false` for `"0"`.
* `false` for numeric `0`.
* `false` for `nil`.
* `true` otherwise.

*Fuente: `lua/includes/util.lua:304`*

---

### `Global:tonumber` `[client/menu/server]`

Converts strings containing numbers into actual numbers.

Can also convert numbers from other [numerical bases](https://www.mathsisfun.com/numbers/bases.html) to base 10.

**Argumentos:**

- `string value` — The value to be converted.

This string can contain digits from `0` to `9` (inclusive) for numerical bases from `2` to `10` (inclusive), and from `0` to `z` for bases greater than `10`.

The maximum value depends on the specific base value provided, for example for base 3 `0, 1, 2` are permitted. For base 11, `0-9` and `a` are permitted.
- `number base` = `10` — The numerical base of the digits in the input value.
Must be an integer between `2` and `36` (inclusive)

**Retorna:**

- `number|nil` — The base `10` number representation of the input value, or `nil` if the conversion failed.

---

### `Global:tostring` `[client/menu/server]`

Attempts to convert the value to a string. If the value is an object and its metatable has defined the __tostring metamethod, this will call that function.

Global.print also uses this functionality.

**Argumentos:**

- `any value` — The object to be converted to a string.

**Retorna:**

- `string` — The string representation of the value.

---

### `Global:type` `[client/menu/server]`

Returns a string representing the name of the type of the passed object.
This will return `table` if the input is Global.Color, consider using Global.IsColor in that case.

**Argumentos:**

- `any var` — The object to get the type of.

**Retorna:**

- `string` — The name of the object's type.

*Fuente: `lua/includes/util.lua:51`*

---

### `Global:unpack` `[client/menu/server]`

This function takes a numeric indexed table and return all the members as a vararg. If specified, it will start at the given index and end at end index.

**Argumentos:**

- `table tbl` — The table to generate the vararg from.
- `number startIndex` = `1` — Which index to start from. Optional.
- `number endIndex` = `#tbl` — Which index to end at. Optional, even if you set StartIndex.

**Retorna:**

- `vararg` — Output values

---

### `Global:xpcall` `[client/menu/server]`

Attempts to call the first function. If the execution succeeds, this returns `true` followed by the returns of the function. If execution fails, this returns `false` and the second function is called with the error message.

Unlike in Global.pcall, the stack is not unwound and can therefore be used for stack analyses with the debug.

This cannot stop errors from hooks called from the engine.

This does not stop Global.Error and Global.ErrorNoHalt (As well as Global.include) from sending error messages to the server (if called clientside) or calling the GM:OnLuaError hook. The success boolean returned will always return true and thus you will not get the error message returned. Global.error does not exhibit these behaviours.

**Argumentos:**

- `function func` — The function to call initially.
- `function errorCallback` — The function to be called if execution of the first fails; the error message is passed as a string.

You cannot throw an Global.error() from this callback: it will have no effect (not even stopping the callback).
- `vararg arguments` — Arguments to pass to the initial function.

**Retorna:**

- `boolean` — Status of the execution; `true` for success, `false` for failure.
- `vararg` — The returns of the first function if execution succeeded, otherwise the **first** return value of the error callback.