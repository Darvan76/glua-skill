# DTooltip

---

**Hereda de:** `DLabel`

---

The panel used internally for tooltips. See Panel:SetTooltip for more information.

---


## Miembros (5)


---

### `DTooltip:Close` `[client/menu]`

Forces the tooltip to close. This will remove the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTooltip:DrawArrow` `[client/menu]`

Used to draw a triangle beneath the DTooltip
Requires DTooltip:SetContents, without this it will error

**Argumentos:**

- `number x` — arrow location on the x axis
- `number y` — arrow location on the y axis

**Retorna:**

*(sin retorno)*

---

### `DTooltip:OpenForPanel` `[client/menu]`

Sets up the tooltip for display for given panel and starts the timer.

Normally you wouldn't call this and you'd use Panel:SetTooltip, Panel:SetTooltipPanel or Panel:SetTooltipPanelOverride.

**Argumentos:**

- `Panel pnl` — The panel to open the tooltip for.

**Retorna:**

*(sin retorno)*

---

### `DTooltip:PositionTooltip` `[client/menu]`

Positions the DTooltip so it doesn't stay in the same draw position.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTooltip:SetContents` `[client/menu]`

What Panel you want put inside of the DTooltip

You can only have one Panel at a time; use Parenting to add more

**Argumentos:**

- `Panel panel` — Contents
- `boolean delete` = `false` — If set to true, the panel in the first argument will be automatically removed when DTooltip is closed via DTooltip:Close.

**Retorna:**

*(sin retorno)*