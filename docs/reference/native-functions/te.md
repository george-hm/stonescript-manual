# te (Text Localisation)

Stonescript supports **12 languages**. The `te` namespace lets custom scripts adapt to the player's chosen language.

Supported language codes: `EN`, `PT-BR`, `ZH-CN`, `ZH-TW`, `FR`, `DE`, `RU`, `ES-LA`, `ES-EU`, `JP`, `KR`, `TK`.

## te.language — string

The language code currently selected by the player in settings.

```stonescript
var lang = te.language
>Language = @lang@
```

## te.xt(str) → string

Translates an English string into the player's selected language. If no translation is found, the input text is returned unchanged. Alternatively, a text identifier (TID) can be passed directly.

```stonescript
var button = ui.AddButton()
button.text = te.xt(Play)
// Change your language in settings to see this at work
```

## te.GetTID(str) → string

Returns the internal text identifier (TID) for a given string. The input text should be in the player's current language.

```stonescript
var tid = te.GetTID("Play")
>`0,1,@tid@
// Prints: tid_button_play
```

## te.ToEnglish(str) → string

Translates a string from the player's current language back to English. Returns the input unchanged if no translation is found.

```stonescript
>`0,1,@te.ToEnglish("Jogar")@
// If Portuguese is selected: prints "Play"
// Otherwise: prints "Jogar"
```
