//creating array 
let userNames:string[]=["Daniya","zeniya","Admin","Rabiya"];

//using for each
userNames.forEach(oneUser=>{
    if(oneUser==="Admin"){
        console.log(`Hello ${oneUser},Would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser} thank you for logging in again`)
    }
})