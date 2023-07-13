var magiciansNames = ["Salman", "Junaid", "Hashir", "Asim"];
function show_magicians(magiciansList) {
    for (var i = 0; i < magiciansList.length; i++) {
        console.log("".concat(magiciansList[i], " the Great magician\u2019s"));
    }
}
show_magicians(magiciansNames);
