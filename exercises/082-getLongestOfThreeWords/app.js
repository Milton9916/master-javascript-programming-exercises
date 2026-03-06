function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
        let larga = word1;
        if (word2.length > larga.length){
            larga = word2;
        }
        if (word3.length > larga.length){
            larga = word3;
        }

    return larga
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
