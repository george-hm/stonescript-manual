# Arrays

Arrays are a special type of variable that sequentially organise values and objects into a collection assigned to a single variable name.

## Initialisation

```
var emptyCollection = []
var magicNumbers = [10, 3, 0, 15, -7]
var someStrings = ["apple", "banana", "cherry"]

// Multi-line initialisation
var sameButMultiLine = [
  "apple",
  "banana",
  "cherry",
]
```

## Operations

| Operation | Returns | Description |
|-----------|---------|-------------|
| `a = []` | — | Initialises a new empty array |
| `a[integer]` | value | Reads the value at a given index (zero-based) |
| `a.Add(value)` | — | Appends a new value to the end of the array |
| `a.Clear()` | — | Removes all elements. More CPU-efficient than re-declaring with `[]` |
| `a.Contains(value)` | bool | Returns `true` if the value is found; `false` otherwise |
| `a.Count()` | int | Returns the number of elements |
| `a.Emplace(index, value)` | — | Replaces the value at the given position |
| `a.IndexOf(value)` | int | Returns the position of the first match, or `-1` if not found |
| `a.Insert(index, value)` | — | Inserts a value at the given position; elements to the right shift right |
| `a.RemoveAt(index)` | value | Removes and returns the element at the given position; elements to the right shift left |
| `a.Sort()` | — | Sorts elements into ascending order |

## Reading values

```
var myArray = [10, 3]
?myArray[1] = 3
  >Yes, the value at index 1 equals 3
```

## Looping through an array

```
var myArray = ["Apple", "Banana", "Cherry"]
var count
var value
count = myArray.Count()
?count > 0
  for i = 0 .. count - 1
    value = myArray[i]
    >`0,@i@,@value@
```

You can also use the `for value : array` form:

```
var a = [1, 2, 3]
var n
n = ""
for value : a
  n = n + value
>n = @n@
// n = 123
```

## Clearing vs re-declaring

```
// Not efficient — allocates memory every frame
var redeclaredEachFrame
redeclaredEachFrame = []

// Better — reuses existing allocation
var clearedEachFrame = []
clearedEachFrame.Clear()

// Best for loop-scoped data — clear only once per Ouroboros loop
var clearedEachLoop = []
?loc.begin | loc.loop
  clearedEachLoop.Clear()
```

## Multi-dimensional arrays

```
var a = [[1,2], [3,4]]
var value
value = a[1][0]
>Found value @value@ at (1, 0)
// Prints: Found value 3 at (1, 0)
```

## Arrays of objects

```
var objectCollection = [
  new Components/Float,
  new Components/Float,
  new Components/Vector,
]
```

## See also

- [Loops](/guide/loops) — for iterating arrays
- [string.Split](/reference/native-functions/string) — returns an array of strings
- [string.Break](/reference/native-functions/string) — breaks a string into an array of lines
