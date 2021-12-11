const { readArray } = require("../utils");

function day08_1(input) {
  return input
    .flatMap((line) => line.split("|")[1].trim().split(" "))
    .map((seg) => seg.length)
    .filter((seg) => [2, 3, 4, 7].includes(seg)).length;
}

function process(line) {
  const codes = new Map([
    ["tuvxyz", 0],
    ["vy", 1],
    ["tvwxz", 2],
    ["tvwyz", 3],
    ["uvwy", 4],
    ["tuwyz", 5],
    ["tuwxyz", 6],
    ["tvy", 7],
    ["tuvwxyz", 8],
    ["tuvwyz", 9],
  ]);
  const [incode, outcodes] = line.split(" | ");
  const incodeSorted = incode
    .split(" ")
    .map((code) => code.split("").sort().join(""))
    .sort((a, b) => a.length - b.length);
  const outcodeSorted = outcodes
    .split(" ")
    .map((code) => code.split("").sort().join(""));

  const frequencies = incode.split("").reduce((acc, char) => {
    if (char !== " ") {
      acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
  }, {});

  const resultMapping = new Map();
  const twoLetter = incodeSorted[0];

  const symbolMap = new Map();
  if (frequencies[twoLetter[0]] === 9) {
    symbolMap.set(twoLetter[0], "y");
    symbolMap.set(twoLetter[1], "v");
  } else {
    symbolMap.set(twoLetter[0], "v");
    symbolMap.set(twoLetter[1], "y");
  }

  resultMapping.set(
    twoLetter,
    `${symbolMap.get(twoLetter[0])}${symbolMap.get(twoLetter[1])}`
  );

  const eights = Object.entries(frequencies).filter(([, value]) => value === 8);
  if (symbolMap.has(eights[0][0])) {
    symbolMap.set(eights[1][0], "t");
  } else {
    symbolMap.set(eights[0][0], "t");
  }

  const sixes = Object.entries(frequencies).find(([, value]) => value === 6);
  symbolMap.set(sixes[0], "u");

  const fours = Object.entries(frequencies).find(([, value]) => value === 4);
  symbolMap.set(fours[0], "x");

  const sevens = Object.entries(frequencies).filter(([, value]) => value === 7);
  const four = incodeSorted[2];

  if (four.includes(sevens[0][0])) {
    symbolMap.set(sevens[0][0], "w");
    symbolMap.set(sevens[1][0], "z");
  } else {
    symbolMap.set(sevens[1][0], "w");
    symbolMap.set(sevens[0][0], "z");
  }

  const ans = outcodeSorted
    .map((code) =>
      code
        .split("")
        .map((c) => symbolMap.get(c))
        .sort()
        .join("")
    )
    .map((code) => codes.get(code))
    .reduce((acc, curr, index) => acc + curr * Math.pow(10, 3 - index), 0);

  return ans;
}

function day08_2(input) {
  const symbols = new Map([
    ["t", 8],
    ["u", 6],
    ["v", 8],
    ["w", 7],
    ["x", 4],
    ["y", 9],
    ["z", 7],
  ]);

  const values = input.map(process);
  return values.reduce((acc, value) => acc + value, 0);
}

function day08Run(fileName) {
  const input = readArray(fileName);
  console.log(day08_1(input));
  console.log(day08_2(input));
}

day08Run("./src/day08/data.txt");

module.exports = { day08_1, day08_2 };
