# VMatrix

---

A 4x4 matrix.

This page lists all possible functions to manipulate matrices.

This object can be created by Global.Matrix.

Metamethod | Second Operand | Description
---------- | -------------- | -----------
`__add` | VMatrix | Returns new VMatrix with the result of addition.
`__eq` | any | Compares 2 operands, if they both are VMatrix, compares each individual component.
`__mul` | VMatrix or Vector | Returns new VMatrix or Vector with the result of multiplication.
`__sub` | VMatrix | Returns new VMatrix with the result of subtraction.
`__tostring` |  | Returns a string in format `[%f,\t%f,\t%f,\t%f]\n[%f,\t%f,\t%f,\t%f]\n[%f,\t%f,\t%f,\t%f]\n[%f,\t%f,\t%f,\t%f]`.
`__unm` | | Returns new VMatrix with the result of negation.

---


## Miembros (35)


---

### `VMatrix:Add` `[client/server]`

Adds given matrix to this matrix.

**Argumentos:**

- `VMatrix input` — The input matrix to add.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:GetAngles` `[client/server]`

Returns the absolute rotation of the matrix. Scaled matrix might produce unexpected results!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — Absolute rotation of the matrix

---

### `VMatrix:GetField` `[client/server]`

Returns a specific field in the matrix.

**Argumentos:**

- `number row` — Row of the field whose value is to be retrieved, from 1 to 4
- `number column` — Column of the field whose value is to be retrieved, from 1 to 4

**Retorna:**

- `number` — The value of the specified field

---

### `VMatrix:GetForward` `[client/server]`

Gets the forward direction of the matrix.

ie. The first column of the matrix, excluding the w coordinate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The forward direction of the matrix.

---

### `VMatrix:GetInverse` `[client/server]`

Returns an inverted matrix without modifying the original matrix.

Inverting the matrix will fail if its [determinant](https://en.wikipedia.org/wiki/Determinant) is 0 or close to 0. (ie. its "scale" in any direction is 0.)

See also VMatrix:GetInverseTR.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The inverted matrix if possible, nil otherwise

---

### `VMatrix:GetInverseTR` `[client/server]`

Returns an inverted matrix without modifying the original matrix. This function will not fail, but only works correctly on matrices that contain only translation and/or rotation.

Using this function on a matrix with modified scale may return an incorrect inverted matrix.

To get the inverse of a matrix that contains other modifications, see VMatrix:GetInverse.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The inverted matrix.

---

### `VMatrix:GetRight` `[client/server]`

Gets the right direction of the matrix.

ie. The second column of the matrix, negated, excluding the w coordinate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The right direction of the matrix.

---

### `VMatrix:GetScale` `[client/server]`

Returns the absolute scale of the matrix.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Absolute scale of the matrix

---

### `VMatrix:GetTranslation` `[client/server]`

Returns the absolute translation of the matrix.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — Absolute translation of the matrix

---

### `VMatrix:GetTransposed` `[client/server]`

Returns the transpose (each row becomes a column) of this matrix.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix transposed` — The transposed matrix.

---

### `VMatrix:GetUp` `[client/server]`

Gets the up direction of the matrix.

ie. The third column of the matrix, excluding the w coordinate.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The up direction of the matrix.

---

### `VMatrix:Identity` `[client/server]`

Initializes the matrix as Identity matrix.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `VMatrix:Invert` `[client/server]`

Inverts the matrix.

Inverting the matrix will fail if its [determinant](https://en.wikipedia.org/wiki/Determinant) is 0 or close to 0. (ie. its "scale" in any direction is 0.)

If the matrix cannot be inverted, it does not get modified.

See also VMatrix:InvertTR.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the matrix was inverted or not

---

### `VMatrix:InvertTR` `[client/server]`

Quickly inverts the matrix. This function will not fail, but only works correctly on matrices that contain only translation and/or rotation.

Using this function on a matrix with modified scale may return an incorrect inverted matrix.

To invert a matrix that contains other modifications, see VMatrix:Invert. This function is faster.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `VMatrix:IsIdentity` `[client/server]`

Returns whether the matrix is equal to Identity matrix or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the matrix an Identity matrix or not

---

### `VMatrix:IsRotationMatrix` `[client/server]`

Returns whether the matrix is a rotation matrix or not.

Technically it checks if the forward, right and up vectors are orthogonal and normalized.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is the matrix a rotation matrix or not

---

### `VMatrix:IsZero` `[client/server]`

Checks whenever all fields of the matrix are 0, aka if this is a [null matrix](https://en.wikipedia.org/wiki/Zero_matrix).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If the matrix is a null matrix.

---

### `VMatrix:Mul` `[client/server]`

Multiplies this matrix by given matrix.

**Argumentos:**

- `VMatrix input` — The input matrix to multiply by.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:Rotate` `[client/server]`

Rotates the matrix by the given angle.

Postmultiplies the matrix by a rotation matrix (A = AR).

**Argumentos:**

- `Angle rotation` — Rotation.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:Scale` `[client/server]`

Scales the matrix by the given vector.

Postmultiplies the matrix by a scaling matrix (A = AS).

**Argumentos:**

- `Vector scale` — Vector to scale with matrix with.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:ScaleTranslation` `[client/server]`

Scales the absolute translation with the given value.

**Argumentos:**

- `number scale` — Value to scale the translation with.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:Set` `[client/server]`

Copies values from the given matrix object.

**Argumentos:**

- `VMatrix src` — The matrix to copy values from.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetAngles` `[client/server]`

Sets the absolute rotation of the matrix.

**Argumentos:**

- `Angle angle` — New angles.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetField` `[client/server]`

Sets a specific field in the matrix.

**Argumentos:**

- `number row` — Row of the field to be set, from 1 to 4
- `number column` — Column of the field to be set, from 1 to 4
- `number value` — The value to set in that field

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetForward` `[client/server]`

Sets the forward direction of the matrix.

ie. The first column of the matrix, excluding the w coordinate.

**Argumentos:**

- `Vector forward` — The forward direction of the matrix.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetRight` `[client/server]`

Sets the right direction of the matrix.

ie. The second column of the matrix, negated, excluding the w coordinate.

**Argumentos:**

- `Vector right` — The right direction of the matrix.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetScale` `[client/server]`

Modifies the scale of the matrix while preserving the rotation and translation.

**Argumentos:**

- `Vector scale` — The scale to set.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetTranslation` `[client/server]`

Sets the absolute translation of the matrix.

**Argumentos:**

- `Vector translation` — New translation.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetUnpacked` `[client/server]`

Sets each component of the matrix.

**Argumentos:**

- `number e11` — 
- `number e12` — 
- `number e13` — 
- `number e14` — 
- `number e21` — 
- `number e22` — 
- `number e23` — 
- `number e24` — 
- `number e31` — 
- `number e32` — 
- `number e33` — 
- `number e34` — 
- `number e41` — 
- `number e42` — 
- `number e43` — 
- `number e44` — 

**Retorna:**

*(sin retorno)*

---

### `VMatrix:SetUp` `[client/server]`

Sets the up direction of the matrix.

ie. The third column of the matrix, excluding the w coordinate.

**Argumentos:**

- `Vector up` — The up direction of the matrix.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:Sub` `[client/server]`

Subtracts given matrix from this matrix.

**Argumentos:**

- `VMatrix input` — The input matrix to subtract.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:ToTable` `[client/server]`

Converts the matrix to a 4x4 table. See Global.Matrix function.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The 4x4 table.

---

### `VMatrix:Translate` `[client/server]`

Translates the matrix by the given vector aka. adds the vector to the translation.

Postmultiplies the matrix by a translation matrix (A = AT).

**Argumentos:**

- `Vector translation` — Vector to translate the matrix by.

**Retorna:**

*(sin retorno)*

---

### `VMatrix:Unpack` `[client/server]`

Returns each component of the matrix, expanding rows before columns.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — VMatrix:GetField(1, 1)
- `number` — VMatrix:GetField(1, 2)
- `number` — VMatrix:GetField(1, 3)
- `number` — VMatrix:GetField(1, 4)
- `number` — VMatrix:GetField(2, 1)
- `number` — VMatrix:GetField(2, 2)
- `number` — VMatrix:GetField(2, 3)
- `number` — VMatrix:GetField(2, 4)
- `number` — VMatrix:GetField(3, 1)
- `number` — VMatrix:GetField(3, 2)
- `number` — VMatrix:GetField(3, 3)
- `number` — VMatrix:GetField(3, 4)
- `number` — VMatrix:GetField(4, 1)
- `number` — VMatrix:GetField(4, 2)
- `number` — VMatrix:GetField(4, 3)
- `number` — VMatrix:GetField(4, 4)

---

### `VMatrix:Zero` `[client/server]`

Sets all components of the matrix to 0, also known as a [null matrix](https://en.wikipedia.org/wiki/Zero_matrix).

This function is more efficient than setting each element manually.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*