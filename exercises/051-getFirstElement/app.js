
function getFirstElement(array) {
  // Add your code after this line
  let num;
  for (i = 0; i<array.length; i++){
      num = array[0];
  }return num

}

let output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1