// Write your function here
let arr = [`a`,`c`,`e`];
let obj = {
    a:1,
    b:2,
    c:3,
    d:4
};

let output = select(arr,obj)

function select (arr,obj){
    let keys = Object.keys(obj)
    let resultado = keys.filter(igl => arr.includes(igl))

    let nuevo = {};
    for (let key of resultado){
        nuevo[key] = obj[key]
    }
    return nuevo
};

console.log(output);