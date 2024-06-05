"use strict";
const addFriend = ["Abdulwasay", "Suleman", "Harjeet"];
console.log(addFriend);
console.log(`We have three friends to invite`);
// add three more friends
// add at the beginning
addFriend.unshift("Abu Bakr", "Jenny", "Sahil");
console.log(addFriend);
// add in the middle
addFriend.splice(2, 0, `Mohammad Ali`);
console.log(addFriend);
// add at the last
addFriend.push("Hammad");
console.log(addFriend);
for (let i = 0; i < addFriend.length; i++) {
    console.log(`Mr. ${addFriend[i]} You are invited to dinner .`);
}
