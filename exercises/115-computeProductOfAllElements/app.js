function computeProductOfAllElements(arr) {
  // your code here
    if (!arr.length){
      return 0;
    }else{
      return arr.reduce((num1,num2)=> num1 * num2,1)
    }
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
