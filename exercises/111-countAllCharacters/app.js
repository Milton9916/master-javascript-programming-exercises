// Write your function here
let output = countAllCharacters(`banana`)
function countAllCharacters (str){
    
    if (!str || !str.length){
        return {};
    }else{
        let contador = {};
        for (let letra of str){
            if (!contador[letra] || contador[letra] === undefined){
                contador[letra]=1;
            }else{
                 contador[letra]++
            }
            
        }
        return contador
    }
    
    

}

console.log(output);