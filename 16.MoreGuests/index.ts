let guests: string[] = ["Junaid", "Salman", "Asim", "Hashir"];

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, This is an invitation from my side to you to come to my palace for dinner`);
}

console.log("Asim can't make to attend the dinner");

console.log("\tNew invitation");

guests[2] = "Ateeq";

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, Please accept my invitation for the dinner at my palace`);
}

console.log("\tGood News! I found a bigger dinner table!");

let newGuests: string[] = ["Faseeh", "Umer"];
guests.unshift("Ateeq"); // Add new guest to the beginning
guests.splice(2, 0, ...newGuests); // Add new guest to the middle
guests.push("Jawad");

for (let i = 0; i < guests.length; i++) {
    console.log(`My friend ${guests[i]}, you are invited at my palace for dinner`);
}