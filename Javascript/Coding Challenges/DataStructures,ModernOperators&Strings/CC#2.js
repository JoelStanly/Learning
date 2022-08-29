const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (let [key, value] of game.scored.entries()) {
  console.log(`Goal ${key}: ${value}`);
}

avgOdd = 0;
for (let value of Object.values(game.odds)) {
  avgOdd += value;
}
avgOdd /= Object.values(game.odds).length;
console.log(`${avgOdd}`);

for (let [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] ? `victory ${game[key]}` : "draw"} : ${value}`
  );
}

let scorers = {};

for (let value of game.scored.values()) {
  scorers[value] = scorers[value] ? scorers[value] + 1 : 1;
}

console.log(scorers);
