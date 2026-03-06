// Write your function here
function keep (arr,elem){
    return arr.filter(item => item === elem)
};

let output = keep([1,2,3,2,1],2);
console.log(output);