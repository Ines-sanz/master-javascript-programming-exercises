function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])) return []
    let filteredArray = obj[key].filter(element => element.length % 2 == 0)
    return filteredArray
  }

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
