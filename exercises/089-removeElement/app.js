// Write your function here
function removeElement (arr,elem){
    return arr.filter(item => item !== elem)
};

let output = removeElement([1,2,3,2,1], 2);
console.log(output);