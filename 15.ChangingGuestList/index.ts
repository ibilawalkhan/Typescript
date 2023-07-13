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