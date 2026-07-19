# DPanelSelect

---

**Hereda de:** `DPanelList`

---

This is derived from the deprecated DPanelList.

A base panel for things like DModelSelect.
Basically, a list of panels that can be selected.
Selected panel can be retrieved and has visual indication of being selected.

---


## Miembros (4)


---

### `DPanelSelect:AddPanel` `[client]`

Adds a panel to be selectable.

**Argumentos:**

- `Panel pnl` — The panel to add.
- `table conVars` = `nil` — ConVars to set when this panel is selected. Keys are the cvar name, value is the value for that cvar.

**Retorna:**

*(sin retorno)*

---

### `DPanelSelect:FindBestActive` `[client]`

Used internally by DPanelSelect:AddPanel to select the best default selected panel based on player's convars.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DPanelSelect:OnActivePanelChanged` `[client]`

Called when the selected panel changes.

**Argumentos:**

- `Panel oldPnl` — Old selected panel.
- `Panel newPnl` — New selected panel.

**Retorna:**

*(sin retorno)*

---

### `DPanelSelect:SelectPanel` `[client]`

Selects a given panel.

**Argumentos:**

- `Panel pnl` — Panel to select. It should've been added previously via DPanelSelect:AddPanel.

**Retorna:**

*(sin retorno)*