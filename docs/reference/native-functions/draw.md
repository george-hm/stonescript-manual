# draw

The `draw` namespace provides low-level screen drawing operations for backgrounds, boxes, glyphs, and rendering the player sprite at an arbitrary position.

::: warning Layering caveat
Advanced print commands (`` >` ``, `>o`, etc.) always draw **on top** of boxes drawn with `draw.Box`.
:::

## draw.Bg(x, y, color)

**Returns:** nothing

Sets the background color at a specific screen position.

```stonescript
draw.Bg(5, 4, #red)
```

## draw.Bg(x, y, color, w, h)

**Returns:** nothing

Sets the background color of a rectangular region.

```stonescript
draw.Bg(5, 4, #cyan, 10, 6)
```

## draw.Box(x, y, w, h, color, style)

**Returns:** nothing

Draws a rectangular border at the specified position and size. `style` is an integer; negative style values make the center transparent.

```stonescript
var style = 1
?key = leftBegin
  style--
?key = rightBegin
  style++
draw.Box(10, 5, 30, 15, #333333, style)
>`12,6,#ffffff,Style = @style@
>`12,8,#888888,Press Left/Right\nto change style
```

## draw.Clear()

**Returns:** nothing

Clears the entire screen.

## draw.GetSymbol(x, y) → string

Returns the glyph character at screen position `(x, y)`.

```stonescript
var s
var x = 20
var y = 10
var drawX
?key = leftBegin
  x--
?key = rightBegin
  x++
?key = upBegin
  y--
?key = downBegin
  y++
s = draw.GetSymbol(x, y)
>`0,1,Symbol = @s@
drawX = x - 1
>`@drawX@,@y@,[#]
```

## draw.Player() / draw.Player(x, y)

**Returns:** nothing

Draws the player character (with all equipment and addons) at the current script execution point. Accepts optional x, y offset values.

For drawing to an absolute screen position, use [`screen.FromWorldX`](./screen) / [`screen.FromWorldZ`](./screen) to derive the correct offsets.

```stonescript
// Draw player 5 units to the right
draw.Player(5, 0)
```
