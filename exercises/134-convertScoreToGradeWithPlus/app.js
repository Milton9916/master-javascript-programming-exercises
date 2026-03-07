function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let ultimo = score % 10;
    if(score <= 100 && score >= 90){
        if (score === 100){
            return `A+`
        }else if (ultimo >= 8 && ultimo <= 9){
            return `A+`
        }else if (ultimo >= 0 && ultimo <= 2 ) {
            return `A-`
        }else{
            return `A`
        }
        
    }else if(score <= 89 && score >= 80){
        if (ultimo >= 0 && ultimo <= 2 ){
            return `B-`
        }else if (ultimo >= 8 && ultimo <= 9){
            return `B+`
        }else{
            return `B`
        }
    }else if(score <= 79 && score >= 70){
        if (ultimo >= 0 && ultimo <= 2 ){
            return `C-`
        }else if (ultimo >= 8 && ultimo <= 9){
            return `C+`
        }else{
            return `C`
        }
    }else if(score <= 69 && score >= 60){
        if (ultimo >= 0 && ultimo <= 2 ){
            return `D-`
        }else if (ultimo >= 8 && ultimo <= 9){
            return `D+`
        }else{
            return `D`
        }
    }else if(score <= 59 && score >= 0){
        return `F`
    }else{
        return `INVALID SCORE`
    }
}

let output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'
