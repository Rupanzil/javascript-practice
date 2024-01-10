// console.log(document.querySelectorAll('h1'))

const nodeListofList = document.querySelectorAll("li")
// querySelectorAll gives an iterable node List

const listFromClass = document.getElementsByClassName("list")
// This gives HTML Collection which is not iterable
// So, we need to convert this HTML collection into an array
const arrayFromClass = Array.from(listFromClass)
// Now arrayFromClass has iterable methods available