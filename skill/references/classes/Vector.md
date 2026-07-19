# Vector

---

List of all possible functions to manipulate vectors.

Created by Global.Vector.

Type   | Name           | Description
------ | -------------- | ------------------------------
number | `x`, `X`, `r` or `1` | The X component of the vector.
number | `y`, `Y`, `g` or `2` | The Y component of the vector.
number | `z`, `Z`, `b` or `3` | The Z component of the vector.

Metamethod | Second Operand | Description
---------- | -------------- | -----------
`__add` | Vector | Returns new Vector with the result of addition.
`__div` | number or Vector | Returns new Vector with the result of division.
`__eq` | any | Compares 2 operands, if they both are Vector, compares each individual component.
`__index` | number or string | Gets the component of the Vector. Returns a number.
`__mul` | number or Vector| Returns new Vector with the result of multiplication.
`__newindex` | number or string | Sets the component of the Vector. Accepts number and string.
`__sub` | Vector | Returns new Vector with the result of subtraction.
`__tostring` | | Returns `x y z`.
`__unm` | | Returns new Vector with the result of negation.

---


## Miembros (34)


---

### `Vector:Add` `[client/menu/server]`

Adds the values of the argument vector to the original vector. This function is the same as vector1 + vector2 without creating a new vector object, skipping object construction and garbage collection.

**Argumentos:**

- `Vector vector` — The vector to add.

**Retorna:**

*(sin retorno)*

---

### `Vector:Angle` `[client/menu/server]`

Returns an angle representing the normal of the vector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angle/direction of the vector.

---

### `Vector:AngleEx` `[client/menu/server]`

Returns the angle of this vector (normalized), but instead of assuming that up is Global.Vector( 0, 0, 1 ) (Like Vector:Angle does) you can specify which direction is 'up' for the angle.

**Argumentos:**

- `Vector up` — The up direction vector

**Retorna:**

- `Angle` — The angle

---

### `Vector:Cross` `[client/menu/server]`

Calculates the cross product of this vector and the passed one.

The cross product of two vectors is a 3-dimensional vector with a direction perpendicular (at right angles) to both of them (according to the [right-hand rule](https://en.wikipedia.org/wiki/Right-hand_rule)), and magnitude equal to the area of parallelogram they span. This is defined as the product of the magnitudes, the sine of the angle between them, and unit (normal) vector `n` defined by the right-hand rule:
:**a** × **b** = |**a**| |**b**| sin(θ) **n̂**
where **a** and **b** are vectors, and **n̂** is a unit vector (magnitude of 1) perpendicular to both.

**Argumentos:**

- `Vector otherVector` — Vector to calculate the cross product with.

**Retorna:**

- `Vector` — The cross product of the two vectors.

---

### `Vector:DistToSqr` `[client/menu/server]`

Returns the squared distance of 2 vectors, this is quicker to call than Vector:Distance as DistToSqr does not need to calculate the square root, which is an expensive process.

Squared distances should not be summed. If you need to sum distances, use Vector:Distance.

When performing a distance check, ensure the distance being checked against is squared. See example code below.

**Argumentos:**

- `Vector otherVec` — The vector to calculate the distance to.

**Retorna:**

- `number` — Squared distance to the vector.

---

### `Vector:Distance` `[client/menu/server]`

Returns the Euclidean distance between the vector and the other vector.

This function is more expensive than Vector:DistToSqr. However, please see the notes for Vector:DistToSqr before using it as squared distances are not the same as euclidean distances.

**Argumentos:**

- `Vector otherVector` — The vector to get the distance to.

**Retorna:**

- `number` — Distance between the vectors.

---

### `Vector:Distance2D` `[client/menu/server]`

Returns the Euclidean distance between the vector and the other vector in 2D space. The Z axis is ignored.

This function is more expensive than Vector:Distance2DSqr. However, please see the notes for Vector:Distance2DSqr before using it as squared distances are not the same as Euclidean distances.

**Argumentos:**

- `Vector otherVector` — The vector to get the distance to.

**Retorna:**

- `number` — Distance between the vectors in 2D space.

---

### `Vector:Distance2DSqr` `[client/menu/server]`

Returns the squared distance between 2 vectors in 2D space, ignoring the Z axis. This is faster than Vector:Distance2D as calculating the square root is an expensive process.

Squared distances should not be summed. If you need to sum distances, use Vector:Distance2D.

When performing a distance check, ensure the distance being checked against is squared.

**Argumentos:**

- `Vector otherVec` — The vector to calculate the distance to.

**Retorna:**

- `number` — Squared distance to the vector in 2D space.

---

### `Vector:Div` `[client/menu/server]`

Divide the vector by the given number, that means x, y and z are divided by that value. This will change the value of the original vector, see example 2 for division without changing the value.

**Argumentos:**

- `number divisor` — The value to divide the vector with.

**Retorna:**

*(sin retorno)*

---

### `Vector:Dot` `[client/menu/server]`

Returns the [dot product](https://en.wikipedia.org/wiki/Dot_product#Geometric_definition)  of this vector and the passed one.

The dot product of two vectors is the product of their magnitudes (lengths), and the cosine of the angle between them:
**a · b** = |**a**| |**b**| cos(θ) 
where **a** and **b** are vectors.
See Vector:Length for obtaining magnitudes.

A dot product returns just the cosine of the angle if both vectors are normalized, and zero if the vectors are at right angles to each other.

**Argumentos:**

- `Vector otherVector` — The vector to calculate the dot product with

**Retorna:**

- `number` — The dot product between the two vectors

---

### `Vector:DotProduct` `[client/menu/server]`

This is an alias of Vector:Dot. Use that instead.Returns the dot product of the two vectors.

**Argumentos:**

- `Vector Vector` — The other vector.

**Retorna:**

- `number` — Dot Product

---

### `Vector:GetNegated` `[client/menu/server]`

Returns the negative version of this vector, i.e. a vector with every component to the negative value of itself.

See also Vector:Negate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The negative of this vector.

---

### `Vector:GetNormal` `[client/menu/server]`

Use Vector:GetNormalized instead.

Returns a normalized version of the vector. This is a alias of Vector:GetNormalized.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Normalized version of the vector.

---

### `Vector:GetNormalized` `[client/menu/server]`

Returns a normalized version of the vector. Normalized means vector with same direction but with length of 1.

This does not affect the vector you call it on; to do this, use Vector:Normalize.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Normalized version of the vector.

---

### `Vector:IsEqualTol` `[client/menu/server]`

Returns if the vector is equal to another vector with the given tolerance.

**Argumentos:**

- `Vector compare` — The vector to compare to.
- `number tolerance` — The tolerance range.

**Retorna:**

- `boolean` — Are the vectors equal or not.

---

### `Vector:IsZero` `[client/menu/server]`

Checks whenever all fields of the vector are 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Do all fields of the vector equal 0 or not

---

### `Vector:Length` `[client/menu/server]`

Returns the [Euclidean length](https://en.wikipedia.org/wiki/Euclidean_vector#Length) of the vector: √(x² + y² + z²).

This is a relatively expensive process since it uses the square root. It is recommended that you use Vector:LengthSqr whenever possible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Length of the vector.

---

### `Vector:Length2D` `[client/menu/server]`

Returns the length of the vector in two dimensions, without the Z axis.

This is a relatively expensive process since it uses the square root. It is recommended that you use Vector:Length2DSqr whenever possible.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Length of the vector in two dimensions, √(x² + y²)

---

### `Vector:Length2DSqr` `[client/menu/server]`

Returns the squared length of the vectors x and y value, x² + y².

This is faster than Vector:Length2D as calculating the square root is an expensive process.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Squared length of the vector in two dimensions

---

### `Vector:LengthSqr` `[client/menu/server]`

Returns the squared length of the vector, x² + y² + z².

This is faster than Vector:Length as calculating the square root is an expensive process.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Squared length of the vector

---

### `Vector:Mul` `[client/menu/server]`

Scales the vector by the given number (that means x, y and z are multiplied by that value), a Vector (X, Y, and Z of each vector are multiplied) or a VMatrix (Transforms the vector by the matrix's rotation/translation).

**Argumentos:**

- `number multiplier` — The value to multiply the vector with.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `Vector multiplier` — The vector to multiply the vector with.

- Variante 2: - `VMatrix matrix` — The matrix to transform the vector by.

---

### `Vector:Negate` `[client/menu/server]`

Negates this vector, i.e. sets every component to the negative value of itself. Same as `Vector( -vec.x, -vec.y, -vec.z )`

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Vector:Normalize` `[client/menu/server]`

Normalizes the given vector. This changes the vector you call it on, if you want to return a normalized copy without affecting the original, use Vector:GetNormalized.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Vector:Random` `[client/menu/server]`

Randomizes each element of this Vector object.

**Argumentos:**

- `number min` = `-1` — The minimum value for each component.
- `number max` = `1` — The maximum value for each component.

**Retorna:**

*(sin retorno)*

---

### `Vector:Rotate` `[client/menu/server]`

Rotates a vector by the given angle.
Doesn't return anything, but rather changes the original vector.

**Argumentos:**

- `Angle rotation` — The angle to rotate the vector by.

**Retorna:**

*(sin retorno)*

---

### `Vector:Set` `[client/menu/server]`

Copies the values from the second vector to the first vector.

**Argumentos:**

- `Vector vector` — The vector to copy from.

**Retorna:**

*(sin retorno)*

---

### `Vector:SetUnpacked` `[client/menu/server]`

Sets the x, y, and z of the vector.

**Argumentos:**

- `number x` — The x component
- `number y` — The y component
- `number z` — The z component

**Retorna:**

*(sin retorno)*

---

### `Vector:Sub` `[client/menu/server]`

Substracts the values of the second vector from the orignal vector, this function can be used to avoid garbage collection.

**Argumentos:**

- `Vector vector` — The other vector.

**Retorna:**

*(sin retorno)*

---

### `Vector:ToColor` `[client/server]`

Translates the Vector (values ranging from 0 to 1) into a Color. This will also range the values from 0 - 1 to 0 - 255.

x * 255 -&gt; r
y * 255 -&gt; g
z * 255 -&gt; b

This is the opposite of Color:ToVector

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The created Color.

*Fuente: `lua/includes/extensions/vector.lua:8`*

---

### `Vector:ToScreen` `[client]`

Returns where on the screen the specified position vector would appear. A related function is gui.ScreenToVector, which converts a 2D coordinate to a 3D direction.

Should be called from a 3D rendering environment or after cam.Start3D or it may not work correctly.

Errors in a render hook can make this value incorrect until the player restarts their game.

cam.Start3D or 3D context cam.Start with non-default parameters incorrectly sets the reference FOV for this function, causing incorrect return values. This can be fixed by creating and ending a default 3D context (cam.Start3D with no arguments).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table{ToScreenData}` — The created Structures/ToScreenData.

---

### `Vector:ToTable` `[client/menu/server]`

Returns the vector as a table with three elements.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The table with elements 1 = x, 2 = y, 3 = z.

---

### `Vector:Unpack` `[client/menu/server]`

Returns the x, y, and z of the vector.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — x or Vector[1].
- `number` — y or Vector[2].
- `number` — z or Vector[3].

---

### `Vector:WithinAABox` `[client/menu/server]`

Returns whenever the given vector is in a box created by the 2 other vectors.

**Argumentos:**

- `Vector boxStart` — The first vector.
- `Vector boxEnd` — The second vector.

**Retorna:**

- `boolean` — Is the vector in the box or not.

---

### `Vector:Zero` `[client/menu/server]`

Sets x, y and z to 0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*