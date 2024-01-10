// Date: 05-01-2024


const arr = [1,2,3,4,5]
const valueArray = []

for (const item of arr) {
    console.log(item);
}

objArray = [ {name: "rupanzil"}, {name: "prince"}, {name: "mamun"}]

for (const obj of objArray) {
    console.log(Object.values(obj));
    //now if we want to create an array of all the values
    valueArray.push(Object.values(obj))
}

console.log(valueArray);     // Here each value is as array inside the valueArray

for (const obj of objArray) {
    console.log(Object.values(obj));
    valueArray.push(...Object.values(obj))   // spread operator used to push the values as strings and not as array objects
}

console.log(valueArray); 

// ++++++++++++++ MAPS ++++++++++++++

const map = new Map()
map.set('IN', 'India')
map.set('USA', "United State of America")
map.set("fr", "France")
map.set("IN", "India")    // Duplicate values doesn't enter map

for (const mapElement of map) {
    console.log(mapElement);    // Prints an array of each key and value 
    // output -> [ 'IN', 'India' ][ 'USA', 'United State of America' ][ 'fr', 'France' ]
}

for (const [key, value] of map) {         // We can iterate over the keys and values separately by destructuring the array
    console.log(`The key is ${key} and the value is ${value}`);   
}

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

/* for (const [key, value] of myObject) {    // not possible as object is not iterable
    console.log(value);
} */

const myCodingList = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apples"
}

for (const key in myCodingList) {
    console.log(key);
    console.log(myCodingList.key);   // gives undefined
    console.log(`the key is ${key} and the value is ${myCodingList[key]}`);
}

const programming = ["js", "rb", "swift", "cpp"]

for (const chabi in programming) {
    console.log(programming[chabi])  // we can access the values at the indexed position of array like this
}

const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach Method iterates over each items in the array
coding.forEach( (key,val) => {
    console.log(key, " ",val);    // syntax is forEach ( item, index, array)
})

// myCodingList.forEach((val) => console.log(val))  // this doesn't work

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// getting access of object property within the array
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )