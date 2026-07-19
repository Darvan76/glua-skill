# WorkshopFileBase

---

This object is created by Global.WorkshopFileBase which is used internally to fetch data of the specific namespace
or to publish saves and dupes.

This also exists on the Server but most functions may throw an error. It's meant to be used clientside.

You need to set the `HTML` field to a DHTML panel that is set up correctly like [here](https://github.com/Facepunch/garrysmod/blob/master/garrysmod/gamemodes/sandbox/gamemode/spawnmenu/creationmenu/content/contenttypes/dupes.lua#L12), or else you might get errors.

---


## Miembros (5)


---

### `WorkshopFileBase:Fetch` `[client/menu/server]`

Fetches all subscriptions for the set namespace and type

If you want to use the type `local` you need to implement the `:FetchLocal(offset, perpage)` function!

**Argumentos:**

- `string type` — The type to search for. (`local`, `subscribed`, `subscribed_ugc`, `mine`, `favorite`)
- `number offset` — Skips the first x results.
- `number perpage` — How many results per page should be returned.
- `table extratags` — additional tags to filter the results.
- `string searchText` — text that needs to be in the addon title. Use an empty string for none
- `number filter` = `nil` — The filter for the results. (`enabledonly`, `disabledonly`)
- `string sort` = `nil` — How it should be sorted. If set to `nil`, it will fallback to `timeadded`. (`title`, `size`, `updated`)

**Retorna:**

*(sin retorno)*

---

### `WorkshopFileBase:FetchSubscribed` `[client/menu/server]`

Fetches all subscriptions for the set namespace and passes the result to WorkshopFileBase:FillFileInfo.

**Argumentos:**

- `number offset` — Skips the first x results.
- `number perpage` — How many results per page should be returned.
- `table tags` — additional tags to filter the results.
- `string searchText` — text that needs to be in the addon title. Use an empty string for none
- `boolean isUGC` = `nil` — if true it will use engine.GetUserContent instead of engine.GetAddons
- `number filter` = `nil` — The filter for the results. (`enabledonly`, `disabledonly`)
- `string sort` = `nil` — How it should be sorted. If set to `nil`, it will fallback to `timeadded`. (`title`, `size`, `updated`)

**Retorna:**

*(sin retorno)*

---

### `WorkshopFileBase:FillFileInfo` `[client/menu/server]`

Updates the set HTML panel with the newly fetched results

**Argumentos:**

- `table results` — The type to search for. (`local`, `subscribed`, `subscribed_ugc`, `mine`, `favorite`)
- `boolean isUGC` — Skips the first x results.

**Retorna:**

*(sin retorno)*

---

### `WorkshopFileBase:Publish` `[client/menu/server]`

Creates a UGCPublishWindow to publish the dupe or save

**Argumentos:**

- `string filename` — The type to search for. (`local`, `subscribed`, `subscribed_ugc`, `mine`, `favorite`)
- `string image` — The image to use

**Retorna:**

*(sin retorno)*

---

### `WorkshopFileBase:RetrieveUserName` `[client/menu/server]`

Retrieves the username for the given SteamID.

**Argumentos:**

- `string steamid` — SteamID to retrieve the name for
- `function callback` — Callback function.

The retrieved name

**Retorna:**

*(sin retorno)*