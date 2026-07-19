# matproxy

---

A library that allows implementing custom [material proxies](https://developer.valvesoftware.com/wiki/Material_proxies) for materials.

Material proxies allow programmatically setting specific `.vmt` shader parameters on a per-entity basis, rather being global across all instances of a material.

You can find a tutorial for making colourable textures over at this [GitHub wiki](https://github.com/fgrg2801/gmod-colorable-playermodels/wiki)

---


## Miembros (6)


---

### `matproxy:ActiveList` `[client]`

A list of all **active** material proxies.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all active material proxies.

---

### `matproxy:Add` `[client]`

Register a material proxy. See matproxy for more general explanation of what they are.
The `bind` function is required. The `init` function won't run without it set.

**Argumentos:**

- `table matProxyData` — The information about the proxy. See Structures/MatProxyData

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/matproxy.lua:20`*

---

### `matproxy:Call` `[client]`

Called by the engine from `OnBind`. Calls Structures/MatProxyData#bind method of the Lua material proxy.

**Argumentos:**

- `string uname` — The material proxy name.
- `IMaterial mat` — The material the proxy is being applied to.
- `Entity ent` — The entity the material is applied to.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/matproxy.lua:50`*

---

### `matproxy:Init` `[client]`

Called by the engine from `OnBind`. Calls Structures/MatProxyData#init method of the Lua material proxy.

**Argumentos:**

- `string name` — Name of the material proxy.
- `string uname` — Name for the active material proxy instance.
- `IMaterial mat` — Material the material proxy is applied to.
- `table values` — `.vmt` shader parameters of the material.

**Retorna:**

*(sin retorno)*

*Fuente: `lua/includes/modules/matproxy.lua:63`*

---

### `matproxy:ProxyList` `[client]`

A list of all material proxies registered with matproxy.Add.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `table` — The list of all material proxies.

---

### `matproxy:ShouldOverrideProxy` `[client]`

Called by engine to determine if a certain material proxy is registered in Lua.

**Argumentos:**

- `string name` — The name of proxy in question

**Retorna:**

- `boolean` — Whether the material proxy of given name is registered.

*Fuente: `lua/includes/modules/matproxy.lua:11`*