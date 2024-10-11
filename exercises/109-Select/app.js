// Write your function here
function select (arr, obj) {
    let selectedObj = {}
    arr.forEach(e => {
    if (obj[e]){
            selectedObj[e] = obj[e]
        }    
    });
    return selectedObj
}
