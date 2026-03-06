function removeOddValues(obj) {
    // your code here
  let impar;
  for (impar in obj){
    if (obj[impar] % 2 !==0 )
      delete obj[impar];
  };return obj
};

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
