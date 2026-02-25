# Comparisons

Comparison operators are used inside `?` conditions to make decisions based on game state.

## `=` — Equal / Contains

Compares values for equality. For strings, checks if one **contains** the other.

```stonescript
?hp = maxhp
  loadout 2

?foe = boo
  equip vigor staff
```

---

## `!` — Not Equal / Not Contains

Compares values for inequality. For strings, checks if one does **not contain** the other.

```stonescript
?foe ! poison
  equipL sword
```

---

## `&` — Logical AND

Both conditions must be true.

```stonescript
?loc=caves & foe=boss
  equip crossbow
```

---

## `|` — Logical OR

Either condition can be true. When `&` and `|` are mixed, all `&` conditions are evaluated first.

```stonescript
?foe=slow | foe.count > 3
  activate potion
```

---

## `>` — Greater Than

```stonescript
?foe.count > 10
  equip shiny bardiche
```

---

## `<` — Less Than

```stonescript
?hp < 6
  activate potion
```

---

## `>=` — Greater Than or Equal

The following two examples are equivalent:

```stonescript
?loc.stars >= 6
  equipR vigor shield

?loc.stars > 6 | loc.stars = 6
  equipR vigor shield
```

---

## `<=` — Less Than or Equal

```stonescript
?hp <= 6
  activate potion
```
