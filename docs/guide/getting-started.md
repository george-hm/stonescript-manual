# Getting Started

Stonescript is a minimalistic scripting language built into the **Mind Stone** in [Stone Story RPG](https://StoneStoryRPG.com). It runs 30 times per second and lets you automate your equipment choices, abilities, and UI.

::: tip New to Stonescript?
Start with the [Introduction to the Mind Stone](https://stonestoryrpg.com/stonescript) interactive tutorial, then come back here for the full reference.
:::

## A Full Example

This script demonstrates most of what Stonescript can do in just a few lines:

```stonescript
// Equips the Shovel for Rocky Plateau.
// In Caves of Fear it equips loadout 1,
// except against the boss, where the
// Grappling Hook and a 7 star War Hammer are used.
// For Haunted Halls it uses two Wands.
// Potion activates if hitpoints fall below 10.

?loc=rocky
  equip shovel
?loc=cave
  loadout 1
  ?foe=bolesh
    equip grap
    equip hammer *7 D
?loc=halls
  equipL poison wand
  equipR vigor wand
  ?loc.stars > 5
    equip vigor staff +13
?hp < 10
  activate potion
```

## How It Works

The script runs **every frame** (30fps). Each `?` line evaluates a condition — if true, the indented lines below it execute. This makes it easy to build layered logic:

```stonescript
?loc = caves       // if in Caves of Fear...
  loadout 1        //   use loadout 1
```

See the [Basics](/guide/basics) page for a full breakdown of conditions, branching, and indentation rules.

## Key Concepts

| Concept | Where to learn |
|---|---|
| `?` `:`  `:?` conditions | [Basics](/guide/basics) |
| `var` variables | [Variables](/guide/variables) |
| `func` functions | [Functions](/guide/functions) |
| `for` loops | [Loops](/guide/loops) |
| Arrays `[]` | [Arrays](/guide/arrays) |
| `import` / `new` | [Importing Scripts](/guide/importing) |
| `equip`, `activate`, `>` | [Commands](/reference/commands) |
| `loc`, `foe`, `hp` | [Game State](/reference/game-state) |

## The Mind Stone

- The script can be edited mid-run by pressing **M**
- The power button in the top-right turns the script **ON/OFF**
- Holding **Tab** in-game shows game state values and recent errors
- Common shortcuts like **Ctrl+A**, **Ctrl+C**, **Ctrl+V** work in the editor
