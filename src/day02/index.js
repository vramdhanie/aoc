const { readArray } = require("../utils");

function processLine(line) {
  const [dir, dist] = line.split(" ");
  return { dir, dist };
}

function day02_1(input) {
  const position = input.map(processLine).reduce(
    (acc, curr) => {
      switch (curr.dir) {
        case "forward":
          acc.x += parseInt(curr.dist);
          break;
        case "down":
          acc.y += parseInt(curr.dist);
          break;
        case "up":
          acc.y -= parseInt(curr.dist);
          break;
      }
      return acc;
    },
    { x: 0, y: 0 }
  );
  console.log(position);
  return position.x * position.y;
}

function day02_2(input) {
  const position = input.map(processLine).reduce(
    (acc, curr) => {
      switch (curr.dir) {
        case "forward":
          acc.x += parseInt(curr.dist);
          acc.y += parseInt(curr.dist) * acc.aim;
          break;
        case "down":
          acc.aim += parseInt(curr.dist);
          break;
        case "up":
          acc.aim -= parseInt(curr.dist);
          break;
      }
      return acc;
    },
    { x: 0, y: 0, aim: 0 }
  );
  console.log(position);
  return position.x * position.y;
}

function day02Run(fileName) {
  const input = readArray(fileName);
  console.log(day02_1(input));
  console.log(day02_2(input));
}

day02Run("./src/day02/data.txt");

module.exports = { day02_1, day02_2 };
