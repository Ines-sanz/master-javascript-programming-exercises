function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])) return []
    let filteredArray = obj[key].filter(element => parseInt(element) % 2 == 0)
    return filteredArray
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
