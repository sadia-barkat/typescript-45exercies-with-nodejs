//creating array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var numb = numbers_1[_i];
    var ordinalEnding = void 0;
    if (numb === 1) {
        ordinalEnding = "st";
    }
    else if (numb === 2) {
        ordinalEnding = "nd";
    }
    else if (numb === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(numb, " ").concat(ordinalEnding));
}
