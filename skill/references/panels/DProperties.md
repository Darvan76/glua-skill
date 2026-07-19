# DProperties

---

**Hereda de:** `Panel`

---

A grid for editing the properties of something using names and values. Properties can be categorized and strongly typed.

##  Associated controls
* DProperty_VectorColor
* DProperty_Boolean
* DProperty_Generic
* DProperty_Combo
* DProperty_Float
* DProperty_Int

---


## Miembros (2)


---

### `DProperties:GetCanvas` `[client]`

Returns the DScrollPanel all the properties panels are attached to.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Panel` — A DScrollPanel canvas

---

### `DProperties:GetCategory` `[client]`

Returns (or creates) a category of properties.

See DProperties:CreateRow for adding actual properties.

**Argumentos:**

- `string name` — Name of the category
- `boolean create` = `false` — Create a new category if it doesn't exist.

**Retorna:**

- `Panel` — An internal panel.