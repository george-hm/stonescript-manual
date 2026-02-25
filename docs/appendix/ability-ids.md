# Ability Cooldown IDs

::: tip New to Stonescript?
If you're just getting started, head to the [Getting Started guide](/guide/getting-started) first. The appendix is supplementary material — it's most useful once you're familiar with the language.
:::

These string IDs are used with [`item.GetCooldown()`](/reference/native-functions/item#item-getcooldown) and [`item.CanActivate()`](/reference/native-functions/item#item-canactivate).

```stonescript
?foe = boss & item.GetCooldown("bardiche") <= 0
  equip bardiche
  activate R
```

## Full List

| Item | Cooldown ID |
|---|---|
| Æther Talisman | `"talisman_aether"` |
| Bardiche | `"bardiche"` |
| Bashing Shield | `"bash"` |
| Blade of the Fallen God | `"blade"` |
| Cinderwisp Devour | `"cinderwisp"` |
| Cultist Mask | `"mask"` |
| Dashing Shield | `"dash"` |
| Fire Talisman | `"talisman_fire"` |
| Hatchet | `"hatchet"` |
| Heavy Hammer | `"heavy_hammer"` |
| Lollipop Wand | `"lollipop_wand"` |
| Mind Stone | `"mind"` |
| Quarterstaff | `"quarterstaff"` |
| Skeleton Arm | `"skeleton_arm"` |
| Voidweaver Devour | `"voidweaver"` |
| Calamity Wand | `"wand_aether"` |
| Explosive Wand | `"wand_fire"` |
| Frost Wand | `"wand_ice"` |
| Plague Wand | `"wand_poison"` |
| Reset Wand | `"wand_vigor"` |
| Gravity Wand | `"wand_stone"` |
| Grasping Staff | `"staff_aether"` |
| Infernal Staff | `"staff_fire"` |
| Eternity Staff | `"staff_ice"` |
| Berserker Staff | `"staff_poison"` |
| Prevention Staff | `"staff_vigor"` |
| Acrobatic Staff | `"staff_stone"` |
| Shovel | `"shovel"` |

::: tip
Invalid ability strings passed to `item.GetCooldown()` return `-1`. Some abilities from weapons that haven't been used yet also return `-1`.
:::
