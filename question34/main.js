var pizza = ["Chicken Tikka", "Malai Tikka", "Fajita"];
//using for loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
//print message outside loop
console.log("Pizza is Love");
