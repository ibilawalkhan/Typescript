console.log("Tests for equality and inequality with strings");
var myName = "John";
console.log(myName === "John"); // true
console.log(myName !== "Jane"); // true
console.log(myName === "jOhn"); // false
console.log(myName !== "John"); // false
console.log("Tests using the lowercase function");
var word = "HELLO";
console.log(word.toLowerCase() === "hello"); // true
console.log(word.toLowerCase() !== "hello"); // false
console.log(word.toLowerCase() === "goodbye"); // false
console.log(word.toLowerCase() !== "goodbye"); // true
console.log("Numerical tests ");
var x = 5;
var y = 10;
console.log(x === 5); // true
console.log(x !== 5); // false
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= 5); // true
console.log(x <= 5); // true
console.log("Tests using 'and' and 'or' operators");
var age = 25;
var isStudent = true;
console.log(age > 18 && isStudent); // true
console.log(age > 30 && isStudent); // false
console.log(age > 18 || isStudent); // true
console.log(age > 30 || isStudent); // true
console.log("Test whether an item is not in an array");
var fruits = ["apple", "banana", "orange"];
var searchFruit = "mango";
console.log(!fruits.includes(searchFruit)); // true
console.log(!fruits.includes("banana")); // false
