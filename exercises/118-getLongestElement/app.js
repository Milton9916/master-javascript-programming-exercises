function getLongestElement(arr) {
    // your code here
    let arr1 = ``;

    if (!arr.length){
        return ``;

    }else{

        for (let i of arr){

            if (i.length > arr1.length){
                arr1 = i;

            }  
        }
    }
    
    return arr1
    
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
 