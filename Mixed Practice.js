// 81. Write a function that accepts an array of numbers and returns only the even numbers.
function even(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(even([1, 2, 3, 4, 5])); // Output: [2, 4]

//   82. Create a program to count the occurrences of a specific value in an array.
function count(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log(count([1, 2, 2, 3, 4, 2], 2)); // Output: 3
//   83. Write a function that accepts a string and returns whether it’s a palindrome.

function palindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(palindrome("radar")); // Output: true
console.log(palindrome("hello")); // Output: false

//   84. Create a program to log a pattern:
function print(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}
print(4);

//   85. Write a function that returns the square of each number in an array.
function squ(arr) {
    return arr.map(num => num ** 2);
}
console.log(squ([1, 2, 3, 4])); // Output: [1, 4, 9, 16]

//   86. Use a for loop to sum all odd numbers between 1 and 50.
let sum = 0;
for (let i = 1; i <= 50; i += 2) {
    sum += i;
}
console.log(sum); // Output: 625

// 87. Create an object representing a person and log their full name.
let pe = { firstName: "Divyansh", lastName: "Dutta" };
console.log(`${pe.firstName} ${pe.lastName}`); 
// 88. Write a program to convert the string "10" to a number and add 5 to it.
let num = parseInt("10") + 5;
console.log(num); 
// 89. Write a program to reverse an array without using .reverse().
function revers(arr) {
    let rev = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}
console.log(revers([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
//   90. Create a program to check if an array is empty.
function empty(arr) {
    return arr.length === 0;
}
console.log(empty([]));
console.log(empty([1, 2])); 
//   91. Write a program to fetch the current date and format it as DD/MM/YYYY.
let today = new Date();
let formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`;
console.log(formattedDate); 

// 92. Write a program to find the smallest number in an array.
function small(arr) {
    return Math.min(...arr);
}
console.log(small([5, 2, 9, 1])); 
//   93. Create a function to return the Fibonacci sequence up to n terms.
function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}
console.log(fibonacci(7));
//   94. Use a try...catch block to handle division by zero.
function div(a, b) {
    try {
        if (b === 0) throw "Cannot div";
        return a / b;
    } catch (error) {
        return error;
    }
}
console.log(div(10, 0)); 
console.log(div(10, 2)); 
//   95. Write a program to find the index of the first vowel in a string.
function vowel(str) {
    let vow = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vow.includes(str[i])) return i;
    }
    return -1;
}
console.log(vowel("hello"));

//   96. Create a function that accepts an array and returns only unique values.

function get(arr) {
    return [...new Set(arr)];
}

console.log(get([1, 2, 2, 3, 4, 4])); 

//   97. Write a program to merge two sorted arrays into one sorted array.
function arr(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(arr([1, 3, 5], [2, 4, 6])); 
//   98. Create a function to count the number of words in a string.
function count(str) {
    return str.split(" ").length;
}
console.log(count("divyansh"));

//   99. Write a program to toggle a button’s background color when clicked.
let button = document.getElementById("toggleBtn");
button.addEventListener("click", () => {
    button.style.backgroundColor = button.style.backgroundColor === "blue" ? "red" : "blue";
});
//   100. Write a function to check if all elements in an array are greater than a specific value
function great(arr, value) {
    return arr.every(num => num > value);
}
console.log(great([10, 20, 30], 5));
console.log(great([10, 20, 30], 25)); 
