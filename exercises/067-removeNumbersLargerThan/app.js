let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLargerThan(5, obj)
function removeNumbersLargerThan(num, obj) {
    // your code here
    let elimi;
    for (elimi in obj) {
        if (num < obj[elimi]){
            delete obj[elimi];
        }
    }
}

console.log(obj)