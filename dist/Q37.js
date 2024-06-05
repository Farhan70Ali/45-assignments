"use strict";
function myShirt(size = `large`, text = `I love typescript`) {
    console.log(`This is my shirt's size ${size} and this the message ${text} `);
}
myShirt();
myShirt(`medium`);
myShirt(`small`, `I love Python`);
