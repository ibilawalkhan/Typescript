var guests = ["Junaid", "Salman", "Asim", "Hashir"];
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", This is an invitation from my side to you to come to my palace for dinner"));
}
console.log("Asim can't make to attend the dinner");
console.log("\tNew invitation");
guests[2] = "Ateeq";
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", Please accept my invitation for the dinner at my palace"));
}
