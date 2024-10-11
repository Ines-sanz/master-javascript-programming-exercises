// Write your function here
function getIndexOf(car, str){
    for (let i = 0; i < str.length; i++){
    if (str[i].toLowerCase() === car.toLowerCase()) return i   
} 
return -1
}
