// Write your function here
let obj = {
    key:[1,20,30]
};

let output = getElementsGreaterThan10AtProperty(obj,`key`)
function getElementsGreaterThan10AtProperty (obj1,key1){
    let arreglo = obj1[key1];
    let resultado;
    if (!arreglo || !Array.isArray(arreglo)){
        return [];
    }else{
        resultado = arreglo.filter(arr => arr > 10)
    }
    return resultado
};

console.log(output);