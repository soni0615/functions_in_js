function calculateTax(income){
    let incomeinRs=income.toLocaleString()
    if(income <= 250000){ return "Your income is Rs."+incomeinRs+" "+"Your tax based upon on your income is 0% You don't have to pay anything" }
else if(income>=250001 && income <= 300000) {return "Your income is Rs."+incomeinRs+" "+"Your tax based upon on your income 5% You have to pay Rs."+" "+Math.round(income*0.5/10)}
else if(income>=300001 && income <= 500000) {return "Your income is Rs."+incomeinRs+" "+"Your tax based upon on your income 7% You have to pay Rs."+Math.round(income*0.7/10)}
else if(income>=500001 && income <= 1000000) {return "Your income is Rs."+incomeinRs+" "+"Your tax based upon on your income 20% You have to pay Rs."+Math.round(income*2/10)}
else{return "Your income is Rs."+incomeinRs+" "+"Your tax based upon on your income 30% You have to pay Rs."+Math.round(income*3/10)}
}
console.log(calculateTax(300002));