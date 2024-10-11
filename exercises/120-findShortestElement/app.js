function findShortestElement(arr) {
    // your code here
    if(arr.length === 0) return ''

    let minLength = Math.min(...arr.map(e => e.length))
    for( let e in arr){
        if(arr[e].length = minLength) return arr[e]
    }
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'