# music

The `music` namespace controls game music playback. Only one track can play at a time.

See [Appendix C — Music](/appendix/music) for the full list of track IDs.

## ?music → string

Returns the ID of the currently playing music track, or an empty string if no music is playing.

```stonescript
>`0,0,Current Music = @music@
```

## music.Play(str)

**Returns:** nothing

Plays the track with the given ID. Replaces any track currently playing.

```stonescript
?loc.begin | loc.loop
  music.Play(temple_0)
```

## music.Stop()

**Returns:** nothing

Stops all music.

```stonescript
?!string.Equals(music, "")
  music.Stop()
```

## Example — location-based music

```stonescript
?loc.begin | loc.loop
  ?loc = caves
    music.Play(caustic_caves)
  :?loc = temple
    music.Play(temple_0)
  :?loc = deadwood
    music.Play(deadwood_0)
  :
    music.Stop()
```
