# player

The `player` namespace exposes cosmetic functions for the player character.

Most player **state** (position, HP, direction, name, etc.) is available through [game state variables](/reference/game-state) rather than this namespace.

## player.ShowScaredFace(num)

**Returns:** nothing

If the player has **Big Head** mode enabled, changes their facial expression to scared for a given amount of time.

```stonescript
?key = primaryBegin
  player.ShowScaredFace(1)
```

## See also

- [`?player.direction`](/reference/game-state) — which way the player is facing
- [`player.name`](/reference/game-state) — the player's chosen name
- [`player.framesPerMove`](/reference/game-state) — movement speed
- [`player.moveX` / `player.moveZ`](/reference/game-state) — movement deltas
- [`draw.Player()`](./draw) — draw the player sprite at an arbitrary position
