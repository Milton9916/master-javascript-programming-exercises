function countCharacter(str, char) {
    // your code here
        let conteo;
        let suma = 0;
        for (let i = 0; i<str.length; i++){
            conteo = str[i]
           if (conteo === char){
                suma++
           }

        }return suma
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
