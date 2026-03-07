function multiplyBetween(num1, num2) {
    // your code here
    let multiplicacion = 1;
    if (num2 < num1){
        return 0;
    }else {
        for (i = num1; i< num2; i++){
            
            multiplicacion = i * multiplicacion
        }
    }
    
    return multiplicacion;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
