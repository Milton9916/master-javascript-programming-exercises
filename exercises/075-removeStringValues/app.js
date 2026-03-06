function removeStringValues(obj) {
    // your code here
    let str;
    for (str in obj){
        if (typeof(obj[str])=== "string"){
            delete obj[str]
        }
    }
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
