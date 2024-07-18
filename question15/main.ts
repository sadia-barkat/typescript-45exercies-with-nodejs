let guestList:string[]=["sadia","zeniya","daniya","waqas"];

let dontCome=guestList[0];
console.log(dontCome, "is not coming");

guestList.splice(0,1,"maham");
guestList.forEach(guest=>console.log(`${guest} lets get together for dinner`));