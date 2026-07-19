# DPanel

---

**Hereda de:** `Panel`

---

A simple rectangular box, commonly used for parenting other elements to. Pretty much all elements are based on this.

---


## Miembros (13)


---

### `DPanel:GetBackgroundColor` `[client/menu]`

Returns the panel's background color.

By default this returns **nil** even though the default background color is white

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — Color of the panel's background.

---

### `DPanel:GetDisabled` `[client/menu]`

Returns whether or not the panel is disabled.

Use Panel:IsEnabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the panel is disabled (mouse input disabled and background alpha set to 75), `false` if its enabled (mouse input enabled and background alpha set to 255).

---

### `DPanel:GetDrawBackground` `[client/menu]`

You should use DPanel:GetPaintBackground instead.Returns whether or not the panel background is being drawn. Alias of DPanel:GetPaintBackground.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the panel background is drawn, false otherwise.

---

### `DPanel:GetIsMenu` `[client/menu]`

Used internally by DMenu.

Returns whether the frame is part of a derma menu or not.

If this is `true`, Global.CloseDermaMenus will not be called when the frame is clicked, and thus any open menus will remain open.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean isMenu` — Whether this panel is a Menu Component

---

### `DPanel:GetPaintBackground` `[client/menu]`

Returns whether or not the panel background is being drawn.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the panel background is drawn, false otherwise.

---

### `DPanel:GetTabbingDisabled` `[client/menu]`

Does nothing. Returns value set by DPanel:SetTabbingDisabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean draw` — 

---

### `DPanel:SetBackgroundColor` `[client/menu]`

Sets the background color of the panel.

**Argumentos:**

- `Color color` — The background Color.

**Retorna:**

*(sin retorno)*

---

### `DPanel:SetDisabled` `[client/menu]`

Sets whether or not to disable the panel.

Use Panel:SetEnabled instead.

**Argumentos:**

- `boolean disabled` — True to disable the panel (mouse input disabled and background alpha set to 75), false to enable it (mouse input enabled and background alpha set to 255).

**Retorna:**

*(sin retorno)*

---

### `DPanel:SetDrawBackground` `[client/menu]`

You should use DPanel:SetPaintBackground instead.Sets whether or not to draw the panel background. Alias of DPanel:SetPaintBackground.

**Argumentos:**

- `boolean draw` — True to show the panel's background, false to hide it.

**Retorna:**

*(sin retorno)*

---

### `DPanel:SetIsMenu` `[client/menu]`

Used internally by DMenu.

Sets whether the frame is part of a derma menu or not.

If this is set to `true`, Global.CloseDermaMenus will not be called when the frame is clicked, and thus any open menus will remain open.

**Argumentos:**

- `boolean isMenu` — Whether this pane is a Menu Component

**Retorna:**

*(sin retorno)*

---

### `DPanel:SetPaintBackground` `[client/menu]`

Sets whether or not to paint/draw the panel background.

**Argumentos:**

- `boolean paint` — True to show the panel's background, false to hide it.

**Retorna:**

*(sin retorno)*

---

### `DPanel:SetTabbingDisabled` `[client/menu]`

Does nothing.

**Argumentos:**

- `boolean draw` — 

**Retorna:**

*(sin retorno)*

---

### `DPanel:UpdateColours` `[client/menu]`

Does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*