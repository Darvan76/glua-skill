# IVideoWriter

---

This is returned from video.Record.

---


## Miembros (5)


---

### `IVideoWriter:AddFrame` `[client/menu]`

Adds the current framebuffer to the video stream.

**Argumentos:**

- `number frameTime` — Usually set to what Global.FrameTime is, or simply 1/fps.
- `boolean downsample` — If true it will downsample the whole screenspace to the videos width and height, otherwise it will just record from the top left corner to the given width and height and therefore not the whole screen.

**Retorna:**

*(sin retorno)*

---

### `IVideoWriter:Finish` `[client/menu]`

Ends the video recording and dumps it to disk.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IVideoWriter:Height` `[client/menu]`

Returns the height of the video stream.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — height

---

### `IVideoWriter:SetRecordSound` `[client/menu]`

Sets whether to record sound or not.

**Argumentos:**

- `boolean record` — Record.

**Retorna:**

*(sin retorno)*

---

### `IVideoWriter:Width` `[client/menu]`

Returns the width of the video stream.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — width