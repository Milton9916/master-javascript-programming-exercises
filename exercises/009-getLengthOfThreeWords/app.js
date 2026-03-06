function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let con1 = word1.length;
  let con2 = word2.length;
  let con3 = word3.length;
  return con1 + con2 + con3

}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
