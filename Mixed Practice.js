// 81. Write a function that accepts an array of numbers and returns only the even numbers.
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]

//   82. Create a program to count the occurrences of a specific value in an array.
function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2)); // Output: 3
//   83. Write a function that accepts a string and returns whether it’s a palindrome.

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//   84. Create a program to log a pattern:
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}
printPattern(4);

//   85. Write a function that returns the square of each number in an array.
function squareNumbers(arr) {
    return arr.map(num => num ** 2);
}
console.log(squareNumbers([1, 2, 3, 4])); // Output: [1, 4, 9, 16]

//   86. Use a for loop to sum all odd numbers between 1 and 50.
let sum = 0;
for (let i = 1; i <= 50; i += 2) {
    sum += i;
}
console.log(sum); // Output: 625

// 87. Create an object representing a person and log their full name.
let person = { firstName: "John", lastName: "Doe" };
console.log(`${person.firstName} ${person.lastName}`); // Output: John Doe
// 88. Write a program to convert the string "10" to a number and add 5 to it.
let num = parseInt("10") + 5;
console.log(num); // Output: 15
// 89. Write a program to reverse an array without using .reverse().
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
//   90. Create a program to check if an array is empty.
function isEmptyArray(arr) {
    return arr.length === 0;
}
console.log(isEmptyArray([])); // Output: true
console.log(isEmptyArray([1, 2])); // Output: false
//   91. Write a program to fetch the current date and format it as DD/MM/YYYY.
let today = new Date();
let formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`;
console.log(formattedDate); // Output: DD/MM/YYYY (e.g., 23/01/2025)

// 92. Write a program to find the smallest number in an array.
function findSmallest(arr) {
    return Math.min(...arr);
}
console.log(findSmallest([5, 2, 9, 1])); // Output: 1
//   93. Create a function to return the Fibonacci sequence up to n terms.
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
//   94. Use a try...catch block to handle division by zero.
function divide(a, b) {
    try {
        if (b === 0) throw "Cannot divide by zero";
        return a / b;
    } catch (error) {
        return error;
    }
}
console.log(divide(10, 0)); // Output: Cannot divide by zero
console.log(divide(10, 2)); // Output: 5
//   95. Write a program to find the index of the first vowel in a string.
function firstVowelIndex(str) {
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) return i;
    }
    return -1;
}
console.log(firstVowelIndex("hello")); // Output: 1

//   96. Create a function that accepts an array and returns only unique values.

function getUniqueValues(arr) {
    return [...new Set(arr)];
}
console.log(getUniqueValues([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

//   97. Write a program to merge two sorted arrays into one sorted array.
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
//   98. Create a function to count the number of words in a string.
function countWords(str) {
    return str.split(" ").length;
}
console.log(countWords("I love JavaScript")); // Output: 3

//   99. Write a program to toggle a button’s background color when clicked.
let button = document.getElementById("toggleBtn");
button.addEventListener("click", () => {
    button.style.backgroundColor = button.style.backgroundColor === "blue" ? "red" : "blue";
});
//   100. Write a function to check if all elements in an array are greater than a specific value
function allGreaterThan(arr, value) {
    return arr.every(num => num > value);
}
console.log(allGreaterThan([10, 20, 30], 5));  // Output: true
console.log(allGreaterThan([10, 20, 30], 25)); // Output: false
