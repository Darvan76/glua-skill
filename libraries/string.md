# string

---

The string *type* is a sequence of characters.

The string *library* is a standard Lua library which provides functions for the manipulation of strings.[[1]](https://www.lua.org/pil/20.html)

In Garry's Mod there are several extra useful functions and features added to this library.
Most notably all strings will access this library through the string metatable index function.[[2]](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/lua/includes/extensions/string.lua#L311-L322)

This means all strings are treated like table objects and the string library as its Meta_Tables

```lua
local x = "Kittens"
function string.Foobar(self) return self:Right(4) end

string.Right(x,4) == x:Right(4) == x:Foobar() == ("Kittens"):Right(4) == x[-4]..x[-3]..x[-2]..x[-1]
```

The string *metatable* however is something else, and to access that you must use `getmetatable("")`.

The difference here is related to Metamethods, such as using (+) instead of (..) to concatenate strings.
Using `+` operator for concatenation breaks lua metamethod to sum string as numbers (Example: `"10" + "1"` return `11` (number)) and this is 400 times SLOWER!

```lua
local stringmeta = getmetatable("")
function stringmeta.__add(str,x) return str..x end -- This will work
function string.__add(str,x) return str..x end -- But this will not.

print("Kittens" + " And " + "Puppies")
```

See Meta Tables and Metamethods for more information.
Making changes to the string *metatable* is not a good idea unless you know what you are doing. Use the string *library* instead.

This category lists functions available in the string *library*.

---


## Miembros (47)


---

### `string:CardinalToOrdinal` `[client/menu/server]`

Converts a cardinal (`111`) number to its [ordinal/sequential variation](https://en.wikipedia.org/wiki/Ordinal_numeral) (`111th`).

See also Global.STNDRD for a function that returns just the suffix.

**Argumentos:**

- `number input` — A number to convert to ordinal.

**Retorna:**

- `string` — The ordinal numeral.

*Fuente: `lua/includes/extensions/string.lua:385`*

---

### `string:Comma` `[client/menu/server]`

Inserts commas for every third digit of a given number.

**Argumentos:**

- `number value` — The input number to commafy
- `string separator` = `,` — An optional string that will be used instead of the default comma.

**Retorna:**

- `string` — The commafied string

*Fuente: `lua/includes/extensions/string.lua:357`*

---

### `string:EndsWith` `[client/menu/server]`

Returns whether or not the second passed string matches the end of the first.

**Argumentos:**

- `string str` — The string whose end is to be checked.
- `string end` — The string to be matched with the end of the first.

**Retorna:**

- `boolean` — `true` if the first string ends with the second, or the second is empty, otherwise `false`.

*Fuente: `lua/includes/extensions/string.lua:331`*

---

### `string:Explode` `[client/menu/server]`

Splits a string up wherever it finds the given separator.

The function string.Split is an alias of this function, except that function doesn't support using patterns.

See string.Implode for the reverse operation of this function.

**Argumentos:**

- `string separator` — The string will be separated wherever this sequence is found.
- `string str` — The string to split up.
- `boolean withpattern` = `false` — Set this to true if your separator is a Patterns.

**Retorna:**

- `table<string>` — Exploded string as a numerical sequential table.

*Fuente: `lua/includes/extensions/string.lua:83`*

---

### `string:FormattedTime` `[client/menu/server]`

Returns the time as a formatted string or as a table if no format is given.

**Argumentos:**

- `number float` — The time in seconds to format.
- `string format` = `nil` — An optional formatting to use. If no format it specified, a table will be returned instead.

**Retorna:**

- `string|table{FormattedTime}` — Returns the time as a formatted string only if a format was specified.

Returns a table if no format was specified.

*Fuente: `lua/includes/extensions/string.lua:186`*

---

### `string:FromColor` `[client/menu/server]`

Creates a string from a Color variable.

**Argumentos:**

- `Color color` — The Color to put in the string.

**Retorna:**

- `string` — Output

*Fuente: `lua/includes/extensions/string.lua:337`*

---

### `string:GetChar` `[client/menu/server]`

Use either string.sub(str, index, index) or str[index]. Returns char value from the specified index in the supplied string.

**Argumentos:**

- `string str` — The string that you will be searching with the supplied index.
- `number index` — The index's value of the string to be returned.

**Retorna:**

- `string` — str

*Fuente: `lua/includes/extensions/string.lua:305`*

---

### `string:GetExtensionFromFilename` `[client/menu/server]`

Returns extension of the file.

See string.StripExtension for a function to remove the extension.
See string.GetFileFromFilename and string.GetPathFromFilename for related functions.

Make sure there are no trailing whitespaces in your `path` argument

**Argumentos:**

- `string path` — The string eg. file-path to get the file extension from.

**Retorna:**

- `string` — File extension or `nil`.

*Fuente: `lua/includes/extensions/string.lua:124`*

---

### `string:GetFileFromFilename` `[client/menu/server]`

Returns file name and extension.

See string.GetPathFromFilename for the opposite function.
See string.GetExtensionFromFilename for the file extension version.

**Argumentos:**

- `string path` — The string eg. file-path to get the file-name from.

**Retorna:**

- `string` — File name or unmodified string.

*Fuente: `lua/includes/extensions/string.lua:166`*

---

### `string:GetPathFromFilename` `[client/menu/server]`

Returns the path part of a full file path.

See string.GetFileFromFilename for the opposite function.
See string.GetExtensionFromFilename for thefile extension version.

**Argumentos:**

- `string path` — The string eg. file-path to get the path from.

**Retorna:**

- `string` — Path or empty string.

*Fuente: `lua/includes/extensions/string.lua:152`*

---

### `string:Implode` `[client/menu/server]`

You really should just use table.concat.

Joins the values of a table together to form a string.

This is the reverse of string.Explode and is functionally identical to table.concat, but with less features.

**Argumentos:**

- `string separator` — The separator to insert between each piece.
- `table pieces` — The table of pieces to concatenate. The keys for these must be numeric and sequential.

**Retorna:**

- `string` — Imploded pieces

*Fuente: `lua/includes/extensions/string.lua:115`*

---

### `string:Interpolate` `[client/menu/server]`

Interpolates a given string with the given table. This is useful for formatting localized strings.

**Argumentos:**

- `string str` — The string that should be interpolated.
- `table lookuptable` — The table to search in.

**Retorna:**

- `string` — The modified string.

*Fuente: `lua/includes/extensions/string.lua:379`*

---

### `string:JavascriptSafe` `[client/menu/server]`

Escapes special characters for JavaScript in a string, making the string safe for inclusion in to JavaScript strings.

**Argumentos:**

- `string str` — The string that should be escaped.

**Retorna:**

- `string` — The escaped string.

*Fuente: `lua/includes/extensions/string.lua:42`*

---

### `string:Left` `[client/menu/server]`

Returns everything left of supplied place of that string.

**Argumentos:**

- `string str` — The string to extract from.
- `number num` — Amount of chars relative to the beginning (starting from 1).

**Retorna:**

- `string` — Returns a string containing a specified number of characters from the left side of a string.

*Fuente: `lua/includes/extensions/string.lua:244`*

---

### `string:NiceName` `[client/menu/server]`

Converts a `"string_likeThis"` to a more human-friendly `"String like This"`.

This is used internally by Faceposer and other code to transform flex and bodygroup names to a more friendly format.

**Argumentos:**

- `string text` — The name to transform.

**Retorna:**

- `string` — The more human-friendly version of the input text.

*Fuente: `lua/includes/extensions/string.lua:413`*

---

### `string:NiceSize` `[client/menu/server]`

Converts a digital filesize to human-readable text.

**Argumentos:**

- `number bytes` — The filesize in bytes.

**Retorna:**

- `string` — The human-readable filesize, in Bytes/KB/MB/GB (whichever is appropriate).

*Fuente: `lua/includes/extensions/string.lua:283`*

---

### `string:NiceTime` `[client/menu/server]`

Formats the supplied number (in seconds) to the highest possible time unit.

**Argumentos:**

- `number num` — The number to format, in seconds.

**Retorna:**

- `string` — A nicely formatted time string.

*Fuente: `lua/includes/extensions/string.lua:210`*

---

### `string:PatternSafe` `[client/menu/server]`

Escapes all special characters within a string, making the string safe for inclusion in a Lua pattern.

**Argumentos:**

- `string str` — The string to be sanitized

**Retorna:**

- `string` — The string that has been sanitized for inclusion in Lua patterns

*Fuente: `lua/includes/extensions/string.lua:58`*

---

### `string:Replace` `[client/menu/server]`

Replaces all occurrences of the supplied second string.

**Argumentos:**

- `string str` — The string we are seeking to replace an occurrence(s).
- `string find` — What we are seeking to replace.
- `string replace` — What to replace find with.

**Retorna:**

- `string` — The processed string with replacements.

*Fuente: `lua/includes/extensions/string.lua:247`*

---

### `string:Right` `[client/menu/server]`

Returns the last n-th characters of the string.

**Argumentos:**

- `string str` — The string to extract from.
- `number num` — Amount of chars relative to the end (starting from 1).

**Retorna:**

- `string` — Returns a string containing a specified number of characters from the right side of a string.

*Fuente: `lua/includes/extensions/string.lua:245`*

---

### `string:SetChar` `[client/menu/server]`

Sets the character at the specific index of the string.

**Argumentos:**

- `string InputString` — The input string
- `number Index` — The character index, 1 is the first from left.
- `string ReplacementChar` — String to replace with.

**Retorna:**

- `string` — ModifiedString

*Fuente: `lua/includes/extensions/string.lua:299`*

---

### `string:Split` `[client/menu/server]`

Splits the string into a table of strings, separated by the second argument.

This is an alias of string.Explode, but with flipped arguments.

**Argumentos:**

- `string input` — String to split
- `string separator` — Character(s) to split with.

**Retorna:**

- `table<string>` — Split table

*Fuente: `lua/includes/extensions/string.lua:106`*

---

### `string:StartWith` `[client/menu/server]`

Use string.StartsWith.

Returns whether or not the first string starts with the second. This is a alias of string.StartsWith.

**Argumentos:**

- `string inputStr` — String to check.
- `string start` — String to check with.

**Retorna:**

- `boolean` — Whether the first string starts with the second.

*Fuente: `lua/includes/extensions/string.lua:324`*

---

### `string:StartsWith` `[client/menu/server]`

Returns whether or not the first string starts with the second.

**Argumentos:**

- `string inputStr` — String to check.
- `string start` — String to check with.

**Retorna:**

- `boolean` — Whether the first string starts with the second.

*Fuente: `lua/includes/extensions/string.lua:324`*

---

### `string:StripExtension` `[client/menu/server]`

Removes the extension of a path.

See string.GetExtensionFromFilename for a function to retrieve the extension instead.

**Argumentos:**

- `string path` — The string eg. file-path to strip the extension.

**Retorna:**

- `string` — File-path without extension or unmodified string.

*Fuente: `lua/includes/extensions/string.lua:137`*

---

### `string:ToColor` `[client/menu/server]`

Attempts to create a Color from a string.

**Argumentos:**

- `string colorString` — The string to convert from.

The expected format is 3 or 4 integer numbers in the range `0`-`255` with a single space separating them.
These numbers are in the order: `red green blue alpha` where `alpha` is optional.

If the input string is malformed but contains a correctly formatted substring within it, that valid substring will be used which may produce unexpected results.

**Retorna:**

- `Color` — The output Color

If the input string is improperly formatted, this will be `Color( 255, 255, 255, 255 )`

*Fuente: `lua/includes/extensions/string.lua:343`*

---

### `string:ToMinutesSeconds` `[client/menu/server]`

Returns given time in "MM:SS" format.

**Argumentos:**

- `number time` — Time in seconds

**Retorna:**

- `string` — Formatted time

*Fuente: `lua/includes/extensions/string.lua:204`*

---

### `string:ToMinutesSecondsMilliseconds` `[client/menu/server]`

Returns given time in "MM:SS:MS" format.

**Argumentos:**

- `number time` — Time in seconds

**Retorna:**

- `string` — Formatted time

*Fuente: `lua/includes/extensions/string.lua:203`*

---

### `string:ToTable` `[client/menu/server]`

Splits the string into characters and creates a sequential table of characters.

As a result of the  encoding, non-ASCII characters will be split into more than one character in the output table. Each character value in the output table will always be 1 byte.

**Argumentos:**

- `string str` — The string you'll turn into a table.

**Retorna:**

- `table` — A sequential table where each value is a character from the given string

*Fuente: `lua/includes/extensions/string.lua:8`*

---

### `string:Trim` `[client/menu/server]`

Removes leading and trailing matches of a string.

**Argumentos:**

- `string Inputstring` — The string to trim.
- `string Char` = `%s` — String to match - can be multiple characters. Matches spaces by default.

**Retorna:**

- `string` — Modified string

*Fuente: `lua/includes/extensions/string.lua:258`*

---

### `string:TrimLeft` `[client/menu/server]`

Removes leading spaces/characters from a string.

**Argumentos:**

- `string str` — String to trim
- `string char` = `%s` — Custom character to remove

**Retorna:**

- `string` — Trimmed string

*Fuente: `lua/includes/extensions/string.lua:278`*

---

### `string:TrimRight` `[client/menu/server]`

Removes trailing spaces/passed character from a string.

**Argumentos:**

- `string str` — String to remove from
- `string char` = `%s` — Custom character to remove, default is a space

**Retorna:**

- `string` — Trimmed string

*Fuente: `lua/includes/extensions/string.lua:268`*

---

### `string:byte` `[client/menu/server]`

Returns the given string's characters in their numeric ASCII representation.
This function will throw an error if the slice length is greater than 8000 characters.

**Argumentos:**

- `string string` — The string to get the chars from.
- `number startPos` = `1` — The first character of the string to get the byte of.
- `number endPos` = `startPos` — The last character of the string to get the byte of.

**Retorna:**

- `vararg` — Numerical bytes

---

### `string:char` `[client/menu/server]`

Takes the given numerical bytes and converts them to a string.

**Argumentos:**

- `vararg bytes` — The bytes to create the string from.

**Retorna:**

- `string` — String built from given bytes

---

### `string:dump` `[client/menu/server]`

Returns the binary bytecode of the given function.

This does not work with functions created in C/C++. An error will be thrown if it is

**Argumentos:**

- `function func` — The function to get the bytecode of
- `boolean stripDebugInfo` = `false` — True to strip the debug data, false to keep it

**Retorna:**

- `string` — Bytecode

---

### `string:find` `[client/menu/server]`

Attempts to find the specified substring in a string.

This function uses Patterns by default.

**Argumentos:**

- `string haystack` — The string to search in.
- `string needle` — The string to find, can contain patterns if enabled.
- `number startPos` = `1` — The position to start the search from, can be negative start position will be relative to the end position.
- `boolean noPatterns` = `false` — Disable patterns.

**Retorna:**

- `number` — Starting position of the found text, or nil if the text wasn't found
- `number` — Ending position of found text, or nil if the text wasn't found
- `string` — Matched text for each group if patterns are enabled and used, or nil if the text wasn't found

---

### `string:format` `[client/menu/server]`

Formats the specified values into the string given.

**Argumentos:**

- `string format` — The string to be formatted.
Follows this format: http://www.cplusplus.com/reference/cstdio/printf/

The following features are not supported in Lua:
* The `n` specifier
* The `*` width modifier
* The `.*` precision modifier
* All length modifiers

The following specifiers are exclusive to LuaJIT:

| Format | Description | Example of the output |
|:------:|:-----------:|:---------------------:|
| %p | Returns pointer to supplied structure (table/function) | `0xf20a8968` |
| %q | Formats a string between double quotes, using escape sequences when necessary to ensure that it can safely be read back by the Lua interpreter | `"test\1\2test"` |
- `vararg formatParameters` — Values to be formatted into the string.

**Retorna:**

- `string` — The formatted string

---

### `string:gfind` `[client/menu/server]`

This function is removed in Lua versions later than what GMod is currently using. Use string.gmatch instead.Returns an iterator function that is called for every complete match of the pattern, all sub matches will be passed as to the loop.

**Argumentos:**

- `string data` — The string to search in
- `string pattern` — The pattern to search for

**Retorna:**

- `function` — The iterator function that can be used in a for-in loop

---

### `string:gmatch` `[client/menu/server]`

Using Patterns, returns an iterator which will return either one value if no capture groups are defined, or any capture group matches.

**Argumentos:**

- `string data` — The string to search in
- `string pattern` — The pattern to search for

**Retorna:**

- `function` — The iterator function that can be used in a for-in loop

---

### `string:gsub` `[client/menu/server]`

This functions main purpose is to replace certain character sequences in a string using Patterns.

**Argumentos:**

- `string string` — String which should be modified.
- `string pattern` — The pattern that defines what should be matched and eventually be replaced.
- `string replacement` — In case of a string the matched sequence will be replaced with it.

In case of a table, the matched sequence will be used as key and the table will tested for the key, if a value exists it will be used as replacement.

In case of a function all matches will be passed as parameters to the function, the return value(s) of the function will then be used as replacement.
- `number maxReplaces` = `nil` — Maximum number of replacements to be made.

**Retorna:**

- `string` — replaceResult
- `number` — replaceCount

---

### `string:len` `[client/menu/server]`

Counts the number of characters in the string (length). This is equivalent to using the length operator (#).

**Argumentos:**

- `string str` — The string to find the length of.

**Retorna:**

- `number` — Length of the string

---

### `string:lower` `[client/menu/server]`

Changes any upper-case letters in a string to lower-case letters.
This function doesn't work on special non-English UTF-8 characters.

**Argumentos:**

- `string str` — The string to convert.

**Retorna:**

- `string` — A string representing the value of a string converted to lower-case.

---

### `string:match` `[client/menu/server]`

Finds a Patterns in a string.

**Argumentos:**

- `string string` — String which should be searched in for matches.
- `string pattern` — The pattern that defines what should be matched.
- `number startPosition` = `1` — The start index to start the matching from, can be negative to start the match from a position relative to the end.

**Retorna:**

- `vararg` — Matched text(s)

---

### `string:rep` `[client/menu/server]`

Repeats a string by the provided number, with an optional separator.

**Argumentos:**

- `string str` — The string to convert.
- `number repetitions` — Times to repeat, this value gets rounded internally.
- `string separator` — String that will separate the repeated piece. Notice that it doesn't add this string to the start or the end of the result, only between the repeated parts.

**Retorna:**

- `string` — Repeated string.

---

### `string:reverse` `[client/menu/server]`

Reverses a string.

**Argumentos:**

- `string str` — The string to be reversed.

**Retorna:**

- `string` — reversed string

---

### `string:sub` `[client/menu/server]`

Returns a sub-string, starting from the character at position `StartPos` of the string (inclusive), and optionally ending at the character at position `EndPos` of the string (also inclusive). If EndPos is not given, the rest of the string is returned.

**Argumentos:**

- `string string` — The string you'll take a sub-string out of.
- `number StartPos` — The position of the first character that will be included in the sub-string. It can be negative to count from the end.
- `number EndPos` = `nil` — The position of the last character to be included in the sub-string. It can be negative to count from the end.

**Retorna:**

- `string` — The substring.

---

### `string:upper` `[client/menu/server]`

Changes any lower-case letters in a string to upper-case letters.
This function doesn't work on special non-English UTF-8 characters.

**Argumentos:**

- `string str` — The string to convert.

**Retorna:**

- `string` — A string representing the value of a string converted to upper-case.