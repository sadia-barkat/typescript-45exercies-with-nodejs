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

let great_magicians=make_great(magician_names);

show_magician(great_magicians);
