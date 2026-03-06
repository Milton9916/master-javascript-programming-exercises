// Write your function here
let obj = {
    key:[1,2,5]
};

let output = getLastElementOfProperty(obj,`key`);

function getLastElementOfProperty (obj1, key1){
    let arr =(obj1[key1]);
        if (!arr){
            return undefined
        }else{
            return arr[arr.length -1]
        }
    
};

console.log(output)