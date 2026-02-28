# int

The `int` namespace contains utilities for working with integer values.

## int.Parse(str) → integer

Converts a string representation of a number into an integer value.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | string | String to parse as integer |

::: warning
Throws an error if the given string cannot be parsed as a number.
:::

```stonescript
var s = "999"
var i = int.Parse(s)
i++
>@i@
// 1000
```

### Common use case

Useful when reading string values from [storage](./storage) and needing to perform integer arithmetic on them:

```stonescript
var raw = storage.Get("score", "0")
var score = int.Parse(raw)
score = score + 100
storage.Set("score", score)
```
