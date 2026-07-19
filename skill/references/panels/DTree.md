# DTree

---

**Hereda de:** `DScrollPanel`

---

A tree view element for Derma.

See also DTree_Node.

---


## Miembros (21)


---

### `DTree:AddNode` `[client/menu]`

Add a node to the DTree

**Argumentos:**

- `string name` — Name of the option.
- `string icon` = `icon16/folder.png` — The icon that will show nexto the node in the DTree.

**Retorna:**

- `Panel` — Returns the created DTree_Node panel.

---

### `DTree:ChildExpanded` `[client/menu]`

Calls directly to Panel:InvalidateLayout.
Called by DTree_Nodes when a sub element has been expanded or collapsed.

Used as a placeholder function alongside DTree:ExpandTo, DTree:SetExpanded and DTree:MoveChildTo.

The DTree acts a root node and methods with the same name in DTree_Node call to the parent.

**Argumentos:**

- `boolean bExpand` — 

**Retorna:**

*(sin retorno)*

---

### `DTree:DoClick` `[client/menu]`

Called when the any node is clicked. Called by DTree_Node:DoClick.

**Argumentos:**

- `DTree_Node node` — The right clicked node.

**Retorna:**

- `boolean suppress` — 

---

### `DTree:DoRightClick` `[client/menu]`

Called when the any node is right clicked. Called by DTree_Node:DoRightClick.

**Argumentos:**

- `DTree_Node node` — The right clicked node.

**Retorna:**

- `boolean suppress` — 

---

### `DTree:ExpandTo` `[client/menu]`

Does nothing. Used as a placeholder empty function alongside DTree:MoveChildTo, DTree:SetExpanded and DTree:ChildExpanded.

The DTree acts a root node and methods with the same name in DTree_Node call to the parent.

**Argumentos:**

- `boolean bExpand` — 

**Retorna:**

*(sin retorno)*

---

### `DTree:GetClickOnDragHover` `[client/menu]`

Returns the status of DTree:SetClickOnDragHover. See that for more info.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — 

---

### `DTree:GetIndentSize` `[client/menu]`

Returns the indentation size of the DTree, the distance between each "level" of the tree is offset on the left from the previous level.

Currently this feature has no effect on the DTree element.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The indentation size.

---

### `DTree:GetLineHeight` `[client/menu]`

Returns the height of each DTree_Node in the tree.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The height of each DTree_Node in the tree.

---

### `DTree:GetSelectedItem` `[client/menu]`

Returns the currently selected node.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — Curently selected DTree_Node.

---

### `DTree:GetShowIcons` `[client/menu]`

Returns whether or not the Silkicons next to each node of the DTree will be displayed.

Individual icons can be set with DTree_Node:SetIcon or passed as the second argument in DTree:AddNode.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the silkicons next to each node will be displayed.

---

### `DTree:LayoutTree` `[client/menu]`

Does nothing.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `DTree:MoveChildTo` `[client/menu]`

Moves given node to the top of DTrees children. (Makes it the topmost mode)

Used as a placeholder function alongside DTree:ExpandTo, DTree:SetExpanded and DTree:ChildExpanded.

The DTree acts a root node and methods with the same name in DTree_Node call to the parent.

**Argumentos:**

- `Panel child` — The node to move
- `number pos` — Unused, does nothing.

**Retorna:**

*(sin retorno)*

---

### `DTree:OnNodeSelected` `[client/menu]`

This function is called when a node within a tree is selected.

**Argumentos:**

- `Panel node` — The node that was selected.

**Retorna:**

*(sin retorno)*

---

### `DTree:Root` `[client/menu]`

Returns the root DTree_Node, the node that is the parent to all other nodes of the DTree.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — Root node.

---

### `DTree:SetClickOnDragHover` `[client/menu]`

Enables the "click when drag-hovering" functionality.

If enabled, when hovering over any DTree_Node of this DTree while dragging a panel, the node will be automatically clicked on (and subsequently DTree:OnNodeSelected will be called) to open any attached panels, such as spawnlists in spawnmenu.

See also: PANEL:DragHoverClick.

**Argumentos:**

- `boolean enable` — 

**Retorna:**

*(sin retorno)*

---

### `DTree:SetExpanded` `[client/menu]`

Does nothing. Is not called by the DTree itself.

Used as a placeholder empty function alongside DTree:ExpandTo, DTree:MoveChildTo and DTree:ChildExpanded to prevent errors when DTree_Node:SetExpanded is incorrectly used on a DTree.

**Argumentos:**

- `boolean bExpand` — 

**Retorna:**

*(sin retorno)*

---

### `DTree:SetIndentSize` `[client/menu]`

Sets the indentation size of the DTree, the distance between each "level" of the tree is offset on the left from the previous level.

Currently this feature has no effect on the DTree element.

**Argumentos:**

- `number size` — The new indentation size.

**Retorna:**

*(sin retorno)*

---

### `DTree:SetLineHeight` `[client/menu]`

Sets the height of each DTree_Node in the tree.

The default value is 17.

**Argumentos:**

- `number h` — The height to set.

**Retorna:**

*(sin retorno)*

---

### `DTree:SetSelectedItem` `[client/menu]`

Set the currently selected top-level node.

**Argumentos:**

- `Panel node` — DTree_Node to select.

**Retorna:**

*(sin retorno)*

---

### `DTree:SetShowIcons` `[client/menu]`

Sets whether or not the Silkicons next to each node of the DTree will be displayed.

Individual icons can be set with DTree_Node:SetIcon or passed as the second argument in DTree:AddNode.

**Argumentos:**

- `boolean show` — Whether or not to show icons.

**Retorna:**

*(sin retorno)*

---

### `DTree:ShowIcons` `[client/menu]`

Returns whether or not the Silkicons next to each node of the DTree will be displayed.

Alias of DTree:GetShowIcons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the silkicons next to each node will be displayed.