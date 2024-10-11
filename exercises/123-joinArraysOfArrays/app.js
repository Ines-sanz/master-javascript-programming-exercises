function joinArrayOfArrays(arr) {
  // your code here
  let auxArr = []
  arr.forEach(e => { auxArr = auxArr.concat(e)
  });
  return auxArr
  
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
