const { readArray } = require("../utils");

function processInput(input) {
  return input.flatMap((s) => s.split("")).map((s) => parseInt(s));
}

function day03_1(input) {
  if (input.length === 0) return 0;
  const m = input[0].length;
  const n = input.length / 2;
  const data = processInput(input);
  const result = Array(m).fill(0);
  const resultOnes = Array(m).fill(0);
  const resultZeros = Array(m).fill(0);
  data.forEach((e, i) => (result[i % m] += e));
  result.forEach((e, i) =>
    e > n ? (resultOnes[i] = 1) : (resultZeros[i] = 1)
  );

  const gamma = parseInt(resultOnes.join(""), 2);
  const epsilon = parseInt(resultZeros.join(""), 2);
  return gamma * epsilon;
}

function getCounts(input) {
  if (input.length === 0) return 0;
  const m = input[0].length;
  const n = input.length / 2;
  const data = processInput(input);
  const result = Array(m).fill(0);
  const resultOnes = Array(m).fill(0);
  const resultZeros = Array(m).fill(0);
  data.forEach((e, i) => (result[i % m] += e));
  result.forEach((e, i) =>
    e > n ? (resultOnes[i] = 1) : (resultZeros[i] = 1)
  );
  return result;
}

function day03_2(input) {
  let result = getCounts(input);

  let ox = input;
  let i = 0;
  let n = input.length / 2;
  while (ox.length > 1) {
    ox = ox.filter((e) => e[i] === (result[i] >= n ? "1" : "0"));
    result = getCounts(ox);
    n = ox.length / 2;
    i++;
  }
  const oxg = parseInt(ox[0], 2);

  result = getCounts(input);

  let co = input;
  i = 0;
  n = input.length / 2;
  while (co.length > 1) {
    co = co.filter((e) => e[i] === (result[i] >= n ? "0" : "1"));
    result = getCounts(co);
    n = co.length / 2;
    i++;
  }
  const cos = parseInt(co[0], 2);
  return oxg * cos;
}

function day03Run(fileName) {
  const input = readArray(fileName);

  console.log(day03_1(input));
  console.log(day03_2(input));
}

day03Run("./src/day03/data.txt");

module.exports = { day03_1, day03_2 };
