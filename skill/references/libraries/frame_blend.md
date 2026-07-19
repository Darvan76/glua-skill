# frame_blend

---

The frame blending library.

---


## Miembros (8)


---

### `frame_blend:AddFrame` `[client]`

Adds a frame to the blend. Calls frame_blend.CompleteFrame once enough frames have passed since last frame_blend.CompleteFrame call.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `frame_blend:BlendFrame` `[client]`

Blends the frame(s).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `frame_blend:CompleteFrame` `[client]`

Renders the frame onto internal render target.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `frame_blend:DrawPreview` `[client]`

Actually draws the frame blend effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `frame_blend:IsActive` `[client]`

Returns whether frame blend post processing effect is enabled or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is frame blend enabled or not.

---

### `frame_blend:IsLastFrame` `[client]`

Returns whether the current frame is the last frame?

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the current frame is the last frame?

---

### `frame_blend:RenderableFrames` `[client]`

Returns amount of frames needed to render?

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Amount of frames needed to render?

---

### `frame_blend:ShouldSkipFrame` `[client]`

Returns whether we should skip frame or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Should the frame be skipped or not.