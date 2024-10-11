// Write your function here
function getLastElementOfProperty (obj,key){
    if (!Array.isArray(obj[key]) || !obj[key]) return undefined
    else return obj[key][obj[key].length -1]
}