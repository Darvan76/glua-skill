# file

---

The file library provides functions for finding, reading and writing to files. 
The following path values are most commonly used:
* `LUA` searches the lua files (in /lua/, in your gamemodes, in all the addons).
* `GAME` searches all the mounted content (main folder, addons, mounted games etc).
* `MOD` searches only the garrysmod folder.
* `DATA` searches in the data folder.

See File Search Paths for the descriptive list of path values.
For the full list of path values, type `path` in the console.

---


## Miembros (13)


---

### `file:Append` `[client/menu/server]`

Appends data to a file in the `data/` folder.

**Argumentos:**

- `string name` — The file's name.
- `string content` — The content which should be appended to the file.

**Retorna:**

- `boolean` — If the operation was successful.

*Fuente: `lua/includes/extensions/file.lua:31`*

---

### `file:AsyncRead` `[client/server]`

Returns the content of a file asynchronously.

All limitations of file.Read also apply.

**Argumentos:**

- `string fileName` — The name of the file.
- `string gamePath` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.
- `function callback` — A callback function that will be called when the file read operation finishes.

The `fileName` argument above.
The `gamePath` argument above.
The status of the operation. The list can be found in Enums/FSASYNC.
The entirety of the data of the file.
- `boolean sync` = `false` — If `true` the file will be read synchronously.

**Retorna:**

- `number{FSASYNC} status` — Enums/FSASYNC on success, Enums/FSASYNC on failure.

---

### `file:CreateDir` `[client/menu/server]`

Creates a directory that is relative to the `data` folder.

**Argumentos:**

- `string name` — The directory's name.

**Retorna:**

*(sin retorno)*

---

### `file:Delete` `[client/menu/server]`

Deletes a file or `empty` folder that is relative to the **data** folder. You can't remove any files outside of **data** folder.
You are able to delete **any** file in the Menu state.

**Argumentos:**

- `string name` — The file name.
- `string path` = `DATA` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.
This is only available in the menu state.

**Retorna:**

- `boolean success` — 

---

### `file:Exists` `[client/menu/server]`

Returns a boolean of whether the file or directory exists or not.
If you want to check for a directory, file.IsDir will be faster since it won't check for files.

**Argumentos:**

- `string name` — The file or directory's name. ( You must include the file extension for files, for example "data.txt" )
- `string gamePath` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `boolean` — Returns `true` if the file exists and `false` if it does not.

---

### `file:Find` `[client/menu/server]`

Returns a list of files and directories inside a single folder.
It seems that paths with capital letters (e.g. lua/MyFolder/*) don't work as expected on Linux.

**Argumentos:**

- `string name` — The wildcard to search for. `models/*.mdl` will list **.mdl** files in the `models/` folder.
- `string path` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.
- `string sorting` = `nameasc` — The sorting to be used, **optional**.

* `nameasc` sort the files ascending by name.
* `namedesc` sort the files descending by name.
* `dateasc` sort the files ascending by date.
* `datedesc` sort the files descending by date.

**Retorna:**

- `table` — A table of found files, or `nil` if the path is invalid.
- `table` — A table of found directories, or `nil` if the path is invalid.

---

### `file:IsDir` `[client/menu/server]`

Returns whether the given file is a directory or not.

**Argumentos:**

- `string fileName` — The file or directory's name.
- `string gamePath` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `boolean` — `true` if the given path is a directory or `false` if it's a file.

---

### `file:Open` `[client/menu/server]`

Attempts to open a file with the given mode.
When trying to open files with the following characteristics, it returns nil:

the file extension is ".db; .mdmp; .dmp" or
the file is "server.cfg; autoexec.cfg; config.cfg; listenserver.cfg; mount.cfg"

**Argumentos:**

- `string fileName` — The files name. See file.Write for details on filename restrictions when writing to files.
- `string fileMode` — The mode to open the file in. Possible values are:
* **r** - read mode.
* **w** - write mode.
* **a** - append mode.
* **rb** - binary read mode.
* **wb** - binary write mode.
* **ab** - binary append mode.
- `string gamePath` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `file_class File` — The opened file object, or `nil` if it failed to open due to it not existing or being used by another process.

---

### `file:Read` `[client/menu/server]`

Returns the content of a file.

Beware of casing -- some filesystems are case-sensitive. SRCDS on Linux seems to force file/directory creation to lowercase, but will not modify read operations.

**Argumentos:**

- `string fileName` — The name of the file.
- `string gamePath` = `DATA` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `string` — The data from the file as a string, or `nil` if the file isn't found.

*Fuente: `lua/includes/extensions/file.lua:4`*

---

### `file:Rename` `[client/menu/server]`

Attempts to rename a file with the given name to another given name.

This function is constrained to the `data/` folder.

**Argumentos:**

- `string orignalFileName` — The original file or folder name. See file.Write for details on filename restrictions when writing to files.

**This argument will be forced lowercase.**
- `string targetFileName` — The target file or folder name. See file.Write for details on filename restrictions when writing to files.

**This argument will be forced lowercase.**

**Retorna:**

- `boolean` — `true` on success, `false` otherwise.

---

### `file:Size` `[client/menu/server]`

Returns the file's size in bytes.

**Argumentos:**

- `string fileName` — The file's name.
- `string gamePath` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `number` — The file size in bytes, or `-1` if the file is not found.

---

### `file:Time` `[client/menu/server]`

Returns when the file or folder was last modified in Unix time.

**Argumentos:**

- `string path` — The **file** or **folder** path.
- `string gamePath` — The path to look for the files and directories in. See File_Search_Paths for a list of valid paths.

**Retorna:**

- `number` — Seconds passed since Unix epoch, or `0` if the file is not found.

---

### `file:Write` `[client/menu/server]`

Writes the given string to a file. Erases all previous data in the file. To add data without deleting previous data, use file.Append.

**Argumentos:**

- `string fileName` — The name of the file being written into. The path is relative to the `data/` folder.

This argument will be forced lowercase.

The filename **must** end with one of the following:
* .txt
* .dat
* .json
* .xml
* .csv
* .dem
* .vcd
* .gma
* .mdl
* .phy
* .vvd
* .vtx
* .ani
* .vtf
* .vmt
* .png
* .jpg
* .jpeg
* .mp3
* .wav
* .ogg

Restricted symbols are: `":`, and multiple consecutive spaces, as well as pretty much every other non Latin (a-Z) character
- `string content` — The content that will be written into the file.

**Retorna:**

- `boolean` — If the operation was successful.

*Fuente: `lua/includes/extensions/file.lua:21`*