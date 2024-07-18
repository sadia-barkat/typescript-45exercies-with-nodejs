//making current user list
var current_user = ["Sadia", "Zeniya", "Daniya", "Waqas", "Maham"];
//creating second array
var new_user = ["Sana", "Shama", "Maham", "Sadia", "Ammar"];
//loop through new_user to check username availability
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
