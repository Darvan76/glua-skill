# steamworks

---

Steamworks related functions.

---


## Miembros (19)


---

### `steamworks:ApplyAddons` `[menu]`

Refreshes clients addons.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `steamworks:Download` `[client/menu]`

You really should be using steamworks.DownloadUGC when downloading Steam Workshop items. This is a legacy function for preview images.

Downloads a file from the supplied addon and saves it as a `.cache` file in `garrysmod/cache/` folder.

This is mostly used to download the preview image of the addon.

In case the retrieved file is an image and you need the IMaterial, use Global.AddonMaterial with the path supplied from the callback.

**Argumentos:**

- `string workshopPreviewID` — The Preview ID of workshop item.
- `boolean uncompress` — Whether to uncompress the file or not, assuming it was compressed with LZMA.
You will usually want to set this to true.
- `function resultCallback` — The function to process retrieved data.

Path to the downloaded file.

**Retorna:**

*(sin retorno)*

---

### `steamworks:DownloadUGC` `[client/menu]`

**Argumentos:**

- `string workshopID` — The ID of workshop item to download. **NOT** a file ID.
- `function resultCallback` — The function to process retrieved data.

Contains a path to the saved file, or nil if the download failed for any reason.
A file object pointing to the downloaded .gma file. The file handle will be closed after the function exits.

**Retorna:**

*(sin retorno)*

---

### `steamworks:FileInfo` `[client/menu/server]`

Retrieves info about supplied Steam Workshop addon.

**Argumentos:**

- `string workshopItemID` — The ID of Steam Workshop item.
- `function resultCallback` — The function to process retrieved data.

The data about the item, if the request succeeded, `nil` otherwise. See Structures/UGCFileInfo.
- `boolean extraInfo` = `false` — If set, the function will retrieve more info about the workshop item, such as longer description and additional preview images. Only use this if absolutely necessary.

**Retorna:**

*(sin retorno)*

---

### `steamworks:GetList` `[client/menu/server]`

Retrieves a customized list of Steam Workshop addons.

**Argumentos:**

- `string type` — The type of items to retrieve. Possible values include:
* popular (All invalid options will equal to this)
* trending
* latest
* friends
* followed - Items of people the player is following on Steam
* friend_favs - Favorites of player's friends
* favorite - Player's favorites
- `table tags` — A table of tags to match.
- `number offset` — How much of results to skip from first one. This is useful for pagination. Negative values are invalid.
- `number numRetrieve` — How many items to retrieve, up to `50` at a time. Negative values are invalid.
- `number days` — When getting `popular` or `trending` content from Steam, this determines a time period, in range of days from `0` to `365`. ( `7` = most popular addons in last 7 days, `30` = most popular addons in the last month, etc ). If given a zero, will automatically choose a value, which is `7` for `trending`.
- `string userID` = `0` — `"0"` to retrieve all addons, `"1"` to retrieve addons only published by you, or a valid SteamID64 of a user to get workshop items of.
- `function resultCallback` — The function to process retrieved data.

The list of items, or nil in case of error.
- `string searchText` = `nil` — If given, will use the text to filter results.

**Retorna:**

*(sin retorno)*

---

### `steamworks:GetPlayerName` `[client/menu]`

You should use the callback of steamworks.RequestPlayerInfo instead.

Retrieves players name by their 64bit SteamID.

You must call steamworks.RequestPlayerInfo a decent amount of time before calling this function.

**Argumentos:**

- `string steamID64` — The 64bit Steam ID ( aka Community ID ) of the player

**Retorna:**

- `string` — The name of that player

---

### `steamworks:IsSubscribed` `[client/menu]`

Returns whenever the client is subscribed to the specified Steam Workshop item.

**Argumentos:**

- `string workshopItemID` — The ID of the Steam Workshop item.

**Retorna:**

- `boolean` — Is the client subscribed to the addon or not.

---

### `steamworks:OpenWorkshop` `[client/menu]`

Opens the workshop website in the steam overlay browser.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `steamworks:Publish` `[menu]`

Publishes dupes, saves or demos to workshop.

**Argumentos:**

- `string filename` — Path to the file to upload
- `string image` — Path to the image to use as icon
- `string name` — Name of the Workshop submission
- `string desc` — Description of the Workshop submission
- `table tags` — The workshop tags to apply
- `function callback` — Callback for when the publishing process finishes.

If success, file id of the published item.
On failure, the error message.
- `number fileid` = `nil` — If set, the file ID to update
- `string changelist` = `None given.` — List of changes when updating an item.

**Retorna:**

*(sin retorno)*

---

### `steamworks:RequestPlayerInfo` `[client/menu]`

Requests information of the player with SteamID64 for later use with steamworks.GetPlayerName.

**Argumentos:**

- `string steamID64` — The 64bit Steam ID of player.
- `function callback` — A callback function with the data when it arrives.

The player's name.

**Retorna:**

*(sin retorno)*

---

### `steamworks:SetFileCompleted` `[menu]`

Sets the workshop item as "completed" by the player. There will be a visual indicator on the Steam Workshop for completed items.

**Argumentos:**

- `string workshopid` — The Steam Workshop item id

**Retorna:**

- `string` — Whatever you have put in as first argument

---

### `steamworks:SetFilePlayed` `[menu]`

Sets whether you have played this addon or not. This will be shown to the user in the Steam Workshop itself:

**Argumentos:**

- `string workshopid` — The Steam Workshop item ID

**Retorna:**

- `string` — Whatever you have put in as first argument

---

### `steamworks:SetShouldMountAddon` `[menu]`

Sets if an addon should be enabled or disabled. Call steamworks.ApplyAddons afterwards to update.

**Argumentos:**

- `string workshopItemID` — The ID of the Steam Workshop item we should enable/disable
- `boolean shouldMount` — true to enable the item, false to disable.

**Retorna:**

*(sin retorno)*

---

### `steamworks:ShouldMountAddon` `[client/menu]`

Returns whenever the specified Steam Workshop addon will be mounted or not.

**Argumentos:**

- `string workshopItemID` — The ID of the Steam Workshop

**Retorna:**

- `boolean` — Will the workshop item be mounted or not

---

### `steamworks:Subscribe` `[menu]`

Subscribes to the specified workshop addon. Call steamworks.ApplyAddons afterwards to update.

**Argumentos:**

- `string workshopItemID` — The ID of the Steam Workshop item we should subscribe to

**Retorna:**

*(sin retorno)*

---

### `steamworks:Unsubscribe` `[menu]`

Unsubscribes to the specified workshop addon. Call steamworks.ApplyAddons afterwards to update.

This function should `never` be called without a user's consent and should not be called if the addon is currently in use (aka: the user is not in the main menu) as it may result in unexpected behaviour.

**Argumentos:**

- `string workshopItemID` — The ID of the Steam Workshop item we should unsubscribe from.

**Retorna:**

*(sin retorno)*

---

### `steamworks:ViewFile` `[client/menu]`

Opens the workshop website for specified Steam Workshop item in the Steam overlay browser.

**Argumentos:**

- `string workshopItemID` — The ID of workshop item.

**Retorna:**

*(sin retorno)*

---

### `steamworks:Vote` `[menu]`

Makes the user vote for the specified addon

**Argumentos:**

- `string workshopItemID` — The ID of workshop item.
- `boolean upOrDown` — Sets if the user should vote up/down. True makes them upvote, false down

**Retorna:**

*(sin retorno)*

---

### `steamworks:VoteInfo` `[client/menu]`

Use data steamworks.FileInfo instead.

Retrieves vote info of supplied addon.

**Argumentos:**

- `string workshopItemID` — The ID of workshop item.
- `function resultCallback` — The function to process retrieved data.

The vote information. See Structures/UGCFileInfo.

**Retorna:**

*(sin retorno)*