# DLabelURL

---

**Hereda de:** `URLLabel`

---

Underlined link label without a DoClick function. When a valid URL is set and the label is clicked, it will open a browser window and navigate to the address.

This panel uses gui.OpenURL internally and its restrictions apply.

---


## Miembros (9)


---

### `DLabelURL:GetAutoStretchVertical` `[client/menu]`

Does absolutely nothing at all.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean draw` — Does nothing.

---

### `DLabelURL:GetColor` `[client/menu]`

Gets the current text color of the DLabelURL. Returns either DLabelURL:GetTextColor or if that is unset -  DLabelURL:GetTextStyleColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The current text Color.

---

### `DLabelURL:GetTextColor` `[client/menu]`

Gets the current text color of the DLabelURL set by DLabelURL:SetTextColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The current text Color.

---

### `DLabelURL:GetTextStyleColor` `[client/menu]`

Returns the color set by DLabelURL:SetTextStyleColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The Color

---

### `DLabelURL:SetAutoStretchVertical` `[client/menu]`

Does absolutely nothing at all.

**Argumentos:**

- `boolean draw` — Does nothing.

**Retorna:**

*(sin retorno)*

---

### `DLabelURL:SetColor` `[client/menu]`

Alias of DLabelURL:SetTextColor.

**Argumentos:**

- `Color col` — The Color to use.

**Retorna:**

*(sin retorno)*

---

### `DLabelURL:SetTextColor` `[client/menu]`

Sets the text color of the DLabelURL. Overrides DLabelURL:SetTextStyleColor.

This should only be used immediately after it is created, and otherwise Panel:SetFGColor.

**Argumentos:**

- `Color col` — The Color to use.

**Retorna:**

*(sin retorno)*

---

### `DLabelURL:SetTextStyleColor` `[client/menu]`

Sets the base text color of the DLabelURL. This is overridden by DLabelURL:SetTextColor.

**Argumentos:**

- `Color color` — The Color to set

**Retorna:**

*(sin retorno)*

---

### `DLabelURL:UpdateFGColor` `[client/menu]`

Used internally to set correct text color via Panel:SetFGColor and DLabelURL:GetColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*