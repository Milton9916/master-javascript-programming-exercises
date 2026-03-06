function average(arr2) {
  // your code here
  let total = sum(arr2)
  return total / arr2.length
}

function sum(arr1) {
  // your code here
  let resultado = arr1.reduce((num1 , num2) => num1 + num2,0)

  return resultado
}
 
console.log(average([1, 2])); // --> 1.5