function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let auxArr = arr.filter(e => typeof e === 'number')
    if (auxArr.length == 0) return 0

    let maxNumber = -Infinity
    for (let e of auxArr){
        if (e > maxNumber) maxNumber = e
    }
   return maxNumber
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
