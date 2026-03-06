function getLengthOfLongestElement(arr) {
    // Your code here
    let largo = [];
    if (!arr.length){
        return 0;
    }else{
        for ( let i of arr){
            largo.push(i.length);
        
        }
    }
    
    return Math.max(...largo)
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
