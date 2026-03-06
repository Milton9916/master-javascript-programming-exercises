
let palabra = isOddLength(`Cuatro`)

function isOddLength (pala1){
    let contar = pala1.length;
    if (contar % 2 !== 0){
        return true;
    }else return false

}
console.log(palabra)