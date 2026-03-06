function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    let min;
    if (!arr || !Array.isArray(arr) || arr.length === 0){
      return [];
    }else{
      min = Math.min(...arr)
    }
    return min
  
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
