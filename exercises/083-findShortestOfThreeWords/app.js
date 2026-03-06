function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let minimo = word1;

    if (word2.length < minimo.length){
        minimo = word2;
    }

    if (word3.length < minimo.length){
        minimo = word3;
    }
    return minimo;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
