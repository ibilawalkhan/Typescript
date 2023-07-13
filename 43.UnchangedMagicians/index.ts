let magiciansNames: string[] = ["Salman", "Junaid", "Hashir", "Asim"];

let magiciansNamesCopy: string[] = [...magiciansNames];

function show_magicians(magiciansList: string[]): void {
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(`${magiciansList[i]}`);
    }
}

function make_great(magiciansList: string[]): void {
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(`${magiciansList[i]} the Great magician’s`);
    }
}

console.log("Original Array");
show_magicians(magiciansNames);

console.log("Copied Array");
make_great(magiciansNamesCopy);