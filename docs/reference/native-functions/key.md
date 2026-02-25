# key

The `key` namespace allows rebinding of standard game actions to different keys. It is based on **actions** (named intents like `Potion` or `Left`) and **keys** (physical key names from Unity's [KeyCode enum](https://docs.unity3d.com/ScriptReference/KeyCode.html)).

Binding changes persist between runs but do not save to [storage](./storage). For performance, avoid rebinding every frame.

## Default action bindings

| Action | Default Key | Default Key 2 |
|--------|-------------|----------------|
| Pause | P | Space |
| Leave | L | |
| Inventory | I | |
| Mindstone | M | |
| Potion | Q | |
| ItemLeft | E | |
| ItemRight | R | |
| Up | W | UpArrow |
| Down | S | DownArrow |
| Left | A | LeftArrow |
| Right | D | RightArrow |
| Primary | Return | KeypadEnter |
| Back | X | |
| Ability1 | LeftShift | RightShift |
| Ability2 | LeftControl | RightControl |
| BumpL | Z | |
| BumpR | C | |
| Dynamic1 | F | |
| Dynamic2 | T | |
| Dynamic3 | G | |
| Dynamic4 | V | |
| Dynamic5 | B | |

## key.Bind(act, key1) / key.Bind(act, key1, key2)

**Returns:** nothing

Assigns up to two keys to an action. If either key is already bound to a different action, it is released from that action.

```stonescript
?loc.begin
  key.Bind("Potion", "P")
// "P" now activates Potion instead of Pause.
// The original "Q" key is unbound.
```

## key.GetKeyAct(key) → string

Returns the action currently bound to a given key. Returns `"None"` if the key is not bound.

## key.GetActKey(act) → string

Returns the first key bound to a given action. Returns `"None"` if no key is bound.

## key.GetActKey2(act) → string

Returns the second key bound to a given action. Returns `"None"` if there is no secondary key.

## key.GetActLabel(act) → string

Returns a short user-facing label for the first key bound to an action (currently the first letter of the key name).

## key.ResetBinds()

**Returns:** nothing

Resets all actions to their default key bindings.

## Example — swap Potion and Pause keys

```stonescript
?loc.begin
  key.Bind("Pause",  "Q")
  key.Bind("Potion", "P")
```

## See also

- [Custom Input guide](/guide/custom-input) — `?key` game-state codes and `keyBegin` / `keyEnd` variants
