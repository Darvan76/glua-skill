# DVScrollBar

---

**Hereda de:** `Panel`

---

A generic vertical scrollbar, used in DScrollPanel. See the horizontal alternative [here](DHScrollBar).

The scrollbar notably contains `DVScrollBar.btnUp`, `DVScrollBar.btnDown`, and `DVScrollBar.btnGrip` which are the up button, down button, and grip respectively. Editing the paint functions of these allows custom scrollbar styling (See DScrollPanel:GetVBar for an example), although it is a better idea to use [Derma Skins](Derma_Skin_Creation).

---


## Miembros (10)


---

### `DVScrollBar:AddScroll` `[client/menu]`

Adds specified amount of scroll in pixels.

**Argumentos:**

- `number add` — How much to scroll downwards. Can be negative for upwards scroll

**Retorna:**

- `boolean` — True if the scroll level was changed (i.e. if we did or did not scroll)

---

### `DVScrollBar:AnimateTo` `[client/menu]`

Smoothly scrolls to given level.

**Argumentos:**

- `number scroll` — The scroll level to animate to. In pixels from the top ( from 0 )
- `number length` — Length of the animation in seconds
- `number delay` = `0` — Delay of the animation in seconds
- `number ease` = `-1` — See Panel:NewAnimation for explanation.

**Retorna:**

*(sin retorno)*

---

### `DVScrollBar:BarScale` `[client/menu]`

Returns the scale of the scroll bar based on the difference in size between the visible "window" into the canvas that is being scrolled. Should be used after DVScrollBar:SetUp.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The scale of the scrollbar.

---

### `DVScrollBar:GetHideButtons` `[client/menu]`

Returns whether or not the manual up/down scroll buttons are visible or not. Set by DVScrollBar:SetHideButtons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the manual up/down scroll buttons are visible or not.

---

### `DVScrollBar:GetOffset` `[client/menu]`

Returns the negative of DVScrollBar:GetScroll.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The scroll offset.

---

### `DVScrollBar:GetScroll` `[client/menu]`

Returns the amount of scroll level from the top in pixels

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of scroll level from the top

---

### `DVScrollBar:Grip` `[client/menu]`

Called from within DScrollBarGrip

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DVScrollBar:SetHideButtons` `[client/menu]`

Allows hiding the up and down buttons for better visual stylisation.

**Argumentos:**

- `boolean hide` — True to hide

**Retorna:**

*(sin retorno)*

---

### `DVScrollBar:SetScroll` `[client/menu]`

Sets the scroll level in pixels.

**Argumentos:**

- `number scroll` — The new scroll value.

**Retorna:**

*(sin retorno)*

---

### `DVScrollBar:SetUp` `[client/menu]`

Sets up the scrollbar for use.

The scrollbar will automatically disable itself if the total height of the canvas is lower than the height of the panel that holds the canvas during this function call.

**Argumentos:**

- `number barSize` — The size of the panel that holds the canvas, basically size of "1 page".
- `number canvasSize` — The total size of the canvas, this typically is the bigger number.

**Retorna:**

*(sin retorno)*