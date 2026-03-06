function removeEvenValues(obj) {
    // your code here
    let num;
    for (num in obj){
      if (obj[num] % 2 === 0){
        delete obj[num]
      }
    }
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
