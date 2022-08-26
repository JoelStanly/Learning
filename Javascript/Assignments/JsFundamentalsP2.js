// Functions

function describeCountry(country, population, captialCity) {
  return `${country} has ${population} million people and its capital city is ${captialCity}`;
}

let string1 = describeCountry("India", 1380, "Delhi");
let string2 = describeCountry("Japan", 129, "IDK");
let string3 = describeCountry("Singapore", 10, "IDK");

console.log(string1);
console.log(string2);
console.log(string3);

// Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

let percentage1 = percentageOfWorld1(1380);
let percentage2 = percentageOfWorld1(20);
let percentage3 = percentageOfWorld1(1441);

console.log(percentage1);
console.log(percentage2);
console.log(percentage3);

let percentageOfWorld2 = function (population) {
  return (population * 100) / 7900;
};

percentage1 = percentageOfWorld2(1380);
percentage2 = percentageOfWorld2(20);
percentage3 = percentageOfWorld2(1441);

console.log(percentage1);
console.log(percentage2);
console.log(percentage3);

// Arrow Functions

let percentageOfWorld3 = (population) => {
  return (population * 100) / 7900;
};

percentage1 = percentageOfWorld3(1380);
percentage2 = percentageOfWorld3(20);
percentage3 = percentageOfWorld3(1441);

console.log(percentage1);
console.log(percentage2);
console.log(percentage3);

// Functions Calling Other Functions

let describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
};

string1 = describePopulation("India", 1380);
string2 = describePopulation("Japan", 129);
string3 = describePopulation("Singapore", 10);

console.log(string1);
console.log(string2);
console.log(string3);

// Introduction to Arrays

let populations = [1380, 129, 10, 20];
console.log(populations.length == 4);

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Basic Array Operations (Methods)

let neighbours = ["Pakistan", "Nepal", "China"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

let index = neighbours.indexOf("Pakistan");
neighbours[index] = "Afghanistan";

// Introduction to Objects

let myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1380,
  neighbours: ["Pakistan", "Nepal", "China"],
};

// Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

// Object Methods

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = neighbours.length == 0 ? true : false;
  return this.isIsland;
};

myCountry.checkIsland();

console.log(myCountry);

// Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
  console.log(`Vote number ${i} is currently voting`);
}

// Looping Arrays, Breaking and Continuing

let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// Looping Backwards and Loops in Loops

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  if (listOfNeighbours[i].length == 1) {
    continue;
  }
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// The While Loop

let percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
