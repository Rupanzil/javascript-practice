// Date 05-01-2024

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (val) => {
    console.log(val);
})    // forEach() doesn't return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>4 )   // Filters out elements of an array based on a condition
console.log(newNums);

const anotherNewNums = myNums.filter( (num) => {              // curly braces will not return any value by default
    num > 4
}) 
console.log(anotherNewNums);     // returns empty array as we have started a new scope by adding a curly braces
// to deal with it we need a return statement added to it.

const anotherNewNums1 = myNums.filter( (num) => {              // curly braces will not return any value by default
    return num > 4
}) 
console.log(anotherNewNums1);

let newNums1 = []
myNums.forEach( (num) => {
    if (num>4) {
        newNums1.push(num)      // This does the same thing as the filter function
    }
})

console.log(newNums1);