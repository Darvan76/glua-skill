# language

---

The language library is used for translation.

---


## Miembros (2)


---

### `language:Add` `[client/menu]`

Adds a language item. Language placeholders preceded with "#" are replaced with full text in Garry's Mod once registered with this function.

**Argumentos:**

- `string placeholder` — The key for this phrase, without the preceding "#".
- `string fulltext` — The phrase that should be displayed whenever this key is used.

**Retorna:**

*(sin retorno)*

---

### `language:GetPhrase` `[client/menu]`

Retrieves the translated version of inputted string. Useful for concentrating multiple translated strings.

**Argumentos:**

- `string phrase` — The phrase to translate

**Retorna:**

- `string` — The translated phrase, or the input string if no translation was found. There is a limit of 4000 bytes for the returned string.