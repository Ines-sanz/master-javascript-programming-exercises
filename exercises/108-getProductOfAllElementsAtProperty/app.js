function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key]) || obj[key].length === 0) return 0
    let product = obj[key].reduce((a, b) => a * b, 1)
    return product
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
