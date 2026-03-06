function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    let resultado;
    if (!arr || !Array.isArray(arr) || !arr.length){
        return 0
    }else{
        resultado = arr.reduce((resul , resul1) => resul + resul1,0)
    }
    return resultado
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
