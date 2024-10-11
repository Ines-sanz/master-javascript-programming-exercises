// Write your function here
function getElementsThatEqual10AtProperty (obj, key){
    if(!Array.isArray(obj[key]) || !obj[key]) return []
    let filteredArray = obj[key].filter(element => element == 10)
    return filteredArray
}