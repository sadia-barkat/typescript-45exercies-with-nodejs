let userNames:string[]=["Areeba","Aniya","Sadia","Admin","Waqas"];
userNames=[]
if(userNames.length===0){
    console.log("your array is empty");
}

userNames.forEach(oneUser=>{
    if(oneUser==="Admin"){
        console.log(`Hello ${oneUser},Would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser} thank you for logging in again`)
    }
})