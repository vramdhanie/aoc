const { readArray } = require("../utils");

function processLine(line) {
  const [code, password] = line.split(":").map((s) => s.trim());
  const [policy, char] = code.split(" ");
  const [min, max] = policy.split("-").map((s) => parseInt(s));
  const charCount = password.split("").filter((c) => c === char).length;
  return charCount >= min && charCount <= max;
}

function processPolicy(line) {
  const [code, password] = line.split(":").map((s) => s.trim());
  const [policy, char] = code.split(" ");
  const [min, max] = policy.split("-").map((s) => parseInt(s));
  const first = password.charAt(min - 1) === char;
  const second = password.charAt(max - 1) === char;
  return first ? !second : second;
}

function day02_1(input) {
  return input.filter(processLine).length;
}

function day02_2(input) {
  return input.filter(processPolicy).length;
}

function day02Run(fileName) {
  const input = readArray(fileName);
  console.log(day02_1(input));
  console.log(day02_2(input));
}

day02Run("./src/2020_day02/data.txt");

module.exports = {
  day02_1,
  day02_2,
};
