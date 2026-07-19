# navmesh

---

The navigation mesh library. To be used with CNavArea.

The navigation mesh is used by NextBot to calculate path to its target.

---


## Miembros (27)


---

### `navmesh:AddWalkableSeed` `[server]`

Add this position and normal to the list of walkable positions, used before map generation with navmesh.BeginGeneration

**Argumentos:**

- `Vector pos` — The terrain position.
- `Vector dir` — The normal of this terrain position.

**Retorna:**

*(sin retorno)*

---

### `navmesh:BeginGeneration` `[server]`

Starts the generation of a new navmesh.

This process is highly resource intensive and it's not wise to use during normal gameplay

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `navmesh:ClearWalkableSeeds` `[server]`

Clears all the walkable positions, used before calling navmesh.BeginGeneration.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `navmesh:CreateNavArea` `[server]`

Creates a new CNavArea.

**Argumentos:**

- `Vector corner` — The first corner of the new CNavArea
- `Vector opposite_corner` — The opposite (diagonally) corner of the new CNavArea

**Retorna:**

- `CNavArea` — The new CNavArea or nil if we failed for some reason.

---

### `navmesh:CreateNavLadder` `[server]`

Creates a new CNavLadder.

**Argumentos:**

- `Vector top` — The top position of the ladder.
- `Vector bottom` — The bottom position of the ladder.
- `number width` — Width for the new ladder.
- `Vector dir` — Directional vector in which way the ladder should be facing. Please note that ladders can only face in the 4 cardinal directions - NORTH, SOUTH, WEST, EAST.
- `number maxHeightAboveTopArea` = `0` — If above 0, will limit how much the top of the ladder can be adjusted to the closest CNavArea when automatically connecting the newly created ladder to pre-existing nav areas.

**Retorna:**

- `CNavLadder` — The new CNavLadder or nil if we failed for some reason.

---

### `navmesh:Find` `[server]`

Returns a list of areas within distance, used to find hiding spots by NextBots for example.

**Argumentos:**

- `Vector pos` — The position to search around. This position will be used to find the closest area to search from.
- `number radius` — Radius to search within
- `number stepHeight` — Maximum step up height allowed
- `number dropHeight` — Maximum step down (fall distance) allowed

**Retorna:**

- `table` — A list of found CNavAreas.

---

### `navmesh:FindInBox` `[server]`

Returns a list of CNavAreas overlapping the given cube extents.

**Argumentos:**

- `Vector pos1` — The start position of the cube to search in.
- `Vector pos2` — The "end" position of the cube to search in. This is the opposite corner of the cube, diagonally.

**Retorna:**

- `table` — A list of found CNavAreas.

---

### `navmesh:GetAllNavAreas` `[server]`

Returns an integer indexed table of all CNavAreas on the current map. If the map doesn't have a navmesh generated then this will return an empty table.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<CNavArea>` — A table of all the CNavAreas on the current map.

---

### `navmesh:GetBlockedAreas` `[server]`

Returns a table of all blocked CNavAreas on the current map. See CNavArea:MarkAsBlocked.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of all the blocked CNavAreas on the current map.

---

### `navmesh:GetEditCursorPosition` `[server]`

Returns the position of the edit cursor when nav_edit is set to 1.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The position of the edit cursor.

---

### `navmesh:GetGroundHeight` `[server]`

Finds the closest standable ground at, above, or below the provided position.

The ground must have at least 32 units of empty space above it to be considered by this function, unless 16 layers are tested without finding valid ground.

**Argumentos:**

- `Vector pos` — Position to find the closest ground for.

**Retorna:**

- `number` — The height of the ground layer.
- `Vector` — The normal of the ground layer.

---

### `navmesh:GetMarkedArea` `[server]`

Returns the currently marked CNavArea, for use with editing console commands.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The currently marked CNavArea.

---

### `navmesh:GetMarkedLadder` `[server]`

Returns the currently marked CNavLadder, for use with editing console commands.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavLadder` — The currently marked CNavLadder.

---

### `navmesh:GetNavArea` `[server]`

Returns the Nav Area contained in this position that also satisfies the elevation limit.

This function will properly see blocked CNavAreas. See navmesh.GetNearestNavArea.

**Argumentos:**

- `Vector pos` — The position to search for.
- `number beneathLimit` — The elevation limit at which the Nav Area will be searched.

**Retorna:**

- `CNavArea` — The nav area.

---

### `navmesh:GetNavAreaByID` `[server]`

Returns a CNavArea by the given ID.

Avoid calling this function every frame, as internally it does a lookup trough all the CNavAreas, call this once and store the result

**Argumentos:**

- `number id` — ID of the CNavArea to get. Starts with 1.

**Retorna:**

- `CNavArea` — The CNavArea with given ID.

---

### `navmesh:GetNavAreaCount` `[server]`

Returns the total count of nav areas on the map. If you want to get all nav areas, use navmesh.GetAllNavAreas instead as nav areas IDs are not always sequential.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The total count of nav areas on the map.

---

### `navmesh:GetNavLadderByID` `[server]`

Returns a CNavLadder by the given ID.

**Argumentos:**

- `number id` — ID of the CNavLadder to get. Starts with 1.

**Retorna:**

- `CNavLadder` — The CNavLadder with given ID.

---

### `navmesh:GetNearestNavArea` `[server]`

Returns the closest CNavArea to given position at the same height, or beneath it.

This function will ignore blocked CNavAreas. See navmesh.GetNavArea for a function that does see blocked areas.

**Argumentos:**

- `Vector pos` — The position to look from
- `boolean anyZ` = `false` — This argument is ignored and has no effect
- `number maxDist` = `10000` — This is the maximum distance from the given position that the function will look for a CNavArea
- `boolean checkLOS` = `false` — If this is set to true then the function will internally do a util.TraceLine from the starting position to each potential CNavArea with a [MASK_NPCSOLID_BRUSHONLY](https://wiki.facepunch.com/gmod/Enums/MASK). If the trace fails then the CNavArea is ignored.

If this is set to false then the function will find the closest CNavArea through anything, including the world.
- `boolean checkGround` = `true` — If checkGround is true then this function will internally call navmesh.GetNavArea to check if there is a CNavArea directly below the position, and return it if so, before checking anywhere else.
- `number team` = `TEAM_ANY=-2` — This will internally call CNavArea:IsBlocked to check if the target CNavArea is not to be navigated by the given team. Currently this appears to do nothing.

**Retorna:**

- `CNavArea` — The closest CNavArea found with the given parameters, or a NULL CNavArea if one was not found.

---

### `navmesh:GetPlayerSpawnName` `[server]`

Returns the classname of the player spawn entity.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The classname of the spawn point entity. By default returns "info_player_start"

---

### `navmesh:IsGenerating` `[server]`

Whether we're currently generating a new navmesh with navmesh.BeginGeneration.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether we're generating a nav mesh or not.

---

### `navmesh:IsLoaded` `[server]`

Returns true if a navmesh has been loaded when loading the map.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether a navmesh has been loaded when loading the map.

---

### `navmesh:Load` `[server]`

Loads a new navmesh from the .nav file for current map discarding any changes made to the navmesh previously.

Calling this function too soon, causes the Server to crash!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `navmesh:Reset` `[server]`

Deletes every CNavArea and CNavLadder on the map **without saving the changes**.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `navmesh:Save` `[server]`

Saves any changes made to navmesh to the .nav file.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `navmesh:SetMarkedArea` `[server]`

Sets the CNavArea as marked, so it can be used with editing console commands.

**Argumentos:**

- `CNavArea area` — The CNavArea to set as the marked area.

**Retorna:**

*(sin retorno)*

---

### `navmesh:SetMarkedLadder` `[server]`

Sets the CNavLadder as marked, so it can be used with editing console commands.

**Argumentos:**

- `CNavLadder area` — The CNavLadder to set as the marked ladder.

**Retorna:**

*(sin retorno)*

---

### `navmesh:SetPlayerSpawnName` `[server]`

Sets the classname of the default spawn point entity, used before generating a new navmesh with navmesh.BeginGeneration.

**Argumentos:**

- `string spawnPointClass` — The classname of what the player uses to spawn, automatically adds it to the walkable positions during map generation.

**Retorna:**

*(sin retorno)*