//making an array of coutries and print its original order:

let countriesToVisit:string[]=["China","Switzerland","Sydney","Argentina"];
console.log("Original Order:",countriesToVisit);

//priting array in alphabatical order without modifying actual list
console.log("Alphabatical Order:",[...countriesToVisit].sort());

//showing that array in its original order
console.log("still in original order:",countriesToVisit);

//reversing the order of our list
console.log("reverse order:",[...countriesToVisit].reverse());

//reversing the reverse order list again to print original order
console.log("still in original order:",countriesToVisit);

//reversing the order of original array
console.log("Original array reversed:",countriesToVisit.reverse());

//reversing array to get back in original condition
console.log("Back to Original array:",countriesToVisit.reverse());

//printing array in alphabetical order
console.log("sorted array in alphabetical order:",countriesToVisit.sort());

//printing array in reverse alphabetical order
console.log("Back to Original array reversed again:",countriesToVisit.reverse());

