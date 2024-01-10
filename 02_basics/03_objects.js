/* Objects can be defined in two ways
1. as literals
2. from constructors */

// Object.create -> constructor method of creating objects.
const jsUser = {
    name: "Rupanzil",
    rollNo: 34,
    age: 29,
    location: "Kolkata",
    email: "rupanzilprince@gmail.com",
    "full name": "Rupanzil Mamun Prince"
}

console.log(jsUser.name);
console.log(jsUser.rollNo);
console.log(jsUser["full name"]);    // To use the property whose key is multi word also to access symbols




