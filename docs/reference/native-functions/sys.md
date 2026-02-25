# sys

The `sys` namespace controls import configuration and provides platform detection.

::: warning
The sys namespace is not fully functioning as intended at the moment.
:::

## sys.cacheRemoteFiles — boolean (read/write)

Controls whether remotely imported files are cached between runs. Default is `true`. Set to `false` during development to force a re-download on each run start. This setting persists between runs.

```stonescript
// Toggle remote caching with the Up key
?key = upBegin
  sys.cacheRemoteFiles = !sys.cacheRemoteFiles
?sys.cacheRemoteFiles
  >Remote caching ENABLED
:
  >Remote caching DISABLED
```

## sys.fileUrl — string (read-only)

The current base URL used when resolving `import` and `new` paths. Defaults to `local` on PC and `https://StonestoryRPG.com/stonescript/` on mobile.

```stonescript
>`0,1,fileUrl = @sys.fileUrl@
```

## sys.SetFileUrl(str)

**Returns:** nothing

Changes the base URL for subsequent `import` / `new` commands. Can only be called from the Mind Stone itself (not from an imported script).

Special values:
- `"local"` — use the local save-file folder
- `"remote"` — use the official Stone Story RPG repository
- `null` — reset to the device default

```stonescript
sys.SetFileUrl("https://MyCoolDomain.com/scripts/")
import MyCombatScript
```

## sys.MindConnect()

**Returns:** nothing

*(Experimental)* Enables an external connection interface. Must be the **only** line in the Mind Stone. Once connected, external programs can run Stonescript commands and read game state. See [SSRPGInterface](https://github.com/artificial-potato/SSRPGInterface) for details.

## sys.isMobile — bool

Returns `true` if the player is on Android or iOS.

## sys.isPC — bool

Returns `true` if the player is on Windows, Mac, or Linux.

## sys.os — string

Returns the operating system name: `"Android"`, `"iOS"`, `"Linux"`, `"OSX"`, or `"Windows"`.

```stonescript
?sys.isMobile
  >Playing on @sys.os@
:
  >Playing on PC (@sys.os@)
```
