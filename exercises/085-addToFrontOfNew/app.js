function addToFrontOfNew(arr, element) {
    // your code here
    let nuevoarr = [...arr];
    nuevoarr.unshift(element)
    return nuevoarr
}

let input = [1, 2];

let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
