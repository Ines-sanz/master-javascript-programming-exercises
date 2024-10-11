function getLargestElement(arr) {
  // your code here
  if (arr.length == 0 ) return 0
  return Math.max( ...arr.map(e => e))
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;