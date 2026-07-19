# DBubbleContainer

---

**Hereda de:** `DPanel`

---

A transparent gray speech bubble panel made up of a rounded box and point coming from the bottom.

---


## Miembros (3)


---

### `DBubbleContainer:GetBackgroundColor` `[client]`

Returns Background Color, See DBubbleContainer:SetBackgroundColor

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbubblecontainer.lua:4`*

---

### `DBubbleContainer:OpenForPos` `[client]`

Sets the speech bubble position and size along with the dialog point position.

**Argumentos:**

- `number x` — The x position of the dialog point. If this is set to a value greater than half of the set width, the entire bubble container will be moved in addition to the dialog point.
- `number y` — The y position of the bubble container. Has no effect unless set to a value greater than the set height + 64 pixels.
- `number w` — The width of the bubble container.
- `number h` — The height of the bubble container.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbubblecontainer.lua:14`*

---

### `DBubbleContainer:SetBackgroundColor` `[client]`

Sets Background Color, See Also DBubbleContainer:GetBackgroundColor

**Argumentos:**

- `Color color` — The New Color

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dbubblecontainer.lua:4`*