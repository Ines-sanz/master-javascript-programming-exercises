function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let taxes = preTaxAndTipAmount * 0.095
    let tip = preTaxAndTipAmount * 0.15
    return preTaxAndTipAmount + tip + taxes
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
