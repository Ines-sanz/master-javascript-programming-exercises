function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let minLength = Math.min(word1.length, word2.length, word3.length)
    let auxArray = [word1, word2, word3]
    for (let word of auxArray){
        if (word.length === minLength) return word 
    }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
