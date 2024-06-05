"use strict";
let current_users = [`ALi`, `AhMed`, `Saim`, `Harjeet`, `Dilawar`];
let new_userName = [`Bilal`, `ALi`, `Usama`, `Jamil`, `Hamza`];
new_userName.forEach(newUsername => {
    let lowerCase = newUsername.toLocaleLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The user ${newUsername} isn't available. Please write different username`);
    }
    else
        (`The username ${newUsername} is available.`);
});
