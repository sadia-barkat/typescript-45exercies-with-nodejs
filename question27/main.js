//define variable
var alienColor = "green";
//using if statement
if (alienColor === "green") {
    console.log("you shot down green alien.You have earned 5 points");
}
//using else if statement
else if (alienColor === "yellow") {
    console.log("you shot down yellow alien.You earned 10 points");
}
else if (alienColor === "red") {
    console.log("you shot down red alien.You earned 15 points");
}
//version 2
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien,you earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("you shot yellow alien.you earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("you shot red alien.you earned 15 points");
}
//version 3
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("you shot down yellow alien.you earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("you shot red alien.you earned 15 points");
}
