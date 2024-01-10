// Date: 05-01-2023
// Reduce()

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let initialValue = 0
const sum = myNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue );

console.log(sum);

const anotherSum = myNumbers.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

console.log(anotherSum);
const newArr = [1, 2, 3, 4, 5]

const multiplication = newArr.reduce( (accumulator, currentValue) => accumulator * currentValue, 1)

console.log(multiplication);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 2999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]

// using reduce add the prices of the items in the shoppingCart

const totalfee = shoppingCart.reduce( ( accumulator, currentObject ) => accumulator + currentObject.price , 0 )

console.log(totalfee);
