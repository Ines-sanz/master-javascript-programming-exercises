// Write your function here
function getOddLengthWordsAtProperty (obj, key){
    if (!Array.isArray(obj[key])) return []
    let filteredArray = obj[key].filter(element => element.length % 2 != 0)
    return filteredArray

}