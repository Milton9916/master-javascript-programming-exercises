function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = obj[key];
    let arr1;
    if (!arr || !Array.isArray(arr) || !arr.length){
      return [];
    }else{
      arr1 = arr.slice(0,-1)
    }
    return arr1
    
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
