let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

/* Test Data 2
let dolphins1 = 97;
let dolphins2 = 112;
let dolphins3 = 101;

let koalas1 = 109;
let koalas2 = 95;
let koalas3 = 123;
*/

/* Test Data 3
let dolphins1 = 97;
let dolphins2 = 112;
let dolphins3 = 101;

let koalas1 = 109;
let koalas2 = 95;
let koalas3 = 106;
*/

let dolphinAverage = (dolphins1+dolphins2+dolphins3)//3
let koalasAverage = (koalas1+koalas2+koalas3)//3

if(dolphinAverage > koalasAverage){
    console.log(`Dolphin wins`);
}
else if(koalasAverage > dolphinAverage){
    console.log(`Koalas wins`);
}
else{
    console.log(`Draw`);
}

//Bonus 1
if(dolphinAverage > koalasAverage && dolphinAverage>=100){
    console.log(`Dolphin wins`);
}
else if(koalasAverage > dolphinAverage && koalasAverage>=100){
    console.log(`Koalas wins`);
}
else{
    console.log(`Draw`);
}

//Bonus 2
if(dolphinAverage > koalasAverage && dolphinAverage>=100){
    console.log(`Dolphin wins`);
}
else if(koalasAverage > dolphinAverage && koalasAverage>=100){
    console.log(`Koalas wins`);
}
else if(dolphinAverage>=100 && koalasAverage>=100){
    console.log(`Draw`);
}
else{
    console.log(`No team wins the trophy`);
}
