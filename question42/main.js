//creating function
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//making second f(unction
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//making Array
var magician_names = ["Harry Potter", "Hamza", "Usman"];
var great_magicians = make_great(magician_names);
show_magician(great_magicians);
