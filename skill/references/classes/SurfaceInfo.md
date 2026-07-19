# SurfaceInfo

---

A brush surface object returned by Entity:GetBrushSurfaces.

Brush surfaces are a part of what makes up the map geometry aside from displacements. Any primitive brush model, including most breakable windows, can be represented by this object.

This object internally uses the `SurfaceHandle_t` class, which is an alias for `msurface2_t*`.

---


## Miembros (5)


---

### `SurfaceInfo:GetMaterial` `[client/server]`

Returns the brush surface's material.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `IMaterial` — Material of one portion of a brush model.

---

### `SurfaceInfo:GetVertices` `[client/server]`

Returns a list of vertices the brush surface is built from.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<Vector>` — A list of Vector points. This will usually be 4 corners of a quadrilateral in counter-clockwise order.

---

### `SurfaceInfo:IsNoDraw` `[client/server]`

Checks if the brush surface is a nodraw surface, meaning it will not be drawn by the engine.

This internally checks the SURFDRAW_NODRAW flag.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns true if this surface won't be drawn.

---

### `SurfaceInfo:IsSky` `[client/server]`

Checks if the brush surface is displaying the skybox.

This internally checks the SURFDRAW_SKY flag.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns true if the surface is the sky.

---

### `SurfaceInfo:IsWater` `[client/server]`

Checks if the brush surface is water.

This internally checks the SURFDRAW_WATER flag.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns true if the surface is water.