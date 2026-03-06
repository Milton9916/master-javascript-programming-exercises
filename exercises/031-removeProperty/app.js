let obj = {
  name : `Sam`,
  age: 20
}
removeProperty(obj, `name`)
function removeProperty(obj, key) {
  // your code here
  delete obj[key];
}
console.log(obj.name)