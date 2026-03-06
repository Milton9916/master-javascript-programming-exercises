// Write your function here
let output = isSameLength(`words`,`super`)
function isSameLength (palabra1 , palabra2){
    let con1 = palabra1.length;
    let con2 = palabra2.length;
    if (con1 === con2){
        return true;
    }else return false

}
console.log(output);