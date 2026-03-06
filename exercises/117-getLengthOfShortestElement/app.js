function getLengthOfShortestElement(arr) {
    // your code here
    let arr1 = [];
    if (!arr.length){
        return 0;
    }else{
        for (let i of arr){
            arr1.push(i.length)
        }
    }
    let reusltado = Math.min(...arr1)
    
    return reusltado
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
