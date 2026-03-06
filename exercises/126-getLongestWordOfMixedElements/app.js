function getLongestWordOfMixedElements(arr) {
    // your code here
    let Pcorta = null;
    let str = arr.some(num1 => typeof num1 === `string`);

    if (!arr.length || !str){
        return ``;
    }else{
        for (let i of arr){
            if (typeof i === `string` && (Pcorta === null || i.length > Pcorta.length)){
                Pcorta = i;
            }
        }
    }
    return Pcorta
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
