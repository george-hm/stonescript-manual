# Native Functions

While scripts can define their own [functions](/guide/functions), Stonescript ships with a set of **pre-defined native functions** that behave similarly to commands but are more clearly grouped by subject, can accept parameters, and often return a value.

## Namespaces

| Namespace | Description |
|-----------|-------------|
| [ambient](./ambient) | Background audio layer control |
| [BigNumber](./bignumber) | Arithmetic on integers larger than 32 bits |
| [color](./color) | Color creation, conversion, and interpolation |
| [draw](./draw) | Low-level screen drawing |
| [event](./event) | Community / seasonal event objectives |
| [int](./int) | Integer parsing |
| [item](./item) | Item queries (cooldowns, counts, loadouts) |
| [key](./key) | Input rebinding |
| [loc](./loc) | Location control (leave, pause) |
| [math](./math) | Full mathematics library |
| [music](./music) | Music playback |
| [player](./player) | Player cosmetic effects |
| [screen](./screen) | Coordinate conversion and camera movement |
| [storage](./storage) | Persistent key-value storage |
| [string](./string) | String manipulation |
| [sys](./sys) | System / import configuration |
| [te](./te) | Text localisation |
| [time](./time) | Time formatting |
| [ui](./ui) | User interface construction |

## Calling convention

Native functions are called exactly like script-defined functions:

```stonescript
var result = math.Sqrt(9)
>result = @result@
```

Some functions have no return value (they act as commands):

```stonescript
ambient.Stop()
music.Play(temple_0)
```

Others return a value that can be stored or used inline:

```stonescript
?item.CanActivate()
  activate R
```

## Type function

There is also a built-in `Type()` function outside any namespace:

```stonescript
var a = 0
?Type(a) = int
  >Variable 'a' is an integer.
```

Possible return values: `string`, `int`, `bool`, `function`, `object`, `null`.
