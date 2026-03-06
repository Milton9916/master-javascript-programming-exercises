function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let Ngrande = null;
    let int = arr.some(num1 => typeof num1 === `number`)
    
    if (!arr.length || !int){
        return 0;
    }else{
        for (let i of arr){
            if (typeof i === `number` && (Ngrande === null || i > Ngrande)){
                Ngrande = i;
            }
        }
    }
    return Ngrande;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
