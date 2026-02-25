# ASCII Art

Stonescript lets you embed multi-line ASCII art directly in scripts and draw it on screen using the advanced print commands.

## Special characters

| Glyph | Meaning |
|-------|---------|
| `#` | Blank/transparent space. That position is not drawn at all. |
| `\n` | Line break. Continues drawing on the next line. **Warning:** expensive — avoid in large drawings; use an `ascii`/`asciiend` block instead. |

## Method 1 — Inline with a print command

Use an `ascii`/`asciiend` block directly inside a print command. This example draws a green circle to the top-left of the screen:

```
>`1,0,#green,ascii
#.-.
( )
#`-´
asciiend
```

The `ascii` keyword starts the art block and `asciiend` closes it. Indentation inside the block is treated as literal characters.

## Method 2 — Store in a variable

Save the ASCII art into a variable first, then print it later. This is useful for reuse or when the art is conditionally drawn:

```
var fishSprite
fishSprite = ascii
###(°_##
#_/_ o\#
#´ `'"#
asciiend

>`0,3,#red,@fishSprite@
```

## Print command variants

ASCII art can be drawn with any of the advanced print commands. The coordinates determine where the top-left corner of the art lands:

| Command | Position reference |
|---------|--------------------|
| `` >`X,Y,[color,]art `` | Relative to screen top-left |
| `>oX,Y,[color,]art` | Relative to player's position |
| `>hX,Y,[color,]art` | Same layer as Big Head (accessories) |
| `>cX,Y,[color,]art` | Relative to screen centre |
| `>fX,Y,[color,]art` | Relative to target foe's head |

## Hat example

Draw a yellow hat on the player (works best with Big Head enabled):

```
>h-2,-3,#yellow,ascii
##_
#| |
_|_|_
asciiend
```

## Crosshairs on a foe

```
>f-2,0,#ff0000,ascii
##!
-#·#-
##¡
asciiend
```

## Colors

Prefix an art block with a color to tint the entire drawing:

```
>`0,0,#cyan,ascii
 /\
/  \
\  /
 \/
asciiend
```

Available color constants: `#white`, `#cyan`, `#yellow`, `#green`, `#blue`, `#red`.
Use hex notation: `#rrggbb` (e.g. `#ff4400`).
Use rainbow: `#rainFF` where the last 2 hex digits set brightness.

## Animated art

Arrays of ASCII art frames can be used to create flip-book animations. See [Arrays](/guide/arrays) for an example, or use [`ui.AddAnim()`](/guide/user-interface) for the full component-based animation system.

## See also

- [Commands — print variants](/reference/commands) for all `>` syntax options
- [User Interface](/guide/user-interface) for the `ui.AddAnim()` component
- [draw namespace](/reference/native-functions/draw) for `draw.Box` and background fills
