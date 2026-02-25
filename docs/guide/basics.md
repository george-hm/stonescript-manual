# Basics

These are the fundamental building blocks of every Stonescript. All logic flows from conditions (`?`) and the indented blocks below them.

## `?` — Condition (if)

Evaluates a logical condition. If true, executes the **indented lines** below it.

```stonescript
?loc = caves
  loadout 1
```

## `:` — Else

An alternative branch that executes when the preceding `?` condition is false.

```stonescript
?loc = caves
  loadout 1
:
  loadout 2
```

## `:?` — Else If

An alternative branch with its own additional condition.

```stonescript
?loc = caves
  loadout 1
:?loc = deadwood
  loadout 2
:
  loadout 3
```

## `//` — Line Comment

All text to the right of `//` has no effect when the script runs.

```stonescript
?loc = caves
  loadout 1  // use loadout 1 in Caves of Fear
```

## `/* */` — Block Comment

All text between `/*` and `*/` is ignored. Useful for temporarily disabling sections.

```stonescript
/*
?loc = caves
  loadout 1
*/
// This script does nothing — all of it is inside block comments.
```

## `^` — Continue Previous Line

Joins the current line to the previous one. Useful for breaking long conditions across multiple lines.

```stonescript
?loc=caves
^| loc=mine
  equip repeating

// The above is equal to:
?loc=caves | loc=mine
  equip repeating
```

## Indentation and Scope

Indentation (spaces or tabs) defines **scope** — what runs as a result of a `?` condition. Any indented block beneath a `?` belongs to that condition.

```stonescript
?loc = caves         // outer condition
  loadout 1
  ?foe = boss        // inner condition — only checked when in caves
    equip crossbow
```

::: warning
Inconsistent indentation is the most common source of bugs. If your logic isn't working as expected, check that your indentation is correct.
:::
