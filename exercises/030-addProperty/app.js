let myObj = {};

addProperty(myObj, `myProperty`);
function addProperty(obj, key) {
  // your code here
    obj[key] = true;
    return obj

}
console.log(myObj.myProperty);