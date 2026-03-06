// Write your function here
function findMaxLengthOfThreeWords (una, dos, tres){
    return Math.max(una.length, dos.length, tres.length )
}

let output = findMaxLengthOfThreeWords (`a`,`be`,`see`);
console.log(output);