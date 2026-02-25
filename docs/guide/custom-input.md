# Custom Input

Stonescript can read player input through the `?key` game state. This enables advanced behaviours — different AI modes, custom mini-games, or entirely new interactive experiences layered on top of Stone Story.

## Basic usage

```
// Print the current input state every frame
>@key@
```

## Key code variants

Each action has three variants:

| Variant | When true |
|---------|-----------|
| `left` | Key is **held down** |
| `leftBegin` | Key was **just pressed** (first frame only) |
| `leftEnd` | Key was **just released** (first frame only) |

## Full key code table

| Held | Pressed | Released | Default PC keys |
|------|---------|----------|-----------------|
| `left` | `leftBegin` | `leftEnd` | A or ← |
| `right` | `rightBegin` | `rightEnd` | D or → |
| `up` | `upBegin` | `upEnd` | W or ↑ |
| `down` | `downBegin` | `downEnd` | S or ↓ |
| `primary` | `primaryBegin` | `primaryEnd` | LMB, Return |
| `back` | `backBegin` | `backEnd` | X |
| `ability1` | `ability1Begin` | `ability1End` | Shift |
| `ability2` | `ability2Begin` | `ability2End` | Control |
| `bumpL` | `bumpLBegin` | `bumpLEnd` | Z |
| `bumpR` | `bumpRBegin` | `bumpREnd` | C |

## Example — Rogue-like movement

Move an `@` symbol across the screen like a classic Rogue-like character. The `Begin` variants ensure movement only steps once per key press:

```
var x = 0
var y = 0

?key = leftBegin
  x--
?x < 0
  x = 0

?key = rightBegin
  x++

?key = upBegin
  y--
?y < 0
  y = 0

?key = downBegin
  y++

>`@x@,@y@,#ffffff,@
```

## Rebinding keys

Keys can be rebound at runtime using the [`key` namespace](/reference/native-functions/key). This lets scripts reassign any action to any key:

```
?loc.begin
  key.Bind("Potion", "P")
// Now P activates the potion instead of pausing
```

## See also

- [`key` namespace](/reference/native-functions/key) — `key.Bind`, `key.GetKeyAct`, `key.ResetBinds`, and the full action/key table
- [Game State — `?key`](/reference/game-state) — how `key` appears in conditional expressions
