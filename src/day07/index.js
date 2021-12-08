const { readIntArray } = require("../utils");

function day07_1(input) {
  const sorted = input.sort((a, b) => a - b);

  const n = input.length;
  const m = sorted[n - 1] + 1;
  const table = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      table[j] = table[j] + Math.abs(sorted[i] - j);
    }
  }

  return table.reduce((a, b) => (a > b ? b : a), Number.POSITIVE_INFINITY);
}

function day07_2(input) {
  const sorted = input.sort((a, b) => a - b);

  const n = input.length;
  const m = sorted[n - 1] + 1;
  const table = new Array(m).fill(0);
  const costs = new Array(m).fill(0);
  for (let i = 1; i < m; i++) {
    costs[i] = costs[i - 1] + i;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      table[j] = table[j] + costs[Math.abs(sorted[i] - j)];
    }
  }

  return table.reduce((a, b) => (a > b ? b : a), Number.POSITIVE_INFINITY);
}

function day07Run(fileName) {
  const input = readIntArray(fileName, ",");
  console.log(day07_1(input));
  console.log(day07_2(input));
}

day07Run("./src/day07/data.txt");

module.exports = { day07_1, day07_2 };
