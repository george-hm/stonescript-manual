# Importing Scripts

Stonescript can load and execute external `.txt` script files stored on your device (or hosted remotely). This lets you split complex scripts into reusable modules.

## `import`

Loads and executes a **singular shared copy** of an external script. If the same script is imported multiple times across multiple scripts, only one instance is created and shared.

```
// Imports Fishing.txt from your Stonescript save folder
import Fishing
```

Script files live in your save-file folder under `Stonescript/`. For example on PC:
`%APPDATA%/StoneStoryRPG/Stonescript/Fishing.txt`

## `new`

Loads and executes an external script similar to `import`, but each call to `new` creates a **separate, independent copy**. The script body only executes once per instance. Use `new` for object-like modules that hold their own state.

```
// Creates a new Vector object instance
var v = new Components/Vector
v.Init(10, 5)
>Vector = @v@
```

## Variable isolation

Variables declared inside an imported script are **isolated** to that script. Their names won't collide with variables or functions in the importing script or other imports.

## Changing the file source

By default, scripts are loaded from your local drive. You can change the import origin with [`sys.SetFileUrl()`](/reference/native-functions/sys):

```
sys.SetFileUrl("https://MyCoolDomain.com/scripts/")
import MyCombatScript
```

Use the string `"local"` or `"remote"` as shortcuts:
- `"local"` — your device's Stonescript folder
- `"remote"` — the official Stone Story RPG script repository

## Remote caching

When loading scripts from a URL, they are cached between runs by default. To disable caching during development so files re-download each time:

```
?key = upBegin
  sys.cacheRemoteFiles = !sys.cacheRemoteFiles
?sys.cacheRemoteFiles
  >Remote caching ENABLED
:
  >Remote caching DISABLED
```

See [`sys.cacheRemoteFiles`](/reference/native-functions/sys) for details.

## Official importable scripts

Stone Story RPG ships with a large library of ready-to-use scripts — games, pets, hats, UI tools, and more. See the full list in [Appendix E — Importable Scripts](/appendix/importable-scripts).

```
// A few examples
import UI/MindstoneButton
import Pets/Dog
import Games/Snake
import Hats/WitchHat
```
