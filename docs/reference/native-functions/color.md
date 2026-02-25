# color

Colors in Stonescript are represented as strings in [hexadecimal notation](https://htmlcolorcodes.com/) such as `#ff0000`, or as named presets: `#white`, `#cyan`, `#yellow`, `#green`, `#blue`, `#red`. Rainbow mode is also available: `#rainFF` where the last two characters set brightness.

## color.FromRGB(r, g, b) → string

Converts three integer values (0–255) into a hex color string.

```stonescript
var c = color.FromRGB(255, 0, 128)
>`0,0,@c@, @c@
```

## color.ToRGB(string) → int[3]

Converts a hex color string to an array of three integers (r, g, b).

```stonescript
var c   = color.Random()
var rgb = color.ToRGB(c)
var r   = rgb[0]
var g   = rgb[1]
var b   = rgb[2]
>`0,0,@c@, @c@ \n @r@ \n @g@ \n @b@
```

## color.Lerp(c1, c2, t) → string

Linearly interpolates from color `c1` to color `c2` at time `t` (0.0–1.0).

```stonescript
var c1 = "#ff4400"
var c2 = "#8888ff"
var t
var c
t = math.Sin(time * 0.1) / 2 + 0.5
c = color.Lerp(c1, c2, t)
>`0,1,@c@,@c@\n ██████
```

## color.Random() → string

Returns a random color string.

```stonescript
var c
c = color.Random()
>`0,0,@c@,@c@\n ██████
```

## Color presets

| Preset | Description |
|--------|-------------|
| `#white` | White |
| `#cyan` | Cyan |
| `#yellow` | Yellow |
| `#green` | Green |
| `#blue` | Blue |
| `#red` | Red |
| `#rainFF` | Rainbow at full brightness |
| `#rainA0` | Rainbow at lower brightness (hex brightness value) |
