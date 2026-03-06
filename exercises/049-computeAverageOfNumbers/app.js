// Write your function here
let input = [];
let output = computeAverageOfNumbers (input);
function computeAverageOfNumbers (array){
    let suma = 0;
    let promedio;
    if ( array.length === 0){
        return 0
    }else {
        for (let i = 0; i <array.length; i++){
            suma += (array[i]);
            promedio = suma / array.length;
        }
        
        return promedio
    }
      
    
};
console.log(output);
