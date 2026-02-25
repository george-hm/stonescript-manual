# Functions

Custom functions serve an important organisational purpose as scripts grow in complexity. They make scripts easier to read and reduce repetition.

## Declaration

Use the `func` keyword to declare a function. When a function is declared its contents are **not** executed immediately — lines inside the function only execute when it is called later.

```
func Print(message)
  >@message@

Print(Hello World!)
```

## Return values

Functions can return a value using the `return` keyword:

```
func NonBossDuration()
  return totalTime - time

var duration
duration = NonBossDuration()
>Time was: @duration@
```

## Parameters

Functions accept any number of arguments, making them operate on arbitrary input:

```
func RandomRange(min, max)
  ?min >= max
    return min
  return min + rng % (max - min + 1)

var randomValue
randomValue = RandomRange(5, 10)
>RNG: @randomValue@
```

## Counters and state reset

This example creates a counter that increases by 1 each frame. When any custom input key is pressed, `ResetCounter()` is called and the counter goes back to zero:

```
var count = 0
count++
>Counter = @count@

func ResetCounter()
  count = 0

?key=begin
  ResetCounter()
```

## The `this` prefix

The prefix `this` can be used inside a function when referencing variables that belong to the **outer script**. Use of `this` is optional — script variables can be accessed without the prefix. However, when a variable name appears both inside and outside the function, `this.varName` is used for disambiguation:

```
var a = 1

func TestScope(a)
  >Script var = @this.a@, function var = @a@

TestScope(3)
// Prints: Script var = 1, function var = 3
```

## Stack limit

When functions call other functions — or themselves recursively — an execution stack builds in size. To safeguard system resources, Stonescript has a **stack limit of 215** and will throw an error if that limit is exceeded.

## See also

- [`func` command reference](/reference/commands#func)
- [Variables](/guide/variables) — how variable scope interacts with functions
