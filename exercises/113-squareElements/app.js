function squareElements(arr) {
  // your code here
  let arr1 = [];
  for (let i of arr){
    arr1.push(i**2)
  }
  return arr1
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
