function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    let resul;
    if (!arr || !Array.isArray(arr) || !arr.length){
      return [];
    }else{
      resul = Math.max(...arr);
    }
    return resul;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
