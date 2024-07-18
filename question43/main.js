//creating function
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//making second function
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//making Array
var magician_names = ["Harry Potter", "Hamza", "Usman"];
//making a copy of original array through slice function
var copy_magician_names = magician_names.slice();
//modified the copied array to include "The great" with names
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays
//Original
console.log("original array \n");
show_magician(magician_names);
//copy
console.log("\ncopied array\n");
show_magician(copy_great_magicians);
