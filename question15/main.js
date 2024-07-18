var guestList = ["sadia", "zeniya", "daniya", "waqas"];
var dontCome = guestList[0];
console.log(dontCome, "is not coming");
guestList.splice(0, 1, "maham");
guestList.forEach(function (guest) { return console.log("".concat(guest, " lets get together for dinner")); });
