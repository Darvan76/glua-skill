# engine

---

The engine library provides functions to access various features in the game's engine, most are related to the demo and save systems.

---


## Miembros (22)


---

### `engine:AbsoluteFrameTime` `[client/server]`

Returns non paused Global.FrameTime.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Frame time.

---

### `engine:ActiveGamemode` `[client/menu/server]`

Returns the name of the currently running gamemode.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The active gamemode's name. This is the name of the gamemode's folder.

---

### `engine:CloseServer` `[server]`

Closes the server and completely exits.

To enable this function for use on your server, add `-allowquit` to your commandline, which will make this function run `quit keep_players` when executed, this also does not forcibly disconnect players.

This is also available when running in server test mode (launch option `-systemtest`). Server test mode is used internally at Facepunch as part of the build process to make sure that the dedicated servers aren't crashing on startup.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `engine:GetAddons` `[client/menu/server]`

Returns a list of addons the player have subscribed to on the workshop.

This list will also include "Floating" .gma addons that are mounted by the game, but not the folder addons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of tables containing 8 keys (downloaded, models, title, file, mounted, wsid, size, updated).

---

### `engine:GetDemoPlaybackStartTick` `[client/menu]`

When starting playing a demo, engine.GetDemoPlaybackTick will be reset and its old value will be added to this functions return value.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `engine:GetDemoPlaybackTick` `[client/menu]`

Current tick of currently loaded demo.

If not playing a demo, it will return amount of ticks since last demo playback.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of ticks of currently loaded demo.

---

### `engine:GetDemoPlaybackTimeScale` `[client/menu]`

Returns time scale of demo playback.

If not during demo playback, returns 1.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The time scale of demo playback, value of demo_timescale console variable.

---

### `engine:GetDemoPlaybackTotalTicks` `[client/menu]`

Returns total amount of ticks of currently loaded demo.

If not playing a demo, returns 0 or the value of last played demo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Total amount of ticks of currently loaded demo.

---

### `engine:GetGamemodes` `[client/menu/server]`

Returns a table containing info for all installed gamemodes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The gamemodes.

---

### `engine:GetGames` `[client/menu/server]`

Returns an array of tables corresponding to all games from which Garry's Mod supports mounting content.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of tables containing all mountable games.

---

### `engine:GetUserContent` `[client/menu]`

Used internally for in-game menus, may be merged in the future into engine.GetAddons.

Returns the UGC (demos, saves and dupes) the player have subscribed to on the workshop.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Returns a table with 5 keys (title, type, tags, wsid, timeadded).

---

### `engine:IsPlayingDemo` `[client/menu]`

Returns true if we're currently playing a demo.

You will notice that there's no server-side version of this. That's because there is no server when playing a demo. Demos are both recorded and played back purely clientside.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the game is currently playing a demo or not.

---

### `engine:IsRecordingDemo` `[client/menu]`

Returns true if the game is currently recording a demo file (.dem) using gm_demo.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the game is currently recording a demo or not.

---

### `engine:LightStyle` `[server]`

This is a direct binding to the function `engine-&gt;LightStyle`. This function allows you to change the default light style of the map - so you can make lighting lighter or darker. You’ll need to call render.RedownloadAllLightmaps clientside to refresh the lightmaps to this new color.

Calling this function with arguments 0 and "a" will cause dynamic lights such as those produced by the Light tool to stop working.

**Argumentos:**

- `number lightstyle` — The lightstyle to edit. 0 to 63. If you want to edit map lighting, you want to set this to 0.
- `string pattern` — The pattern to change the lightstyle to. `a` is the darkest, `z` is the brightest. You can use stuff like "abcxyz" to make flashing patterns. The normal brightness for a map is `m`. Values over `z` are allowed, `~` for instance.

**Retorna:**

*(sin retorno)*

---

### `engine:OpenDupe` `[client]`

Loads a duplication from the local filesystem.

**Argumentos:**

- `string dupeName` — Name of the file. (e.g, `engine.OpenDupe("dupes/8b809dd7a1a9a375e75be01cdc12e61f.dupe")`).

**Retorna:**

- `table` — A table with a simple field:
* string `data` - Compressed dupe data. Use util.JSONToTable to make it into a format useable by the duplicator tool.

---

### `engine:ServerFrameTime` `[client]`

Returns an estimate of the server's performance. Equivalent to calling Global.FrameTime from the server, according to source code.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Frame time.
- `number` — Server framerate [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation).

---

### `engine:SetMounted` `[menu]`

Sets the mounting options for mountable content.

**Argumentos:**

- `string depotID` — The depot id of the game to mount.
- `boolean doMount` — The mount state, true to mount, false to unmount

**Retorna:**

*(sin retorno)*

---

### `engine:TickCount` `[client/menu/server]`

Returns the number of ticks since the game server started.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of ticks since the game server started.

---

### `engine:TickInterval` `[client/menu/server]`

Returns the time interval between each game tick in seconds.

This function is useful for making animations (usually serverside, such as doors rotating) and similar things to be independent of the tickrate in hooks that run at the tick rate, such as GM:Tick.

Clientside you'd want to use Global.FrameTime for this purpose in hooks that run every frame.

The default tickrate is `66.6666`, aka `15` milliseconds interval between each game tick.
The tickrate can be adjusted via the `-tickrate` [command line option](Command_Line_Parameters).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of seconds between each gametick.

---

### `engine:VideoSettings` `[client]`

Returns video recording settings set by video.Record. Used by Demo-To-Video feature.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The video recording settings, see Structures/VideoData.

---

### `engine:WriteDupe` `[client]`

Do not use.

Saves a duplication as a file.

**Argumentos:**

- `string dupe` — Dupe table, encoded by util.TableToJSON and compressed by util.Compress.
- `string jpeg` — The dupe icon, created by render.Capture.

**Retorna:**

*(sin retorno)*

---

### `engine:WriteSave` `[client]`

Do not use.
Stores savedata into the game. (can be loaded using the LoadGame menu)

**Argumentos:**

- `string saveData` — Data generated by gmsave.SaveMap, compressed by util.Compress.
- `string name` — Name the save will have.

**Retorna:**

*(sin retorno)*