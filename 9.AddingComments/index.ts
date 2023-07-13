// Program 1
let myName: String = "bilawal khan";

console.log(myName.toLowerCase()); // Convert myName String to lowerCase
console.log(myName.toUpperCase()); // Convert myName String to upperCase
console.log(toTitleCase(myName)); // Convert myName String to titleCase

function toTitleCase(str: String): String {
    // First split the string which will make it an array then in that array start from first string and 
    // in the first string convert its first letter to uppercase then concatenate it to the rest of the 
    // rest string using join
    return str.split(' ').map((l: String) => l[0].toUpperCase() + l.substring(1)).join(' ');
}

// Program 2
var personName: string = "\t Bilawal Khan \n"; // \t is used for space while \n is used for next line

console.log("Name with whitespace: ");
console.log(`${personName}`);

let strippedName: string = personName.trim(); // trim method is used to remove the spaces from back and after

console.log("Name after stripping whitespace");
console.log(strippedName);
