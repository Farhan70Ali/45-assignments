"use strict";
let myFavPlaces = ["Karachi ", "Lahore", "Islamabad", "Hyderabad", "Turkey",];
console.log(myFavPlaces);
// for copying array
let copyOfArray = myFavPlaces.slice();
// for making array alphabatically
let sortedArray = copyOfArray.sort();
console.log(sortedArray);
// printing origional array
console.log(myFavPlaces);
// reversing origional array
// first we have to make copy of origional
let copyOfArray2 = myFavPlaces.slice();
let revOriArray2 = copyOfArray2.reverse();
console.log(revOriArray2);
// printing origional array
console.log(myFavPlaces);
// reverse the order of origional array
let revOriArr2 = myFavPlaces.slice();
console.log(revOriArr2);
let revAgain = revOriArray2.reverse();
console.log(revAgain);
// sorting origional array
let sortedOriArray = myFavPlaces.sort();
console.log(sortedOriArray);
let reveseSortedArray = sortedOriArray.reverse();
console.log(reveseSortedArray);
