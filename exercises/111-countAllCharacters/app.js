// Write your function here
function countAllCharacters (str){
    if(str.length ==0) return {}
    
    let newObj = {}

   for(let e in str) {
        if (newObj[str[e]]) {newObj[str[e]] += 1}
       else newObj[str[e]] = 1
    };

    return newObj
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}