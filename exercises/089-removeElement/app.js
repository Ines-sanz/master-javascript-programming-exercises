// Write your function here
function removeElement (array, discarder){
    let newArray = array.filter(element => element != discarder)
    return newArray
}