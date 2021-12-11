const { readArray } = require("../utils");

function parse(line) {
  const opens = ["(", "[", "{", "<"];
  const closes = [")", "]", "}", ">"];
  const maps = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
    [">", "<"],
  ]);
  const reverseMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
  ]);
  const stack = [];
  const instructions = line.split("");
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (opens.includes(instruction)) {
      stack.push(instruction);
    } else if (closes.includes(instruction)) {
      if (stack.length === 0) {
        return [instruction, ""];
      }
      const top = stack.pop();
      if (maps.get(instruction) !== top) {
        return [reverseMap.get(top), instruction];
      }
    }
  }
  if (stack.length > 0) {
    return ["", stack.pop()];
  } else {
    return ["", ""];
  }
}

function parse2(line) {
  const opens = ["(", "[", "{", "<"];
  const closes = [")", "]", "}", ">"];
  const maps = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
    [">", "<"],
  ]);
  const reverseMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
  ]);
  const stack = [];
  const instructions = line.split("");
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (opens.includes(instruction)) {
      stack.push(instruction);
    } else if (closes.includes(instruction)) {
      if (stack.length === 0) {
        return [];
      }
      const top = stack.pop();
      if (maps.get(instruction) !== top) {
        return [];
      }
    }
  }
  if (stack.length > 0) {
    return stack.reverse().map((c) => reverseMap.get(c));
  } else {
    return [];
  }
}

function day10_1(input) {
  const costs = new Map([
    [")", 3],
    ["]", 57],
    ["}", 1197],
    [">", 25137],
  ]);
  const result = input
    .map(parse)
    .filter(([a, b]) => a !== "")
    .map(([a, b]) => costs.get(b))
    .reduce((a, b) => a + b, 0);
  return result;
}

function calculateCost(seq) {
  const costs = new Map([
    [")", 1],
    ["]", 2],
    ["}", 3],
    [">", 4],
  ]);

  return seq.reduce((a, b) => a * 5 + costs.get(b), 0);
}
function day10_2(input) {
  const result = input
    .map(parse2)
    .filter((a) => a.length > 0)
    .map(calculateCost)
    .sort((a, b) => a - b);
  //.reduce((a, b) => a + b, 0);
  return result[Math.floor(result.length / 2)];
}

function day10Run(fileName) {
  const input = readArray(fileName);

  console.log(day10_1(input));
  console.log(day10_2(input));
}

day10Run("./src/day10/data.txt");

module.exports = { day10_1, day10_2 };
