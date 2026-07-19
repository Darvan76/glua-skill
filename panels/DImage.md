# DImage

---

**Hereda de:** `DPanel`

---

DImage is an advanced, more robust version of the Material panel.

See DImageButton for a click-able version of this panel.

---


## Miembros (18)


---

### `DImage:DoLoadMaterial` `[client/menu]`

Actually loads the IMaterial to render it. Called from DImage:LoadMaterial.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DImage:FixVertexLitMaterial` `[client/menu]`

"Fixes" the current material of the DImage if it has VertexLit shader by creating a new one with the same name and a prefix of "_DImage" and automatically calling DImage:SetMaterial with the new material.

This fixes the problem where using materials using shaders that expect lighting information causing "weird" flickering when displayed in 2D/Unlit environment.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DImage:GetFailsafeMatName` `[client/menu]`

Returns the texture path set by DImage:SetFailsafeMatName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — 

---

### `DImage:GetImage` `[client/menu]`

Returns the image loaded in the image panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The path to the image that is loaded.

---

### `DImage:GetImageColor` `[client/menu]`

Returns the color override of the image panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color col` — The color override of the image. Uses Color.

---

### `DImage:GetKeepAspect` `[client/menu]`

Returns whether the DImage should keep the aspect ratio of its image when being resized.

See DImage:SetKeepAspect for more info on how it works.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the DImage should keep the aspect ratio of its image when being resized.

---

### `DImage:GetMatName` `[client/menu]`

Returns the texture path set by DImage:SetMatName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — 

---

### `DImage:GetMaterial` `[client/menu]`

Returns the current Global.Material of the DImage.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `IMaterial` — 

---

### `DImage:LoadMaterial` `[client/menu]`

Initializes the loading process of the material to render if it is not loaded yet.

You do not need to call this function. It is done for you automatically.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DImage:PaintAt` `[client/menu]`

Paints a ghost copy of the DImage panel at the given position and dimensions. This function overrides Panel:PaintAt.

**Argumentos:**

- `number posX` — The x coordinate to draw the panel from.
- `number posY` — The y coordinate to draw the panel from.
- `number width` — The width of the panel image to be drawn.
- `number height` — The height of the panel image to be drawn.

**Retorna:**

*(sin retorno)*

---

### `DImage:SetFailsafeMatName` `[client/menu]`

Sets the backup material to be loaded when the image is first rendered. Used by DImage:SetOnViewMaterial.

**Argumentos:**

- `string backupMat` — 

**Retorna:**

*(sin retorno)*

---

### `DImage:SetImage` `[client/menu]`

Sets the image to load into the frame. If the first image can't be loaded and `strBackup` is set, that image will be loaded instead.

This eventually calls DImage:SetMaterial.

**Argumentos:**

- `string strImage` — The path of the image to load, relative to the `materials/` folder. When no file extension is supplied the `.vmt` file extension is assumed.
- `string strBackup` = `nil` — The path of the backup image.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dimage.lua:91`*

---

### `DImage:SetImageColor` `[client/menu]`

Sets the image's color override.

**Argumentos:**

- `Color col` — The color override of the image. Uses Color.

**Retorna:**

*(sin retorno)*

---

### `DImage:SetKeepAspect` `[client/menu]`

Sets whether the DImage should keep the aspect ratio of its image when being resized.

Note that this will not try to fit the image inside the button, but instead it will fill the button with the image.

**Argumentos:**

- `boolean keep` — true to keep the aspect ratio, false not to

**Retorna:**

*(sin retorno)*

---

### `DImage:SetMatName` `[client/menu]`

Sets the material to be loaded when the image is first rendered. Used by DImage:SetOnViewMaterial.

**Argumentos:**

- `string mat` — 

**Retorna:**

*(sin retorno)*

---

### `DImage:SetMaterial` `[client/menu]`

Sets a Global.Material directly as an image.

**Argumentos:**

- `IMaterial mat` — The material to set

**Retorna:**

*(sin retorno)*

---

### `DImage:SetOnViewMaterial` `[client/menu]`

Similar to DImage:SetImage, but will only do the expensive part of actually loading the textures/material if the material is about to be rendered/viewed.

Useful for cases like DIconBrowser, where there are hundreds of small icons in 1 panel in a list that do not need all to be loaded at the same time.

**Argumentos:**

- `string mat` — 
- `string backupMat` — 

**Retorna:**

*(sin retorno)*

---

### `DImage:Unloaded` `[client/menu]`

Returns true if the image is **not** yet loaded.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 