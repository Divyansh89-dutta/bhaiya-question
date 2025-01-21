// 11. Declare a variable using let and log its value.
let variableUsingLet = "hello world";
console.log("variable", variableUsingLet);
// 12. Create a constant to store the value of PI and log it.
const PI = 3.14159;
console.log("const", PI);
// 13. Reassign a value to a variable declared with let and log the result.
let reassignVariable = 10;
console.log("reassignVariable", reassignVariable);
reassignVariable = 20;
console.log("reassignVariable", reassignVariable);
// 14. Check the type of null and log it
console.log("type of null", typeof null);
// 15. Create a variable with a number as a string (e.g., "25") and log its type.
const numberAsString = "25";
console.log("type of numberAsString", typeof numberAsString);
//16. Use typeof to check the type of a boolean variable.
const booleanVariable = true;
console.log("type of booleanVariable", typeof booleanVariable);
//17. Create three variables of types string, number, and boolean, and log their values.
const stringVariable = "hello";
const numberVariable = 25;
const anotherBooleanVariable = false;
console.log("String:", stringVariable,"Number:",numberVariable, "Boolean:", anotherBooleanVariable);
// 18. Declare a variable without assigning a value. Log its type.
let undeclaredVariable;
console.log("type of undeclaredVariable", typeof undeclaredVariable);
// 19. Create a variable with undefined and log its type.
let undefinedVariable = undefined;
console.log("type of undefinedVariable", typeof undefinedVariable);
// 20. Use const to create an array. Try reassigning the array and observe the error.
const myArray = [1,2,3];
console.log("myArray:", myArray);
// adding element (allowed with const)
myArray.push(4);
console.log("Modified array:",myArray);
try{
    // reassigning array (not allowed with const)
    myArray = [5,6,7];
}
catch(error){
    console.log("Error:", error);
}