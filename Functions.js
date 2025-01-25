// 41. Check if a number is even or odd.
function check(num) {
    return num % 2 === 0 ? "even" : "odd";
}
console.log(check(5));
console.log(check(8));

// 42. Calculate the area of a circle with a given radius.
function area(rad) {
    return Math.PI * rad * rad;
}
console.log(area(5));
// 43. Return the sum of elements in an array.
function sum(array) {
    return array.reduce((sum, element) => sum + element, 0);
}
console.log(sum([1, 2, 3, 4, 5]));
// 44. Check if a string starts with a specific character.
function char(str, char) {
    return str.startsWith(char);
}

console.log(char("divyansh", "h"));
console.log(char("divyansh", "i"));
// 45. Find the maximum of two numbers.
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(max(5, 10));
// 46. Return the factorial of a number.
function fact(num){
    if(num === 0 || num === 1)
        return 1;
    else
        return num * fact(num-1);
}
console.log(fact(5));
// 47. Return the reverse of a string.
function rev(str){
    return str.split('').rev().join('');
}
console.log(rev("hello"));
// 48. Find the largest number in an array.
function find(array){
    return Math.max(...array);
}
console.log(find([1, 2, 3, 4, 5]));
// 49. Convert a string to kebab-case.
function tob(str){
    return str.replace(/\s+/g, '-').toLowerCase();
}
console.log(tob("Hello World"));
// 50. Log "Hello, World!" every time the function is called.
 function hello(){
    console.log("Hello, World!");
}
hello();