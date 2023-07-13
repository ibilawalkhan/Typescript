let guests: string[] = ["Junaid", "Salman", "Asim", "Hashir"];

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, This is an invitation from my side to you to come to my palace for dinner`);
}

console.log("")

console.log("Asim can't make to attend the dinner\n");

console.log("\tNew invitation");

guests[2] = "Ateeq";

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, Please accept my invitation for the dinner at my palace`);
}
console.log("");

console.log("\tGood News! I found a bigger dinner table!");

let newGuests: string[] = ["Faseeh", "Umer"];
guests.unshift("Ateeq"); // Add new guest to the beginning
guests.splice(2, 0, ...newGuests); // Add new guest to the middle
guests.push("Jawad");

for (let i = 0; i < guests.length; i++) {
    console.log(`My friend ${guests[i]}, you are invited at my palace for dinner`);
}

console.log("");

console.log("Oppss! Dinner table won't arrive in time for the dinner, and we have space for only two guests!");
console.log("Now we can invite only two people for dinner");

for (let i = 0; i < guests.length - 1; i++) {
    console.log(`${guests.pop()} I'm sorry you can't invite to the dinner`)
}

console.log("");
console.log("Invited ones")
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are still invited to the dinner`);
    guests.pop();
}