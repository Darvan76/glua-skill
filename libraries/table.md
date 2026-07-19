# table

---

The Beginner_Tutorial_Tables **type** is an object that can store multiple values.

The table **library** is a standard Lua library which provides functions to manipulate tables. In Garry's Mod there are several extra useful functions added to this library.

This category lists the functions available in the table `library`.

---


## Miembros (46)


---

### `table:Add` `[client/menu/server]`

Adds all values from `source` table into the `target` table. This is most useful for sequential tables, not "dictionary" or "map" tables. See table.Merge if you want to merge 2 tables into one.

See table.insert for a function that adds a single value, and table.Inherit for a function that inherits keys from one table to another.

**Argumentos:**

- `table target` — The table to insert the new values into.
- `table source` — The table to retrieve the values from.

**Retorna:**

- `table` — The target table.

*Fuente: `lua/includes/extensions/table.lua:116`*

---

### `table:ClearKeys` `[client/menu/server]`

Changes all keys to sequential integers. This creates a new table object and does not affect the original.

**Argumentos:**

- `table table` — The original table to modify.
- `boolean saveKeys` = `false` — Save the keys within each member table. This will insert a new field `__key` into each value, and should not be used if the table contains non-table values.

**Retorna:**

- `table` — Table with integer keys.

*Fuente: `lua/includes/extensions/table.lua:501`*

---

### `table:CollapseKeyValue` `[client/menu/server]`

Collapses a table with keyvalue structure

**Argumentos:**

- `table input` — Input table

**Retorna:**

- `table` — Output table

*Fuente: `lua/includes/extensions/table.lua:477`*

---

### `table:Copy` `[client/menu/server]`

Creates a deep copy and returns that copy.

This function is very slow! If you know the table structure, it is better to write your own copying mechanism
This function does NOT copy userdata, such as Vectors and Angles!

**Argumentos:**

- `table originalTable` — The table to be copied.

**Retorna:**

- `table` — A deep copy of the original table

*Fuente: `lua/includes/extensions/table.lua:22`*

---

### `table:CopyFromTo` `[client/menu/server]`

Empties the target table, and merges all values from the source table into it.

**Argumentos:**

- `table source` — The table to copy from.
- `table target` — The table to write to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/table.lua:71`*

---

### `table:Count` `[client/menu/server]`

Counts the amount of keys in a table. This should only be used when a table is not numerically and sequentially indexed. For those tables, consider the length (**#**) operator.

If you only want to test if the table is empty or not, use table.IsEmpty instead as it is a lot faster.

**Argumentos:**

- `table tbl` — The table to count the keys of.

**Retorna:**

- `number` — The number of keyvalue pairs. This includes non-numeric and non-sequential keys, unlike the length (**#**) operator.

*Fuente: `lua/includes/extensions/table.lua:158`*

---

### `table:DeSanitise` `[client/menu/server]`

Converts a table that has been sanitised with table.Sanitise back to its original form

**Argumentos:**

- `table tbl` — Table to be de-sanitised

**Retorna:**

- `table` — De-sanitised table

*Fuente: `lua/includes/extensions/table.lua:346`*

---

### `table:Empty` `[client/menu/server]`

Removes all values from a table. If your table is not a metatable, it is almost always better to use `tab = {}` to preserve performance.

**Argumentos:**

- `table tbl` — The table to empty.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/table.lua:53`*

---

### `table:FindNext` `[client/menu/server]`

Instead, iterate the table using ipairs or increment from the previous index using Global.next. Non-numerically indexed tables are not ordered.
Returns the value positioned after the supplied value in a table. If it isn't found then the first element in the table is returned

**Argumentos:**

- `table tbl` — Table to search
- `any value` — Value to return element after

**Retorna:**

- `any` — Found element

*Fuente: `lua/includes/extensions/table.lua:659`*

---

### `table:FindPrev` `[client/menu/server]`

Instead, iterate your table with ipairs, storing the previous value and checking for the target. Non-numerically indexed tables are not ordered.
Returns the value positioned before the supplied value in a table. If it isn't found then the last element in the table is returned

**Argumentos:**

- `table tbl` — Table to search
- `any value` — Value to return element before

**Retorna:**

- `any` — Found element

*Fuente: `lua/includes/extensions/table.lua:669`*

---

### `table:Flip` `[client/menu/server]`

Flips key-value pairs of each element within a table, so that each value becomes the key, and each key becomes the value.

Take care when using this function, as a Lua table cannot contain multiple instances of the same key. As such, data loss is possible when using this function on tables with duplicate values.

```
local test = { test = 1, test2 = 1 }
local f = table.Flip( test )
PrintTable( f )
-- Outputs "1	=	test2"
```

**Argumentos:**

- `table input` — The table to flip items of.

**Retorna:**

- `table` — The flipped table.

*Fuente: `lua/includes/extensions/table.lua:766`*

---

### `table:ForEach` `[client/menu/server]`

This was deprecated in Lua 5.1 and removed in 5.2. You should use Global.pairs instead. Iterates for each key-value pair in the table, calling the function with the key and value of the pair. If the function returns anything, the loop is broken.

The GLua interpretation of this is table.ForEach.

**Argumentos:**

- `table tbl` — The table to iterate over.
- `function callback` — The function to run for each key and value.

The key of a key-value pair for this iteration.
The value of a key-value pair for this iteration.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/table.lua:747`*

---

### `table:ForceInsert` `[client/menu/server]`

Inserts a value in to the given table even if the table is non-existent

**Argumentos:**

- `table tab` = `{}` — Table to insert value in to
- `any value` — Value to insert

**Retorna:**

- `table` — The supplied or created table

*Fuente: `lua/includes/extensions/table.lua:393`*

---

### `table:GetFirstKey` `[client/menu/server]`

Instead, expect the first key to be 1.

Non-numerically indexed tables are not ordered and do not have a first key.
Returns the first key found in the given table

**Argumentos:**

- `table tab` — Table to retrieve key from

**Retorna:**

- `any` — Key

*Fuente: `lua/includes/extensions/table.lua:636`*

---

### `table:GetFirstValue` `[client/menu/server]`

Instead, index the table with a key of 1.

Non-numerically indexed tables are not ordered and do not have a first key.
Returns the first value found in the given table

**Argumentos:**

- `table tab` — Table to retrieve value from

**Retorna:**

- `any` — Value

*Fuente: `lua/includes/extensions/table.lua:644`*

---

### `table:GetKeys` `[client/menu/server]`

Returns all keys of a table.

**Argumentos:**

- `table tabl` — The table to get keys of

**Retorna:**

- `table` — Table of keys

*Fuente: `lua/includes/extensions/table.lua:755`*

---

### `table:GetLastKey` `[client/menu/server]`

Instead, use the result of the length (#) operator, ensuring it is not zero. Non-numerically indexed tables are not ordered and do not have a last key.
Returns the last key found in the given table

**Argumentos:**

- `table tab` — Table to retrieve key from

**Retorna:**

- `any` — Key

*Fuente: `lua/includes/extensions/table.lua:649`*

---

### `table:GetLastValue` `[client/menu/server]`

Instead, index the table with the result of the length (#) operator, ensuring it is not zero. Non-numerically indexed tables are not ordered and do not have a last key.
Returns the last value found in the given table

**Argumentos:**

- `table tab` — Table to retrieve value from

**Retorna:**

- `any` — Value

*Fuente: `lua/includes/extensions/table.lua:651`*

---

### `table:GetWinningKey` `[client/menu/server]`

Returns a key of the supplied table with the highest number value.

**Argumentos:**

- `table inputTable` — The table to search in.

**Retorna:**

- `any` — winningKey

*Fuente: `lua/includes/extensions/table.lua:678`*

---

### `table:HasValue` `[client/menu/server]`

Checks if a table has a value.
This function is **very inefficient for large tables** (O(n)) and should probably not be called in things that run each frame. Instead, consider a table structure such as example 2 below. Also see: Tables: Bad Habits
For optimization, functions that look for a value by sorting the table should never be needed if you work on a table that you built yourself.

**Argumentos:**

- `table tbl` — Table to check
- `any value` — Value to search for

**Retorna:**

- `boolean` — Returns true if the table has that value, false otherwise

*Fuente: `lua/includes/extensions/table.lua:105`*

---

### `table:Inherit` `[client/menu/server]`

Copies any missing data from `base` to `target`, and sets the `target`'s `BaseClass` member to the `base` table's pointer.

See table.Merge, which overrides existing values and doesn't add a BaseClass member.

See also table.Add, which simply adds values of one table to another.

Sub-tables aren't inherited. The target's table value will take priority.

**Argumentos:**

- `table target` — Table to copy data to
- `table base` — Table to copy data from

**Retorna:**

- `table` — Target

*Fuente: `lua/includes/extensions/table.lua:10`*

---

### `table:IsEmpty` `[client/menu/server]`

Returns whether or not the given table is empty.

This works on both sequential and non-sequential tables, and is a lot faster for non-sequential tables than `table.Count(tbl) == 0`.

For sequential tables it is better to use `tab[1] == nil`.

**Argumentos:**

- `table tab` — Table to check.

**Retorna:**

- `boolean` — Is empty?

*Fuente: `lua/includes/extensions/table.lua:63`*

---

### `table:IsSequential` `[client/menu/server]`

Returns whether or not the table's keys are sequential

**Argumentos:**

- `table tab` — Table to check

**Retorna:**

- `boolean` — Is sequential

*Fuente: `lua/includes/extensions/table.lua:196`*

---

### `table:KeyFromValue` `[client/menu/server]`

Returns the first key found to be containing the supplied value

**Argumentos:**

- `table tab` — Table to search
- `any value` — Value to search for

**Retorna:**

- `any` — Key

*Fuente: `lua/includes/extensions/table.lua:697`*

---

### `table:KeysFromValue` `[client/menu/server]`

Returns a table of keys containing the supplied value

**Argumentos:**

- `table tab` — Table to search
- `any value` — Value to search for

**Retorna:**

- `table` — Keys

*Fuente: `lua/includes/extensions/table.lua:715`*

---

### `table:LowerKeyNames` `[client/menu/server]`

Returns a copy of the input table with all string keys converted to be lowercase recursively

**Argumentos:**

- `table tbl` — Table to convert

**Retorna:**

- `table` — New table

*Fuente: `lua/includes/extensions/table.lua:445`*

---

### `table:MemberValuesFromKey` `[client/menu/server]`

Returns an array of values of given with given key from each table of given table.

See also table.KeysFromValue.

**Argumentos:**

- `table inputTable` — The table to search in.
- `any keyName` — The key to lookup.

**Retorna:**

- `table` — A list of found values, or an empty table.

*Fuente: `lua/includes/extensions/table.lua:723`*

---

### `table:Merge` `[client/menu/server]`

This function can cause a stack overflow under certain circumstances.
Recursively merges the key-value pairs of the `source` table with the key-value pairs in the `destination` table.

See table.Inherit, which doesn't override existing values.

See also table.Add, which simply adds values of one table to another.

**Argumentos:**

- `table destination` — The table you want the source table to merge with.
- `table source` — The table you want to merge with the destination table.
- `boolean forceOverride` = `false` — If `true`, does not recursively merge sub-tables, and simply replaces them.

**Retorna:**

- `table` — Destination table

*Fuente: `lua/includes/extensions/table.lua:85`*

---

### `table:Pack` `[client/menu/server]`

Packs a set of items into a table and returns the new table. It is meant as an alternative implementation of `table.pack` from newer versions of Lua.

**Argumentos:**

- `vararg items` — The items to pack into a table.

**Retorna:**

- `table` — A table containing the `items`.
- `number` — The amount of items that were added to the table.

*Fuente: `lua/includes/extensions/table.lua:2`*

---

### `table:Random` `[client/menu/server]`

Returns a random value from the supplied table.

This function iterates over the given table **twice**, therefore with sequential tables you should instead use following:

```
mytable[ math.random( #mytable ) ]
```

**Argumentos:**

- `table haystack` — The table to choose from.

**Retorna:**

- `any` — A random value from the table.
- `any` — The key associated with the random value.

*Fuente: `lua/includes/extensions/table.lua:172`*

---

### `table:RemoveByValue` `[client/menu/server]`

Removes the first instance of a given value from the specified table with table.remove, then returns the key that the value was found at.

Avoid usage of this function. It does not remove all instances of given value in the table, only the first found, and it does not work with non sequential tables!

**Argumentos:**

- `table tbl` — The table that will be searched.
- `any val` — The value to find within the table.

**Retorna:**

- `any` — The key at which the value was found, or false if the value was not found.

*Fuente: `lua/includes/extensions/table.lua:700`*

---

### `table:Reverse` `[client/menu/server]`

Returns a reversed copy of a sequential table. Any non-sequential and non-numeric keyvalue pairs will not be copied.

**Argumentos:**

- `table tbl` — Table to reverse.

**Retorna:**

- `table` — A reversed copy of the table.

*Fuente: `lua/includes/extensions/table.lua:731`*

---

### `table:Sanitise` `[client/menu/server]`

Converts Vectors, Angles and booleans to be able to be converted to and from key-values via util.TableToKeyValues.

table.DeSanitise performs the opposite transformation.

**Argumentos:**

- `table tab` — Table to sanitise

**Retorna:**

- `table` — Sanitised table

*Fuente: `lua/includes/extensions/table.lua:284`*

---

### `table:Shuffle` `[client/menu/server]`

Performs an inline [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) on the table in `O(n)` time

**Argumentos:**

- `table target` — The table to shuffle.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/table.lua:185`*

---

### `table:SortByKey` `[client/menu/server]`

Returns a list of keys sorted based on values of those keys.

For normal sorting see table.sort.

**Argumentos:**

- `table tab` — Table to sort. All values of this table must be of same type.
- `boolean descending` = `false` — Should the order be descending?

**Retorna:**

- `table` — A table of keys sorted by values from supplied table.

*Fuente: `lua/includes/extensions/table.lua:141`*

---

### `table:SortByMember` `[client/menu/server]`

Sorts a table by a named member.

**Argumentos:**

- `table tab` — Table to sort.
- `any memberKey` — The key used to identify the member.
- `boolean ascending` = `false` — Whether or not the order should be ascending.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/table.lua:407`*

---

### `table:SortDesc` `[client/menu/server]`

Sorts a table in reverse order from table.sort.
This function modifies the table you give to it. Like table.sort, it does not return anything.

**Argumentos:**

- `table tbl` — The table to sort in descending order.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/table.lua:133`*

---

### `table:ToString` `[client/menu/server]`

Converts a table into a string

**Argumentos:**

- `table tbl` — The table to iterate over.
- `string displayName` = `nil` — A name for the table.
- `boolean niceFormatting` = `false` — Adds new lines and tabs to the string.

**Retorna:**

- `string` — The table formatted as a string.

*Fuente: `lua/includes/extensions/table.lua:271`*

---

### `table:concat` `[client/menu/server]`

Concatenates the contents of a table to a string.

**Argumentos:**

- `table tbl` — The table to concatenate.
- `string concatenator` = `\` — A separator to insert between strings
- `number startPos` = `1` — The key to start at
- `number endPos` = `#tbl` — The key to end at

**Retorna:**

- `string` — Concatenated values

---

### `table:foreachi` `[client/menu/server]`

This was deprecated in Lua 5.1 and removed in 5.2. You should use Global.ipairs() instead. Iterates for each numeric index in the table in order.

This is inherited from the original Lua implementation and is deprecated in Lua as of 5.1; see [here](http://lua-users.org/wiki/TableLibraryTutorial). You should use Global.ipairs() instead.

**Argumentos:**

- `table table` — The table to iterate over.
- `function func` — The function to run for each index.

**Retorna:**

*(sin retorno)*

---

### `table:getn` `[client/menu/server]`

This function was deprecated in Lua 5.1 and is removed in 5.2. Use the length (#) operator instead. Returns the length of the table.

**Argumentos:**

- `table tbl` — The table to check.

**Retorna:**

- `number` — Sequential length.

---

### `table:insert` `[client/menu/server]`

Inserts a value into a table at the end of the table or at the given position.
This function does not call the `__newindex` [metamethod](Metamethods).

**Argumentos:**

- `table tbl` — The table to insert the variable into.
- `number position` — The position in the table to insert the variable. If the third argument is nil this argument becomes the value to insert at the end of given table.
- `any value` — The variable to insert into the table.

**Retorna:**

- `number` — The index the object was placed at.

---

### `table:maxn` `[client/menu/server]`

Returns the highest numerical key.

**Argumentos:**

- `table tbl` — The table to search.

**Retorna:**

- `number` — The highest numerical key.

---

### `table:move` `[client/menu/server]`

Moves elements from one part of a table to another part a given table. This is similar to assigning elements from the source table to the destination table in multiple assignments.

**Argumentos:**

- `table sourceTbl` — The source table from which the elements are to be moved.
- `number from` — The start index of the source range from which the elements are to be moved.
- `number to` — The end index of the source range until which the elements are to be moved.
- `number dest` — The index within the destination table where the moved elements should be inserted.
- `table destTbl` = `sourceTbl` — The destination table to which the elements are to be moved. By default, this is the same as the source table.

**Retorna:**

- `table` — The modified destination table.

*Fuente: `lua/includes/extensions/table.lua:781`*

---

### `table:remove` `[client/menu/server]`

Removes a value from a table and shifts any other values down to fill the gap.
Does nothing if index is less than 1 or greater than `#tbl`

**Argumentos:**

- `table tbl` — The table to remove the value from.
- `number index` = `#tbl` — The index of the value to remove.

**Retorna:**

- `any` — The value that was removed.

---

### `table:sort` `[client/menu/server]`

Sorts a sequential table either ascending or by the given sort function.
This function modifies the table you give to it and internally uses the [quick sort algorithm](http://www.lua.org/source/5.2/ltablib.c.html#sort).

**Argumentos:**

- `table tbl` — The table to sort.
- `function sorter` = `nil` — If specified, the sorting function.

Item A to test.
Item B to test.
Result of the comparison. Return true in this function if you want the first parameter to come first in the sorted array.

**Retorna:**

*(sin retorno)*