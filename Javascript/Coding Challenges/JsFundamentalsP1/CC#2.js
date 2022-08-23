// Test Data 1

let heightMark = 1.69;
let heightJohn = 1.95;

let massMark = 78;
let massJohn = 92;

let bmiMark = massMark / (heightMark**2);
let bmiJohn = massJohn / (heightJohn**2);

if(bmiMark>bmiJohn){
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's!");
}

if(bmiMark>bmiJohn){
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
}
else{
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}

// Test Data 2

heightMark = 1.88;
heightJohn = 1.76;

massMark = 95;
massJohn = 85;

bmiMark = massMark / (heightMark**2);
bmiJohn = massJohn / (heightJohn**2);

if(bmiMark>bmiJohn){
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's!");
}

if(bmiMark>bmiJohn){
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
}
else{
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}