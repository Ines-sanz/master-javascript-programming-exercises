function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if ( !Array.isArray(obj[key]) || obj[key].length === 0) return 0
 let total = obj[key].reduce((a,b) => a+b, 0)
 return total/obj[key].length
}