const { readIntArray } = require("../utils");

function day06_1(input) {
  const fish = [...input];
  for (let i = 1; i <= 80; i++) {
    const newFish = [];
    for (let j = 0; j < fish.length; j++) {
      const f = fish[j];
      if (f === 0) {
        newFish.push(8);
        fish[j] = 6;
      } else {
        fish[j] = f - 1;
      }
    }
    fish.push(...newFish);
    //console.log(`After ${i} day: ${fish.join(", ")}`);
  }
  return fish.length;
}

class Fish {
  constructor(timer, day) {
    this.timer = timer;
    this.day = day;
  }
}

const lookup = new Map();
const max = 256;

function spawn(day) {
  if (lookup.has(day)) {
    return lookup.get(day);
  }

  if (day >= max) {
    return 0;
  }

  let count = 1;
  for (let i = day + 9; i < max; i += 7) {
    count += spawn(i);
  }

  lookup.set(day, count);
  return count;
}

function day06_2(input) {
  const fish = input.map((f) => new Fish(f, 0));
  let count = fish.length;

  while (fish.length > 0) {
    const f = fish.shift();
    for (let i = f.day + f.timer; i < max; i += 7) {
      count += spawn(i);
    }
  }
  return count;
}

function day06Run(fileName) {
  const input = readIntArray(fileName, ",");
  console.log(day06_1(input));
  console.log(day06_2(input));
}

day06Run("./src/day06/data.txt");

module.exports = { day06_1, day06_2 };
