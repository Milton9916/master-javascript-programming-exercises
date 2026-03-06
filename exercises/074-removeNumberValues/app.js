function removeNumberValues(obj) {
    // your code here
    let num;
    for (num in obj){
        if(typeof(obj[num])=== "number"){
            delete obj[num]
        }
    }
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
