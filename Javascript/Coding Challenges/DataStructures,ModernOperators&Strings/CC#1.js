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

let [players1, players2] = game.players;

let [gk, ...fieldPlayers] = players1;

let allPlayers = [...players1, ...players2];

let playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];

let { team1, x: draw, team2 } = game.odds;

let printGoals = (...players) => {
  console.log(`${players.length} goals were scored.`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 might win`);
team2 < team1 && console.log(`Team 2 might win`);
