# item

The `item` namespace provides functions for querying items: activation state, cooldowns, inventory counts, loadout contents, and treasure chest capacity.

See [Appendix A — Ability Cooldown IDs](/appendix/ability-ids) for the full list of ability ID strings.

## item.CanActivate() → boolean

Returns `true` if item abilities can be activated right now. Some game moments (cinematic sequences, pre-boss countdown) disable all activations even when cooldowns are ready.

```stonescript
?item.CanActivate()
  equip Bardiche
  activate R
```

## item.CanActivate(str) → boolean

Returns `true` if a specific item (by ability ID string) can be activated. The item must be equipped. This is a subset of `item.GetCooldown()` — an item may have zero cooldown but still be inactivatable.

```stonescript
equip bardiche
?item.GetCooldown("skeleton_arm") <= 0
  equip skeleton arm
?item.CanActivate("skeleton_arm")
  activate R
```

## item.GetCooldown(str) → integer

Returns the remaining cooldown in frames for the given ability ID string. Returns `-1` for invalid IDs or abilities not yet used.

```stonescript
?foe = boss & item.GetCooldown("bardiche") <= 0
  equip bardiche
  activate R
```

## item.GetCount(str) → integer

Returns the number of copies of an item matching the search criteria in your inventory. Returns `0` if none found. Accepts the same [search filter](/reference/search-filters) syntax as `equip`.

```stonescript
var searchCriteria = "sword *0 -big -socket"
var swordCount = item.GetCount(searchCriteria)
>I have @swordCount@ basic swords
```

## item.GetLoadoutL(int) → string

Returns the item stored in the **left** slot of the specified loadout number. Returns an empty string if the slot is empty.

## item.GetLoadoutR(int) → string

Returns the item stored in the **right** slot of the specified loadout number.

```stonescript
>`0,1,Left:  @item.GetLoadoutL(1)@
>`0,2,Right: @item.GetLoadoutR(1)@
```

## item.GetTreasureCount() → integer

Returns the current number of treasure chests in your inventory.

## item.GetTreasureLimit() → integer

Returns the maximum capacity for treasure chests.

```stonescript
var trs = item.GetTreasureCount()
var max = item.GetTreasureLimit()
>`0,2,Treasures: @trs@/@max@
```
