// I haven't recieved any index error in an array upto now, I will one intentional now

let guests: string[] = ["Junaid", "Salman", "Asim", "Hashir"];

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, This is an invitation from my side to you to come to my palace for dinner`);
}

console.log("Asim can't make to attend the dinner");

console.log("\tNew invitation");

// I want to access Asim but array index starts from 0 so it will replace Hashir instead of Asim
// guests[3] = "Ateeq"; 

// The correct index will be 2 because array index starts from 0
guests[2] = "Ateeq";

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, Please accept my invitation for the dinner at my palace`);
}
