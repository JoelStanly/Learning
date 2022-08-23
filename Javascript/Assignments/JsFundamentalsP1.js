// Values and Variables

let country = "India";
let continent = "Asia";
let population = 1380;
console.log(country,continent,population);

// Data Types

let isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

// let, const, var
language = "Tamil";
const COUNTRY = country;
/*COUNTRY = "Singapore";
TypeError: Assignment to constant variable.
*/

// Basic Operators
console.log("Half Population: " + population/2 + " million");
population++;
console.log("Population + 1: " + population + " million");
population--;
let finland = 6;
if(population>finland) console.log("My country population is higher than finland");
let averagePopulation = 33;
if(population>averagePopulation) console.log("My country population is higher than average country population count");
let description = country +" is in " + continent + ", and its " + population + " million people doesn't speak portuguese";

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people does not speak portuguese`;

// Taking Decisions: if/else Statements

//population = 13;
//population = 130;
if(population>averagePopulation){
    console.log(`${country}'s population is above average`);
}
else{
    console.log(`${country}'s population is ${averagePopulation-population} million below average`);
}

// Type Conversion and Coercion
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// Equality Operators: == vs. ===

//let numNeighbours = prompt('How many neighbour countries does your country have?');

//let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
let numNeighbours = 5;
//if(numNeighbours === 1){

if(numNeighbours == 1){
    console.log('Only 1 border!');
}
else if(numNeighbours > 1){
    console.log(`More than 1 border' in case`);
}
else{
    console.log(`No borders`);
}

// Logical Operators
if(population<50 && language==="English"){
    console.log(`You should live in ${country}:)`);
}
else{
    console.log(`${country} does not meet your criteria:(`);
}

// The switch Statement
switch(language){
    case "chinese":
        console.log('MOST number of native speakers!');
        break;
    case "mandarin":
        console.log('MOST number of native speakers!');
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log("Great language too :D");
        break;
}

// The Conditional(Ternary) Operator

//population = 13;
//population = 130;

console.log(`${country}'s population is ${population>averagePopulation?"above":"below"} average`)