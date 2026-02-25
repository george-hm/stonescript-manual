# Tips

Practical tips and notes for writing Stonescript effectively.

## General tips

- **Indentation matters.** The space (indent) before a line defines what runs as a result of a `?` condition (scope). Getting indentation wrong is a common source of bugs.
- **The script runs 30 times per second** — once per frame. Every line at the root scope executes on every frame.
- **Last `equip` wins.** If multiple `equip` commands are called in a single frame, whichever comes last takes effect.
- **Edit mid-run.** The script can be changed in the middle of a run by pressing `M` on your keyboard.
- **Power toggle.** The Power button in the top-right of the Mind Stone turns the script ON/OFF without clearing it.

## Debugging

- **Hold Tab** in-game to see a lot of information about current game state, and a list of recent Stonescript errors.
- Use `>@varName@` to print any variable value to the screen for debugging.
- Use `` >`0,0, `` for a stable screen-space position that won't move with the player.

## Text editing

- For longer scripts it is strongly recommended to copy the script into an external text editor such as Notepad, VS Code, or any editor of your choice.
- Common shortcuts work: `Ctrl+A`, `Ctrl+C`, `Ctrl+V`.
- A print command can span multiple lines using `\n` in the text, or using the `^` line-continuation character.

## Default script

Stone Story RPG ships with this default starter script:

```
import UI/MindstoneButton
?hp < 7
  activate potion
?loc = caves
  equipL sword
  equipR shield
?foe = boss
  equip crossbow
```

It imports the MindstoneButton UI, uses a potion when health is critical, and equips a basic loadout for Caves of Fear with a crossbow swap for bosses.

## See also

- [Getting Started](/guide/getting-started) — introduction and first example
- [Basics](/guide/basics) — `?`, `:`, `:?`, `^`, comments
- [Game State](/reference/game-state) — everything you can query
- [Commands](/reference/commands) — everything you can do
