let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLessThan(5, obj);
function removeNumbersLessThan(num, obj) {
    // your code here
    let eliminar;
    for (eliminar in obj){
        if (obj[eliminar] < num){
            delete obj[eliminar]
        }
        
    }

}

console.log(obj)