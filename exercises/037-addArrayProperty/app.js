let myObj = {
  
};
let myArray = [1,3];
console.log(myObj);

addArrayProperty(myObj, `myProperty`, myArray)
function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key] = arr;
  return obj
}

console.log(myObj.myProperty);