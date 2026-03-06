// Write your function here
function findMinLengthOfThreeWords (una, dos,tres){
    let respuesta = Math.min(una.length, dos.length, tres.length);
    return respuesta
};

let output = findMinLengthOfThreeWords(`a`, `be`, `see`);
console.log(output);