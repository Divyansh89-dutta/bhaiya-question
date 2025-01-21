//21. Print numbers from 1 to 50 using a for loop.
for (let i = 1; i <= 50; i++) {
    console.log(i);
}
//22. Sum the numbers from 1 to 10 using a while loop
let sun = 0;
let i = 1;
while (i <= 10) {
    sun += i;
    i++;
}
console.log(sun);
//23. Log each character of the string "JavaScript" using a for...of loop.

const str = "JavaScript";
for (let char of str) {
    console.log(char);
}
//24. Write a for loop that skips even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
//25. Log numbers from 5 to 1 using a do...while loop.
let num = 5;
do {
    console.log(num);
    num--;
} while (num >= 1);
//26. Calculate the factorial of 5 using a for loop.

let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(factorial);
//27. Print a 3x3 grid of numbers using a nested loop.
for (let row = 1; row <= 3; row++) {
    let gridRow = '';
    for (let col = 1; col <= 3; col++) {
        gridRow += `${col} `;
    }
    console.log(gridRow);
}
//28. Reverse an array [1, 2, 3, 4] using a for loop.
const array = [1, 2, 3, 4];
const reveredArray = [];
for (let i = array.length - 1; i >= 0; i--) {
    reveredArray.push(array[i]);
}
console.log(reveredArray);
//29. Log numbers from 1 to 100 divisible by 5 using a while loop.
let n = 1;
while (n <= 100) {
    if (n % 5 === 0) {
        console.log(n);
    }
    n++;
}
//30. Iterate over an object and log its keys using a for...in loop.
const obj = { name: "Divyansh", age: 25, city: "bhopal" };
for (let key in obj) {
    console.log(key);
}

