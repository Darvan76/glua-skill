# resource

---

The resource library is used to control what files are sent to clients who join a server, this includes models, materials, sounds, text files but not Lua files.

---


## Miembros (3)


---

### `resource:AddFile` `[server]`

Adds the specified and all related files to the list of files the client should download from the server.

For convenience, this function will automatically add any other files that are related to the selected one, and throw an error if it can't find them. For example, a `.vmt` file will automatically add the `.vtf` with the same name, and a `.mdl` file will automatically add all `.vvd`, `.ani`, `.dx80.vtx`, `.dx90.vtx` and `.phy` files with the same name, with a separate error for each missing file.

If you do not want it to do this, use resource.AddSingleFile.

See also Serving Content

There's a 8192 downloadable file limit. If you need more, consider using Workshop addons - resource.AddWorkshop. You should also consider the fact that you have way too many downloads. This limit is shared among all `resource.Add*` functions.

The file must exist on the server it will not be added to the downloadables list!

**Argumentos:**

- `string path` — **Virtual path** of the file to be added, relative to `garrysmod/`.
Do not add `.bz2` to the filepath.
Do not add `gamemodes/*gamemodename*/content/` or `addons/*addonname*/` to the path, since those paths are mounted virtually as if they are in the root `garrysmod/`.

**Retorna:**

*(sin retorno)*

---

### `resource:AddSingleFile` `[server]`

Adds the specified file to the files the client should download from the server.

If you wish to add textures or models, consider using resource.AddFile to add all the files required for a texture/model.

There's a 8192 downloadable file limit. If you need more, consider using Workshop addons - resource.AddWorkshop. You should also consider the fact that you have way too many downloads. This limit is shared among all `resource.Add*` functions.

The file must exist on the server or players will not download it!

See also Serving Content

**Argumentos:**

- `string path` — Path of the file to be added, relative to garrysmod/

**Retorna:**

*(sin retorno)*

---

### `resource:AddWorkshop` `[server]`

Adds a workshop addon for the client to download before entering the server. This will not "install" the addon on your server, see Workshop for Dedicated Servers for installing Steam Workshop addons onto your servers.

Having the raw files from a workshop item does not count as having already downloaded it.
So players who previously downloaded a map through [FastDL](Serving_Content) will have to re-download it if it is part of a workshop addon.

You should try to only add addons that have custom content (models, sounds, etc). Lua files are not considered content, and are handled by a separate system. Adding workshop addons that only have Lua files is a waste, it will do nothing.

Gamemodes that are Gamemode_Creation#Gamemode_Text_File and the current map are automatically added to this list, if they come from the servers' workshop collection - so there's no need to manually add them.

There's a 8192 downloadable file limit. If you need more, consider the fact that you have way too many downloads. This limit is shared among all `resource.Add*` functions.

See also Serving Content

**Argumentos:**

- `string workshopid` — The workshop id of the file. This cannot be a collection.

**Retorna:**

*(sin retorno)*