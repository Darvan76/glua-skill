# IconEditor

---

**Hereda de:** `DFrame`

---

An icon editor that permits a user to modify a SpawnIcon and re-render it. This is used by the spawn menu and is what is shown when you right-click an icon and select `Edit Icon`.

This makes use of the DAdjustableModelPanel element.

This panel is only available in Sandbox and Sandbox derived gamemodes!

---


## Miembros (12)


---

### `IconEditor:AboveLayout` `[client]`

Applies the top-down view camera settings for the model in the DAdjustableModelPanel.

Called when a user clicks the `Above` (third) button (See IconEditor).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:BestGuessLayout` `[client]`

Applies the best camera settings for the model in the DAdjustableModelPanel, using the values returned by Global.PositionSpawnIcon.

Called when a user clicks the `wand` button (See the ) and when IconEditor:Refresh is called.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:FillAnimations` `[client]`

Fills the DListView on the left of the editor with the model entity's animation list. Called by IconEditor:Refresh.

**Argumentos:**

- `Entity ent` — The entity being rendered within the model panel.

**Retorna:**

*(sin retorno)*

---

### `IconEditor:FullFrontalLayout` `[client]`

Applies the front view camera settings for the model in the DAdjustableModelPanel.

Called when a user clicks the `Front` (second) button (See the ).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:OriginLayout` `[client]`

Places the camera at the origin (0,0,0), relative to the entity, in the DAdjustableModelPanel.

Called when a user clicks the `Center` (fifth) button (See the ).

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:Refresh` `[client]`

Updates the internal DAdjustableModelPanel and SpawnIcon.

This should be called immediately after setting the SpawnIcon with IconEditor:SetIcon.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:RenderIcon` `[client]`

Re-renders the SpawnIcon.

Called when a user clicks the `RENDER` button, this retrieves the render data from the internal DAdjustableModelPanel and passes it as a table to Panel:RebuildSpawnIconEx.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:RightLayout` `[client]`

Applies the right side view camera settings for the model in the DAdjustableModelPanel.

Called when a user clicks the `Right` (fourth) button (See the ). (Note: The icon for this points left.)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:SetDefaultLighting` `[client]`

Sets up the default ambient and directional lighting for the DAdjustableModelPanel. Called by IconEditor:Refresh.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `IconEditor:SetFromEntity` `[client]`

Sets the editor's model and icon from an entity. Alternative to IconEditor:SetIcon, with uses a SpawnIcon.

You do not need to call IconEditor:Refresh after this.

**Argumentos:**

- `Entity ent` — The entity to retrieve the model and skin from.

**Retorna:**

*(sin retorno)*

---

### `IconEditor:SetIcon` `[client]`

Sets the SpawnIcon to modify. You should call Panel:Refresh immediately after this, as the user will not be able to make changes to the icon beforehand.

**Argumentos:**

- `Panel icon` — The SpawnIcon object to be modified.

**Retorna:**

*(sin retorno)*

---

### `IconEditor:UpdateEntity` `[client]`

Updates the entity being rendered in the internal DAdjustableModelPanel. Called by the model panel's DModelPanel:LayoutEntity method.

**Argumentos:**

- `Entity ent` — The entity being rendered within the model panel.

**Retorna:**

*(sin retorno)*