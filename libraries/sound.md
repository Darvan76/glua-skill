# sound

---

Used primarily for adding new soundscript entries.

---


## Miembros (11)


---

### `sound:Add` `[client/server]`

Creates a [sound scripts](https://developer.valvesoftware.com/wiki/Soundscripts). It can also override sounds, which seems to only work when set on the server.

You can find a list of common sound scripts that are shipped with the game by default here: Common Sounds.

A list of sound scripts can be retrieved with sound.GetTable.

**Argumentos:**

- `table{SoundData} soundData` — The sounds properties. See Structures/SoundData

**Retorna:**

*(sin retorno)*

---

### `sound:AddSoundOverrides` `[client/server]`

Overrides [sound scripts](https://developer.valvesoftware.com/wiki/Soundscripts) defined inside of a `.txt` file; typically used for adding map-specific sounds.

**Argumentos:**

- `string filepath` — Path to the script file to load.

**Retorna:**

*(sin retorno)*

---

### `sound:EmitHint` `[server]`

Emits a sound hint to the game elements to react to, for example to repel or attract antlions.

**Argumentos:**

- `number hint` — The hint to emit. This can be a bit flag. See Enums/SOUND
- `Vector pos` — The position to emit the hint at
- `number volume` — The volume or radius of the hint
- `number duration` — The duration of the hint in seconds
- `Entity owner` = `NULL` — If set, the sound hint will be ignored/deleted when the given entity is destroyed.

**Retorna:**

*(sin retorno)*

---

### `sound:Generate` `[client]`

Creates a sound from a function.

**Argumentos:**

- `string identifier` — A unique identifier for the sound.

You cannot override already existing ones.
- `number samplerate` — The sample rate of the sound. Must be `11025`, `22050` or `44100`.
- `number length` — The length in seconds of the sound to generate.
- `function callbackOrData` — A function which will be called to generate every sample on the sound.

The current sample number.
The return value must be between `-1.0` and `1.0`.
Other values will wrap back to the -1 to 1 range and basically clip.
There are **65535** possible quantifiable values between `-1` and `1`.

This argument can also be given a table of samples, where values must range from `-1` to `1`.
This argument can also be a string of raw 16bit binary data, (each sample is unsigned short).
- `number loopStart` = `nil` — Sample ID of the loop start. If given, the sound will be looping and will restart playing at given position after reaching its end.

**Retorna:**

*(sin retorno)*

---

### `sound:GetLoudestSoundHint` `[server]`

Returns the most dangerous/closest sound hint based on given location and types of sounds to sense.

**Argumentos:**

- `number types` — The types of sounds to choose from. See Enums/SOUND.
- `Vector pos` — The position to sense sounds at.

**Retorna:**

- `table` — A table with Structures/SoundHintData structure or `nil` if no sound hints are nearby.

---

### `sound:GetProperties` `[client/server]`

Returns properties of a [sound script](https://developer.valvesoftware.com/wiki/Soundscripts).

**Argumentos:**

- `string name` — The name of the sound script

**Retorna:**

- `table{SoundData}` — The properties of the soundscript. See Structures/SoundData

---

### `sound:GetTable` `[client/server]`

Returns a list of all registered [sound scripts](https://developer.valvesoftware.com/wiki/Soundscripts).

New ones can be registered using sound.Add, and detailed information about each one can be retrieved via sound.GetProperties.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string>` — The list/array of all registered sound scripts ( No other information is provided )

---

### `sound:Play` `[client/server]`

Plays a sound from the specified position in the world.
If you want to play a sound without a position, such as a UI sound, use surface.PlaySound instead.

This function is similar to Global.EmitSound, but with less options.

**Argumentos:**

- `string snd` — The sound to play. This should either be a sound script name (sound.Add) or a file path relative to the `sound/` folder. (Make note that it's not sound**s**)
- `Vector pos` — Where the sound should play.
- `number level` = `75` — Sound level in decibels. 75 is normal. Ranges from 20 to 180, where 180 is super loud. This affects how far away the sound will be heard, see Enums/SNDLVL.
- `number pitch` = `100` — The sound pitch. Range is from 0 to 255. 100 is normal pitch.
- `number volume` = `1` — Output volume of the sound in range 0 to 1.
- `number dsp` = `0` — The DSP preset for this sound. DSP_Presets

**Retorna:**

*(sin retorno)*

---

### `sound:PlayFile` `[client]`

Plays a file from GMod directory. You can find a list of all error codes [here](http://www.un4seen.com/doc/#bass/BASS_ErrorGetCode.html)

For external file/stream playback, see sound.PlayURL.

This fails for looping .wav files in 3D mode.

This fails with unicode file names.

**Argumentos:**

- `string path` — The path to the file to play.

Unlike other sound functions and structures, the path is relative to `garrysmod/` instead of `garrysmod/sound/`
- `string flags` — Flags for the sound. Can be one or more of following, separated by a space (" "):
* 3d - Makes the sound 3D, so you can set its position
* mono - Forces the sound to have only one channel
* noplay - Forces the sound not to play as soon as this function is called
* noblock - Disables streaming in blocks. It is more resource-intensive, but it is required for IGModAudioChannel:SetTime.

If you don't want to use any of the above, you can just leave it as "".
- `function callback` — Callback function that is called as soon as the the stream is loaded.

The sound channel. Will be nil if an error occurred.
ID of an error if an error has occurred. Will be nil, otherwise.
Name of an error if an error has occurred. Will be nil, otherwise.

**Retorna:**

*(sin retorno)*

---

### `sound:PlayURL` `[client]`

Allows you to play external sound files, as well as online radio streams.
You can find a list of all error codes [here](http://www.un4seen.com/doc/#bass/BASS_ErrorGetCode.html)

For offline file playback, see sound.PlayFile.

Due to a bug with [BASS](http://www.un4seen.com/), AAC codec streams cannot be played in 3D mode.

**Argumentos:**

- `string url` — The URL of the sound to play
- `string flags` — Flags for the sound. Can be one or more of following, separated by a space (`" "`):
* 3d - Makes the sound 3D, so you can set its position
* mono - Forces the sound to have only one channel
* noplay - Forces the sound not to play as soon as this function is called
* noblock - Disables streaming in blocks. It is more resource-intensive, but it is required for IGModAudioChannel:SetTime.

If you don't want to use any of the above, you can just leave it as `""`.
- `function callback` — Callback function that is called as soon as the the stream is loaded.

The sound channel. Will be nil if an error occurred.
ID of an error if an error has occurred. Will be nil, otherwise.
Name of an error if an error has occurred. Will be nil, otherwise.

**Retorna:**

*(sin retorno)*

---

### `sound:SetActorGender` `[client/server]`

Sets the gender of a specific actor (model). This is a system from [base Half-Life 2](https://developer.valvesoftware.com/wiki/Global_actors) - `global_actors.txt`.

This will affect what voice lines `npc_citizen` will use when they have the given model set.

It is not limited to `npc_citizens` - any sound played on any entity with given model can have gender specific sounds playing, including soundscripts, by including `$gender` token in the sound file path.

Internally the gender is stored by model file name only (i.e. `models/alyx.mdl` would be stored as `alyx`), not the full path! Be aware of potential collisions.

**Argumentos:**

- `string modelPath` — Path to the model file to set the gender of.
- `string gender` — Gender to set. Only 2 options are permitted: `female` and `male`. Any other option will be ignored.

**Retorna:**

*(sin retorno)*