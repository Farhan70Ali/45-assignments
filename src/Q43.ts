let magicians: string[]=[`Herry potter`,`Herimon granger`, `Rone Weasely`,`Albus Dumbledore`];

function copyArray(arr:string[]){
    return[...arr]
}
function makeGreat(magicianArray:string[]){

    for(let i= 0 ; i< magicianArray.length; i++){
        magicians [i] = `The great  ` + magicianArray[i]

    }

}



function showMagicians(magician:string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

const copymagiciansArray = copyArray(magicians)



makeGreat(copymagiciansArray);

console.log(`\n\nThis is my original array`);

showMagicians(copymagiciansArray);
console.log(`\n\nThis is my modifiedcopy of  array`);
showMagicians(copymagiciansArray);