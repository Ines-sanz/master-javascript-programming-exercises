function filterOddLengthWords(words) {
    // your code here
    let filteredArray = words.filter(element => 
        element.length % 2 != 0)
    return filteredArray

}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
