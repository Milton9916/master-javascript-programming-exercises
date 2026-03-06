function findShortestWordAmongMixedElements(arr) {
    // your code here
    let Mcorto = null;
    let str = arr.some(element => typeof element ===`string`)
    if (!arr || !str ){
        return ``;
    }else{
        for (let i of arr){
            if (typeof i === `string` && (Mcorto === null || i.length < Mcorto.length)){
                Mcorto = i; 
            }
            
        } 
    }
    return Mcorto
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

