//creating function
function create_car(manufacturer,model,...options){
    //initialize a car object with manufacturer and model
    let car={
        manufacturer:manufacturer,
        model:model,
    };
    //add additional options
    options.forEach(option=>{
        let[key,value] = option.split(":");
        car[key.trim()] = value.trim();
    })

return car;
}

//calling function

let my_car=create_car("toyota","corolla","color:black","sunroof:true");

//printing variable

console.log(my_car);