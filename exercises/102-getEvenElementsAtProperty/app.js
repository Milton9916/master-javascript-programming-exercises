function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !obj[key] === 0 || !Array.isArray(obj[key])){
      return [];
    }else{
      return obj[key].filter(par => par % 2 === 0)
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
