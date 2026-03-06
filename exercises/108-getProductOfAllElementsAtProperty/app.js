function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];

    if (!arr ||!Array.isArray(arr) || !arr.length ){
      return 0;
    }else{
      return arr.reduce((prod,num) => prod * num )
    }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24