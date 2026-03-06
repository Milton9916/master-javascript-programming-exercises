let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    let ex2;
    for (ex2 in obj2){
        if (ex2 in obj1){
        }else {
            obj1[ex2] = obj2[ex2]
        }
    }
}

extend(obj1,obj2);

console.log(obj1);
console.log(obj2);
