function computeFactorialOfN(n) {
    // your code here
    let factorial = 1;
    for (let i = n; i>0; i--){
        factorial = i * factorial
    
    }
    return factorial
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
