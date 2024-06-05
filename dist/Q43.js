"use strict";
let magicians = [`Herry potter`, `Herimon granger`, `Rone Weasely`, `Albus Dumbledore`];
function copyArray(arr) {
    return [...arr];
}
function makeGreat(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicians[i] = `The great  ` + magicianArray[i];
    }
}
function showMagicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copymagiciansArray = copyArray(magicians);
makeGreat(copymagiciansArray);
console.log(`\n\nThis is my original array`);
showMagicians(copymagiciansArray);
console.log(`\n\nThis is my modifiedcopy of  array`);
showMagicians(copymagiciansArray);
