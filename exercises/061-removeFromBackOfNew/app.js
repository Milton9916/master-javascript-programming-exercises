function removeFromBackOfNew(arr) {
  // your code here
  let nuevoarr = [...arr];
  nuevoarr.pop();
  return nuevoarr
  
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
