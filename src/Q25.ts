let myNewFriends:string []= ["Ahmed", "Ali"," Honey","Abdul Wasay"];
console.log(`Due some personal reason Mr. ${myNewFriends[2]} will not come to dinner.`);
myNewFriends[2] = "Harjeet";


console.log(`my new friends who are coming my dinner`);
for(let i = 0; i< myNewFriends.length; i++ ){
    console.log(`${i}.${myNewFriends[i] }`);

    
}