// 61. Create an object with properties name, age, and city. Log the object.
let person = { name: 'Divyansh', age: 12, city: 'San Francisco' };

console.log(person);

// 62. Add a new property isStudent to the object above and set it to true
person.isStudent = true;

console.log(person);
// 63. Access and log the value of the city property using bracket notation.
console.log(person['city']);
//64. Delete the age property from an object and log the updated object
delete person.age;

console.log(person);
// 65. Write a function that accepts an object and logs all its keys.
function logKeys(obj) {
    console.log(Object.keys(obj));
  }
  logKeys(person); // Output: ["name", "city", "isStudent"]
  
// 66. Create an array of objects representing books with title and author properties.
let book = [{ title: 'Divyansh', author: 'Divyansh Smith ' },
{ title: 'Divyansh', author: 'Divyansh Doe' },
]

console.log(book);

// 67. Access and log the author of the second book in the array.
console.log(book[1].author);
// 68. Write a program to check if a specific key exists in an object.
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(hasKey(person, 'city')); // true
console.log(hasKey(person, "age"));

// 69. Create a function to count the number of keys in an object.
function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log(countKeys(person)); // 
// 70. Use Object.assign() to merge two objects.
let obj1 = {a:1, b:2};
let obj2 = {c:3, d:4};

let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // {a: 1, b: 2, c: 3, d: 4}