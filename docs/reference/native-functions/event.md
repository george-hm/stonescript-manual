# event

The `event` namespace provides access to active objectives in community or seasonal events.

Events typically have up to **3 active objectives** at a time, so valid index values are `0`, `1`, and `2`.

## event.GetObjectiveId(int) → string

Returns the string identifier of the objective at the given index.

## event.GetObjectiveProgress(int) → int

Returns the player's current progress toward the objective at the given index.

## event.GetObjectiveGoal(int) → int

Returns the total goal value for the objective at the given index.

## Example

```stonescript
var id
var p
var g
id = event.GetObjectiveId(0)
p  = event.GetObjectiveProgress(0)
g  = event.GetObjectiveGoal(0)
>`0,1,@id@:@p@/@g@
```

This prints something like:

```
kill_10_bears:7/10
```
