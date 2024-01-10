// 02 Jan 2024. - Sargachi
// My journey to become a full stack web developer.

//+++++++++++ Arrays - part 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvelHeros = ["spiderman", "thor", "iron man"]
const dcHeroes = ["superman", "batman", "flash", "robin"]

// I want to merge the two arrays

// const allHeroes = marvelHeros.push(dcHeroes)
// console.log(allHeroes);
// console.log(marvelHeros);
// If an array is pushed inside an array then the arrays as a whole will be pushed
// and will create a nested array.

allHeroes = marvelHeros.concat(dcHeroes)
console.log(allHeroes);

// there is another way to merge two arrays
// using spread operator ...
const allNewHeroes = [...marvelHeros, ...dcHeroes]
console.log(allNewHeroes);

let nestedArray = [1, 2, 3, [4, 5 , 6], 5, 2, 0, [1, 2, 3, [2, 5, 9, 7]]]
console.log(nestedArray);

// flattens the array
let flattenedArray = nestedArray.flat(Infinity)   // depth can be specified or infinity can be selected and it
// will automatically detect the amount of nesting and convert the whole nested array into 
// a one dimensional array.

console.log(flattenedArray);

const myName = "Rupanzil"
console.log(Array.isArray(myName));    // Can be used to check if an object/variable is array or not
const myNameArray = Array.from(myName);    //Can be used to convert a string into an array
console.log(myNameArray);
