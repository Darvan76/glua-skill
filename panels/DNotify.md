# DNotify

---

**Hereda de:** `Panel`

---

A panel that fades its contents in and out once, like a notification.

---


## Miembros (9)


---

### `DNotify:AddItem` `[client]`

Adds a panel to the notification

**Argumentos:**

- `Panel pnl` — The panel to add
- `number lifeLength` = `nil` — If set, overrides DNotify:SetLife for when the given panel should be removed.

**Retorna:**

*(sin retorno)*

---

### `DNotify:GetAlignment` `[client]`

Returns the current alignment of this notification panel. Set by DNotify:SetAlignment.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The numpad alignment

---

### `DNotify:GetItems` `[client]`

Returns all the items added with DNotify:AddItem.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of Panels.

---

### `DNotify:GetLife` `[client]`

Returns the display time in seconds of the DNotify. This is set with
DNotify:SetLife.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The display time in seconds.

---

### `DNotify:GetSpacing` `[client]`

Returns the spacing between items set by DNotify:SetSpacing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DNotify:SetAlignment` `[client]`

Sets the alignment of the child panels in the notification

**Argumentos:**

- `number alignment` — It's the Numpad alignment, 6 is right, 9 is top left, etc.

**Retorna:**

*(sin retorno)*

---

### `DNotify:SetLife` `[client]`

Sets the display time in seconds for the DNotify.

**Argumentos:**

- `number time` — The time in seconds.

**Retorna:**

*(sin retorno)*

---

### `DNotify:SetSpacing` `[client]`

Sets the spacing between child elements of the notification panel.

**Argumentos:**

- `number spacing` — 

**Retorna:**

*(sin retorno)*

---

### `DNotify:Shuffle` `[client]`

Used internally to position and fade in/out its DNotify:GetItems.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*