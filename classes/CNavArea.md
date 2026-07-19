# CNavArea

---

An object returned by navmesh functions.

---


## Miembros (77)


---

### `CNavArea:AddAttributes` `[server]`

Adds given attributes to given CNavArea. See CNavArea:HasAttributes and CNavArea:SetAttributes.

**Argumentos:**

- `number attribs` — The attributes to add, as a bitflag. See Enums/NAV_MESH.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:AddHidingSpot` `[server]`

Adds a hiding spot onto this nav area.

There's a limit of 255 hiding spots per area.

**Argumentos:**

- `Vector pos` — The position on the nav area
- `number flags` = `7` — Flags describing what kind of hiding spot this is.
* 0 = None (Not recommended)
* 1 = In Cover/basically a hiding spot, in a corner with good hard cover nearby
* 2 = good sniper spot, had at least one decent sniping corridor
* 4 = perfect sniper spot, can see either very far, or a large area, or both
* 8 = exposed, spot in the open, usually on a ledge or cliff

Values over 255 will be clamped.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:AddToClosedList` `[server]`

Adds this CNavArea to the closed list, a list of areas that have been checked by A* pathfinding algorithm.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:AddToOpenList` `[server]`

Adds this CNavArea to the Open List.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:ClearSearchLists` `[server]`

Clears the open and closed lists for a new search.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:ComputeAdjacentConnectionHeightChange` `[server]`

Returns the height difference between the edges of two connected navareas.

**Argumentos:**

- `CNavArea navarea` — 

**Retorna:**

- `number` — The height change

---

### `CNavArea:ComputeDirection` `[server]`

Returns the Enums/NavDir direction that the given vector faces on this CNavArea.

**Argumentos:**

- `Vector pos` — The position to compute direction towards.

**Retorna:**

- `number` — The direction the vector is in relation to this CNavArea. See Enums/NavDir.

---

### `CNavArea:ComputeGroundHeightChange` `[server]`

Returns the height difference on the Z axis of the two CNavAreas. This is calculated from the center most point on both CNavAreas.

**Argumentos:**

- `CNavArea navArea` — The nav area to test against.

**Retorna:**

- `number` — The ground height change.

---

### `CNavArea:ConnectTo` `[server]`

Connects this CNavArea to another CNavArea or CNavLadder with a one way connection. ( From this area to the target )

See CNavLadder:ConnectTo for making the connection from ladder to area.

**Argumentos:**

- `CNavArea area` — The CNavArea or CNavLadder this area leads to.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:Contains` `[server]`

Returns true if this CNavArea contains the given vector.

**Argumentos:**

- `Vector pos` — The position to test.

**Retorna:**

- `boolean` — True if the vector was inside and false otherwise.

---

### `CNavArea:Disconnect` `[server]`

Disconnects this nav area from given area or ladder. (Only disconnects one way)

**Argumentos:**

- `CNavArea area` — The CNavArea or CNavLadder this to disconnect from.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:Draw` `[server]`

Draws this navarea on debug overlay. (So limitations of debugoverlay library apply)

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:DrawSpots` `[server]`

Draws the hiding spots on debug overlay. This includes sniper/exposed spots too!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:GetAdjacentAreaDistances` `[server]`

Returns a list of all the CNavAreas that have a (one and two way) connection **from** this CNavArea and their pre-computed distances.

If an area has a one-way incoming connection to this CNavArea, then it will **not** be returned from this function, use CNavArea:GetIncomingConnectionDistances to get all one-way incoming connections.

**Argumentos:**

- `number dir` = `nil` — If set, will only return areas in the specified direction. See Enums/NavDir.

**Retorna:**

- `table` — A list of tables in the following format:
* CNavArea **area** - the area that is connected to this area.
* number **dist** - Distance from the area to this area.
* number **dir** - Direction in which the area is in relative to this area.

---

### `CNavArea:GetAdjacentAreas` `[server]`

Returns a list of all the CNavAreas that have a  (one and two way) connection **from** this CNavArea.

If an area has a one-way incoming connection to this CNavArea, then it will **not** be returned from this function, use CNavArea:GetIncomingConnections to get all one-way incoming connections.

See CNavArea:GetAdjacentAreasAtSide for a function that only returns areas from one side/direction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A list of all CNavArea that have a (one and two way) connection **from** this CNavArea.

Returns an empty table if this area has no outgoing connections to any other areas.

---

### `CNavArea:GetAdjacentAreasAtSide` `[server]`

Returns a table of all the CNavAreas that have a ( one and two way ) connection **from** this CNavArea in given direction.

If an area has a one-way incoming connection to this CNavArea, then it will **not** be returned from this function, use CNavArea:GetIncomingConnections to get all incoming connections.

See CNavArea:GetAdjacentAreas for a function that returns all areas from all sides/directions.

**Argumentos:**

- `number navDir` — The direction, in which to look for CNavAreas, see Enums/NavDir.

**Retorna:**

- `table` — A table of all CNavArea that have a ( one and two way ) connection **from** this CNavArea in given direction.

Returns an empty table if this area has no outgoing connections to any other areas in given direction.

---

### `CNavArea:GetAdjacentCount` `[server]`

Returns the amount of CNavAreas that have a connection ( one and two way ) **from** this CNavArea.

See CNavArea:GetAdjacentCountAtSide for a function that only returns area count from one side/direction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The amount of CNavAreas that have a connection ( one and two way ) **from** this CNavArea.

---

### `CNavArea:GetAdjacentCountAtSide` `[server]`

Returns the amount of CNavAreas that have a connection ( one or two way ) **from** this CNavArea in given direction.

See CNavArea:GetAdjacentCount for a function that returns CNavArea count from/in all sides/directions.

**Argumentos:**

- `number navDir` — The direction, in which to look for CNavAreas, see Enums/NavDir.

**Retorna:**

- `number` — The amount of CNavAreas that have a connection ( one or two way ) **from** this CNavArea in given direction.

---

### `CNavArea:GetAttributes` `[server]`

Returns the attribute mask for the given CNavArea.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Attribute mask for this CNavArea, see Enums/NAV_MESH for the specific flags.

A navmesh that was generated with nav_quicksave set to 1 will have all CNavAreas attribute masks set to 0

---

### `CNavArea:GetCenter` `[server]`

Returns the center most vector point for the given CNavArea.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The center vector.

---

### `CNavArea:GetClosestPointOnArea` `[server]`

Returns the closest point of this Nav Area from the given position.

**Argumentos:**

- `Vector pos` — The given position, can be outside of the Nav Area bounds.

**Retorna:**

- `Vector` — The closest position on this Nav Area.

---

### `CNavArea:GetCorner` `[server]`

Returns the vector position of the corner for the given CNavArea.

**Argumentos:**

- `number cornerid` — The target corner to get the position of, takes Enums/NavCorner.

**Retorna:**

- `Vector` — The corner position.

---

### `CNavArea:GetCostSoFar` `[server]`

Returns the cost from starting area this area when pathfinding. Set by CNavArea:SetCostSoFar.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The cost so far.

---

### `CNavArea:GetExposedSpots` `[server]`

Returns a table of very bad hiding spots in this area.

See also CNavArea:GetHidingSpots.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A table of Vectors

---

### `CNavArea:GetExtentInfo` `[server]`

Returns size info about the nav area.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — Returns a table containing the following keys:
* Vector hi - "Maxs" of the nav area in world space
* Vector lo - "Mins" of the nav area in world space
* number SizeX - Size on the X axis
* number SizeY - Size on the Y axis
* number SizeZ - Size of the Z axis

---

### `CNavArea:GetHidingSpots` `[server]`

Returns a table of good hiding spots in this area.

See also CNavArea:GetExposedSpots.

**Argumentos:**

- `number type` = `1` — The type of spots to include.

* 0 = None (Not recommended)
* 1 = In Cover/basically a hiding spot, in a corner with good hard cover nearby
* 2 = good sniper spot, had at least one decent sniping corridor
* 4 = perfect sniper spot, can see either very far, or a large area, or both
* 8 = exposed, spot in the open, usually on a ledge or cliff, same as GetExposedSpots
* Values over 255 and below 0 will be clamped.

**Retorna:**

- `table` — A table of Vectors

---

### `CNavArea:GetID` `[server]`

Returns this CNavAreas unique ID.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The unique ID.

---

### `CNavArea:GetIncomingConnectionDistances` `[server]`

Returns a table of all the CNavAreas that have a one-way connection **to** this CNavArea and their pre-computed distances.

If a CNavArea has a two-way connection **to or from** this CNavArea then it will not be returned from this function, use CNavArea:GetAdjacentAreaDistances to get outgoing (one and two way) connections.

**Argumentos:**

- `number dir` = `nil` — If set, will only return areas in the specified direction. See Enums/NavDir.

**Retorna:**

- `table` — A list of tables in the following format:
* CNavArea **area** - the area that is connected to this area.
* number **dist** - Distance from the area to this area.
* number **dir** - Direction in which the area is in relative to this area.

---

### `CNavArea:GetIncomingConnections` `[server]`

Returns a table of all the CNavAreas that have a one-way connection **to** this CNavArea.

If a CNavArea has a two-way connection **to or from** this CNavArea then it will not be returned from this function, use CNavArea:GetAdjacentAreas to get outgoing ( one and two way ) connections.

See CNavArea:GetIncomingConnectionsAtSide for a function that returns one-way incoming connections from  only one side/direction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<CNavArea>` — A table of all CNavAreas with one-way connection **to** this CNavArea.

Returns an empty table if there are no one-way incoming connections **to** this CNavArea.

---

### `CNavArea:GetIncomingConnectionsAtSide` `[server]`

Returns a table of all the CNavAreas that have a one-way connection **to** this CNavArea from given direction.

If a CNavArea has a two-way connection **to or from** this CNavArea then it will not be returned from this function, use CNavArea:GetAdjacentAreas to get outgoing ( one and two way ) connections.

See CNavArea:GetIncomingConnections for a function that returns one-way incoming connections from  all sides/directions.

**Argumentos:**

- `number navDir` — The direction, from which to look for CNavAreas, see Enums/NavDir.

**Retorna:**

- `table` — A table of all CNavAreas with one-way connection **to** this CNavArea from given direction.

Returns an empty table if there are no one-way incoming connections **to** this CNavArea from given direction.

---

### `CNavArea:GetLadders` `[server]`

Returns all CNavLadders that have a ( one or two way ) connection **from** this CNavArea.

See CNavArea:GetLaddersAtSide for a function that only returns CNavLadders in given direction.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table<CNavLadder>` — The CNavLadders that have a ( one or two way ) connection **from** this CNavArea.

---

### `CNavArea:GetLaddersAtSide` `[server]`

Returns all CNavLadders that have a ( one or two way ) connection **from** ( one and two way ) this CNavArea in given direction.

See CNavArea:GetLadders for a function that returns CNavLadder from/in all sides/directions.

**Argumentos:**

- `number navDir` — The direction, in which to look for CNavLadders.

0 = Up ( LadderDirectionType::LADDER_UP )
1 = Down ( LadderDirectionType::LADDER_DOWN )

**Retorna:**

- `table` — The CNavLadders that have a ( one or two way ) connection **from** this CNavArea in given direction.

---

### `CNavArea:GetParent` `[server]`

Returns the parent CNavArea

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The parent CNavArea

---

### `CNavArea:GetParentHow` `[server]`

Returns how this CNavArea is connected to its parent.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — See Enums/NavTraverseType

---

### `CNavArea:GetPlace` `[server]`

Returns the Place of the nav area.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The place of the nav area, or no value if it doesn't have a place set.

---

### `CNavArea:GetRandomAdjacentAreaAtSide` `[server]`

Returns a random CNavArea that has an outgoing ( one or two way ) connection **from** this CNavArea in given direction.

**Argumentos:**

- `number navDir` — The direction, in which to look for CNavAreas, see Enums/NavDir.

**Retorna:**

- `CNavArea` — The random CNavArea that has an outgoing ( one or two way ) connection **from** this CNavArea in given direction, if any.

---

### `CNavArea:GetRandomPoint` `[server]`

Returns a random point on the nav area.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The random point on the nav area.

---

### `CNavArea:GetSizeX` `[server]`

Returns the width this Nav Area.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `CNavArea:GetSizeY` `[server]`

Returns the height of this Nav Area.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — 

---

### `CNavArea:GetSpotEncounters` `[server]`

Returns all possible path segments through a CNavArea, and the dangerous spots to look at as we traverse that path segment.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table encounters` — A sequential list of spot encounters in the following format:
* CNavArea **from** - What CNavArea the path segment is coming from
* Vector **from_pos** - Origin position of the path segment
* number **from_dir** - Source Enums/NavDir direction of the path segment
* CNavArea **to** - What CNavArea the path segment is going towards
* Vector **to_pos** - Target position of the path segment
* number **to_dir** - Target Enums/NavDir direction of the path segment
* table **spots** - List of spots to look at, a sequential list of the following structures:
* Vector **pos** - Position of the spot
* table **flags** - Type of spot this is
* CNavArea **area** - The nav area the spot belongs to

---

### `CNavArea:GetTotalCost` `[server]`

Returns the total cost when passing from starting area to the goal area through this node. Set by CNavArea:SetTotalCost.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The total cost

---

### `CNavArea:GetVisibleAreas` `[server]`

Returns all CNavAreas that are visible from this CNavArea.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table areas` — A sequential table containing all CNavAreas that are visible from this CNavArea.

---

### `CNavArea:GetZ` `[server]`

Returns the elevation of this Nav Area at the given position.

**Argumentos:**

- `Vector pos` — The position to get the elevation from, the z value from this position is ignored and only the X and Y values are used to this task.

**Retorna:**

- `number` — The elevation.

---

### `CNavArea:HasAttributes` `[server]`

Returns true if the given CNavArea has this attribute flag set.

**Argumentos:**

- `number attribs` — Attribute mask to check for, see Enums/NAV_MESH

**Retorna:**

- `boolean` — True if the CNavArea matches the given mask. False otherwise.

---

### `CNavArea:IsBlocked` `[server]`

Returns whether the nav area is blocked or not, i.e. whether it can be walked through or not.

**Argumentos:**

- `number teamID` = `-2` — The team ID to test, -2 = any team.

Only 2 actual teams are available, 0 and 1.
- `boolean ignoreNavBlockers` = `false` — Whether to ignore [func_nav_blocker](https://developer.valvesoftware.com/wiki/Func_nav_blocker) entities.

**Retorna:**

- `boolean` — Whether the area is blocked or not

---

### `CNavArea:IsClosed` `[server]`

Returns whether this node is in the Closed List.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this node is in the Closed List.

---

### `CNavArea:IsCompletelyVisible` `[server]`

Returns whether this CNavArea can completely (i.e. all corners of this area can see all corners of the given area) see the given CNavArea.

**Argumentos:**

- `CNavArea area` — The CNavArea to test.

**Retorna:**

- `boolean` — Whether the given area is visible from this area

---

### `CNavArea:IsConnected` `[server]`

Returns whether this CNavArea has an outgoing ( one or two way ) connection **to** given CNavArea.

See CNavArea:IsConnectedAtSide for a function that only checks for outgoing connections in one direction.

**Argumentos:**

- `CNavArea navArea` — The CNavArea to test against.

**Retorna:**

- `boolean` — Whether this CNavArea has an outgoing ( one or two way ) connection **to** given CNavArea.

---

### `CNavArea:IsConnectedAtSide` `[server]`

Returns whether this CNavArea has an outgoing ( one or two way ) connection **to** given CNavArea in given direction.

See CNavArea:IsConnected for a function that checks all sides.

**Argumentos:**

- `CNavArea navArea` — The CNavArea to test against.
- `number navDirType` — The direction, in which to look for the connection. See Enums/NavDir

**Retorna:**

- `boolean` — Whether this CNavArea has an outgoing ( one or two way ) connection **to** given CNavArea in given direction.

---

### `CNavArea:IsCoplanar` `[server]`

Returns whether this Nav Area is in the same plane as the given one.

**Argumentos:**

- `CNavArea navArea` — The Nav Area to test.

**Retorna:**

- `boolean` — Whether we're coplanar or not.

---

### `CNavArea:IsDamaging` `[server]`

Returns whether the CNavArea would damage if traversed, as set by CNavArea:MarkAsDamaging.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the area is damaging or not

---

### `CNavArea:IsFlat` `[server]`

Returns whether this Nav Area is flat within the tolerance of the **nav_coplanar_slope_limit_displacement** and **nav_coplanar_slope_limit** convars.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this CNavArea is mostly flat.

---

### `CNavArea:IsOpen` `[server]`

Returns whether this area is in the Open List.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this area is in the Open List.

---

### `CNavArea:IsOpenListEmpty` `[server]`

Returns whether the Open List is empty or not.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the Open List is empty or not.

---

### `CNavArea:IsOverlapping` `[server]`

Returns if this position overlaps the Nav Area within the given tolerance.

**Argumentos:**

- `Vector pos` — The overlapping position to test.
- `number tolerance` = `0` — The tolerance of the overlapping, set to 0 for no tolerance.

**Retorna:**

- `boolean` — Whether the given position overlaps the Nav Area or not.

---

### `CNavArea:IsOverlappingArea` `[server]`

Returns true if this CNavArea is overlapping the given CNavArea.

**Argumentos:**

- `CNavArea navArea` — The CNavArea to test against.

**Retorna:**

- `boolean` — True if the given CNavArea overlaps this CNavArea at any point.

---

### `CNavArea:IsPartiallyVisible` `[server]`

Returns whether this CNavArea can see given position.

**Argumentos:**

- `Vector pos` — The position to test.
- `Entity ignoreEnt` = `NULL` — If set, the given entity will be ignored when doing LOS tests

**Retorna:**

- `boolean` — Whether the given position is visible from this area

---

### `CNavArea:IsPotentiallyVisible` `[server]`

Returns whether this CNavArea can potentially see the given CNavArea.

**Argumentos:**

- `CNavArea area` — The CNavArea to test.

**Retorna:**

- `boolean` — Whether the given area is visible from this area

---

### `CNavArea:IsRoughlySquare` `[server]`

Returns if we're shaped like a square.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If we're a square or not.

---

### `CNavArea:IsUnderwater` `[server]`

Whether this Nav Area is placed underwater.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether we're underwater or not.

---

### `CNavArea:IsValid` `[server]`

Returns whether this CNavArea is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this CNavArea is valid or not.

---

### `CNavArea:IsVisible` `[server]`

Returns whether we can be seen from the given position.

**Argumentos:**

- `Vector pos` — The position to check.

**Retorna:**

- `boolean` — Whether we can be seen or not.
- `Vector` — If we can be seen, this is returned with either the center or one of the corners of the Nav Area.

---

### `CNavArea:MarkAsBlocked` `[server]`

Marks the area as blocked and unable to be traversed. See CNavArea:IsBlocked and CNavArea:MarkAsUnblocked.

**Argumentos:**

- `number teamID` = `-2` — TeamID to mark the area as blocked for. `-2` means all teams. Only 2 valid teamIDs are supported: `0` and `1`.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:MarkAsDamaging` `[server]`

Marks the area as damaging if traversed, for example when, for example having poisonous or no atmosphere, or a temporary fire present. See CNavArea:IsDamaging.

**Argumentos:**

- `number duration` — For how long the area should stay marked as damaging. Multiple calls will overwrite the previous value.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:MarkAsUnblocked` `[server]`

Unblocked this area if it was previously blocked by CNavArea:MarkAsBlocked.

**Argumentos:**

- `number teamID` = `-2` — TeamID to unblock the area for. `-2` means all teams. Only 2 valid teamIDs are supported: `0` and `1`.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:PlaceOnGround` `[server]`

Drops a corner or all corners of a CNavArea to the ground below it.

**Argumentos:**

- `number corner` — The corner(s) to drop, uses Enums/NavCorner

**Retorna:**

*(sin retorno)*

---

### `CNavArea:PopOpenList` `[server]`

Removes a CNavArea from the Open List with the lowest cost to traverse to from the starting node, and returns it.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The CNavArea from the Open List with the lowest cost to traverse to from the starting node.

---

### `CNavArea:Remove` `[server]`

Removes the given nav area.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:RemoveAttributes` `[server]`

Removes given attributes from given CNavArea. See also CNavArea:SetAttributes.

**Argumentos:**

- `number attribs` — The attributes to remove, as a bitflag. See Enums/NAV_MESH.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:RemoveFromClosedList` `[server]`

Does nothing

Removes this node from the Closed List.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavArea:SetAttributes` `[server]`

Sets the attributes for given CNavArea. See CNavArea:HasAttributes.

**Argumentos:**

- `number attribs` — The attributes to set, as a bitflag. See Enums/NAV_MESH.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:SetCorner` `[server]`

Sets the position of a corner of a nav area.

**Argumentos:**

- `number corner` — The corner to set, uses Enums/NavCorner
- `Vector position` — The new position to set.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:SetCostSoFar` `[server]`

Sets the cost from starting area this area when pathfinding.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

- `number cost` — The cost so far

**Retorna:**

*(sin retorno)*

---

### `CNavArea:SetParent` `[server]`

Sets the new parent of this CNavArea.

**Argumentos:**

- `CNavArea parent` — The new parent to set
- `number how` — How we get from parent to us using Enums/NavTraverseType

**Retorna:**

*(sin retorno)*

---

### `CNavArea:SetPlace` `[server]`

Sets the Place of the nav area.

There is a limit of 256 unique places per `.nav` file.

**Argumentos:**

- `string place` — Set to `""` to remove place from the nav area. There's a limit of 255 characters.

**Retorna:**

- `boolean` — Returns true of operation succeeded, false otherwise.

---

### `CNavArea:SetTotalCost` `[server]`

Sets the total cost when passing from starting area to the goal area through this node.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

- `number cost` — The total cost of the path to set.

Must be above or equal 0.

**Retorna:**

*(sin retorno)*

---

### `CNavArea:UpdateOnOpenList` `[server]`

Moves this open list to appropriate position based on its CNavArea:GetTotalCost compared to the total cost of other areas in the open list.

Used in pathfinding via the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).

More information can be found on the Simple Pathfinding page.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*