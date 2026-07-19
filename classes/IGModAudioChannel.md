# IGModAudioChannel

---

A sound channel returned by a callback of sound.PlayURL and sound.PlayFile.

---


## Miembros (41)


---

### `IGModAudioChannel:EnableLooping` `[client]`

Enables or disables looping of audio channel, requires noblock flag.

**Argumentos:**

- `boolean enable` — Enable or disable looping of this audio channel.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:FFT` `[client]`

Computes the [DFT (discrete Fourier transform)](https://en.wikipedia.org/wiki/Discrete_Fourier_transform) of the sound channel.

The size parameter specifies the number of consecutive audio samples to use as the input to the DFT and is restricted to a power of two. A [Hann window](https://en.wikipedia.org/wiki/Hann_function) is applied to the input data.

The computed DFT has the same number of frequency bins as the number of samples. Only half of this DFT is returned, since [the DFT magnitudes are symmetric for real input data](https://en.wikipedia.org/wiki/Discrete_Fourier_transform#The_real-input_DFT). The magnitudes of the DFT (values from 0 to 1) are used to fill the output table, starting at index 1.

**Visualization protip:** For a size N DFT, bin k (1-indexed) corresponds to a frequency of (k - 1) / N * sampleRate.

**Visualization protip:** Sound energy is proportional to the square of the magnitudes. Adding magnitudes together makes no sense physically, but adding energies does.

**Visualization protip:** The human ear works on a logarithmic amplitude scale. You can convert to [decibels](https://en.wikipedia.org/wiki/Decibel) by taking 20 * math.log10 of frequency magnitudes, or 10 * math.log10 of energy. The decibel values will range from -infinity to 0.

**Argumentos:**

- `table<number> tbl` — The table to output the DFT magnitudes (numbers between 0 and 1) into. Indices start from 1.
- `number{FFT} size` — The number of samples to use. See Enums/FFT

**Retorna:**

- `number` — The number of frequency bins that have been filled in the output table.

---

### `IGModAudioChannel:Get3DCone` `[client]`

Returns 3D cone of the sound channel. See IGModAudioChannel:Set3DCone.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The angle of the inside projection cone in degrees.
- `number` — The angle of the outside projection cone in degrees.
- `number` — The delta-volume outside the outer projection cone.

---

### `IGModAudioChannel:Get3DEnabled` `[client]`

Returns if the sound channel is currently in 3D mode or not. This value will be affected by IGModAudioChannel:Set3DEnabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is currently 3D or not.

---

### `IGModAudioChannel:Get3DFadeDistance` `[client]`

Returns 3D fade distances of a sound channel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum distance. The channel's volume is at maximum when the listener is within this distance
- `number` — The maximum distance. The channel's volume stops decreasing when the listener is beyond this distance

---

### `IGModAudioChannel:GetAverageBitRate` `[client]`

Returns the average bit rate of the sound channel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The average bit rate of the sound channel.

---

### `IGModAudioChannel:GetBitsPerSample` `[client]`

Retrieves the number of bits per sample of the sound channel.

Doesn't work for mp3 and ogg files.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of bits per sample, or 0 if unknown.

---

### `IGModAudioChannel:GetBufferedTime` `[client]`

Returns the buffered time of the sound channel in seconds, for online streaming sound channels. (sound.PlayURL)

For offline channels this will be equivalent to IGModAudioChannel:GetLength.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current buffered time of the stream, in seconds.

---

### `IGModAudioChannel:GetFileName` `[client]`

Returns the filename for the sound channel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The file name. This will not be always what you have put into the sound.PlayURL as first argument.

---

### `IGModAudioChannel:GetLength` `[client]`

Returns the length of sound played by the sound channel in seconds.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The length of the sound. This value seems to be less then 0 for continuous radio streams.

---

### `IGModAudioChannel:GetLevel` `[client]`

Returns the right and left levels of sound played by the sound channel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The left sound level. The value is between 0 and 1.
- `number` — The right sound level. The value is between 0 and 1.

---

### `IGModAudioChannel:GetPan` `[client]`

Gets the relative volume of the left and right channels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number pan` — Relative volume between the left and right channels. `-1` means only in left channel, `0` is center and `1` is only in the right channel. `0` by default.

---

### `IGModAudioChannel:GetPlaybackRate` `[client]`

Returns the playback rate of the sound channel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current playback rate of the sound channel

---

### `IGModAudioChannel:GetPos` `[client]`

Returns position of the sound channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the sound channel, previously set by IGModAudioChannel:SetPos

---

### `IGModAudioChannel:GetSamplingRate` `[client]`

Returns the sample rate for currently playing sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The sample rate in Hz. This should always be 44100.

---

### `IGModAudioChannel:GetState` `[client]`

Returns the state of a sound channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The state of the sound channel, see Enums/GMOD_CHANNEL

---

### `IGModAudioChannel:GetTagsHTTP` `[client]`

Retrieves HTTP headers from a bass stream channel created by sound.PlayURL, if available.

Of special interest here are headers such as `icy-name`, `icy-br`, `ice-audio-info`, `icy-genre`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string> info` — A list of HTTP headers or `nil` if no information is available.

Example output:
```
... other headers
[7]	=	ice-audio-info: channels=2;samplerate=44100;bitrate=128
[8]	=	icy-genre: lounge
[9]	=	icy-name: RTFM Lounge
... other headers
```

---

### `IGModAudioChannel:GetTagsID3` `[client]`

Retrieves the ID3 version 1 info from a bass channel created by sound.PlayFile or sound.PlayURL, if available.

ID3v2 is not supported.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table info` — A table containing the information, or `nil` if no information is available.

The table will always have the following keys, filled out based on what is available:
`album`, `artist`, `comment`, `genre`, `id`, `title`, `year`

---

### `IGModAudioChannel:GetTagsMP4` `[client]`

Retrieves `.m4a` media info, from a bass channel created by sound.PlayURL or sound.PlayFile, if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string> info` — A list of available information in no particular order, or `nil` if no information is available.

---

### `IGModAudioChannel:GetTagsMeta` `[client]`

Retrieves ICY metadata from a bass stream channel created by sound.PlayURL, if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string info` — The meta information, or `nil` if no information is available.

Example output: `StreamTitle='MUSIC NAME HERE';`

---

### `IGModAudioChannel:GetTagsOGG` `[client]`

Retrieves OGG media info tag, from a bass channel created by sound.PlayURL or sound.PlayFile, if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string> info` — A list of available information in no particular order, or `nil` if no information is available.

Example output:
```
[0]	=	Author=MY AUTHIOR
[1]	=	Title=MY TITLE
... other data if available
```

---

### `IGModAudioChannel:GetTagsVendor` `[client]`

Retrieves OGG Vendor tag, usually containing the application that created the file, from a bass channel created by sound.PlayURL or sound.PlayFile, if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string info` — The OGG vendor tag, or `nil` if no information is available.

---

### `IGModAudioChannel:GetTagsWMA` `[client]`

Retrieves `.WMA` media info, from a bass channel created by sound.PlayURL or sound.PlayFile, if available.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string> info` — A list of available information in no particular order, or `nil` if no information is available.

---

### `IGModAudioChannel:GetTime` `[client]`

Returns the current time of the sound channel in seconds

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current time of the stream

---

### `IGModAudioChannel:GetVolume` `[client]`

Returns volume of a sound channel

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The volume of the sound channel

---

### `IGModAudioChannel:Is3D` `[client]`

Returns if the sound channel is in 3D mode or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is 3D or not.

---

### `IGModAudioChannel:IsBlockStreamed` `[client]`

Returns whether the audio stream is block streamed or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the audio stream block streamed or not.

---

### `IGModAudioChannel:IsLooping` `[client]`

Returns if the sound channel is looping or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is looping or not.

---

### `IGModAudioChannel:IsOnline` `[client]`

Returns if the sound channel is streamed from the Internet or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is online or not.

---

### `IGModAudioChannel:IsValid` `[client]`

Returns if the sound channel is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the sound channel valid or not

---

### `IGModAudioChannel:Pause` `[client]`

Pauses the stream. It can be started again using IGModAudioChannel:Play

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:Play` `[client]`

Starts playing the stream.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:Set3DCone` `[client]`

Sets 3D cone of the sound channel.

**Argumentos:**

- `number innerAngle` — The angle of the inside projection cone in degrees.

Range is from 0 (no cone) to 360 (sphere), -1 = leave current.
- `number outerAngle` — The angle of the outside projection cone in degrees.

Range is from 0 (no cone) to 360 (sphere), -1 = leave current.
- `number outerVolume` — The delta-volume outside the outer projection cone.

Range is from 0 (silent) to 1 (same as inside the cone), less than 0 = leave current.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:Set3DEnabled` `[client]`

Sets the 3D mode of the channel. This will affect IGModAudioChannel:Get3DEnabled but not IGModAudioChannel:Is3D.

This feature **requires** the channel to be initially created in 3D mode, i.e. IGModAudioChannel:Is3D should return true or this function will do nothing.

**Argumentos:**

- `boolean enable` — true to enable, false to disable 3D.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:Set3DFadeDistance` `[client]`

Sets 3D fade distances of a sound channel.

**Argumentos:**

- `number min` — The minimum distance. The channel's volume is at maximum when the listener is within this distance.

0 or less = leave current.
- `number max` — The maximum distance. The channel's volume stops decreasing when the listener is beyond this distance.

0 or less = leave current.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:SetPan` `[client]`

Sets the relative volume of the left and right channels.

**Argumentos:**

- `number pan` — Relative volume between the left and right channels. `-1` means only in left channel, `0` is center (default) and `1` is only in the right channel. Fractional values are supported.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:SetPlaybackRate` `[client]`

Sets the playback rate of the sound channel. May not work with high values for radio streams.

**Argumentos:**

- `number rate` — Playback rate to set to. 1 is normal speed, 0.5 is half the normal speed, etc.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:SetPos` `[client]`

Sets position of sound channel in case the sound channel has a 3d option set.

**Argumentos:**

- `Vector pos` — The position to put the sound into
- `Vector dir` = `Vector( 0, 0, 0 )` — The direction of the sound

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:SetTime` `[client]`

Sets the sound channel to specified time ( Rewind to that position of the song ). Does not work on online radio streams.

Streamed sounds must have "noblock" parameter for this to work and IGModAudioChannel:IsBlockStreamed must return false.

 Streamed sounds can only have their time set to up to the current IGModAudioChannel:GetBufferedTime.

**Argumentos:**

- `number secs` — The time to set the stream to, in seconds.
- `boolean dont_decode` = `false` — Set to true to skip decoding to set time, and instead just seek to it which is faster. Certain streams do not support seeking and have to decode to the given position.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:SetVolume` `[client]`

Sets the volume of a sound channel

**Argumentos:**

- `number volume` — Volume to set. 1 meaning 100% volume, 0.5 is 50% and 3 is 300%, etc.

**Retorna:**

*(sin retorno)*

---

### `IGModAudioChannel:Stop` `[client]`

Stop the stream. It can be started again using IGModAudioChannel:Play.

Calling this invalidates the IGModAudioChannel object rendering it unusable for further functions.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*