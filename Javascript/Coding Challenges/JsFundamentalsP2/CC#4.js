const calcTip = (bill) => {
    return bill>=50 && bill<=300 ? bill*.15 : bill*.2;
};

const calcAverage = (arr) => {
    let totalValue = 0;
    for(let i=0;i<arr.length;i++){
        totalValue = totalValue +arr[i];
    }
    return totalValue/arr.length;
};

let bills = new Array(22,295,176,440,37,105,10,1100,86,52);
let tips = [];
let totals = [];

for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}
console.log(bills,tips,totals);
console.log(calcAverage(totals));