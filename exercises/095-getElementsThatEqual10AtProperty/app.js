// Write your function here
let obj ={
    key:[1000,10,50,10]
};

let output = getElementsThatEqual10AtProperty (obj,`key`)

function getElementsThatEqual10AtProperty(arr,key1){
    let i10 = arr[key1];
    let valor;
    if (!i10 || !Array.isArray(i10)){
        return [];
    }else{
        valor = i10.filter(item => item === 10);
    }
    
    return valor
};

console.log(output);