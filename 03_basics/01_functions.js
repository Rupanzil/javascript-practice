function showLoginMessage(username = "John Doe") {     // John doe gets passed in if no argument is provided during function call
    console.log(`${username} just logged in !!`);
}

showLoginMessage()          // Shows default values.
showLoginMessage("Rupanzil")    // Shows the arguments passed in.

// passing objects and array

function calculateCartPrice (...num1) {      // using rest operator to convert multiple arguments into array
    return num1
}
// rest and spread operator look same but the name changes depending upon the use case
console.log(calculateCartPrice(200, 400, 1200, 500));    // Multiple arguments

function calculateCartPrice2 (val1, val2, ...num1) {     // here the 1st and 2nd values will be stored in val1 and val2
    console.log(`Val1 is ${val1}`);                      // rest will be stored in num1 using '...' rest operator
    console.log(`Val2 is ${val2}`);
    return num1
}

console.log(calculateCartPrice2(200, 400, 1200, 500, 555, 1299));

const user = {
    userName: "Prince",
    userAge: 29
}

function handleObject(anyObject) {
    console.log(anyObject.userName);    // this will only work if the called keys are present in object
    console.log(anyObject.userAge);
    console.log(anyObject.userId);
    console.log(anyObject.isLoggedIn);
}

handleObject(user)

// Another method is by directly calling the object within the function
handleObject({
    userName: "Rupanzil",
    userAge: 31,
    userId: 221123,
    isLoggedIn: false
})

