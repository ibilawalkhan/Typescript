var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansNames = ["Salman", "Junaid", "Hashir", "Asim"];
var magiciansNamesCopy = __spreadArray([], magiciansNames, true);
function show_magicians(magiciansList) {
    for (var i = 0; i < magiciansList.length; i++) {
        console.log("".concat(magiciansList[i]));
    }
}
function make_great(magiciansList) {
    for (var i = 0; i < magiciansList.length; i++) {
        console.log("".concat(magiciansList[i], " the Great magician\u2019s"));
    }
}
console.log("Original Array");
show_magicians(magiciansNames);
console.log("Copied Array");
make_great(magiciansNamesCopy);
