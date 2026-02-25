# ambient

The `ambient` namespace controls layered background audio. Up to **4 layers** can play simultaneously. Adding a 5th layer removes the oldest one.

See [Appendix D — Ambient Loops](/appendix/ambient) for the full list of ambient sound IDs.

## ?ambient

**Returns:** `string`

Returns a comma-separated list of all currently active ambient audio IDs.

```stonescript
>`0,0,Ambient Layers = @ambient@
```

## ambient.Add(str)

**Returns:** nothing

Adds a layer of ambient audio with the given sound ID.

```stonescript
?loc.begin
  ambient.Add(ambient_crypt)
```

## ambient.Stop()

**Returns:** nothing

Clears all ambient layers.

```stonescript
?time = 3
  ambient.Stop()
  ambient.Add(ambient_mines)
```

## Example — location-based ambience

```stonescript
?loc.begin
  ambient.Stop()
  ?loc = caves
    ambient.Add(ambient_caves)
  :?loc = temple
    ambient.Add(ambient_temple)
  :
    ambient.Add(ambient_rocky)
```
