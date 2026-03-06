let obj = {
  key : [1,2,3]
};
let output = getAverageOfElementsAtProperty(obj, `key`)
function getAverageOfElementsAtProperty(obj1, key1) {
  // your code here
    let array = obj1[key1];
    let i = 0;
    let resul = 0;

    if (!array || !Array.isArray(array) || array.length === 0){
      return 0;
    }else{
      for (i of array){
      resul += i
      }
    }
    return resul / array.length



    
}

console.log(output);