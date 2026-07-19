# cam

---

This directs all drawing to be done to a certain 2D or 3D plane or position, until the corresponding "End" function is called.

The matrix functions exist, but are mostly unusable unless you're familiar with the source engine's layout for each aspect.

---


## Miembros (17)


---

### `cam:ApplyShake` `[client]`

Shakes the screen at a certain position.

**Argumentos:**

- `Vector pos` — Origin of the shake.
- `Angle angles` — Angles of the shake.
- `number factor` — The shake factor.

**Retorna:**

*(sin retorno)*

---

### `cam:End` `[client]`

Switches the renderer back to the previous drawing mode from a 3D context.

This function is an alias of cam.End3D.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `cam:End2D` `[client]`

Switches the renderer back to the previous drawing mode from a 2D context.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `cam:End3D` `[client]`

Switches the renderer back to the previous drawing mode from a 3D context.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `cam:End3D2D` `[client]`

Switches the renderer back to the previous drawing mode from a 3D2D context.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `cam:EndOrthoView` `[client]`

Switches the renderer back to the previous drawing mode from a 3D orthographic rendering context.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `cam:GetModelMatrix` `[client]`

Returns a copy of the model matrix that is at the top of the stack.
Editing the matrix **will not** edit the current view. To do so, you will have to use cam.PushModelMatrix.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The currently active model matrix.

---

### `cam:GetProjectionMatrix` `[client]`

Returns a copy of the projection matrix. Also see cam.GetViewMatrix.

Will return Identity matrix in 2D Render context. In this case use cam.Start3D. See Render_Order.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The currently active projection matrix.

---

### `cam:GetViewMatrix` `[client]`

Returns a copy of the view matrix. Also see cam.GetProjectionMatrix.

Will return Identity matrix in 2D Render context. In this case use cam.Start3D. See Render_Order.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `VMatrix` — The currently active view matrix.

---

### `cam:IgnoreZ` `[client]`

Tells the renderer to ignore the depth buffer and draw any upcoming operation "ontop" of everything that was drawn yet.

This is identical to calling `render.DepthRange( 0, 0.01 )` for `true` and  `render.DepthRange( 0, 1 )` for `false`. See render.DepthRange.

**Argumentos:**

- `boolean ignoreZ` — Determines whenever to ignore the depth buffer or not.

**Retorna:**

*(sin retorno)*

---

### `cam:PopModelMatrix` `[client]`

Removes the currently active model matrix (pushed previously with cam.PushModelMatrix) from the stack and reinstates the previous one.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `cam:PushModelMatrix` `[client]`

Pushes the specified matrix onto the render matrix stack. Each pushed matrix must be popped via cam.PopModelMatrix.

When used in PANEL:Paint, if you want to rely on the top-left position of the panel, you must use VMatrix:Translate with the (0, 0) position of the panel relative to the screen.

If trying to use it with with cam.Start3D2D, set `multiply` to `true`, since **cam.Start3D2D** pushes its own model matrix.

**Argumentos:**

- `VMatrix matrix` — The matrix to push.
- `boolean multiply` = `false` — If set, multiplies given matrix with currently active matrix (cam.GetModelMatrix) before pushing.

**Retorna:**

*(sin retorno)*

---

### `cam:Start` `[client]`

Sets up a new rendering context. This is an extended version of cam.Start3D and cam.Start2D. Must be finished by cam.End3D or cam.End2D.

This will not update current view properties for 3D contexts.

**Argumentos:**

- `table dataTbl` — Render context config. See Structures/RenderCamData.

**Retorna:**

*(sin retorno)*

---

### `cam:Start2D` `[client]`

Sets up a new 2D rendering context. Must be finished by cam.End2D.

This is almost always used with a render target from the render. To set its position use render.SetViewPort with a target already stored.

This will put an identity matrix at the top of the model matrix stack. If you are trying to use cam.PushModelMatrix, call it after this function and not before.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:109`*

---

### `cam:Start3D` `[client]`

Sets up a new 3D rendering context. Must be finished by cam.End3D.

For more advanced settings such as an orthographic view, use cam.Start instead, which this is an alias of basically.

All parameters are optional, and fall back parameters that of the "current" or "last" render operation.

Negative x/y values won't work.

This will not update current view properties.

**Argumentos:**

- `Vector pos` = `nil` — Render cam position.
- `Angle angles` = `nil` — Render cam angles.
- `number fov` = `nil` — Field of view.
- `number x` = `nil` — X coordinate of where to start the new view port.
- `number y` = `nil` — Y coordinate of where to start the new view port.
- `number w` = `nil` — Width of the new viewport.
- `number h` = `nil` — Height of the new viewport.
- `number zNear` = `nil` — Distance to near clipping plane.
Both `zNear` and `zFar` need a value before any of them work.

zNear also requires a value higher than 0.
- `number zFar` = `nil` — Distance to far clipping plane.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:115`*

---

### `cam:Start3D2D` `[client]`

Sets up the model transformation matrix to draw 2D content in 3D space and pushes it into the stack (cam.PushModelMatrix).

Matrix formula:
```
local m = Matrix()
m:SetAngles( angles )
m:SetTranslation( pos )
m:SetScale( Vector( scale, -scale, 1 ) )
```
This must be closed by cam.End3D2D. If not done so, unexpected issues might arise.

render.SetToneMappingScaleLinear may of use when dealing with bloom.

**Argumentos:**

- `Vector pos` — Origin of the 3D2D context, ie. the top left corner, (0, 0).
- `Angle angles` — Angles of the 3D2D context.
+x in the 2d context corresponds to +x of the angle (its forward direction).
+y in the 2d context corresponds to -y of the angle (its right direction).

If (dx, dy) are your desired (+x, +y) unit vectors, the angle you want is dx:AngleEx(dx:Cross(-dy)).
- `number scale` — The scale of the render context.
If scale is 1 then 1 pixel in 2D context will equal to 1 unit in 3D context.

**Retorna:**

*(sin retorno)*

---

### `cam:StartOrthoView` `[client]`

Sets up a new 3d context using orthographic projection.

**Argumentos:**

- `number leftOffset` — The left plane offset.
- `number topOffset` — The top plane offset.
- `number rightOffset` — The right plane offset.
- `number bottomOffset` — The bottom plane offset.

**Retorna:**

*(sin retorno)*