# DFileBrowser

---

**Hereda de:** `DPanel`

---

A tree and list-based file browser.

It allows filtering by folder (directory) name and file extension, and can display models as SpawnIcons.

---


## Miembros (26)


---

### `DFileBrowser:Clear` `[client]`

Clears the file tree and list, and resets all values.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:273`*

---

### `DFileBrowser:GetBaseFolder` `[client]`

An Global.AccessorFunc that returns the root directory/folder of the file tree.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The path to the root folder.

*Fuente: `lua/vgui/dfilebrowser.lua:7`*

---

### `DFileBrowser:GetCurrentFolder` `[client]`

An Global.AccessorFunc that returns the current directory/folder being displayed.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The directory the file list is currently displaying.

*Fuente: `lua/vgui/dfilebrowser.lua:8`*

---

### `DFileBrowser:GetFileTypes` `[client]`

An Global.AccessorFunc that returns the current file type filter on the file list.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The current filter applied to the file list.

*Fuente: `lua/vgui/dfilebrowser.lua:6`*

---

### `DFileBrowser:GetFolderNode` `[client]`

Returns the DTree Node that the file tree stems from.

This is a child of the root node of the DTree.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — The DTree_Node used for the tree.

*Fuente: `lua/vgui/dfilebrowser.lua:267`*

---

### `DFileBrowser:GetModels` `[client]`

An Global.AccessorFunc that returns whether or not the model viewer mode is enabled. In this mode, files are displayed as SpawnIcons instead of a list.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not files will be displayed using SpawnIcons.

*Fuente: `lua/vgui/dfilebrowser.lua:10`*

---

### `DFileBrowser:GetName` `[client]`

An Global.AccessorFunc that returns the name being used for the file tree.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The name used for the root of the file tree.

*Fuente: `lua/vgui/dfilebrowser.lua:4`*

---

### `DFileBrowser:GetOpen` `[client]`

An Global.AccessorFunc that returns whether or not the file tree is open.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the file tree is open.

*Fuente: `lua/vgui/dfilebrowser.lua:11`*

---

### `DFileBrowser:GetPath` `[client]`

An Global.AccessorFunc that returns the access path of the file tree. This is `GAME` unless changed with DFileBrowser:SetPath.

See file.Read for how paths work.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The current access path i.e. "GAME", "LUA", "DATA" etc.

*Fuente: `lua/vgui/dfilebrowser.lua:5`*

---

### `DFileBrowser:GetSearch` `[client]`

An Global.AccessorFunc that returns the current search filter on the file tree.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string` — The filter in use on the file tree.

*Fuente: `lua/vgui/dfilebrowser.lua:9`*

---

### `DFileBrowser:OnDoubleClick` `[client]`

Called when a file is double-clicked.

Double-clicking a file or icon will trigger **both** this and DFileBrowser:OnSelect.

**Argumentos:**

- `Panel selectedPanel` — The panel that was double-clicked to select this file.This will either be a DListView_Line or SpawnIcon depending on whether the model viewer mode is enabled. See DFileBrowser:SetModels.
- `string filePath` — The path to the file that was double-clicked.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:297`*

---

### `DFileBrowser:OnRightClick` `[client]`

Called when a file is right-clicked.

When not in model viewer mode, DFileBrowser:OnSelect will also be called if the file is not already selected.

**Argumentos:**

- `string filePath` — The path to the file that was right-clicked.
- `Panel selectedPanel` — The panel that was right-clicked to select this file.

This will either be a DListView_Line or SpawnIcon depending on whether the model viewer mode is enabled. See DFileBrowser:SetModels.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:303`*

---

### `DFileBrowser:OnSelect` `[client]`

Called when a file is selected.

**Argumentos:**

- `Panel selectedPanel` — The panel that was clicked to select this file.This will either be a DListView_Line or SpawnIcon depending on whether the model viewer mode is enabled. See DFileBrowser:SetModels.
- `string filePath` — The path to the file that was selected.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:291`*

---

### `DFileBrowser:SetBaseFolder` `[client]`

An Global.AccessorFunc that sets the root directory/folder of the file tree.

This needs to be set for the file tree to be displayed.

**Argumentos:**

- `string baseDir` — The path to the folder to use as the root.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:50`*

---

### `DFileBrowser:SetCurrentFolder` `[client]`

An Global.AccessorFunc that sets the directory/folder from which to display the file list.

**Argumentos:**

- `string currentDir` — The directory to display files from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:104`*

---

### `DFileBrowser:SetFileTypes` `[client]`

An Global.AccessorFunc that sets the file type filter for the file list.

This accepts the same file extension wildcards as file.Find.

**Argumentos:**

- `string fileTypes` = `*.*` — A list of file types to display, separated by spaces e.g.
```
"*.lua *.txt *.mdl"
```

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:81`*

---

### `DFileBrowser:SetModels` `[client]`

Enables or disables the model viewer mode. In this mode, files are displayed as SpawnIcons instead of a list.

This should only be used for `.mdl` files; the spawn icons will display error models for others. See DFileBrowser:SetFileTypes

**Argumentos:**

- `boolean showModels` = `false` — Whether or not to display files using SpawnIcons.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:92`*

---

### `DFileBrowser:SetName` `[client]`

An Global.AccessorFunc that sets the name to use for the file tree.

**Argumentos:**

- `string treeName` = ``baseFolder`` — The name for the root of the file tree. Passing no value causes this to be the base folder name. See DFileBrowser:SetBaseFolder.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:36`*

---

### `DFileBrowser:SetOpen` `[client]`

An Global.AccessorFunc that opens or closes the file tree.

**Argumentos:**

- `boolean open` = `false` — `true` to open the tree, `false` to close it.
- `boolean useAnim` = `false` — If `true`, the DTree's open/close animation is used.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:120`*

---

### `DFileBrowser:SetPath` `[client]`

An Global.AccessorFunc that sets the access path for the file tree. This is set to `GAME` by default.

See file.Read for how paths work.

**Argumentos:**

- `string path` — The access path i.e. "GAME", "LUA", "DATA" etc.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:59`*

---

### `DFileBrowser:SetSearch` `[client]`

An Global.AccessorFunc that sets the search filter for the file tree.

This accepts the same wildcards as file.Find.

**Argumentos:**

- `string filter` = `*` — The filter to use on the file tree.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:68`*

---

### `DFileBrowser:Setup` `[client]`

Called to set up the DTree and file viewer when a base path has been set.

Calls DFileBrowser:SetupTree and DFileBrowser:SetupFiles.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the variables needed to set up have been defined.

*Fuente: `lua/vgui/dfilebrowser.lua:202`*

---

### `DFileBrowser:SetupFiles` `[client]`

Called to set up the DListView or DIconBrowser by DFileBrowser:Setup.

The icon browser is used when in models mode. See DFileBrowser:SetModels.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the files pane was set up successfully.

*Fuente: `lua/vgui/dfilebrowser.lua:169`*

---

### `DFileBrowser:SetupTree` `[client]`

Called to set up the DTree by DFileBrowser:Setup.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether or not the tree was set up successfully.

*Fuente: `lua/vgui/dfilebrowser.lua:143`*

---

### `DFileBrowser:ShowFolder` `[client]`

Builds the file or icon list for the current directory.

You should use DFileBrowser:SetCurrentFolder to change the directory.

**Argumentos:**

- `string currentDir` — The directory to populate the list from.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/vgui/dfilebrowser.lua:210`*

---

### `DFileBrowser:SortFiles` `[client]`

Sorts the file list.

This is only functional when not using the model viewer. See DFileBrowser:SetModels

**Argumentos:**

- `boolean descending` = `false` — The sort order. `true` for descending (z-a), `false` for ascending (a-z).

**Retorna:**

*(sin retorno)*