# DTileLayout

---

**Hereda de:** `DDragBase`

---

Similarly to DIconLayout, this lays out panels in two dimensions as tiles.

The difference between this and DIconLayout is that DIconLayout items all have the same height while
DTileLayout items do not have this enforcement.
DTileLayout will find the best way to "pack" its children.
For example, in a two column layout, a item of height 2 units will be placed in one column while
two items of height 1 unit will be placed in the other column.

It is worth noting however that because this panel iterates through its children in an undefined order and lays out while
it is iterating, there is no guarantee that this packing will lead to the lowest possible height.

This is used by the spawnmenu to arrange spawnicons.

The base size defines the smallest a tile can be, and it will resize vertically to accommodate all child panels.
The number of elements in each row is determined by the base size and width.

It also optionally permits the rearrangement of these tiles.
To enable this functionality, call DDragBase:MakeDroppable on the DTileLayout with a unique identifier.
All panels added following this will be moveable.

---


## Miembros (21)


---

### `DTileLayout:ClearTiles` `[client]`

Clears the panel's tile table. Used by DTileLayout:LayoutTiles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:ConsumeTiles` `[client]`

Called to designate a range of tiles as occupied by a panel.

**Argumentos:**

- `number x` — The x coordinate of the top-left corner of the panel.
- `number y` — The y coordinate of the top-left corner of the panel.
- `number w` — The panel's width.
- `number h` — The panel's height.

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:Copy` `[client]`

Creates and returns an exact copy of the DTileLayout.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The created copy.

---

### `DTileLayout:CopyContents` `[client]`

Creates copies of all the children from the given panel object and parents them to this one.

**Argumentos:**

- `Panel source` — The source panel from which to copy all children.

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:FindFreeTile` `[client]`

Finds the coordinates of the first group of free tiles that fit the given size.

**Argumentos:**

- `number x` — The x coordinate to start looking from.
- `number y` — The y coordinate to start looking from.
- `number w` — The needed width.
- `number h` — The needed height.

**Retorna:**

- `number` — The x coordinate of the found available space.
- `number` — The y coordinate of the found available space.

---

### `DTileLayout:FitsInTile` `[client]`

Determines if a group of tiles is vacant.

**Argumentos:**

- `number x` — The x coordinate of the first tile.
- `number y` — The y coordinate of the first tile.
- `number w` — The width needed.
- `number h` — The height needed.

**Retorna:**

- `boolean` — Whether or not this group is available for occupation.

---

### `DTileLayout:GetBaseSize` `[client]`

Returns the size of each single tile, set with DTileLayout:SetBaseSize.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Base tile size.

---

### `DTileLayout:GetBorder` `[client]`

Returns the border spacing set by DTileLayout:SetBorder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The border spacing

---

### `DTileLayout:GetMinHeight` `[client]`

Returns the minimum height the DTileLayout can resize to.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The minimum height the panel can shrink to.

---

### `DTileLayout:GetSpaceX` `[client]`

Returns the X axis spacing between 2 elements set by DTileLayout:SetSpaceX.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DTileLayout:GetSpaceY` `[client]`

Returns the Y axis spacing between 2 elements set by DTileLayout:SetSpaceY.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `DTileLayout:GetTile` `[client]`

Gets the occupied state of a tile.

**Argumentos:**

- `number x` — The x coordinate of the tile.
- `number y` — The y coordinate of the tile.

**Retorna:**

- `any` — The occupied state of the tile, normally `1` or `nil`.

---

### `DTileLayout:Layout` `[client]`

Resets the last width/height info, and invalidates the panel's layout, causing it to recalculate all child positions. It is called whenever a child is added or removed, and can be called to refresh the panel.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:LayoutTiles` `[client]`

Called by PANEL:PerformLayout to arrange and lay out the child panels, if it has changed in size.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:OnModified` `[client]`

Called when anything is dropped on or rearranged within the DTileLayout.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:SetBaseSize` `[client]`

Sets the size of a single tile. If a child panel is larger than this size, it will occupy several tiles.

If you are setting the size of the children properly then you probably don't need to change this.

**Argumentos:**

- `number size` — The size of each tile. It is recommended you use `2ⁿ` (`16, 32, 64...`) numbers, and those above `4`, as numbers lower than this will result in many tiles being processed and therefore slow operation.

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:SetBorder` `[client]`

Sets the spacing between the border/edge of the DTileLayout and all the elements inside.

**Argumentos:**

- `number border` — 

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:SetMinHeight` `[client]`

Determines the minimum height the DTileLayout will resize to. This is useful if child panels will be added/removed often.

**Argumentos:**

- `number minH` — The minimum height the panel can shrink to.

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:SetSpaceX` `[client]`

Sets the spacing between 2 elements in the DTileLayout on the X axis.

**Argumentos:**

- `number spacingX` — New X axis spacing.

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:SetSpaceY` `[client]`

Sets the spacing between 2 elements in the DTileLayout on the Y axis.

**Argumentos:**

- `number spaceY` — New Y axis spacing.

**Retorna:**

*(sin retorno)*

---

### `DTileLayout:SetTile` `[client]`

Called to set the occupied state of a tile.

**Argumentos:**

- `number x` — The x coordinate of the tile.
- `number y` — The y coordinate of the tile.
- `any state` — The new state of the tile, normally `1` or `nil`.

**Retorna:**

*(sin retorno)*