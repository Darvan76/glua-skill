# mesh

---

The mesh library allows you to create meshes. A mesh is a set of vertices that define a 3D shape, for constant meshes you should use the IMesh object instead.

---


## Miembros (15)


---

### `mesh:AdvanceVertex` `[client]`

Pushes the currently set vertex data (via other `mesh.*` functions) into the mesh stack. See example on mesh.Begin.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `mesh:Begin` `[client]`

Begins creating or modifying a 3D mesh constructed from a given quantity and type of primitive 3D shapes such as triangles and quads.

The resulting mesh can be stored in an IMesh if it is intended to be drawn multiple times or on multiple frames.

**Argumentos:**

- `IMesh mesh` — The IMesh that the created mesh will be stored in.

If the mesh has already been built, it will instead have its existing vertices modified but cannot have the quantity of vertices changed.
- `number primitiveType` — An enum that indicates what the format of the mesh's primitives will be.
For a full list of the available options, see the Enums/MATERIAL.
- `number primitiveCount` — The quantity of primitives this mesh will contain as a whole integer number.

The total number of vertices must not exceed the limit of `65535`.
The number of vertices created by each primitive will depend on the type of primitive used to construct the mesh.

The expected value of this argument is dependent on the primitive type used.
For a full list of the primitive counts expected by each primitive type, see Enums/MATERIAL.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `number primitiveType` — An enum that indicates what the format of the mesh's primitives will be.
For a full list of the available options, see the Enums/MATERIAL.
- `number primitiveCount` — The quantity of primitives this mesh will contain as a whole integer number.

The total number of vertices must not exceed the limit of `65535`.
The number of vertices created by each primitive will depend on the type of primitive used to construct the mesh.

The expected value of this argument is dependent on the primitive type used.
For a full list of the primitive counts expected by each primitive type, see Enums/MATERIAL.

---

### `mesh:BoneData` `[client]`

Sets the bone matrix ID and bone weight to be used for the next vertex. See mesh.Begin.

**Argumentos:**

- `number index` — The slot index for the vertex, either 0 or 1.
- `number matrixId` — The matrix index for the vertex, in the range of 0 -&gt; 52. This is the index into IMesh:DrawSkinned's ``bones`` argument, minus 1.
- `number weight` — How much influence that matrix will have on this vertex, in the range of 0 -&gt; 1.

**Retorna:**

*(sin retorno)*

---

### `mesh:Color` `[client]`

Sets the color to be used for the next vertex. This is `COLOR0` semantic of
Vertex Shader. See mesh.Begin.

**Argumentos:**

- `number r` — Red component.
- `number g` — Green component.
- `number b` — Blue component.
- `number a` — Alpha component.

**Retorna:**

*(sin retorno)*

---

### `mesh:End` `[client]`

Ends the mesh (Started with mesh.Begin) and renders it.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `mesh:Normal` `[client]`

Sets the normal to be used for the next vertex. See mesh.Begin.

**Argumentos:**

- `Vector normal` — The normal of the vertex.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `number x` — The X part of the vertex normal.
- `number y` — The Y part of the vertex normal.
- `number z` — The Z part of the vertex normal.

---

### `mesh:Position` `[client]`

Sets the position to be used for the next vertex. See mesh.Begin.

**Argumentos:**

- `Vector position` — The position of the vertex.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `number x` — The X position of the vertex.
- `number y` — The Y position of the vertex.
- `number z` — The Z position of the vertex.

---

### `mesh:Quad` `[client]`

Adds a quad (4 vertices) to the currently built mesh. See mesh.Begin.

**Argumentos:**

- `Vector vertex1` — The first vertex.
- `Vector vertex2` — The second vertex.
- `Vector vertex3` — The third vertex.
- `Vector vertex4` — The fourth vertex.
- `Color color` — The Color for the vertices.

**Retorna:**

*(sin retorno)*

---

### `mesh:QuadEasy` `[client]`

Adds a quad (4 vertices) to the currently built mesh, by using position, normal and sizes. See mesh.Begin.

See also mesh.Quad.

**Argumentos:**

- `Vector position` — The center of the quad.
- `Vector normal` — The normal of the quad.
- `number sizeX` — X size in pixels.
- `number sizeY` — Y size in pixels.
- `Color color` — The Color for the vertices.

**Retorna:**

*(sin retorno)*

---

### `mesh:Specular` `[client]`

Sets the specular map values. This is `COLOR1` semantic of Vertex Shader. Allows to blend textures of [Lightmapped_4WayBlend](https://developer.valvesoftware.com/wiki/Lightmapped_4WayBlend). Requires the `VERTEX_SPECULAR` flag to be set in the C++ code of a shader.

**Argumentos:**

- `number r` — The red channel multiplier of the specular map.
- `number g` — The green channel multiplier of the specular map.
- `number b` — The blue channel multiplier of the specular map.
- `number a` — The alpha channel multiplier of the specular map.

**Retorna:**

*(sin retorno)*

---

### `mesh:TangentS` `[client]`

Sets the `S` tangent to be used, also known as "binormal".

Tangents and binormals are using in bumpmap rendering.

See also mesh.TangentT and mesh.Begin.

**Argumentos:**

- `Vector tangentS` — The S tangent.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `number x` — The X part of the vertex' tangent S.
- `number y` — The Y part of the vertex' tangent S.
- `number z` — The Z part of the vertex' tangent S.

---

### `mesh:TangentT` `[client]`

Sets the `T` tangent to be used.

Tangents and binormals are using in bumpmap rendering.

See also mesh.TangentS and mesh.Begin.

**Argumentos:**

- `Vector tangentT` — The T tangent.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `number x` — The X part of the vertex' tangent T.
- `number y` — The Y part of the vertex' tangent T.
- `number z` — The Z part of the vertex' tangent T.

---

### `mesh:TexCoord` `[client]`

Sets the texture coordinates for the next vertex for the current mesh. (See mesh.Begin)

**Argumentos:**

- `number set` — The texture coordinate set, 0 to 7.

Non-zero values require the currently bound material to support it. For example, any `LightmappedGeneric` material supports sets 1 and 2 (lightmap texture coordinates and bump map texture coords?).
- `number s` — S coordinate.
- `number t` — T coordinate. Will be optional in the next update.
- `number u` = `nil` — U coordinate.
- `number v` = `nil` — V coordinate.

**Retorna:**

*(sin retorno)*

---

### `mesh:UserData` `[client]`

A set of four numbers that can be used for arbitrary purposes by Material shaders.
This is most commonly used to provide tangent information about each vertex to the Material's shader.

**Argumentos:**

- `number tangentX` — 
- `number tangentY` — 
- `number tangentZ` — 
- `number tangentHandedness` — 

**Retorna:**

*(sin retorno)*

---

### `mesh:VertexCount` `[client]`

Returns the amount of vertices that have been pushed via mesh.AdvanceVertex.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of vertices.