// let userNames: string[] = ["admin", "Hashir", "Asim", "Salman"];
let userNames: string[] = [];

if (userNames.length > 0) {
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i] == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again!`);
        }
    }
} else {
    console.log("We need to find some users");
}