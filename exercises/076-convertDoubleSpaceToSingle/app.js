

function convertDoubleSpaceToSingle(str) {
    // your code here
    let resultado = str.split("  ").join(" ");
    return resultado
     
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"







