// JS arrays create shallow copies and not deep copies
// array methods

let myArr = [0,1,2,3,4,5,6,7,8,9,10]
let myNewArr = myArr

myNewArr.unshift(11)    // This will add 11 at starting of the array
console.log(myArr);     // Operation is done on the copy but still myArr gets modified

let newArr = myArr.join()    // This will create a string
console.log(newArr);

myNewArr.shift()    // This removes element from starting
myNewArr.shift() 
console.log(myArr);
// This shows why array creates shallow copy

var originalArray = [1, 2, { a: 3, b: 4 }];

// Creating a deep copy using JSON methods
var deepCopyArray = JSON.parse(JSON.stringify(originalArray));

//Splice and slice methods
const myNewArr1 = myArr.slice(1,3)
console.log(myArr);
console.log(myNewArr1);

//Slice doesn't change the original array and
// creates a new slice from the original array

const myNewArr2 = myArr.splice(1,3)
console.log(myArr);
console.log(myNewArr2);

// splice 
//    1. cuts the original array
//    2. the upperlimit of the range is included
