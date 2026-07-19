# MarkupObject

---

Object containing parsed markup for later rendering. Created by markup.Parse.

---


## Miembros (5)


---

### `MarkupObject:Draw` `[client/menu]`

Draws the computed markupobject to the screen. See markup.Parse.

**Argumentos:**

- `number xOffset` — The X coordinate on the screen.
- `number yOffset` — The Y coordinate on the screen.
- `number xAlign` = `TEXT_ALIGN_LEFT` — The alignment of the x coordinate within the text using Enums/TEXT_ALIGN
- `number yAlign` = `TEXT_ALIGN_TOP` — The alignment of the y coordinate within the text using Enums/TEXT_ALIGN
- `number alphaoverride` = `255` — Sets the alpha of all drawn objects to this value.
- `number textAlign` = `TEXT_ALIGN_LEFT` — The alignment of the text horizontally using Enums/TEXT_ALIGN

**Retorna:**

*(sin retorno)*

---

### `MarkupObject:GetHeight` `[client/menu]`

Gets computed the height of the markupobject.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number Height` — The computed height.

---

### `MarkupObject:GetMaxWidth` `[client/menu]`

Gets maximum width for this markup object as defined in markup.Parse.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number maxWidth` — The max width.

---

### `MarkupObject:GetWidth` `[client/menu]`

Gets computed the width of the markupobject.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number Width` — The computed width.

---

### `MarkupObject:Size` `[client/menu]`

Gets computed the width and height of the markupobject.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The computed width.
- `number` — The computed height.