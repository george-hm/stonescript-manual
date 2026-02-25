# Commands

Commands tell the game to do something. They are executed each frame the line runs.

## Equipment

### `equip (criteria)`

Equips an item (both hands for two-handed items). Accepts up to 7 space-separated criteria.

```
equip vigor crossbow *8 +5
```

### `equipL (criteria)`

Equips an item to the **left hand**.

```
equipL poison d_sword
```

### `equipR (criteria)`

Equips an item to the **right hand**.

```
equipR vigor shield
```

### `equip @var@`

Equips an item based on criteria stored in a string variable. Supports **subtractive criteria** using a `-` prefix.

```
var weaponName = "poison sword *10 -big"
equipR @weaponName@
```

### `loadout (n)`

Equips a specific saved loadout number.

```
?loc = caves
  loadout 1
?loc = deadwood
  loadout 2
```

## Abilities

### `activate (ability)`

Activates an item ability. Valid values: `potion`, `P`, `left`, `L`, `right`, `R`. Also accepts ability IDs from [Appendix A](/appendix/ability-ids).

```
activate R
// activates the ability of the item on the right hand
```

## Potions

### `brew (ingredients)`

Refills the potion bottle. Only executes at `time = 0` (the start of a run). Ingredients are `stone`, `wood`, `tar`, or `bronze`, separated by `+`. Ingredient names can be written in English or in the language selected in the game settings.

```
?loc.begin
  brew bronze + tar
```

## Print commands {#print-commands}

### `> (str)`

Prints a string to the top of the screen.

```
>Hello World!
```

### `> @varName@`

Prints a string with variable values inserted. Surround the variable name with `@`.

```
var foeInfo
foeInfo = foe
>FOE = @foeInfo@
```

### `>(abcd`

Shows a custom facial expression. Requires Big Head (Moondial).

```
>( OwO
```

### `>oX,Y,[#color,](str)`

Advanced print **relative to the player's position**. X and Y are offsets.

```
>o-6,3,#red,Let's go!
```

### `>hX,Y,[#color,](str)`

Advanced print on the **Big Head layer** — ideal for accessories like hats.

```
>h-2,-3,#yellow,ascii
##_
#| |
_|_|_
asciiend
```

### `` >`X,Y,[#color,](str) ``

Advanced print **relative to the screen's top-left corner**.

```
var posX = 10
var posY = 5
var color = rainE1
>`@posX@,@posY@,#@color@,Hello World!
```

### `>cX,Y,[#color,](str)`

Advanced print **relative to the centre of the screen**. Color is optional.

```
>c0,0,Hello World!
```

### `>fX,Y,[#color,](str)`

Advanced print **relative to the target foe's head position**.

```
>f-2,0,#ff0000,ascii
##!
-#·#-
##¡
asciiend
```

Color constants: `#white`, `#cyan`, `#yellow`, `#green`, `#blue`, `#red`.
Hex color: `#rrggbb`. Rainbow: `#rainFF` (last 2 hex digits = brightness).

## Variables & functions

### `var (name) [= value]`

Declares a variable. See [Variables](/guide/variables) for lifecycle and scope details.

```
var message = Hello World!
>@message@
```

### `func (name)([params])`

Declares a function. See [Functions](/guide/functions) for full details.

```
func Print(message)
  >@message@

Print(Hello World!)
```

### `for v = a..b`

Creates a loop. See [Loops](/guide/loops).

```
var a = 0
for i = 1..5
  a = a + i
>a = @a@
```

### `import (script)`

Loads a shared external script. See [Importing Scripts](/guide/importing).

```
import Fishing
```

### `new (script)`

Loads an independent copy of an external script. See [Importing Scripts](/guide/importing).

```
var v = new Components/Vector
v.Init(10, 5)
>Vector = @v@
```

## Audio

### `play (sound) [pitch]`

Plays a [sound effect](/appendix/sound-effects). Optional `pitch` parameter (default `100`; higher = higher pitch).

```
?key = primary
  play buy

// Random pitch example
var pitch
?time%30 = 0
  pitch = rng/100 + 50
  play buy @pitch@
```

## HUD & UI toggles

### `disable abilities` / `enable abilities`

Prevents or restores activation of potion and weapon abilities. Also greys out HUD buttons.

### `disable banner` / `enable banner`

Prevents or restores the location name banner at the start and end of a run.

### `disable hud [opts]` / `enable hud [opts]`

Hides or shows gameplay UI elements. Optional flags:

| Flag | Element |
|------|---------|
| `p` | Player health and debuffs |
| `f` | Foe health and debuffs |
| `a` | Ability buttons |
| `r` | Resources |
| `b` | Banner |
| `u` | Utility belt |

```
disable hud       // Disables all HUD elements
disable hud ru    // Disables only resources and utility belt
```

### `disable loadout input` / `enable loadout input`

Prevents or restores saving/recalling weapon loadouts with input keys.

### `disable loadout print` / `enable loadout print`

Hides or shows the message that appears when a loadout is recalled.

### `disable npcDialog` / `enable npcDialog`

Hides/auto-skips or restores NPC dialog bubbles.

### `disable pause` / `enable pause`

Hides or shows the pause button. Pause is still available with the `P` shortcut.

### `disable player` / `enable player`

Hides or shows the player character (cosmetic only, no effect on combat).
