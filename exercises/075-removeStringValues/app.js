function removeStringValues(obj) {
    // your code here
    for ( let clave in obj){
        if (typeof(obj[clave])=='string') delete(obj[clave])
    }
return obj
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
