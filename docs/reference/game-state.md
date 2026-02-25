# Game State

::: tip New to Stonescript?
If you're just getting started, head to the [Getting Started guide](/guide/getting-started) first. The reference section assumes you already know the basics.
:::

Game state variables let you query what's happening in the current run. They are used with the `?` condition operator.

## Location

### `loc`
The current location the player is visiting.

```stonescript
?loc = caves
  loadout 1
```

### `loc.id`
The unique identifier of the current location.

```stonescript
var id
id = loc.id
>Exploring @id@
```

### `loc.name`
The localized name of the current location.

```stonescript
>Exploring @loc.name@
```

### `loc.stars`
The current location's difficulty (star level).

```stonescript
?loc = caves
  ?loc.stars = 4
    loadout 1
  ?loc.stars = 5
    loadout 2
```

### `loc.gp`
The total gear power used during the current run.

```stonescript
>`0,1,Run GP = @loc.gp@
```

### `loc.begin`
True only on the **first frame** of a location (when `time = 0`), before any simulation has run. Not true after an Ouroboros loop. Useful for resetting variables.

```stonescript
var i
?loc.begin
  i = 0
?loc = caves
  i = -100
```

### `loc.loop`
True on the first frame of a run after an Ouroboros loop.

```stonescript
var loopCount = 0
?loc.loop
  loopCount++
```

### `loc.isQuest`
True if the current location is a special location from a Legend or custom quest.

```stonescript
?loc.isQuest
  >`0,1,We're in a special quest location
```

### `loc.averageTime`
The current location's average completion time, weighted toward recent runs.

```stonescript
>`0,2,Average time = @loc.averageTime@ frames
```

### `loc.bestTime`
The current location's best completion time (your personal record).

```stonescript
>`0,1,Best time = @loc.bestTime@ frames
```

---

## Encounter

### `encounter.isElite`
True if the current encounter is an elite encounter.

```stonescript
>`0,1,Elite = @encounter.isElite@
```

### `encounter.eliteMod`
The special modifier for the current encounter, if any.

```stonescript
>`0,2,Modifier = @encounter.eliteMod@
```

---

## Foe

### `foe`
The current foe being targeted by the player.

```stonescript
?foe = boo
  equip vigor staff
```

### `foe.id`
The unique ID (type) of the targeted foe.

### `foe.name`
The localized name of the targeted foe.

### `foe.hp` / `foe.maxhp`
Current and maximum hitpoints of the targeted foe.

### `foe.armor` / `foe.maxarmor`
Current and maximum armor of the targeted foe.

### `foe.damage`
The damage per attack of the targeted foe.

```stonescript
>`0,1,foe damage = @foe.damage@
```

### `foe.distance`
Distance between the player and the targeted foe.

### `foe.z`
The Z position of the targeted foe.

### `foe.count`
Number of foes within 46 units of the player.

### `foe.GetCount(int)`
Number of foes within a specific number of units.

### `foe.state` / `foe.time`
A number representing the foe's current state, and elapsed frames within that state.

```stonescript
>`0,0,Foe = @foe.name@:@foe.state@,@foe.time@
```

### `foe.level`
The level of the targeted foe.

```stonescript
>`0,0,Foe = @foe.name@ is level @foe.level@
```

### `foe.buffs.count` / `foe.buffs.string`
Number of buffs on the foe and a composite string describing them.

```stonescript
?foe.buffs.count > 0
  >`0,3,Foe buffs = @foe.buffs.string@
```

### `foe.buffs.GetCount(str)` / `foe.buffs.GetTime(str)`
Count and duration of a specific buff on the foe.

### `foe.debuffs.count` / `foe.debuffs.string`
Number of debuffs on the foe and a composite string describing them.

### `foe.debuffs.GetCount(str)` / `foe.debuffs.GetTime(str)`
Count and duration of a specific debuff on the foe.

```stonescript
>`0,1,Chill debuff count = @foe.debuffs.GetCount("debuff_chill")@
```

---

## Player

### `hp` / `maxhp`
The player's current and maximum hitpoints.

```stonescript
?hp < 10
  activate potion
```

### `armor` / `armor.f`
The player's current armor (rounded down) and its fractional part.

```stonescript
// If armor shows [2.4]: armor = 2, armor.f = 4
```

### `maxarmor`
The player's maximum armor, rounded down.

### `pos.x` / `pos.y` / `pos.z`
The player's current position.

### `buffs.count` / `buffs.string`
Number of buffs on the player and a composite description.

```stonescript
?buffs.count > 0
  >`0,1,Player buffs = @buffs.string@
```

### `buffs.GetCount(str)` / `buffs.GetTime(str)`
Count and duration of a specific buff on the player.

### `buffs.oldest`
The ID of the oldest buff on the player.

### `debuffs.count` / `debuffs.string` / `debuffs.GetCount(str)` / `debuffs.GetTime(str)`
Same as buffs, but for negative effects.

### `debuffs.oldest`
The ID of the oldest debuff on the player.

### `player.direction`
Direction the player is facing. `1` = right, `-1` = left.

```stonescript
?player.direction = 1
  >`0,0,Walking right
:
  >`0,0,Walking left
```

### `player.name`
The name chosen by the player.

```stonescript
var name
var x
name = player.name
x = string.Size(name) / -2
>o@x@,-2,@name@
```

### `player.framesPerMove`
The number of frames it takes the player to move one position forward.

### `player.moveX` / `player.moveZ` / `player.moveAddX` / `player.moveAddZ`
Information about the player's current movement speed and accumulated steps.

### `player.GetNextLegendName()`
The next unlocked Legend quest the player hasn't completed yet.

---

## Items

### `item.left` / `item.right`
The item equipped to the left or right hand.

```stonescript
>`0,1,Left:@item.left@
>`0,2,Right:@item.right@
```

### `item.left.gp` / `item.right.gp`
Gear power value of the equipped item.

### `item.left.id` / `item.right.id`
ID of the equipped item.

### `item.left.state` / `item.left.time` / `item.right.state` / `item.right.time`
The current state and elapsed frames of the equipped weapon's animation state.

### `item.potion`
The currently brewed potion. Includes `"auto"` if auto-refill is enabled.

```stonescript
?item.potion ! empty & item.potion = auto
  activate potion
```

---

## Harvest

### `harvest`
The next harvestable object (tree, boulder, etc).

```stonescript
?harvest = Boulder
  equip shovel
```

### `harvest.distance` / `harvest.z`
Distance and Z position of the nearest harvestable object.

---

## Pickup

### `pickup`
The current pickup being targeted.

```stonescript
?pickup
  equip star stone
:
  loadout 1
```

### `pickup.distance` / `pickup.z`
Distance and Z position of the targeted pickup.

---

## Summons

### `summon.count`
Number of summoned allies currently in the game.

```stonescript
?summon.count = 0 & item.CanActivate()
  equipL talisman
  activate L
```

### `summon.GetId(index?)` 
Returns the ID of the summon at a given index (default 0). Returns `null` if none.

### `summon.GetName(index?)`
Returns the localized name of the summon at a given index.

### `summon.GetVar(varName, index?)`
Returns a custom variable exposed by the summon type.

```stonescript
?summon.GetId() = cinderwisp & summon.GetVar("ignition") > 2
  activate cinderwisp
```

### `summon.GetState(index?)` / `summon.GetTime(index?)`
The current state and elapsed frames of the summon.

---

## AI

### `ai.enabled`
True if the AI is on. False during cinematics and similar moments.

### `ai.paused`
True if the AI is temporarily suspended (e.g. waiting for treasure).

### `ai.idle`
True if the player is idle, waiting for something to complete.

### `ai.walking`
True if the player is currently moving.

---

## Input

### `input.x` / `input.y`
The X and Y position of the input device (mouse/touch) on the ASCII grid.

```stonescript
>(@input.x@, @input.y@)
```

---

## Resources

### `res.stone` / `res.wood` / `res.tar` / `res.ki` / `res.bronze` / `res.crystals`
The player's current inventory amounts of each resource.

```stonescript
?loc = Deadwood
  >Wood = @res.wood@
>`0,1,#magenta,♦ @res.crystals@
```

---

## Screen

### `screen.i`
The screen's position index (increases when the player reaches the right edge).

### `screen.x`
The screen's absolute X position in the game world.

### `screen.w` / `screen.h`
Width and height of the ASCII grid.

```stonescript
var sw = screen.w
>Screen width = @sw@
```

---

## Misc

### `totalgp`
The total gear power of your inventory.

```stonescript
>My gear power = @totalgp@
```

### `time`
The current frame number of the location.

```stonescript
?time % 300 = 0
  >Every 10 seconds you'll see this
```

### `totaltime`
The current frame number, accumulated across boss sub-locations.

### `time.msbn`
Unix timestamp in milliseconds, as a [BigNumber](/reference/native-functions/bignumber).

### `time.year` / `time.month` / `time.day` / `time.hour` / `time.minute` / `time.second`
Local system time on the player's computer.

### `utc.year` / `utc.month` / `utc.day` / `utc.hour` / `utc.minute` / `utc.second`
Current UTC time.

### `rng`
Returns a random integer between `0` and `9999`.

```stonescript
?rng < 5000
  >Heads!
:
  >Tails!
```

### `rngf`
Returns a random floating-point number between `0.0` and `1.0`.

### `key`
The state of custom game input. See [Custom Input](/guide/custom-input).

### `face`
The player's current facial expression.

```stonescript
?face = "^^"
  >Happy
```

### `bighead`
True if the player has Big Head mode enabled (Moondial).
