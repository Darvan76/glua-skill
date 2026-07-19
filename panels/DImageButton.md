# DImageButton

---

**Hereda de:** `DButton`

---

An image button.

This panel inherits all methods of DButton, such as DLabel:DoClick.

---


## Miembros (13)


---

### `DImageButton:DepressImage` `[client/menu]`

Used internally to briefly scale the image when clicked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DImageButton:GetDepressImage` `[client/menu]`

Returns whether DImageButton:DepressImage is functional or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean enable` — `true` to enable image depressing when clicked.

---

### `DImageButton:GetImage` `[client/menu]`

Returns the "image" of the DImageButton. Equivalent of DImage:GetImage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The path to the image that is loaded.

---

### `DImageButton:GetStretchToFit` `[client/menu]`

Returns whether the image inside the button should be stretched to fit it or not

See DImageButton:SetStretchToFit

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DImageButton:SetColor` `[client/menu]`

Sets the color of the image. Equivalent of DImage:SetImageColor

**Argumentos:**

- `Color color` — The Color to set

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetDepressImage` `[client/menu]`

Controls whether DImageButton:DepressImage is functional or not.

**Argumentos:**

- `boolean enable` — `true` to enable image depressing when clicked.

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetIcon` `[client/menu]`

Alias of DImageButton:SetImage.

**Argumentos:**

- `string strImage` — 
- `string strBackup` = `nil` — 

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetImage` `[client/menu]`

Sets the "image" of the DImageButton. Equivalent of DImage:SetImage.

**Argumentos:**

- `string strImage` — The path of the image to load, relative to the `materials/` folder. When no file extension is supplied the `.vmt` file extension is assumed.
- `string strBackup` = `nil` — The path of the backup image.

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetImageVisible` `[client/menu]`

Hides or shows the image of the image button. Internally this calls Panel:SetVisible on the internal DImage.

**Argumentos:**

- `boolean visible` — Set true to make it visible ( default ), or false to hide the image

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetKeepAspect` `[client/menu]`

Sets whether the DImageButton should keep the aspect ratio of its image. Equivalent of DImage:SetKeepAspect.

Note that this will not try to fit the image inside the button, but instead it will fill the button with the image.

**Argumentos:**

- `boolean keep` — true to keep the aspect ratio, false not to

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetMaterial` `[client/menu]`

Sets a Global.Material directly as an image. Equivalent of DImage:SetMaterial.

**Argumentos:**

- `IMaterial mat` — The material to set

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetOnViewMaterial` `[client/menu]`

See DImage:SetOnViewMaterial

**Argumentos:**

- `string mat` — 
- `string backup` — 

**Retorna:**

*(sin retorno)*

---

### `DImageButton:SetStretchToFit` `[client/menu]`

Sets whether the image inside the DImageButton should be stretched to fill the entire size of the button, without preserving aspect ratio.

If set to false, the image will not be resized at all.

**Argumentos:**

- `boolean stretch` — True to stretch, false to not to stretch

**Retorna:**

*(sin retorno)*