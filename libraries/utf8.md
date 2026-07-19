# utf8

---

The utf8 library provides basic support for UTF-8 encoding. This library does not provide any support for Unicode other than the handling of the encoding. Any operation that needs the meaning of a character, such as character classification, is outside its scope.

Unless stated otherwise, all functions that expect a byte position as a parameter assume that the given position is either the start of a byte sequence or one plus the length of the subject string. As in the string library, negative indices count from the end of the string.

---


## Miembros (9)


---

### `utf8:GetChar` `[client/menu/server]`

A UTF-8 compatible version of string.GetChar.

**Argumentos:**

- `string str` — The string that you will be searching with the supplied index.
- `number index` — The index's value of the string to be returned.

**Retorna:**

- `string` — str

*Fuente: `lua/includes/modules/utf8.lua:352`*

---

### `utf8:char` `[client/menu/server]`

Receives zero or more integers, converts each one to its corresponding UTF-8 byte sequence and returns a string with the concatenation of all these sequences.

**Argumentos:**

- `vararg codepoints` — Unicode code points to be converted in to a UTF-8 string.

**Retorna:**

- `string` — UTF-8 string generated from given arguments.

*Fuente: `lua/includes/modules/utf8.lua:95`*

---

### `utf8:charpattern` `[client/menu]`

This is NOT a function, it's a Patterns (a string, not a function) which matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — ```
"[%z\x01-\x7F\xC2-\xF4][\x80-\xBF]*"
```

---

### `utf8:codepoint` `[client/menu/server]`

Returns the codepoints (as numbers) from all characters in the given string that start between byte position startPos and endPos. It raises an error if it meets any invalid byte sequence. This functions similarly to string.byte.

**Argumentos:**

- `string string` — The string that you will get the code(s) from.
- `number startPos` = `1` — The starting byte of the string to get the codepoint of.
- `number endPos` = `1` — The ending byte of the string to get the codepoint of.

**Retorna:**

- `vararg` — The codepoint number(s).

*Fuente: `lua/includes/modules/utf8.lua:175`*

---

### `utf8:codes` `[client/menu/server]`

Returns an iterator (like string.gmatch) which returns both the position and codepoint of each utf8 character in the string. It raises an error if it meets any invalid byte sequence.

**Argumentos:**

- `string string` — The string that you will get the codes from.

**Retorna:**

- `function` — The iterator (to be used in a for loop).

*Fuente: `lua/includes/modules/utf8.lua:146`*

---

### `utf8:force` `[client/menu/server]`

Forces a string to contain only valid UTF-8 data. Invalid sequences are replaced with U+FFFD (the Unicode replacement character).

This is a lazy way for users to ensure a string contains only valid UTF-8 data.

**Argumentos:**

- `string string` — The string that will become a valid UTF-8 string.

**Retorna:**

- `string` — The UTF-8 string.

*Fuente: `lua/includes/modules/utf8.lua:303`*

---

### `utf8:len` `[client/menu/server]`

Returns the number of UTF-8 sequences in the given string between positions startPos and endPos (both inclusive). If it finds any invalid UTF-8 byte sequence, returns false as well as the position of the first invalid byte.

**Argumentos:**

- `string string` — The string to calculate the length of.
- `number startPos` = `1` — The starting position to get the length from.
- `number endPos` = `-1` — The ending position to get the length from.

**Retorna:**

- `number` — The number of UTF-8 characters in the string. If there are invalid bytes, this will be false.
- `number` — The position of the first invalid byte. If there were no invalid bytes, this will be nil.

*Fuente: `lua/includes/modules/utf8.lua:202`*

---

### `utf8:offset` `[client/menu/server]`

Returns the byte-index of the n'th UTF-8-character after the given startPos (nil if none). startPos defaults to 1 when n is positive and -1 when n is negative. If n is zero, this function instead returns the byte-index of the UTF-8-character startPos lies within.

**Argumentos:**

- `string string` — The string that you will get the byte position from.
- `number n` — The position to get the beginning byte position from.
- `number startPos` = `1 when n>=0, -1 otherwise` — The offset for n.

**Retorna:**

- `number` — Starting byte-index of the given position.

*Fuente: `lua/includes/modules/utf8.lua:231`*

---

### `utf8:sub` `[client/menu/server]`

A UTF-8 compatible version of string.sub.
Avoid using this function on large strings every tick/frame, as it may cause lags.

**Argumentos:**

- `string string` — The string you'll take a sub-string out of.
- `number StartPos` — The position of the first character that will be included in the sub-string.
- `number EndPos` = `nil` — The position of the last character to be included in the sub-string. It can be negative to count from the end.

**Retorna:**

- `string` — The substring.

*Fuente: `lua/includes/modules/utf8.lua:364`*