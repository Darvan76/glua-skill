# CSoundPatch

---

CSoundPatch class.

Created with Global.CreateSound

---


## Miembros (14)


---

### `CSoundPatch:ChangePitch` `[client/server]`

Adjust the pitch, also known as the speed at which the sound is being played.

Appears to only work while the sound is being played. See also CSoundPatch:PlayEx.

This invokes GM:EntityEmitSound.

**Argumentos:**

- `number pitch` — The pitch can range from 0-255. Where 100 is the original pitch.
- `number deltaTime` = `0` — The time to fade from previous to the new pitch.

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:ChangeVolume` `[client/server]`

Adjusts the volume of the sound played.

Appears to only work while the sound is being played. See also CSoundPatch:PlayEx.

**Argumentos:**

- `number volume` — The volume ranges from 0 to 1.
- `number deltaTime` = `0` — Time to fade the volume from previous to new value from.

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:FadeOut` `[client/server]`

Fades out the volume of the sound from the current volume to 0 in the given amount of seconds.

**Argumentos:**

- `number seconds` — Fade time.

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:GetDSP` `[client/server]`

Returns the DSP (Digital Signal Processor) effect ID for the sound.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number dspEffectId` — The numerical ID for the DSP effect currently enabled on the sound.

For a list of the available IDs and their meaning, see DSP_Presets.

---

### `CSoundPatch:GetPitch` `[client/server]`

Returns the current pitch.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current pitch, can range from 0-255.

---

### `CSoundPatch:GetSoundLevel` `[client/server]`

Returns the current sound level.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current sound level, see Enums/SNDLVL.

---

### `CSoundPatch:GetSoundName` `[client/server]`

Returns the sound name of this sound patch. This may be name of a sound script (sound.Add) or a file path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The sound name.

---

### `CSoundPatch:GetVolume` `[client/server]`

Returns the current volume.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current volume, ranging from 0 to 1.

---

### `CSoundPatch:IsPlaying` `[client/server]`

Returns whenever the sound is being played.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is playing or not

---

### `CSoundPatch:Play` `[client/server]`

Starts to play the sound. This will reset the sound's volume and pitch to their default values. See CSoundPatch:PlayEx

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:PlayEx` `[client/server]`

Same as CSoundPatch:Play but with 2 extra arguments allowing to set volume and pitch directly.

**Argumentos:**

- `number volume` — The volume ranges from 0 to 1.
- `number pitch` — The pitch can range from 0-255.

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:SetDSP` `[client/server]`

Sets the DSP (Digital Signal Processor) effect for the sound.

Similar to Player:SetDSP but for individual sounds.

**Argumentos:**

- `number dspEffectId` — The numerical ID for the DSP effect to be enabled on the sound.

For a list of the available IDs and their meaning, see DSP_Presets.

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:SetSoundLevel` `[client/server]`

Sets the sound level in decibel.

**Argumentos:**

- `number level` — The sound level in decibel. See Enums/SNDLVL

**Retorna:**

*(sin retorno)*

---

### `CSoundPatch:Stop` `[client/server]`

Stops the sound from being played.

This will not work if the entity attached to this sound patch (specified by Global.CreateSound) is invalid.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*