const { readIntArray } = require("../utils");

function day01_1(input) {
  return input.reduce(
    (acc, curr, index, arr) =>
      acc + (index > 0 && curr > arr[index - 1] ? 1 : 0),
    0
  );
}

function day01_2(input) {
  if (input.length < 3) return 0;
  let sum = input[0] + input[1] + input[2];
  let count = 0;
  for (let a = 1, b = 2, c = 3; c < input.length; a++, b++, c++) {
    count += input[a] + input[b] + input[c] > sum ? 1 : 0;
    sum = input[a] + input[b] + input[c];
  }
  return count;
}

function day01Run(fileName) {
  const input = readIntArray(fileName);
  console.log(day01_1(input));
  console.log(day01_2(input));
}

day01Run("./src/day01/data.txt");

module.exports = { day01_1, day01_2 };
