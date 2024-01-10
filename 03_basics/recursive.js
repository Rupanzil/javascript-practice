function factorial (number) {
    if (number > 1) {
        console.log(number);
        return number * factorial ( number - 1 )
    }
    else return number;
}

const result = factorial(50)
console.log(result);