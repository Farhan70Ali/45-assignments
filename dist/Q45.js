"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const storeCarInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return storeCarInfo;
}
;
let answers = storeCarInfo(`Honda`, `Civic`, { colour: `black` }, { features: [`Navigation`, `Power Window`] });
console.log(answers);
