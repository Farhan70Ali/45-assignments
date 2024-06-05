

let favoriteFruit = [] =["apple","mango","orange","mango","guava"]

if(favoriteFruit.includes("guava")){
console.log(`I would like to eat guava`);

}else if (favoriteFruit.includes("banana")){
    console.log(`I would like to eat orange`);
    
}else if (favoriteFruit.includes("apple")) {
    console.log(`I really like apple`);
    
}else if(favoriteFruit.includes("mango")){
    console.log(`I would like to eat mango `);
    
}else{
    console.log(`fruit isn't available`);
    
}