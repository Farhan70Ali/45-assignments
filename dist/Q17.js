"use strict";
var myfriends = ["saim", "Ali", "honey", "Mohammad", "Dildar", "Mudassir",];
console.log(`Table is not available so I can invite only 2 persons\n`);
// remove all four last element
let friend1 = myfriends.pop();
console.log(`Sorry Mr .${friend1} You are not invited`);
let friend2 = myfriends.pop();
console.log(`Sorry Mr .${friend2} You are not invited`);
let friend3 = myfriends.pop();
console.log(`Sorry Mr .${friend3} You are not invited`);
let friend4 = myfriends.pop();
console.log(`Sorry Mr .${friend4} You are not invited`);
for (let i = 0; i < myfriends.length; i++) {
    console.log(`Mr. ${myfriends[i]} You are invited!`);
}
myfriends.pop();
myfriends.pop();
console.log(myfriends);
