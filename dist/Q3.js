"use strict";
let person_Name = "Farhan Ali";
console.log(person_Name.toLocaleLowerCase());
console.log(person_Name.toLocaleUpperCase());
let firstLetter = person_Name.charAt(0).toLocaleUpperCase();
let restLetters = person_Name.slice(1).toLocaleLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);
