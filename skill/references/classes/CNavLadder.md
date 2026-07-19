# CNavLadder

---

An object that represents a ladder for Nextbots.

---


## Miembros (22)


---

### `CNavLadder:ConnectTo` `[server]`

Connects this ladder to a CNavArea with a one way connection. ( From this ladder to the target area ).

See CNavArea:ConnectTo for making the connection from area to ladder.

**Argumentos:**

- `CNavArea area` — The area this ladder leads to.

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:Disconnect` `[server]`

Disconnects this ladder from given area in a single direction.

**Argumentos:**

- `CNavArea area` — The CNavArea this to disconnect from.

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:GetBottom` `[server]`

Returns the bottom most position of the ladder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The bottom most position of the ladder.

---

### `CNavLadder:GetBottomArea` `[server]`

Returns the bottom area of the CNavLadder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — 

---

### `CNavLadder:GetID` `[server]`

Returns this CNavLadders unique ID.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The unique ID.

---

### `CNavLadder:GetLength` `[server]`

Returns the length of the ladder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The length of the ladder.

---

### `CNavLadder:GetNormal` `[server]`

Returns the direction of this CNavLadder. ( The direction in which players back will be facing if they are looking directly at the ladder )

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The direction of this CNavLadder.

---

### `CNavLadder:GetPosAtHeight` `[server]`

Returns the world position based on given height relative to the ladder.

**Argumentos:**

- `number height` — The Z position in world space coordinates.

**Retorna:**

- `Vector` — The closest point on the ladder to that height.

---

### `CNavLadder:GetTop` `[server]`

Returns the topmost position of the ladder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `Vector` — The topmost position of the ladder.

---

### `CNavLadder:GetTopBehindArea` `[server]`

Returns the top behind CNavArea of the CNavLadder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The top behind CNavArea of the CNavLadder.

---

### `CNavLadder:GetTopForwardArea` `[server]`

Returns the top forward CNavArea of the CNavLadder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The top forward CNavArea of the CNavLadder.

---

### `CNavLadder:GetTopLeftArea` `[server]`

Returns the top left CNavArea of the CNavLadder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The top left CNavArea of the CNavLadder.

---

### `CNavLadder:GetTopRightArea` `[server]`

Returns the top right CNavArea of the CNavLadder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `CNavArea` — The top right CNavArea of the CNavLadder.

---

### `CNavLadder:GetWidth` `[server]`

Returns the width of the ladder in Hammer Units.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `number` — The width of the ladder in Hammer Units.

---

### `CNavLadder:IsConnectedAtSide` `[server]`

Returns whether this CNavLadder has an outgoing ( one or two way ) connection **to** given CNavArea in given direction.

**Argumentos:**

- `CNavArea navArea` — The CNavArea to test against.
- `number navDirType` — The direction, in which to look for the connection. See Enums/NavDir

**Retorna:**

- `boolean` — Whether this CNavLadder has an outgoing ( one or two way ) connection **to** given CNavArea in given direction.

---

### `CNavLadder:IsValid` `[server]`

Returns whether this CNavLadder is valid or not.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

- `boolean` — Whether this CNavLadder is valid or not.

---

### `CNavLadder:Remove` `[server]`

Removes the given nav ladder.

**Argumentos:**

*(sin argumentos)*

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:SetBottomArea` `[server]`

Sets the bottom area of the CNavLadder.

**Argumentos:**

- `CNavArea area` — 

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:SetTopBehindArea` `[server]`

Sets the top behind area of the CNavLadder.

**Argumentos:**

- `CNavArea area` — 

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:SetTopForwardArea` `[server]`

Sets the top forward area of the CNavLadder.

**Argumentos:**

- `CNavArea area` — 

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:SetTopLeftArea` `[server]`

Sets the top left area of the CNavLadder.

**Argumentos:**

- `CNavArea area` — 

**Retorna:**

*(sin retorno)*

---

### `CNavLadder:SetTopRightArea` `[server]`

Sets the top right area of the CNavLadder.

**Argumentos:**

- `CNavArea area` — 

**Retorna:**

*(sin retorno)*