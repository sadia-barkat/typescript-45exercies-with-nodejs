//making an array
var petAnimals = ["Dog", "Cat", "Rabbit"];
//using for loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var oneAnimal = petAnimals_1[_i];
    console.log("A ".concat(oneAnimal, " would make a great pet"));
}
//print message outside of for-loop
console.log("Any of these animals would make a great pet!");
