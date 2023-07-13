var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["Junaid", "Salman", "Asim", "Hashir"];
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", This is an invitation from my side to you to come to my palace for dinner"));
}
console.log("");
console.log("Asim can't make to attend the dinner\n");
console.log("\tNew invitation");
guests[2] = "Ateeq";
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", Please accept my invitation for the dinner at my palace"));
}
console.log("");
console.log("\tGood News! I found a bigger dinner table!");
var newGuests = ["Faseeh", "Umer"];
guests.unshift("Ateeq"); // Add new guest to the beginning
guests.splice.apply(// Add new guest to the beginning
guests, __spreadArray([2, 0], newGuests, false)); // Add new guest to the middle
guests.push("Jawad");
for (var i = 0; i < guests.length; i++) {
    console.log("My friend ".concat(guests[i], ", you are invited at my palace for dinner"));
}
console.log("");
console.log("Oppss! Dinner table won't arrive in time for the dinner, and we have space for only two guests!");
console.log("Now we can invite only two people for dinner");
for (var i = 0; i < guests.length - 1; i++) {
    console.log("".concat(guests.pop(), " I'm sorry you can't invite to the dinner"));
}
console.log("");
console.log("Invited ones");
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", you are still invited to the dinner"));
    guests.pop();
}
