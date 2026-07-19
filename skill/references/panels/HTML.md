# HTML

---

**Hereda de:** `Panel`

---

The HTML control can be used to display web pages just like an internet browser.

DHTML has additional functionality for interfacing with the page, such as sending and receiving data.

## Blocked URL Extentions

This means your url cannot end in any of these extensions, e.g.: (http://yourdomain.com/garry.exe)
* .exe
* .bat
* .dll
* .zip
* .mp3
* .swf

---


## Miembros (9)


---

### `HTML:ConsoleMessage` `[client/menu]`

Called when the page inside the HTML window runs the `console.log` javascript function.

On the x86-64 beta, it's called for all built-in `console.*` javascript functions.

Overwriting this function in any way will disable default behavior of printing the message to the in-game console.

**Argumentos:**

- `string msg` — The message to be logged (or Lua code to be executed; see above).
- `string file` — The message source file, if any.
- `number lineNr` — The line number in the file the message was output from.
- `string severity` — The severity of the message. Possible values are:
* "log"
* "warn"
* "error"
* "debug"

**Retorna:**

*(sin retorno)*

---

### `HTML:OnBeginLoadingDocument` `[client]`

Called when this panel begins loading a page.

**Argumentos:**

- `string url` — The URL of the current page.

**Retorna:**

*(sin retorno)*

---

### `HTML:OnCallback` `[client]`

Called by the engine when a callback function is called.

**Argumentos:**

- `string library` — Library name of the JS function that was called.
- `string name` — Name of the JS function that was called.
- `table arguments` — Table containing all arguments passed to the JS function.

**Retorna:**

- `boolean` — Return `true` to suppress default engine action.

---

### `HTML:OnChangeAddressBar` `[client]`

Called when this panel's address changes.

**Argumentos:**

- `string url` — The URL of the new page.

**Retorna:**

*(sin retorno)*

---

### `HTML:OnChangeTargetURL` `[client]`

Called by HTML panels when the target URL of the frame has changed, this happens when you hover over a link.

**Argumentos:**

- `string url` — New target URL.

**Retorna:**

*(sin retorno)*

---

### `HTML:OnChangeTitle` `[client]`

Called by HTML panels when the title of the loaded page has been changed.

**Argumentos:**

- `string newTitle` — The new title of the page.

**Retorna:**

*(sin retorno)*

---

### `HTML:OnChildViewCreated` `[client]`

Called by HTML panels when the page attempts to open a new child view (such as a popup or new tab).

**Argumentos:**

- `string sourceURL` — The URL of the page requesting to create a child.
- `string targetURL` — The URL of the requested child.
- `boolean isPopup` — True if the requested view is a popup.

**Retorna:**

*(sin retorno)*

---

### `HTML:OnDocumentReady` `[client]`

Called by HTML panels when the panel's DOM has been set up. You can run JavaScript in here.

**Argumentos:**

- `string url` — The URL of the current page.

**Retorna:**

*(sin retorno)*

---

### `HTML:OnFinishLoadingDocument` `[client]`

Called when this panel successfully loads a page.

**Argumentos:**

- `string url` — The URL of the current page.

**Retorna:**

*(sin retorno)*