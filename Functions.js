// 41. Check if a number is even or odd.
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}
console.log(checkEvenOrOdd(5));
console.log(checkEvenOrOdd(8));

// 42. Calculate the area of a circle with a given radius.
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateArea(5));
// 43. Return the sum of elements in an array.
function sumAarray(array) {
    return array.reduce((sum, element) => sum + element, 0);
}
console.log(sumAarray([1, 2, 3, 4, 5]));
// 44. Check if a string starts with a specific character.
function startWithChar(str, char) {
    return str.startsWith(char);
}

console.log(startWithChar("hello world", "h"));
console.log(startWithChar("hello world", "l"));
// 45. Find the maximum of two numbers.
function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(findMax(5, 10));
// 46. Return the factorial of a number.
function factorial(num){
    if(num === 0 || num === 1)
        return 1;
    else
        return num * factorial(num-1);
}
console.log(factorial(5));
// 47. Return the reverse of a string.
function reverse(str){
    return str.split('').reverse().join('');
}
console.log(reverse("hello"));
// 48. Find the largest number in an array.
function findLargestNumber(array){
    return Math.max(...array);
}
console.log(findLargestNumber([1, 2, 3, 4, 5]));
// 49. Convert a string to kebab-case.
function tokababCase(str){
    return str.replace(/\s+/g, '-').toLowerCase();
}
console.log(tokababCase("Hello World"));
// 50. Log "Hello, World!" every time the function is called.
 function logHelloWorld(){
    console.log("Hello, World!");
}
logHelloWorld();