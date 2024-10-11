// Write your function here
function getElementsGreaterThan10AtProperty (obj, key){
    if (!Array.isArray(obj[key])) return []
    let filteredArray = obj[key].filter(element => element > 10)
    return filteredArray
}