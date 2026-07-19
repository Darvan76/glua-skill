# search

---

The search library

---


## Miembros (2)


---

### `search:AddProvider` `[client]`

Adds a search result provider. For examples, see [gamemodes/sandbox/gamemode/cl_search_models.lua](https://github.com/Facepunch/garrysmod/blob/7c23addd2c35d3d046c80e3d0cb6052055eca3e2/garrysmod/gamemodes/sandbox/gamemode/cl_search_models.lua)

**Argumentos:**

- `function provider` — Provider function.

The search query user has inputed.

You must return a list of tables structured like this:
* string text - Text to "Copy to clipboard"
* function func - Function to use/spawn the item
* Panel icon - A panel to add to spawnmenu
* table words - A table of words?
- `string id` = `nil` — If provided, ensures that only one provider exists with the given ID at a time.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/search.lua:6`*

---

### `search:GetResults` `[client]`

Retrieves search results.

**Argumentos:**

- `string query` — Search query
- `string types` = `nil` — If set, only searches given provider type(s), instead of everything. For example `"tool"` will only search tools in Sandbox. Can be a table for multiple types.
- `number maxResults` = `1024` — How many results to stop at

**Retorna:**

- `table` — A table of results

*Fuente: `lua/includes/modules/search.lua:20`*