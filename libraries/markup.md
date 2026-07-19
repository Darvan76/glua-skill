# markup

---

The markup library only contains a single function to create a MarkupObject.

---


## Miembros (3)


---

### `markup:Color` `[client/menu]`

A convenience function that converts a Color into its markup ready string representation.

**Argumentos:**

- `Color col` — The Color to convert.

**Retorna:**

- `string` — The markup color, for example `255,255,255`.

*Fuente: `lua/includes/modules/markup.lua:39`*

---

### `markup:Escape` `[client/menu]`

Converts a string to its escaped, markup-safe equivalent.

**Argumentos:**

- `string text` — The string to sanitize.

**Retorna:**

- `string sanitizedText` — The parsed markup object ready to be drawn.

*Fuente: `lua/includes/modules/markup.lua:279`*

---

### `markup:Parse` `[client/menu]`

Parses markup into a MarkupObject. Currently, this only supports fonts and colors as demonstrated in the example.
This function is very slow! Always cache its result.

**Argumentos:**

- `string markup` — The markup to be parsed.
- `number maxWidth` = `nil` — The max width of the output.

**Retorna:**

- `MarkupObject` — The parsed markup object ready to be drawn via MarkupObject:Draw.

*Fuente: `lua/includes/modules/markup.lua:295`*