# ProjectedTexture

---

A client side projected texture, created by Global.ProjectedTexture.

---


## Miembros (48)


---

### `ProjectedTexture:GetAngles` `[client]`

Returns the angle of the ProjectedTexture, which were previously set by ProjectedTexture:SetAngles

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Angle` — The angles of the ProjectedTexture.

---

### `ProjectedTexture:GetBrightness` `[client]`

Returns the brightness of the ProjectedTexture, which was previously set by ProjectedTexture:SetBrightness

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The brightness of the ProjectedTexture.

---

### `ProjectedTexture:GetColor` `[client]`

Returns the color of the ProjectedTexture, which was previously set by ProjectedTexture:SetColor.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Color` — The Color of the ProjectedTexture.

---

### `ProjectedTexture:GetConstantAttenuation` `[client]`

Returns the constant attenuation of the projected texture, which can also be set by ProjectedTexture:SetConstantAttenuation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The constant attenuation

---

### `ProjectedTexture:GetEnableShadows` `[client]`

Returns whether shadows are enabled for this ProjectedTexture, which was previously set by ProjectedTexture:SetEnableShadows

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether shadows are enabled.

---

### `ProjectedTexture:GetFarZ` `[client]`

Returns the projection distance of the ProjectedTexture, which was previously set by ProjectedTexture:SetFarZ

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The projection distance of the ProjectedTexture.

---

### `ProjectedTexture:GetHorizontalFOV` `[client]`

Returns the horizontal FOV of the ProjectedTexture, which was previously set by ProjectedTexture:SetHorizontalFOV or ProjectedTexture:SetFOV

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The horizontal FOV of the ProjectedTexture.

---

### `ProjectedTexture:GetLightWorld` `[client]`

Returns whenever or not the Texture should light up world geometry.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean lightworld` — `true` if the Texture should light up world geometry.

---

### `ProjectedTexture:GetLinearAttenuation` `[client]`

Returns the linear attenuation of the projected texture, which can also be set by ProjectedTexture:SetLinearAttenuation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The linear attenuation.

---

### `ProjectedTexture:GetNearZ` `[client]`

Returns the NearZ value of the ProjectedTexture, which was previously set by ProjectedTexture:SetNearZ

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — NearZ of the ProjectedTexture.

---

### `ProjectedTexture:GetNoCull` `[client]`

Returns the state of projected texture view-frustum culling. See ProjectedTexture:SetNoCull.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean enable` — `false` if culling is enabled (default), `true` if disabled.

---

### `ProjectedTexture:GetOrthographic` `[client]`

Returns the current orthographic settings of the Projected Texture. To set these values, use ProjectedTexture:SetOrthographic.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not this projected texture is orthographic. When false, nothing else is returned.
- `number` — left
- `number` — top
- `number` — right
- `number` — bottom

---

### `ProjectedTexture:GetPos` `[client]`

Returns the position of the ProjectedTexture, which was previously set by ProjectedTexture:SetPos

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the ProjectedTexture.

---

### `ProjectedTexture:GetQuadraticAttenuation` `[client]`

Returns the quadratic attenuation of the projected texture, which can also be set by ProjectedTexture:SetQuadraticAttenuation.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The quadratic attenuation

---

### `ProjectedTexture:GetShadowDepthBias` `[client]`

Returns the shadow depth bias of the projected texture.

Set by ProjectedTexture:SetShadowDepthBias.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number bias` — The current shadow depth bias.

---

### `ProjectedTexture:GetShadowFilter` `[client]`

Returns the shadow "filter size" of the projected texture. `0` is fully pixelated, higher values will blur the shadow more.

Set by ProjectedTexture:SetShadowFilter.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current shadow filter size.

---

### `ProjectedTexture:GetShadowSlopeScaleDepthBias` `[client]`

Returns the shadow depth slope scale bias of the projected texture.

Set by ProjectedTexture:SetShadowSlopeScaleDepthBias.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The current shadow depth slope scale bias.

---

### `ProjectedTexture:GetSkipShadowUpdates` `[client]`

Returns whether shadow updates are disabled for this ProjectedTexture, which was previously set by ProjectedTexture:SetSkipShadowUpdates.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether shadow updates are disabled.

---

### `ProjectedTexture:GetTargetEntity` `[client]`

Returns the target entity of this projected texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Entity` — The current target entity.

---

### `ProjectedTexture:GetTexture` `[client]`

Returns the texture of the ProjectedTexture, which was previously set by ProjectedTexture:SetTexture

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The texture of the ProjectedTexture.

---

### `ProjectedTexture:GetTextureFrame` `[client]`

Returns the texture frame of the ProjectedTexture, which was previously set by ProjectedTexture:SetTextureFrame

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The texture frame.

---

### `ProjectedTexture:GetVerticalFOV` `[client]`

Returns the vertical FOV of the ProjectedTexture, which was previously set by ProjectedTexture:SetVerticalFOV or ProjectedTexture:SetFOV

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The vertical FOV of the ProjectedTexture.

---

### `ProjectedTexture:IsValid` `[client]`

Returns true if the projected texture is valid (i.e. has not been removed), false otherwise.

Instead of calling this directly it's a good idea to call Global.IsValid in case the variable is nil.

```
IsValid( ptexture )
```

This not only checks whether the projected texture is valid - but also checks whether it's nil.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the projected texture is valid.

---

### `ProjectedTexture:Remove` `[client]`

Removes the projected texture. After calling this, ProjectedTexture:IsValid will return false, and any hooks with the projected texture as the identifier will be automatically deleted.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetAngles` `[client]`

Sets the angles (direction) of the projected texture.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `Angle angle` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetBrightness` `[client]`

Sets the brightness of the projected texture.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number brightness` — The brightness to give the projected texture. A float from 0 to 1, where 1 is 100% brightness. Can be higher.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetColor` `[client]`

Sets the color of the projected texture.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `Color color` — Unlike other projected textures, this color can only go up to 255.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetConstantAttenuation` `[client]`

Sets the constant attenuation of the projected texture.

See also ProjectedTexture:SetLinearAttenuation and ProjectedTexture:SetQuadraticAttenuation.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number constAtten` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetEnableShadows` `[client]`

Enable or disable shadows cast from the projected texture.

As with all types of projected textures (including the player's flashlight and env_projectedtexture), there can only be 8 projected textures with shadows enabled in total.This limit can be increased with the launch parameter `-numshadowtextures LIMIT` where `LIMIT` is the new limit.Naturally, many projected lights with shadows enabled will drastically decrease framerate.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `boolean newState` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetFOV` `[client]`

Sets the angle of projection.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number fov` — Must be higher than 0 and lower than 180

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetFarZ` `[client]`

Sets the distance at which the projected texture ends.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number farZ` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetHorizontalFOV` `[client]`

Sets the horizontal angle of projection without affecting the vertical angle.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number hFOV` — The new horizontal Field Of View for the projected texture. Must be in range between 0 and 180.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetLightWorld` `[client]`

Set whenever or not the Texture should light up world geometry.

**Argumentos:**

- `boolean lightworld` — Set it to `true` if the Texture should light up world geometry.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetLinearAttenuation` `[client]`

Sets the linear attenuation of the projected texture.

See also ProjectedTexture:SetConstantAttenuation and ProjectedTexture:SetQuadraticAttenuation.

The default value of linear attenuation when the projected texture is created is 100. (others are 0, as you are not supposed to mix them)

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number linearAtten` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetNearZ` `[client]`

Sets the distance at which the projected texture begins its projection.

You must call ProjectedTexture:Update after using this function for it to take effect.

Setting this to 0 will disable the projected texture completely! This may be useful if you want to disable a projected texture without actually removing it

This seems to affect the rendering of shadows - a higher Near Z value will have shadows begin to render closer to their casting object. Comparing a low Near Z value (like 1) with a normal one (12) or high one (1000) is the easiest way to understand this artifact

**Argumentos:**

- `number nearZ` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetNoCull` `[client]`

Allows disabling of projected texture view-frustum culling for cases where said culling creates unwanted side effects. Disabling culling will have a negative effect on performance.

Culling makes projected textures off screen to stop rendering/updating.

**Argumentos:**

- `boolean enable` — `false` to enable culling (default), `true` to disable.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetOrthographic` `[client]`

Changes the current projected texture between orthographic and perspective projection.

You must call ProjectedTexture:Update after using this function for it to take effect.

Shadows dont work. (For non static props and for most map brushes)

**Argumentos:**

- `boolean orthographic` — When false, all other arguments are ignored and the texture is reset to perspective projection.
- `number left` — The amount of units left from the projected texture's origin to project.
- `number top` — The amount of units upwards from the projected texture's origin to project.
- `number right` — The amount of units right from the projected texture's origin to project.
- `number bottom` — The amount of units downwards from the projected texture's origin to project.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetPos` `[client]`

Move the Projected Texture to the specified position.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `Vector position` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetQuadraticAttenuation` `[client]`

Sets the quadratic attenuation of the projected texture.

See also ProjectedTexture:SetLinearAttenuation and ProjectedTexture:SetConstantAttenuation.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number quadAtten` — 

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetShadowDepthBias` `[client]`

Sets the shadow depth bias of the projected texture.

The initial value is `0.0001`. Normal projected textures obey the value of the `mat_depthbias_shadowmap` ConVar.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number bias` — The shadow depth bias to set.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetShadowFilter` `[client]`

Sets the shadow "filter size" of the projected texture. `0` is fully pixelated, higher values will blur the shadow more. The initial value is the value of `r_projectedtexture_filter` ConVar.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number filter` — The shadow filter size to set.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetShadowSlopeScaleDepthBias` `[client]`

Sets the shadow depth slope scale bias of the projected texture.

The initial value is `2`. Normal projected textures obey the value of the `mat_slopescaledepthbias_shadowmap` ConVar.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number bias` — The shadow depth slope scale bias to set.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetSkipShadowUpdates` `[client]`

Sets whether shadow updates are disabled for this ProjectedTexture. This can be useful to save up on performance, but it will inevitably cause graphical glitches if left not updating for long.

**Argumentos:**

- `boolean enable` — Whether future shadow updates should be skipped.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetTargetEntity` `[client]`

Sets the target entity for this projected texture, meaning it will only be lighting the given entity and the world.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `Entity target` = `NULL` — The target entity, or `NULL` to reset.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetTexture` `[client]`

Sets the texture to be projected.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `string texture` — The name of the texture. Can also be an ITexture.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetTextureFrame` `[client]`

For animated textures, this will choose which frame in the animation will be projected.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number frame` — The frame index to use.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:SetVerticalFOV` `[client]`

Sets the vertical angle of projection without affecting the horizontal angle.

You must call ProjectedTexture:Update after using this function for it to take effect.

**Argumentos:**

- `number vFOV` — The new vertical Field Of View for the projected texture. Must be in range between 0 and 180.

**Retorna:**

*(sin retorno)*

---

### `ProjectedTexture:Update` `[client]`

Updates the Projected Light and applies all previously set parameters.

The best place to call this function is in GM:PreDrawOpaqueRenderables.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*