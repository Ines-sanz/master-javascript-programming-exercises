function getSmallestElementAtProperty(obj, key) {
    // your code here
  if (!Array.isArray(obj[key]) || obj[key].length ===0) return []
  let smalest = Math.min(...obj[key])
  return smalest
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
