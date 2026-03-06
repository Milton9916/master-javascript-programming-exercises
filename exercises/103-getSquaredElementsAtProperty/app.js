function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    let resul;
    if (!arr || !arr === 0 || !Array.isArray(arr) ){
      return [];
    }else{
      resul = arr.map(ele => ele ** 2)
    }
    return resul
}
let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
