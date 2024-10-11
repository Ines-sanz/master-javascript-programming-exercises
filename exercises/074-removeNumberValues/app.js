function removeNumberValues(obj) {
    // your code here
    for ( let clave in obj){
        if(typeof(obj[clave]) === 'number') delete(obj[clave])
    }
return obj
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
