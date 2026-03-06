
let person1 ={
  name : `Joe Blow`,
  role : `schlub`
};

let person2 = {
  name : `Mr. Burns`,
  role : `supervisor`
};
addObjectProperty(person1, 'manager', person2);
function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
    obj1[key] = obj2;
    return obj1
}

console.log(person1.manager);