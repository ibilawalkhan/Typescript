var personName: string = "\t Bilawal Khan \n";

console.log("Name with whitespace: ");
console.log(`${personName}`);

let strippedName: string = personName.trim();

console.log("Name after stripping whitespace");
console.log(strippedName);