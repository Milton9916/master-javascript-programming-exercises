let output = getLastElement([1,2,3,4]);

function getLastElement(array) {
  // Add your code after this line
    let num;
    for (i=0; i<array.length; i++){
        num = array[array.length - 1]
    }return num
}

console.log(output)