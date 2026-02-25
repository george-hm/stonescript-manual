# Ambient Loops

Stonescript can layer background ambient audio using [`ambient.Add()`](/reference/native-functions/ambient). Up to **4 layers** can play simultaneously.

## Example

```stonescript
?loc.begin
  ambient.Stop()
  ambient.Add(ambient_crypt)
```

## Full ambient ID list

```
ambient_mines
ambient_caves
ambient_bronze_gate
ambient_deadwood
ambient_mushroom
ambient_bridge
ambient_icy
ambient_cave
ambient_rocky
ambient_temple
ambient_crypt
ambient_haunted_gate
ambient_pallas
waterfall_a
waterfall_b
waterfall_c
```
