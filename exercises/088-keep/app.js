// Write your function here
function keep (arr, keeper){
    let newArray = arr.filter(element => element == keeper)
    return newArray
}
let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]