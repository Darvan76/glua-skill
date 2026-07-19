# DPanPanel

---

**Hereda de:** `DPanel`

---

A panel similar to DScrollPanel, but that allows the player to pan around, for example a zoomed in image within a small window.

---


## Miembros (5)


---

### `DPanPanel:AddItem` `[client/menu]`

Parents the passed panel to the DPanPanel:GetCanvas.

**Argumentos:**

- `Panel pnl` — The panel to add.

**Retorna:**

*(sin retorno)*

---

### `DPanPanel:GetCanvas` `[client/menu]`

The internal canvas panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The canvas panel.

---

### `DPanPanel:OnScroll` `[client/menu]`

Used internally, called from DPanPanel:ScrollToChild.

**Argumentos:**

- `number x` — 
- `number y` — 

**Retorna:**

*(sin retorno)*

---

### `DPanPanel:ScrollToChild` `[client/menu]`

Scroll to a specific child panel.

**Argumentos:**

- `Panel pnl` — The panel to scroll to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dpanpanel.lua:123`*

---

### `DPanPanel:SetCanvas` `[client/menu]`

Used internally.

**Argumentos:**

- `Panel pnl` — The canvas panel.

**Retorna:**

*(sin retorno)*