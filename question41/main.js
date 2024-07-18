//creating function of magician
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//creating Array
var magician_names = ["Harry Potter", "Hamza", "Usman"];
//calling function
show_magician(magician_names);
