let places: string[] = ["Switzerland", "Finland", "Italy", "Saudi Arabia", "Dubai", "Qatar"];

console.log("Print as it is");
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("");

console.log("Print after alphabetic order");
let sortPlaces: string[] = places.slice().sort();
for (let i = 0; i < sortPlaces.length; i++) {
    console.log(sortPlaces[i]);
}
console.log("");

console.log("Array is still in its original order");
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("");

console.log("In reverse alphabetical order");
let reversePlaces: string[] = places.slice().sort().reverse();
for (let i = 0; i < reversePlaces.length; i++) {
    console.log(reversePlaces[i]);
}
console.log("");

console.log("Array is still in its original order");
for (let i = 0; i < places.length; i++) {
    console.log(places[i]);
}
console.log("");

console.log("Reverse the order of the array");
let reversedArray: string[] = places.slice().reverse();
for (let i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
console.log("");

console.log("Reverse the order of the array again");
let originalOrder: string[] = reversedArray.slice().reverse();
for (let i = 0; i < originalOrder.length; i++) {
    console.log(originalOrder[i]);
}
console.log("");

console.log("Sort the array in alphabetical order");
let sortedArray: string[] = places.slice().sort();
for (let i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
console.log("");

console.log("Sort the array in reverse alphabetical order");
let reverseSortedArray: string[] = places.slice().sort().reverse();
for (let i = 0; i < reverseSortedArray.length; i++) {
    console.log(reverseSortedArray[i]);
}
console.log("");
