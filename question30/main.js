//creating array 
var userNames = ["Daniya", "zeniya", "Admin", "Rabiya"];
//using for each
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " thank you for logging in again"));
    }
});
