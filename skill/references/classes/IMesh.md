# IMesh

---

Renderable mesh object, can be used to create models on the fly.
The only way to create your own IMesh object is to call Global.Mesh.

IMeshes only respond to one projected texture.
See the render.RenderFlashlights function and example that solves this problem.

---


## Miembros (5)


---

### `IMesh:BuildFromTriangles` `[client]`

Builds the mesh from a table mesh vertexes.

When modifying a previously built mesh, your new mesh must match the vertex count!

See Global.Mesh and util.GetModelMeshes for examples.

IMesh appears to have a limit of 65535 vertices. You should split your mesh into multiple meshes when above this limit.

Exceeding the limit may lead to undefined rendering behavior.

**Argumentos:**

- `table vertexes` — A table consisting of Structures/MeshVertexs.

**Retorna:**

*(sin retorno)*

---

### `IMesh:Destroy` `[client]`

Deletes the mesh and frees the memory used by it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IMesh:Draw` `[client]`

Renders the mesh with the active matrix.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IMesh:DrawSkinned` `[client]`

Renders the mesh with the active matrix and given bone matrices.

**Argumentos:**

- `table<VMatrix> bones` — A list of matrices to use as bones. Up to 52 of them.
- `boolean multiply` = `false` — If set, multiplies given matrices with currently active model matrix (cam.GetModelMatrix). This incurs a performance hit.

**Retorna:**

*(sin retorno)*

---

### `IMesh:IsValid` `[client]`

Returns whether this IMesh is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this IMesh is valid or not.