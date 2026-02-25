# User Interface

Stonescript provides a system for building complex layouts and high-performance User Interfaces — buttons, text, animations, and more — drawn directly on the game screen.

## Structure

An invisible **root Panel** exists by default at the base of the system. UI elements are added to the root Panel, including additional Panels, forming a tree:

```
root
│
├─ Panel
│  ├─ Text
│  ├─ ASCII-art (Anim)
│  └─ Button
│
├─ Panel
│  └─ Panel
│     └─ Text
...
```

All elements are drawn together, in a single pass, in the order they are added.

## `ui` namespace

| Function | Returns | Description |
|----------|---------|-------------|
| `ui.root` | Panel | The base Panel at the root of the UI tree |
| `ui.AddAnim(string)` | Anim | Adds an Anim object to the root Panel |
| `ui.AddButton()` | Button | Adds a Button to the root Panel |
| `ui.AddCanvas()` | Canvas | Adds a Canvas to the root Panel |
| `ui.AddPanel()` | Panel | Adds a Panel to the root Panel |
| `ui.AddStyle()` | int | Registers a new border style, returns its ID |
| `ui.AddText()` / `ui.AddText(string)` | Text | Adds a Text element to the root Panel |
| `ui.Clear()` | — | Removes all UI elements |
| `ui.OpenInv()` | — | Opens the inventory screen |
| `ui.OpenMind()` | — | Opens the Mind Stone screen |
| `ui.ShowBanner(str)` / `ui.ShowBanner(str, str)` | — | Displays the animated location banner with up to two messages |

## Component (base type)

All UI types — Panel, Text, Button, Anim — inherit these properties:

| Property | Type | Description |
|----------|------|-------------|
| `component.x` | int | X position relative to docked position |
| `component.y` | int | Y position relative to docked position |
| `component.w` | int | Width |
| `component.h` | int | Height (default 5) |
| `component.absoluteX` / `.absoluteY` | int (read-only) | Position relative to the screen |
| `component.anchor` | string | Internal pivot. Default `"center_center"` |
| `component.dock` | string | External pivot / position inside parent. If unsure, use same value as anchor |
| `component.ax` / `.ay` | string | X/Y part of anchor: `left`, `center`, `right` / `top`, `center`, `bottom` |
| `component.dx` / `.dy` | string | X/Y part of dock |
| `component.parent` | Panel (read-only) | Reference to the parent Panel |
| `component.visible` | bool/string | Visibility. Default `"inherit"`. Values: `true`, `false`, `"inherit"` |
| `component.Recycle()` | — | Removes the component; it will be repurposed in future `ui.Add_()` calls |

## Panel

A container for other UI elements.

| Property / Method | Type | Description |
|-------------------|------|-------------|
| `panel.children` | Component[] | Array of child components |
| `panel.clip` | bool | Clip child components to the Panel's bounds |
| `panel.color` | string | Panel background color (hex) |
| `panel.style` | int | Border style ID, default `1`, range `-8` to `8` |
| `panel.Add(Component)` / `panel.Add(Component, int)` | — | Adds a component to this Panel |
| `panel.Clear()` | — | Removes all children (recycled) |
| `panel.Remove(Component)` / `panel.Remove(int)` | — | Removes a specific child (recycled) |

## Text

| Property | Type | Description |
|----------|------|-------------|
| `text.align` | string | Alignment: `"left"` (default), `"center"`, `"right"` |
| `text.color` | string | Text color (hex) |
| `text.lines` | string[] | Array of rendered lines (excludes color metadata) |
| `text.text` | string | Full text content. Supports color tags: `[color=#rrggbb]...[/color]` |

## Button

| Property / Method | Type | Description |
|-------------------|------|-------------|
| `button.text` | string | Label inside the button |
| `button.tcolor` | string | Text color (hex) |
| `button.bcolor` | string | Border color (hex) |
| `button.hcolor` | string | Highlight color when pressed (hex) |
| `button.sound` | string | Sound when pressed, default `"confirm"` |
| `button.style` | int | Border style ID, default `1`, range `-8` to `8` |
| `button.SetPressed(f)` | — | Function called when button is pressed; receives the button as first arg |
| `button.SetDown(f)` | — | Function called on first contact (press begins) |
| `button.SetUp(f)` | — | Function called when depress ends on top of the button |

## Anim

ASCII sprite-sheet animations.

| Property / Method | Type | Description |
|-------------------|------|-------------|
| `anim.color` | string | Tint color (hex) |
| `anim.duration` | int | Animation length in frames |
| `anim.flipX` / `.flipY` | bool | Flip art horizontally / vertically |
| `anim.frame` | int | Current animation frame |
| `anim.gamePause` | bool | If `true`, auto-pauses when game is paused |
| `anim.loop` | bool | Restart from the beginning when finished |
| `anim.playing` | bool (read-only) | `true` if currently playing |
| `anim.paused` | bool (read-only) | `true` if playing but paused via `anim.Pause()` |
| `anim.pivotX` / `.pivotY` | int | Additional pivot offset |
| `anim.playOnStart` | bool | Begin playing as soon as possible |
| `anim.AddLayer(string)` | Anim | Adds a new ASCII sprite on top; all layers stay in sync |
| `anim.Load(string)` | — | Assigns a new ASCII sprite sheet |
| `anim.Pause()` | — | Suspends playback at current frame |
| `anim.Play()` | — | Begins or resumes playback |
| `anim.Stop()` | — | Suspends playback and resets to first frame |

## Canvas

A component optimised for drawing arbitrary glyphs and colors at specific positions.

| Property / Method | Type | Description |
|-------------------|------|-------------|
| `canvas.blend` | string | Blend mode: `Opaque`, `Multiply`, `Divide`, `Add`, `Subtract`. Default `"opaque"` |
| `canvas.Get(x, y)` | string | Returns glyph at position x, y |
| `canvas.Set(str)` | — | Fills the entire canvas with the given glyph |
| `canvas.Set(x, y, str)` | — | Sets position x, y to the given glyph |
| `canvas.Set(x, y, fg, str)` / `canvas.Set(x, y, fg, bg, str)` | — | Sets position with foreground and optional background color |
| `canvas.SetFG(color)` | — | Sets foreground color for the entire canvas |
| `canvas.SetFG(x, y, color)` | — | Sets foreground color at position x, y |
| `canvas.SetBG(color)` | — | Sets background color for the entire canvas |
| `canvas.SetBG(x, y, color)` | — | Sets background color at position x, y |

## Example — Banner on a keypress

```
?time = 120
  ui.ShowBanner("Hello World!")
```

## Example — Translated button

```
var button = ui.AddButton()
button.text = te.xt(Play)
// Change your language in settings to see the button translate
```

## See also

- [`ui` namespace](/reference/native-functions/ui) — `ui.OpenInv`, `ui.OpenMind`, `ui.ShowBanner`
- [ASCII Art](/guide/ascii-art) — for inline art without the UI system
- [`draw` namespace](/reference/native-functions/draw) — background fills and box borders
