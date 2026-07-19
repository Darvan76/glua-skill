# DTree_Node

---

**Hereda de:** `DPanel`

---

This panel is created whenever you add a node to a DTree.
The root node of a DTree is also a DTree_Node and controls much of its action. it can be accessed with DTree:Root.

---


## Miembros (75)


---

### `DTree_Node:AddFolder` `[client/menu]`

A helper function that adds a new node and calls to DTree_Node:MakeFolder on it.

**Argumentos:**

- `string name` — The name of the new node
- `string folder` — The folder in the filesystem to use, relative to the garrysmod/ folder.
- `string path` — The path to search in. See File Search Paths
- `boolean showFiles` = `false` — Should files be added as nodes (true) or folders only (false)
- `string wildcard` = `*` — The wildcard to use when searching for files.
- `boolean bDontForceExpandable` = `false` — 

**Retorna:**

- `Panel` — The created DTree_Node

---

### `DTree_Node:AddNode` `[client/menu]`

Add a child node to the DTree_Node

**Argumentos:**

- `string name` — Name of the node.
- `string icon` = `icon16/folder.png` — The icon that will show next to the node in the DTree.

**Retorna:**

- `Panel` — Returns the created DTree_Node panel.

---

### `DTree_Node:AddPanel` `[client/menu]`

Adds the given panel to the child nodes list, a DListLayout.

**Argumentos:**

- `Panel pnl` — The panel to add.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:AnimSlide` `[client/menu]`

Internal function that handles the expand/collapse animations.

**Argumentos:**

- `table anim` — 
- `number delta` — 
- `table data` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:ChildExpanded` `[client/menu]`

Called when a child node is expanded or collapsed to propagate this event to parent nodes to update layout.

**Argumentos:**

- `boolean expanded` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:CleanList` `[client/menu]`

Cleans up the internal table of items (sub-nodes) of this node from invalid panels or sub-nodes that were moved from this node to another.

Appears the be completely unused by the game on its own.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:Copy` `[client/menu]`

Create and returns a copy of this node, including all the sub-nodes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The copied DTree_Node.

---

### `DTree_Node:CreateChildNodes` `[client/menu]`

Creates the container DListLayout for the DTree_Nodes.

This is called automatically so you don't have to.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:DoChildrenOrder` `[client/menu]`

Called automatically to update the status of DTree_Node:GetLastChild on children of this node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:DoClick` `[client/menu]`

Called when the node is clicked.

See also DTree_Node:DoRightClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to prevent DoClick from being called on parent nodes or the DTree itself.

---

### `DTree_Node:DoRightClick` `[client/menu]`

Called when the node is right clicked.

See also DTree_Node:DoClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Return true to prevent DoRightClick from being called on parent nodes or the DTree itself.

---

### `DTree_Node:ExpandRecurse` `[client/menu]`

Expands or collapses this node, as well as ALL child nodes of this node.

Works opposite of DTree_Node:ExpandTo.

**Argumentos:**

- `boolean expand` — Whether to expand (true) or collapse (false)

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:ExpandTo` `[client/menu]`

Collapses or expands all nodes from the topmost-level node to this one.

Works opposite of DTree_Node:ExpandRecurse.

**Argumentos:**

- `boolean expand` — Whether to expand (true) or collapse (false)

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:FilePopulate` `[client/menu]`

Called automatically from DTree_Node:PopulateChildrenAndSelf and DTree_Node:PopulateChildren to populate this node with child nodes of files and folders.

**Argumentos:**

- `boolean bAndChildren` — Does nothing. Set to true if called from DTree_Node:PopulateChildren.
- `boolean bExpand` — Expand self once population process is finished.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:FilePopulateCallback` `[client/menu]`

Called automatically from DTree_Node:FilePopulate to actually fill the node with sub-nodes based on set preferences like should files be added, etc.

**Argumentos:**

- `table files` — A list of files in this folder
- `table folders` — A list of folder in this folder.
- `string foldername` — The folder name/path this node represents
- `string path` — The Path ID search was performed with. See File Search Paths
- `boolean bAndChildren` — Inherited from the **FilePopulate** call. Does nothing
- `string wildcard` — The wildcard that was given

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:GetChildNode` `[client/menu]`

Returns n-th child node.

Basically an alias of Panel:GetChild.

**Argumentos:**

- `number num` — The number of the child to get, starting with 0

**Retorna:**

- `Panel` — The child panel, if valid ID is given

---

### `DTree_Node:GetChildNodeCount` `[client/menu]`

Returns the number of child nodes this node has. For use with DTree_Node:GetChildNode

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Number of child nodes.

---

### `DTree_Node:GetChildNodes` `[client/menu]`

Returns a table containing all child nodes of this node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — A list of all child nodes.

---

### `DTree_Node:GetDirty` `[client/menu]`

Returns value set by DTree_Node:SetDirty.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree_Node:GetDoubleClickToOpen` `[client/menu]`

Returns whether the double clock to collapse/expand functionality is enabled on this node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree_Node:GetDraggableName` `[client/menu]`

Returns what is set by DTree_Node:SetDraggableName.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — 

---

### `DTree_Node:GetDrawLines` `[client/menu]`

Returns whether or not this node is drawing lines

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree_Node:GetExpanded` `[client/menu]`

Returns whether the node is expanded or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Expanded or not.

---

### `DTree_Node:GetFileName` `[client/menu]`

Returns the filepath of the file attached to this node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — 

---

### `DTree_Node:GetFolder` `[client/menu]`

Returns the folder path to search in, set by DTree_Node:MakeFolder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The folder path.

---

### `DTree_Node:GetForceShowExpander` `[client/menu]`

Returns whether the expand/collapse button is shown on this node regardless of whether or not it has sub-nodes.

See also DTree_Node:SetForceShowExpander.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree_Node:GetHideExpander` `[client/menu]`

Returns whether the expand button (little + button) should be shown or hidden.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Цhether the expand button should be shown or hidden.

---

### `DTree_Node:GetIcon` `[client/menu]`

Returns the image path to the icon of this node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The path to the image

---

### `DTree_Node:GetIndentSize` `[client/menu]`

Returns the indentation level of the DTree this node belongs to.

Alias of DTree:GetIndentSize, see it for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The indentation level.

---

### `DTree_Node:GetLastChild` `[client/menu]`

Returns whether this node is the last child on this level or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this node is the last child on this level or not.

---

### `DTree_Node:GetLineHeight` `[client/menu]`

The height of a single DTree_Node of the DTree this node belongs to.

Alias of DTree:GetLineHeight.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of a single DTree_Node.

---

### `DTree_Node:GetNeedsChildSearch` `[client/menu]`

Seems to be unused entirely.Returns whether the node still needs a filesystem search for sub-nodes.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether the node still needs a filesystem search.

---

### `DTree_Node:GetNeedsPopulating` `[client/menu]`

Returns whether or not the node is set to be populated from the filesystem.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree_Node:GetParentNode` `[client/menu]`

Returns the parent DTree_Node. Note that Panel:GetParent will not be the same!

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The parent node.

---

### `DTree_Node:GetPathID` `[client/menu]`

Returns the path ID (File Search Paths) used in populating the DTree from the filesystem.

See DTree_Node:SetPathID and DTree_Node:MakeFolder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The Path ID

---

### `DTree_Node:GetRoot` `[client/menu]`

Returns the root node, the DTree this node is under.

See also DTree_Node:GetParentNode.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The root node

---

### `DTree_Node:GetShowFiles` `[client/menu]`

Returns whether or not nodes for files should/will be added when populating the node from filesystem.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree_Node:GetWildCard` `[client/menu]`

Returns the wildcard set by DTree_Node:MakeFolder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The search wildcard

---

### `DTree_Node:Insert` `[client/menu]`

Inserts a sub-node into this node before or after the given node.

**Argumentos:**

- `Panel node` — The DTree_Node to insert.
- `Panel nodeNextTo` — The node to insert the node above before or after.
- `boolean before` — true to insert before, false to insert after.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:InsertNode` `[client/menu]`

Inserts an existing node as a "child" or a sub-node of this node.
Used internally by the drag'n'drop functionality.

**Argumentos:**

- `Panel node` — Has to be DTree_Node

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:InstallDraggable` `[client/menu]`

Called automatically internally.

Makes the target node compatible with this node's drag'n'drop.

**Argumentos:**

- `Panel node` — The DTree_Node.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:InternalDoClick` `[client/menu]`

See DTree_Node:DoClick

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:InternalDoRightClick` `[client/menu]`

See DTree_Node:DoRightClick.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:IsRootNode` `[client/menu]`

Returns true if DTree_Node:GetRoot is the same as DTree_Node:GetParentNode of this node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — If this is a root node.

---

### `DTree_Node:LeaveTree` `[client/menu]`

Removes given node as a sub-node of this node.

It doesn't actually remove or unparent the panel, just removes it from the internal DListView.

**Argumentos:**

- `Panel pnl` — The node to remove

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:MakeFolder` `[client/menu]`

Makes this node a folder in the filesystem. This will make it automatically populated.

See also DTree_Node:AddFolder.

**Argumentos:**

- `string folder` — The folder in the filesystem to use, relative to the garrysmod/ folder.
- `string path` — The path to search in. See File Search Paths
- `boolean showFiles` = `false` — Should files be added as nodes (true) or folders only (false)
- `string wildcard` = `*` — The wildcard to use when searching for files.
- `boolean dontForceExpandable` = `false` — If set to true, don't show the expand buttons on empty nodes.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:MoveChildTo` `[client/menu]`

Moves given panel to the top of the children of this node.

Despite name of this function, it cannot move the children to any position but the topmost.

**Argumentos:**

- `Panel node` — The node to move.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:MoveToTop` `[client/menu]`

Moves this node to the top of the level.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:OnModified` `[client/menu]`

Called when sub-nodes of this DTree_Node were changed, such as being rearranged if that functionality is enabled.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:OnNodeAdded` `[client/menu]`

Called when a new sub-node is added this node.

**Argumentos:**

- `DTree_Node newNode` — The newly added sub node.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:OnNodeSelected` `[client/menu]`

Called when this or a sub node is selected. Do not use this, it is not for override.

Use DTree:OnNodeSelected or DTree_Node:DoClick instead.

**Argumentos:**

- `Panel node` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:PerformRootNodeLayout` `[client/menu]`

Called automatically to perform layout on this node if this node DTree_Node:IsRootNode.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:PopulateChildren` `[client/menu]`

Called automatically from DTree_Node:PopulateChildrenAndSelf.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:PopulateChildrenAndSelf` `[client/menu]`

Called automatically from DTree_Node:SetExpanded (or when user manually expands the node) to populate the node with sub-nodes from the filesystem if this was enabled via DTree_Node:MakeFolder.

**Argumentos:**

- `boolean expand` — Expand self once population process is finished.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetDirty` `[client/menu]`

Appears to have no effect on the DTree_Node.

**Argumentos:**

- `boolean dirty` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetDoubleClickToOpen` `[client/menu]`

Sets whether double clicking the node should expand/collapse it or not.

**Argumentos:**

- `boolean enable` — true to enable, false to disable this functionality.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetDraggableName` `[client/menu]`

Used to store name for sub elements for a Panel:Droppable call.

**Argumentos:**

- `string name` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetDrawLines` `[client/menu]`

Sets whether or not this node should draw visual lines.

**Argumentos:**

- `boolean draw` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetExpanded` `[client/menu]`

Expands or collapses this node.

**Argumentos:**

- `boolean expand` — Whether to expand (true) or collapse (false)
- `boolean surpressAnimation` = `false` — Whether to play animation (false) or not (true)

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetFileName` `[client/menu]`

Sets the file full filepath to the file attached to this node

**Argumentos:**

- `string filename` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetFolder` `[client/menu]`

Sets the folder to search files and folders in.

Use DTree_Node:MakeFolder instead.

**Argumentos:**

- `string folder` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetForceShowExpander` `[client/menu]`

Sets whether or not the expand/collapse button (+/- button) should be shown on this node regardless of whether it has sub-elements or not.

**Argumentos:**

- `boolean forceShow` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetHideExpander` `[client/menu]`

Sets whether the expand button (little + button) should be shown or hidden.

**Argumentos:**

- `boolean hide` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetIcon` `[client/menu]`

Sets the material for the icon of the DTree_Node.

**Argumentos:**

- `string path` — The path to the material to be used. Do not include "materials/". .pngs are supported.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetLastChild` `[client/menu]`

Called automatically to set whether this node is the last child on this level or not.

**Argumentos:**

- `boolean last` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetNeedsChildSearch` `[client/menu]`

Seems to be unused entirely.

Sets whether the node still needs a filesystem search for sub-nodes.

**Argumentos:**

- `boolean newState` — New state.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetNeedsPopulating` `[client/menu]`

Sets whether or not the node needs populating from the filesystem.

**Argumentos:**

- `boolean needs` — Whether or not the node needs populating

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetParentNode` `[client/menu]`

Sets the parent node of this node. Not the same as Panel:SetParent.

This is set automatically, you shouldn't use this.

**Argumentos:**

- `Panel parent` — The panel to set as a parent node for this node

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetPathID` `[client/menu]`

Sets the path ID (File Search Paths) for populating the tree from the filesystem.

Use DTree_Node:MakeFolder instead.

**Argumentos:**

- `string path` — The path ID to set.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetRoot` `[client/menu]`

Sets the root node (the DTree) of this node.

This is set automatically, you shouldn't use this.

**Argumentos:**

- `Panel root` — The panel to set as root node.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetSelected` `[client/menu]`

Called automatically to update the "selected" status of this node.

**Argumentos:**

- `boolean selected` — Whether this node is currently selected or not.

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetShowFiles` `[client/menu]`

Sets whether or not nodes for files should be added when populating the node from filesystem.

**Argumentos:**

- `boolean showFiles` — 

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetWildCard` `[client/menu]`

Sets the search wildcard.

Use DTree_Node:MakeFolder instead

**Argumentos:**

- `string wildcard` — The wildcard to set

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:SetupCopy` `[client/menu]`

Currently does nothing, not implemented.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree_Node:ShowIcons` `[client/menu]`

Returns whether or not the DTree this node is in has icons enabled.

See DTree:ShowIcons for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — Whether the icons are shown or not