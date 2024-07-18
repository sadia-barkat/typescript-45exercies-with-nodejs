var userNames = ["Areeba", "Aniya", "Sadia", "Admin", "Waqas"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty");
}
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " thank you for logging in again"));
    }
});
