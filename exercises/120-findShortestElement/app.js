function findShortestElement(arr) {
    // your code here
    let corto = arr[0];
    if (!arr.length){
        return ``;
    }else{
        for (let i of arr){
            if (i.length < corto.length){
                corto = i;
            }
        }
    }
    return corto;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'