# ui (Native Functions)

The `ui` namespace contains functions for constructing the [User Interface](/guide/user-interface) tree, as well as a few miscellaneous utility functions.

For full documentation of all UI component types (Panel, Text, Button, Anim, Canvas), see the [User Interface guide](/guide/user-interface).

## Building the tree

### ui.root — Panel

The base Panel on top of which the entire UI tree is built.

```stonescript
disable hud
ui.root.visible = true
```

### ui.AddPanel() → Panel

Adds a Panel to the root Panel.

```stonescript
?loc.begin
  var p = ui.AddPanel()
  p.color = #red
```

### ui.AddText() / ui.AddText(string) → Text

Adds a Text element to the root Panel.

```stonescript
?loc.begin
  var t = ui.AddText()
  t.text = "Hello World!"
```

### ui.AddButton() → Button

Adds a Button to the root Panel.

```stonescript
func OnPressed()
  > Hello World!

?loc.begin
  var button = ui.AddButton()
  button.y = 1
  button.text = Press me
  button.SetPressed(OnPressed)
```

### ui.AddAnim(string) → Anim

Adds an animated ASCII sprite to the root Panel. Accepts a sprite sheet string.

```stonescript
?loc.begin
  ui.AddAnim(ascii
\o)
%%
(o/
asciiend)
```

### ui.AddCanvas() → Canvas

Adds a Canvas to the root Panel. Canvas is optimised for drawing arbitrary glyphs and colors at specific positions.

```stonescript
?loc.begin
  var canvas = ui.AddCanvas()
  canvas.w = screen.w
  canvas.h = screen.h
  canvas.Set(5, 2, #ff0000, *)
```

### ui.AddStyle(string) → int

Adds a new style for rectangular components (Panels, Buttons). Returns a style ID. Protected against duplicate additions. Use the returned ID rather than hard-coding style numbers, because multiple scripts may call `ui.AddStyle()`.

```stonescript
var customStyle = ui.AddStyle("
^123
^456
^789")
?loc.begin
  var p = ui.AddPanel()
  p.style = customStyle
```

### ui.Clear()

**Returns:** nothing

Removes all UI elements from the root container.

```stonescript
?key = backBegin
  ui.Clear()
```

## Utility functions

### ui.OpenInv()

**Returns:** nothing

Opens the inventory screen.

### ui.OpenMind()

**Returns:** nothing

Opens the Mind Stone screen.

### ui.ShowBanner(str) / ui.ShowBanner(str, str)

**Returns:** nothing

Displays the animated location banner with up to two messages. The animation restarts on each call.

```stonescript
?time = 120
  ui.ShowBanner("Hello World!")
```

## See also

- [User Interface guide](/guide/user-interface) — full component reference (Panel, Text, Button, Anim, Canvas, anchor/dock layout)
