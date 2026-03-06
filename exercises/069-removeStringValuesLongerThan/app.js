function removeStringValuesLongerThan(num, obj) {
  // your code here
   let objeto;
   for (objeto in obj){
    
    if (typeof obj[objeto] === "string"){
       let cont = obj[objeto].length;
        if (cont > num){
          delete obj[objeto];
        
        };
    };
   };
};

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
