# Search Filters

Search filters are used when evaluating foes, locations, and items in `equip`, `equipL`, `equipR`, and `?foe` / `?loc` expressions.

## Usage

Filters are space-separated criteria strings. Up to 7 criteria can be combined in a single `equip` command.

```
// Equip a loadout for any insect or poison foe
?foe = insect | foe = poison
  loadout 3
```

```
// Equip a 8-star vigor crossbow with +5 enchantment
equip vigor crossbow *8 +5
```

## Damage type filters

These match items or foes with a specific elemental affinity:

| Filter | Description |
|--------|-------------|
| `poison` | Poison element |
| `vigor` | Vigor element |
| `aether` | Aether element |
| `fire` | Fire element |
| `air` | Air element |
| `ice` | Ice element |

## Foe type filters

These match foes by their category:

| Filter | Description |
|--------|-------------|
| `arachnid` | Spiders and similar |
| `serpent` | Snakes and serpents |
| `insect` | Insects |
| `machine` | Mechanical foes |
| `humanoid` | Humanoid enemies |
| `elemental` | Elemental foes |
| `boss` | Boss encounters |

## Foe name filters

These match foes by certain keywords

A few examples:
```stonescript
?foe = scarab
    equip loadout 4
?foe = mosquito
    equip loadout 5
```

A comprehensive list of foe names is not mentioned in the [official manual](https://stonestoryrpg.com/manual). If you wish to contribute to this documentation by
adding to a list of foe names, please [submit a pull request](https://github.com/george-hm/stonescript-manual).

A current, work in progress list:

```
acronian_cultist
acronian_scout
ant
ant_hill
big_slave_master
bolesh
bomb_cart
bronze_guardian
colossal_snail
cool_bat
cult_guard
cult_marksman
cult_sorcerer
dysangelos
dysangelos_bearer
dysangelos_elementalist
dysangelos_perfected
elite
epic_snail
fire_elemental
flame_geyser
flesh_scarab
fluff
ghost
ghost_tomb
ground_serpent
heavy_hitter
hrimnir
huge_mosquito
ice_elemental_elite
ice_pillar
ki_eater
ki_globbler
ki_slerper
large_ghost
large_skeleton
medium_bat
mine_walker
mosquito
mushroom_boss
mushroom_boss_fat
mushroom_boss_skinny
nagaraja
pallas
pillar
poena
poison_adept
scarab
scorpion
skeleton_boss
skeleton_boss_stage_2
slave_master
slying_serpent
small_bat
small_skeleton
small_spider
spider_boss
spider_eggs
tiny_spider
tree_boss
wasp
wasp_nest
worm_rider
xyloalgia
yeti
```

## Boss phase filters

| Filter | Description |
|--------|-------------|
| `phase1` | Boss phase 1 |
| `phase2` | Boss phase 2 |
| `phase3` | Boss phase 3 |

## Foe behaviour filters

| Filter | Description |
|--------|-------------|
| `spawner` | Foe that spawns other foes |
| `flying` | Airborne foe |
| `slow` | Slow-moving foe |
| `ranged` | Ranged attacker |
| `explode` | Exploding foe |
| `swarm` | Swarm-type foe |
| `unpushable` | Cannot be pushed |
| `undamageable` | Currently invincible |

## Resistance / immunity filters

| Filter | Description |
|--------|-------------|
| `magic_resist` | Reduced magic damage |
| `magic_vulnerability` | Increased magic damage |
| `immune_to_stun` | Cannot be stunned |
| `immune_to_ranged` | Immune to ranged attacks |
| `immune_to_debuff_damage` | Immune to debuff damage |
| `immune_to_physical` | Immune to physical attacks |

## Star level

Use `*[number]` to match items or locations by star level:

```
// Equip a 7-star War Hammer
equip hammer *7

// Only use this loadout in 5-star difficulty
?loc.stars = 5
  loadout 2
```

## Enchantment bonus (items only)

Use `+[number]` to match items by their enchantment bonus:

```
equip vigor staff +13
```

## Subtractive criteria

Prefix a criterion with `-` to **exclude** items matching it:

```
var criteria = "sword *0 -big -socket"
var count = item.GetCount(criteria)
>Basic swords: @count@
```

## Buff & Debuff IDs

These IDs are used with `foe.buffs.GetCount(str)`, `foe.buffs.GetTime(str)`, `buffs.GetCount(str)`, `buffs.GetTime(str)`, and their debuff counterparts in [Game State](/reference/game-state).

### Foe buff IDs

```
spider_buff_damage
adaptive_defense_poison
adaptive_defense_vigor
adaptive_defense_aether
adaptive_defense_fire
adaptive_defense_ice
buff_protection
poena_mirror
poena_crit
poena_mult
stability
stoic
immortal
buff_tenacious
buff_rebirth
buff_mirror
debuff_frost_stun
```

### Foe debuff IDs

```
debuff_armor_fatigue
debuff_dot
debuff_dot2
debuff_chill
debuff_feeble
ignition
stun
unstable
debuff_damage
```

### Player buff IDs

Item use buffs:

```
bardiche_buff_aoe_chance
bardiche_buff_crit_chance
bardiche_buff_crit_mult
bardiche_buff_move_speed
shovel_damage
quarterstaff_buff_attack_speed
quarterstaff_buff_stun
pick_pocket
smite
buff_staff_berserk
buff_staff_protection
buff_range
buff_bullet_width
buff_infernal
buff_inf_speed
buff_frozen
buff_damage
```

Potion buffs:

```
berserk
experience
invisibility
lucky_crit
lucky_mult
strength
vampiric
```

### Player debuff IDs

```
debuff_dot
debuff_attack_speed
debuff_yeti_chill
debuff_chill
debuff_move_speed
puff_debuff_damage
pallas_phase2_debuff
stun
spider_debuff_damage
debuff_duration_damage
debuff_damage
dysangelos_debuff_damage
debuff_darkness_move_speed
debuff_darkness_range
debuff_darkness_accuracy
bardiche_buff_move_speed
quarterstaff_buff_attack_speed
debuff_weapon_swap_lock
```

## See also

- [Commands](/reference/commands) — `equip`, `equipL`, `equipR`, `loadout`
- [`?foe` game state](/reference/game-state) — querying the current foe
- [`foe.buffs.GetCount(str)` / `foe.buffs.GetTime(str)`](/reference/game-state#foe-buffs-getcount-str-foe-buffs-gettime-str) — querying foe buffs
- [`foe.debuffs.GetCount(str)` / `foe.debuffs.GetTime(str)`](/reference/game-state#foe-debuffs-getcount-str-foe-debuffs-gettime-str) — querying foe debuffs
- [`buffs.GetCount(str)` / `buffs.GetTime(str)`](/reference/game-state#buffs-getcount-str-buffs-gettime-str) — querying player buffs
- [`debuffs.GetCount(str)` / `debuffs.GetTime(str)`](/reference/game-state#debuffs-count-debuffs-string-debuffs-getcount-str-debuffs-gettime-str) — querying player debuffs
- [item.GetCount()](/reference/native-functions/item) — counting items by criteria
- [Stonescript syntax highlighting](https://marketplace.visualstudio.com/items?itemName=Catalyst-42.c42-stonescript) - a VSCode extension for Stonescript syntax highlighting, including search filters
