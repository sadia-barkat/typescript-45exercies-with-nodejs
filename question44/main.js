//creating function with rest parameter
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    //using for each loop
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich\n");
}
//calling function 1st time
makeSandwich("chicken", "cheese", "tomato", "mayo");
//calling function 2nd time
makeSandwich("bread", "butter");
//calling function 3rd time
makeSandwich("beef", "cucumber", "lettuce", "bread", "egg", "butter");
