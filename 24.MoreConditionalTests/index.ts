console.log("Tests for equality and inequality with strings");
let myName = "John";

console.log(myName === "John"); // true
console.log(myName !== "Jane"); // true
console.log(myName === "jOhn"); // false
console.log(myName !== "John"); // false

console.log("Tests using the lowercase function");
const word = "HELLO";

console.log(word.toLowerCase() === "hello"); // true
console.log(word.toLowerCase() !== "hello"); // false
console.log(word.toLowerCase() === "goodbye"); // false
console.log(word.toLowerCase() !== "goodbye"); // true

console.log("Numerical tests ");
const x = 5;
const y = 10;

console.log(x === 5); // true
console.log(x !== 5); // false
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= 5); // true
console.log(x <= 5); // true

console.log("Tests using 'and' and 'or' operators");
const age = 25;
const isStudent = true;

console.log(age > 18 && isStudent); // true
console.log(age > 30 && isStudent); // false
console.log(age > 18 || isStudent); // true
console.log(age > 30 || isStudent); // true

console.log("Test whether an item is not in an array");
const fruits = ["apple", "banana", "orange"];
const searchFruit = "mango";

console.log(!fruits.includes(searchFruit)); // true
console.log(!fruits.includes("banana")); // false

