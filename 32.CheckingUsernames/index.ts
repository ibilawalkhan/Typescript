let current_users: string[] = ["Junaid", "Hashir", "Asim", "Salman", "Jawad"];
let new_users: string[] = ["Ateeq", "Cheena", "Faseeh", "Salman", "Junaid"];

for (let i = 0; i < new_users.length; i++) {

    let isNewUserNameAvailable: boolean = true;

    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            isNewUserNameAvailable = false;
            break;
        }
    }

    if (isNewUserNameAvailable) {
        console.log(`The username ${new_users[i]} is available `);
    } else {
        console.log(`${new_users[i]} is already in used! The person will need to enter a new username`);
    }
}
