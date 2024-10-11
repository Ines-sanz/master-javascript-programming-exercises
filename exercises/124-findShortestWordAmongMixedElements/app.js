function findShortestWordAmongMixedElements(arr) {
    // your code here
   let stringArr = arr.filter(e => typeof e === 'string')
   if (stringArr.length === 0) return ''
   
   let minLength = Math.min(...stringArr.map(e => e.length))
   for(let e of stringArr){
   if (e.length === minLength) return e
   }
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
