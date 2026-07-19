# render

---

The render library is a powerful set of functions that let you control how the world and its contents are rendered. It can also be used to draw some 3D clientside effects such as beams, boxes and spheres.

---


## Miembros (141)


---

### `render:AddBeam` `[client]`

Adds a Beam Segment to the Beam started by render.StartBeam.

For more detailed information on Beams, as well as usage examples, see the render_beams.

**Argumentos:**

- `Vector startPos` — Beam start position.
- `number width` — The width of the beam.
- `number textureEnd` — The end coordinate of the texture used.
- `Color color` — The color to be used.

**Retorna:**

*(sin retorno)*

---

### `render:BlurRenderTarget` `[client]`

Blurs the render target ( or a given texture ).

Calling this on a RenderTarget created with TEXTUREFLAGS_POINTSAMPLE will result in strange visual glitching.

**Argumentos:**

- `ITexture rendertarget` — The texture to blur.
- `number blurx` — Horizontal amount of blur.
- `number blury` — Vertical amount of blur.
- `number passes` — Amount of passes to go through.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:88`*

---

### `render:BrushMaterialOverride` `[client]`

This function overrides the brush material for next render operations. It can be used with Entity:DrawModel.

**Argumentos:**

- `IMaterial mat` = `nil` — 

**Retorna:**

*(sin retorno)*

---

### `render:Capture` `[client]`

Captures a part of the current render target and returns the data as a binary string in the given format.

Since the pixel buffer clears itself every frame, this will return a black screen outside of render hooks. To capture the user's final view, use GM:PostRender. This will not capture the Steam overlay or third-party injections (such as the Discord overlay, Overwolf, and advanced cheats) on the user's screen.

In PNG mode, this function can produce unexpected result where foreground is rendered as transparent.
This is caused by render.SetWriteDepthToDestAlpha set to `true` when doing most of render operations, including rendering in `_rt_fullframefb`. If you want to capture render target's content as PNG image only for output quality, set Structures/RenderCaptureData's `alpha` to `false` when capturing render targets with render.SetWriteDepthToDestAlpha set to `true`.

This function will return nil if escape menu is open

**Argumentos:**

- `table captureData` — Parameters of the capture. See Structures/RenderCaptureData.

**Retorna:**

- `string` — The binary data.

---

### `render:CapturePixels` `[client]`

Dumps the current render target and allows the pixels to be accessed by render.ReadPixel.

Capturing outside a render hook will return an image filled with `0 0 0 255`.

See also render.Capture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:Clear` `[client/menu]`

Clears the current render target and the specified buffers.

This sets the alpha incorrectly for surface draw calls for render targets.

**Argumentos:**

- `number r` — Red component to clear to.
- `number g` — Green component to clear to.
- `number b` — Blue component to clear to.
- `number a` — Alpha component to clear to.
- `boolean clearDepth` = `false` — Clear the depth.
- `boolean clearStencil` = `false` — Clear the stencil.

**Retorna:**

*(sin retorno)*

---

### `render:ClearBuffersObeyStencil` `[client/menu]`

Tests every pixel of the active render_rendertargets against the current Stencil configuration and sets the Color Channel values and, optionally, the Depth Buffer values for every pixel that passes.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page

This function does **not** clear the Stencil Buffer on its own.
If you would like to clear the Stencil Buffer, you can use render.ClearStencil

**Argumentos:**

- `number red` — The red Color Channel value for each pixel that is cleared.
Must be an integer value in the range 0-255 (`byte`).
- `number green` — The green Color Channel value for each pixel that is cleared.
Must be an integer value in the range 0-255 (`byte`).
- `number blue` — The blue Color Channel value for each pixel that is cleared.
Must be an integer value in the range 0-255 (`byte`).
- `number alpha` — The alpha (translucency) Color Channel value for each pixel that is cleared.
Must be an integer value in the range 0-255 (`byte`).
- `boolean clearDepth` — If true, reset the Depth Buffer values.

**Retorna:**

*(sin retorno)*

---

### `render:ClearDepth` `[client/menu]`

Resets the depth buffer.

**Argumentos:**

- `boolean clearStencil` = `true` — Whether to also clear the stencil buffer.

**Retorna:**

*(sin retorno)*

---

### `render:ClearRenderTarget` `[client]`

Clears a render target.

It uses render.Clear then render.SetRenderTarget on the modified render target.

**Argumentos:**

- `ITexture texture` — 
- `color color` — The color.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:27`*

---

### `render:ClearStencil` `[client/menu]`

Sets the Stencil Buffer value to `0` for all pixels in the currently active render_rendertargets.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:ClearStencilBufferRectangle` `[client/menu]`

Sets the Stencil Buffer value for every pixel in a given rectangle to a given value.

This is **not** affected by render.SetStencilWriteMask.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number startX` — The X coordinate of the top left corner of the rectangle to be cleared.
- `number startY` — The Y coordinate of the top left corner of the rectangle to be cleared.
- `number endX` — The X coordinate of the bottom right corner of the rectangle to be cleared.
**Note:** Unlike some other rectangle-based functions, this is **not** the width of the rectangle.
- `number endY` — The Y coordinate of the bottom right corner of the rectangle to be cleared.
**Note:** Unlike some other rectangle-based functions, this is **not** the height of the rectangle.
- `number stencilBufferValue` — The Stencil Buffer value that all pixels within the rectangle will be set to.

**Retorna:**

*(sin retorno)*

---

### `render:ComputeDynamicLighting` `[client]`

Calculates the lighting caused by dynamic lights (such as Global.DynamicLight and the Light Sandbox tool) for the specified surface. This will not include map ambient light.

See also render.ComputeLighting for a function that also includes map's ambient lighting.

**Argumentos:**

- `Vector position` — The position to sample from.
- `Vector normal` — The normal of the surface.

**Retorna:**

- `Vector` — A vector representing the light at that point.

---

### `render:ComputeLighting` `[client]`

Calculates the light color at a certain position.

This includes both ambient light and dynamic light.

See render.ComputeDynamicLighting for dynamic light only.

See render.GetAmbientLightColor for map-wide ambient color.

**Argumentos:**

- `Vector position` — The position to get the light at.
- `Vector normal` — The direction of an imaginary surface to get the light at.

Pointing away from walls will get the lighting the wall receives. Pointing towards walls will not.

**Retorna:**

- `Vector` — A vector representing the light at that point.

---

### `render:ComputePixelDiameterOfSphere` `[client]`

Calculates diameter of a 3D sphere on a 2D screen.

**Argumentos:**

- `Vector point` — The position of the sphere in 3D space.
- `number radius` — The radius of the sphere in 3D space.

**Retorna:**

- `number` — The diameter of the sphere in 2D screen space.

---

### `render:CopyRenderTargetToTexture` `[client]`

Copies the currently active Render Target to the specified texture.
This does not copy the Depth buffer, no method for that is known at this moment so a common workaround is to store the source texture somewhere else, perform your drawing operations, save the result somewhere else and reapply the source texture.

**Argumentos:**

- `ITexture Target` — The texture to copy to.

**Retorna:**

*(sin retorno)*

---

### `render:CopyTexture` `[client]`

Copies the contents of one texture to another. Only works with rendertargets.
This does not copy the Depth buffer, no method for that is known at this moment so a common workaround is to store the source texture somewhere else, perform your drawing operations, save the result somewhere else and reapply the source texture.

**Argumentos:**

- `ITexture texture_from` — The texture to copy from.
- `ITexture texture_to` — The texture being copied to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:61`*

---

### `render:CullMode` `[client/menu]`

Sets the cull mode. The culling mode defines how back faces are culled when rendering geometry.

**Argumentos:**

- `number cullMode` — Cullmode, see Enums/MATERIAL_CULLMODE.

**Retorna:**

*(sin retorno)*

---

### `render:DepthRange` `[client]`

Set's the depth range of the upcoming render.

**Argumentos:**

- `number depthmin` — The minimum depth of the upcoming render. `0.0` = render normally; `1.0` = render nothing.
- `number depthmax` — The maximum depth of the upcoming render. `0.0` = render everything (through walls); `1.0` = render normally.

**Retorna:**

*(sin retorno)*

---

### `render:DrawBeam` `[client]`

Draws a single-segment Beam made out of a textured, billboarded quad stretching between two points.

For more detailed information, including usage examples, see the render_beams.

**Argumentos:**

- `Vector startPos` — The Beam's start position.
- `Vector endPos` — The Beam's end position.
- `number width` — The width of the Beam.
- `number textureStart` — The starting coordinate of the Beam's texture.
- `number textureEnd` — The end coordinate of the Beam's texture.
- `Color color` = `Color( 255, 255, 255 )` — What Color to tint the Beam.

**Retorna:**

*(sin retorno)*

---

### `render:DrawBox` `[client]`

Draws a box in 3D space.

**Argumentos:**

- `Vector position` — Origin of the box.
- `Angle angles` — Orientation of the box.
- `Vector mins` — Start position of the box, relative to origin.
- `Vector maxs` — End position of the box, relative to origin.
- `Color color` = `Color( 255, 255, 255 )` — The color of the box.

**Retorna:**

*(sin retorno)*

---

### `render:DrawLine` `[client]`

Draws a line in 3D space.

**Argumentos:**

- `Vector startPos` — Line start position in world coordinates.
- `Vector endPos` — Line end position in world coordinates.
- `Color color` = `Color( 255, 255, 255 )` — The color to be used. Uses Color.
- `boolean writeZ` = `false` — Whether or not to consider the Z buffer. If false, the line will be drawn over everything currently drawn, if true, the line will be drawn with depth considered, as if it were a regular object in 3D space.

Enabling this option will cause the line to ignore the color's alpha.

**Retorna:**

*(sin retorno)*

---

### `render:DrawQuad` `[client]`

Draws 2 connected triangles. Expects material to be set by render.SetMaterial.

**Argumentos:**

- `Vector vert1` — First vertex.
- `Vector vert2` — The second vertex.
- `Vector vert3` — The third vertex.
- `Vector vert4` — The fourth vertex.
- `Color color` = `Color( 255, 255, 255 )` — The color of the quad.

**Retorna:**

*(sin retorno)*

---

### `render:DrawQuadEasy` `[client]`

Draws a quad. Expects material to be set by render.SetMaterial.

**Argumentos:**

- `Vector position` — Origin of the sprite.
- `Vector normal` — The face direction of the quad.
- `number width` — The width of the quad.
- `number height` — The height of the quad.
- `Color color` — The color of the quad.
- `number rotation` = `0` — The rotation of the quad counter-clockwise in degrees around the normal axis. In other words, the quad will always face the same way but this will rotate its corners.

**Retorna:**

*(sin retorno)*

---

### `render:DrawScreenQuad` `[client]`

Draws the current material set by render.SetMaterial to the whole screen. The color cannot be customized.

See also render.DrawScreenQuadEx.

**Argumentos:**

- `boolean applyPoster` = `false` — If set to true, when rendering a poster the quad will be properly drawn in parts in the poster. This is used internally by some Post Processing effects. Certain special textures (frame buffer like textures) do not need this adjustment.

**Retorna:**

*(sin retorno)*

---

### `render:DrawScreenQuadEx` `[client]`

Draws the current material set by render.SetMaterial to the area specified. Color cannot be customized.

See also render.DrawScreenQuad.

**Argumentos:**

- `number startX` — X start position of the rect.
- `number startY` — Y start position of the rect.
- `number width` — Width of the rect.
- `number height` — Height of the rect.

**Retorna:**

*(sin retorno)*

---

### `render:DrawSphere` `[client]`

Draws a sphere in 3D space. The material previously set with render.SetMaterial will be applied the sphere's surface.

See also render.DrawWireframeSphere for a wireframe equivalent.

**Argumentos:**

- `Vector position` — Position of the sphere.
- `number radius` — Radius of the sphere. Negative radius will make the sphere render inwards rather than outwards.
- `number longitudeSteps` — The number of longitude steps. This controls the quality of the sphere. Higher quality will lower performance significantly. 50 is a good number to start with.
- `number latitudeSteps` — The number of latitude steps. This controls the quality of the sphere. Higher quality will lower performance significantly. 50 is a good number to start with.
- `Color color` = `Color( 255, 255, 255 )` — The color of the sphere.

**Retorna:**

*(sin retorno)*

---

### `render:DrawSprite` `[client]`

Draws a sprite in 3D space.

**Argumentos:**

- `Vector position` — Position of the sprite.
- `number width` — Width of the sprite.
- `number height` — Height of the sprite.
- `Color color` = `Color( 255, 255, 255 )` — Color of the sprite.

**Retorna:**

*(sin retorno)*

---

### `render:DrawTextureToScreen` `[client]`

Draws a texture over the whole screen.

**Argumentos:**

- `ITexture tex` — The texture to draw.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:148`*

---

### `render:DrawTextureToScreenRect` `[client]`

Draws a textured rectangle.

**Argumentos:**

- `ITexture tex` — The texture to draw.
- `number x` — The x coordinate of the rectangle to draw.
- `number y` — The y coordinate of the rectangle to draw.
- `number width` — The width of the rectangle to draw.
- `number height` — The height of the rectangle to draw.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:158`*

---

### `render:DrawWireframeBox` `[client]`

Draws a wireframe box in 3D space.

**Argumentos:**

- `Vector position` — Position of the box.
- `Angle angle` — Angles of the box.
- `Vector mins` — The lowest corner of the box.
- `Vector maxs` — The highest corner of the box.
- `Color color` = `Color( 255, 255, 255 )` — The color of the box.
- `boolean writeZ` = `false` — Sets whenever to write to the zBuffer.

**Retorna:**

*(sin retorno)*

---

### `render:DrawWireframeSphere` `[client]`

Draws a wireframe sphere in 3d space.

**Argumentos:**

- `Vector position` — Position of the sphere.
- `number radius` — The size of the sphere.
- `number longitudeSteps` — The amount of longitude steps.
The larger this number is, the smoother the sphere is.
- `number latitudeSteps` — The amount of latitude steps.
The larger this number is, the smoother the sphere is.
- `Color color` = `Color( 255, 255, 255 )` — The color of the wireframe.
- `boolean writeZ` = `false` — Whether or not to consider the Z buffer. If false, the wireframe will be drawn over everything currently drawn. If true, it will be drawn with depth considered, as if it were a regular object in 3D space.

**Retorna:**

*(sin retorno)*

---

### `render:EnableClipping` `[client/menu]`

Sets the status of the clip renderer, returning previous state.

To prevent unintended rendering behavior of other mods/the game, you must reset the clipping state to its previous value.

**Argumentos:**

- `boolean state` — New clipping state.

**Retorna:**

- `boolean` — Previous clipping state.

---

### `render:EndBeam` `[client]`

Ends the beam mesh of a beam started with render.StartBeam.

For more detailed information on Beams, as well as usage examples, see the render_beams.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:FogColor` `[client]`

Sets the color of the fog.

**Argumentos:**

- `number red` — Red channel of the fog color, 0 - 255.
- `number green` — Green channel of the fog color, 0 - 255.
- `number blue` — Blue channel of the fog color, 0 - 255.

**Retorna:**

*(sin retorno)*

---

### `render:FogEnd` `[client]`

Sets the at which the fog reaches its max density.

**Argumentos:**

- `number distance` — The distance at which the fog reaches its max density.

If used in GM:SetupSkyboxFog, this value **must** be scaled by the first argument of the hook

**Retorna:**

*(sin retorno)*

---

### `render:FogMaxDensity` `[client]`

Sets the maximum density of the fog.

**Argumentos:**

- `number maxDensity` — The maximum density of the fog, 0-1.

**Retorna:**

*(sin retorno)*

---

### `render:FogMode` `[client]`

Sets the mode of fog.

**Argumentos:**

- `number{MATERIAL_FOG} fogMode` — Fog mode, see Enums/MATERIAL_FOG.

**Retorna:**

*(sin retorno)*

---

### `render:FogStart` `[client]`

Sets the distance at which the fog starts showing up.

**Argumentos:**

- `number fogStart` — The distance at which the fog starts showing up.
If used in GM:SetupSkyboxFog, this value **must** be scaled by the first argument of the hook

**Retorna:**

*(sin retorno)*

---

### `render:GetAmbientLightColor` `[client]`

Returns the ambient color intensity of the map, basically the color the sky emits.

This is used by the engine to calculate shadow color using the following formula: `ambientLight * 3 + Vector( 0.3, 0.3, 0.3 )`

See also render.ComputeLighting.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The ambient color intensity of the map.

This is computed at map compile time and is stored in "linear color space".

---

### `render:GetBlend` `[client]`

Returns the current alpha blending.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Current alpha blending in range 0 to 1.

---

### `render:GetBloomTex0` `[client]`

You can use Global.GetRenderTargetEx if you need to create a Render Target
Returns the Render Target texture that is used internally for the Global.DrawBloom Post-Processing_Materials effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target texture named `s_pBloomTex0`.

---

### `render:GetBloomTex1` `[client]`

You probably want to just use a custom render target. See Global.GetRenderTargetEx.

Returns the Render Target texture used internally for the render.BlurRenderTarget Post-Processing_Materials effect.

Despite its name, this function is not used for the Global.DrawBloom effect.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target texture named `s_pBloomTex1`.

---

### `render:GetColorModulation` `[client]`

Returns the current color modulation values as normals.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Red part of the color.
- `number` — Green part of the color.
- `number` — Blue part of the color.

---

### `render:GetDXLevel` `[client/menu]`

Returns the maximum available directX version.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The directX version.

---

### `render:GetFogColor` `[client]`

Returns the current fog color.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Red part of the color.
- `number` — Green part of the color
- `number` — Blue part of the color

---

### `render:GetFogDistances` `[client]`

Returns the fog start and end distance.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Fog start distance set by render.FogStart.
- `number` — For end distance set by render.FogEnd.
- `number` — Fog Z distance set by render.SetFogZ.

---

### `render:GetFogMaxDensity` `[client]`

Get the maximum density of the fog.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number maxDensity` — The maximum density of the fog, 0-1.

---

### `render:GetFogMode` `[client]`

Returns the current fog mode.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Fog mode, see Enums/MATERIAL_FOG.

In 2D post-processing hooks, starting with GM:PreDrawEffects, this will always return Enums/MATERIAL_FOG#MATERIAL_FOG_NONE

---

### `render:GetFullScreenDepthTexture` `[client]`

Alias of render.GetPowerOfTwoTexture in practice.

Returns the full screen depth texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The `_rt_FullFrameDepth` texture, which is an alias of `_rt_PowerOfTwoFB` on PC.

---

### `render:GetHDREnabled` `[client/menu]`

Returns whether HDR is currently enabled or not. This takes into account hardware support, current map and current client settings.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the player currently has HDR enabled.

---

### `render:GetLightColor` `[client]`

Same as render.ComputeLighting without the `normal` argument provided, so just use that

Gets the light exposure on the specified position.

This is effectively the same as render.ComputeLighting without the `normal` argument provided.

**Argumentos:**

- `Vector position` — The position of the surface to get the light from.

**Retorna:**

- `Vector` — The light color.

---

### `render:GetMoBlurTex0` `[client]`

You probably want to just use a custom render target. See Global.GetRenderTargetEx.

Returns the first render target texture that is used internally for Motion Blur and Frame Blend post processing effects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target named `s_pMoBlurTex0`.

---

### `render:GetMoBlurTex1` `[client]`

You probably want to just use a custom render target. See Global.GetRenderTargetEx.

Returns the second render target texture that is used internally for Motion Blur and Frame Blend post processing effects.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target named `s_pMoBlurTex1`.

---

### `render:GetMorphTex0` `[client]`

You probably want to just use a custom render target. See Global.GetRenderTargetEx.

Returns the first render target texture that was used internally for Morph post processing effect

The post processing effect was removed from the base game at some point during development of Garry's Mod 13, but can still be found as a community mod: https://steamcommunity.com/sharedfiles/filedetails/?id=501088470

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target texture named `s_pMorphTexture0`.

---

### `render:GetMorphTex1` `[client]`

You probably want to just use a custom render target. See Global.GetRenderTargetEx.

Returns the second render target texture that was used internally for Morph post processing effect.

See render.GetMorphTex0 for more information..

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target texture named `s_pMorphTexture1`.

---

### `render:GetPowerOfTwoTexture` `[client]`

Returns the Power Of Two Frame Buffer texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The power of two texture, which is `_rt_PowerOfTwoFB` by default.

---

### `render:GetRefractTexture` `[client]`

Alias of render.GetPowerOfTwoTexture.

Alias of render.GetPowerOfTwoTexture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render.GetPowerOfTwoTexture.

---

### `render:GetRenderTarget` `[client]`

Returns the currently active render target.

Instead of saving the current render target using this function and restoring to it later, it is generally better practice to use render.PushRenderTarget and render.PopRenderTarget.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The currently active Render Target.

---

### `render:GetResolvedFullFrameDepth` `[client]`

Returns the `_rt_ResolvedFullFrameDepth` texture for SSAO depth. It will only be updated if GM:NeedsDepthPass returns true. Depth is written using the Shaders/DepthWrite by rendering scene a second time, using [SSAO_DepthPass function](https://github.com/ValveSoftware/source-sdk-2013/blob/11a677c349b149b2f77184dc903e6bb17f8df69b/src/game/client/viewrender.cpp#L5576).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The depth texture.

---

### `render:GetScreenEffectTexture` `[client]`

Obtain an ITexture of the screen. You must call render.UpdateScreenEffectTexture in order to update this texture with the currently rendered scene.

This texture is mainly used within GM:RenderScreenspaceEffects.

**Argumentos:**

- `number textureIndex` = `0` — Max index is 3, but engine only creates the first two for you.

**Retorna:**

- `ITexture` — The requested texture.

---

### `render:GetSmallTex0` `[client]`

Returns the first quarter sized frame buffer texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target texture named `_rt_SmallFB0`.

---

### `render:GetSmallTex1` `[client]`

Returns the second quarter sized frame buffer texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render target texture named `_rt_SmallFB1`.

---

### `render:GetSuperFPTex` `[client]`

Returns a floating point texture (RGBA16161616F format) the same resolution as the screen.

The Shaders/gmodscreenspace doesn't behave as expected when drawing a floating-point texture to an integer texture (e.g. the default render target). Use an UnlitGeneric material instead

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — Render target named `__rt_SuperTexture1`.

---

### `render:GetSuperFPTex2` `[client]`

See render.GetSuperFPTex.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — Render target named `__rt_SuperTexture2`.

---

### `render:GetSurfaceColor` `[client]`

Performs a render trace and returns the color of the surface hit, this uses a low res version of the texture.

**Argumentos:**

- `Vector startPos` — The start position to trace from.
- `Vector endPos` — The end position of the trace.

**Retorna:**

- `Vector` — The surface color.

---

### `render:GetToneMappingScaleLinear` `[client]`

Returns a vector representing linear tone mapping scale. See render.SetToneMappingScaleLinear for details.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector scales` — The tonemapping scales.
* X - Output scale.
* Y - Lightmap scale.
* Z - Reflection map scale.

---

### `render:GetViewSetup` `[client]`

Returns the current view setup.

**Argumentos:**

- `boolean noPlayer` = `false` — If `true`, returns the `view-&gt;GetViewSetup`, if `false` - returns `view-&gt;GetPlayerViewSetup`.

**Retorna:**

- `table` — Current current view setup. See Structures/ViewSetup.

---

### `render:IsTakingScreenshot` `[client]`

Lets you know when a screenshot is being taken during rendering hooks.

This is useful to hide certain visual elements from screenshots, such as debug overlays, helper objects, etc.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Returns `true` when a screenshot is being taken.

---

### `render:MaterialOverride` `[client]`

Sets the render material override for all next calls of Entity:DrawModel. Also overrides render.MaterialOverrideByIndex.

See render.WorldMaterialOverride, render.BrushMaterialOverride and render.ModelMaterialOverride for similar functions.

In certain scenarios such as during entity's shadow pass, using this function can cause unexpected side effects. See example below on how to deal with this.

**Argumentos:**

- `IMaterial|nil material` = `nil` — The material to use as override, use `nil` to disable.

**Retorna:**

*(sin retorno)*

---

### `render:MaterialOverrideByIndex` `[client]`

Similar to render.MaterialOverride, but overrides the materials per index. For simple entities you may want to just use Entity:SetSubMaterial.

render.MaterialOverride overrides effects of this function.

**Argumentos:**

- `number index` = `nil` — The index of the material to override, in range of 0 to 31. `nil` will reset all overrides.
- `IMaterial material` = `nil` — The material to override with, `nil` will reset the override for given index.

**Retorna:**

*(sin retorno)*

---

### `render:MaxTextureHeight` `[client/menu]`

Returns the maximum texture height the renderer can handle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The max height.

---

### `render:MaxTextureWidth` `[client/menu]`

Returns the maximum texture width the renderer can handle.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The max width.

---

### `render:Model` `[client]`

Creates a new Global.ClientsideModel, renders it at the specified pos/ang, and removes it. Can also be given an existing CSEnt to reuse instead.

This function is only meant to be used in a single render pass kind of scenario, if you need to render a model continuously, use a cached Global.ClientsideModel and provide it as a second argument.

Using this with a map model (game.GetWorld():Entity:GetModel()) crashes the game.

**Argumentos:**

- `table settings` — Requires:
* string model - The model to draw.
* Vector pos - The position to draw the model at.
* Angle angle - The angles to draw the model at.
- `CSEnt ent` = `nil` — If provided, this entity will be reused instead of creating a new one with Global.ClientsideModel. Note that the ent's model, position and angles will be changed, and Entity:SetNoDraw will be set to true.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:175`*

---

### `render:ModelMaterialOverride` `[client]`

Forces all future draw operations to use a specific IMaterial.

Because this is independent of a specific Entity, it can be used to change materials on static models that are part of maps.

In certain scenarios such as during entity's shadow pass, using this function can cause unexpected side effects. See example on render.MaterialOverride about dealing with this.

**Argumentos:**

- `IMaterial material` = `nil` — The IMaterial that will be used for all upcoming draw operations, or `nil` to stop overriding.

**Retorna:**

*(sin retorno)*

---

### `render:OverrideAlphaWriteEnable` `[client/menu]`

Overrides the write behaviour of all next rendering operations towards the alpha channel of the current render target.

See also render.OverrideBlend.

Doing surface draw calls with alpha set to 0 is a no-op and will never have any effect.

**Argumentos:**

- `boolean enable` — Enable or disable the override.
- `boolean shouldWrite` = `nil` — If the previous argument is true, sets whether the next rendering operations should write to the alpha channel or not. Has no effect if the previous argument is false.

**Retorna:**

*(sin retorno)*

---

### `render:OverrideBlend` `[client/menu]`

Overrides the way that the final color and alpha is calculated for each pixel affected by upcoming draw operations.

When a draw operation is performed, the rendering system examines each pixel that is affected by the draw operation and determines its new color by combining (or "Blending") the pixel's current color (Called the "Destination" or "Dst" color) with the new color produced by the draw operation (Called the "Source" or "Src" color.)

This function allows you to control the way that those two colors (The Source and Destination) are combined to produce the final pixel color.

It's important to know that while Global.Color use values in the range `(0-255)`, the color and alpha values used here are normalized to the range `(0-1)` so that they can be multiplied together to produce a value that is still in the range `(0-1)`.

**Argumentos:**

- `boolean enabled` — Set to `true` to enable Blend Overrides.
- `number{BLEND} sourceMultiplier` — This determines which value each affected pixel's **Source color and alpha** will be multiplied by before they are sent to the Blending Function.
One of the Enums/BLEND enums.
- `number{BLEND} destinationMultiplier` — This determines which value each affected pixel's **Destination color and alpha** will be multiplied by before they are sent to the Blending Function.
One of the Enums/BLEND enums.
- `number{BLENDFUNC} blendingFunction` — After the Source and Destination color and alpha have been multiplied against their corresponding multipliers, they are passed to the Blending Function which combines them into the final color and alpha for the pixel.
One of the Enums/BLENDFUNC enums.

**Retorna:**

*(sin retorno)*

**Sobrecargas:**

- Variante 1: - `boolean enabled` — Set to `true` to enable Blend Overrides.
- `number{BLEND} sourceColorMultiplier` — This determines which value each affected pixel's **Source color** will be multiplied by before they are sent to the Color Blending Function.
One of the Enums/BLEND enums.
- `number{BLEND} destinationColorMultiplier` — This determines which value each affected pixel's **Destination color** will be multiplied by before they are sent to the Color Blending Function.
One of the Enums/BLEND enums.
- `number{BLENDFUNC} colorBlendingFunction` — After the Source and Destination colors have been multiplied against their corresponding multipliers, they are passed to the Color Blending Function which combines them into the final color and alpha for the pixel.
One of the Enums/BLENDFUNC enums.
- `number{BLEND} sourceAlphaMultiplier` = `none` — This determines which value each affected pixel's **Source alpha** will be multiplied by before they are sent to the Alpha Blending Function.
One of the Enums/BLEND enums.
- `number{BLEND} destinationAlphaMultiplier` = `none` — This determines which value each affected pixel's **Destination alpha** will be multiplied by before they are sent to the Alpha Blending Function.
One of the Enums/BLEND enums.
- `number{BLENDFUNC} alphaBlendingFunction` = `none` — After the Source and Destination alphas have been multiplied against their corresponding multipliers, they are passed to the Alpha Blending Function which combines them into the final alpha for the pixel.

- Variante 2: - `boolean enabled` — Set to `false` to disable blend overrides.

---

### `render:OverrideBlendFunc` `[client/menu]`

Use render.OverrideBlend instead.

Overrides the internal graphical functions used to determine the final color and alpha of a rendered texture.

See also render.OverrideAlphaWriteEnable.

Doing surface draw calls with alpha set to 0 is a no-op and will never have any effect.

**Argumentos:**

- `boolean enabled` — true to enable, false to disable. No other arguments are required when disabling.
- `number srcBlend` — The source color blend function Enums/BLEND. Determines how a rendered texture's final color should be calculated.
- `number destBlend` — 
- `number srcBlendAlpha` = `nil` — The source alpha blend function Enums/BLEND. Determines how a rendered texture's final alpha should be calculated.
- `number destBlendAlpha` = `nil` — 

**Retorna:**

*(sin retorno)*

---

### `render:OverrideColorWriteEnable` `[client/menu]`

Overrides the write behaviour of all next rendering operations towards the color channel of the current render target.

**Argumentos:**

- `boolean enable` — Enable or disable the override.
- `boolean shouldWrite` — If the previous argument is true, sets whether the next rendering operations should write to the color channel or not. Anything drawn after will still write to depth if enabled and shouldWrite is false.

**Retorna:**

*(sin retorno)*

---

### `render:OverrideDepthEnable` `[client/menu]`

Overrides the write behaviour of all next rendering operations towards the depth buffer.

**Argumentos:**

- `boolean enable` — Enable or disable the override.
- `boolean shouldWrite` — If the previous argument is true, sets whether the next rendering operations should write to the depth buffer or not. Has no effect if the previous argument is false.

**Retorna:**

*(sin retorno)*

---

### `render:PerformFullScreenStencilOperation` `[client/menu]`

Performs a Stencil operation on every pixel in the active render_rendertargets without performing a draw operation.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:PopCustomClipPlane` `[client/menu]`

Removes the current active clipping plane from the clip plane stack.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:PopFilterMag` `[client/menu]`

Pops (Removes) the texture filter most recently pushed (Added) onto the magnification texture filter stack.

This function should only be called *after* a magnification filter has been pushed via render.PushFilterMag.

For more detailed information and a usage example, see render_min_mag_filters

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:PopFilterMin` `[client/menu]`

Pops (Removes) the texture filter most recently pushed (Added) onto the minification texture filter stack.

This function should only be called *after* a minification filter has been pushed via render.PushFilterMin.

For more detailed information and a usage example, see render_min_mag_filters

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:PopFlashlightMode` `[client]`

Pops the current flashlight mode from the flashlight mode stack.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:PopRenderTarget` `[client]`

Pops the last render target and viewport from the RT stack and sets them as the current render target and viewport.

This is should be called to restore the previous render target and viewport after a call to render.PushRenderTarget.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:PushCustomClipPlane` `[client/menu]`

Pushes a new clipping plane of the clip plane stack and sets it as active.

A max of 2 clip planes are supported on Linux/POSIX, and 6 on Windows.

**Argumentos:**

- `Vector normal` — The normal of the clipping plane.
- `number distance` — The distance of the plane from the world origin. You can use Vector:Dot between the normal and any point on the plane to find this.

**Retorna:**

*(sin retorno)*

---

### `render:PushFilterMag` `[client/menu]`

Pushes (Adds) a texture filter onto the magnification texture filter stack.
This will modify how textures are stretched to sizes larger than their native resolution for upcoming rendering and drawing operations.
For a version of this same function that modifies filtering for texture sizes smaller than their native resolution, see render.PushFilterMin

Always be sure to call render.PopFilterMag afterwards to avoid texture filtering problems.

For more detailed information and a usage example, see render_min_mag_filters

If current texture has more than 1 mipmap, this also sets the mipmap filter.

**Argumentos:**

- `number texFilterType` — The texture filter to use. For available options, see Enums/TEXFILTER.

**Retorna:**

*(sin retorno)*

---

### `render:PushFilterMin` `[client/menu]`

Pushes (Adds) a texture filter onto the minification texture filter stack.
This will modify how textures are compressed to a lower resolution than their native resolution for upcoming rendering and drawing operations.
For a version of this same function that modifies filtering for texture sizes larger than their native resolution, see render.PushFilterMag

Always be sure to call render.PopFilterMin afterwards to avoid texture filtering problems.

For more detailed information and a usage example, see render_min_mag_filters

**Argumentos:**

- `number texFilterType` — The texture filter to use. For available options, see Enums/TEXFILTER.

**Retorna:**

*(sin retorno)*

---

### `render:PushFlashlightMode` `[client]`

Enables the flashlight projection for the upcoming rendering.

This will leave models lit under specific conditions. You should use render.RenderFlashlights which is meant as a direct replacement for this function.

**Argumentos:**

- `boolean enable` = `false` — Whether the flashlight mode should be enabled or disabled.

**Retorna:**

*(sin retorno)*

---

### `render:PushRenderTarget` `[client]`

Pushes the current render target and viewport to the RT stack then sets a new current render target and viewport. If the viewport is not specified, the dimensions of the render target are used instead.

This is similar to a call to render.SetRenderTarget and render.SetViewPort where the current render target and viewport have been saved beforehand, except the viewport isn't clipped to screen bounds.

See also render.PopRenderTarget.

If you want to render to the render target in 2d mode and it is not the same size as the screen, use cam.Start2D and cam.End2D.
If the render target is bigger than the screen, rendering done with the surface library will be clipped to the screen bounds unless you call Global.DisableClipping

**Argumentos:**

- `ITexture texture` = `nil` — The new render target to be used.
Can be set to `nil` to push the main game frame buffer.
- `number x` = `0` — X origin of the viewport.
- `number y` = `0` — Y origin of the viewport.
- `number w` = `texture:Width()` — Width of the viewport.
- `number h` = `texture:Height()` — Height of the viewport.

**Retorna:**

*(sin retorno)*

---

### `render:ReadPixel` `[client]`

Reads the color of the specified pixel from the RenderTarget sent by render.CapturePixels

**Argumentos:**

- `number x` — The x coordinate.
- `number y` — The y coordinate.

**Retorna:**

- `number r` — The red channel value.
- `number g` — The green channel value.
- `number b` — The blue channel value.
- `number a` — The alpha channel value or no value if the render target has no alpha channel.

---

### `render:RedownloadAllLightmaps` `[client]`

This applies the changes made to map lighting using engine.LightStyle.

**Argumentos:**

- `boolean DoStaticProps` = `false` — When true, this will also apply lighting changes to static props. This is really slow on large maps.
- `boolean UpdateStaticLighting` = `false` — Forces all props to update their static lighting. Can be slow.

**Retorna:**

*(sin retorno)*

---

### `render:RenderFlashlights` `[client]`

Renders additive flashlights on an IMesh, a direct replacement for render.PushFlashlightMode.

**Argumentos:**

- `function renderFunc` — The function that renders the IMesh, or a model.

**Retorna:**

*(sin retorno)*

---

### `render:RenderHUD` `[client]`

Renders the HUD on the screen.

**Argumentos:**

- `number x` — X position for the HUD draw origin.
- `number y` — Y position for the HUD draw origin.
- `number w` — Width of the HUD draw.
- `number h` — Height of the HUD draw.

**Retorna:**

*(sin retorno)*

---

### `render:RenderView` `[client]`

Renders the scene with the specified viewData to the current active render target.

Static props and LODs are rendered improperly due to incorrectly perceived distance.
Using render.RenderView on a RenderTarget texture in a 3d context like SWEP:PostDrawViewModel() while drawing the RenderTarget texture causes screen flickers.

**Argumentos:**

- `table view` = `nil` — The view data to be used in the rendering. See Structures/ViewData. Any missing value is assumed to be that of the current view. Similarly, you can make a normal render by simply not passing this table at all.

**Retorna:**

*(sin retorno)*

---

### `render:ResetModelLighting` `[client]`

Resets the model lighting to the specified color.

Calls render.SetModelLighting for every direction with given color.

**Argumentos:**

- `number r` — The red part of the color, 0-1.
- `number g` — The green part of the color, 0-1.
- `number b` — The blue part of the color, 0-1.

**Retorna:**

*(sin retorno)*

---

### `render:ResetToneMappingScale` `[client]`

Resets the HDR tone multiplier to the specified value.

This will only work on HDR maps, and the value will automatically fade to what it was ( or whatever render.SetGoalToneMappingScale is ) if called only once.

**Argumentos:**

- `number scale` — The value which should be used as multiplier.

**Retorna:**

*(sin retorno)*

---

### `render:SetAmbientLight` `[client]`

Sets the ambient lighting for any upcoming render operation.

**Argumentos:**

- `number r` — The red part of the color, 0-1.
- `number g` — The green part of the color, 0-1.
- `number b` — The blue part of the color, 0-1.

**Retorna:**

*(sin retorno)*

---

### `render:SetBlend` `[client]`

Sets the alpha blending (or transparency) for upcoming render operations.

See render.SetColorModulation for the function to affect RGB color channels.

By itself, this will cause visible overlapping on parts of a model that are in front of other parts of the same model.
For a solution to this, see the examples below.

This does not affect non-model `render.Draw*` functions.
If a material has the [$alphatest](https://developer.valvesoftware.com/wiki/$alphatest) flag enabled then this function might not behave as expected because alpha will be binary, this has a default cutoff of `0.7`.

**Argumentos:**

- `number blending` — The alpha (transparency) for upcoming draw operations.
A value in the range `(0-1)` where `0` is fully transparent, `0.5` is 50% visible, and `1` is fully opaque.

**Retorna:**

*(sin retorno)*

---

### `render:SetColorMaterial` `[client]`

Sets the current drawing material to "color".

The material is defined as:
```

"UnlitGeneric"
{
"$basetexture" "color/white"
"$model" 		1
"$translucent" 	1
"$vertexalpha" 	1
"$vertexcolor" 	1
}
```

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:74`*

---

### `render:SetColorMaterialIgnoreZ` `[client]`

Sets the current drawing material to `color_ignorez`.

The material is defined as:
```

"UnlitGeneric"
{
"$basetexture" "color/white"
"$model" 		1
"$translucent" 	1
"$vertexalpha" 	1
"$vertexcolor" 	1
"$ignorez"		1
}
```

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/extensions/client/render.lua:80`*

---

### `render:SetColorModulation` `[client]`

Sets the color modulation for upcoming render operations, such as rendering models.

The values can exceed 1 for stronger effect.

See render.SetBlend for the function to affect alpha channel.

**Argumentos:**

- `number r` — The red channel multiplier normal ranging from 0-1.
- `number g` — The green channel multiplier normal ranging from 0-1.
- `number b` — The blue channel multiplier normal ranging from 0-1.

**Retorna:**

*(sin retorno)*

---

### `render:SetFogZ` `[client]`

If the render.FogMode is set to Enums/MATERIAL_FOG, the fog will only be rendered below the specified height.

**Argumentos:**

- `number fogZ` — The fog Z.

**Retorna:**

*(sin retorno)*

---

### `render:SetGoalToneMappingScale` `[client]`

Sets the goal HDR tone mapping scale.

Use this in a rendering/think hook as it is reset every frame.

**Argumentos:**

- `number scale` — The target scale.

**Retorna:**

*(sin retorno)*

---

### `render:SetLightingMode` `[client]`

Sets lighting mode when rendering something.

**Do not forget to restore the default value** to avoid unexpected behavior, like the world and the HUD/UI being affected.

**Argumentos:**

- `number Mode` — Lighting render mode.

Possible values are:
* 0 - Default.
* 1 - Total fullbright, similar to `mat_fullbright 1` but excluding some weapon view models.
* 2 - Increased brightness(?), models look fullbright.

**Retorna:**

*(sin retorno)*

---

### `render:SetLightingOrigin` `[client]`

Sets lighting origin for the current model.

**Argumentos:**

- `Vector lightingOrigin` — The position which will be used to calculate lighting for the current model.

**Retorna:**

*(sin retorno)*

---

### `render:SetLightmapTexture` `[client]`

Sets the texture to be used as the lightmap in upcoming rendering operations. This is required when rendering meshes using a material with a lightmapped shader such as `LightmappedGeneric`.

**Argumentos:**

- `ITexture tex` — The texture to be used as the lightmap.

**Retorna:**

*(sin retorno)*

---

### `render:SetLocalModelLights` `[client]`

Sets up the local lighting for any upcoming render operation. Up to 4 local lights can be defined, with one of three different types (point, directional, spot).

Disables all local lights if called with no arguments.

**Argumentos:**

- `table lights` = `{}` — A table containing up to 4 tables for each light source that should be set up. Each of these tables should contain the properties of its associated light source, see Structures/LocalLight.

**Retorna:**

*(sin retorno)*

---

### `render:SetMaterial` `[client]`

Sets the material to be used in any upcoming render operation using the render.

Not to be confused with surface.SetMaterial.

**Argumentos:**

- `IMaterial mat` — The material to be used.

**Retorna:**

*(sin retorno)*

---

### `render:SetModelLighting` `[client]`

Sets up the ambient lighting for any upcoming render operation. Ambient lighting can be seen as a cube enclosing the object to be drawn, each of its faces representing a directional light source that shines towards the object. Thus, there is a total of six different light sources that can be configured separately.

Light color components are not restricted to a specific range (i.e. 0-255), instead, higher values will result in a brighter light.

**Argumentos:**

- `number{BOX} lightDirection` — The light source to edit, see Enums/BOX.
- `number red` — The red component of the light color.
- `number green` — The green component of the light color.
- `number blue` — The blue component of the light color.

**Retorna:**

*(sin retorno)*

---

### `render:SetRenderTarget` `[client]`

Sets the render target to the specified rt.

**Argumentos:**

- `ITexture texture` — The new render target to be used.

**Retorna:**

*(sin retorno)*

---

### `render:SetRenderTargetEx` `[client]`

Sets the render target with the specified index of `COLOR[n]` to the specified rt, allowing you to work with [Multiple Render Targets (MRT)](https://learn.microsoft.com/en-us/windows/win32/direct3d9/multiple-render-targets). Since standard shaders don't use MRT, you might find this useful at Shaders/screenspace_general.
MRT doesn't work with 2D render functions like render.DrawScreenQuad. Instead, you can render a render.DrawQuad using cam.Start2D.

If you try to render with MSAA and set the main RenderTarget with another RenderTarget, nothing will be rendered.

[Link to Direct3D 9 documentation on MRT](https://learn.microsoft.com/en-us/windows/win32/direct3d9/multiple-render-targets#:~:text=No%20antialiasing%20is%20supported)

`Multiple render targets have the following restrictions:`
* *No antialiasing is supported.*

**Argumentos:**

- `number rtIndex` — The index of output `COLOR[n]` [semantics](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-semantics) from pixel-shader. Min: `0`, max: `3`.
- `ITexture texture` = `nil` — The new render target to be used.

**Retorna:**

*(sin retorno)*

---

### `render:SetScissorRect` `[client/menu]`

Sets a scissoring rectangle which limits the drawing area. (otherwise known as clipping)

**Argumentos:**

- `number startX` — X start coordinate of the scissor rectangle in screen-space coordinates.
- `number startY` — Y start coordinate of the scissor rectangle in screen-space coordinates.
- `number endX` — X end coordinate of the scissor rectangle in screen-space coordinates.
- `number endY` — Y end coordinate of the scissor rectangle in screen-space coordinates.
- `boolean enable` — Enable or disable the scissor rect.

**Retorna:**

*(sin retorno)*

---

### `render:SetShadowColor` `[client]`

Sets the shadow color.

**Argumentos:**

- `number red` — The red channel of the shadow color.
- `number green` — The green channel of the shadow color.
- `number blue` — The blue channel of the shadow color.

**Retorna:**

*(sin retorno)*

---

### `render:SetShadowDirection` `[client]`

Sets the shadow projection direction.

**Argumentos:**

- `Vector shadowDirections` — The new shadow direction.

**Retorna:**

*(sin retorno)*

---

### `render:SetShadowDistance` `[client]`

Sets the maximum shadow projection range.

**Argumentos:**

- `number shadowDistance` — The new maximum shadow distance.

**Retorna:**

*(sin retorno)*

---

### `render:SetShadowsDisabled` `[client]`

Sets whether all shadow rendering should be disabled.

Internally sets `r_shadows_gamecontrol` convar, exactly like `shadow_control` does via its `SetShadowsDisabled` input.

Currently broken due to internal bug. Will be fixed in the next update, as of 15 Sept 2025.

**Argumentos:**

- `boolean disable` — `true` to disable shadows, `false` to enable.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilCompareFunction` `[client/menu]`

Sets the Compare Function that all pixels affected by a draw operation will have their Stencil Buffer value tested against.

When not set to a static value like NEVER or ALWAYS, the Stencil Buffer value corresponding to each affected pixel will be compared against the current render.SetStencilReferenceValue.

Pixels that **Pass** the Compare Function check move on to the Depth Test, which determines if the draw operation will ultimately be allowed to overwrite the pixel's Color Channel, Stencil Buffer, and Depth Buffer values.

Pixels that **Fail** the Compare Function check have the render.SetStencilFailOperation performed on their Stencil Buffer value and do **not** have any of their Render Target layers modified by the draw operation.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number{STENCILCOMPARISONFUNCTION} compareFunction` — The Compare Function that each affected pixel's Stencil Buffer value will be evaluated against during a draw operation.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilEnable` `[client/menu]`

Enables or disables the Stencil system for future draw operations.

While enabled, all pixels affected by draw operations will have their corresponding values in the active render_rendertargets Stencil Buffer compared against the current render.SetStencilReferenceValue and their current Depth Buffer value compared against the depth of the corresponding pixel from the draw operation.
Depending on the outcomes of these comparisons, one of either the render.SetStencilPassOperation, render.SetStencilFailOperation, or render.SetStencilZFailOperation operations is performed on the pixel's Stencil Buffer value.
A pixel will only be updated in the active render_rendertargets if the render.SetStencilPassOperation is performed.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

The Stencil system's configuration does **not** reset automatically.
To prevent unexpected behavior, always manually ensure that the Stencil system is configured appropriately for your use-case after enabling it.

**Argumentos:**

- `boolean newState` — The new state.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilFailOperation` `[client/menu]`

Sets the Enums/STENCILOPERATION that will be performed on the Stencil Buffer values of pixels affected by draw operations if the render.SetStencilCompareFunction did **not** render.SetStencilPassOperation the pixel.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number{STENCILOPERATION} failOperation` — The Stencil Operation to be performed if the Compare Function does not Pass a pixel.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilPassOperation` `[client/menu]`

Sets the Enums/STENCILOPERATION that will be performed on the Stencil Buffer values of pixels affected by draw operations if the render.SetStencilCompareFunction Passes the pixel.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number{STENCILOPERATION} passOperation` — The Stencil Operation to be performed if the Compare Function Passes a pixel.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilReferenceValue` `[client/menu]`

Sets the Stencil system's Reference Value which is compared against each pixel's corresponding Stencil Buffer value in the render.SetStencilCompareFunction and can be used to modify the Stencil Buffer value of those same pixels in the render.SetStencilPassOperation, render.SetStencilFailOperation, and render.SetStencilZFailOperation operations.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number referenceValue` — The value that the Compare function and the pass, fail, and z-fail operations will use.
This is an 8-bit (`byte`) unsigned integer value in the range [`0-255`].

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilTestMask` `[client/menu]`

Sets the unsigned 8-bit (`byte`) bitflag mask that will be bitwise ANDed with all values as they are read (tested) from the Stencil Buffer

This can be considered a "niche" Stencil function as it is not required for many Stencil use-cases.

This is a companion function to render.SetStencilWriteMask which modifies Stencil Buffer values as they are written.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number bitMask` — The 8-bit (`byte`) mask.
Set to `255` to make no change to read Stencil Buffer values.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilWriteMask` `[client/menu]`

Sets the unsigned 8-bit (`byte`) bitflag mask that will be bitwise ANDed with all values as they are written to the Stencil Buffer

This can be considered a "niche" Stencil function as it is not required for many Stencil use-cases.

This is a companion function to render.SetStencilTestMask which modifies Stencil Buffer values as they are read.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number bitMask` — The 8-bit (`byte`) mask.
Set to `255` to make no change to written Stencil Buffer values.

**Retorna:**

*(sin retorno)*

---

### `render:SetStencilZFailOperation` `[client/menu]`

Sets the Enums/STENCILOPERATION that will be performed on the Stencil Buffer values of pixels affected by draw operations if the render.SetStencilCompareFunction Passed a given pixel, but it did **not** Pass the Depth Test.

For more detailed information on the Stencil system, including usage examples, see the render_stencils page.

**Argumentos:**

- `number{STENCILOPERATION} zFailOperation` — The Stencil Operation to be performed if the Compare Function Passes a pixel, but the pixel fails the Depth Test.

**Retorna:**

*(sin retorno)*

---

### `render:SetToneMappingScaleLinear` `[client]`

Sets the tone mapping scale for upcoming rendering operations.

**Argumentos:**

- `Vector scales` — The tonemapping scales.
* X - Output scale.
* Y - Lightmap scale.
* Z - Reflection map scale.

**Retorna:**

*(sin retorno)*

---

### `render:SetViewPort` `[client/menu]`

Changes the view port position and size. The values will be clamped to the game's screen resolution.

If you are looking to render something to a texture (render target), you should use render.PushRenderTarget.

This function will override values of Global.ScrW and Global.ScrH with the ones you set.

**Argumentos:**

- `number x` — X origin of the view port.
- `number y` — Y origin of the view port.
- `number w` — Width of the view port.
- `number h` — Height of the view port.

**Retorna:**

*(sin retorno)*

---

### `render:SetWriteDepthToDestAlpha` `[client]`

Sets the internal parameter **INT_RENDERPARM_WRITE_DEPTH_TO_DESTALPHA**.

**Argumentos:**

- `boolean enable` — 

**Retorna:**

*(sin retorno)*

---

### `render:Spin` `[client]`

Swaps the frame buffers/cycles the frame. In other words, this updates the screen.

If you take a really long time during a single frame render, it is a good idea to use this and let the user know that the game isn't stuck.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:StartBeam` `[client]`

Begin drawing a multi-segment Beam.

For more detailed information on Beams, as well as usage examples, see the render_beams.

**Argumentos:**

- `number segmentCount` — The number of Beam Segments that this multi-segment Beam will contain.

**Retorna:**

*(sin retorno)*

---

### `render:SupportsHDR` `[client/menu]`

Returns whether the player's hardware supports HDR. (High Dynamic Range) HDR can still be disabled by the `mat_hdr_level` console variable or just not be supported by the map.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — `true` if the player's hardware supports HDR.

*Fuente: `lua/includes/extensions/client/render.lua:47`*

---

### `render:SupportsPixelShaders_1_4` `[client/menu]`

Returns if the current settings and the system allow the usage of pixel shaders 1.4.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether Pixel Shaders 1.4 are supported or not.

---

### `render:SupportsPixelShaders_2_0` `[client/menu]`

Returns if the current settings and the system allow the usage of pixel shaders 2.0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether Pixel Shaders 2.0 are supported or not.

---

### `render:SupportsVertexShaders_2_0` `[client/menu]`

Returns if the current settings and the system allow the usage of vertex shaders 2.0.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether Vertex Shaders 2.0 are supported or not.

---

### `render:SuppressEngineLighting` `[client]`

Suppresses or enables any engine lighting for any upcoming render operation.

This does not affect IMeshes.

**Argumentos:**

- `boolean suppressLighting` — True to suppress false to enable.

**Retorna:**

*(sin retorno)*

---

### `render:TurnOnToneMapping` `[client]`

Enables HDR tone mapping which influences the brightness.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:UpdateFullScreenDepthTexture` `[client]`

Updates the texture returned by render.GetFullScreenDepthTexture.

Silently fails if render.SupportsPixelShaders_2_0 returns false.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:UpdatePowerOfTwoTexture` `[client]`

Updates the power of two texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `ITexture` — The render.GetPowerOfTwoTexture.

---

### `render:UpdateRefractTexture` `[client]`

Pretty much alias of render.UpdatePowerOfTwoTexture but does not return the texture.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `render:UpdateScreenEffectTexture` `[client]`

Copies the entire screen to the screen effect texture, which can be acquired via render.GetScreenEffectTexture. This function is mainly intended to be used in GM:RenderScreenspaceEffects.

**Argumentos:**

- `number textureIndex` = `0` — Texture index to update. Max index is 3, but engine only creates the first two for you.

**Retorna:**

*(sin retorno)*

---

### `render:WorldMaterialOverride` `[client]`

This function overrides all map materials for one frame.

**Argumentos:**

- `IMaterial mat` = `nil` — 

**Retorna:**

*(sin retorno)*