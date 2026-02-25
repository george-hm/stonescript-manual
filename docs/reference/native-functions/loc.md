# loc

The `loc` namespace provides functions for controlling the current run.

## loc.Leave()

**Returns:** nothing

Abandons the current run, as if the player had pressed the Leave button manually.

```stonescript
// Auto-leave when inventory is full
?item.GetTreasureCount() >= item.GetTreasureLimit()
  loc.Leave()
```

## loc.Pause()

**Returns:** nothing

Pauses the current run, as if the player had pressed the Pause button manually.

```stonescript
// Auto-pause on low HP
?hp < 3
  loc.Pause()
```

## See also

- [`?loc` game state](/reference/game-state) — location queries (`loc.stars`, `loc.begin`, `loc.loop`, etc.)
- [`loc.Leave` / `loc.Pause`](/reference/commands) — the related `disable pause` command
