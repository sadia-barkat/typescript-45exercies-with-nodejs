//making current user list
let current_user:string[]=["Sadia","Zeniya","Daniya","Waqas","Maham"];

//creating second array
let new_user:string[]=["Sana","Shama","Maham","Sadia","Ammar"];

//loop through new_user to check username availability
new_user.forEach(new_one_user =>{
    let our_condition=current_user.some(current_one_user =>current_one_user.toLowerCase()===new_one_user.toLowerCase())
    
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken`);
    }else{
        console.log(`This username ${new_one_user} is available`);
    }
})