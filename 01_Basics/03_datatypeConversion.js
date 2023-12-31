let score = "33"

console.log(typeof(score))

let value = Number(score);    // Number with first letter as capital is used for datatype conversion

console.log(typeof(value))

let valueInString = String(value)

console.log(typeof(valueInString));

let notNumber = "Rupanzil"
console.log(typeof(notNumber));
// Trying to conver notNumber into a number datatype

notNumber = Number(notNumber);
console.log(typeof(notNumber));
console.log(notNumber);    //Showing NaN -> Not a Number. NaN is a datatype

let aNullValue = null
console.log(typeof(aNullValue));
// converting a null datatype to number datatype

let nullToNumberValue = Number(aNullValue)
console.log(typeof(nullToNumberValue));
console.log(nullToNumberValue);    // So, a null value is converted to 0 when we convert it to number.

let nullToStringValue = String(aNullValue)
console.log(typeof(nullToStringValue))
console.log(nullToStringValue + "value");    // This shows null like a string
console.log(aNullValue);    // This shows "null" in bold

// Boolean values will be converted to 0 and 1 when converted to numbers
let gameStarted = true;
let gameOver = false

let booleanToStringTrue = String(gameStarted)
let booleanToStringFalse = String(gameOver)

console.log(booleanToStringFalse)
console.log(booleanToStringTrue);

console.log(gameOver);
console.log(gameStarted);

// When we change datatype to boolean
// 1 => true
// 0 => false
// "notanemptyStriing" => true
// "" => false