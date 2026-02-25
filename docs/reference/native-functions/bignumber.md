# BigNumber

`BigNumber` objects allow arithmetic on large integers that exceed the 32-bit range. They are created via [`math.BigNumber()`](./math#math-bignumber).

While BigNumbers can only hold whole number values, their arithmetic operations accept `float` and `int` arguments as well as other BigNumbers.

## Creating a BigNumber

```stonescript
var bn  = math.BigNumber(500)
var bn2 = math.BigNumber("123456789123456789")
```

## Arithmetic

### b.Add(num | BigNumber) — Returns itself

Adds a number to the BigNumber (`+`). Chainable.

```stonescript
var bn = math.BigNumber(12)
bn.Add(5)
>@bn@
// 17
```

### b.Sub(num | BigNumber) — Returns itself

Subtracts a number from the BigNumber (`-`).

```stonescript
var bn = math.BigNumber(12)
bn.Sub(5)
>@bn@
// 7
```

### b.Mul(num | BigNumber) — Returns itself

Multiplies the BigNumber (`*`). Chainable.

```stonescript
var bn = math.BigNumber("500")
bn.Add(500).Mul(1000).Mul(1000).Mul(1000)
>@bn@
// 1000000000000
```

### b.Div(num | BigNumber) — Returns itself

Divides the BigNumber (`/`).

```stonescript
var bn = math.BigNumber(12)
bn.Div(5)
>@bn@
// 2
```

## Comparisons

| Method | Operator | Returns |
|--------|----------|---------|
| `b.Eq(n)` | `=` | bool |
| `b.Gt(n)` | `>` | bool |
| `b.Ge(n)` | `>=` | bool |
| `b.Lt(n)` | `<` | bool |
| `b.Le(n)` | `<=` | bool |

```stonescript
var bn = math.BigNumber(5)
>@bn.Eq(5)@ @bn.Gt(3)@ @bn.Le(10)@
// true true true
```

## Conversion

### b.ToFloat() → float

Converts to a float. Throws an error if the value is out of range.

### b.ToInt() → int

Converts to an integer. Throws an error if the value is out of range.

### b.ToString() → string

Returns a string representation. Use this to serialize for [storage](./storage).

```stonescript
var bn = math.BigNumber("123456789123456789")
storage.Set("myBN", bn.ToString())
```

Loading back:

```stonescript
var bnStr = storage.Get("myBN")
var bn = math.BigNumber(bnStr)
```

### b.ToUI() → string

Returns a shortened display string (e.g. `123.5Qa`).

```stonescript
var bn = math.BigNumber("123456789123456789")
>@bn.ToUI()@
// 123.5Qa
```
