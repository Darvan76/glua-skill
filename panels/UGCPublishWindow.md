# UGCPublishWindow

---

**Hereda de:** `DFrame`

---

A window that is used to publish dupes and saves

---


## Miembros (8)


---

### `UGCPublishWindow:CheckInput` `[menu]`

Checks if the Tags and Title are valid and if so it enables the publish button.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `UGCPublishWindow:DisplayError` `[menu]`

Displays the given error message.

**Argumentos:**

- `string err` — The error message.

**Retorna:**

*(sin retorno)*

---

### `UGCPublishWindow:DoPublish` `[menu]`

Publishes the Item or throws an error if the Title or Tags are invalid

**Argumentos:**

- `string wsid` — The workshop id
- `string err` — If wsid is nil, this will be the error message

**Retorna:**

*(sin retorno)*

---

### `UGCPublishWindow:FitContents` `[menu]`

Rezises the panel to nicely fit all children

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `UGCPublishWindow:GetChosenTag` `[menu]`

Returns the name of the current selected tag.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `string tag` — The choosen tag, or nil if none is selected.

---

### `UGCPublishWindow:OnPublishFinished` `[menu]`

Called when the Item was published or if any error occurred while publishing

**Argumentos:**

- `string wsid` — The workshop id
- `string err` — If wsid is nil, this will be the error message

**Retorna:**

*(sin retorno)*

---

### `UGCPublishWindow:Setup` `[menu]`

updated the Workshop items list.

**Argumentos:**

- `string ugcType` — The type / namespace of the WorkshopFileBase that created this panel
- `string file` — The File to publish
- `string imageFile` — The Image
- `WorkshopFileBase handler` — The WorkshopFileBase that created this panel

**Retorna:**

*(sin retorno)*

---

### `UGCPublishWindow:UpdateWorkshopItems` `[menu]`

updated the Workshop items list.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*