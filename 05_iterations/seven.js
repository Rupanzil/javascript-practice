// Date: 05-01-2024


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);

// chaining of methods

const myNewNums = myNumbers.
                    map( (num) => num*10 ).
                    map( (num) => num+1 ).         // this method uses the value obtained from the previous method.
                    filter( (num) => num>40 )      // This is called chaining of method

console.log(myNewNums);

