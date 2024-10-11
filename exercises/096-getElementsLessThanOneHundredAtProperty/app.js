// Write your function here
function getElementsLessThan100AtProperty (obj, key){
    if ( !Array.isArray(obj[key]) || !obj[key]) return []
    let filteredArray = obj[key].filter(element => element < 100)
    return filteredArray
}