function getOddElementsAtProperty(obj1, key1) {
    // your code here
    let arreglo = obj1[key1];
    if (!arreglo || !arreglo === 0 || !Array.isArray(arreglo) ){
      return []
    }else{
      return arreglo.filter(impar => impar % 2 !== 0)
    }
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
