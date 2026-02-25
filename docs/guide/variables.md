# Variables

Variables store values that can be used in math, logical, and string operations. Declare a new variable with the `var` keyword.

## Declaration and Initialization

```stonescript
var myVar = 10
```

`myVar` is initialized with value `10`. Variables are initialized **only once** — the first time `var` executes.

## Updating Values

```stonescript
var myVar = 10
myVar = myVar + 5
// myVar now equals 15

var secondVar = 3
myVar = myVar - secondVar
// myVar now equals 12
```

## Lifecycle

Variables only reset to their initial value if you **leave a location and begin a new run manually**. They do not reset when:
- The Ouroboros loops
- The Mind Stone is opened then closed

This means you can use variables as persistent frame counters:

```stonescript
var i = 0
i++
>i = @i@
// i increases by 1 every frame of the run
```

## String Variables

String variables can be declared with or without quotes. Use quotes when the value contains special symbols or trailing spaces.

```stonescript
var a = 10
var b = 5
var myVar = a + " x " + b + " = " + (a * b)
>@myVar@
// Prints "10 x 5 = 50"
```

## Variable Isolation in Imports

Variables declared in imported scripts are contained within those scripts. Their names won't collide with variables or functions in other scripts. See [Importing Scripts](/guide/importing) for details.
