# DModelPanel

---

**Hereda de:** `DButton`

---

DModelPanel is a VGUI element that projects a 3D model onto a 2D plane. See also DAdjustableModelPanel

---


## Miembros (27)


---

### `DModelPanel:DrawModel` `[client]`

Used by the DModelPanel's paint hook to draw the model and background.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:GetAmbientLight` `[client]`

Returns the ambient lighting used on the rendered entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color of the ambient lighting.

---

### `DModelPanel:GetAnimSpeed` `[client]`

Returns the animation speed of the panel entity, see DModelPanel:SetAnimSpeed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The animation speed.

---

### `DModelPanel:GetAnimated` `[client]`

Returns whether or not the panel entity should be animated when the default DModelPanel:LayoutEntity function is called.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — True if the panel entity can be animated with Entity:SetSequence directly, false otherwise.

---

### `DModelPanel:GetCamPos` `[client]`

Returns the position of the model viewing camera.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the camera.

---

### `DModelPanel:GetColor` `[client]`

Returns the color of the rendered entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The color of the entity.

---

### `DModelPanel:GetEntity` `[client]`

Returns the entity being rendered by the model panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CSEnt` — The rendered entity (client-side)

---

### `DModelPanel:GetFOV` `[client]`

Returns the FOV (field of view) the camera is using.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The FOV of the camera.

---

### `DModelPanel:GetLookAng` `[client]`

Returns the angles of the model viewing camera. Is **nil** until changed with DModelPanel:SetLookAng.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the camera.

---

### `DModelPanel:GetLookAt` `[client]`

Returns the position the viewing camera is pointing toward.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position the camera is pointing toward.

---

### `DModelPanel:GetModel` `[client]`

Gets the model of the rendered entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The model of the rendered entity.

---

### `DModelPanel:LayoutEntity` `[client]`

By default, this function slowly rotates and animates the entity being rendered.

If you want to change this behavior, you should override it.

**Argumentos:**

- `Entity entity` — The entity that is being rendered.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:PostDrawModel` `[client]`

Called when the entity of the DModelPanel was drawn.

This is a rendering hook with 3d drawing context.

**Argumentos:**

- `Entity ent` — The clientside entity of the DModelPanel that has been drawn.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:PreDrawModel` `[client]`

Called **before** the entity of the DModelPanel is drawn.

**Argumentos:**

- `Entity ent` — The clientside entity of the DModelPanel that has been drawn.

**Retorna:**

- `boolean` — Return false to stop the entity from being drawn. This will also cause DModelPanel:PostDrawModel to stop being called.

---

### `DModelPanel:RunAnimation` `[client]`

This function is used in DModelPanel:LayoutEntity. It will progress the animation, set using Entity:SetSequence. By default, it is the walking animation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetAmbientLight` `[client]`

Sets the ambient lighting used on the rendered entity.

**Argumentos:**

- `Color color` — The color of the ambient lighting.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetAnimSpeed` `[client]`

Sets the speed used by DModelPanel:RunAnimation to advance frame on an entity sequence.

Entity:FrameAdvance doesn't seem to have any functioning arguments and therefore changing this will not have any affect on the panel entity's sequence speed without reimplementation. It only affects the value returned by DModelPanel:GetAnimSpeed

**Argumentos:**

- `number animSpeed` — The animation speed.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetAnimated` `[client]`

Sets whether or not to animate the entity when the default DModelPanel:LayoutEntity is called.

**Argumentos:**

- `boolean animated` — True to animate, false otherwise.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetCamPos` `[client]`

Sets the position of the camera.

**Argumentos:**

- `Vector pos` — The position to set the camera at.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetColor` `[client]`

Sets the color of the rendered entity.

This does not work on Garry's Mod player models since they use a different color system. To modify a player model color, see Example 2 on the DModelPanel page

**Argumentos:**

- `Color color` — The render color of the entity.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetDirectionalLight` `[client]`

Sets the directional lighting used on the rendered entity.

**Argumentos:**

- `number direction` — The light direction, see Enums/BOX.
- `Color color` — The Color of the directional lighting.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetEntity` `[client]`

Sets the entity to be rendered by the model panel.

If you set `ent` to a shared entity you must set `ent` to nil before removing this panel or else a "Trying to remove server entity on client!" error is thrown

**Argumentos:**

- `Entity ent` — The new panel entity.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetFOV` `[client]`

Sets the panel camera's FOV (field of view).

**Argumentos:**

- `number fov` — The field of view value.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetLookAng` `[client]`

Sets the angles of the camera.

**Argumentos:**

- `Angle ang` — The angles to set the camera to.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetLookAt` `[client]`

Makes the panel's camera face the given position. Basically sets the camera's angles (DModelPanel:SetLookAng) after doing some math.

**Argumentos:**

- `Vector pos` — The position to orient the camera toward.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:SetModel` `[client]`

Sets the model of the rendered entity.

This function may give a different model than expected. This is not a bug, however this problem may appear with some player models which are renamed several times in a wrong way. To solve that, you can use Entity:SetModel and Entity:SetModelName on the internal panel entity. More information : https://github.com/Facepunch/garrysmod-issues/issues/4534.

**Argumentos:**

- `string model` — The model to apply to the entity.

**Retorna:**

*(sin retorno)*

---

### `DModelPanel:StartScene` `[client]`

Runs a Global.ClientsideScene on the panel's entity.

**Argumentos:**

- `string path` — The path to the scene file. (.vcd)

**Retorna:**

*(sin retorno)*