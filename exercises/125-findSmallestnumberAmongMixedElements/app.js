function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let Ncorto = null;
  let int = arr.some(num1 => typeof num1 === `number`);

  if (!arr || !int ||!Array.isArray(arr) || !arr.length){
    return 0;
  }else{
    for (let i of arr){
      if (typeof i === `number` && (Ncorto === null || i.length < Ncorto.length)){
        Ncorto = i;
      }
    }
  }
  return Ncorto

}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
