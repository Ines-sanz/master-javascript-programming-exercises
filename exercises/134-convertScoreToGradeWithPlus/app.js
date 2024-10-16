function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if(score > 100 || score < 0) return 'INVALID SCORE'
    if(score > 97 ) return 'A+'
    if(score > 92 ) return 'A'
    if(score > 90 ) return 'A-'
    if(score > 87) return 'B+'
    if(score > 80) return 'B'
    if(score > 82) return 'B-'
    if(score > 77) return 'C+'
    if(score > 72) return 'C'
    if(score > 70) return 'C-'
    if(score > 67) return 'D+'
    if(score > 62) return 'D'
    if(score > 60) return 'D-'
    else return 'F'
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
