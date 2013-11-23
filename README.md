# Highlight Features
Add contextual help and highlight features on any page with a single line of JS (and jQuery)

## Defining Features
Defining features is easy, just include it in your html

```
<a href="#login" data-feature="Signing up is easy to do!"></a>
```

## Viewing Features
```
$("body").highlightFeatures("show");
```
You can also highlight features within a specific section
```
$(".content-container").highlightFeatures("show");
```

## Hiding Features
Features will typically be hidden from inside the interface or by pressing `esc`, but if you'd like to take control you can also run
```
$(".content-container").highlightFeatures("hide");
```

## Notes and Excuses
This is a pretty quick and dirty first implementation, let me know if you're interested in it and I'll clean it up and add more features!  It serves my current needs pretty well.

## Contributing
Would love any and all help you feel like giving!