//making an array of coutries and print its original order:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Switzerland", "Sydney", "Argentina"];
console.log("Original Order:", countriesToVisit);
//priting array in alphabatical order without modifying actual list
console.log("Alphabatical Order:", __spreadArray([], countriesToVisit, true).sort());
//showing that array in its original order
console.log("still in original order:", countriesToVisit);
//reversing the order of our list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//reversing the reverse order list again to print original order
console.log("still in original order:", countriesToVisit);
//reversing the order of original array
console.log("Original array reversed:", countriesToVisit.reverse());
//reversing array to get back in original condition
console.log("Back to Original array:", countriesToVisit.reverse());
//printing array in alphabetical order
console.log("sorted array in alphabetical order:", countriesToVisit.sort());
//printing array in reverse alphabetical order
console.log("Back to Original array reversed again:", countriesToVisit.reverse());
