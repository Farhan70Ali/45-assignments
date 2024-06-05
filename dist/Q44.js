"use strict";
function makeSandwich(item) {
    console.log(`\n\nMaking your sandwich with:`);
    item.forEach(element => console.log("-" + element));
    console.log(`\n\nEnjoy your sandwich !`);
}
makeSandwich([`Ham`, `Cheese`, `lettuce`]);
makeSandwich([`Turkey`, `Bacon`]);
makeSandwich([`Peanut Butter`, `Jelly`]);
