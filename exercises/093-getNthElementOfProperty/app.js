// Write your function here
function getNthElementOfProperty (obj, key, nth){
    if ( !Array.isArray(obj[key]) || !obj[key]) return undefined
    else return obj[key][nth]
}