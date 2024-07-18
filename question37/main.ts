//creating unction
function make_shirt (size:string="Large" , printMessage:string="I love typescript" ){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);

}

//calling function by default message
make_shirt();

//for medium size
make_shirt("Medium");

//for medium size and default message
make_shirt("Medium","I love Pakistan");