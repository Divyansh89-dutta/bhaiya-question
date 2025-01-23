// 71. Create a string and log its length.
let str = "divyansh";

console.log(str.length);
// 72. Extract the last 4 characters of a string.
console.log(str.slice(-4));
// 73. Convert a string to lowercase and log it.
console.log(str.toLowerCase());
// 74. Split a sentence into words using .split() and log the result.
let sen = "hi everyone";

console.log(sen.split(" "));
// 75. Find the position of the first occurrence of "a" in a string.

console.log(str.indexOf("a"));

// 76. Replace "JavaScript" with "JS" in the string "I love JavaScript".
console.log(str.replace("JavaScript", "javascript"));
// 77. Repeat a string 3 times using .repeat().

console.log(str.repeat(3));
// 78. Create a function that checks if a string contains a specific word.
function containsWord(text, word){
    return text.includes(word);
}

console.log(containsWord(str, "world"));
// 79. Write a program to remove whitespace from both ends of a string.
let paddingString = "hello world";

console.log(paddingString.trim());
// 80. Create a function to count the number of vowels in a string.
function countVowels(str) {
    let vowels = 'aeiou';
    return text.split(" ").filter(char=> vowels.includes(char)).lenght;
}

console.log(countVowels("divyansh"));

