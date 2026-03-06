let person={
  firstName: `Jade`,
  lastName: `Smith`
};
addFullNameProperty(person);
function addFullNameProperty(obj) {
  // Add your code after this line
    let nuevoobj = {...obj}
    let nam1 = obj.lastName;
    let nam2 = obj.firstName;
    let unir = nam2 + " " + nam1;
    
    nuevoobj.fullName=unir;


    return  nuevoobj
};

let person2 = addFullNameProperty(person);
console.log(person2.fullName)
console.log(person.fullName)
