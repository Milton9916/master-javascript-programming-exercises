function removeFromFrontOfNew(arr) {
    // your code here
    let nuevoarr = [...arr]
    nuevoarr.shift()
    return nuevoarr
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
