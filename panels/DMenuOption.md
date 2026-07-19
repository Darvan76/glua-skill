# DMenuOption

---

**Hereda de:** `DButton`

---

Internal subpanel that represents an option used by DMenu.

---


## Miembros (12)


---

### `DMenuOption:AddSubMenu` `[client/menu]`

Creates a sub DMenu and returns it. Has no duplicate call protection.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The created DMenu to add options to.

---

### `DMenuOption:GetChecked` `[client/menu]`

Returns the checked state of DMenuOption.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Are we checked or not

---

### `DMenuOption:GetIsCheckable` `[client/menu]`

Returns whether the DMenuOption is a checkbox option or a normal button option.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DMenuOption:GetMenu` `[client/menu]`

Returns which DMenu this option belongs.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — A DMenu to which this panel belongs.

---

### `DMenuOption:GetRadio` `[client/menu]`

Returns whether this DMenuOption should act like a radio button, set by DMenuOption:SetRadio.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean checked` — `true` to set as a radio button.

---

### `DMenuOption:OnChecked` `[client/menu]`

Called whenever the DMenuOption's checked state changes.

**Argumentos:**

- `boolean checked` — The new checked state

**Retorna:**

*(sin retorno)*

---

### `DMenuOption:SetChecked` `[client/menu]`

Sets the checked state of the DMenuOption.

Invokes DMenuOption:OnChecked.

**Argumentos:**

- `boolean checked` — `true` to set as checked.

**Retorna:**

*(sin retorno)*

---

### `DMenuOption:SetIsCheckable` `[client/menu]`

Sets whether the DMenuOption is a checkbox option or a normal button option.

Enables automatic DMenuOption:GetChecked toggling with left/right clicks.

**Argumentos:**

- `boolean checkable` — Whether the menu option should allow the player to toggle itself.

**Retorna:**

*(sin retorno)*

---

### `DMenuOption:SetMenu` `[client/menu]`

Used to set the DMenu for this option.

**Argumentos:**

- `Panel pnl` — The DMenu for this option.

**Retorna:**

*(sin retorno)*

---

### `DMenuOption:SetRadio` `[client/menu]`

Sets whether this DMenuOption should act like a radio button.

Checking a radio button automatically unchecks all adjacent radio buttons.

**Argumentos:**

- `boolean checked` — `true` to set as a radio button.

**Retorna:**

*(sin retorno)*

---

### `DMenuOption:SetSubMenu` `[client/menu]`

Used internally by DMenuOption:AddSubMenu to create the submenu arrow and assign the created submenu to be opened when this option is hovered.

**Argumentos:**

- `Panel menu` — The sub DMenu this option belongs to.

**Retorna:**

*(sin retorno)*

---

### `DMenuOption:ToggleCheck` `[client/menu]`

Toggles the checked state of DMenuOption. Does not respect DMenuOption:GetIsCheckable.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*