function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let numbers = arr.filter(e => typeof e === 'number')
  if (numbers.length === 0) return 0

  return Math.min(...numbers.map(e => e))
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
