# DIconBrowser

---

**Hereda de:** `DScrollPanel`

---

Simply a DIconLayout which automatically displays all of the silkicons.
Used as a way to get the user to select an icon.

---


## Miembros (10)


---

### `DIconBrowser:Fill` `[client/menu]`

Automatically called to fill the browser with icons. Will not work if DIconBrowser:SetManual is set to true.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:FilterByText` `[client/menu]`

A simple unused search feature, hides all icons that do not contain given text in their file path.

**Argumentos:**

- `string text` — The text to search for

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:GetManual` `[client/menu]`

Returns whether or not the browser should fill itself with icons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DIconBrowser:GetSelectedIcon` `[client/menu]`

Returns the currently selected icon's file path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The currently selected icon's file path.

---

### `DIconBrowser:OnChange` `[client/menu]`

Called when the selected icon was changed. Use DIconBrowser:GetSelectedIcon to get the selected icon's filepath.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:OnChangeInternal` `[client/menu]`

Use DIconBrowser:OnChange instead

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:ScrollToSelected` `[client/menu]`

Scrolls the browser to the selected icon

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:SelectIcon` `[client/menu]`

Selects an icon from file path

**Argumentos:**

- `string icon` — The file path of the icon to select. Do not include the "materials/" part.

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:SetManual` `[client/menu]`

Sets whether or not the browser should automatically fill itself with icons.

**Argumentos:**

- `boolean manual` — 

**Retorna:**

*(sin retorno)*

---

### `DIconBrowser:SetSelectedIcon` `[client/menu]`

Set the currently selected file path. Do not use. Use DIconBrowser:SelectIcon instead.

**Argumentos:**

- `string str` — 

**Retorna:**

*(sin retorno)*