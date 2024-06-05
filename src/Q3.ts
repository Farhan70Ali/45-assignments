let person_Name: string = "Farhan Ali";
console.log(person_Name.toLocaleLowerCase ());
console.log(person_Name.toLocaleUpperCase());

let firstLetter: string = person_Name.charAt(0).toLocaleUpperCase();
let restLetters: string = person_Name.slice(1).toLocaleLowerCase();

let titleCase = firstLetter + restLetters ;
console.log(titleCase);