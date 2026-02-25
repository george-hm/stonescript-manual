# Loops

Loops allow a section of code to run multiple times within a single frame. Use the `for` keyword to create a loop.

## `for v = a..b`

The variable `v` starts at `a` and increases by 1 each iteration until it reaches `b`.

```stonescript
for i = 1..5
  >`0,@i@,i = @i@
```

::: tip
The iteration variable (`i` above) must **not** be declared with `var` before the loop — it is automatically scoped to the loop.
:::

## Using Variables as Bounds

The start and end values can be variables declared before the loop:

```stonescript
var min = 1
var max = 4
var sum
sum = 0
for j = min..max
  sum = sum + j
>sum = @sum@
```

## Reverse Loops

Loops can iterate in reverse and use negative numbers:

```stonescript
var g
g = ""
for k = 5..-2
  g = g + k
>g = @g@
```

## Nested Loops

Loops can be nested inside each other:

```stonescript
for x = 1..9
  for y = x/2 .. x/2 + 6
    >`@x@,@y@,*
```

## `break`

Exit a loop early with `break`:

```stonescript
for i = 1..5
  ?i = 3
    break
```

Alternatively, you can break out of a loop by assigning the loop variable to a value that is out of range:

```stonescript
for i = 1..5
  ?i = 3
    i = -1
```

## `continue`

Skip the rest of the current iteration and continue looping:

```stonescript
var n
n = ""
for i = 1..5
  ?i = 3
    continue
  n = n + i
>n = @n@
// Prints "1245" — skips 3
```

## Looping Over an Array

Use the `: array` form to iterate over elements directly:

```stonescript
var a = [1, 2, 3]
var n
n = ""
for value : a
  n = n + value
>n = @n@
// Prints "123"
```

See [Arrays](/guide/arrays) for more on working with collections.
