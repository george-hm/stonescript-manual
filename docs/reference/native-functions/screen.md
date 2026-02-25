# screen

The `screen` namespace provides coordinate conversion between world-space and screen-space, and camera movement for multi-screen locations.

Screen dimensions are available as game state: `screen.w` (width) and `screen.h` (height).

## Coordinate conversion

### screen.FromWorldX(int) → integer

Converts an X value from world-space to screen-space (column).

### screen.FromWorldZ(int) → integer

Converts a world-space Z value to a screen-space Y value (row).

```stonescript
var x = screen.FromWorldX(pos.x)
var y = screen.FromWorldZ(pos.z - pos.y)
>`0,1,Player position on screen: @x@,@y@
```

### screen.ToWorldX(int) → integer

Converts a screen-space X column to world-space X.

### screen.ToWorldZ(int) → integer

Converts a screen-space Y row to world-space Z.

```stonescript
var wx = screen.ToWorldX(input.x)
var wz = screen.ToWorldZ(input.y)
>`0,2,World position of cursor: @wx@,@wz@
```

## Camera movement

These functions only have effect in **multi-screen locations**.

### screen.Next()

**Returns:** nothing

Moves the camera one screen forward relative to the player.

```stonescript
?key = rightBegin
  screen.Next()
```

### screen.Previous()

**Returns:** nothing

Moves the camera one screen back relative to the player.

```stonescript
?key = leftBegin
  screen.Previous()
```

### screen.ResetOffset()

**Returns:** nothing

Resets the camera to follow the player, undoing any `screen.Next()` / `screen.Previous()` shifts.

```stonescript
var lastScreenI = -1
?lastScreenI ! screen.i
  screen.ResetOffset()
  lastScreenI = screen.i
```
