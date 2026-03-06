let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}

function removeArrayValues(obj) {
    // your code here
    let arr;
    for (arr in obj){
        if (Array.isArray(obj[arr])){
            delete obj[arr];
        };
    };
    
    
};

removeArrayValues(obj)
console.log(obj)