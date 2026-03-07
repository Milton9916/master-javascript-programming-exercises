function sumDigits(num) {
    // your code here
    let esNegativo = num < 0;
    num = Math.abs(num);
    let texto = String(num)
    let suma = 0;

    for (let i=0; i < texto.length; i++){
        let digito = Number(texto[i]);
        
        if(esNegativo && i === 0){
            suma = suma - digito
        }else{
            suma = suma + digito
        }
    }
    return suma
}

let output = sumDigits(-316);
console.log(output); // --> 4
