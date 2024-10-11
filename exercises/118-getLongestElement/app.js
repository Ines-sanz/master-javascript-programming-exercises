function getLongestElement(arr) {
    // your code here
    if(arr.length == 0) return ''
    let maxLength = Math.max(...arr.map( e => e.length))
    for( let e in arr){
        if(arr[e].length == maxLength) return arr[e]
    }
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
