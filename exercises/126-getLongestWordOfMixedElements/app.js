function getLongestWordOfMixedElements(arr) {
    // your code here
    let string = arr.filter(e => typeof e === "string")
    if (string.length === 0) return ''

    let minLength = Math.max(...string.map(e => e.length))
    for (let e of string) {
        if (e.length === minLength) return e
        }
 }

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
