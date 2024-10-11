function removeEvenValues(obj) {
    // your code here
  let filterArr =[]
    for(let clave in obj){
      if (obj[clave] % 2 ==0) delete(obj[clave])
    }
  return filterArr
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
