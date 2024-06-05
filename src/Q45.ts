import {features} from "process";


function storeCarInfo(manufacturer: string, modelName: string, ...extraOption:{[key:string]:any} [] ):

object {


    const storeCarInfo = {
        manufacturer,
        modelName,
        ...Object.assign({},...extraOption)

    }
    return storeCarInfo;
};

let answers = storeCarInfo(`Honda`,`Civic`,{colour:`black`},{features:[`Navigation`,`Power Window`]})
console.log(answers);

 