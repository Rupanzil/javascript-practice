// object creation using constructor
// const tinderUser = new Object();    // Singleton object
const tinderUser = {};    // new singleton object

tinderUser.id = "123abc";
tinderUser.name = "Rupanzil"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Nested objects
const regularUser = {
    email: "something@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Rupanzil",
            lastName: "Prince"
        }
    }
}

// console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstName);

// Combining object
const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

const combinedObject = Object.assign({}, obj1, obj2)    // Returns the combined object in empty object
console.log(combinedObject);

const anotherCombinedObject = { ...obj1, ...obj2}     // Combining using spread operators
console.log(anotherCombinedObject);

const arrayOfObjects = [
    {
        email: "Rupanzil@gmail.com",
        name: "Prince",
        age: 29
    },
    {
        email: "Mamun@gmail.com",
        name: "Mamun",
        age: 30
    },
    {
        email: "prince@gmail.com",
        name: "rupanzil",
        age: 32
    }
]

console.log(arrayOfObjects[2].name);    // accessing the third array object
console.log(Object.keys(arrayOfObjects));     // Prints the keys of the array of strings
console.log(Object.keys(arrayOfObjects[0]));     // Prints the keys of the object as strings
console.log(Object.entries(arrayOfObjects[0]));     // Prints the keys and value of the object as array of strings

const course = {
    courseName: "Web Dev Basics",
    courseInstructor: "hitesh",
    coursePrice: 999
}

const {courseInstructor} = course
console.log(courseInstructor);    // This is object de-structuring.
// No need to write course.courseInstructor every time 

const {courseName: name} = course    // Another way of destructuring object
console.log(name);
