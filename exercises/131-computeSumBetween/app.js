function computeSumBetween(num1, num2) {
    // your code here
    let suma = null;
    if (num2 < num1){
        return 0;
    }else{
        for ( let i = num1; i<num2; i++){
            suma = i + suma;
        }
    }
    return suma
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
