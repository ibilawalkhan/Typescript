let magiciansNames: string[] = ["Salman", "Junaid", "Hashir", "Asim"];

function show_magicians(magiciansList: string[]): void {
    for (let i = 0; i < magiciansList.length; i++) {
        console.log(`${magiciansList[i]} the Great magician’s`);
    }
}

show_magicians(magiciansNames);