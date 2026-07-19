# bit

---

The bitwise library contains useful functions for bitwise operations.
Make sure you're familiar with [Bitwise Operators](https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301)

---


## Miembros (12)


---

### `bit:arshift` `[client/menu/server]`

Returns the arithmetically shifted value.

**Argumentos:**

- `number value` — The value to be manipulated.
- `number shiftCount` — Amounts of bits to shift.

**Retorna:**

- `number` — The shifted value.

---

### `bit:band` `[client/menu/server]`

Performs the bitwise `and` for all values specified.

**Argumentos:**

- `number value` — The value to be manipulated.
- `vararg ...` — Values bit to perform bitwise "and" with. Optional.

**Retorna:**

- `number` — Result of bitwise "and" operation.

---

### `bit:bnot` `[client/menu/server]`

Returns the bitwise not of the value. Inverts every bit of the 32bit integer.

**Argumentos:**

- `number value` — The value to be inverted.

**Retorna:**

- `number` — The result of bitwise not. 0101 becomes 1010, etc.

---

### `bit:bor` `[client/menu/server]`

Returns the bitwise OR of all values specified.

**Argumentos:**

- `number value1` — The first value.
- `vararg ...` — Extra values to be evaluated. (must all be numbers)

**Retorna:**

- `number` — The bitwise OR result between all numbers.

---

### `bit:bswap` `[client/menu/server]`

Swaps the byte order.

**Argumentos:**

- `number value` — The value to be byte swapped.

**Retorna:**

- `number` — The resulting swapped value.

---

### `bit:bxor` `[client/menu/server]`

Returns the bitwise xor of all values specified.

**Argumentos:**

- `number value` — The value to be manipulated.
- `number otherValues` = `nil` — Values bit xor with. Optional.

**Retorna:**

- `number` — The XORed value.

---

### `bit:lshift` `[client/menu/server]`

Returns the result of shifting given value left bitwise by given number of bits. See [this wiki article](https://en.wikipedia.org/wiki/Bitwise_operation#Bit_shifts) for more details.
The returned value will be clamped to a signed 32-bit integer, even on 64-bit builds.

**Argumentos:**

- `number value` — The value to be manipulated.
- `number shiftCount` — Amounts of bits to shift left by.

**Retorna:**

- `number` — The resulting value. Input of `0b1001` will become `0b10010` for one left shift, etc.

---

### `bit:rol` `[client/menu/server]`

Returns the left rotated value.

**Argumentos:**

- `number value` — The value to be manipulated.
- `number shiftCount` — Amounts of bits to rotate left by.

**Retorna:**

- `number` — The shifted value.

---

### `bit:ror` `[client/menu/server]`

Returns the right rotated value.

**Argumentos:**

- `number value` — The value to be manipulated.
- `number shiftCount` — Amounts of bits to rotate right by.

**Retorna:**

- `number` — The shifted value.

---

### `bit:rshift` `[client/menu/server]`

Returns the right shifted value.
The returned value will be clamped to a signed 32-bit integer, even on 64-bit builds.

**Argumentos:**

- `number value` — The value to be manipulated.
- `number shiftCount` — Amounts of bits to shift right by.

**Retorna:**

- `number` — The shifted value.

---

### `bit:tobit` `[client/menu/server]`

Normalizes the specified value and clamps it in the range of a signed 32bit integer.

**Argumentos:**

- `number value` — The value to be normalized.

**Retorna:**

- `number` — The 32 bits of the provided value.

---

### `bit:tohex` `[client/menu/server]`

Returns the hexadecimal representation of the number with the specified number of characters.

**Argumentos:**

- `number value` — The value to be normalized.
- `number characters` = `8` — Maximum number of characters, if set. The absolute maximum is 8.

**Retorna:**

- `string` — The hexadecimal representation, such as "00000001".