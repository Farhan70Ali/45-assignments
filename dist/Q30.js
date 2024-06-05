"use strict";
let userName = ["Ali", "Ahmed", "saim", "admin", "honey", "Abdul wasay"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "admin") {
        console.log(`\nHello ${userName[i]} would you like to see status report?\n`);
    }
    else {
        console.log(`Hello ${userName[i]} thank you for logging again!`);
    }
}
