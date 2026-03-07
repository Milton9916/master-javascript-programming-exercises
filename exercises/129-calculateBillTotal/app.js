function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let impuesto = 0.095;
    let propina = 0.15;

    let impu1 = impuesto * preTaxAndTipAmount;

    let propina1 = preTaxAndTipAmount * propina;

    let resultado = impu1 + propina1 + preTaxAndTipAmount;
    
    return resultado
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
