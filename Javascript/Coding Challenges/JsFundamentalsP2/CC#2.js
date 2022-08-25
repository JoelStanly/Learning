const calcTip = (bill) => {
    return bill>=50 && bill<=300 ? bill*.15 : bill*.2
};

let bills = new Array(125,555,44);
let tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));
let total = new Array(tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]);
console.log(bills,tips,total);