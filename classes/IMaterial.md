# IMaterial

---

A Material object. It represents a game material, similarly to how a `.vmt` file does, which are in fact loaded into an **IMaterial** object.

In most cases the game works with materials as far as file paths go. Materials then point to different ITextures (`.vtf` files) they might be using.
They are not the same and cannot be interchanged.

A material object can be created with Global.Material or Global.CreateMaterial.

---


## Miembros (26)


---

### `IMaterial:GetColor` `[client/menu/server]`

Returns the color of the specified pixel of the `$basetexture`, only works for materials created from PNG files.

Basically identical to ITexture:GetColor used on IMaterial:GetTexture`( "$basetexture" )`.

**Argumentos:**

- `number x` — The X coordinate.
- `number y` — The Y coordinate.

**Retorna:**

- `Color` — The color of the pixel as a Color.

---

### `IMaterial:GetFloat` `[client/menu/server]`

Returns the specified material value as a float, or nil if the value is not set.

**Argumentos:**

- `string materialFloat` — The name of the material value.

**Retorna:**

- `number` — float

---

### `IMaterial:GetInt` `[client/menu/server]`

Returns the specified material value as a int, rounds the value if its a float, or nil if the value is not set.

Please note that certain material flags such as `$model` are stored in the `$flags` variable and cannot be directly retrieved with this function. See the full list here: Material Flags

**Argumentos:**

- `string materialInt` — The name of the material integer.

**Retorna:**

- `number` — The retrieved value as an integer

---

### `IMaterial:GetKeyValues` `[client/server]`

Gets all the key values defined for the material.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<string, any>` — The material's key values.

---

### `IMaterial:GetMatrix` `[client/server]`

Returns the specified material matrix as a int, or nil if the value is not set or is not a matrix.

**Argumentos:**

- `string materialMatrix` — The name of the material matrix.

**Retorna:**

- `VMatrix` — matrix

---

### `IMaterial:GetName` `[client/menu/server]`

Returns the name of the material, in most cases the path.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Material name/path

---

### `IMaterial:GetShader` `[client/menu/server]`

Returns the name of the materials shader.

This function does not work serverside on Linux SRCDS and always returns `shader_error`.

This bug is fixed on `dev` beta and in the next update.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — Name of the currently loaded shader for this material, or `shader_error` if the material has no loaded shader.

It is not guaranteed to be in any specific capitalization, so case insensitive checks are advised.

---

### `IMaterial:GetString` `[client/menu/server]`

Returns the specified material string, or nil if the value is not set or if the value can not be converted to a string.

**Argumentos:**

- `string materialString` — The name of the material string.

**Retorna:**

- `string` — The value as a string

---

### `IMaterial:GetTexture` `[client/menu/server]`

Returns an ITexture based on the passed shader parameter.

**Argumentos:**

- `string param` — The [shader parameter](https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters) to retrieve. This should normally be `$basetexture`.

**Retorna:**

- `ITexture` — The value of the shader parameter. Returns nothing if the param doesn't exist.

---

### `IMaterial:GetVector` `[client/menu/server]`

Returns the specified material vector, or nil if the value is not set.

See also IMaterial:GetVectorLinear

**Argumentos:**

- `string materialVector` — The name of the material vector.

**Retorna:**

- `Vector` — The color vector

---

### `IMaterial:GetVector4D` `[client/menu/server]`

Returns the specified material vector as a 4 component vector.

**Argumentos:**

- `string name` — The name of the material vector to retrieve.

**Retorna:**

- `number x` — The x component of the vector.
- `number y` — The y component of the vector.
- `number z` — The z component of the vector.
- `number w` — The w component of the vector.

---

### `IMaterial:GetVectorLinear` `[client/menu/server]`

Returns the specified material linear color vector, or nil if the value is not set.

See https://en.wikipedia.org/wiki/Gamma_correction

See also IMaterial:GetVector

**Argumentos:**

- `string materialVector` — The name of the material vector.

**Retorna:**

- `Vector` — The linear color vector

---

### `IMaterial:Height` `[client/menu/server]`

Returns the height of the member texture set for `$basetexture`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Height of the base texture.

---

### `IMaterial:IsError` `[client/menu/server]`

Returns whenever the material is valid, i.e. whether it was not loaded successfully from disk or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Is this material the error material? (___error)

---

### `IMaterial:Recompute` `[client/menu/server]`

Recomputes the material's snapshot. This needs to be called if you have changed variables on your material and it isn't changing.

Be careful though - this function is slow - so try to call it only when needed!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetDynamicImage` `[menu]`

Changes the Material into the give Image.
This is used by the Background to change the Image.

**Argumentos:**

- `string path` — The path to a Image.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetFloat` `[client/menu/server]`

Sets the specified material float to the specified float, does nothing on a type mismatch.

Unlike IMaterial:SetInt, this function **does not** call IMaterial:Recompute internally.

**Argumentos:**

- `string materialFloat` — The name of the material float.
- `number float` — The new float value.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetInt` `[client/menu/server]`

Sets the specified material value to the specified int, does nothing on a type mismatch.

Calls IMaterial:Recompute internally.

Please note that certain material flags such as `$model` are stored in the `$flags` variable and cannot be directly set with this function. See the full list here: Material Flags

**Argumentos:**

- `string materialInt` — The name of the material int.
- `number int` — The new int value.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetMatrix` `[client/server]`

Sets the specified material value to the specified matrix, does nothing on a type mismatch.

**Argumentos:**

- `string materialMatrix` — The name of the material int.
- `VMatrix matrix` — The new matrix.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetShader` `[client/menu/server]`

This function does nothingThe functionality of this function was removed due to the amount of crashes it caused.

**Argumentos:**

- `string shaderName` — Name of the shader

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetString` `[client/menu/server]`

Sets the specified material value to the specified string, does nothing on a type mismatch.

**Argumentos:**

- `string materialString` — The name of the material string.
- `string string` — The new string.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetTexture` `[client/menu/server]`

Sets the specified material texture to the specified texture, does nothing on a type mismatch.

Calls IMaterial:Recompute internally.

**Argumentos:**

- `string materialTexture` — The name of the keyvalue on the material to store the texture on.
- `ITexture texture` — The new texture. This can also be a string, the name of the new texture.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetUndefined` `[client/menu/server]`

Unsets the value for the specified material value.

**Argumentos:**

- `string materialValueName` — The name of the material value to be unset.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetVector` `[client/menu/server]`

Sets the specified material vector to the specified vector, does nothing on a type mismatch.

**Argumentos:**

- `string MaterialVector` — The name of the material vector.
- `Vector vec` — The new vector.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:SetVector4D` `[client/menu/server]`

Sets the specified material vector to the specified 4 component vector, does nothing on a type mismatch.

**Argumentos:**

- `string name` — The name of the material vector.
- `number x` — The x component of the new vector.
- `number y` — The y component of the new vector.
- `number z` — The z component of the new vector.
- `number w` — The w component of the new vector.

**Retorna:**

*(sin retorno)*

---

### `IMaterial:Width` `[client/menu/server]`

Returns the width of the member texture set for `$basetexture`.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Width of the base texture.