function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((num1 , num2) => num1 + num2,0)
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
