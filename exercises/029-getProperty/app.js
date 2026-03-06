let car = {
    model : `Toyota`
};

let output = getProperty(car, `model`)
function getProperty(obj,key) {
  // your code here
  let marca = obj[key];
  return marca
}
console.log(output)