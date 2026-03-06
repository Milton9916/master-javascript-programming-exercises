function getElementsUpTo(array, n) {
  // your code here
  let nuevo = array.slice(0,n)
  return nuevo
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
