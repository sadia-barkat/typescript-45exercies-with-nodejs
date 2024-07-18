let apple:string="apple";
let upperCaseApple:string="APPLE";
let ten:number=10;
let twenty:number=20;

//test for equality 

console.log("is apple is equal to apple?");
console.log(apple=="apple");

//test for unequality
console.log("\n is apple not equal to apple?");
console.log(apple!="apple");

//test using lower case function
console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()== "apple" );

console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()!= "apple" );

//Numerical test
//equal
console.log("\nis ten is equal to twenty?");
console.log(ten==twenty);

//not equal
console.log("\nis ten is not equal to twenty?");
console.log(ten!=twenty);

//greater than
console.log("\n is ten is greater than zero?");
console.log(ten>0);

//less than
console.log("\nIs ten is less than zero?");
console.log(ten<0);

//greater than or equal to
console.log("\nis ten is greater than or equal to five?");
console.log(ten>=5);

//less than or equal to
console.log("\nis ten less than or equal to three?");
console.log(ten<=5);

//test using "and" operator
console.log("\nis twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty!=10 && twenty>10);

console.log("\nis twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty!=10 && twenty>30);

//using "or"
console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20>50 || 20==20);

console.log("\n20 is greater than 50 OR 20 is not equal to 20");
console.log(20>50 || twenty != 20);

//test whether an item is included in array
let array:number[]=[1,2,3,4,5];
let itemToFind:number=3;

console.log("\nthis item is not an array")
console.log(array.indexOf(itemToFind) !== -1);

//whether item not in array
console.log("\nthis item is in array")
console.log(array.indexOf(itemToFind)=== -1);