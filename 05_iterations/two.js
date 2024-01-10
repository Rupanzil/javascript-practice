// 04-01-2024


// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue
// break statement completely executes the loop
// continue statement skips all the statements after it upto the scope of the loop and then again continues running the loop
//fizz buzz program is a good example to show the use of continue statement
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

/* for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
} */

// write a fizzbuzz program

for (let index = 1; index <= 100; index++) {
    if (index%3 === 0 && index%5 === 0) {
        console.log("fizzbuzz");
        // continue                            // continue statement used to skip the next checking, but if else is used then not needed
    } else if (index % 3 === 0) {
        console.log("fizz");
    }else if (index%5 === 0) {    
        console.log("buzz");
    } else console.log(index);
}