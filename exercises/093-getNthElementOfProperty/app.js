// Write your function here
let obj = {
    key:[1,2,6]
};
function getNthElementOfProperty (obj1 , key1, num){
    if (!obj1[key1]){
        return undefined;
    }else{return obj1[key1][num]  }
    
};

let output = getNthElementOfProperty(obj,`key`,1)
console.log(output)