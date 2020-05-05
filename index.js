const result = calculateBill();

function calculateBill(price,vat,tips) {
    if (Number.isInteger(vat) && Number.isInteger(tips) && Number.isInteger(price)) {
    const vatFormula = price*vat/100;
    const tipsFormula = price*tips/100;
    const sum = price + vatFormula + tipsFormula;
    return `£${sum}`; 
 } else {
     return 'error';
    }
};  
module.exports = calculateBill;






