# Angle

---

List of all possible functions to manipulate angles.

Created by Global.Angle.

| Type                | Name                                 | Description                      |
| ------------------- | ------------------------------------ | -------------------------------- |
| number | `p` or `pitch` or `x` or `1` | The pitch component of the angle. |
| number | `y` or `yaw` or `2` | The yaw component of the angle. |
| number | `r` or `roll`  or `z` or `3` | The roll  component of the angle. |

Metamethod | Second Operand | Description
---------- | -------------- | -----------
`__add` | Angle | Returns new Angle with the result of addition.
`__div` | number | Returns new Angle with the result of division.
`__eq` | any | Compares 2 operands, if they both are Angle, compares each individual component. Doesn't normalize the angles (360 is not equal to 0).
`__index` | number or string | Gets the component of the Angle. Returns a number.
`__mul` | number | Returns new Angle with the result of multiplication.
`__newindex` | number or string | Sets the component of the Angle. Accepts number and string.
`__sub` | Angle | Returns new Angle with the result of subtraction.
`__tostring` | | Returns `p y r`.
`__unm` | | Returns new Angle with the result of negation.

---


## Miembros (18)


---

### `Angle:Add` `[client/menu/server]`

Adds the values of the argument angle to the orignal angle.

This functions the same as angle1 + angle2 without creating a new angle object, skipping object construction and garbage collection.

**Argumentos:**

- `Angle angle` — The angle to add.

**Retorna:**

*(sin retorno)*

---

### `Angle:Div` `[client/menu/server]`

Divides all values of the original angle by a scalar. This functions the same as angle1 / num without creating a new angle object, skipping object construction and garbage collection.

**Argumentos:**

- `number scalar` — The number to divide by.

**Retorna:**

*(sin retorno)*

---

### `Angle:Forward` `[client/menu/server]`

Returns a normal vector facing in the direction that the angle points.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The forward direction of the angle

---

### `Angle:IsEqualTol` `[client/menu/server]`

Returns if the angle is equal to another angle with the given tolerance.

**Argumentos:**

- `Angle compare` — The angle to compare to.
- `number tolerance` — The tolerance range for each component.

**Retorna:**

- `boolean eq` — Are each of the the angle components equal or not within given tolerance.

---

### `Angle:IsZero` `[client/menu/server]`

Returns whether the pitch, yaw and roll are 0 or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the pitch, yaw and roll are 0 or not.

---

### `Angle:Mul` `[client/menu/server]`

Multiplies a scalar to all the values of the orignal angle. This functions the same as num * angle without creating a new angle object, skipping object construction and garbage collection.

**Argumentos:**

- `number scalar` — The number to multiply.

**Retorna:**

*(sin retorno)*

---

### `Angle:Normalize` `[client/menu/server]`

Normalizes the angles by applying a modulo with 360 to pitch, yaw and roll.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `Angle:Random` `[client/menu/server]`

Randomizes each element of this Angle object.

**Argumentos:**

- `number min` = `-360` — The minimum value for each component.
- `number max` = `360` — The maximum value for each component.

**Retorna:**

*(sin retorno)*

---

### `Angle:Right` `[client/menu/server]`

Returns a normal vector facing in the direction that points right relative to the angle's direction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The right direction of the angle

---

### `Angle:RotateAroundAxis` `[client/menu/server]`

Rotates the angle around the specified axis by the specified degrees.

**Argumentos:**

- `Vector axis` — The axis to rotate around as a normalized unit vector. When argument is not a unit vector, you will experience numerical offset errors in the rotated angle.
- `number rotation` — The degrees to rotate around the specified axis.

**Retorna:**

*(sin retorno)*

---

### `Angle:Set` `[client/menu/server]`

Copies pitch, yaw and roll from the second angle to the first.

**Argumentos:**

- `Angle originalAngle` — The angle to copy the values from.

**Retorna:**

*(sin retorno)*

---

### `Angle:SetUnpacked` `[client/menu/server]`

Sets the p, y, and r of the angle.

**Argumentos:**

- `number p` — The pitch component of the Angle
- `number y` — The yaw component of the Angle
- `number r` — The roll component of the Angle

**Retorna:**

*(sin retorno)*

---

### `Angle:SnapTo` `[client/server]`

Snaps the angle to nearest interval of degrees.

This will modify the original angle too!

**Argumentos:**

- `string axis` — The component/axis to snap. Can be either `p`/`pitch`, `y`/`yaw` or `r`/`roll`.
- `number target` — The target angle snap interval

**Retorna:**

- `Angle` — The snapped angle.

*Fuente: `lua/includes/extensions/angle.lua:5`*

---

### `Angle:Sub` `[client/menu/server]`

Subtracts the values of the argument angle to the orignal angle. This functions the same as angle1 - angle2 without creating a new angle object, skipping object construction and garbage collection.

**Argumentos:**

- `Angle angle` — The angle to subtract.

**Retorna:**

*(sin retorno)*

---

### `Angle:ToTable` `[client/menu/server]`

Returns the angle as a table with three elements.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The table with elements 1 = p, 2 = y, 3 = r.

---

### `Angle:Unpack` `[client/menu/server]`

Returns the pitch, yaw, and roll components of the angle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — p, pitch, x, or Angle[1].
- `number` — y, yaw, or Angle[2].
- `number` — r, roll, r, or Angle[3].

---

### `Angle:Up` `[client/menu/server]`

Returns a normal vector facing in the direction that points up relative to the angle's direction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The up direction of the angle.

---

### `Angle:Zero` `[client/menu/server]`

Sets pitch, yaw and roll to 0.
This function is faster than doing it manually.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*