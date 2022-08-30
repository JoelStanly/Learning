const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

let events = new Set(gameEvents.values());

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${
    [...gameEvents.keys()].pop() / gameEvents.size
  } minutes`
);

for (let [key, value] of gameEvents.entries()) {
  console.log(`${key < 45 ? "[First Half]" : "[Second Half]"}${key}: ${value}`);
}
