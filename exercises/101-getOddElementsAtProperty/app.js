function getOddElementsAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key])) return []
    let filteredArray = obj[key].filter(element => parseInt(element) % 2 != 0)
  return filteredArray
  }

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
