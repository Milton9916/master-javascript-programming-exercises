// Write your function here
let obj ={
    key:[1000,20,50,5000]
};

let output = getElementsLessThan100AtProperty(obj,`key`)
function getElementsLessThan100AtProperty (obj1,key1){
    let arreglo = obj1[key1];
    let resultado;

    if (!arreglo || !Array.isArray(arreglo)){
        return [];
    }else{
       resultado = arreglo.filter(num1 => num1 < 100)
    }

    return resultado

};

console.log(output);
