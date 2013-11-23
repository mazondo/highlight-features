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

## Contributing
Would love any and all help you feel like giving, just please:

 - Fork the repo
 - Make sure the tests pass (open the SpecRunner.html file)
 - Write tests for the functionality you want (They should fail)
 - Make them pass
 - Push to your fork and submit a pull request