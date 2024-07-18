let guestList:string[]=["sadia","zeniya","daniya","Amna"];

//add name in start of an array
guestList.unshift("Sana");

//making variable for storing a middle index of our guest list array
let middleIndex:number=Math.floor(guestList.length/2);

//add name in middle of array
guestList.splice(middleIndex,0,"Waqas")

//add name in last of array
guestList.push("Shama");

//print message of updated list
console.log("Updated List of our Guests");

//forEach
guestList.forEach(guest=>{
    console.log(`Dear ${guest},you all are cordially invited to dinner`)
})
//send message that only two peoples invited
console.log("unfortunately, the enw dinner table is not available,so I can only invitw two peoples on dinner");

//removing peoples from list until two peoples remain
while(guestList.length>2){
    let removeGuest=guestList.pop();
    console.log(`Sorry, ${removeGuest}I can't invite you on dinner.`);
}

//inviting last two guests in list
console.log("Invitations to the last two guest");
guestList.forEach(lasttwo=>console.log(`Luckily, ${lasttwo}, you are still invited`));

//removing remaining names
guestList.pop();
guestList.pop();

console.log("Empty list",guestList);