# Math Operations

Operators for working with numbers. Can be used directly in expressions or with variables.

## `+` — Addition

Adds two numbers.

```stonescript
var a = 2 + 3
// a equals 5
```

::: tip
The `+` operator can also join strings when used with string variables. See [Variables](/guide/variables) for examples.
:::

---

## `-` — Subtraction

```stonescript
?hp < maxhp - 5
  equip vigor sword dL
```

---

## `*` — Multiplication

```stonescript
var a = 2
var b = 5
a = a * b
// a equals 10

var c = 2 * 0.4
// c equals 0.8
```

---

## `/` — Division

Integer division is **rounded down**. Use floats (e.g. `5.0`) for decimal results.

```stonescript
var a = 8
a = a / 4
// a equals 2

var b = 5.0
b = b / 2
// b equals 2.5
```

---

## `++` — Increment

Increases a variable by 1.

```stonescript
var a = 3
a++
// a equals 4
```

---

## `--` — Decrement

Decreases a variable by 1.

```stonescript
var a = 3
a--
// a equals 2
```

---

## `%` — Modulo

Returns the remainder after division. Commonly used for repeating patterns.

```stonescript
var a = 5 % 4
// a equals 1

// Animate every 8 frames:
?time % 8 < 4
  > \O)
?time % 8 > 3
  > (O/
```

---

## `( )` — Parentheses

Parentheses control order of operations.

```stonescript
var a = 2 * (3 - 1)
// a equals 4
```

---

## `!` — Negation

Inverts a boolean expression when placed in front of it.

```stonescript
?!ai.enabled
  >The AI is not enabled.
```

::: tip
`!` is also used as the **not-equal** comparison operator when used between two values (`?foe ! poison`). See [Comparisons](/reference/comparisons).
:::
