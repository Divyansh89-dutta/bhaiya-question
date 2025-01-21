//31 Create an array of your top 5 favorite movies and log it.
const favoriteMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight of the Order", "The Godfather"];
console.log(favoriteMovies);
// 32. Find and log the second element of an array.
const movies = ["The Godfather", "The Dark Knight of the Order", "The God"]
console.log(movies[1]);
// 33. Add two new elements to the start of an array using
const fruits = ["apple", "Banana"];
fruits.unshift("orange", "kiwi");
console.log(fruits);
// 34. Remove the last element of an array and log the updated array.
const colors = ["black", "white", "red"];
colors.pop();
console.log(colors);
// 35. Use .slice() to extract the first three elements of an array
const number = [10, 20, 30, 40, 50, 60,]
const firstThree = number.slice(0, 3);
console.log(firstThree);
// 36. Find the index of a specific element in an array using
const names = ["alice", "bob", "divyansh"];
const index = names.indexOf("bob");
console.log(index);
// 37. Check if a value exists in an array using .includes().
const cities = ["new", "london", "pp"];
const exists = cities.includes("london");
console.log(exists);
//  38. Combine two arrays [1, 2] and [3, 4] using .concat().
const arr1 = [1,2];
const arr2 = [3,4];
const conbinedArray = arr1.concat(arr2);
 console.log(combinedArray);
//  39. Sort an array of numbers [5, 2, 9, 1] in ascending order.
const numbers = [5,2,9,1];
numbers.sort((a,b)=>a-b);
console.log(numbers);
// 40. Write a program that creates a copy of an array without mutating the original.
const original = [1, 2, 3, 4, 5];
 const copied = [...original];
 console.log(copied);
 console.log(original===copied);
