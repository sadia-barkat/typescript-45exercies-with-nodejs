//making function
function decribe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling function
decribe_city("Karachi");
decribe_city("Faisalabad");
decribe_city("Berlin", "Germany");
