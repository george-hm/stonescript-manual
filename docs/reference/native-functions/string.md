# string

Functions for working with string values.

## string.Break

```
string.Break(string, integer) → string[]
```

Breaks a string into multiple strings given a max width.

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

```stonescript
var a = Hello World!
var size = string.Size(a)
>size = @size@
// size = 12
```

---

## string.Split

```
string.Split(str) → string[]
string.Split(str, separators...) → string[]
string.Split(str, separators..., removeEmpty) → string[]
string.Split(str, removeEmpty) → string[]
```

Breaks a string into an array by splitting on separators. Defaults to splitting on spaces. An optional boolean discards empty entries.

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

```stonescript
var a = "Foo"
a = string.ToUpper(a)
>@a@
// "FOO"
```
