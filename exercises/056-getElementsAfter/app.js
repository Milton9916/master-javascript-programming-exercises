function getElementsAfter(array, n) {
  // your code here
    let arreglo = array.slice(n+1)
    return arreglo
    

}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output)
