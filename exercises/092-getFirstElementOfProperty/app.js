// Write your function here
let obj ={
    key:[1,2,4]
};
let output = getFirstElementOfProperty (obj,`key`)
function getFirstElementOfProperty (obje, llave){

    if (!obje[llave]){
        return undefined;
    }else{
        return obje[llave][0]
    }

    
};

console.log(output);