# DHScrollBar

---

**Hereda de:** `Panel`

---

A generic horizontal scrollbar. See the vertical alternative [here](DVScrollBar).

The scrollbar notably contains `DHScrollBar.btnLeft`, `DHScrollBar.btnRight`, and `DHScrollBar.btnGrip` which are the left button, right button, and grip respectively. Editing the paint functions of these allows custom scrollbar styling, although it is a better idea to use [Derma Skins](Derma_Skin_Creation).

---


## Miembros (10)


---

### `DHScrollBar:AddScroll` `[client/menu]`

Adds specified amount of scroll in pixels.

**Argumentos:**

- `number add` — How much to scroll rightwards. Can be negative for leftwards scroll

**Retorna:**

- `boolean` — True if the scroll level was changed (i.e. if we did or did not scroll)

---

### `DHScrollBar:AnimateTo` `[client/menu]`

Smoothly scrolls to given level.

**Argumentos:**

- `number scroll` — The scroll level to animate to. In pixels from the left ( from 0 )
- `number length` — Length of the animation in seconds
- `number delay` = `0` — Delay of the animation in seconds
- `number ease` = `-1` — See Panel:NewAnimation for explanation.

**Retorna:**

*(sin retorno)*

---

### `DHScrollBar:BarScale` `[client/menu]`

Returns the scale of the scroll bar based on the difference in size between the visible "window" into the canvas that is being scrolled. Should be used after DHScrollBar:SetUp.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The scale of the scrollbar.

---

### `DHScrollBar:GetHideButtons` `[client/menu]`

Returns whether or not the manual left/right scroll buttons are visible or not. Set by DHScrollBar:SetHideButtons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the manual left/right scroll buttons are visible or not.

---

### `DHScrollBar:GetOffset` `[client/menu]`

Returns the negative of DHScrollBar:GetScroll.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The scroll offset.

---

### `DHScrollBar:GetScroll` `[client/menu]`

Returns the amount of scroll level from the left in pixels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of scroll level from the left edge.

---

### `DHScrollBar:Grip` `[client/menu]`

Called from within DScrollBarGrip

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DHScrollBar:SetHideButtons` `[client/menu]`

Allows hiding the left and right buttons for better visual stylisation.

**Argumentos:**

- `boolean hide` — True to hide

**Retorna:**

*(sin retorno)*

---

### `DHScrollBar:SetScroll` `[client/menu]`

Sets the scroll level in pixels.

**Argumentos:**

- `number scroll` — The new scroll value.

**Retorna:**

*(sin retorno)*

---

### `DHScrollBar:SetUp` `[client/menu]`

Sets up the scrollbar for use.

The scrollbar will automatically disable itself if the total width of the canvas is lower than the width of the panel that holds the canvas during this function call.

**Argumentos:**

- `number barSize` — The size of the panel that holds the canvas, basically size of "1 page".
- `number canvasSize` — The total size of the canvas, this typically is the bigger number.

**Retorna:**

*(sin retorno)*