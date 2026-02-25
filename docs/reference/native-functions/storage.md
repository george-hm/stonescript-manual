# storage

Values saved to permanent storage **persist between runs and game sessions**. They are stored in separate files inside the Stonescript folder, not in your primary save.

::: tip Isolation
Imported scripts access storage in isolation — different modules can use the same key names without overwriting each other's data.
:::

---

## storage.Set

```
storage.Set(key, value)
```

Saves a value to permanent storage at the specified key.

```stonescript
var score = 1000
storage.Set("highscore", score)
```

---

## storage.Get

```
storage.Get(key) → value
storage.Get(key, default) → value
```

Retrieves a value from storage. If the key doesn't exist, returns `null` (or the `default` value if provided).

```stonescript
var value = storage.Get("highscore")
?value
  >High Score = @value@
:
  >No High Score found.
```

With a default:

```stonescript
var value = storage.Get("highscore", 0)
>High Score = @value@
```

---

## storage.Has

```
storage.Has(key) → boolean
```

Returns `true` if the specified key exists in storage.

```stonescript
?storage.Has("highscore")
  var value = storage.Get("highscore")
  >High Score = @value@
:
  >No High Score found.
```

---

## storage.Delete

```
storage.Delete(key)
```

Deletes any value stored at the specified key.

```stonescript
storage.Delete("highscore")
```

---

## storage.Incr

```
storage.Incr(key) → integer
storage.Incr(key, amount) → integer
```

Increases the value at the specified key by `1` (or by `amount`) and returns the new value. Useful for tracking counters across runs.

```stonescript
?gameOver
  storage.Incr("stat_TimesPlayed")

// With a custom amount:
var amount
?foundCoins
  amount = rng%5 + 5
  storage.Incr("coins", amount)
```

---

## storage.Keys

```
storage.Keys() → string[]
```

Returns an array of all storage key names available in the current context.

```stonescript
var a
?time % 30 = 0
  a = storage.Keys()
  for i = 0 .. a.Count()-1
    >Key @i@ = @a[i]@
```
