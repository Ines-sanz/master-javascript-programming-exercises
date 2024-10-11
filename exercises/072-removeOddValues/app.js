function removeOddValues(obj) {
    // your code here
    for (let clave in obj){
      if (obj[clave]%2 != 0) delete(obj[clave])
    }

}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
