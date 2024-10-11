function removeArrayValues(obj) {
    // your code here
    for ( let clave in obj){
        if (Array.isArray(obj[clave])) delete(obj[clave])
    }
return obj
}
