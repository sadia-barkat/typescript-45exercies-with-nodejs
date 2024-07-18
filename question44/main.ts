//creating function with rest parameter
function make_Sandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items:\n")

    //using for each loop
    items.forEach(singleItem=>console.log(singleItem));

    console.log("\nNow Enjoy Sandwich\n");
}

//calling function 1st time
make_Sandwich("chicken","cheese","tomato","mayo");

//calling function 2nd time
make_Sandwich("bread","butter");

//calling function 3rd time
make_Sandwich("beef","cucumber","lettuce","bread","egg","butter");