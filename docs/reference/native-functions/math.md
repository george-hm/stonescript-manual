# math

The `math` namespace provides a full mathematics library. It works with both integers and floating-point numbers. A number with a decimal point (e.g. `0.5`) is treated as a float; without one (e.g. `2`) it is an integer.

## Constants

### math.pi — float

π ≈ 3.1415926

```stonescript
>PI = @math.pi@
```

### math.e — float

Euler's number ≈ 2.71828

```stonescript
>E = @math.e@
```

## Rounding

### math.Abs(num) → number

Absolute value.

```stonescript
var n = math.Abs(-2)
// n = 2
```

### math.Ceil(num) → number

Round up to the nearest whole number (returns float).

```stonescript
var n = math.Ceil(4.2)   // 5.0
```

### math.CeilToInt(num) → integer

Round up to the nearest integer.

```stonescript
var n = math.CeilToInt(4.2)  // 5
```

### math.Floor(num) → number

Round down to the nearest whole number (returns float).

```stonescript
var n = math.Floor(2.7)   // 2.0
```

### math.FloorToInt(num) → integer

Round down to the nearest integer.

```stonescript
var n = math.FloorToInt(2.7)  // 2
```

### math.Round(num) → number

Round to nearest whole number (returns float).

```stonescript
var n = math.Round(2.7)   // 3.0
```

### math.RoundToInt(num) → integer

Round to nearest integer.

```stonescript
var n = math.RoundToInt(2.7)  // 3
```

## Arithmetic helpers

### math.Clamp(num, min, max) → number

Constrains `num` to the range `[min, max]`.

```stonescript
var n = math.Clamp(50, 0, 10)  // 10
```

### math.Max(num1, num2) → number

Returns the larger of two numbers.

```stonescript
var n = math.Max(3, 10)  // 10
```

### math.Min(num1, num2) → number

Returns the smaller of two numbers.

```stonescript
var n = math.Min(3, 10)  // 3
```

### math.Sign(num) → number

Returns `-1` for negative numbers, `1` otherwise.

```stonescript
var s = math.Sign(-21)   // -1
```

### math.Pow(num, p) → number

Returns `num` raised to the power `p`.

```stonescript
var n = math.Pow(3, 2)   // 9
```

### math.Sqrt(num) → number

Square root.

```stonescript
var n = math.Sqrt(9)   // 3
```

### math.Exp(num) → number

Returns e raised to the given power.

```stonescript
var n = math.Exp(3)   // 20.08554
```

### math.Log(num, base) → number

Logarithm at the given base.

```stonescript
var n = math.Log(5, 2)   // 2.321928
```

## Interpolation

### math.Lerp(a, b, t) → number

Linear interpolation from `a` to `b` at time `t` (0.0–1.0).

```stonescript
var n = math.Lerp(0.0, 20.0, 0.75)  // 15.0
```

Easing example (2% per frame toward 100):

```stonescript
var n = 0.0
?key = Begin
  n = 0.0
n = math.Lerp(n, 100, 0.02)
>n = @n@
```

## Trigonometry

All trig functions work in **radians**. Use `math.ToDeg` / `math.ToRad` to convert.

### math.Sin(num) → number

```stonescript
var n = math.Sin(math.pi / 2)  // 1
```

### math.Cos(num) → number

```stonescript
var n = math.Cos(0)  // 1
```

### math.Tan(num) → number

```stonescript
var n = math.Tan(2)  // -2.18504
```

### math.Asin(num) → number

Arc-sine. Input must be in `[-1, 1]`; returns `NaN` otherwise.

```stonescript
var n = math.Asin(1)  // π/2
```

### math.Acos(num) → number

Arc-cosine. Input must be in `[-1, 1]`.

```stonescript
var n = math.Acos(-1)  // π
```

### math.Atan(num) → number

Arc-tangent.

```stonescript
var n = math.Atan(2)  // 1.107149
```

### math.Atan2(y, x) → number

Angle in radians from the x-axis to the point `(x, y)`.

```stonescript
var n = math.Atan2(3, 2)  // 0.9827937
```

### math.ToDeg(num) → number

Converts radians to degrees.

```stonescript
var n = math.ToDeg(2 * math.pi)  // 360
```

### math.ToRad(num) → number

Converts degrees to radians.

```stonescript
var n = math.ToRad(360)  // 2π
```

## BigNumber

### math.BigNumber() / math.BigNumber(number) / math.BigNumber(str) → BigNumber

Creates a [BigNumber](./bignumber) object for working with integers larger than 32 bits.

```stonescript
var bn = math.BigNumber("500")
bn.Add(500).Mul(1000).Mul(1000).Mul(1000)
>@bn@
// 1000000000000
```
