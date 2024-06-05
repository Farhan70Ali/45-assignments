let magician1: string[]=[`Herry potter`,`Herimon granger`, `Rone Weasely`,`Albus Dumbledore`];

function make_great(magicianArray:string[]){

    for(let i= 0 ; i< magicianArray.length; i++){
        magician1 [i] = `The great  ` + magicianArray[i]

    }

}



function show_Magicians(magician:string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

make_great(magician1);
show_Magicians(magician1);