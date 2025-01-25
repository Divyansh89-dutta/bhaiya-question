// 11. Declare a variable using let and log its value.
let vari = "hello world";
console.log("variable", vari);
// 12. Create a constant to store the value of PI and log it.
const PI = 3.14159;
console.log("const", PI);
// 13. Reassign a value to a variable declared with let and log the result.
let rea = 10;
console.log("rea", rea);
rea = 20;
console.log("rea", rea);
// 14. Check the type of null and log it
console.log("null", typeof null);
// 15. Create a variable with a number as a string (e.g., "25") and log its type.
const num = "25";
console.log("type of num", typeof num);
//16. Use typeof to check the type of a boolean variable.
const bo = true;
console.log("type of bo", typeof bo);
//17. Create three variables of types string, number, and boolean, and log their values.
const str = "hello";
const numb = 25;
const anoth = false;
console.log("String:", str,"Number:",numb, "Boolean:", anoth);
// 18. Declare a variable without assigning a value. Log its type.
let un;
console.log("un", typeof un);
// 19. Create a variable with undefined and log its type.
let und = undefined;
console.log("type of und", typeof und);
// 20. Use const to create an array. Try reassigning the array and observe the error.
const arr = [1,2,3];
console.log("arr:", arr);
// adding element (allowed with const)
arr.push(4);
console.log("Modified array:",arr);
try{
    // reassigning array (not allowed with const)
    arr = [5,6,7];
}
catch(error){
    console.log("Error:", error);
}