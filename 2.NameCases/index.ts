let myName: string = "bilawal khan";

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(toTitleCase(myName));

function toTitleCase(str: String): String {
    return str.split(' ').map((l: String) => l[0].toUpperCase() + l.substring(1)).join(' ');
}



/*
Second method

function toTitleCase(str: string): string {
    const word = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(' ');
}
*/