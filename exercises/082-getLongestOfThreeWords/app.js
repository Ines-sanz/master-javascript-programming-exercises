function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let maxLength = Math.max( word1.length, word2.length, word3.length)
    let auxArray =[word1,word2,word3]
    for( let word of auxArray){
        if (word.length === maxLength) return word
    }
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
