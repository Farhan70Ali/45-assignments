"use strict";
var myFriend = ["Ali", "Ahmed", "Sara"];
console.log(`Due to personal reasons Me. ${myFriend[1]} is not coming to dinner`);
myFriend[1] = "Saim";
console.log(`New list of friends who are coming to the dinner\n`);
for (let i = 0; i < myFriend.length; i++) {
    console.log(`${i}. ${myFriend[i]}`);
}
