// Write your function here
let obj = {
    key: ['It', 'has', 'some', 'words']
}

let output = getOddLengthWordsAtProperty (obj,`key`);
function getOddLengthWordsAtProperty (obj1,key1){
    let arreglo = obj1[key1];
    let resultado;

    if (!arreglo || !Array.isArray(arreglo)){
        return [];
    }else{
        resultado = arreglo.filter(letras => letras.length %2 !== 0);
    }
    return resultado;
};

console.log(output);