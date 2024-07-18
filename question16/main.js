var guestList = ["sadia", "zeniya", "daniya", "Amna"];
//add name in start of an array
guestList.unshift("Sana");
//making variable for storing a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//add name in middle of array
guestList.splice(middleIndex, 0, "Waqas");
//add name in last of array
guestList.push("Shama");
//print message of updated list
console.log("Updated List of our Guests");
//forEach
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you all are cordially invited to dinner"));
});
