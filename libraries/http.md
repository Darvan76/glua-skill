# http

---

The http library allows either the server or client to communicate with external websites via HTTP, both `GET` (http.Fetch) and `POST` (http.Post) are supported. A more powerful &amp; advanced method can be used via the global Global.HTTP function.

---


## Miembros (2)


---

### `http:Fetch` `[client/menu/server]`

Launches an asynchronous **GET** request to an HTTP server. Internally calls Global.HTTP.

HTTP requests returning a status code &gt;= `400` are still considered a success and will call the Structures/HTTPRequest callback.

The Structures/HTTPRequest callback is usually only called on DNS or TCP errors (e.g. the website is unavailable or the domain does not exist).

A rough overview of possible Structures/HTTPRequest messages:
* `invalid url` - Invalid/empty url. ( no request was attempted )
* `invalid request` - Steam HTTP lib failed to create a HTTP request.
* `error` - OnComplete callback's second argument, `bError`, is `true`.
* `unsuccessful` - OnComplete's first argument, `pResult-&gt;m_bRequestSuccessful`, returned `false`.

This cannot send or receive multiple headers with the same name.
HTTP-requests that respond with a large body may return an `unsuccessful` error. Try using the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header to download the file in chunks.

HTTP-requests to destinations on private networks (such as `192.168.0.1`, or `127.0.0.1`) won't work.

To enable HTTP-requests to destinations on private networks use Command Line Parameters `-allowlocalhttp`. (Dedicated servers only)

**Not all headers are allowed in the client realm, here is a list of known blacklisted headers inside the client realm:**
```
host
expect
content-length
proxy-authenticate
accept-charset
connection
accept-encoding
origin
date
```

**Argumentos:**

- `string url` — The URL of the website to fetch.
- `function onSuccess` = `nil` — Function to be called on success.

equal to string.len(body).

The HTTP success code.
- `function onFailure` = `nil` — Function to be called on failure.

The error message.
- `table headers` = `{}` — KeyValue table for headers.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/http.lua:18`*

---

### `http:Post` `[client/menu/server]`

Sends an asynchronous **POST** request to an HTTP server. Internally calls Global.HTTP.

HTTP requests returning a status code &gt;= `400` are still considered a success and will call the Structures/HTTPRequest callback.

The Structures/HTTPRequest callback is usually only called on DNS or TCP errors (e.g. the website is unavailable or the domain does not exist).

This cannot send or receive multiple headers with the same name.
HTTP-requests that respond with a large body may return an `unsuccessful` error. Try using the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header to download the file in chunks.

HTTP-requests to destinations on private networks (such as `192.168.0.1`, or `127.0.0.1`) won't work.

To enable HTTP-requests to destinations on private networks use Command Line Parameters `-allowlocalhttp`. (Dedicated servers only)

**Argumentos:**

- `string url` — The url to of the website to post.
- `table parameters` — The post parameters (x-www-form-urlencoded) to be send to the server. **Keys and values must be strings**.
- `function onSuccess` = `nil` — Function to be called on success.

The reponse body as a string.
equal to string.len(body).
The response headers as a table.
The HTTP success code.
- `function onFailure` = `nil` — Function to be called on failure.

The error message.
- `table headers` = `{}` — KeyValue table for headers.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/http.lua:46`*