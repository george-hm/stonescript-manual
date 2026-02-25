# time

The `time` namespace provides functions for formatting frame counts into human-readable durations.

Time values in Stonescript are measured in **frames** (the game runs at 30 frames per second). The `?time` and `?totaltime` game state variables give the current frame count of a run.

Unix timestamp and local/UTC clock values are also available as [game state](/reference/game-state) variables (`time.msbn`, `time.year`, `time.month`, `time.day`, `time.hour`, `time.minute`, `time.second`, and the `utc.*` equivalents).

## time.FormatCasual(int) → string
## time.FormatCasual(int, bool) → string

Converts a frame count to a human-readable casual string such as `"1m 23s"`.

The optional second parameter (`bool`) maximises precision when `true`.

```stonescript
>`0,0,Current time =
^ @time.FormatCasual(totaltime, true)@
```

## time.FormatDigital(int) → string
## time.FormatDigital(int, bool) → string

Converts a frame count to a digital clock string such as `"1:23"`.

The optional second parameter (`bool`) maximises precision when `true`.

```stonescript
>`0,0,Current time =
^ @time.FormatDigital(totaltime, true)@
```

## Game-state time properties

These are accessed as game state rather than function calls:

| Variable | Description |
|----------|-------------|
| `time.msbn` | Unix timestamp in milliseconds (returns a [BigNumber](./bignumber)) |
| `time.year` | Local year |
| `time.month` | Local month |
| `time.day` | Local day |
| `time.hour` | Local hour |
| `time.minute` | Local minute |
| `time.second` | Local second |
| `utc.year` … `utc.second` | UTC equivalents of the above |

```stonescript
>`0,0,@time.year@/@time.month@/@time.day@
^ @time.hour@:@time.minute@:@time.second@
```
