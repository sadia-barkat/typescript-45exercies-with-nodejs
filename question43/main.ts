//creating function
function show_magician(magician:string[]){
    magician.forEach(name=>console.log(name));
}

//making second function
function make_great(magicians:string[]){
    return magicians.map(name=>`The Great ${name}`);
}
//making Array
let magician_names=["Harry Potter","Hamza","Usman"];

//making a copy of original array through slice function
let copy_magician_names=magician_names.slice();

//modified the copied array to include "The great" with names
let copy_great_magicians=make_great(copy_magician_names);

//show both arrays
//Original
console.log("original array \n");
show_magician(magician_names);

//copy
console.log("\ncopied array\n");
show_magician(copy_great_magicians);

