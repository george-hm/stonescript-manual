# string

Functions for working with string values.

## string.Break

```
string.Break(string, integer) → string[]
```

Breaks a string into multiple strings given a max width.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `string` | string | The string to break |
| `integer` | integer | Maximum width per segment |

```stonescript
var s = "The brown fox jumps over the lazy dog"
var a = string.Break(s, 14)
for i = 0 .. a.Count()-1
  >`0,@i@,@a[i]@
```

---

## string.Capitalize

```
string.Capitalize(str) → string
```

Changes the first letter of a string to upper-case.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The string to capitalize |

```stonescript
var a = "foo"
a = string.Capitalize(a)
>@a@
// Prints "Foo"
```

---

## string.Equals

```
string.Equals(str1, str2) → boolean
```

Returns `true` if both strings are exactly the same. Case sensitive.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str1` | string | First string |
| `str2` | string | Second string |

```stonescript
var a = "foo"
?string.Equals(a, "foo")
  >The strings are equal
:
  >They are NOT equal
```

---

## string.Format

```
string.Format(str, ...) → string
```

Replaces `{0}`, `{1}`, etc. placeholders in a string with additional parameter values. Supports [.NET format specifiers](https://docs.microsoft.com/en-us/dotnet/api/system.string.format).

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | Format string containing `{0}`, `{1}`, etc. placeholders |
| `...` | any | Values to substitute into the placeholders |

```stonescript
var str = "My name is {0} and I have {1} power!"
var result = string.Format(
^  str,
^  player.name,
^  totalgp
^)
>@result@
```

---

## string.IndexOf

```
string.IndexOf(str, criteria) → integer
string.IndexOf(str, criteria, startAt) → integer
```

Finds the position of `criteria` inside `str`. Returns `-1` if not found. Optionally starts the search at `startAt`.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The string to search in |
| `criteria` | string | The substring to find |
| `startAt` *optional* | integer | Index to start the search from (default `0`) |

```stonescript
var a = Hello World!
var index = string.IndexOf(a, llo)
// index equals 2

var index2 = string.IndexOf(a, llo, 4)
// index2 equals -1 (search started after "llo")
```

---

## string.Join

```
string.Join(separator, array) → string
string.Join(separator, array, startIndex) → string
string.Join(separator, array, startIndex, count) → string
```

Combines an array of strings into a single string with a separator. Optional parameters specify a starting index and element count.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `separator` | string | Separator string placed between elements |
| `array` | string[] | Array of strings to join |
| `startIndex` *optional* | integer | Index of first element to include (default `0`) |
| `count` *optional* | integer | Number of elements to include |

```stonescript
var a = ["Hello", "World", "!"]

var b = string.Join(";", a)
>`0,0,@b@
// "Hello;World;!"

var c = string.Join(";", a, 1)
>`0,1,@c@
// "World;!"

var d = string.Join(";", a, 0, 2)
>`0,2,@d@
// "Hello;World"
```

---

## string.Size

```
string.Size(str) → integer
```

Returns the length of a string in number of glyphs.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The string to measure |

```stonescript
var a = Hello World!
var size = string.Size(a)
>size = @size@
// size = 12
```

---

## string.Split

```
string.Split(str, [separators...], [removeEmpty]) → string[]
```

Breaks a string into an array by splitting on separators. Defaults to splitting on spaces.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The string to split |
| `separators...` *optional* | string(s) | One or more separator strings. Defaults to `" "` (space) |
| `removeEmpty` *optional* | bool | When `true`, empty entries are discarded from the result |

```stonescript
var a = string.Split("Hello World !")
// ["Hello", "World", "!"]

var b = string.Split("Hello World !", " ", "l")
// ["He", " ", "o", "Wor", "d", "!"]

var c = string.Split("Hello World !", "l", "r", true)
// ["He", "o Wo", "d !"]
```

---

## string.Sub

```
string.Sub(str, startAt) → string
string.Sub(str, startAt, length) → string
```

Returns a portion of a string, starting at `startAt`. Optionally limits output to `length` characters.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The source string |
| `startAt` | integer | Index of the first character to include |
| `length` *optional* | integer | Maximum number of characters to return |

```stonescript
var a = Hello World!

var b = string.Sub(a, 6)
>@b@
// "World!"

var c = string.Sub(a, 6, 3)
>@c@
// "Wor"
```

---

## string.ToLower

```
string.ToLower(str) → string
```

Changes all letters to lower-case.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The string to convert |

```stonescript
var a = "Foo"
a = string.ToLower(a)
>@a@
// "foo"
```

---

## string.ToUpper

```
string.ToUpper(str) → string
```

Changes all letters to upper-case.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | The string to convert |

```stonescript
var a = "Foo"
a = string.ToUpper(a)
>@a@
// "FOO"
```
