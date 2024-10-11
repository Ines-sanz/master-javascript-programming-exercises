function filterEvenLengthWords(words) {
    // your code here
    let filteredArray = words.filter(element => element.length % 2 == 0)
    return filteredArray
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
