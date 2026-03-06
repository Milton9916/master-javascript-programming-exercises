function getEvenLengthWordsAtProperty(obj1, key1) {
    // your code here
    let array = obj1[key1];
    let resul;
    if (!array || !Array.isArray(array) || array.length === 0){
      return [];
    }else{
       resul = array.filter(par => par.length % 2 === 0)
    }
    return resul;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
