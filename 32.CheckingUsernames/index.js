var current_users = ["Junaid", "Hashir", "Asim", "Salman", "Jawad"];
var new_users = ["Ateeq", "Cheena", "Faseeh", "Salman", "Junaid"];
for (var i = 0; i < new_users.length; i++) {
    var isNewUserNameAvailable = true;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            isNewUserNameAvailable = false;
            break;
        }
    }
    if (isNewUserNameAvailable) {
        console.log("The username ".concat(new_users[i], " is available "));
    }
    else {
        console.log("".concat(new_users[i], " is already in used! The person will need to enter a new username"));
    }
}
